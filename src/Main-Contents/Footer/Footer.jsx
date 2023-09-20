import React from "react";
import img from '../../images/PlusPointWhite.png' ;
import {CiFacebook} from 'react-icons/ci';
import {TiSocialTwitterCircular} from 'react-icons/ti';
import  {GrInstagram} from "react-icons/gr";
import  {ImPinterest2} from "react-icons/im";
import  {FaSquareYoutube} from "react-icons/fa6";
import  {TiSocialLinkedinCircular} from "react-icons/ti";
import './Footer.css';

export default function Footer(){
    return(
        <>
          <div className="main-footer">
               <div className="foot-row-1">
                   <div className="foot-col-1">
                       <img src={img} alt="" className="foot-img"/>
                       <p className="foot-para">
                          Plus Point Locks is here to make your homes a merrier feel. Our hardware collection provides you with the best of options, 
                          at the most affordable prices! Don’t believe us? Have a look for yourself!
                       </p>
                       <div className="social-icons">
                        <CiFacebook />
                        <TiSocialTwitterCircular />
                        <GrInstagram />
                        <ImPinterest2 />
                        <FaSquareYoutube />
                         <TiSocialLinkedinCircular />
                       </div>
                   </div>
                   <div className="foot-col-2 foot-col">
                     <h3>Quick Links</h3>
                     <a href="">Home</a>
                     <a href="">Discover</a>
                     <a href="">Our Expertise</a>
                     <a href="">Media</a>
                     <a href="">Products</a>
                     <a href="">Blogs</a>
                     <a href="">Contact us</a>
                   </div>
                   <div className="foot-col-3 foot-col">
                       <h3>Products</h3>
                       <a href="">Mortise Lock Set</a>
                       <a href="">Door Pull Handles</a>
                       <a href="">Aldrop Door Kits</a>
                       <a href="">Main Door Locks</a>
                       <a href="">Cabinet Locks</a>
                       <a href="">Cabinet Handles</a>
                       <a href="">Door Decorative Accessories</a>
                        <a href="">Door Hinges</a>
                        <a href="">Door Closers</a>
                   </div>
                   <div className="foot-col-4 foot-col">
                        <div className="foot-services">
                            <h3>Services</h3>
                            <a href="">About us</a>
                            <a href="">Our Team</a>
                            <a href="">Mission Vision</a>
                        </div>
                        <div className="foot-more">
                             <h3>More</h3>
                             <a href="">Terms & Conditions</a>
                             <a href="">Privacy policy</a>
                             <a href="">FAQ’s</a>
                        </div>
                   </div>
               </div>
               <div className="foot-row-2"></div>
               <div className="foot-row-3">
                  ©Plus Point all rights reserved
               </div>
          </div>
        </>
    )
}