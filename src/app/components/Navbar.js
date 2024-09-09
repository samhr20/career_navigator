'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='flex flex-col fixed w-full md:flex-row justify-between items-center p-4 px-6 border-b-4 bg-white shadow-md'>
        <div className='flex items-center justify-between w-full'>
            <Link href={"/"}>
            <Image src={'/logo.png'} height={50} width={150} alt="CareerNavigators Logo" />
            </Link>
            <button 
              onClick={toggleMenu} 
              className='md:hidden text-xl font-bold text-black'
              aria-label="Toggle menu"
            >
              ☰
            </button>
        </div>
        <ul className={`flex-col md:flex-row flex ${isOpen ? 'block' : 'hidden'} md:flex gap-5 md:gap-8 font-medium text-xl mt-2 md:mt-0 text-black`}>
            <li>
                <Link href={'/'}>
                    <p className='transition-colors duration-300 hover:text-customOrange hover:underline'>Home</p>
                </Link>
            </li>
            <li>
                <Link href={'/careerassessment'}>
                    <p className='transition-colors duration-300 hover:text-customOrange hover:underline'>Assessment</p>
                </Link>
            </li>
            <li>
                <Link href={'/careerinformation'}>
                    <p className='transition-colors duration-300 hover:text-customOrange hover:underline'>Information</p>
                </Link>
            </li>
            <li>
                <Link href={'/contact'}>
                    <p className='transition-colors duration-300 hover:text-customOrange hover:underline'>Contact</p>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
