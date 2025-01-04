
// import { auth, signOut } from '../utils/auth'
// import { redirect } from 'next/navigation';
import DashboardCardBlock from '@/components/dashbaord/DashboardCardBlock';
import { requireAuth } from '../utils/hooks';
import { link } from 'fs';
import { Activity, Coins, DollarSign, User, Waves } from 'lucide-react';

const DashboardPage = async () => {
  const session = await requireAuth();

  const CardBlocks = [
    {
      id: 1,
      title: 'Toal Revenue',
      description: 'Last 30 days revenue',
      total: 79800.00,
      link: '/revenue',
      icon: <DollarSign className='size-4 text-muted-foreground' />
    },
    {
      id: 2,
      title: 'Total Invoices',
      description: 'Total invoices created',
      total: 38,
      link: '/revenue',
      icon: <User className='size-4 text-muted-foreground' />
    },
    {
      id: 3,
      title: 'Paid Invoices',
      description: 'Total paid invoices',
      total: 38,
      link: '/revenue',
      icon: <Coins className='size-4 text-muted-foreground' />
    },
    {
      id: 4,
      title: 'Pending Invoices',
      description: 'Pending invoices waiting for payment',
      total: 38,
      link: '/revenue',
      icon: <Activity className='size-4 text-muted-foreground' />
    },
    
  ];

    return (
      <>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-8'>
          {CardBlocks.map((card) => ((<DashboardCardBlock key={card.id} title={card.title} description={card.description} total={card.total} link={card.link} icon={card.icon}  />)))}
        </div>
      </>
    )
  }

export default DashboardPage