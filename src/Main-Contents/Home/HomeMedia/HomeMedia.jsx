import React from 'react'
import './HomeMedia.css'
import homeMedia1 from '../../../images/homeMedia-1.png'
import homeMedia2 from '../../../images/homeMedia-2.png'
import homeMedia3 from '../../../images/homeMedia-3.png'
import homeMedia4 from '../../../images/homeMedia-4.png'
import homeMedia5 from '../../../images/homeMedia-5.png'
export default function HomeMedia() {
  return (
    <>
       <div className="main-homeMedia">
             <h1>We set a benchmark</h1>
             <p>Here, we lay the foundation of something special. The precision & quality of our diversified range 
                of products is down to our brilliant manufacturing Partners.</p>
             <div className="homeMedia-btn">See More</div>
             <div className="homeMedia-content">
                 <img src={homeMedia1} alt="" className="homeMedia-1"/>
                 <img src={homeMedia2} alt="" className="homeMedia-2"/>
                 <img src={homeMedia3} alt="" className="homeMedia-3"/>
                 <img src={homeMedia4} alt="" className="homeMedia-4"/>
                 <img src={homeMedia5} alt="" className="homeMedia-5"/>
             </div>
       </div>
    </>
  )
}
