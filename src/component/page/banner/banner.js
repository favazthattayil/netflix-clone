import React,{useEffect,useState} from "react"
import { API_KEY ,imageUrl} from "../../constants/constant"
import axios from "../../constants/ axiosa"
import "./banner.css"
import Navbar from '../navbar/navbar'






function Banner  () {

  const [movie,setMovie] = useState()
 
  let randomNumber = Math.floor(Math.random() * 20) + 1  ;
  
 

 useEffect( () => {
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    
    setMovie(response.data.results[randomNumber])
  })
},[] )



  return (
    <div className='banner'
    
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""}) `}}>

<Navbar />

      <div className="detail">
         <h2 className="title1">{movie ? movie.original_title : ""}</h2>
         <div className="buttons">
            <button className="play">play </button>
            <button className="play">mylist <span className='play-span' >+</span> </button>
         </div>
         
         <h3 className='discription'>{movie ? movie.overview : ""}</h3>
        
       </div>
        <div className='shade'></div>
    </div>
  )
  }

export default Banner
