import { Button, Divider } from "@nextui-org/react"
import StripePortalButton from "./components/StripePortalButton"
import { Suspense } from "react";
import StripeCheckoutNotif from "./components/StripeCheckoutNotif"

export default function StudentDashboard() {
  return (
    <div className="flex w-full justify-center bg-neutral-100 h-full">
      <Suspense fallback={<div>Loading payment notification...</div>}>
        {/* Only wrap the client-side notification component in Suspense */}
        <StripeCheckoutNotif />
      </Suspense>
      <div className="flex flex-col items-start w-full p-10 gap-10">
        <div className="w-full">
          <h2 className="uppercase text-black font-semibold">Details</h2>
          <Divider className="my-4 py-0.5"/>
          <div className="text-black text-sm flex flex-col gap-2">
            <p>First Name: </p>
            <p>Last Name: </p>
            <p>Email Address: </p>
            <p>Mobile:</p>
          </div>
        </div>
        <div className="w-full">
          <h2 className="uppercase text-black font-semibold">Courses </h2>
          <Divider className="my-4 py-0.5"/>
          <div className="text-black flex text-sm flex-col gap-2">
            <p>These are the courses that you've enrolled on. Click a course to start learning!</p>
          </div>
        </div>
        <div className="w-full">
          <h2 className="uppercase text-black font-semibold">Billing </h2>
          <Divider className="my-4 py-0.5"/>
          <div className="text-black flex text-sm flex-col gap-2">
            <p>Payment methods and details are managed via Stripe. To view or update, press the button below.</p>
            <StripePortalButton />
          </div>
        </div>
      </div>
    </div>
  )
}
