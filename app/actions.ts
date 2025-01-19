"use server"

import { redirect } from "next/navigation"
import prisma from "./utils/db"
import { requireAuth } from "./utils/hooks"
import { invoiceSchema, onboardingSchema } from "./utils/zodSchemas"
import { parseWithZod } from "@conform-to/zod"
// import { sub } from "date-fns"


export const OnboardUser =  async (prevState: any ,formDara: FormData) => {
  const session = requireAuth()

  const submission = parseWithZod(formDara, {
    schema: onboardingSchema
  });

  if (submission.status !== "success" ){
    return submission.reply();
  }

  const result = await prisma.user.update({
    where: {
      id: (await session).user?.id
    },
    data: {
      firstName: submission.value.firstName as string,
      lastName: submission.value.lastName as string,
      address: submission.value.address as string
    }
  });

  console.log("Account is updated!")

  return redirect("/dashboard")
}


export const CreateInvoice = async  (prevState: any ,formData: FormData) => {
  const session = requireAuth()

  console.log("Create Invoice action")

  const submission = parseWithZod(formData, {
    schema: invoiceSchema
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await prisma.invoice.create({
    data: {
      title: submission.value.title,
      date: submission.value.date,
      invoiceNumber: submission.value.invoiceNumber, // Add this field

      fromName: submission.value.fromName,
      fromAddress: submission.value.fromAddress,
      fromEmail: submission.value.fromEmail,

      clientName: submission.value.clientName,
      clientAddress: submission.value.clientAddress,
      clientEmail: submission.value.clientEmail,

      // clientId: submission.value.clientId, // Add this field
      // vendorId: submission.value.vendorId, // Add this field
      // quotationId: submission.value.quotationId, // Add this field
      dueDate: submission.value.dueDate,
      

      // subTotal: submission.value.subTotal,
      // discountPercent: submission.value.discountPercent,
      // discountTotal:  submission.value.discountTotal,
      // vatPercent:     submission.value.vatPercent,
      // vatTotal:       submission.value.vatTotal,
      note: submission.value.note,

      itemId:          submission.value.itemId,
      // itemModel:       submission.value.itemModel,
      // itemName:        submission.value.itemName,
      itemDescription: submission.value.itemDescription,
      itemQuatity:     submission.value.itemQuatity,
      itemRate:        submission.value.itemRate,
      itemTotal:       submission.value.itemTotal,

      // total: submission.value.total, // Add this field
      currency: submission.value.currency,

      status: submission.value.status,

      userId: (await session).user?.id,
    }
  });

  return redirect("/dashboard/invoices")

}