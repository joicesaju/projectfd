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
  const [typeoffood,settypeoffood]=useState('');
  const [rating,setrating]=useState('')
  
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
   
         
          <div className='ms-5 me-2' style={{display:"inline-block"}}>
           <Nav.Link style={{ color:"black" }} className="mt-3" href="#link"><input type='search' name='search' placeholder='search by food' onChange={(e)=>setSearch(e.target.value)} style={{borderRadius:"10px",padding:"10px",marginTop:"-15px"}}/></Nav.Link>
           </div>

          <div className='ms-5' style={{display:"inline-block"}}>
       <Dropdown>
       <Dropdown.Toggle variant="success" id="dropdown-basic" style={{borderRadius:"10px",marginTop:"10px"}}>
       Type of foods
          </Dropdown.Toggle>

          <Dropdown.Menu>

        <Dropdown.Item >

            <h6 onClick={()=>{settypeoffood('Salad')}}>Salads</h6>
      
        </Dropdown.Item>

        <Dropdown.Item >
       
            <h6 onClick={()=>{settypeoffood('Pasta')}}>pasta</h6>
        
        </Dropdown.Item>

        <Dropdown.Item>
       
            <h6 onClick={()=>settypeoffood('Pizza')}>pizza</h6>
       
        </Dropdown.Item>
         
        <Dropdown.Item >

            <h6 onClick={()=>{settypeoffood('Burger')}}>Burgers</h6>
            
        </Dropdown.Item>

       
         </Dropdown.Menu>
       </Dropdown>

           </div>

      


        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>

        <div className='foods'>
           
         
           
           <Row style={{backgroundColor:"gray"}} className="mt-3 mb-3 pb-3 fdcard">
           {
              menu.filter((item)=>{
                return search.toLowerCase()==='' ?item
                :item.title.toLowerCase().includes(search)}).filter((item1)=>{return item1.type.includes(typeoffood) }).map((item)=>(
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
