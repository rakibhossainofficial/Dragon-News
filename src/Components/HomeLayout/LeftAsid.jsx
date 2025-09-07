import React, { Suspense } from 'react'
import AllCategories from '../Categories/AllCategories'

const LeftAsid = () => {
  return (
    <div>
      <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>

      <AllCategories></AllCategories>
      </Suspense>
    </div>
  )
}

export default LeftAsid
