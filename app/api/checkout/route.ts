// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getCurrentUser } from "../../../lib/auth";

export async function POST(req: NextRequest) {
  const stripeSecret = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecret) {
    return NextResponse.json({ error: "Stripe key not configured" }, { status: 500 });
  }

  // Check authentication
  const user = await getCurrentUser(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const stripe = new Stripe(stripeSecret);

  try {
    const body = await req.json();
    const priceId = (body?.priceId as string) || process.env.STRIPE_PRICE_ID;
    if (!priceId) {
      return NextResponse.json({ error: "priceId is required" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { userId: user.id },
      customer_email: user.email,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/subscribe?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/subscribe?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("checkout error:", err);
    return NextResponse.json({ error: err?.message ?? "unknown error" }, { status: 500 });
  }
}
