import React, { useContext } from 'react'
import '/src/components/product_display/productDisplay.css'
import star from '../../assets/star_icon.png'
import star_dull from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { toast } from 'react-toastify';

const ProductDisplay = ({product}) => {

  const {addToCart, removeFromCart, cartItems} =useContext(ShopContext);

  console.log('sss',cartItems);
  const notify =()=> toast.success('Product Added');
  
    
  return (
    <div className='product-single-page'>
        <div className="row">
          <div className="col-md-6 left-side">
              <div className="side_images">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
              </div>
              <div className="main_img">
                <img src={product.image} alt="" />
              </div>
          </div>
          <div className="col-md-6 right-side">
                <h2 className='heading'>{product.name}</h2>
                <div className="star-rating">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_dull} alt="" />
                    (122)
                </div>
                <div className="price_block">
                  <p className="old_price m-0">
                    ${product.old_price}
                  </p>
                  <p className="new_price m-0">
                    ${product.new_price}
                  </p>
                </div>
                <div className="product_sizes">
                  <div className="subheading">
                    <h5>Select Size:</h5>
                  </div>
                  <div className="sizes">
                    <span>SM</span>
                    <span>S</span>
                    <span>L</span>
                    <span>XL</span>
                    <span>XXL</span>
                  </div>
                </div>

                <div className="add_btn">
                  <button onClick={()=>{addToCart(product.id);notify();}} className='btn btn-danger rounded-3 my-4 px-4 py-2'>Add to Cart</button>
                </div>

                <div className="category_div my-2">
                  <b>Category: </b> {product.category}
                </div>

                
          </div>
        </div>
    </div>
  )
}

export default ProductDisplay