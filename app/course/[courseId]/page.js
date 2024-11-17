'use client'
import { Button, Card, CardBody } from "@nextui-org/react"
import getStripe from "@/utils/get-stripe"
import { createCheckoutSession } from "@/app/actions/createCheckoutSession";

const prices = {
  fullPayment: {
    priceId: 'price_1QLSdd2fsgUh7JJTX0jS3pEC',
    TransactionMode: 'payment',
  },
  recurringPayment: {
    priceId: 'price_1QLSeb2fsgUh7JJTdizpz36F',
    TransactionMode: 'subscription',
  }
}

const stripePromise = getStripe();

export default function Page() {
  const handleCheckout = async (paymentType) => {
    let { priceId, TransactionMode } = paymentType;
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
    <div className="w-full flex justify-center h-96 items-center gap-4">
      <Card className="rounded-lg bg-neutral-500 w-60">
        <CardBody className="py-20 px-10 flex flex-col gap-2 items-center">
          <p>One time payment</p>
          <Button className="bg-orange-100 rounded-md" onPress={() => handleCheckout(prices.fullPayment)}>
            Enrol
          </Button>
        </CardBody>
      </Card>
      <Card className="rounded-lg bg-neutral-500 w-60">
        <CardBody className="py-20 px-10 flex flex-col gap-2 items-center">
          <p>12 month recurring payment</p>
          <Button className="bg-orange-100 rounded-md" onPress={() => handleCheckout(prices.recurringPayment)}>
            Enrol
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}