
import Signin from "./component/sign in/signin"
import Page from "./component/page/page"
import React from "react";
import './app.css'
import Homepage from "./component/home page/homepage"
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom'


function App() {
  return (
   <div>
   <Router>
    <Routes>
      <Route path='/' element={  <Homepage/>}/>
      <Route path='/sign' element={<Signin/>}/>
      <Route path='/home' element={<Page/>}/>
     
    </Routes> 
   </Router> 
   </div>

   
   
  );
}

export default App;
