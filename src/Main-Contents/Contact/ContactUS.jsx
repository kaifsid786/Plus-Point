import React from 'react';
import './ContactUS.css';
import Header from '../Header/Header';
import Form from './Form/Form';
import PreFooter from '../PreFooter/PreFooter';
import Footer from '../Footer/Footer';
import {BsTelephone} from 'react-icons/bs';
import {TfiEmail} from "react-icons/tfi";
import {CiLocationOn} from 'react-icons/ci';


export default function ContactUS() {
  return (
     <>
        <Header />
       <div className="main-contact">
           <div className="contact-title">Contact Us</div>
           <div className="contact-info">
              <h5 style={{fontWeight:"normal"}}>Need more guidance ?</h5>
              <p>Connect with our expert team at Godrej for guided assistance and answers to all your queries on our dedicated helpdesk.</p>
              <h3>Plus Point Customer Care Number: 18002095511</h3>
           </div>
           <div className="contact-link">
              <div className="contact-link-wrapper">
                  <BsTelephone />
                  <span>+91-9760-792792,</span>
                  <span>+91-571-2410292</span>
              </div>
              <div className="contact-link-wrapper">
                   <TfiEmail />
                   <span>info@pluspointlocks.com</span>
              </div>
              <div className="contact-link-wrapper">
                <CiLocationOn />
                <span>Street No. 4,Pala RoadAligarh</span>
                <span>202 001Uttar Pradesh (India)</span>
              </div>
           </div>
           <div className="contact-content">
               <Form />
           </div>
       </div>
       <PreFooter />
       <Footer />
     </>
  )
}
