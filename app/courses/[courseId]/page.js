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
          className='absolute top-5 p-4 text-center z-10 font-barlow font-extrabold uppercase whitespace-nowrap'
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
      <div className='grid grid-cols-4 items-start justify-items-center bg-neutral-700 py-4 text-2xl text-center'>
        <div className='stat'>
          <p className=' font-extrabold'>500+</p>
          <p className='stat'>students</p>
        </div>
        <div className='stat'>
          <p className=' font-extrabold'>120+</p>
          <p className='stat'>hours of educational content</p>
        </div>
        <div className='stat'>
          <p className=' font-extrabold'>50+</p>
          <p className='stat'>exclusive learning resources</p>
        </div>
        <div className='stat'>
          <p className=' font-extrabold'>5</p>
          <p className='stat'>years strong</p>
        </div>
      </div>
      <div className="flex flex-col w-full bg-black p-8">
        <div className="self-center flex flex-col items-center gap-2">
          <h2 className="uppercase self-center font-black text-2xl">The Programme</h2>
          <p className="uppercase text-base font-semibold">Our Vision</p>
          <p className="text-white text-sm"><span className="text-yellow-300">Experience</span> the <span className="text-yellow-300">Quran</span> as it was first <span className="text-yellow-300">Revealed</span></p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 my-10'>
          <p className='text-sm font-fahkwang px-2'>
            We all learn HOW to recite the Quran, but we don&#39;t learn WHAT we&#39;re reciting.<br />
            <br />
            At the core of our vision is the belief every Muslim should be able to read and
            understand the Quran as it was revealed.<br />
            <br />
            While translations do a great job of conveying the basic meanings, they fail to
            capture the feel, experience, and essence of the Quran.<br />
            <br />
            Our programme aims to bridge this gap by teaching you the fundamental rules,
            vocabulary, and skills you need to truly understand the Quran you recite so beautifully.
          </p>
        </div>
      </div>
    </div>
  )
}
