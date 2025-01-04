import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

interface ButtonMainActionsProps {
  name: string
  link: string
}

const ButtonMainActions = ({ name, link}: ButtonMainActionsProps) => {
  return (
    <div>
        <Link href={link} className={buttonVariants()}>
          <PlusIcon/>{name}
        </Link>
    </div>
  )
}

export default ButtonMainActions