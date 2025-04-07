import Inquiry from '@/components/home/Inquiry';
import { z } from 'zod'

export const onboardingSchema =  z.object({
  firstName: z.string().min(2, "Minimum is 2 characters"),
  lastName: z.string().min(2, "Minimum is 2 characters"),
  address: z.string().min(2, "Minimum is 2 characters")
});

export const agentSchema = z.object({
  firstName: z.string().min(2, "Minimum is 2 characters"),
  lastName: z.string().min(2, "Minimum is 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(2, "Minimum is 2 characters"),
  address: z.string().min(2, "Minimum is 2 characters"),
  city: z.string().min(2, "Minimum is 2 characters"),
  country: z.string().min(2, "Minimum is 2 characters"),
  postalCode: z.string().min(2, "Minimum is 2 characters"),
  organization: z.string().min(2, "Minimum is 2 characters"),
  position: z.string().min(2, "Minimum is 2 characters"),
  avatar: z.string().min(2, "Minimum is 2 characters"),
  status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
});

export const inQuirySchema = z.object({
  title: z.string().min(2, "Required, and not meet minimum character"),
  // date:  z.string(),
  name: z.string().min(1, "Required, and not meet minimum character"), // suplier
  email: z.string().email("Invalid email address"),
  inquiryId: z.string().min(1, "Required, and not meet minimum character").default(() => {
    const randomString = Math.random().toString(36).substring(2, 8); // Generate random string
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generate random 4-digit number
    return `${randomString}${randomNumber}`;
  }),
  preferDate: z.string().optional(),
  note: z.string().optional(),
});


export const requestSchema = z.object({
  title: z.string().min(2, "Required, and not meet minimum character"),
  requestNumber:  z.string().optional(), // Add this field
  date:           z.string(),

  agentId:        z.string().default("0000008"),
  agentName:      z.string().default("Agent Name"),

  fromName:       z.string().min(1, "Required, and not meet minimum character"), // suplier
  fromEmail:      z.string().email("Invalid email address"),
  fromAddress:    z.string().min(1, "Required, and not meet minimum character"),

  clientName:     z.string().min(1, "Required, and not meet minimum character"), // buyer
  clientEmail:    z.string().min(1, "Required, and not meet minimum character"),
  clientAddress:  z.string().min(1, "Required, and not meet minimum character"),
  
  // clientId:       z.string().optional(), // Add this field
  // vendorId:       z.string().optional(), // Add this field
  // quotationId:    z.string().optional(), // Add this field
  dueDate:        z.string().optional(),
  
  // subTotal:       z.number().min(1, "Total can't be 0"),
  // discountPercent: z.number().min(1, "Total can't be 0"),
  // discountTotal:  z.number().min(1, "Total can't be 0"),
  // vatPercent:     z.number().min(1, "Total can't be 0"),
  // vatTotal:       z.number().min(1, "Total can't be 0"),

  // total:          z.number().min(1, "Total can't be 0"),
  currency:       z.string().min(1, "Required, please select cuurency"),
  
  itemId:          z.string().min(1, "Required, and not meet minimum character"), // get data from hidden input 
  // itemModel:       z.string().min(1, "Required, and not meet minimum character"),
  // itemName:        z.string().min(1, "Required, and not meet minimum character"), // get data from hidden input
  itemDescription: z.string().min(1, "Required, and not meet minimum character"),
  itemQuantity:     z.number().min(1, "Total can't be 0"),
  itemRate:        z.number().min(1, "Total can't be 0"),
  itemTotal:       z.number().optional(),

  note:           z.string().optional(),

  status:         z.enum(["PENDING","OVERDUE","PAID","CANCELLED","CANTCOLLECT"]).default("PENDING"),

});



export const invoiceSchema = z.object({
  title: z.string().min(2, "Required, and not meet minimum character"),
  invoiceNumber:  z.string().optional(), // Add this field
  date:           z.string(),

  fromName:       z.string().min(1, "Required, and not meet minimum character"), // suplier
  fromEmail:      z.string().email("Invalid email address"),
  fromAddress:    z.string().min(1, "Required, and not meet minimum character"),

  clientName:     z.string().min(1, "Required, and not meet minimum character"), // buyer
  clientEmail:    z.string().min(1, "Required, and not meet minimum character"),
  clientAddress:  z.string().min(1, "Required, and not meet minimum character"),
  
  // clientId:       z.string().optional(), // Add this field
  // vendorId:       z.string().optional(), // Add this field
  // quotationId:    z.string().optional(), // Add this field
  dueDate:        z.string().optional(),
  
  // subTotal:       z.number().min(1, "Total can't be 0"),
  // discountPercent: z.number().min(1, "Total can't be 0"),
  // discountTotal:  z.number().min(1, "Total can't be 0"),
  // vatPercent:     z.number().min(1, "Total can't be 0"),
  // vatTotal:       z.number().min(1, "Total can't be 0"),

  // total:          z.number().min(1, "Total can't be 0"),
  currency:       z.string().min(1, "Required, please select cuurency"),
  
  itemId:          z.string().min(1, "Required, and not meet minimum character"), // get data from hidden input 
  // itemModel:       z.string().min(1, "Required, and not meet minimum character"),
  // itemName:        z.string().min(1, "Required, and not meet minimum character"), // get data from hidden input
  itemDescription: z.string().min(1, "Required, and not meet minimum character"),
  itemQuantity:     z.number().min(1, "Total can't be 0"),
  itemRate:        z.number().min(1, "Total can't be 0"),
  itemTotal:       z.number().optional(),

  note:           z.string().optional(),

  status:         z.enum(["PENDING","OVERDUE","PAID","CANCELLED","CANTCOLLECT"]).default("PENDING"),

});

