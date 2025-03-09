import React from 'react'
import CreateEnquiryForm from '../form/CreateEnquiryForm'

const Enquiry = () => {

  return (
    <div>
      <div className='flex flex-col items-center justify-center py-12 lg:py-20'>
        <div className='text-center'>
          <div className='text-center mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter'>
            <h1>
              Send Us Your Requirments
            </h1>
          </div>
          <div className='max-w-xl mx-auto mt-4 items-center justify-center text-center'>
            <p className='lg:text-lg text-muted-foreground'>Get in touch with us to learn more about our services and how we can help you achieve your business goals.</p>
            {/* <div className='mt-5 mb-12 text-center items-center justify-center'>
                <button className='gap-2'><span>Start Your 1st Step With Us From Here Now</span></button>
                
            </div>   */}
          </div>
        </div>
      </div> 
      <CreateEnquiryForm /> 
    </div>
  ) 
} 

export default Enquiry