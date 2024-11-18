
'use client'
import { Button } from "@nextui-org/react";
import { createCheckoutSession } from "@/app/actions/createCheckoutSession";
import getStripe from "@/utils/get-stripe"
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


const stripePromise = getStripe();

export default function BuyButton({paymentType}) {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  let { priceId, TransactionMode } = paymentType;


  const handleCheckout = async () => {
    if (!isSignedIn) {
      router.push('https://ready-swine-49.accounts.dev/sign-in')
      return;
    }

    try {
      // Call the server action
      const sessionId = await createCheckoutSession(priceId, TransactionMode)

      // Use Stripe.js to redirect to Checkout
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Stripe checkout error:', error.message);
      }
    } catch (err) {
      console.error('Error creating checkout session:', err.message);
    }
  }

  return (
    <Button className="bg-orange-100 rounded-md" onPress={handleCheckout}>
      Enrol
    </Button>
  )
}