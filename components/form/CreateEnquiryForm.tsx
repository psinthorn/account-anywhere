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
import SubmitButton from './SubmitButton'
import { CreateInvoice } from '@/app/actions'
import { parseWithZod } from '@conform-to/zod'
import { useForm } from '@conform-to/react'
import { invoiceSchema } from '@/app/utils/zodSchemas'
import { formatCurrency } from '@/app/utils/formatCurrency'

const CreateEnquiryForm = ({userData}: any ) => {

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
          Enquiry Form
        </CardTitle>
        <CardDescription>
          Fill the form to send your your ideas and requierments to us.
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
              <Badge variant="secondary" >Title</Badge>
              <Input  
                name={fields.title.name}
                key={fields.title.key}
                defaultValue={fields.title.initialValue}
                type='text' 
                placeholder='Enquiry Title' 
              />
              
            </div>
            <p className="text-sm text-red-500">{fields.title.errors}</p>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-6">
      
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
              </div>
            </div>
            
            <div>
              <div>
                <Label>Prefer date for call or meet</Label>
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
          </div>
         
          <div className='my-8'>
              <Label>Your Enquiries</Label>
              <Textarea 
                name={fields.note.name}
                key={fields.note.key}
                placeholder='Add your enquiries here...'
              />
          </div>  

            <div className="flex items-center justify-center mt-6">
              <div className="w-full text-muted-foreground">
              *Your enquiry is will keep as confidential and will not be shared with any third party.
              </div>
              <div>
                <SubmitButton text="Send Your Enquiries" />
              </div>
            </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default CreateEnquiryForm