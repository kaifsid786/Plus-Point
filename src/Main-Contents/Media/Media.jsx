import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import PreFooter from '../PreFooter/PreFooter';
import Footer from '../Footer/Footer';
import media1 from '../../video/video1.mp4';
import {motion} from 'framer-motion';
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
import Award1 from '../../images/Award1.png'
import Award2 from '../../images/Award2.png'
import col from './col.json';

const varients1={
  initial:{
    x:-20
  },
  animate:{
     x:0,
     duration:1,
     type:"spring"
  }
}

export default function Media() {

  const [height,setHeight] = useState(false);
  const [showAwrds1,setShowAwards1] = useState(false);
  const [showAwrds2,setShowAwards2] = useState(false);
  console.log(col.data[0].attributes.Images.data.length);

  useEffect(()=>{
  },window.addEventListener("scroll",()=>{
    if( window.innerWidth >= 1000 && window.pageYOffset > 400 ){
        setHeight(true);
    }
    else if(window.innerWidth < 1000 & window.pageYOffset > 50){
        setHeight(true);
    }
    else{
      setHeight(false);
    } 
  }));

  // const idx1=Math.ceil(col.data[0].attributes.Images.data.length/3);
  // const idx2=idx1+1;
  // const idx3=idx1+idx2+Math.ceil(col.data[0].attributes.Images.data.length%3);


  
  return (
    <>
       <Header />
       <div className="m-main-media" style={{width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="main-media">     
               <div className="media-content-1">
                  <div className={height?"media-content-1-title1 med-hOn":"media-content-1-title1 med-hOf"}>Plus</div>
                  <video src={media1} autoPlay loop muted className={height?"med-hOn":""} style={height?{display:"none"}:{}} ></video>
                  <div className={height?"media-content-1-title2 med-hOn":"media-content-1-title2 med-hOf2"}>Point</div>
                  <div className={height?"media-content-1-wrapper med-wrapOn":"media-content-1-wrapper"}>
                      <div className="media-content-1-col1 med-col1">
                         <div className="media-content-1-img">
                           {col1.map((val,i)=>{
                            //  if(i <= idx1){
                              return(
                                <motion.div 
                                initial={(window.innerWidth<1000)?{y:"5rem"}:{y:"15rem"}}
                                whileInView={{y:"0"}}
                                transition={{
                                  duration:1,
                                  type:'ease'
                                }}
                                className="div" style={{width:"100%",height:"fit-content",overflow:"hidden",top:""}}>
                                <img src={val.img} alt="" />
                                </motion.div>
                              )
                            //  }
                           })}
                         </div>
                      </div>
                      <div className="media-content-1-col2 med-col2">
                          <div className="media-content-1-img">
                          {col2.map((val,i)=>{
                            // if(i >= idx2){
                              return(
                                <motion.div 
                                initial={(window.innerWidth<1000)?{y:"5rem"}:{y:"15rem"}}
                                whileInView={{y:"0"}}
                                transition={{
                                  duration:1,
                                  type:'ease'
                                }} className="div" style={{width:"100%",height:"fit-content",overflow:"hidden"}}>
                                <img src={val.img} alt="" />
                                </motion.div>
                              )
                            // }
          
                           })}
                          </div>
                      </div>
                      <div className="media-content-1-col3 med-col3">
                           <div className="media-content-1-img">
                           {col3.map((val,i)=>{
                            //  if(i >= idx3){
                              return(
                                <motion.div 
                                initial={(window.innerWidth<1000)?{y:"5rem"}:{y:"15rem"}}
                                whileInView={{y:"0",opacity:'1'}}
                                transition={{
                                  duration:1,
                                  type:'ease'
                                }} className="div" style={val.blank?{width:"100%",height:"13%",visibility:"hidden"}:{width:"100%",height:"fit-content",overflow:"hidden"}}>
                                <img src={val.img} alt="" />
                                </motion.div>
                              )
                            //  }
                    
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
                 <div className="media-content-3-wrapper">
                 <div className='media-content-3-title'>Awards</div>
                    <div className='media-content-3-info'>Indexcellence award 2023 Indexcellence award 2023 award </div>
                    <div className="media-content-3-awards">
                          <div className="media-content-3-award">
                               <div className="media-content-3-award-wrapper">
                                  <img src={vector1} alt="" />
                                  <div className="media-content-3-awardBox">
                                      <div className="media-content-3-award-top">
                                         <img src={Award1} alt="" style={{width:"5.5rem"}} />
                                      </div>
                                       <div className="media-awardBox-title">Best door & hardware & accessories 2018-19</div>
                                       <div className="media-awardBox-info">Brand Leadership Award</div>
                                  </div>
                                  <img src={vector2} alt="" />
                               </div>
                          </div>
                          <div className="media-content-3-award">
                               <div className="media-content-3-award-wrapper">
                                  <img src={vector1} alt="" />
                                  <div className="media-content-3-awardBox">
                                      <div className="media-content-3-award-top">
                                       <img src={Award2} alt="" />
                                      </div>
                                       <div className="media-awardBox-title">The Indexcellence award Innovative space concept</div>
                                       <div className="media-awardBox-info">Delhi 2023</div>
                                  </div>
                                  <img src={vector2} alt="" />
                               </div>
                          </div>
                    </div>
                 </div>
               </div>
        </div>
        </div>
        <PreFooter />
        <Footer />
    </>
  )
}