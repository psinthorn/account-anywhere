import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import InvoicesList from '@/components/invoices/InvoicesList'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'
import ButtonMainActions from './ButtonMainActions'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import InvoiceActions from '../invoices/InvoiceActions'

interface InvoiceProps {
  id: string;
  invoiceNumber: string;
  clientName: string;
  clientEmail: string;
  itemRate: number;
  status: string;
  // createdAt: string;
}

interface CardFullWidthProps {
  title: string
  description: string  
  buttonName: string
  link: string
  invoices: InvoiceProps[]
};

const CardFullWidth = ({title, description, buttonName, link, invoices}: CardFullWidthProps) => {
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
            <Table>
              <TableHeader>
                <TableRow>
                  {/* <TableHead>Invoice ID</TableHead> */}
                  <TableHead>Invoice No.</TableHead>
                  <TableHead>Custome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className='text-right'>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((inv) => (
                  <TableRow key={inv.id}>
                     {/* <TableCell>{inv.id}</TableCell> */}
                    <TableCell>{inv.invoiceNumber}</TableCell>
                    <TableCell>{inv.clientName}</TableCell>
                    <TableCell>{inv.clientEmail}</TableCell>
                    <TableCell>{inv.itemRate}</TableCell>
                    <TableCell>{inv.status}</TableCell>
                    <TableCell>11.12.23</TableCell>
                    <TableCell className='text-right'>
                      <InvoiceActions />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
          </Table>
        </CardContent>
      </Card>
  )
}

export default CardFullWidth