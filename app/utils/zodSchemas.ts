import { z } from 'zod'



export const onboardingSchema =  z.object({
  firstName: z.string().min(2, "Minimum is 2 characters"),
  lastName: z.string().min(2, "Minimum is 2 characters"),
  address: z.string().min(2, "Minimum is 2 characters")
})

