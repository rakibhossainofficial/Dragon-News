import React from 'react'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
      <h1 className='text-8xl text-emerald-400'>Navbar</h1>
      <Outlet/>
    </div>
  )
}

export default RootLayout
