import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "../../../lib/prisma";
import { getCurrentUser } from "../../../lib/auth";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: ("2022-11-15" as any)
});

export async function POST(req: NextRequest) {
  try {
    const user = await getCurrentUser(req);
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    
    const lastPayment = await prisma.payment.findFirst({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" }
    });

    if (!lastPayment) {
      return NextResponse.json({
        error: "No payment record found for this user."
      }, { status: 400 });
    }

    const customerId = lastPayment.stripeCustomerId;

    if (!customerId) {
      return NextResponse.json({
        error: "No Stripe customerId in last payment row."
      }, { status: 400 });
    }

    const origin =
      req.headers.get("origin") ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000";


    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${origin}/account`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("create-portal-session error:", err);
    return NextResponse.json(
      { error: "Failed to create portal session" },
      { status: 500 }
    );
  }
}
