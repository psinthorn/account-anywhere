import { z } from 'zod'



export const onboardingSchema =  z.object({
  firstName: z.string().min(2, "Minimum is 2 characters"),
  lastName: z.string().min(2, "Minimum is 2 characters"),
  address: z.string().min(2, "Minimum is 2 characters")
});

export const invoiceSchema = z.object({
  name: z.string().min(2, "Required, and not meet minimum character"),
  //subTotal        z.number().min(1, "Total can't be 0"),
  total:          z.number().min(1, "Total can't be 0"),
  date:           z.string(),
  dueDate:        z.string(),
  fromName:       z.string().min(1, "Required, and not meet minimum character"), // suplier
  fromEmail:      z.string().email("Invalid email address"),
  fromAddress:    z.string().min(1, "Required, and not meet minimum character"),
  clientName:     z.string().min(1, "Required, and not meet minimum character"), // buyer
  clientEmail:    z.string().min(1, "Required, and not meet minimum character"),
  clientAddress:  z.string().min(1, "Required, and not meet minimum character"),
  note:           z.string().optional(),
  status:         z.enum(["PENDING","OVERDUE","PAID","CANCELLED","CANTCOLLECT"]).default("PENDING"),
  number: z.string(), // Add this field
  clientId: z.string(), // Add this field
  vendorId: z.string(), // Add this field
  quotationId: z.string(), // Add this field

});

