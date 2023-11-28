import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';                  
import './reg.css'
export default function Login() {

        
  return (
        <div >
        <div className='des1'></div>
        <div className='header'>
                
        </div>
            {/* <FontAwesomeIcon style={{position:'absolute',marginLeft:'-580px',marginTop:'40px'}} icon={faUser} shake /> */}
            {/* <FontAwesomeIcon style={{position:'absolute',marginLeft:'-390px',marginTop:'100px'}} icon={faLock} /> */}
        <div style={{marginLeft:'400px',width:'700px'}} className='login'>
            
            <h4>Register to continue</h4>
            <label><b>Username : </b></label>
            <input style={{marginLeft:'80px'}} type='text' placeholder='Enter Username... '></input><br></br>
            <label><b>Email : </b></label>
            <input style={{marginLeft:'115px'}} type='text' placeholder='Enter Email... '></input><br></br>
            <label><b>Password : </b></label>
            <input style={{marginLeft:'85px'}} type='text' placeholder='Enter Password... '></input><br/>
            <label><b>Confirm Password : </b></label>
            <input style={{marginLeft:'20px'}} type='text' placeholder='Confirm Password... '></input>
           
        </div>
        <div className='Footer' style={{marginTop:'-100px'}}>
                <button className='button' style={{borderRadius:'10px'}} type='submit'>Register</button>
                {/* <a href='#' style={{marginLeft:'60px',color:'black'}}>Forget Password?</a> */}
        </div>
        <div className='footer2'>
                <a style={{color:"blue"}}>Register With </a>
               <GoogleIcon style={{marginRight:"10px",marginLeft:"20px"}}/>
               <FacebookIcon style={{marginLeft:"5px"}}/>
               <TwitterIcon style={{marginLeft:"20px"}}/>
        </div>
        <div className='des2'>
                
        </div>

        </div>
  )
}
