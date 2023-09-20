import React from 'react'
import data from '../ourTeamdata.json';
import img from '../../../images/OurTeamBanner.png'
export default function OurteamCard() {



  return (
    <>
       <div className="our-team-card">
          <div className="our-team-card-img">
             <img src={img} alt="" />
          </div>
          <div className="our-team-card-Tpost">
            <h3 className="our-team-card-name">
                    {data[1].name}
            </h3>
            <h5 className="our-team-card-post">
                   {data[1].post}
            </h5>
          </div>
          <div className="our-team-card-info">
              {data[1].desc}
          </div>
       </div>
    </>
  )
}
