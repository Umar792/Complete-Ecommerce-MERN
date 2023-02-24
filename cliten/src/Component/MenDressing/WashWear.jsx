import React from 'react'
import AllproductCall from '../../AllproductApical/AllproductCall';
import { useProductContext } from '../../ContextApi/ProductContext/ProductContext'

const WashWear = () => {
    const {washWear} = useProductContext();
  return (
    <div>
       <AllproductCall ProductsData={washWear}/>
    </div>
  )
}

export default WashWear
