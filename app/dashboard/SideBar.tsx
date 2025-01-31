import React from 'react'
import Image from 'next/image'
import DashboardLinks from '@/components/dashbaord/dashboardLinks'
import Logo from '@/public/f2-logo-color.jpeg' // Adjust the path to the actual location of your logo file
import MSILogo from '@/public/mysamui-logo-blue-notext-300x120.png'
import Link from 'next/link'

const SideBar = () => {
  return (
   
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex flex-col items-center max-h-screen h-full gap-2 px-2 py-2 mt-0 mb-1'>
        <div className='flex items-center justify-center lg:h-[60px] lg:px-6 lg:py-6'>
          <Link href="/" className='p-4'>
            <Image src={MSILogo} alt='logo' priority={true} width={140} className='h-auto p-1 rounded-none my-8'/>
          </Link>
        </div>
        <div className='w-full'>
        <DashboardLinks />
      </div>
      </div> 
  </div>
 
  )
}

export default SideBar