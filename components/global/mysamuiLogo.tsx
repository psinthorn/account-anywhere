import Image from 'next/image'
import MSILogo from "@/public/mysamui-logo-blue-notext-300x120.png"
import React from 'react'

const MySamuiLogo = () => {
  return (
    <Image src={MSILogo} alt="Mysamui Logo" height={30} />
  )
}

export default MySamuiLogo