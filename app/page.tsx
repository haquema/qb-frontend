'use client'
// import { useUser } from "@clerk/nextjs";
import { Card } from "@chakra-ui/react"

export default function Home() {
  // const { user } = useUser();
  // console.log(user?.firstName)

  return (
    <div className="flex flex-col items-center text-orange-200">
      <Card.Root className="w-96 bg-neutral-600">
        <Card.Header />
        <Card.Body className="items-center" >
          <h1 className="font-bold text-3xl">Quranbound</h1>
          <h2 className="">Arabic Through The Quran</h2>
        </Card.Body>
        <Card.Footer />
      </Card.Root>
    </div>
  );
}
