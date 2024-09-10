import React from 'react'
import Link from 'next/link'

const MiddleCompo = () => {
    return (
        <div className='p-4 md:p-10'>
            <section className='bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-200'>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>Career Assessment</h2>
                <p className='text-lg mb-4'>
                    Our Career Assessment tool helps you identify your strengths, interests, and potential career paths. It provides personalized recommendations based on your responses to various questions and scenarios. Engage with our tool to gain insights into suitable career options and start your journey towards a fulfilling career.
                </p>
                <Link href={'/assesment'}>
                <button className='bg-customOrange text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors'>
                    Take the Assessment
                </button>
                </Link>
            </section>

            <section className='bg-white shadow-lg rounded-lg p-6 border border-gray-200'>
                <h2 className='text-2xl md:text-3xl font-bold mb-4'>Career Information</h2>
                <p className='text-lg mb-4'>
                    Explore detailed information on various career paths, including job descriptions, required skills, and industry trends. Our comprehensive resources will help you understand what different careers entail and what qualifications are needed. Discover valuable insights and make informed decisions about your future career.
                </p>
                <Link href={'/information'}>
                <button className='bg-customOrange text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors'>
                    Learn More
                </button>
                </Link>
            </section>
        </div>
    )
}

export default MiddleCompo
