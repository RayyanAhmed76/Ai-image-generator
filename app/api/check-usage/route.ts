// app/api/check-usage/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getCurrentUser, getUserUsageCount } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";

const FREE_TRIES_LIMIT = 2;

const stripe =
  process.env.STRIPE_SECRET_KEY && process.env.STRIPE_SECRET_KEY.length > 0
    ? new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2022-11-15" as any,
      })
    : null;

type SubscriptionShape = {
  status?: string | null;
  current_period_end?: number | string | null;
  trial_end?: number | string | null;
  plan_name?: string | null;
};

export async function GET(req: NextRequest) {
  try {
    const user = await getCurrentUser(req);

    if (!user) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const usageCount = await getUserUsageCount(user.id);
    // default isSubscribed is from user flag, but we'll reconcile with Stripe/subscription below
    let isSubscribed = !!(user as any).isSubscribed;

    // finding latest payment row of current user (contains stripeCustomerId, subscriptionId, etc.)
    let lastPayment = null;
    try {
      lastPayment = await prisma.payment.findFirst({
        where: { userId: user.id },
        orderBy: { createdAt: "desc" },
      });
    } catch (err) {
      console.warn(
        "prisma.payment lookup failed — check model name and migration",
        err
      );
      lastPayment = null;
    }

    const dbSubscriptionId =
      (lastPayment as any)?.subscriptionId ||
      (lastPayment as any)?.subscription_id ||
      (user as any).subscriptionId ||
      (user as any).subscription_id ||
      null;

    const dbCustomerId =
      (lastPayment as any)?.stripeCustomerId ||
      (lastPayment as any)?.stripe_customer_id ||
      (user as any).stripeCustomerId ||
      (user as any).stripe_customer_id ||
      null;

    let subscription: SubscriptionShape | null = null;

    // If we have a db subscription id and stripe configured, try to retrieve that subscription directly
    if (stripe && dbSubscriptionId) {
      try {
        // retrieve subscription from stripe
        const stripeSub = await stripe.subscriptions.retrieve(
          dbSubscriptionId as string,
          {
            expand: ["items.data.price"],
          }
        );
        const anySub = stripeSub as any;

        const status = anySub.status ?? null;
        const subscribedFlag = status === "active" || status === "trialing";

        const price = anySub.items?.data?.[0]?.price;

        subscription = {
          status: status,
          current_period_end:
            typeof anySub.current_period_end === "number"
              ? anySub.current_period_end
              : anySub.current_period_end ?? null,
          trial_end: anySub.trial_end ?? null,
          plan_name: subscribedFlag ? price?.nickname || "PRO" : "Free",
        };

        // mark subscribed if subscription is active or trialing
        isSubscribed = subscribedFlag;
      } catch (err) {
        console.warn(
          "stripe.subscriptions.retrieve failed for dbSubscriptionId",
          dbSubscriptionId,
          err
        );
        subscription = null;
      }
    }

    // If still no subscription and we have a customer id and stripe configured, list subscriptions for customer
    if (!subscription && stripe && dbCustomerId) {
      try {
        const subs = await stripe.subscriptions.list({
          customer: dbCustomerId,
          status: "all",
          expand: ["data.items.data.price"],
          limit: 10,
        });

        const pick =
          subs.data.find(
            (s) => s.status === "active" || s.status === "trialing"
          ) ||
          subs.data[0] ||
          null;

        if (pick) {
          const anyPick = pick as any;
          const status = anyPick.status ?? null;
          const subscribedFlag = status === "active" || status === "trialing";
          const price = anyPick.items?.data?.[0]?.price;

          subscription = {
            status: status,
            current_period_end:
              typeof anyPick.current_period_end === "number"
                ? anyPick.current_period_end
                : anyPick.current_period_end ?? null,
            trial_end: anyPick.trial_end ?? null,
            plan_name: subscribedFlag ? price?.nickname || "PRO" : "Free",
          };

          isSubscribed = subscribedFlag;
        }
      } catch (err) {
        console.warn(
          "stripe.subscriptions.list failed for customer",
          dbCustomerId,
          err
        );
      }
    }

    if (!subscription) {
      if ((user as any).subscription) {
        const stored = (user as any).subscription as SubscriptionShape;
        const status = stored?.status ?? null;
        const subscribedFlag = status === "active" || status === "trialing";

        subscription = {
          status: status,
          current_period_end: stored?.current_period_end ?? null,
          trial_end: stored?.trial_end ?? null,
          plan_name: subscribedFlag ? stored?.plan_name || "PRO" : "Free",
        };
        isSubscribed = subscribedFlag || !!(user as any).isSubscribed;
      } else {
        subscription = (user as any).isSubscribed
          ? {
              status: "active",
              current_period_end: null,
              trial_end: null,
              plan_name: "PRO",
            }
          : {
              status: "none",
              current_period_end: null,
              trial_end: null,
              plan_name: "Free",
            };
        isSubscribed = !!(user as any).isSubscribed;
      }
    }

    const canUse = isSubscribed || usageCount < FREE_TRIES_LIMIT;
    const limitReached = !isSubscribed && usageCount >= FREE_TRIES_LIMIT;

    return NextResponse.json({
      authenticated: true,
      isSubscribed,
      usageCount,
      canUse,
      limitReached,
      username: user.username,
      email: user.email,
      subscription,

      _debug: {
        dbSubscriptionId,
        dbCustomerId,
        lastPaymentId: (lastPayment as any)?.id ?? null,
      },
    });
  } catch (error) {
    console.error("Error checking usage:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
