import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import InvoicesList from '@/components/invoices/InvoicesList'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import ButtonMainActions from './ButtonMainActions'

interface CardFullWidthProps {
  title: string
  description: string  
  buttonName: string
  link: string

}

const CardFullWidth = ({title, description, buttonName, link}: CardFullWidthProps ) => {
  return (
      <Card>
        <CardHeader>
          <div className='flex items-center justify-between'>
            <div>
              <CardTitle className='font-bold'>
                {title}
              </CardTitle>
              <CardDescription>
                {description}
              </CardDescription>
            </div>
              <ButtonMainActions name={buttonName} link={link}/>
          </div>
        </CardHeader>
        <CardContent>
          <InvoicesList/>
        </CardContent>
      </Card>
  )
}

export default CardFullWidth