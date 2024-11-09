import { Image } from "@nextui-org/react"


export default async function Page({ params }) {
  const courseId = (await params).courseId
  
  return (
    <div className='relative h-fit flex items-center justify-center'>
      <Image 
        src='/man_quran.jpeg'
        radius="none"
        className='w-screen max-h-[500px] object-cover'
        alt='Man holding a Quran'
      />
      <h1 className='absolute top-20 text-center text-4xl z-10 font-barlow font-extrabold uppercase'>
        <span className=''>Arabic  </span>
        <span className='text-2xl font-light'>Through The  </span>
        <span className='tracking-wide'>Quran</span>
      </h1>
      <p className='absolute bottom-20 z-10 w-2/3 max-w-96 text-white font-semibold font-barlow'>​A comprehensive <span className='text-foreground'>Arabic Programme</span> designed for <span className='text-foreground'>beginners</span> who aspire to experience the <span className='text-foreground'>Quran</span> as it was <span className='text-foreground'>revealed.</span></p>
    </div>

  )
}
