import React from 'react'
import './ContactBox.css'
import {MdArchitecture} from "react-icons/md";
export default function ContactBox() {
  return (
       <>
          <div className="main-contactBox">
              <div className="contactBox-wrapper">
                  <MdArchitecture />
                  <h1>Architect</h1>
              </div>
              <div className="contactBox-check">
                  <div className="contact-circle"></div>
              </div>
          </div>
       </>
  )
}
