import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Plus, PlusCircle } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  description: string;
  total?: number;
  link: string,
  icon: any;
}

const DashboardCardBlock = ({title, description, total, link, icon}: DashboardCardProps) => {
  return (
    
      <Card>
        <CardHeader className='flex flex-row items-center justify-between'>
          <CardTitle className='text-sm font-medium' >
            {title}
          </CardTitle>
            {icon}
          {/* <CardDescription>
            {description}
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          <h2 className='flex items-center text-2xl font-bold'>
            {/* <Plus/> */}
            {total}
          </h2>
          <p className='text-xs text-muted-foreground'>{description}</p>
        </CardContent>
      </Card>
    
  )
}

export default DashboardCardBlock