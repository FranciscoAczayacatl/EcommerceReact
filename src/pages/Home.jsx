import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  filterInputThunk, filterProductThunk, getProductThunk } from '../store/slices/products.slice';


const Home = () => {

  const dispatch = useDispatch();
  const products=useSelector(state=>state.products);

  const [categories,setCategories]=useState([]);
  const [inputSearch, setInputSearch]=useState('');

  useEffect(() => {
    dispatch(getProductThunk());

    axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
    .then(res=>setCategories(res.data.data.categories));
  }, []);
  
  return (
    <div className='home'>

      <div className='search-input'>
        <div class="input-group mb-3 ">
          <input
           type="text" 
           class="form-control" 
           placeholder="Search" 
           aria-label="Recipient's username" 
           aria-describedby="button-addon2"
           value={inputSearch}
           onChange={e=>setInputSearch(e.target.value)}
           />
          <button class="btn btn-primary" type="button" id="button-addon2"
           onClick={()=>dispatch(filterInputThunk(inputSearch))}>Search</button>
        </div>
      </div>
      <div className='buttons'>
        {categories.map((category) => (
        
        <button type="button" class="btn btn-info" onClick={()=>dispatch(filterProductThunk(category.id))}>{category.name}</button>

      ))}
      </div>
      
     <div className='cards_container'>
     {
        products.map(product=>(
          <div className='product-card'>
          <Card style={{ width: '18rem' }}>
          <Link to={`/products/${product.id}`} className='product-card'>
            <Card.Img variant="center" src={product.productImgs?.[0]}  className='img'/>
            <Card.Body>
              <Card.Title className='dark'>{product.title}</Card.Title>
              <Card.Text>
                <h6 className='price'>Price: {product.price}</h6>
                
                <p className='dark'><b>Status: </b>
                  {
                    <div>
                      {
                        product.status !== 'active'?<i class="fa-solid fa-face-frown red"></i>: <i class="fa-solid fa-face-laugh-beam green"></i>
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
  );
};

export default Home;