"use server"

import { redirect } from "next/navigation"
import prisma from "./utils/db"
import { requireAuth } from "./utils/hooks"
import { invoiceSchema, onboardingSchema } from "./utils/zodSchemas"
import { parseWithZod } from "@conform-to/zod"
import { sub } from "date-fns"


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


export const CreateInvoce = async  (prevState: any ,formData: FormData) => {
  const session = requireAuth()

  const submission = parseWithZod(formData, {
    schema: invoiceSchema
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const data = await prisma.invoice.create({
    data: {
      date: submission.value.date,
      dueDate: submission.value.dueDate,
      fromName: submission.value.fromName,
      fromAddress: submission.value.fromAddress,
      fromEmail: submission.value.fromEmail,
      clientName: submission.value.clientName,
      clientAddress: submission.value.clientAddress,
      clientEmail: submission.value.clientEmail,
      note: submission.value.note,
      status: submission.value.status,
      number: submission.value.number, // Add this field
      clientId: submission.value.clientId, // Add this field
      vendorId: submission.value.vendorId, // Add this field
      quotationId: submission.value.quotationId, // Add this field
      total: submission.value.total, // Add this field
    }
  });

  return redirect("/invoices")

}