import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import removeArrow from '/src/assets/cart_cross_icon.png'
import { toast } from 'react-toastify';

const Cart = () => {

  const {all_product, removeFromCart, cartItems,totalPrice} =useContext(ShopContext);
  const notify =()=> toast.warn('The project is currently underway.');

  return (
    <>
      <div className="container py-5">
        <div className="cart_page">
          <h4>Cart Item:</h4>
          <table className='table table-bordered text-center mb-5'>
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                all_product.map((item)=>{
                  if(cartItems[item.id]>0){
                    return( 
                      <tr>
                        <td><img src={item.image} alt="" className='product_icon'/></td>
                        <td>{item.name}</td>
                        <td>${item.new_price}</td>
                        <td><div className="product_qty">{cartItems[item.id]}</div></td>
                        <td>${item.new_price * cartItems[item.id]}</td>
                        <td><img src={removeArrow} onClick={()=>{removeFromCart(item.id)}} alt="" className='remove_arrow'/></td>
                      </tr>
                    )
                  }
                })
              }
            </tbody>
          </table>

          <div className="row">
            <div className="col-md-5">
              <table className='table table-bordered text-center mb-3'>
                <tbody>
                  <tr>
                    <th>SubTotal</th>
                    <td>${totalPrice}</td>
                  </tr>
                  <tr>
                    <th>Delivery Charges</th>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <th>Total</th>
                    <td>${totalPrice}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button className='btn btn-danger rounded-3 my-4 px-4 py-2' onClick={()=>{notify()}}>Checkout to Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
