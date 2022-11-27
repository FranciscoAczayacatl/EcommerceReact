import React, { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductThunk } from '../store/slices/products.slice';

const ProductsDetail = () => {

  const {id} =useParams();
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  const productList=useSelector(state=>state.products);

  const product=productList.find(productItem=>productItem.id === Number(id));

  const relatedProduct=productList.filter(productsItem=> productsItem.category.id===product.category.id)

  console.log(relatedProduct);

  return (
    <div>
      <div >
        <div key={product?.id} className='product'>
          <div className='imgs-product'>
            <div className='img-firs'><img src={product?.productImgs[0]} alt="" /></div>
            <div className='imgs'>
              <div className='img-second'><img src={product?.productImgs[1]} alt="" /></div>
              <div className='img-second'><img src={product?.productImgs[2]} alt="" /></div>
            </div>
          </div>
          <div>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <h3>${product?.price}</h3>
            <div>

            </div>
            <p className='dark a'><b>Status: </b>
                  {
                    <div>
                      {
                        product?.status !== 'active'? <i class="fa-solid fa-face-frown red"></i>: <i class="fa-solid fa-face-laugh-beam green"></i>
                      }
                    </div> 
                  }
            </p>
            <p></p>
            
            <Button variant="success"><i class="fa-solid fa-cart-plus"></i></Button>
          
          </div>
          
        </div>
      </div>
    


      <div>
        <h3>Related products</h3>
        <div className='related-container'>
        { 
          relatedProduct.map(relatep =>(
            <div className='product-card'>
            <Card style={{ width: '18rem' }}>
            <Link to={`/products/${relatep.id}`} className='product-card'>
              <Card.Img variant="center" src={relatep.productImgs?.[0]}  className='img_o'/>
              <Card.Body>
                <Card.Title className='dark'>{relatep.title}</Card.Title>
                <Card.Text>
                  <h6 className='price'>Price: {relatep.price}</h6>
                  
                  <p className='dark'><b>Status: </b>
                    {
                      <div>
                        {
                          relatep.status !== 'active'?<i class="fa-solid fa-face-frown red"></i>: <i class="fa-solid fa-face-laugh-beam green"></i>
                        }
                      </div>
                    }
                  </p>
                </Card.Text>
                <Button variant="success"><i class="fa-solid fa-cart-plus"></i></Button>
               </Card.Body>
               </Link>
            </Card>
            </div>
          ))
        }

        </div>
      
      </div>

    </div>
   

    
  );
};

export default ProductsDetail;