"use server";

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SANDBOX_SECRET_KEY);

export async function createCheckoutSession(priceId, transactionMode) {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: transactionMode,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/?canceled=true`,
    });
    return session.id; // Return the session ID to the client
  } catch (err) {
    throw new Error(err.message);
  }
}
