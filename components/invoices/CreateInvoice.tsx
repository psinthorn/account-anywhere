"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '../ui/calendar'

const CreateInvoice = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
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
        <div className="flex flex-col gap-1 w-fit">
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="secondary" >Draft</Badge>
            <Input type='text' placeholder='Invoice Title' />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div>
            <Label>Invoice No.</Label>
            <div className="flex">
              <span className="flex items-center px-3 rounded-l-md border border-r-0 bg-muted">#</span>
              <Input type='text' placeholder='INV11120008' className='rounded-l-none' />
            </div>
          </div>   
          <div>
            <Label>Currency</Label>
            <Select defaultValue='thb'>
              <SelectTrigger>
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='thb'>Thai Baht --THB</SelectItem>
                <SelectItem value='usd'>United States Dollar --USD</SelectItem>
                <SelectItem value='eur'>Euro --EUR</SelectItem>
              </SelectContent>
            </Select>
          </div>      
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>From</Label>
            <div className='space-y-2'>
              <Input placeholder='Your Name/Company Name' />
              <Input placeholder='Your Email' />
              <Input placeholder='Your Address' />
            </div>
          </div>
          <div>
            <Label>To</Label>
            <div className='space-y-2'>
              <Input placeholder='Client Name' />
              <Input placeholder='Client Email' />
              <Input placeholder='Client Address' />
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
          </div>    

          <div>
            <div>
              <Label>Due Date</Label>
            </div>
            <Select>
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
            
          </div>

        </div>
      </CardContent>
    </Card>
  )
}

export default CreateInvoice