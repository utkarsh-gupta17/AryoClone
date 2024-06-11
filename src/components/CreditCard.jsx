import Image from 'next/image'
import React from 'react'

const CreditCard = () => {
  return (
    <section className='w-full flex justify-between items-center rounded-2xl bg-blue-500 p-5'>
      <div className='w-1/2 p-2'>
        <h1 className='text-sm font-extrabold'>HDFC Credit Card</h1>
        <p className='text-xs mb-2'>Earn Rs. 2100 on every dispatch of HDFC Credit Card</p>
        <button className='text-black bg-white rounded-2xl py-2 px-4 text-xs'>Explore Now!</button>
      </div>
      <Image src='/credit.png' width='20' height='20' className='w-1/2 object-cover'/>
    </section>
  )
}

export default CreditCard