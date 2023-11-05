import React, { useRef, useState } from 'react';
import './Form.css';
import ContactBox from '../ContactBox/ContactBox';
import arrow from '../../../images/contact-arrow.svg'
import {MdArchitecture} from "react-icons/md";
import builder from '../../../images/builder.png';
import interio from '../../../images/interio.png';
import customer from '../../../images/custo.png';
import rightImg from "../../../images/contact-img.png";
import arch from '../../../images/arch.png';


export default  function Form(props){

    const elm = useRef(null);
    const [st1,setSt1] = useState(false);
    const [st2,setSt2] = useState(false);
    const [st3,setSt3] = useState(false);
    const [st4,setSt4] = useState(false);
    const [st5,setSt5] = useState(false);
    return(
        <>
           <div className="main-form">
              <div className="form-wrapper">
                 <div className="form-left">
                   <div className="form-left-content">
                        <div className="form-left-title">
                           <span> <img src={arrow}/> </span> What Brings You Here?
                        </div>
                        <div className="form-left-info"> What describes you the best ? </div>
                        <div className="form-left-boxes">

                             <div className="main-contactBox" onClick={()=>{
                                setSt1(!st1);setSt2(false);setSt3(false);setSt4(false);setSt5(false);
                             }} style={st1?{background:" #FFFCC8"}:{}}>
                                <div className="contactBox-wrapper">
                                 <img src={arch} alt="" />
                                 <h1 ref={elm}  style={st1?{color: "#4C341F"}:{}}>ARCHITECT</h1>
                                 </div>
                                 <div className="contactBox-check">
                                 <div className="contact-circle"></div>
                                  </div>
                              </div>   

                             <div className="main-contactBox" onClick={()=>{
                                setSt1(false);setSt2(!st2);setSt3(false);setSt4(false);setSt5(false);
                             }} style={st2?{background:" #FFFCC8"}:{}}>
                                <div className="contactBox-wrapper">
                                 <img src={builder} alt="" />
                                 <h1 ref={elm} style={st2?{color: "#4C341F"}:{}}>BUILDER</h1>
                                 </div>
                                 <div className="contactBox-check">
                                 <div className="contact-circle"></div>
                                  </div>
                              </div>   

                             <div className="main-contactBox" onClick={()=>{
                                setSt1(false);setSt2(false);setSt3(!st3);setSt4(false);setSt5(false);
                             }} style={st3?{background:" #FFFCC8"}:{}}>
                                <div className="contactBox-wrapper">
                                 <img src={interio} alt="" />
                                 <h1 ref={elm} style={st3?{color: "#4C341F"}:{}}>INTERIOR DESIGNER</h1>
                                 </div>
                                 <div className="contactBox-check">
                                 <div className="contact-circle"></div>
                                  </div>
                              </div>   

                             <div className="main-contactBox" onClick={()=>{
                                setSt1(false);setSt2(false);setSt3(false);setSt4(!st4);setSt5(false);
                             }} style={st4?{background:" #FFFCC8"}:{}}>
                                <div className="contactBox-wrapper">
                                 <img src={customer} alt="" />
                                 <h1 ref={elm} style={st4?{color: "#4C341F"}:{}}>CUSTOMER</h1>
                                 </div>
                                 <div className="contactBox-check">
                                 <div className="contact-circle"></div>
                                  </div>
                              </div>   

                             <div className="main-contactBox" onClick={()=>{
                                setSt1(false);setSt2(false);setSt3(false);setSt4(false);setSt5(!st5);
                             }} style={st5?{background:" #FFFCC8"}:{}}>
                                <div className="contactBox-wrapper">
                                 <img src={customer} alt="" />
                                 <h1 ref={elm} style={st5?{color: "#4C341F"}:{}}>Others</h1>
                                 </div>
                                 <div className="contactBox-check">
                                 <div className="contact-circle"></div>
                                  </div>
                              </div>   

                        </div>
                        <div className="form-left-btn" onClick={()=>{
                           if((st1 || st2 || st3 || st4 || st5 ) === true)
                           props.setI(1);
                           else
                           alert("Please Select a value");
                        }}>Continue</div>
                   </div>
                 </div>
                 <div className="form-right">
                   <img src={rightImg} alt="" />
                 </div>
              </div>
           </div>
        </>
    )
}