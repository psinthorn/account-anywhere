import CardFullWidth from '@/components/dashbaord/CardFullWidth'
import React from 'react'

const Vouchers = () => {
  return (
    <CardFullWidth title='Vouchers' description='Manage your vouchers' buttonName="Create Voucher" link="/dashboard/vouchers/create" />
  )
}

export default Vouchers