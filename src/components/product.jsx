import React from 'react'
import { Link } from 'react-router-dom';


const product = (props) => {

  // Convert to fixed 2 decimal points and split {key, product_name,product_img, product_new_price, product_old_price}
  const safePrice = parseFloat(props.product_new_price) || 0;
  const [intPart, decimalPart] = safePrice.toFixed(2).split('.');
  
  return (
    <>
    <div productid={props.id} className="product_card card">
      <div className="imgBox">
        <img src={props.product_img} alt="mouse corsair" className="mouse"/>
      </div>
      <div className="contentBox">
        <h3 className='product-name'>{props.product_name}</h3>
        <h5>Category</h5>
        <div className="product_price">
          <h2 className="price">₹ {intPart}.<small>{decimalPart}</small></h2>
          <h3 className='old_price'>₹{props.product_old_price}</h3>
        </div>
        {/* <a href="#" className="buy">Add to Cart</a> */}
        <Link to={`/product/${props.id}`} className='buy'>Add to Cart</Link>
      </div>
    </div>
    </>
  )
}

export default product
