import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import homeMainLeft from "../../../images/home-main-left.png";
import homeMainRight from "../../../images/home-main-right.png";
import "./HomeBanner.css";

gsap.registerPlugin(ScrollTrigger);

const HomeBanner = () => {
  
  const [scrol,setScrol] = useState(0);
  const height = window.innerHeight;

  useEffect(()=>{},window.addEventListener('scroll',()=>{
    if(window.pageYOffset < 1500)
      setScrol(window.pageYOffset);
    else
    setScrol((90*height)/80);
  }))

  // const topBannerRef = useRef(null);
  // const bottomBannerRef = useRef(null);
  // const centerBannerRef = useRef(null);
  // const banRef = useRef(null);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: banRef.current,
  //         markers: false,
  //         start: "top",
  //         end: "bottom",
  //         scrub: 10,
  //         pin: true,
  //         anticipatePin: 1,
  //       },
  //     });
  //     tl.to(".home-toppest-banner", {
  //       rotateY: "-75deg",
  //       transformOrigin:"left",
  //       perspective:'1000px',
  //       duration: 10,
  //       ease: "circ.in",
  //               yoyo: true,
  //     },0);
  //       tl.to(".home-bottom-banner", {
  //         rotateY: "75deg",
  //         transformOrigin:"right",
  //         perspective:'1000px',
  //         duration: 10,
  //         ease: "circ.in",
  //               yoyo: true,
  //       },0);
  //       tl.to(".content", {
  //         // scaleY: 2,
  //       //   height: "100vh",
  //           opacity:1,
  //           duration:12,
  //           fontSize:"8rem",
  //           delay:5,

  //         onComplete: () => {
  //           // Ensure the pinned area expands to the full height
  //           ScrollTrigger.refresh();
  //         },
  //       },0);
  //   });
  //   return () => ctx.revert();
  // }, []);

  return (
    <div id="home-banner-main">
      <div className="banner" > {/* ref={banRef} ref={topBannerRef}*/}
        <div className="home-toppest-banner" style={{transform:`rotateY(${(scrol/height)*80}deg) perspective(1000px)`}} >
          <img className="h-b" src={homeMainLeft} alt="" />
        </div>
        <div id="home-center-banner">  {/*ref={centerBannerRef} */}
          {/* <div className="content">
            <h1>Plus Point</h1>
          </div> */}
        </div>
        <div className="home-bottom-banner" style={{transform:`rotateY(${-(scrol/height)*80}deg) perspective(1000px)`}}> {/*  ref={bottomBannerRef}*/}
          <img className="h-b" src={homeMainRight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;