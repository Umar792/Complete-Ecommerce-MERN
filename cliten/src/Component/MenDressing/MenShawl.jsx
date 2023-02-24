import React from 'react'
import AllproductCall from '../../AllproductApical/AllproductCall'
import { useProductContext } from '../../ContextApi/ProductContext/ProductContext'

const MenShawl = () => {
    const {menShawl} = useProductContext()
  return (
    <div>
      <AllproductCall ProductsData={menShawl}/>
    </div>
  )
}

export default MenShawl
