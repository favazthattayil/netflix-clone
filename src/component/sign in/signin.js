import React from 'react'
import './signin.css'
import { UseState,UseContext } from 'react'
import { FirebaseContext } from '../../stor/firebasecontext';

function signin() {
const [email,setEmail]=UseState('');
const [password,setPassword]=UseState('');
const {Firebase}=UseContext(FirebaseContext)

const handleSubmit=(e)=>{
  e.preventDefault()
  Firebase.auth().createUserWithEmailAndPassword(email,password)
};


  return (
    <div className='container'>

      <div className='page'>

          <div className='head'>
           <h2 className='head1'>Sign in</h2>
          </div>
    
            <div className='sin'>
              <form className='form1' onSubmit={handleSubmit} action="">
                <input value={email} onChange={(e)=>setEmail (e.target.value)} placeholder="Email or phone number" className='semail' type="email" />
                <input value={password} onChange={(e)=>setPassword (e.target.value)} type="password" className='spassword' placeholder='password..' />
             
              </form>             
        
              <button className='sign1'>sign in</button>

            </div>
          
          
      </div>
    </div>
)
}

export default signin
