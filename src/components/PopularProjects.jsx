import React from 'react'
import CardProject from './CardProject'

const PopularProjects = () => {
  return (
    <section className='overflow-x-auto scrollbar-hide'>
      <div className='flex w-[31.25rem] py-2 gap-2'>
        <CardProject/>
        <CardProject/>
        <CardProject/>
      </div>
    </section>
  )
}

export default PopularProjects