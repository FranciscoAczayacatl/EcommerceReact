import React,  { useState } from  "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


import SideBarCar from "./SideBarCar";
const NavBar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container style={{display:'flex', justifyContent:'space-around'}}>
          <Navbar.Brand as={Link} to="/">
            Ecommerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">
              <i class="fa-solid fa-user"></i>
              </Nav.Link>
              <Nav.Link as={Link} to="/purchases">
               <i class="fa-solid fa-list"></i>
              </Nav.Link>
              <Nav.Link onClick={handleShow}><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <SideBarCar handleClose={handleClose}  show={show}/>
      
    </div>
  );
};

export default NavBar;
