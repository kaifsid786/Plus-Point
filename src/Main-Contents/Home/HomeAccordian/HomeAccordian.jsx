import React, {useState } from 'react'
import './HomeAccordian.css'
import doorPull from '../../../images/doorPull.png'
export default function HomeAccordian() {
    const [state1,setState1] =useState(false);
    const [state2,setState2] =useState(true);
    const [state3,setState3] =useState(false);
    const [state4,setState4] =useState(false);
    const [state5,setState5] =useState(false);
    const [state6,setState6] =useState(false);
    const [state7,setState7] =useState(false);
    const [state8,setState8] =useState(false);
    const [state9,setState9] =useState(false);

  return (
      <>
        <div className="main-homeAccordian xyz">
              <div className="homeAccordian-left">
                  <img src={doorPull} alt="" />
              </div>
              <div className="homeAccordian-right">
                 <p className={state1 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.50)"}}onMouseOver={()=>{
                    setState1(!state1);setState2(false);setState3(false);
                    setState4(false);setState5(false);setState6(false);
                    setState7(false);setState8(false);setState9(false);
                 }} >Mortise Locks</p>
                 <p className={state2 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.50)"}}onMouseOver={()=>{
                     if(state2 === false){
                        setState1(false);setState2(!state2);setState3(false);
                        setState4(false);setState5(false);setState6(false);
                        setState7(false);setState8(false);setState9(false);
                     }
                 }}>Door Pull Handles</p>
                 <p className={state3 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.50)"}}onMouseOver={()=>{
                      setState1(false);setState2(false);setState3(!state3);
                      setState4(false);setState5(false);setState6(false);
                      setState7(false);setState8(false);setState9(false);
                 }}>Aldrop Door Kits</p>
                 <p className={state4 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.40)"}}onMouseOver={()=>{
                        setState1(false);setState2(false);setState3(false);
                        setState4(!state4);setState5(false);setState6(false);
                        setState7(false);setState8(false);setState9(false);
                 }}>Main Door Locks</p>
                 <p className={state5 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.30)"}}onMouseOver={()=>{
                     setState1(false);setState2(false);setState3(false);
                     setState4(false);setState5(!state5);setState6(false);
                     setState7(false);setState8(false);setState9(false);
                 }}>Cabinet Locks</p>
                 <p className={state6 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.20)"}}onMouseOver={()=>{
                     setState1(false);setState2(false);setState3(false);
                     setState4(false);setState5(false);setState6(!state6);
                     setState7(false);setState8(false);setState9(false);
                 }}>Cabinet Handles</p>
                 <p className={state7 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.15)"}}onMouseOver={()=>{
                     setState1(false);setState2(false);setState3(false);
                     setState4(false);setState5(false);setState6(false);
                     setState7(!state7);setState8(false);setState9(false);
                 }}>Door Decorative Accessories</p>
                 <p className={state8 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.15)"}}onMouseOver={()=>{
                     setState1(false);setState2(false);setState3(false);
                     setState4(false);setState5(false);setState6(false);
                     setState7(false);setState8(!state8);setState9(false);
                 }}>Door Hinges</p>
                 <p className={state9 ?'homeAccord-onMousonMouseOver':""} style={{background:"rgba(150, 105, 66, 0.12)"}}onMouseOver={()=>{
                     setState1(false);setState2(false);setState3(false);
                     setState4(false);setState5(false);setState6(false);
                     setState7(false);setState8(false);setState9(!state9);
                 }}>Door Closers</p>
              </div>
        </div>
      </>
  )
}
