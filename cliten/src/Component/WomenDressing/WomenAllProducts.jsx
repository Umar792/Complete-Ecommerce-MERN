import React from 'react'
import { useProductContext } from '../../ContextApi/ProductContext/ProductContext'
import MainCategory from '../commonAllMainCategory/MainCategory'

const WomenAllProducts = () => {
  const {women} = useProductContext();
  return (
    <div>
      <MainCategory products={women} title={"Women All Products"} />
    </div>
  )
}

export default WomenAllProducts
