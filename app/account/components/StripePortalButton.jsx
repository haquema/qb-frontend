'use client'
import { Button } from "@nextui-org/react"

export default function StripePortalButton() {
  return (
    <Button color="primary" onClick={() => window.location.href = 'https://billing.stripe.com/p/login/test_8wM8yI0Qe7yg54AfYY'} className="my-2">Stripe</Button>
  )
}