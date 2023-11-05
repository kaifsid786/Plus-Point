import React from 'react'
import './Form3.css';
import rightImg from "../../../images/contact-img.png";
import arrow from '../../../images/contact-arrow.svg';
import mapImg from '../../../images/contactMap.png';
import resImg from '../../../images/contRes.png';
import {BsTelephone} from 'react-icons/bs';
import {TfiEmail} from "react-icons/tfi";
import {CiLocationOn} from 'react-icons/ci';

export default function Form3(props) {
  return (
    <>
    <div className="form-3" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <div className="main-form3">
              <div className="form3-wrapper">
                 <div className="form3-left">
                   <div className="form3-left-content">
                        <div className="form3-left-title">
                           <span> <img src={arrow} onClick={()=>{props.setI(1)}} /> </span> Get in Touch
                        </div>
                        <div className="form3-left-info"> Fill out this small form to help us know you better</div>
                         <input type="text" placeholder='Full Name' required />
                         <input type="number" placeholder='Phone Number' required />
                         <input type="email" placeholder='Email' required />
                         <div className="form3-msg">Message*</div>
                         <textarea name="Message" id="" ></textarea>
                         <button type='submit' className='form3-left-btn'>Continue</button>
                   </div>
                 </div>
                 <div className="form3-right">
                   <img src={rightImg} alt="" />
                 </div>
              </div>
           </div>
            
            <div className="form3-map">
              <div className="form3-map-left">
                  <div className="form3-map-title">Dealer Locator</div>
                  <div className="form3-map-search">
                     <input type="text" placeholder='Pincode' />
                     <button className="map-btn">Find</button>
                  </div>
                  <div className="form3-map-result">
                      <div className="map-res-left">
                        <img src={resImg} alt="" />
                      </div>
                      <div className="map-res-right">
                        <div className="map-res-title">Mr. XYZ CHANDRA</div>
                        <div className="map-res-info">Lorem Ipsum Lorem Ipsum</div>
                        <div className="map-res-ph"> <span><BsTelephone /></span> +91 7819927621</div>
                        <div className="map-res-mail"> <span> <TfiEmail /> </span>Xyzchandra@gmail.com</div>
                        <div className="map-res-adr"> <span> <CiLocationOn /> </span>Sector 19 block A, Noida</div>
                      </div>
                  </div>
                  <div className="form3-map-result">
                      <div className="map-res-left">
                        <img src={resImg} alt="" />
                      </div>
                      <div className="map-res-right">
                        <div className="map-res-title">Mr. XYZ CHANDRA</div>
                        <div className="map-res-info">Lorem Ipsum Lorem Ipsum</div>
                        <div className="map-res-ph"> <span><BsTelephone /></span> +91 7819927621</div>
                        <div className="map-res-mail"> <span> <TfiEmail /> </span>Xyzchandra@gmail.com</div>
                        <div className="map-res-adr"> <span> <CiLocationOn /> </span>Sector 19 block A, Noida</div>
                      </div>
                  </div>
              </div>
              <div className="form3-map-right">
                <img src={mapImg} alt="" />
              </div>
            </div>
      </div>
    </>
  )
}
