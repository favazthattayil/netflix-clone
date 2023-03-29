import React,{useState} from 'react';
import './footer.css'
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';










function Footer() {
  
  const [activeButton, setActiveButton] = useState("");



const handleButtonClick = (buttonIndex) => {
  if (activeButton === buttonIndex) {
    // If the same button is clicked again, hide the active div
    setActiveButton(null);
  } else {
    // Show the corresponding div for the clicked button
    setActiveButton(buttonIndex);
  }
};

  return (
    
    <div className='footer'>
      
        <div className="upper-footer">
        <h1 className='freq'>Frequently Asked Questions</h1>
<div className="ul-parent">
     <ul>
    
            <li>
            <button onClick={() => handleButtonClick(1)} className='bt'>
            <span> what is netflix?</span>
            <div className='btplus'><FaPlus/></div>
            </button>
            {activeButton === 1  && <div className='bt-active'>
            <p> Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices <br /><br />You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
            </p>
            </div>}
           
           </li> 


           
           
     
    

            <li>
            <button onClick={() => handleButtonClick(2)} className='bt'>
            <span> how much does netflix cost?</span>
            <div className='btplus'><FaPlus/></div>
            </button>
            {activeButton === 2  &&  <div className='bt'>
            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
            </div>}


            </li>
      
  
       

            <li>
            <button onClick={() => handleButtonClick(3)}  className='bt'>
            <span> where can i watch?</span>
            <div className='btplus'><FaPlus/></div>
             </button>
             {activeButton === 3  &&  <div className='bt'>
            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br/><br />You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
             </div>}
            </li>


            <li>
            <button onClick={() => handleButtonClick(4)}  className='bt'>
            <span> How do i cancel?</span>
            <div className='btplus'><FaPlus/></div>
             </button>
             {activeButton === 4 && <div className="bt"><p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p></div>}
            </li>


            <li>
            <button onClick={() => handleButtonClick(5)}  className='bt'>
            <span> what can In watch on Netflix?</span>
            <div className='btplus'><FaPlus/></div>
             </button>
             {activeButton === 5  && <div className="bt"><p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p></div>}
            </li>


            <li>
            <button onClick={() => handleButtonClick(6)}  className='bt'>
            <span> Is Netflix good for kids?</span>
            <div className='btplus'><FaPlus/></div>
             </button>
             {activeButton === 6  && <div className="bt"><p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space <br /><br />Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p></div>}
            </li>
      
       
         
       

</ul>
     
</div>
<h5 className='signup-h5-bottom'>Ready to watch? Enter your email to create or restart your membership.</h5>
    <div className="signup-bottom">
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


       <hr />

   

          <div className="bottom-footer">

            <h6 className='bottom-footer-head'>Questions? Call 000-800-919-1694</h6>

            <div className="bottom-footer-grid">

              <div className="firstbox">
                <p className='footer-element'><a href="https://help.netflix.com/en/node/412">FAQ</a></p>
                <p className='footer-element'><a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relation</a></p>
                <p className='footer-element'><a href="https://help.netflix.com/legal/privacy">Privacy</a></p>
                <p className='footer-element'><a href="https://fast.com/">Speed Test</a></p>

                <select   name="language" id="">
                  <option value="">English</option>
                  <option value="">हिंदी</option>
                </select>

                <p className='footer-element'>Netflix India</p>
              </div>



              <div className="secondbox">

              <div className="footer-element"><a href="https://help.netflix.com/en/">Help Centre</a></div>
              <div className="footer-element"><a href="https://jobs.netflix.com/">Jobs</a></div>
              <div className="footer-element">Cookies Preferences</div>
              <div className="footer-element"><a href="https://help.netflix.com/legal/notices">Legal Notices</a></div>
             </div>

             <div className="thirdbox">

              <div className="footer-element">Account</div>
              <div className="footer-element"><a href="https://devices.netflix.com/en/">Way to Watch</a>way</div>
              <div className="footer-element"><a href="https://help.netflix.com/legal/corpinfo">Corprate Information</a></div>
              <div className="footer-element"><a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a> </div>
             </div>


             <div className="fourthbox">

              <div className="footer-element"><a href="https://media.netflix.com/en/"> Media centre</a></div>
              <div className="footer-element"><a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a> </div>
              <div className="footer-element"><a href="https://help.netflix.com/en/contactus">Contact Us</a> </div>
            
             </div>





            </div>

         </div>





     </div>


 

     
   
     )
    }
    export default Footer



