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
import { CreateInvoice } from '@/app/actions'
import { parseWithZod } from '@conform-to/zod'
import { useForm } from '@conform-to/react'
import { invoiceSchema } from '@/app/utils/zodSchemas'
import { formatCurrency } from '@/app/utils/formatCurrency'

const CreateInvoiceForm = () => {

  const [selectedDate, setSelectedDate] = useState(new Date())
  const [rate, setRate] = useState("0")
  const [quantity, setQuantity] = useState("0")
  const [subTotal, setSubTotal] = useState("0")
  const [itemTotal, setItemTotal] = useState("0")
  const [currencyCode, setCurrencyCode] = useState("THB")
  const [tax, setTax] = useState("0")
  const [discount, setDiscount] = useState("0")

  const [lastResult, actionForm] = useActionState(CreateInvoice, undefined)

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
      const result = (parseFloat(rate) || 0 * parseFloat(quantity) || 0);
      return result;
    };

    useEffect(() => {
      const updateSubTotal = async () => {
        const result = await CalculateSubTotal();
        setSubTotal(result.toString());
      };
      updateSubTotal();

      // const updateTotal = async () => {
      //   const updateItemTotal = await CalculateSubTotal()
      //   setItemTotal(updateItemTotal)
      //   console.log(itemTotal)
      // }  
      // updateTotal()
     
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
          action={actionForm} 
          id={form.id}
          onSubmit={form.onSubmit}
          noValidate
          >

          <input type="hidden" name={fields.date.name} key={fields.date.key} value={selectedDate.toISOString()} />
          <input type="hidden" name={fields.itemTotal.name} key={fields.itemTotal.key} value={itemTotal}  />

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
                  name={fields.invoiceNumber.name}
                  key={fields.invoiceNumber.key}
                  defaultValue={fields.invoiceNumber.initialValue}
                  type='text' 
                  placeholder='INV-111223-008' 
                  className='rounded-l-none' 
                />
               
              </div>
              <p className="text-sm text-red-500">{fields.invoiceNumber.errors}</p>
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
                <span className="text-sm text-red-500">{fields.itemId.errors}</span>
            </p>
            <p className="col-span-4">
              <Textarea
                name={fields.itemDescription.name}
                key={fields.itemDescription.key}
                placeholder='Add your item description here...' />
                <span className="text-sm text-red-500">{fields.itemDescription.errors}</span>
            </p>
            <p className="col-span-2">
              <Input 
                name={fields.itemQuatity.name}
                key={fields.itemQuatity.key}
                type="number" 
                placeholder='0' 
                className='text-right' 
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                // onChange={(e) => (setQuantity(parseInt(e.target.value)), console.log("Quantity: ", quantity))}
              />
              <span className="text-sm text-red-500">{fields.itemQuatity.errors}</span>
            </p>
            <p className="col-span-2">
              <Input 
                name={fields.itemRate.name}
                key={fields.itemRate.key}
                type="number" 
                placeholder="0"
                className='text-right' 
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                // onChange={(e) => (setRate(parseInt(e.target.value)), console.log("Rate: ", rate))}
              />
                <span className="text-sm text-red-500">{fields.itemRate.errors}</span>
            </p>
            <p className="col-span-2">
              <Input              
                type="text" 
                placeholder='0' 
                value={formatCurrency(parseInt(subTotal), currencyCode)}
                className='text-right' 
                disabled 
                // defaultValue={0}
              />
              <span className="text-sm text-red-500">{fields.itemTotal.errors}</span>
            </p>
          </div>
          <hr className='my-8'/>
          <div className="flex justify-start">
            <div className="w-full py-4">
              Term & Condition
            </div>
          </div> 
          <div className="flex justify-end">
            <div className="w-1/3">
              <div className="flex justify-between py-4">
                <span>Subtotal</span>
                <span>{formatCurrency(parseInt(subTotal), currencyCode)}</span>
              </div>
              <div className="flex justify-between py-2 border-t">
                <span>Discont</span>
                <span>{formatCurrency(parseInt(subTotal) , currencyCode)}</span>
              </div>
              <div className="flex justify-between py-2 border-t">
                <span>Total</span>
                <span>{formatCurrency(parseInt(subTotal), currencyCode)}</span>
              </div>
              <div className="flex justify-between py-2 border-t">
                <span>Vat 7%</span>
                <span className='font-medium'>{formatCurrency(parseInt(tax),currencyCode)}</span>
              </div>
              <div className="flex justify-between py-2 border-t">
                <span>Grand Total ({currencyCode})</span>
                <span className='font-medium underline underline-offset-2'>{formatCurrency(parseInt(subTotal)+parseInt(tax), currencyCode)}</span>
              </div>
            </div>
          </div>

            <div>
              <Label>Note</Label>
              <Textarea 
                name={fields.note.name}
                key={fields.note.key}
                placeholder='Add your note here...'
              />
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