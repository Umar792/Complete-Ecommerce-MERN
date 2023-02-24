import React from 'react'
import AllproductCall from '../../AllproductApical/AllproductCall'
import { useProductContext } from '../../ContextApi/ProductContext/ProductContext'

const Kurta = () => {
  const {kurta} = useProductContext();
  return (
    <div>
      <AllproductCall ProductsData={kurta}/>
    </div>
  )
}

export default Kurta
