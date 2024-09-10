import React from 'react'
import Image from 'next/image'
import MiddleCompo from './components/MiddleCompo'
import CareerMistakes from './components/CareerMistakes'

const Page = () => {
  return (
    <div className='pt-32 bg-gray-100'>
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
     <CareerMistakes/>
 
    </div>
  )
}

export default Page
