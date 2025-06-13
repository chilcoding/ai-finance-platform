"use client"

import { Github, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-white to-blue-600 h-32 w-full flex justify-between items-center p-2 md:p-4'>
      <div>
        <Link href="/"><Image src="/website-logo.png" alt='Logo' title='Home' width={50} height={20} className='hover:cursor-pointer' />
        </Link>
      </div>

      <div className='space-y-3'>
        <div className='flex justify-center items-center space-x-3'>
          <Linkedin className='text-blue-600 hover:cursor-pointer hover:text-red-600 hover:scale-125 transition-all duration-150 ease-in-out' />
          <Instagram className='text-blue-600 hover:cursor-pointer hover:text-red-600 hover:scale-125 transition-all duration-150 ease-in-out' />
          <Github className='text-blue-600 hover:cursor-pointer hover:text-red-600 hover:scale-125 transition-all duration-150 ease-in-out' />
        </div>
        <div>
          <h1 className='font-bold text-sm md:text-2xl lg:inline'> Made By ✋🏻 <span className='text-red-600 font-semibold'>Hemanta Hembram</span></h1>
        </div>
      </div>

      <div className='flex justify-center items-center flex-col space-x-3'>
        <Link href="https://nextjs.org/docs"><span className='underline text-white'>Privacy</span></Link>
        <Link href="https://nextjs.org/docs"><span className='underline text-white'>Policy</span></Link>
      </div>

    </div>
  )
}

export default Footer
