import React, { ReactNode } from 'react'
import { requireAuth } from '../utils/hooks';
import SideBar from './SideBar';
import Navbar from './Navbar';
import prisma from '../utils/db';
import { redirect } from 'next/navigation';

const getUser = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
    id: userId
    }, 
    select: {
      firstName: true,
      lastName: true,
      address: true
    }
  });
  console.log(user);
  if(!user?.firstName || !user?.lastName || !user.address ) {
    redirect("/onboarding")
  };
};

const DashboardLayout = async ({children}: {children:ReactNode}) => {
  const session = await requireAuth();
  const user = await getUser(session.user?.id as string);
  return (
    <div className='grid w-full min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
        <SideBar />
      <div className='flex flex-col'>
        <Navbar />
        <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
          {children}
        </main>
      </div>
      {/* <div>
        {children}
      </div> */}
    </div>
  )
}

export default DashboardLayout