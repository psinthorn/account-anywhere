import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import InvoicesList from '@/components/invoices/InvoicesList'
import CardFullWidth from '@/components/dashbaord/CardFullWidth'
import prisma from '@/app/utils/db'
import { requireAuth } from '@/app/utils/hooks'


const getInvoices = async (userId: string) => {
  const data = await prisma.invoice.findMany({
    where: {
      userId: userId
    },
    select: {
      id: true,
      invoiceNumber: true,
      clientName: true,
      clientEmail: true,
      itemRate: true,
      status: true,
      createdAt: true,
    
    }, 
    orderBy: {
      createdAt: 'desc'
    }
  });

  return data.map(invoice => ({
    ...invoice,
    createdAt: invoice.createdAt.toISOString()
  }))
};

const Invoices = async () => {
  const session = await requireAuth()
  const invoices = await getInvoices(session.user?.id as string)

  return (

    <CardFullWidth invoices={invoices} title='Invoices' description='Manage your invoices' buttonName="Create Invoice" link="/dashboard/invoices/create" />
      
  )
}

export default Invoices