import React from 'react'
import { useProductContext } from '../../ContextApi/ProductContext/ProductContext'
import MainCategory from '../commonAllMainCategory/MainCategory';

const GirlAllProducts = () => {
    const {girl} = useProductContext();
  return (
    <div>
      <MainCategory products={girl} title={"Girls All Products"} />
    </div>
  )
}

export default GirlAllProducts
