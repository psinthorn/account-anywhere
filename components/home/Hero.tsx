import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { RainbowButton } from '../ui/rainbow-button'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import AccountAnywhereV1 from "@/public/f2-account-anywhere-v1-1.png"

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center py-12 lg:py-20">
      {/* <div className='text-center'> */}
        <div className="flex mx-auto text-center gap-2">
          <span className='text-sm text-primary font-medium tracking-tighter bg-primary/10 px-4 py-2 rounded-full'>Account Anywhere V1.0.0</span>
            {/* <Link href="/dashboard">
              <Button className="items-center justify-center rounded-full bg-slate-300 font-semibold">
                Try Now
              </Button>
            </Link>       */}
        </div>
          <div className="text-center mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter">
            <h1>
            Accounting Made Simple <span className='block p-2 -mt-1 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text'>From Anywhere!</span>
            </h1>
          </div>
          <div className='max-w-xl mx-auto mt-4 items-center justify-center text-center'>
            <p className='lg:text-lg text-muted-foreground'>Manage your transaction purchase order, quotation, invoice, receipt, voucher and tax-invoice from anywhere any time! </p>
            <div className='mt-5 mb-12 text-center items-center justify-center'>
              <Link href="/adope-project" className='mt-4'>
                <RainbowButton className='gap-2'><span>Adope The Project Get Unlimited Access</span><Heart/></RainbowButton>
              </Link>
            </div>        
          </div>
      {/* </div> */}

        <div className='ralative w-full items-center mx-auto py-12 mt-12'>
          {/* <svg
            className="absolute inset-0 -mt-24 blur-3xl"
            style={{ zIndex: -1 }}
            fill="none"
            viewBox="0 0 400 400"
            height="100%"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_10_20)">
              <g filter="url(#filter0_f_10_20)">
                <path
                  d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                  fill="#03FFE0"
                ></path>
                <path
                  d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                  fill="#7C87F8"
                ></path>
                <path
                  d="M320 400H400V78.75L106.2 134.75L320 400Z"
                  fill="#4C65E4"
                ></path>
                <path
                  d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                  fill="#043AFF"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="720.666"
                id="filter0_f_10_20"
                width="720.666"
                x="-160.333"
                y="-160.333"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_10_20"
                  stdDeviation="80.1666"
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg> */}
          <Image src={AccountAnywhereV1} alt="AccountAnywhere v1.0.0" className='relative object-cover w-full border shadow-2xl rounded-sm lg:rounded-md' />
        </div>
    </section>
  )
}

export default Hero