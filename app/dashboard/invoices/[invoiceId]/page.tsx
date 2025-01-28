import { GetInvoiceByID } from '@/app/actions'
import { requireAuth } from '@/app/utils/hooks'
import UpdateInvoiceForm from '@/components/invoices/UpdateInvoiceForm'
import { Prisma } from '@prisma/client'
import React from 'react'


const EditInvoiceRoute = async ({ params }: { params: { invoiceId: string }} ) => {
  const session = await requireAuth()
  const userId = session.user?.id;
  if (!userId) {
    throw new Error('User ID is undefined');
  }

  const { invoiceId } = params;

  interface InvoiceProps {
    data: Prisma.InvoiceGetPayload<{}>;
  };

  const invoiceData = await GetInvoiceByID(userId, invoiceId);
  if (!invoiceData) {
    throw new Error('Invoice not found');
  }
  const invoice: InvoiceProps = { data: invoiceData };

  return (

      <UpdateInvoiceForm invoice={invoice}  />
    
  )
}

export default EditInvoiceRoute