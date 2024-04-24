import vite from '@/assets/images/vite.svg'
import react from '@/assets/images/react.svg'
import vercel from '@/assets/images/vercel.svg'
import typescript from '@/assets/images/typescript.svg'
import tailwindcss from '@/assets/images/tailwindcss.svg'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'

import Image from '../components/image'
import { gitUrl } from '../config'
import { useToast } from '@/components/ui/use-toast'

console.log(vite, react, vercel, typescript, tailwindcss)

export default function HomePage() {
  const { toast } = useToast()
  return (
    <main className='grid min-h-screen place-content-center bg-gradient-to-b from-yellow-700 to-blue-800'>
      <section className='mx-8 flex flex-col items-center justify-center gap-7 text-center text-blue-100'>
        <h1 className='text-7xl font-bold tracking-wide'>
          Sample
          <span className='block text-3xl italic'>Boilerplate</span>
        </h1>
        <p className='max-w-sm text-base leading-7 sm:max-w-none'>
          Avoid setting up a project from scratch. Get started with this boilerplate that includes
          Vite, React, Typescript, Tailwindcss, and Vercel.
        </p>
        <a href={gitUrl} target='_blank' className='flex items-center gap-2'>
          <Button rel='noopener noreferrer'>Get the boilerplate →</Button>
        </a>
        <Button
          className='bg-blue-350 hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-blue-200'
          onClick={() => {
            toast({
              title: 'Scheduled: Catch up',
              description: 'Friday, February 10, 2023 at 5:57 PM'
            })
          }}
        >
          Show Toast
        </Button>
        <div className='flex gap-8 pt-4'>
          <Image src={vite} alt='Vite Icon' />
          <Image src={react} alt='React Icon' />
          <Image src={typescript} alt='Typescript Icon' />
          <Image src={tailwindcss} alt='Tailwindcss Icon' />
          <Image src={vercel} alt='Vercel Icon' />
        </div>
      </section>
      <Toaster />
    </main>
  )
}
