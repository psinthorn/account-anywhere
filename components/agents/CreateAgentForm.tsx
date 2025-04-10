// use client 
// use conform for form state management
// use zod for form validation

import { CreateAgent, CreateRequest } from "@/app/actions/actions"
import { useActionState } from "react"

const CreateAgentForm = () => {

  const [lastResult, actionForm] = useActionState(CreateAgent, undefined)

}