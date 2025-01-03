import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { auth, signIn } from '../utils/auth'
import SubmitButton from '@/components/form/SubmitButton'
import { redirect } from 'next/navigation'

const  Login = async () => {
  const session = await auth();
  if (session?.user) {
    redirect('/dashboard')
  }
  return (
    <>
      <div className='flex w-full h-screen justify-center items-center px-4'>
        <Card className='max-w-sm'>
          <CardHeader>
            <CardTitle className='text-2xl'>Login</CardTitle>
            <CardDescription>Enter your email to login to your account</CardDescription>
          </CardHeader>
            <CardContent>
              <form className='flex flex-col gap-y-4'
                action={async (formData) => {
                  "use server"
                  await signIn("nodemailer", formData)
                }}
              >
                <div className="flex flex-col gap-y-2">
                  <Label>Email</Label>
                  <Input
                    type='email'
                    name='email'
                    required 
                  placeholder='email@domain.com' />
                  <SubmitButton text="Submit" />
                </div>           
              </form>  
            </CardContent>
        </Card>
       
      </div>
    </>
   
  )
}

export default  Login