import React from 'react'
import AllproductCall from '../../AllproductApical/AllproductCall'
import { useProductContext } from '../../ContextApi/ProductContext/ProductContext'

const Boski = () => {
  const {boski} = useProductContext();
  console.log(boski);
  return (
    <div>
      <AllproductCall ProductsData={boski}/>
    </div>
  )
}

export default Boski
