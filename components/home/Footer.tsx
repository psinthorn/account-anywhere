import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Logo from "@/public/f2-logo-color.jpeg"
import Link from 'next/link'
import { RainbowButton } from '../ui/rainbow-button'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='flex items-center justify-between w-full p-4 py-5'>
      {/* <Link href="/" className='flex items-center gap-2'>
        <Image src={Logo} alt="F2 Logo" className='size-10' />
        <h3 className='text-3xl font-semibold'>Account<span className='text-blue-800'>Anywhere</span></h3> 
      </Link> */}
      <div>
        <span className='text-muted-foreground'>© {currentYear} F2 Co., Ltd. All rights reserved.</span>
      </div>
      <div>
        <Link href="/https://www.facebook.com/f2coltd" target='_blank'>
          <Button variant="outline">Socials Us</Button>
        </Link>
      </div>
    </div>
  )
}

export default Footer