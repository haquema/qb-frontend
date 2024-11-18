'use client'
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const success = searchParams.get('success');
    const canceled = searchParams.get('canceled');

    if (success === 'true') {
      toast.success('Your payment was successful and you are now enrolled on the course. You should receive an email shortly!')
    } else if (canceled === 'true') {
      toast.error('Your payment was unsuccessful, please try again.')
    }

    if (success || canceled) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('success');
      newParams.delete('canceled');

      const newUrl = `${window.location.pathname}?${newParams.toString()}`;
      router.replace(newUrl); // Update the URL without reloading the page
    }
  }, [searchParams, router])

  return (
    <div className="flex flex-col w-full justify-center items-center gap-4">
      <h1 className="font-geistSans text-3xl ">Welcome to Quranbound</h1>
    </div>
  );
}
