import React, { useState } from 'react'
import './HomeCard.css'
import trust from '../../../images/homeWh-1.png'
import progression from '../../../images/homeWh-2.png'
import quality from '../../../images/homeWh-3.png'
import {motion} from 'framer-motion';

export default function HomeCard(props) {
  const [white,setWhite]=useState(false);
  const changeImg = ()=>{
      setWhite(true);
  }
  const reset = ()=>{
      setWhite(false);
  }

  return (
    <>
      <motion.div 
      initial={props.anim?{y:"5rem",opacity:0}:{}}
      whileInView={{y:"0",opacity:1}}
      transition={{
        duration:1,
      }}
      className="main-homeCard" onMouseOver={changeImg} onMouseLeave={reset}>
         <img src={white?props.id==1?trust:props.id==2?progression:quality:props.img} alt="" className="homeCard-img" />
         <h1 className="homeCard-title">{props.title}</h1>
         <p className="homeCard-info">{props.info}</p>
      </motion.div>
    </>
  )
}
