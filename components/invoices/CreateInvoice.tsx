import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const CreateInvoice = () => {
  return (
    <Card className='w-full max-w-4xl mx-auto'>
      <CardHeader>
        <CardTitle>
          Invoice
        </CardTitle>
        <CardDescription>
          Create invoice
        </CardDescription>
      </CardHeader>
      <CardContent className='p-6'>
        
      </CardContent>
    </Card>
  )
}

export default CreateInvoice