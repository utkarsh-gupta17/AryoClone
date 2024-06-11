"use client";
import { Carousel } from "flowbite-react";
import React from 'react'

const Carousal = () => {
  return (
    <div className="h-24">
    <Carousel>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 1
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 2
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 3
      </div>
    </Carousel>
  </div>
  )
}

export default Carousal
