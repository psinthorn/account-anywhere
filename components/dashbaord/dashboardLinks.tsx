"use client"

import { cn } from '@/lib/utils'
import { Circle, DollarSign, Folder, HandCoins, Home, LayoutDashboard, Notebook, Pen, Plus, Receipt, TicketPlus, Trees, Waves } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const dashboardLinks = [
  {
    id: 0,
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard
  },
  {
    id: 1,
    name: 'Purchasing Requests',
    href: '/dashboard/purchasing-requests',
    icon: Pen
  },
  {
    id: 2,
    name: 'Purchasing Orders',
    href: '/dashboard/purchasing-orders',
    icon: Plus
  },
  {
    id: 3,
    name: 'Quotations',
    href: '/dashboard/quotations',
    icon: HandCoins
  },
  {
    id: 4,
    name: 'Vochers',
    href: '/dashboard/vouchers',
    icon: TicketPlus
  },
  {
    id: 5,
    name: 'Receipt',
    href: '/dashboard/receipts',
    icon: Receipt
  },
  {
    id: 6,
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: Notebook
  },
  {
    id: 7,
    name: 'Tax-Invoices',
    href: '/dashboard/tax-invoices',
    icon: DollarSign
  }
];

export const productsLink = [
  {
    id: '8',
    name: 'Products',
    href: '/dashboard/products',
    icon: Folder
  },
  {
    onedaytrip: [
      {
        id: '9',
        name: 'Angthorn National Marine Park',
        href: '/dashboard/products/oneday-trip/angthong-national-marine-park',
        icon: Trees,
      }, 
      {
        id: '10',
        name: 'Koh Tao & Koh Nangyuan',
        href: '/dashboard/products/oneday-trip/koh-tao-kohnang-yuan',
        icon: Waves,
      },
      {
        id: '11',
        name: 'Fullmoon Party',
        href: '/dashboard/products/tour-package/fullmoon-party',
        icon: Circle,
      }
    ]
  }

]



const DashboardLinks = () => {
  const pathName = usePathname()
  return (
    <>
      { dashboardLinks.map((link) => (

          <Link key={link.id} href={link.href} className={cn(pathName === link.href 
            ? 'text-primary bg-primary/10' 
          : 'text-muted-foreground hover:text-foreground', 'flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary')}>
            <link.icon className='size-4 mr-2'/> {link.name}
          </Link>
      
      ))}

      <hr className='py-2'/>
      { productsLink.map((link) => {
        if(link.onedaytrip){
          return link.onedaytrip.map((trip) => (
            <div className='ml-2'>
              <Link key={trip.id} href={trip.href} className={cn( 
                pathName === trip.href ? 'text-primary bg-primary/10 text-sm'  
                : 'text-muted-foreground hover:text-foreground', 'flex items-center text-sm gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary')}>
                <trip.icon className='size-4 mr-2'/> {trip.name}
              </Link>
            </div>
          ))
        }else{
          return (
              <Link key={link.id} href={link.href} className={cn(pathName === link.href 
                ? 'text-primary bg-primary/10 font-bold' 
                : 'text-muted-foreground hover:text-foreground', 'flex items-center font-bold gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary')}>
                <link.icon className='size-4 mr-2' />{link.name}
              </Link>
          );
        }
         
        })
      }
    </>
  )
}

export default DashboardLinks