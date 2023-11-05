import React, { useRef, useState } from 'react'
import './ContactBox.css'
import {MdArchitecture} from "react-icons/md";


export default function ContactBox(props) {

    const elm = useRef(null);
    const [st,setSt]=useState(false);

  return (
       <>
          <div className="main-contactBox" onClick={()=>{setSt(!st)}} style={st?{background:" #FFFCC8"}:{}}>
              <div className="contactBox-wrapper">
                 { props.st ? "" : <img src={props.img} alt="" />}
                  <h1 ref={elm} style={st?{color: "#4C341F"}:{}}>{props.title}</h1>
              </div>
              <div className="contactBox-check">
                  <div className="contact-circle"></div>
              </div>
          </div>
       </>
  )
}
