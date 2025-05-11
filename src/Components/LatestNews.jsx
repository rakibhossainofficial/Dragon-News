import React from 'react'
import Marquee from "react-fast-marquee";



const LatestNews = () => {
  return (
    <div className='flex items-center justify-baseline gap-3 bg-[var(--color-base-200)] p-2'>
        <p className='bg-[var(--color-socondary)]  px-3 py-2 text-[var(--color-text-300)] font-semibold'>Latest</p>
        <Marquee pauseOnHover='true' className='flex gap-5 items-center'>
        <p className='font-bold '>Lorem ipsum dolor sit ametquidem amet ullam iure dignissimos. Animi, esse quod!</p>
        <p className='font-bold '>Lorem ipsum dolor sit ametquidem amet ullam iure dignissimos. Animi, esse quod!</p>
        <p className='font-bold '>Lorem ipsum dolor sit ametquidem amet ullam iure dignissimos. Animi, esse quod!</p>
        </Marquee>
    </div>
  )
}

export default LatestNews
