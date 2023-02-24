import React from 'react'
import { useProductContext } from '../../ContextApi/ProductContext/ProductContext'
import MainCategory from '../commonAllMainCategory/MainCategory'

const BoyAllProducts = () => {
    const {boy} = useProductContext()
  return (
    <div>
      <MainCategory products={boy} title={"Boys All Products"} />
    </div>
  )
}

export default BoyAllProducts
