"use client"

import React from 'react'
import { Loader2 } from 'lucide-react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'

interface ButtonText {
  text: String
}

const SubmitButton = ({ text }: ButtonText ) => {
  const { pending } = useFormStatus()
  return (
    <div>
      {pending ? (
        <Button disabled className='w-full'>
          <Loader2 className='size-4 mr-2 animate-spin'/> wait...
        </Button>
        ) : (
        <Button type='submit' className='w-full'>{text}</Button>
        )
      }
    </div>
  )
}

export default SubmitButton