import React from 'react'
import DashboardCardBlock from '../dashbaord/DashboardCardBlock'
import { Bot, BrainCircuit, Cpu, Database, FolderCode, GaugeCircleIcon, HeartPulse, PlusCircle, ShieldCheck, SmilePlus } from 'lucide-react'

const Services = [
  {
    title: 'Digital Transformation Service',
    description: 'Transform your business operations and enhance customer experiences with our cutting-edge digital solutions.',
    total: 10,
    link: '/adope-project',
    icon: <BrainCircuit/>
  },
  {
    title: 'Technology Implementation',
    description: 'Implement the latest technology to improve your business operations and customer experiences.',
    total: 10,
    link: '/adope-project',
    icon: <Cpu/>
  },
  {
    title: 'Software Development',
    description: 'Develop custom software solutions to meet your business needs and goals.',
    total: 10,
    link: '/adope-project',
    icon: <FolderCode/>
  },
  {
    title: 'Process Automation',
    description: 'Automate your business processes to improve efficiency and reduce costs.',
    total: 10,
    link: '/adope-project',
    icon: <Bot/>
  },
  {
    title: 'Data Management and Analytics',
    description: 'Manage and analyze your data to gain valuable insights and make informed decisions.',
    total: 10,
    link: '/adope-project',
    icon: <Database />
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Protect your business from cyber threats and ensure the security of your data and systems.',
    total: 10,
    link: '/adope-project',
    icon: <ShieldCheck/>
  },
  {
    title: 'Change Management',
    description: 'Manage organizational change effectively to ensure successful implementation of new technologies and processes.',
    total: 10,
    link: '/adope-project',
    icon: <HeartPulse/>
  },
  {
    title: 'Customer Experience Enhancement',
    description: 'Improve customer experiences through digital solutions and personalized services.',
    total: 10,
    link: '/adope-project',
    icon: <SmilePlus/>
  },
]
    
const ServiceList = () => {
  return (
    <div>
      <h2 className='text-4xl font-bold text-center text-primary'>Our Services</h2>
      <p className='text-center text-lg text-muted-foreground px-40 mt-4'>
        We offer a wide range of digital transformation services to help your business succeed in the digital age.
        <br/>
        <span>Explore our services below to learn more about how we can help you achieve your business goals.</span>
      </p>
      <div className='grid gap-4 my-16 md:grid-cols-2 lg:grid-cols-4 md:gap-8'>
        {Services.map((service, index) => (
          <DashboardCardBlock 
            key={index} 
            title={service.title} 
            description={service.description} 
            // total={service?.total} 
            link={service.link} 
            icon={service.icon}
            
          />
        ))}
      </div>
    </div>
  )
}

export default ServiceList