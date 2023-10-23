import React, { useState } from 'react'
import './HomeTest.css'
import homeTest1 from '../../../images/homeTest-1.png'
import homeTest2 from '../../../images/homeTest-2.jpg'
import homeTestArrow from '../../../images/homeTest-arrow.png'
import {motion} from "framer-motion"
export default function HomeTest(props) {

     const img = [homeTest1,homeTest2];
     const desc = ["“offers a range of services including recording, mixing, and mastering music. They may also offer songwriting and music production services, as well as voiceover recording, sound design, podcast recording, live sessions, and instrument rentals.”",
                    "“ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum dicta esse voluptates laboriosam nulla repellat eum totam. Eligendi tenetur velit odio ea unde voluptatibus voluptas recusandae quod soluta, iure libero. ”"]
      const name = ["James Zain D","John Doe"];
      const post = ["Senior Jazz Musican","XYZ"]
     const [id,setId] =useState(0);               
  return (
     <>
        <div className="main-homeTest xyz">
              <motion.h1
               initial={props.anim?{y:"5rem",opacity:0}:{}}
               whileInView={{y:"0",opacity:1}}
               transition={{
                 duration:1,
               }}
              >A Testament to the Quality of Our Music Studio</motion.h1>
              <p>
                 {desc[id]}
             </p>
              <div className="homeTest-content">
                  <img src={img[id]} alt="" />
                  <h3>{name[id]}</h3>
                  <h5>{post[id]}</h5>
              </div>
              <div className="homeTest-arrow">
                   <img src={homeTestArrow} alt="" onClick={()=>{
                       if(id < img.length-1)
                       setId(id+1);
                       else
                       setId(0);
                   }}/>
              </div>
              <div className="homeTest-arrow-left">
                   <img src={homeTestArrow} alt="" onClick={()=>{
                       if(id < img.length-1)
                       setId(id+1);
                       else
                       setId(0);
                   }}/>
              </div>
        </div>
     </>
  )
}
