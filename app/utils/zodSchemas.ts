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
  avatar: z.string().min(2, "Minimum is 2 characters"),
  status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
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

