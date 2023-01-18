import React from 'react'
import Home from "./home/home"
import Box1 from "./box1/box1"
import Box2 from "./box2/box2"
import Box3 from "./box3/box3"
import Box4 from "./box4/box4"



function homepage() {
  return (
    <div>
      
      <Home/>
      <div className="r"></div>
      <Box1/>
      <div className="r"></div>
      <Box2/>
      <div className="r"></div>
      <Box3/>
      <div className="r"></div>
      <Box4/>
      <div className="r"></div>
      


    </div>
  )
}

export default homepage
