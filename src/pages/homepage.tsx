import vite from '@/assets/images/vite.svg'
import react from '@/assets/images/react.svg'
import vercel from '@/assets/images/vercel.svg'
import typescript from '@/assets/images/typescript.svg'
import tailwindcss from '@/assets/images/tailwindcss.svg'

import Image from '../components/image'

console.log(vite, react, vercel, typescript, tailwindcss)

export default function HomePage() {
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
        <a
          className='rounded bg-blue-100 py-3 px-4 font-bold uppercase tracking-wide text-blue-700 shadow-md shadow-blue-800 transition-colors hover:bg-blue-900 hover:text-blue-100'
          href={''}
          rel='noopener noreferrer'
          target='_blank'
        >
          Get the boilerplate →
        </a>
        <div className='flex gap-8 pt-4'>
          <Image src={vite} alt='Vite Icon' />
          <Image src={react} alt='React Icon' />
          <Image src={typescript} alt='Typescript Icon' />
          <Image src={tailwindcss} alt='Tailwindcss Icon' />
          <Image src={vercel} alt='Vercel Icon' />
        </div>
      </section>
    </main>
  )
}
