import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function History() {
  const h = useNavigate()
  let gethistory=()=>{
     alert("sorry server is down \n we cant get your history \n try again after 5 minute")
  }
  return (
    <div>
        <div className='mt-3 ms-5'>
            <h5>here you can know about your history about ordered food</h5>
        </div>
         
         <div className='ms-5 mt-4'>
         <form name='myform' method='post'>
        <input type={'text'} placeholder="Enter your name" style={{borderRadius:"10px"}} name='uname' required/> <br/><br/>
        <input type={'password'} placeholder="Enter you password" style={{borderRadius:"10px"}} name="pswd" required/> <br/><br/>
        <input type={'button'} className='btn btn-success' value={'get history'} style={{borderRadius:"10px"}} onClick={gethistory}/>
        </form>
         </div>

    </div>
  )
}

export default History
