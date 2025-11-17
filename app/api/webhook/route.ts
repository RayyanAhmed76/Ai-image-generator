
import Stripe from "stripe";
import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// In-memory idempotency (Dev only)
const processedEvents = new Set<string>();

// Safety: Stripe must exist or fail gracefully
if (!stripeSecret) {
  throw new Error("STRIPE_SECRET_KEY is missing in environment variables.");
}

//  DO NOT set apiVersion — let Stripe SDK decide
const stripe = new Stripe(stripeSecret);

export async function POST(req: Request) {
  if (!webhookSecret) {
    console.error(" Missing STRIPE_WEBHOOK_SECRET");
    return NextResponse.json({ error: "Webhook secret missing" }, { status: 500 });
  }

  // Stripe needs raw body, not parsed JSON
  const rawBody = Buffer.from(await req.arrayBuffer());
  const signature = req.headers.get("stripe-signature") ?? "";

  let event: Stripe.Event;

  //  Verify signature
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (err: any) {
    console.error("Webhook signature verification FAILED:", err?.message || err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // IDEMPOTENCY CHECK — Prevent duplicate processing
  if (processedEvents.has(event.id)) {
    console.log(" Duplicate event received, skipping:", event.id);
    return NextResponse.json({ received: true }, { status: 200 });
  }

  //  Main event handler
  try {
    switch (event.type) {
      // First-time subscription or one-time purchase
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("checkout.session.completed:", session.id);
        
        const userId = session.metadata?.userId;
        if (!userId) {
          console.error("No userId in session metadata");
          break;
        }

        // Get subscription details
        const subscriptionId = session.subscription as string | null;
        const customerId = session.customer as string | null;
        const amountTotal = (session.amount_total || 0) / 100; // Convert from cents

        try {
          // Update user subscription status
          await prisma.user.update({
            where: { id: userId },
            data: {
              isSubscribed: true,
              subscriptionId: subscriptionId || null,
            },
          });

          // Check if payment record already exists (idempotency)
          const existingPayment = await prisma.payment.findUnique({
            where: { stripeSessionId: session.id },
          });

          if (!existingPayment) {
            // Store payment record
            await prisma.payment.create({
              data: {
                userId,
                stripeSessionId: session.id,
                stripeCustomerId: customerId || null,
                amount: amountTotal,
                currency: session.currency || "usd",
                status: "completed",
                subscriptionId: subscriptionId || null,
              },
            });
            console.log("Payment record  created");
          } else {
            console.log("ℹ️ Payment record already exists, skipping creation");
          }

          console.log("User subscription activated and payment recorded");
        } catch (err: any) {
          console.error("Error processing checkout.session.completed:", err);

          if (err?.code === "P2002") {
            console.error("Duplicate payment record detected (this is okay)");
          } else {
            console.error("Unexpected error:", err);
          }
        }
        break;
      }

      // Recurring subscription payment success
      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice & Record<string, any>;
        const subscriptionId = typeof invoice.subscription === "string"
          ? invoice.subscription
          : invoice.subscription?.id ?? null;
        const customerId = invoice.customer as string | null;
        const amount = (invoice.amount_paid || 0) / 100;

        console.log(" invoice.paid:", invoice.id);

        if (subscriptionId) {
          try {
            // Find user by subscription ID
            const user = await prisma.user.findFirst({
              where: { subscriptionId },
            });

            if (user) {
              // Check if payment record already exists (idempotency)
              const existingPayment = await prisma.payment.findUnique({
                where: { stripeSessionId: `invoice_${invoice.id}` },
              });

              if (!existingPayment) {
                // Store payment record for renewal
                await prisma.payment.create({
                  data: {
                    userId: user.id,
                    stripeSessionId: `invoice_${invoice.id}`,
                    stripeCustomerId: customerId || null,
                    amount,
                    currency: invoice.currency || "usd",
                    status: "completed",
                    subscriptionId,
                  },
                });
                console.log("Renewal payment record created");
              } else {
                console.log("ℹ️ Renewal payment record already exists, skipping creation");
              }

              // Ensure subscription is still active
              await prisma.user.update({
                where: { id: user.id },
                data: { isSubscribed: true },
              });

              console.log("Subscription renewal recorded");
            }
          } catch (err) {
            console.error("Error processing invoice.paid:", err);
          }
        }
        break;
      }

      // Recurring subscription payment failed
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice & Record<string, any>;
        const subscriptionId = typeof invoice.subscription === "string"
          ? invoice.subscription
          : invoice.subscription?.id ?? null;
        console.log("invoice.payment_failed:", invoice.id);

        if (subscriptionId) {
          try {
            const user = await prisma.user.findFirst({
              where: { subscriptionId },
            });

            if (user) {
              // Check if payment record already exists (idempotency)
              const existingPayment = await prisma.payment.findUnique({
                where: { stripeSessionId: `invoice_${invoice.id}` },
              });

              if (!existingPayment) {
                // Store failed payment record
                await prisma.payment.create({
                  data: {
                    userId: user.id,
                    stripeSessionId: `invoice_${invoice.id}`,
                    stripeCustomerId: invoice.customer as string | null,
                    amount: (invoice.amount_due || 0) / 100,
                    currency: invoice.currency || "usd",
                    status: "failed",
                    subscriptionId,
                  },
                });
                console.log("Failed payment record created");
              } else {
                console.log("ℹ️ Failed payment record already exists, skipping creation");
              }

              console.log("Failed payment recorded for user:", user.id);
            }
          } catch (err) {
            console.error("Error processing invoice.payment_failed:", err);
          }
        }
        break;
      }

      // Subscription cancelled (customer or Stripe)
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        console.log("Subscription canceled:", subscription.id);

        try {
          const user = await prisma.user.findFirst({
            where: { subscriptionId: subscription.id },
          });

          if (user) {
            await prisma.user.update({
              where: { id: user.id },
              data: {
                isSubscribed: false,
                subscriptionId: null,
              },
            });

            console.log("User subscription deactivated");
          }
        } catch (err) {
          console.error("Error processing customer.subscription.deleted:", err);
        }
        break;
      }

      default:
        console.log("ℹ️ Unhandled event:", event.type);
        break;
    }

    //Mark event as processed (idempotency)
    processedEvents.add(event.id);

  } catch (err) {
    console.error("Error handling webhook event:", err);
    return NextResponse.json({ error: "handler error" }, { status: 500 });
  }

  
  return NextResponse.json({ received: true }, { status: 200 });
}
