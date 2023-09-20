import React from "react";
import './OurTeam.css';
import Header from '../Header/Header'
import img from '../../images/OurTeamBanner.png'
export default function Ourteam(){
    return(
        <>
           <Header />
           <div className="our-team-main">
               <div className="our-team-banner">
                    <img src={img} alt="" className="our-team-banner-img"/>
                    <div className="our-team-banner-grade"></div>
                         <p className="our-team-banner-title">As they say,<span style={{fontWeight:'bold'}}>Teamwork makes the dream work.</span></p>
               </div>
               <div className="our-team-content">
                   <div className="our-team-content-1">
                        <h5>MEET OUR TEAM</h5>
                        <h3>The leaders who <br />
                            Inspire greatness…</h3>
                   </div>
                   <div className="our-team-content-2">
                    
                   </div>
               </div>
           </div>
        </>
    )
}