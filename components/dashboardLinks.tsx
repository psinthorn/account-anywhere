"use client"

import { cn } from '@/lib/utils'
import { DollarSign, HandCoins, Home, LayoutDashboard, Notebook, Pen, Plus, Receipt, TicketPlus } from 'lucide-react'
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
    </>
  )
}

export default DashboardLinks