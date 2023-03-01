import React, { useState } from 'react'
import menu from './Db';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Orders from './Orders';
import star from '../../src/Images/star.png';



function Availablefood({r}) {

    const[count,setCount]=useState(1)
    const arr=[];
    const handleSubmit=event=>{
      alert(`${event.currentTarget.name}is added to your list`)
      localStorage.setItem(event.currentTarget.id,event.currentTarget.name)
      localStorage.setItem(event.currentTarget.name,count)
      setCount(1)
    }
   
 return(
    
    
    <Col className='mt-2 container' sm={6} md={6} lg={4} xl={3} style={{marginLeft:"0px"}}>

<Card className='card'  style={{width:"310px",height:"400px"}}>
  <Card.Img className='p-4,mt-5  imgg' variant="top"  src={r.image}/>
  <Card.Body>
    <Card.Title style={{textAlign:"center"}}>{r.title}</Card.Title>
    <Card.Text className='ps-2 pt-2' >
   ${r.price}   <span style={{
          marginLeft:"10px"
          }}>{r.min}mins</span>
            {r.rating>=4 &&  <span style={{
                width:"20px",
                height:"20px",
                 backgroundColor:"green",
                 color:"white",
                 paddingLeft:"5px",
                 paddingRight:"5px",
                 marginRight:"10px",
                 marginLeft:"30px",
                 borderRadius:"4px"
             }}>
               <img src={star} style={{width:"15px",height:"15px"}}/>  
               {r.rating}
             </span> }
             {
              r.rating<4 &&  <span style={{
                width:"20px",
                height:"20px",
                 backgroundColor:"red",
                 color:"white",
                 paddingLeft:"5px",
                 paddingRight:"5px",
                 marginRight:"10px",
                 marginLeft:"25px",
                 borderRadius:"4px"
             }}>
               <img src={star} style={{width:"15px",height:"15px"}}/>  
               {r.rating}
             </span>
             }

    </Card.Text>
    <hr/>
    <div style={{textAlign:"center"}}>
<form action="" method="post" name="myform">
<Button variant='success' onClick={handleSubmit} id={r.id}  name={r.title} className="me-3" >Add</Button>
<input type={"number"}  style={{width:"40px", height:"48px"}} name="fname" placeholder="1"min={1} className='ps-2' onChange={(e)=>setCount(e.target.value)}/>

</form>


   
    </div>
  </Card.Body>
</Card>

</Col>


 )
}

export default Availablefood
