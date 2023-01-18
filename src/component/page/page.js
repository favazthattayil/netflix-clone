import React from 'react'
import Navbar from './navbar/navbar'
import Banner from "./banner/banner"
import Rawposter from "./rawposter/rawposter"
import "./page.css"


function page() {
  return (
    <div className='page1'>
        <Navbar/>
        <Banner/>
        <Rawposter/>
       

    
    </div>
  )
}

export default page
