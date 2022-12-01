import React, { useEffect, useState } from "react";
import { Button, Card, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkoutCartThunk, delatedCartThunk, getCartThunk } from "../store/slices/cart.slice";

const SideBarCar = ({ handleClose, show }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  const cart = useSelector((state) => state.cart);
  const deleted = (id) => {
    dispatch(delatedCartThunk(id));
  }

  return (
    <div>
      <>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h1 style={{ color: "cadetblue" }}>Cart:</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {cart.map((product) => (
              <div>
                
                <Card style={{ width: "18rem", marginBottom:'2vh' }}>
                <Link
                to={`/products/${product.id}`}
                style={{ textDecoration: "none" }}
                key={product.id}
              >
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" >
                      ${product.price}
                    </Card.Subtitle>
                    <Card.Text>
                      <p>{product.brand}</p>
                     
                    </Card.Text>
                  </Card.Body>
              </Link>
                <Button style={{background:'red'}} onClick={()=>deleted(product.id)}><i className="fa-solid fa-trash"></i></Button>
                </Card>
              
              
              </div>
              
            ))}
            <Button onClick={() => dispatch(checkoutCartThunk())}>
              Chekout
            </Button>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
};

export default SideBarCar;
