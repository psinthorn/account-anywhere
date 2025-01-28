import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { CheckCircle, DownloadCloud, Mail, MoreHorizontal, Pencil, Trash } from 'lucide-react'
import Link from 'next/link'

const InvoiceActions = ({invoiceId}: any) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="secondary">
          <MoreHorizontal className='size-4'/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem asChild>
        {/* <Link href="/dashboard/invoice/[invoiceId]" as={`/dashboard/invoice/${invoiceId}`}> */}
          <Link href={`/invoice/${invoiceId}`}>
            <Pencil className='size-4 mr-2'/> View Invoice
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/invoices/${invoiceId}`}>
            <Pencil className='size-4 mr-2'/> Edit Invoice
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/invoice/${invoiceId}`}>
            <DownloadCloud className='size-4 mr-2'/> Download Invoice
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="">
            <Mail className='size-4 mr-2'/> Remind Email
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="">
            <CheckCircle className='size-4 mr-2'/> Mark as Paid
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/dashboard/invoices/delete">
            <Trash className='size-4 mr-2'/> Delete Invoice
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default InvoiceActions