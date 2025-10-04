
import React from 'react'
import RelatedProduct from '@/app/Components/RelatedProducts/RelatedProduct'
import SubCategory from '@/app/Components/Subcategories/SubCategories'


export default function page() {
   
  return (
    <>
       
      <div className='container-fluid'>

        <SubCategory />
        <hr />

        <RelatedProduct />
      </div>
    </>
  )
}
