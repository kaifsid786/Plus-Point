import React from 'react'
import './PBannerCard.css'
import img1 from '../../../images/prod-1.jpg'
export default function PBannerCard(props) {

  var pimg="";
  props.img!=undefined?pimg=props.img:pimg=img1;

  return (
    <div className="main-pbannercard" style={props.state!=undefined?{flexDirection:"row-reverse"}:{}}>
          <div className="pbannercard-left" >
              <div className="pbannercard-left-title">{props.title}</div>
              <div className="pbannercard-left-info">
               {props.des1 !=undefined?props.des1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."} <br /> <br />
               {props.des2 != undefined?props.des2:" commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
              </div>
          </div>

          <div className="pbannercard-right" style={props.state!=undefined?{justifyContent:"flex-start"}:{}}>
             <img src={pimg} alt="" />
          </div>
    </div>
  )
}
