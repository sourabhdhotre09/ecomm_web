import React from 'react'
import arrow from '/src/assets/breadcrum_arrow.png'

const Breadcrumbs = (props) => {
  return (
    <div className="breadcrumbs py-5">
      Home <img src={arrow} alt="" /> {props.category} <img src={arrow} alt="" /> {props.product_name}
    </div>
  )
}

export default Breadcrumbs