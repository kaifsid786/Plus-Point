import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import PreFooter from '../PreFooter/PreFooter';
import Footer from '../Footer/Footer';
import media1 from '../../video/media-1.mp4';
import './Media.css';
import col1 from './col1'
import col2 from './col2'
import col3 from './col3'
import homeMedia2 from '../../images/homeMedia-2.png'
import homeMedia3 from '../../images/homeMedia-3.png'
import homeMedia4 from '../../images/homeMedia-4.png'
import homeMedia5 from '../../images/homeMedia-5.png'
import vector1 from '../../images/media-vector1.svg'
import vector2 from '../../images/media-vector2.svg'

export default function Media() {

  const [height,setHeight] = useState(false);
  const [wrap,setWrap] = useState(false);
    
  useEffect(()=>{
  },window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 10)
    setWrap(true);
    if( window.innerWidth >= 1000 && window.pageYOffset > 400 ){
        setHeight(true);
    }
    else if(window.innerWidth <= 1000 & window.pageYOffset > 100){
        setHeight(true);
    }
    else{
      setWrap(false);
      setHeight(false);
    } 
  }));
  
  return (
    <>
        <div className="main-media">
               <Header />
               <div className="media-content-1">
                  <div className={height?"media-content-1-title1 med-hOn":"media-content-1-title1 med-hOf"}>Plus</div>
                  <video src={media1} autoPlay loop muted className={height?"med-hOn":""} style={height?{display:"none"}:{}} ></video>
                  <div className={height?"media-content-1-title2 med-hOn":"media-content-1-title2 med-hOf2"}>Point</div>
                  <div className={wrap?"media-content-1-wrapper med-wrapOn":"media-content-1-wrapper"}>
                      <div className="media-content-1-col1 med-col1">
                         <div className="media-content-1-img">
                           {col1.map((val)=>{
                              return(
                                <div className="div" style={{width:"100%",height:"fit-content",overflow:"hidden",top:""}}>
                                <img src={val.img} alt="" />
                                </div>
                              )
                           })}
                         </div>
                      </div>
                      <div className="media-content-1-col2 med-col2">
                          <div className="media-content-1-img">
                          {col2.map((val)=>{
                              return(
                                <div className="div" style={{width:"100%",height:"fit-content",overflow:"hidden"}}>
                                <img src={val.img} alt="" />
                                </div>
                              )
                           })}
                          </div>
                      </div>
                      <div className="media-content-1-col3 med-col3">
                           <div className="media-content-1-img">
                           {col3.map((val)=>{
                              return(
                                <div className="div" style={val.blank?{width:"100%",height:"13%",visibility:"hidden"}:{width:"100%",height:"fit-content",overflow:"hidden"}}>
                                <img src={val.img} alt="" />
                                </div>
                              )
                           })}
                          </div>
                      </div>
                  </div>
                  <div className="Media-content-1-btn">See Less</div>
               </div>
               <div className="media-content-2">
                     <div className="media-content-2-title">
                         <h1>PLUS POINT BUILDSWARE</h1>
                         <p>Indexcellence award 2023 Indexcellence award 2023 award </p>
                     </div>
                     <div className="media-content-2-slider">
                           <div className="media-content-2-slide-track">
                             {/* first one  */}
                               <div className="med-slide">
                               <img src={homeMedia2} alt="" />
                               </div>
                               <div className="med-slide">
                               <img src={homeMedia3} alt="" />
                               </div>
                               <div className="med-slide">
                               <img src={homeMedia4} alt="" />
                               </div>
                               <div className="med-slide">
                               <img src={homeMedia5} alt="" />
                               </div>

                               {/* second - one */}
                               <div className="med-slide">
                               <img src={homeMedia2} alt="" />
                               </div>
                               <div className="med-slide">
                               <img src={homeMedia3} alt="" />
                               </div>
                               <div className="med-slide">
                               <img src={homeMedia4} alt="" />
                               </div>
                               <div className="med-slide">
                               <img src={homeMedia5} alt="" />
                               </div>
                           </div>
                     </div>
               </div>
               <div className="media-content-3">
                    <div className="media-content-3-award">
                         <img src={vector1} alt="" />
                         <p>PLUS POINT BUILDSWARE <br />
                              PVT. LTD. <br />
                              <span>Indexcellence award 2023</span>
                         </p>
                         <img src={vector2} alt="" />
                    </div>
                    <div className="media-content-3-award">
                         <img src={vector1} alt="" />
                         <p>BEST DOOR & HARDWARE <br />
                             & ACCESSORIES<br />
                              <span>Award by ABP News 2018-19</span>
                         </p>
                         <img src={vector2} alt="" />
                    </div>
               </div>
               <PreFooter />
               <Footer />
        </div>
    </>
  )
}
