// Navigation.js
import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="" variant="dark" expand="md" expanded={expanded} className='header'>
      <Container>
        <Navbar.Brand as={Link} to="/"><img src="./d0847d38038f767a467b644b4825d274-removebg-preview.png" alt="Game" /></Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className='nav-links'>Home</Nav.Link>
            <Nav.Link as={Link} to="/favorites" className='nav-links'>Favorites</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className='nav-links'>About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className='nav-links'>Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/unsubscribe" className='nav-links'>Unsubscribe</Nav.Link>
          </Nav>
          <Button as={Link} to="/join" variant="primary" className="join-now-button">Join Now</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
