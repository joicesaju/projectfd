import React from 'react'
import './home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Foodcard from './Foodcard';
import menu from './Db';
import Row from 'react-bootstrap/esm/Row';
import Header from './Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Footer from './Footer';


function Home() {
  const [search,setSearch]=useState('');
  const [search2,setSearch2]=useState('');
  
  return (
    <div className='home'>
 
     
         
        {/* //image with text */}
        <div className='image' >
        </div>

        {/* types of food */}

        <div className='types'>
          
        <Navbar bg="light" expand="lg">
        <Container> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
   
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>

        <div className='foods'>
            <div className='ms-5 ' style={{display:"inline-block"}}>
              <h4>35 Restaurants</h4>  
           </div>
           <div className='ms-5 me-4' style={{display:"inline-block"}}>
           <Nav.Link style={{ color:"black" }} className="mt-3" href="#link"><input type='search' name='search' placeholder='search by food' onChange={(e)=>setSearch(e.target.value)} style={{borderRadius:"10px",padding:"10px",marginTop:"-15px"}}/></Nav.Link>
           </div>
           <div className='ms-5' style={{display:"inline-block"}}>
       <Dropdown>
       <Dropdown.Toggle variant="success" id="dropdown-basic" style={{borderRadius:"10px",marginTop:"10px"}}>
       Type of foods
          </Dropdown.Toggle>

          <Dropdown.Menu>

        <Dropdown.Item href="#/action-1">
        <Link to={'/tfd/Salad'}  style={{textDecoration:"none"}}  className="">
            <h6>Salads</h6>
        </Link>
        </Dropdown.Item>

        <Dropdown.Item href="#/action-2">
        <Link to={'/tfd/Pasta'}  style={{textDecoration:"none"}}>
            <h6>pasta</h6>
        </Link>
        </Dropdown.Item>

        <Dropdown.Item href="#/action-3">
        <Link to={'/tfd/Pizza'}  style={{textDecoration:"none"}}  className="">
            <h6>pizza</h6>
        </Link>
        </Dropdown.Item>
         
        <Dropdown.Item href="#/action-3">
        <Link to={`/tfd/Burger`}  style={{textDecoration:"none" }} className="me-5">
            <h6>Burgers</h6>
            </Link>
        </Dropdown.Item>
         </Dropdown.Menu>
       </Dropdown>

           </div>
           <Row style={{backgroundColor:"gray"}} className="mt-3 mb-3 pb-3 fdcard">
           {
              menu.filter((item)=>{
                return search.toLowerCase()==='' ?item
                :item.title.toLowerCase().includes(search)
              }).map((item)=>(
                 <Foodcard r= {item}/>
              ))
              
            }
           </Row>
        </div>

        <Footer/>

    </div>
  )
}

export default Home
