import React, { useState } from 'react'
import './Login.css'
import f1 from './pexels-josh-sorenson-391522.jpg';
import { Link } from 'react-router-dom';


export const Login = () => {

  const[action,setAction]=useState("Login")


  return (
    <div style={{ backgroundImage: `url(${f1})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
        
          <input type="text" placeholder='Name'/>
        </div>
        <div className="input">
         
          <input type="email" placeholder='Email ID'/>
        </div>
        <div className="input">
        
          <input type="password" placeholder='Password'/>
        </div>
        <div className="input">
          
          <input type="text" placeholder='Phone'/>
        </div>
      </div>
      
      <div className="sumit-container">
        <Link  to={'/home'} className="sumit">Login</Link>
        <Link to={'/sign'} className="sumit">SignUp</Link>
      </div>
     </div>
 </div>
  )
}
