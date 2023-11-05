import React from 'react'
import './Form2.css';
import rightImg from "../../../images/contact-img.png";
import ContactBox from '../ContactBox/ContactBox';
import arrow from '../../../images/contact-arrow.svg'

export default function Form2(props) {
  return (
    <>
       <div className="main-form2">
              <div className="form2-wrapper">
                 <div className="form2-left">
                   <div className="form2-left-content">
                        <div className="form2-left-title">
                           <span> <img src={arrow} onClick={()=>{props.setI(0)}}/> </span> What’re you looking for?
                        </div>
                        <div className="form2-left-info"> Tap multiple categories to select them. </div>
                        <div className="form2-left-boxes">
                             <ContactBox st={true}  title={"MORTISE LOCK SET"} />
                             <ContactBox st={true}  title={"DOOR PULL HANDLES"} />
                             <ContactBox st={true}  title={"ALDROP DOOR KITS"} />
                             <ContactBox st={true}  title={"MAIN DOOR LOCKS"} />
                             <ContactBox st={true}  title={"CABINET LOCKS"} />
                             <ContactBox st={true} title={"CABINET HANDLES"} />
                             <ContactBox st={true} title={"DOOR DECORATIVE ACCESSORIES"} />
                             <ContactBox st={true} title={"DOOR HINGES"} />
                             <ContactBox st={true} title={"DOOR CLOSERS"} />
                        </div>
                        <div className="form2-left-btn" onClick={()=>{props.setI(2)}}>Continue</div>
                   </div>
                 </div>
                 <div className="form2-right">
                   <img src={rightImg} alt="" />
                 </div>
              </div>
           </div>
    </>
  )
}
