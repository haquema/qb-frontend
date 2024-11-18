import { Card, CardBody } from "@nextui-org/react"
import BuyButton from "./components/BuyButton";

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

export default function Page() {
  return (
    <div className="w-full flex justify-center h-96 items-center gap-4">
      <Card className="rounded-lg bg-neutral-500 w-60">
        <CardBody className="py-20 px-10 flex flex-col gap-2 items-center">
          <p>One time payment</p>
          <BuyButton paymentType={prices.fullPayment} />
        </CardBody>
      </Card>
      <Card className="rounded-lg bg-neutral-500 w-60">
        <CardBody className="py-20 px-10 flex flex-col gap-2 items-center">
          <p>12 monthly payment</p>
          <BuyButton paymentType={prices.recurringPayment} />
        </CardBody>
      </Card>
    </div>
  )
}