import CardFullWidth from '@/components/dashbaord/CardFullWidth'
import React from 'react'

const PurchasingOrders = () => {
  return (
    <CardFullWidth title='Purchasing Orders' description='Manage your purchasing orders' buttonName="Create Purchasing Order" link="/dashboard/purchasing-orders/create" />
  )
}

export default PurchasingOrders