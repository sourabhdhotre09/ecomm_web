import React, { useContext } from 'react'
import Product from '../components/product'
import { ShopContext } from '../Context/ShopContext'

const ShopCategory = ({banner,category}) => {

  const {all_product} = useContext(ShopContext);

  console.log(all_product);
  
  return (
    <div className='shop-category mb-5'>
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-12">
            <img src={banner} alt="" className='w-100'/>
          </div>
        </div>
        <div className="row my-4">
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
          <div className="col-md-12 products_aligned">
          {
            all_product
              .filter(item => item.category === category)
              .map((item, index) => (
                <Product 
                  key={index} 
                  id={item.id} 
                  product_name={item.name} 
                  product_img={item.image} 
                  category={item.category}
                  product_new_price={item.new_price} 
                  product_old_price={item.old_price} 
                />
              ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCategory
