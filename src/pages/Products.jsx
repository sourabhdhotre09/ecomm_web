import React from 'react'
import Product from '../components/product'
import products from '../assets/all_product'

const Products = () => {
  
  return (
    <>
      <div className="container py-5">
        <div className="row mb-3">
          <div className="col-md-12">
            <h2>Products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 products_aligned"  >
          {
            products.map((item,index)=>(
                <Product key={index} id={item.id} product_name={item.name} product_img={item.image} product_new_price={item.new_price} product_old_price={item.old_price}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Products
