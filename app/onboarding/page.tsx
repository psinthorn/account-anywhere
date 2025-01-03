"use client"

import SubmitButton from '@/components/form/SubmitButton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useActionState, useEffect, useState } from 'react'
import { OnboardUser } from '../actions'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { onboardingSchema } from '../utils/zodSchemas'
// import { Files } from 'lucide-react'
import { requireAuth } from '../utils/hooks'

const Onboarding = () => {

  // const session = requireAuth();

  // Form validate use useActionState 
  // check server side last result form action 
  const [lastResult, actionForm] = useActionState(OnboardUser, undefined)
  // Form validate
  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }: { formData: FormData }){
      return parseWithZod(formData, {
        schema: onboardingSchema
      });
    },
      shouldValidate: "onBlur",
      shouldRevalidate: "onInput"
  })

  return (
    <div className='flex items-center justify-center w-screen min-h-screen'>
      <Card className='max-w-sm mx-auto'>
        <CardHeader>
          <CardTitle className='text-xl'>
            You're almost finished!
          </CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form 
            action={actionForm} 
            id={form.id}
            onSubmit={form.onSubmit}
            noValidate
            className='grid gap-4'>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label>First Name</Label>
                <Input 
                  name={fields.firstName.name}
                  key={fields.firstName.key}
                  defaultValue={fields.firstName.initialValue}
                  placeholder='John'/>
                  <p className="text-sm text-red-500">{fields.firstName.errors}</p>
              </div>
              
              <div className="grid gap-2">
                <Label>Last Name</Label>
                <Input 
                  name={fields.lastName.name}
                  key={fields.lastName.key}
                  defaultValue={fields.lastName.initialValue}
                  placeholder='Doh'/>
                   <p className="text-sm text-red-500">{fields.lastName.errors}</p>
              </div>
             
            </div>
            <div className='grid gap-2'>
              <Label>Address</Label>
              <Input 
                name={fields.address.name}
                key={fields.address.key}
                defaultValue={fields.address.initialValue}
                placeholder='123 street 456 '/>
            </div>
            <p className="text-sm text-red-500">{fields.address.errors}</p>
            <SubmitButton text="Finish onboarding" />
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Onboarding