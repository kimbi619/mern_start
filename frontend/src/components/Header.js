import React from 'react';
import { Container, Navbar, Nav, Form, Dropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <header>
      <>

  <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
    <Container>
      <Link to='/'>
        <Navbar.Brand>ProShop</Navbar.Brand>
      </Link>
    <Nav className="ml-auto">
      <Link to = '/'>
        <Nav.Link>Home</Nav.Link>
      </Link>

      <Link to='/cart'>
        <Nav.Link><FaShoppingCart /> Cart</Nav.Link>
      </Link>

      <Link to ='/login'>
        <Nav.Link><FaUser /> Sign up</Nav.Link>
      </Link>
    </Nav>
    </Container>
  </Navbar>
</>
  </header>
  )
};

export default Header;
