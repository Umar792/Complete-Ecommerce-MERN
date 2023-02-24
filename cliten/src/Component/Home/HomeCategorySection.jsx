import React from 'react'
import "./HomeCategorySection.css"
import HomeCatetgoryDressing from './HomeCatetgoryDressing'

const HomeCategorySection = () => {
  return (
    <>
    <div className='Home-men'>
        <div className='men-data'>
            <h2>Dressing</h2>
            <p>COLLECTION 2022</p>
        </div>
        {/* =======================  */}
       
        <div className='men-flex'>
                <HomeCatetgoryDressing />
        </div>
       
    </div>
      
    </>
  )
}

export default HomeCategorySection
