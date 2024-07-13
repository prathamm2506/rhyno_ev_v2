import React from 'react'
import Prodland from '../components/prodland/Prodland'
import Spec from '../components/specs/Specs'
import ColorPicker from '../components/colorpicker/ColorPicker'
import Product from '../components/product/Product'
import ProductNew from '../components/product/ProductNew'

const SE03 = () => {
  return (
    <div>
      {/* <Prodland/> */}
      <ProductNew/>
      <Spec/>
      <ColorPicker/>
    </div>
  )
}

export default SE03
