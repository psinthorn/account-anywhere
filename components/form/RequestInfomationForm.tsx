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

const RequestInfomationForm = ({userData}: any ) => {

  const [selectedDate, setSelectedDate] = useState(new Date())
  const [rate, setRate] = useState("0")
  const [quantity, setQuantity] = useState("0")
  const [subTotal, setSubTotal] = useState("0")
  const [itemTotal, setItemTotal] = useState("0")
  const [currencyCode, setCurrencyCode] = useState("THB")
  const [tax, setTax] = useState("0")
  const [discount, setDiscount] = useState("0")
  const [dueDate, setDueDate] = useState("cash")

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
      const result = ((parseFloat(rate) || 0) * (parseFloat(quantity) || 0));
      return result;
    };

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
          Request Information 
        </CardTitle>
        <CardDescription>
          Create request information
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

         
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <Label>Request Date.</Label>
              <div className="flex">
                {/* <span className="flex items-center px-3 rounded-l-md border border-r-0 bg-muted">#</span> */}
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
              </div>
              <p className="text-sm text-red-500">{fields.date.errors}</p>
            </div>   

            {/* <Badge variant="secondary" >Tour</Badge> */}
                <div>
                  <div>
                    <Label>Select Package</Label>
                  </div>
                  <Select
                    name={fields.dueDate.name}
                    key={fields.dueDate.key}
                    onValueChange={(value) => setDueDate(value)}
                    value={dueDate}
                    defaultValue="Angthong Nation Marine Park"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Due Date" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value='cash'>Click to Select</SelectItem>
                      <SelectItem value='7'>Angthong Nation Marine Park</SelectItem>
                      <SelectItem value='14'>Koh Tao & Koh Nangyuan</SelectItem>
                      <SelectItem value='30'>Fullmoon Party</SelectItem>
                    </SelectContent>
                  </Select>    
                  <p className="text-sm text-red-500">{fields.dueDate.errors}</p>     
                </div>   
          </div>


          {/* <div className="grid grid-cols-3 gap-6 mb-6">
            <div>
              <Label>Request No. <span className='text-xs text-muted-foreground font-extralight'>(*auto generate)</span></Label>
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
          </div> */}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Please provide your information</Label>
              <div className='space-y-2'>
                <Input 
                  name={fields.fromName.name}
                  key={fields.fromName.key}
                  defaultValue={fields.fromName.initialValue}
                  placeholder='Your Full Name' 
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
                  placeholder='Your Mobile No.' 
                />
                <p className="text-sm text-red-500">{fields.fromAddress.errors}</p>
              </div>
            </div>
            <div>
              <Label>Contact</Label>
              <div className='space-y-2'>
                <Input
                  name={fields.clientName.name}
                  key={fields.clientName.key}
                  defaultValue={fields.clientName.initialValue}
                  placeholder='Hotel Name' />
                <p className="text-sm text-red-500">{fields.clientName.errors}</p>
                <Input
                  name={fields.clientEmail.name}
                  key={fields.clientEmail.key}
                  defaultValue={fields.clientEmail.initialValue}
                  placeholder='Room No.' />
                <p className="text-sm text-red-500">{fields.clientEmail.errors}</p>
                <Input
                  name={fields.clientAddress.name}
                  key={fields.clientAddress.key}
                  defaultValue={fields.clientAddress.initialValue}
                  placeholder='Hotel Area' />
                <p className="text-sm text-red-500">{fields.clientAddress.errors}</p>
              </div>
            </div>
          </div>
          
          <Label>How many seats do you need to reserve?</Label>
          {/* <div className="grid grid-cols-12 gap-4 mb-2 mt-8">
            <p className="col-span-2">Adult</p>
            <p className="col-span-2">Child</p>
            <p className="col-span-2">Estimate Total Price</p>
          </div> */}

          <div className="grid grid-cols-12 gap-4 mb-4">
            <p className="col-span-2">
              <Label>Adults</Label>
              <Input 
                name={fields.itemQuantity.name}
                key={fields.itemQuantity.key}
                type="number" 
                placeholder='0' 
                className='text-right' 
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                // onChange={(e) => (setQuantity(parseInt(e.target.value)), console.log("Quantity: ", quantity))}
              />
              <span className="text-sm text-red-500">{fields.itemQuantity.errors}</span>
            </p>
            <p className="col-span-2">
            <Label>Childs</Label>
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
            <Label>Estimate Total</Label>
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

          <div className='flex justify-between gap-2'>
              <div>
                <p className="col-span-4">
                  <Label>Discount Code?</Label>
                    <Textarea
                      name={fields.itemDescription.name}
                      key={fields.itemDescription.key}
                      placeholder='Add code' />
                      <span className="text-sm text-red-500">{fields.itemDescription.errors}</span>
                </p>
              </div>
              <div className='w-full'>
                <Label>Note</Label>
                <Textarea 
                  name={fields.note.name}
                  key={fields.note.key}
                  placeholder='Add your note here...'
                />
              </div>
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
                <span>Adults Rate</span>
                <span>{formatCurrency(parseInt(subTotal), currencyCode)}</span>
              </div>
              <div className="flex justify-between py-2 border-t">
                <span>Childs Rate</span>
                <span>{formatCurrency(parseInt(subTotal) , currencyCode)}</span>
              </div>
              <div className="flex justify-between py-2 border-t">
                <span>Total</span>
                <span>{formatCurrency(parseInt(subTotal), currencyCode)}</span>
              </div>
              {/* <div className="flex justify-between py-2 border-t">
                <span>Vat 7%</span>
                <span className='font-medium'>{formatCurrency(parseInt(tax),currencyCode)}</span>
              </div> */}
              {/* <div className="flex justify-between py-2 border-t">
                <span>Grand Total ({currencyCode})</span>
                <span className='font-medium underline underline-offset-2'>{formatCurrency(parseInt(subTotal)+parseInt(tax), currencyCode)}</span>
              </div> */}
            </div>
          </div>

           

            <div className="flex items-center justify-end mt-6">
              <div>
                <SubmitButton text="Send Request" />
              </div>
            </div>
        </form>
      </CardContent>
    </Card>
  )
}



export default RequestInfomationForm