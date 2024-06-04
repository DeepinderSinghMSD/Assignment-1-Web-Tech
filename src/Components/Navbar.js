import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../App.css'; 

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="navbar-brand-custom">Sigma Collection</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link className="nav-link-custom">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link className="nav-link-custom">Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/account">
              <Nav.Link className="nav-link-custom">Account</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
