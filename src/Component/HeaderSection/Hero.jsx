import React from 'react'
import play from "../../Assets/Play_Circle.png"

export const Hero = () => {
  return (
    <section className="relative  px-6 py-16 ms-10 h-full">

      <div className="max-w-lg ">
        <h1 className="text-5xl font-bold text-darkBlue leading-tight">
          One More Friend <br /> 
        </h1>
        <span className='text-3xl font-bold text-darkBlue leading-tight'>Thousands More Fun!</span>
        <p className="text-gray-600 mt-4">
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
          We have 200+ different pets that can meet your needs!
        </p>
        <div className="mt-6 flex space-x-4 d-flex">

          <div className="flex items-center   border border-black rounded-full">
            <button className="flex items-center text-black px-6 py-3  ">
              View Intro
            </button>
            <img src={play} alt="Play Icon" className="w-8 h-8 me-3" />
          </div>

          <button className="bg-DarkBlue80 border text-white px-6 py-3 rounded-full ">Explore Now</button>
        </div>
      </div>


    </section>
  )
}
