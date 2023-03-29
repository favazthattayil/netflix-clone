import React, { useEffect, useState } from 'react'
import "./rawposter.css"
import { imageUrl } from '../../constants/constant'
import axios from '../../constants/ axiosa'


function Rawposter(props) {
const [movies ,setMovies]=useState([])
useEffect(()=>{
  axios.get(props.url).then((response)=>{
    console.log(response.data.results[4])
    setMovies(response.data.results);
  })
})


  return (
    <div>
      <div className="row">
        <h2 className='posttitle'>{props.title}</h2>
        <div className='poster'>

          {movies.map((obj)=>

           <img className={props.isSmall ? "small-posterimage":"postimage"} src = {`${imageUrl+obj.backdrop_path}`} alt="post"/>
          )}


           



        </div>    
            
            
      </div>
    </div>
  )
}

export default Rawposter
