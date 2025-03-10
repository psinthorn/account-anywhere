
import { requestSchema } from "@/app/utils/zodSchemas";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  // get the form data from the request
  const body: unknown = req.json();
  console.log(body);

  // validate the form data
    const result = requestSchema.safeParse(body);
    let zodErrors = {};
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
      });
    }
  
    return NextResponse.json(
      Object.keys(zodErrors).length > 0 
      ? { errors  : zodErrors } 
      : { success: true }
    );
}