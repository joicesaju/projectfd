import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img1 from '../../src/Images/user.png'
import './header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Footer';

  function Header() {

 
  return (
    <div style={{}}>
     <Navbar bg="light" expand="lg" className='p-1'>
      <Container>
        <Navbar.Brand href="#home">FoodSurf</Navbar.Brand>
        <img style={{right:0}} src={img1}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link to={'/'} style={{ color:"black" }} ><h4>home</h4></Nav.Link> */}
            <Link to={'/'}  style={{textDecoration:"none" }}  className="me-5">
            <h4>home</h4>
            </Link>

            <Link to={'/'}  style={{textDecoration:"none"}}  className="me-5">
            <h4>Menu</h4>
            </Link>


            <Link to={'/footer'}  style={{textDecoration:"none"}}  className="me-5">
            <h4>About</h4>
            </Link>

            
            <Link to={'/history'}  style={{textDecoration:"none"}}  className="me-5">
            <h4>history</h4>
            </Link>
          
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header
