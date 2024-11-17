'use client'
import { Button } from "@nextui-org/react"
import getStripe from "@/utils/get-stripe"
import { createCheckoutSession } from "@/app/actions/createCheckoutSession";

const stripePromise = getStripe();

export default function Page() {
  let priceId = 'price_1QLSdd2fsgUh7JJTX0jS3pEC';
  
  const handleCheckout = async () => {
    try {
      // Call the server action
      const sessionId = await createCheckoutSession(priceId);

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
    <div className="w-full flex justify-center h-96 items-center">
      <Button color="primary" onPress={handleCheckout}>
        Enrol
      </Button>
    </div>
  )
}