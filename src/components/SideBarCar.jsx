import React, { useEffect, useState } from 'react';
import { Button, Card, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartThunk } from '../store/slices/cart.slice';


const SideBarCar = ({handleClose,show}) => {

  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCartThunk());
  },[]);

  const cart=useSelector(state=>state.cart);
  let total=0;

  return (
    <div>
      <>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title ><h1 style={{color:'cadetblue'}}>Cart:</h1></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           {
             cart.map(product=>(
              <Link to={`/products/${product.id}`} style={{textDecoration:'none'}}>
                <Card style={{ width: '18rem',marginBottom:`${2}vh` }}>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
                  <Card.Text>
                    <p>{product.brand}</p>
                    
                  </Card.Text>
                </Card.Body>
              </Card>

              </Link>
              
             ))
           }
           <Button>pay</Button>
          </Offcanvas.Body>
          
        </Offcanvas>
      </>
    </div>
  );
};

export default SideBarCar;