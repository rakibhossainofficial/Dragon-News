import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header'
import LatestNews from '../Components/LatestNews'

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />

        <section className='w-11/12 mx-auto'>
          <LatestNews />
        </section>

      </header>

      <main>
        {/* left nav  */}
        <section className="left_nav">

        </section>
        {/* Main */}

        <section className="main">
          <Outlet />
        </section>
        {/* right nav  */}

        <section className="right_nav">

        </section>
      </main>
    </div>
  )
}

export default HomeLayout
