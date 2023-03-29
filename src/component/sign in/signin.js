import React from 'react'
import './signin.css'
 

function Signin() {



  return (
    <div className='container'>

      <div className='page'>

          <div className='head'>
           <h2 className='head1'>Sign in</h2>
          </div>
    
            <div className='sin'>
              <form className='form1'  action="">
                <input placeholder="Email or phone number" className='semail' type="email" />
                <input  type="password" className='semail' placeholder='password..' />
             
              </form>             
        
              <button className='sign1'>sign in</button>
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
