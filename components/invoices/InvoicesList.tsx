import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import InvoiceActions from './InvoiceActions'

const InvoicesList = () => {
  return (
    <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice ID</TableHead>
            <TableHead>Custome</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className='text-right'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Sinthorn Pradutnam</TableCell>
            <TableCell>$888.88</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>11/12/2024</TableCell>
            <TableCell className='text-right'>
              <InvoiceActions />
            </TableCell>
          </TableRow>
        </TableBody>
    </Table>
  )
}

export default InvoicesList