import React from 'react'
import { Link } from 'react-router-dom';



import "./home.css";


function Home() {
  
  return (
  <div>
  
   
     <div className='home'>
      

      <div className='navbar'>
       
       <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="not available" />
       
       <select className='select-top'  name="language" id="">
                  <option value="">English</option>
                  <option value="">हिंदी</option>
                </select>
      
       <button  className='sign'>
         <Link to="/sign" className='submit1'>sign in
</Link>
         </button>
       
         
         
       
      </div>

     <div className='dis'>
       <h1>Unlimited movies,<br/>TV shows and more.</h1>
       <h3>Watch anywhere. Cancel anytime.</h3>
       <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
     </div>

     <div className='form'>
        <form   className='form' action="">
         <input placeholder='Email Address...' className='email' type="email" />
       
        <button className='submit'>

        <Link to="/home" className='submit1'>Get started 
        </Link></button>
        
         </form>
     </div>

     
        
     

   

    </div>
   
    
    
    </div>
  )
}

export default Home
