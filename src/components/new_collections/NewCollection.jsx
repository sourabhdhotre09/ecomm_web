import React from 'react'
import Product from '../../components/product'
import new_collections from '../../assets/new_collections'

const NewCollection = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h2 className='mb-3'>New Collections</h2>
        </div>
      </div>  
      <div className="row">
          <div className="col-md-12 products_aligned">
            {
                new_collections.map((item,index)=>(
                    <Product key={index} id={item.id} product_name={item.name} product_img={item.image} category={item.category} product_new_price={item.new_price} product_old_price={item.old_price}/>
                ))
            }
        </div>
      </div>  
    </>
  )
}

export default NewCollection
