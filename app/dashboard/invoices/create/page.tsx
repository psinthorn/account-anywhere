import prisma from "@/app/utils/db";
import { requireAuth } from "@/app/utils/hooks"
import CreateInvoiceForm from "@/components/invoices/CreateInvoiceForm"

const getUserData = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      address: true,
      email: true,
    }
  });

  return user;
}

const CreateInvoicePage = async () => {
  const session = requireAuth();
  const userData = await getUserData((await session).user?.id as string);
  return (
    <CreateInvoiceForm userData={userData} />
  )
}

export default CreateInvoicePage