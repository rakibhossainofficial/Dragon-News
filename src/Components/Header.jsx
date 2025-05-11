import { format } from 'date-fns'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-baseline flex-col gap-3'>
      <img src="/images/logo.png" alt="" />
      <p className='text-accent'>Journalism Without Fear or Favour</p>
      <p className='font-semibold text-accent'>{format(new Date, "EEEE, MMMM MM , yyyy ")}</p>
    </div>
  )
}

export default Header
