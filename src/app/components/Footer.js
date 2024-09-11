import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-6'>
            <div className='container mx-auto px-8 md:px-14'>
                <div className='flex flex-col md:flex-row justify-between items-start'>
                    <div className='mb-6 md:mb-0 w-full md:w-1/3'>
                        <h3 className='text-2xl font-bold mb-2 text-orange-500'>CareerNavigators</h3>
                        <p className='text-sm leading-relaxed w-[95%]'>
                            Your trusted source for career guidance and resources. Helping students make informed career choices with confidence.
                        </p>
                    </div>

                    <div className='mb-6 md:mb-0 w-full md:w-1/3'>
                        <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
                        <ul className='space-y-2'>
                            <li>
                                <Link href={'/'} className='hover:text-customOrange transition duration-300'>Home</Link>
                            </li>
                            <li>
                                <Link href={'/assessment'} className='hover:text-customOrange transition duration-300'>Career Assessment</Link>
                            </li>
                            <li>
                                <Link href={'/information'} className='hover:text-customOrange transition duration-300'>Career Information</Link>
                            </li>
                            <li>
                                <Link href={'/contact'} className='hover:text-customOrange transition duration-300'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='w-full md:w-1/3'>
                        <h4 className='text-lg font-semibold mb-4'>Contact Us</h4>
                        <p className='text-sm mb-2'>Email: <a href='mailto:shubhamsaini8965@gmail.com' className='hover:text-customOrange transition duration-300'>shubhamsaini8965@gmail.com</a></p>
                        <p className='text-sm'>Phone: +91 8278568770 , 9306634949</p>
                    </div>
                </div>

                <div className='text-center mt-6 border-t border-gray-700 pt-4'>
                    <p className='text-sm'>
                        &copy; {new Date().getFullYear()} CareerNavigators. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
