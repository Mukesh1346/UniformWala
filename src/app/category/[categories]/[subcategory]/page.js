
import HeroSection from '@/app/Components/Hero/Hero'
import RelatedProduct from '@/app/Components/RelatedProducts/RelatedProduct'
import SubCategory from '@/app/Components/Subcategories/SubCategories'
import React from 'react'


export default function page() {
  return (
    <>
        <HeroSection categories={["Salon Uniforms", "Spa Uniforms"]}/>

      <div className='container-fluid'>

      <SubCategory/>
   <hr/>

       <RelatedProduct/>
      </div>
    </>
  )
}
