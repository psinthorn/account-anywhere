"use client"

import React, { useActionState, useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '../ui/calendar'
import { Textarea } from '../ui/textarea'
import SubmitButton from '../form/SubmitButton'
import { CreateInvoce } from '@/app/actions'
import { parseWithZod } from '@conform-to/zod'
import { useForm } from '@conform-to/react'
import { invoiceSchema } from '@/app/utils/zodSchemas'
import { formatCurrency } from '@/app/utils/formatCurrency'

const CreateInvoiceForm = () => {

  const [lastResult, action] = useActionState(CreateInvoce, undefined)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [rate, setRate] = useState("")
  const [quantity, setQuantity] = useState("")
  const [subTotal, setSubTotal] = useState("")
  const [currencyCode, setCurrencyCode] = useState("THB")
  const [tax, setTax] = useState(0)

  const [form, fields] = useForm({
      lastResult,
  
      onValidate({ formData }: { formData: FormData }){
        return parseWithZod(formData, {
          schema: invoiceSchema
        });
      },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput"
    });

    const handleCurrencyChange = (value: string) => {
      const code = value.toUpperCase();
      setCurrencyCode(code);
      console.log(currencyCode);
    }

  
    // calculate subtotal when rate or quantity value is change
    const CalculateSubTotal = async () => {
      const result = (parseInt(rate) || 0) * (parseInt(quantity) || 0);
      return result;
    };

    const TaxCalculate = async () => {
      const subTotal = await CalculateSubTotal()
      return setTax(subTotal*7/100)
    }
  
    useEffect(() => {
      const updateSubTotal = async () => {
        const result = await CalculateSubTotal();
        setSubTotal(result.toString());
      };
  
      updateSubTotal();

    }, [rate, quantity, currencyCode]);



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
        <form 
          action={action} 
          id={form.id}
          onSubmit={form.onSubmit}
          noValidate
          >

          <input type="hidden" name={fields.date.name} key={fields.date.key} value={selectedDate.toISOString()} />

          <div className="flex flex-col gap-1 w-fit mb-6">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" >Draft</Badge>
              <Input  
                name={fields.title.name}
                key={fields.title.key}
                defaultValue={fields.title.initialValue}
                type='text' 
                placeholder='Invoice Title' 
              />
              
            </div>
            <p className="text-sm text-red-500">{fields.title.errors}</p>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <Label>Invoice No. <span className='text-xs text-muted-foreground font-extralight'>(*auto generate)</span></Label>
              <div className="flex">
                <span className="flex items-center px-3 rounded-l-md border border-r-0 bg-muted">#</span>
                <Input 
                  name={fields.number.name}
                  key={fields.number.key}
                  defaultValue={fields.number.initialValue}
                  type='text' 
                  placeholder='INV11120008' 
                  className='rounded-l-none' 
                />
               
              </div>
              <p className="text-sm text-red-500">{fields.number.errors}</p>
            </div>   

            <div>
              <Label>Currency</Label>
              <Select 
                name={fields.currency.name}
                key={fields.currency.key}
                defaultValue={currencyCode}
                value={currencyCode}
                onValueChange={(value) => handleCurrencyChange(value)}
               
              >
                <SelectTrigger>
                  <SelectValue 
                    placeholder="Select Currency"
                   />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='THB'>Thai Baht --THB</SelectItem>
                  <SelectItem value='USD'>United States Dollar --USD</SelectItem>
                  <SelectItem value='EUR'>Euro --EUR</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-red-500">{fields.currency.errors}</p>
            </div>      
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>From</Label>
              <div className='space-y-2'>
                <Input 
                  name={fields.fromName.name}
                  key={fields.fromName.key}
                  defaultValue={fields.fromName.initialValue}
                  placeholder='Your Name/Company Name' 
                />
                <p className="text-sm text-red-500">{fields.fromName.errors}</p>
                <Input  
                  name={fields.fromEmail.name}
                  key={fields.fromEmail.key}
                  defaultValue={fields.fromEmail.initialValue}
                  placeholder='Your Email' 
                />
                <p className="text-sm text-red-500">{fields.fromEmail.errors}</p>
                <Input 
                  name={fields.fromAddress.name}
                  key={fields.fromAddress.key}
                  defaultValue={fields.fromAddress.initialValue}
                  placeholder='Your Address' 
                />
                <p className="text-sm text-red-500">{fields.fromAddress.errors}</p>
              </div>
            </div>
            <div>
              <Label>To</Label>
              <div className='space-y-2'>
                <Input
                  name={fields.clientName.name}
                  key={fields.clientName.key}
                  defaultValue={fields.clientName.initialValue}
                  placeholder='Client Name' />
                <p className="text-sm text-red-500">{fields.clientName.errors}</p>
                <Input
                  name={fields.clientEmail.name}
                  key={fields.clientEmail.key}
                  defaultValue={fields.clientEmail.initialValue}
                  placeholder='Client Email' />
                <p className="text-sm text-red-500">{fields.clientEmail.errors}</p>
                <Input
                  name={fields.clientAddress.name}
                  key={fields.clientAddress.key}
                  defaultValue={fields.clientAddress.initialValue}
                  placeholder='Client Address' />
                <p className="text-sm text-red-500">{fields.clientAddress.errors}</p>
              </div>
            </div>

            <div>
              <div>
                <Label>Date</Label>
              </div>
              <Popover>
                  <PopoverTrigger asChild>
                    <Button variant='outline' className='w-[280px]'>
                      <CalendarIcon/>
                      { selectedDate ? ( new Intl.DateTimeFormat('en-US', {dateStyle: "long",}).format(selectedDate) ) : ( <span>Pick up Date </span> ) }
                    </Button>
                  </PopoverTrigger>
                <PopoverContent>
                  <Calendar 
                    selected={selectedDate}
                    mode='single'
                    fromDate={new Date()}
                    onSelect={(date) => setSelectedDate(date || new Date())}
                  />
                </PopoverContent>
              </Popover>
              <p className="text-sm text-red-500">{fields.date.errors}</p>
            </div>    

            <div>
              <div>
                <Label>Due Date</Label>
              </div>
              <Select
              name={fields.dueDate.name}
              key={fields.dueDate.key}
              defaultValue={fields.dueDate.initialValue}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Due Date" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value='cash'>Cash</SelectItem>
                  <SelectItem value='7'>7 days</SelectItem>
                  <SelectItem value='14'>14 days</SelectItem>
                  <SelectItem value='30'>30 days</SelectItem>
                  <SelectItem value='45'>45 days</SelectItem>
                  <SelectItem value='60'>60 days</SelectItem>
                  <SelectItem value='90'>90 days</SelectItem>
                </SelectContent>
              </Select>    
              <p className="text-sm text-red-500">{fields.dueDate.errors}</p>     
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 mb-2 mt-8">
            <p className="col-span-2">Model</p>
            <p className="col-span-4">Descriptions</p>
            <p className="col-span-2">Quantity</p>
            <p className="col-span-2">Rate</p>
            <p className="col-span-2">Total</p>
          </div>
          <div className="grid grid-cols-12 gap-4 mb-4">
            <p className="col-span-2">
              <Input 
                name={fields.itemId.name}
                key={fields.itemId.key}
                type="text" 
                placeholder='MOD-123X321-1' 
                className='text-right' 
                />
                <p className="text-sm text-red-500">{fields.itemId.errors}</p>
            </p>
            <p className="col-span-4">
              <Textarea
                name={fields.itemDescription.name}
                key={fields.itemDescription.key}
                placeholder='Add your item description here...' />
                <p className="text-sm text-red-500">{fields.itemDescription.errors}</p>
            </p>
            <p className="col-span-2">
              <Input 
                name={fields.itemQuatity.name}
                key={fields.itemQuatity.key}
                type="text" 
                placeholder='0' 
                className='text-right' 
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <p className="text-sm text-red-500">{fields.itemQuatity.errors}</p>
            </p>
            <p className="col-span-2">
              <Input 
                name={fields.itemRate.name}
                key={fields.itemRate.key}
                type="text" 
                placeholder='0' 
                className='text-right' 
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
                <p className="text-sm text-red-500">{fields.itemRate.errors}</p>
            </p>
            <p className="col-span-2">
              <Input 
                name={fields.itemTotal.name}
                key={fields.itemTotal.key}               
                type="number" 
                placeholder='0' 
                value={parseInt(subTotal).toFixed(2)}
                className='text-right' disabled 
              />
              <p className="text-sm text-red-500">{fields.itemTotal.errors}</p>
            </p>
          </div>
          <div className="flex justify-end">
            <div className="w-1/3">
              <div className="flex justify-between py-4">
                <span>Subtotal</span>
                <span>{formatCurrency(parseInt(subTotal), currencyCode)}</span>
              </div>
              <div className="flex justify-between py-2 border-t">
                <span>Vat 7%</span>
                <span className='font-medium underline underline-offset-2'>{formatCurrency(tax,currencyCode)}</span>
              </div>
              <div className="flex justify-between py-2 border-t">
                <span>Total ({currencyCode})</span>
                <span className='font-medium underline underline-offset-2'>{formatCurrency((parseInt(subTotal)+tax), currencyCode)}</span>
              </div>
            </div>
          </div>
            <div>
              <Label>Note</Label>
              <Textarea placeholder='Add your note here...'/>
            </div>
            <div className="flex items-center justify-end mt-6">
              <div>
                <SubmitButton text="Send Invoice to Client" />
              </div>
            </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default CreateInvoiceForm