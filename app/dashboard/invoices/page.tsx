import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import InvoicesList from '@/components/invoices/InvoicesList'

const Invoices = () => {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <div>
            <CardTitle className='font-bold'>
              Invoices
            </CardTitle>
            <CardDescription>
              Manage your invoices
            </CardDescription>
          </div>
          <div>
            <Link href="/dashboard/invoices/create" className={buttonVariants()}>
              <PlusIcon/>Create Invoice
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <InvoicesList/>
      </CardContent>
    </Card>
  )
}

export default Invoices