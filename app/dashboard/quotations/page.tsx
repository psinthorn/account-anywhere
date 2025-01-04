import CardFullWidth from '@/components/dashbaord/CardFullWidth'
import React from 'react'

const Quotations = () => {
  return (
    <CardFullWidth title='Quotations' description='Manage your quotations' buttonName="Create Quotation" link="/dashboard/quotations/create" />
  )
}

export default Quotations