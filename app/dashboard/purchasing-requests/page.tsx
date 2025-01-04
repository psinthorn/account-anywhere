import CardFullWidth from '@/components/dashbaord/CardFullWidth'
import React from 'react'

const PurchasingRequests = () => {
  return (
    <CardFullWidth title='Purchasing Requests' description='Manage your purchasing requests' buttonName="Create Purchasing Request" link="/dashboard/purchasing-requests/create" />
  )
}

export default PurchasingRequests