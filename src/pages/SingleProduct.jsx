import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import ProductDisplay from '../components/product_display/ProductDisplay';

const SingleProduct = () => {
  
  const {all_product} = useContext(ShopContext);

  const {productId} = useParams();

  const product = all_product.find((e)=> e.id === Number(productId))

  console.log("single", product);

  
  return (
    <div className='container '>
        <Breadcrumbs category={product.category} product_name={product.name} />
        <ProductDisplay product={product}/>
        <div className="product-desc my-4">
          <h4>Description:</h4>
          <p className='desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nobis iste corporis praesentium dolores unde accusamus odio laborum quas commodi explicabo perspiciatis earum magni necessitatibus minus mollitia enim assumenda eius accusantium! Id odio, commodi assumenda, non placeat vitae adipisci fuga, numquam ea ut deleniti iure corrupti nesciunt totam facilis dolor eos ducimus omnis nihil? Rerum omnis inventore recusandae earum fuga doloribus perferendis aperiam magni officia velit tempore explicabo, similique, modi dolorum adipisci? Sapiente cupiditate, quaerat nulla exercitationem quae quod assumenda commodi blanditiis reprehenderit. Deleniti ducimus, molestiae sunt, eligendi ex consectetur vel fuga commodi, deserunt tempora fugit aliquid doloribus autem ut.
          </p>
        </div>
    </div>
  )
}

export default SingleProduct
