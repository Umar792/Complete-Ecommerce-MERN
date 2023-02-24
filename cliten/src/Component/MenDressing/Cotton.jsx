import React from 'react'
import AllproductCall from '../../AllproductApical/AllproductCall'
import { useProductContext } from '../../ContextApi/ProductContext/ProductContext'

const Cotton = () => {
    const {cotton} = useProductContext()
  return (
    <div>
      <AllproductCall ProductsData={cotton}/>
    </div>
  )
}

export default Cotton
