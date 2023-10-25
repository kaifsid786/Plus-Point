import React from 'react';
import './Form.css';
import ContactBox from '../ContactBox/ContactBox';


export default  function Form(){
    return(
        <>
           <div className="main-form">
              <div className="form-wrapper">
                 <div className="form-left">
                   <div className="form-left-content">
                        <div className="from-left-title"></div>
                        <div className="from-left-info"></div>
                        <div className="form-left-boxes">
                             <ContactBox />
                        </div>
                   </div>
                 </div>
                 <div className="form-right"></div>
              </div>
           </div>
        </>
    )
}