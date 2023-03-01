import React, { useState } from 'react'
import menu from './Db'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import uuid from  "react-uuid"
import './orders.css'

function Orders() {
    const h = useNavigate()



  let cancel=()=>{
    localStorage.clear()
    h('/')
  }


  
 let confirm=()=>
  {
let id= uuid().slice(0,3)
console.log(id);

if(document.forms['myform']['pn'].value=="" && document.forms['myforms']['p1'].value==''){
  alert("plz fill")
}
else{
   alert("ORDER PLACED")  
   localStorage.clear()
   h('/')
}

}

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
       
      <div className=' orders pt-4'>
 
{localStorage.getItem("orderlist")&& <div className='ps-5 pb-5  ' style={{color:"",textAlign:"",backgroundColor:"" ,marginTop:"px",marginLeft:"10%",width:"500px",border:"1px solid black",padding:"10px",height:""}}>
 {localStorage.getItem("orderlist").split(",").map((item)=>(  
     <h5 style={{textTransform:"capitalize"}} className='mb-4 ms-3 mt-3'>{localStorage.getItem(item)}  *  {item}  : ${menu.find((item1)=>item1.title==item).price * (localStorage.getItem(item))} </h5>
        ))}
     
     <hr/>
<h4 className='mb-4 ms-3 mt-3' style={{color:"",textDecoration:"underline"}}>Total:${localStorage.getItem("sum").slice(0,5)}</h4>
<h6><span style={{textDecoration:"line-through",marginRight:"10px",color:"red"}}>delivery charge:$2</span><span style={{color:"green"}}>free delivery</span></h6><br/>
<h6>delivery time:{localStorage.getItem("min").slice(0,4)} minutes</h6>

   <hr/>
 
   <Button varient='info' style={{borderRadius:"10px",color:""}} onClick={cancel} className='btn btn-danger me-4'> cancel orders</Button>

<Button varient='success' style={{borderRadius:"10px",color:"yellow"}}  onClick={handleShow}> check_out</Button>

 
</div>}
{!localStorage.getItem("orderlist")&&<div className='ps-1' style={{textAlign:"center"}}><h5 style={{textTransform:"capitalize"}}>You have to add atleast one item
   <Link to={'/'}>
 <Button className='btn btn-info ms-4' style={{borderRadius:"10px",textTransform:"capitalize"}}>go back and add something</Button> 
   </Link>
   </h5>
 </div>}


<Modal show={show} onHide={handleClose} animation={false}>
        
        <Modal.Body>
            <h4>entr you'r details</h4> <hr/>
            <form name='myform' method='post'>
            <input type={"text"} placeholder="Enter fullname" name='uname' required/> <br/><br/>
            <input type={"password"} placeholder="Enter passwrord" name='pswd' required/> <br/><br/>
             <textarea rows={4} cols={30} placeholder="Enter your address" required></textarea><br/><br/>
             <input type={"number"} placeholder="Enter your phonenumber" name='p1' required/><br/><br/>
             <input type={"number"} placeholder="Enter phonenumber2" required name='p2'/><br/><br/>
             <input type={"number"} placeholder="Enter your pincode" required name='pn'/><br/><br/>
             <input type={"submit"}  variant="info" className='btn btn-success' onClick={confirm} value="place order"/>
            </form>
             {/* <Button variant="info" onClick={confirm}>
            place order
          </Button> */}
<h6 className='mt-5'>*cash on delivery</h6>
        </Modal.Body>
        <Modal.Footer>
          
         
        </Modal.Footer>
      </Modal>
      <Footer/>

      </div>
      

  
  )
}

export default Orders
