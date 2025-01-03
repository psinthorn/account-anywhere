"use server"

import { redirect } from "next/navigation"
import prisma from "./utils/db"
import { requireAuth } from "./utils/hooks"
import { onboardingSchema } from "./utils/zodSchemas"
import { parseWithZod } from "@conform-to/zod"


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