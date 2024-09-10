import React from 'react'
import Image from 'next/image'
import MiddleCompo from './components/MiddleCompo'
import CareerMistakes from './components/CareerMistakes'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='pt-32 pb-6 bg-gray-100'>
      <div className='p-4 px-4 md:px-14'>
        <Image
          src={'/beforeAfterCounselling.webp'}
          height={2000}
          width={2000}
          alt='Before and After Counselling'
          className='w-full h-auto object-cover rounded-2xl'
        />
      </div>
      <div className='mt-10 p-3 flex justify-center items-center gap-5 bg-blue-200 ' >
        <MiddleCompo />
      </div>
      <CareerMistakes />

      <div className='flex justify-center items-center '>
        <Link href='/contact' className='w-[80%] '>
          <button className='bg-customOrange text-white text-2xl font-semibold px-10 py-5 rounded-xl hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition ease-in-out duration-150 w-full'>
            Get A Free Counselling
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Page
