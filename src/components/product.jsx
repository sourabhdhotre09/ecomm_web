import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';


const product = (props) => {

  const {addToCart} = useContext(ShopContext);
  // Convert to fixed 2 decimal points and split {key, product_name,product_img, product_new_price, product_old_price}
  const safePrice = parseFloat(props.product_new_price) || 0;
  const [intPart, decimalPart] = safePrice.toFixed(2).split('.');
  
  const notify =()=> toast.success('Product Added');
  return (
    <>
    <Link to={`/product/${props.id}`} onClick={(e)=>{window.scrollTo(0,0)}} className='link_tag'>
      <div productid={props.id} className="product_card card">
        <div className="imgBox">
          <img src={props.product_img} alt="mouse corsair" className="mouse"/>
        </div>
        <div className="contentBox">
          <h3 className='product-name'>{props.product_name}</h3>
          <h5>Category</h5>
          <div className="product_price">
            <h2 className="price">${intPart}.<small>{decimalPart}</small></h2>
            <h3 className='old_price'>${props.product_old_price}</h3>
          </div>
          <button href="#" className="buy" onClick={(e) => {
            e.preventDefault(); // prevent default anchor behavior
            e.stopPropagation(); // stop the click from bubbling up to the Link
            addToCart(props.id);
            notify();
          }}>Add to Cart</button>
        </div>
      </div>
    </Link>
    </>
  )
}

export default product
