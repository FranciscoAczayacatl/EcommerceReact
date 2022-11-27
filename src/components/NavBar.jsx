import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
   <div>
     <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand as={Link} to='/'>Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            <Nav.Link as={Link} to='/purchases'>Purchases</Nav.Link>
            <Nav.Link>car (Sidebar)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  );
};

export default NavBar;