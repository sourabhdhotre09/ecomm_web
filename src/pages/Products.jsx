import React from 'react'
import Product from '../components/product'
import products from '../assets/all_product'

const Products = () => {
  
  return (
    <>
      <div className="container py-5">
        <div className="row mb-3">
            <div className="col-md-10">
            <h2 className='mb-3'>Products</h2>
          </div>
          <div className="col-md-2">
              <select name="" id="" className='form-select'>
                <option value="">Sort By</option>
                <option value="">Name (Ascending)</option>
                <option value="">Name (Descending)</option>
                <option value="">Price: Low to High</option>
                <option value="">Price: High to Low</option>
              </select>
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
