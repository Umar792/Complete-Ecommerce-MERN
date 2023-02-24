import React from 'react'
import AllproductCall from '../../AllproductApical/AllproductCall'
import { useProductContext } from '../../ContextApi/ProductContext/ProductContext'

const Karandi = () => {
    const {karandi} = useProductContext()
  return (
    <div>
        <AllproductCall ProductsData={karandi}/>
    </div>
  )
}

export default Karandi
