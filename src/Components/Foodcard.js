import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './foodcard.css'
import star from '../../src/Images/star.png';


function Foodcard({r}) {
 
  return (

     <Col className='mt-2 container' sm={6} md={6} lg={4} xl={3}>
<Link to={`/fd/${r.id}`} style={{textDecoration:'none'}}>
<Card className='card' style={{width:"330px"}} >
  <Card.Img className='p-4,mt-0 ms-3 imgg' variant="top"  src={r.image} style={{width:"250px"}}/>
  <Card.Body>
  <Card.Title style={{textAlign:"center"}}>{r.title}</Card.Title>
    <Card.Text style={{textAlign:"center"}}>{r.hotel}</Card.Text>
    <Card.Text >
     {r.rating>=4 && <span style={{
        width:"20px",
        height:"20px",
         backgroundColor:"green",
         color:"white",
         paddingLeft:"5px",
         paddingRight:"5px",
         marginRight:"30px",
         marginLeft:"10px",
         borderRadius:"4px"
     }}>
      
       <img src={star} style={{width:"15px",height:"15px"}}/>  
       {r.rating} </span>  }

       {
        r.rating<4 && <span style={{
          width:"20px",
          height:"20px",
           backgroundColor:"red",
           color:"white",
           paddingLeft:"5px",
           paddingRight:"5px",
           marginRight:"30px",
           marginLeft:"10px",
           borderRadius:"4px"
       }}>
        
         <img src={star} style={{width:"15px",height:"15px"}}/>  
         {r.rating} </span> 
       }

       ${r.price}

       <span style={{
        marginLeft:"30px"
     }}>{r.min}mins</span>

    </Card.Text>
    <hr/>
    <div style={{textAlign:"center"}}>
    {r.text}
    </div>

  </Card.Body>
</Card>
</Link>  

</Col>
   
  )
}

export default Foodcard
