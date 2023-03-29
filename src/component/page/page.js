import React from 'react'
import {originals ,action ,trending ,ComedyMovies ,HorrorMovies ,RomanceMovies ,Documentaries} from "../constants/urls"
import Banner from "./banner/banner"
import Rawposter from "./rawposter/rawposter"
import "./page.css"


function page() {
  return (
    <div className='page1'>
       
        <Banner/>
        <Rawposter url={originals} title='Netflix Originals'/>
        <Rawposter url={action} title='Action'  isSmall/>
        <Rawposter url={trending} title='Trending'  isSmall/>
        <Rawposter url={ComedyMovies} title='ComedyMovies'  isSmall/>
        <Rawposter url={HorrorMovies} title='HorrorMovies'  isSmall/>
        <Rawposter url={RomanceMovies} title='RomanceMovies'  isSmall/>
        <Rawposter url={Documentaries} title='Documentaries'  isSmall/>

    
    </div>
  )
}

export default page
