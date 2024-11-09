import { Image, Button } from "@nextui-org/react"


export default async function Page({ params }) {
  const courseId = (await params).courseId
  
  return (
    <div className='flex flex-col w-screen'>
      <div className='relative h-fit flex items-center justify-center'>
        <Image
          src='/man_quran.jpeg'
          radius="none"
          className='w-screen max-h-[500px] object-cover'
          alt='Man holding a Quran'
        />
        <h1
          className='absolute top-10 p-4 text-center z-10 font-barlow font-extrabold uppercase whitespace-nowrap'
          style={{
            fontSize: "clamp(1.5rem, 2vw + 1rem, 2.5rem)",
            maxWidth: "calc(100% - 2rem)",
          }}
        >
          <span>Arabic  </span>
          <span className='text-2xl font-light'>Through The  </span>
          <span className='tracking-wide'>Quran</span>
        </h1>
        <span className='absolute bottom-4 z-10 w-full flex flex-col gap-4 items-center'>
          <p
            className='w-2/3 max-w-md text-white font-semibold font-barlow text-center'
            style={{
              fontSize: "clamp(0.875rem, 1vw + 0.5rem, 1.125rem)",
              lineHeight: "1.5",
            }}
          >
            A comprehensive <span className='text-foreground'>Arabic Programme</span> designed for <span className='text-foreground'>beginners</span> who aspire to experience the <span className='text-foreground'>Quran</span> as it was <span className='text-foreground'>revealed.</span>
          </p>
          <Button color="primary" radius="sm" className='self-center w-24' size="sm">Enrol Now</Button>
        </span>
      </div>
    </div>
  )
}
