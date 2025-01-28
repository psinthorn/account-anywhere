import prisma from "@/app/utils/db";
import { requireAuth } from "@/app/utils/hooks";
import { NextResponse } from "next/server";
import { jsPDF } from "jspdf";
import { dateFormat } from "@/app/utils/dateFormat";

export async function GET(req: Request, {params}: {params: Promise<{invoiceId: string}>}) {
  const session = await requireAuth()
  const {invoiceId} = await params

  interface InvoiceProps {
    id: string;
    invoiceNumber: string;
    date: Date;
    dueDate: Date;
    fromName: string;
    fromEmail: string;
    fromAddress: string;
    clientName: string;
    clientEmail: string;
    clientAddress: string;
    itemModel: string;
    itemDescription: string;
    itemQuantity: number;
    itemRate: number;
    itemTotal: number;
  }

  const invoice = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
      // userId: session.user?.id
    }
  });

  if(!invoice) {
    return NextResponse.json({error: "Invoice not found"}, {status: 404})
  }

  console.log(invoice);

  // Create a new PDF document
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm', 
    format: 'a4'
  });

  // Set the document metadata

  pdf.setFont('Helvetica', 'normal')
  pdf.setFontSize(12)

  // Invoice date and due date
  pdf.setFontSize(10)
  pdf.text(`Date: ${new Intl.DateTimeFormat("en-US", {
    dateStyle: "long"
  }).format(invoice.date)}`, 20, 20)
  pdf.text(`Due Date: ${invoice.dueDate}`, 20, 24)


  // Invoice reference
  pdf.text(`Invoice No.:  ${invoice.invoiceNumber}`, 116, 20)
  pdf.text(`Invoice ID:  ${invoice.id}`, 116, 24)

  // From section
  pdf.setFontSize(12)
  pdf.text('From:', 20, 40)
  pdf.setFontSize(10)
  pdf.text([invoice.fromName, invoice.fromAddress, invoice.fromEmail ], 24, 46)

  // Client section
  pdf.setFontSize(12)
  pdf.text('Bill To:', 116, 40)
  pdf.setFontSize(10)
  pdf.text([invoice.clientName, invoice.clientAddress, invoice.clientEmail ], 120, 46)

  // Invoice items header
  pdf.setFontSize(10)
  pdf.setFont('Helvetica','bold')
  pdf.text("Model", 20, 80)
  pdf.text('Description', 60, 80)
  pdf.text('Qty', 130, 80)
  pdf.text('Rate',150, 80)
  pdf.text('Total', 180, 80)

  // Draw line header
  pdf.line(20, 82, 200, 82)

  // Invoice items
  pdf.setFont('Helvetica','normal')
  pdf.setFontSize(10)
  pdf.text([invoice.itemModel], 20, 90)
  pdf.text([invoice.itemDescription], 60, 90)
  pdf.text([invoice.itemQuantity.toString()], 130, 90)
  pdf.text([invoice.itemRate.toString()],150, 90)
  pdf.text([invoice.itemTotal.toString()], 180, 90)

  // Draw line items
  pdf.line(20, 95, 200, 95)

  // Invoice total
  pdf.setFont('Helvetica','bold')
  pdf.text('Subtotal', 130, 225)
  pdf.text('Discount', 130, 230)
  pdf.text('Total', 130, 240)
  pdf.text('VAT', 130, 235)
  pdf.text('Grand Total', 130, 245)
  

  // 

  // Draw line footer
  pdf.line(20, 220, 200, 220)

  


  // Generate the PDF buffer
  const pdfBuffer = Buffer.from(pdf.output('arraybuffer'))

  

  // Return the PDF buffer
  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline'
      // 'Content-Disposition': `attachment; filename="invoice-${invoice.invoiceNumber}.pdf"`
    }
  });



  // pdf.setMetadata({
  //   title: `Invoice ${invoice.invoiceNumber}`,
  // })









  // return NextResponse.json({"invoiceID": invoice})
}

// export async function Post(req: Request, {params}: {params: Promise<{invoiceId: string}>}) {
//   const session = requireAuth()
//   const {invoiceId} = await params

//   const invoice = await prisma.invoice.findUnique({
//     where: {
//       id: invoiceId
//     }
//   });
//   return NextResponse.json({"invoiceID": invoiceId})
// }