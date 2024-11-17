import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SANDBOX_SECRET_KEY);

export async function POST(req) {
  let data = await req.json()
  
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1QLSd92fsgUh7JJTwkrDgloz',
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${data.redirectUrl}/?success=true`,
      cancel_url: `${data.redirectUrl}/?canceled=true`,
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: err.statusCode || 500 });
  }
}
