import React from 'react'
import img from '../../../images/OurTeamBanner.png';
import './OurteamCard.css';
export default function OurteamCard(props) {
  return (
    <>
       <div className="our-team-card">
             <img src={img} alt="" className="our-team-card-img"/>
          <div className="our-team-card-Tpost">
            <h3 className="our-team-card-name">
                    {props.name}
            </h3>
            <h5 className="our-team-card-post">
                   {props.post}
            </h5>
          </div>
          <div className="our-team-card-info">
              {props.info}
          </div>
       </div>
    </>
  )
}
