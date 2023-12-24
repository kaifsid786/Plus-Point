import React from "react";
import './PreFooter.css';
export default function PreFooter(){
    return(
        <>
           <div className="main-prefooter">
             <div className="main-prefoot-content">
                 <div className="pre-left">
                       <h3 className="pre-left-title">
                       Know more about us and our products!
                       </h3>
                       <p className="pre-left-para">
                        Fill out your contact details by tapping the ‘Contact Us’ button to dive deeper into the world of Plus Point!
                       </p>
                 </div>
                 <div className="pre-right">
                       <a href="/contact"><button className="pre-contact">Contact Us</button></a>
                 </div>
             </div>
           </div>
        </>
    )
}