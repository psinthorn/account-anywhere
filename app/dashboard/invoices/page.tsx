import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import InvoicesList from '@/components/invoices/InvoicesList'
import CardFullWidth from '@/components/dashbaord/CardFullWidth'

const Invoices = () => {
  return (

    <CardFullWidth title='Invoices' description='Manage your invoices' buttonName="Create Invoice" link="/dashboard/invoices/create" />
   
  )
}

export default Invoices