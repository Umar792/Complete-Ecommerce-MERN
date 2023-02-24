import React from 'react'
import { useProductContext } from '../../ContextApi/ProductContext/ProductContext'
import MainCategory from '../commonAllMainCategory/MainCategory'

const MenAllproduct = () => {
    const {Men} = useProductContext();
  return (
    <div>
      <MainCategory products={Men} title={"Men All Products"} />
    </div>
  )
}

export default MenAllproduct
