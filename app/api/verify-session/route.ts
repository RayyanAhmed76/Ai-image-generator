
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getCurrentUser } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";

export async function GET(req: NextRequest) {
  const stripeSecret = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecret) {
    return NextResponse.json({ error: "Stripe key not configured" }, { status: 500 });
  }

  const user = await getCurrentUser(req);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const sessionId = req.nextUrl.searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.json({ error: "session_id is required" }, { status: 400 });
  }

  try {
    const stripe = new Stripe(stripeSecret);
    
    
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    
    if (session.payment_status === "paid" && session.status === "complete") {
      
      const existingPayment = await prisma.payment.findUnique({
        where: { stripeSessionId: sessionId },
      });

      if (!existingPayment) {
        
        const subscriptionId = session.subscription as string | null;
        const customerId = session.customer as string | null;
        const amountTotal = (session.amount_total || 0) / 100;

        
        await prisma.user.update({
          where: { id: user.id },
          data: {
            isSubscribed: true,
            subscriptionId: subscriptionId || null,
          },
        });

        
        await prisma.payment.create({
          data: {
            userId: user.id,
            stripeSessionId: sessionId,
            stripeCustomerId: customerId || null,
            amount: amountTotal,
            currency: session.currency || "usd",
            status: "completed",
            subscriptionId: subscriptionId || null,
          },
        });
      }

      
      const updatedUser = await prisma.user.findUnique({
        where: { id: user.id },
      });

      return NextResponse.json({
        verified: true,
        isSubscribed: updatedUser?.isSubscribed || false,
      });
    }

    return NextResponse.json({
      verified: false,
      isSubscribed: user.isSubscribed,
    });
  } catch (err: any) {
    console.error("Error verifying session:", err);
    return NextResponse.json(
      { error: err?.message || "Failed to verify session" },
      { status: 500 }
    );
  }
}



