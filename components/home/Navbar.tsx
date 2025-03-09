import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Logo from "@/public/f2-logo-color.jpeg"
import Link from 'next/link'
import { RainbowButton } from '../ui/rainbow-button'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full p-4 py-5'>
      <Link href="/" className='flex items-center gap-2'>
        <Image src={Logo} alt="F2 Logo" className='size-10' />
        {/* <h3 className='text-3xl font-semibold'>Account<span className='text-blue-800'>Anywhere</span></h3> */}
      </Link>
      <div>
        <Link href="/contact/enquiry">
          <RainbowButton>Start Now</RainbowButton>
        </Link>
    </div>
    </div>
  )
}

export default Navbar