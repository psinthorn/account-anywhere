import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, User2 } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { signOut } from '../utils/auth';
import DashboardLinks from '@/components/dashbaord/dashboardLinks';

const Navbar = () => {
  return (
    <header className='flex items-center h-14 border-b gap-4 bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={'outline'} size="icon" className='md:hidden'>
                <Menu className='size-5' />
              </Button>
            </SheetTrigger>
            <SheetContent side='left'>
              <nav className='grid gap-4 mt-10'>
                <DashboardLinks />
              </nav>  
            </SheetContent>
          </Sheet>
          <div className="flex items-center ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className='rounded-full' variant="outline" size="icon">
                    <User2 />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href='/dashboard'>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href='/dashboard/invoices'>Invoices</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <form className='w-full' action={
                    async () => {
                      "use server"
                      await signOut()
                    }
                  }>
                    <button className='w-full text-left'>Log out</button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
    </header>
  )
}

export default Navbar