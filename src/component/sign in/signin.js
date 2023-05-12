import React, { useContext, useState } from 'react'
import './signin.css'
import{FirebaseContext}from '../../stor/firebasecontext'

 

function Signin() {

const [email ,setEmail] =useState('')
const [password, setPassword]=useState('')
const {firebase}=useContext(FirebaseContext)

const handleSubmit=(e)=>{
  e.preventDefault()
  console.log("ffc",firebase)
}


  return (
    <div className='container'>

      <div className='page'>

          <div className='head'>
           <h2 className='head1'>Sign in</h2>
          </div>
    
            <div className='sin'>
              <form className='form1' onSubmit={handleSubmit} action="">
                <input placeholder="Email or phone number" className='semail' type="email"
                value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                <input  type="password" className='semail' placeholder='password..'
                value={password}  onChange={(e)=>setPassword(e.target.value)}
                 />
                 <button className='sign1'>sign in</button>
              </form>             
        
              
              <label htmlFor="input"><input className='checkbox' type="checkbox" /> Remember me</label>
              <p className='checkbox-help' >Need help ?</p>

            </div>

            <div className="bottom-command">
              <h6 className='bottom-command-h6'>New to Netflix ? <span>sign up now.</span></h6>
               <p>jhb</p>
            </div>
           
          
          
      </div>
    </div>
)
}

export default Signin
