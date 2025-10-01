import React from 'react'
import TrandProducts from '../Components/TrandProducts/TrandProducts'
import HeroSection from '../Components/Hero/Hero'

export default function Page() {
  return (
    <>
    <div>
    <HeroSection categories={["Salon Uniforms", "Spa Uniforms"]}/>
         <TrandProducts/>   
    </div>
      
    </>
  )
}
