import React from 'react'
import { NavLink } from 'react-router'



const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
      {/* blank div  */}
      <div></div>
      {/* Navbar */}
      <div className='flex items-center gap-8 font-semibold text-[var(--color-accent)]'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
      </div>
      {/* login btn  */}

      <div className='flex items-center gap-4'>
        <img src="/images/user.png" alt="user-photo" />
        <button className='btn btn-primary'>Login</button>
      </div>
    </div>
  )
}

export default Navbar




