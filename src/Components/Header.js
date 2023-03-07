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
import { Button } from 'react-bootstrap';

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
            
            <Link to={'/'}  style={{textDecoration:"none" }}  className="ms-3 me-5 mt-3">
            <h4>home</h4>
            </Link>

            <Link to={'/'}  style={{textDecoration:"none"}}  className="me-5 mt-3">
            <h4>Menu</h4>
            </Link>

           

            <Link to={'/footer'}  style={{textDecoration:"none"}}  className="me-5 mt-3">
            <h4>About</h4>
            </Link>

            
            <Link to={'/history'}  style={{textDecoration:"none"}}  className="me-5 mt-3">
            <h4>history</h4>
            </Link>
          

            <Link to={'/LR'}  style={{textDecoration:"none"}}  className=" ms-5 me-5">
            <Button variant='info' style={{borderRadius:"10px"}}>sign-in</Button>
            </Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header
