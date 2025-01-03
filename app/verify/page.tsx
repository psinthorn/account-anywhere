import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, ArrowLeft, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Verify = () => {
  return (
    <div className='flex w-full min-h-screen justify-center items-center '>
      <Card className='max-w-md px-5'>
        <CardHeader className='text-center'>
          <div className="flex justify-center items-center mx-auto size-20 rounded-full bg-blue-100">
            <Mail className='size-12 text-blue-500'/>
          </div>
          <CardTitle className='text-2xl font-bold'>Verify your email</CardTitle>
          <CardDescription> We have sent you an email with a link to verify your email address.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-y-4'>
            <p className='text-center'>
              Click the link in the email to verify your email address.
            </p>
            <div className='flex rounded-md bg-yellow-100 border-yellow-300 p-4'>
              <AlertCircle className='size-12 text-yellow-500 mr-2'/>
              <p className='text-sm'>
                If you did not receive the email, please check your spam folder.
              </p>
            </div>
            
          </div>
        </CardContent>
        <CardFooter>
          <Link href='/' className={buttonVariants({
            variant: 'outline',
            className: 'w-full' 
          })}>
            <ArrowLeft className='size-4 mr-2'/>Back to Homepage
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Verify