import React,{useState,useEffect} from "react";
import "./Experties.css";
import Exp1 from "../../images/Experties.png";
import process from "../../images/process.png";
import { truncate } from "lodash";
import TmExp from '../TmExp/TmExp'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../Header/Header";
import PreFooter from "../PreFooter/PreFooter";
import Footer from "../Footer/Footer";
import cop from "../../images/copper-pipes.png";
import alum from "../../images/aluminium.png";
import steel from "../../images/steel-pipes.png";



const data = [
  {
    img: process,
    heading:
      "In a lively workshop, a story unfolds—a tale of human hands shaping something remarkable.",
    info: "It begins with ordinary materials, full of potential. With care and skill, craftsmen shape these elements, giving them purpose and form. The air is alive with the rhythmic clang of metal meeting metal, as each piece is shaped and joined together.",
  },
  {
    img: process,
    heading:
      "In a lively workshop, a story unfolds—a tale of human hands shaping something remarkable.",
    info: "It begins with ordinary materials, full of potential. With care and skill, craftsmen shape these elements, giving them purpose and form. The air is alive with the rhythmic clang of metal meeting metal, as each piece is shaped and joined together.",
  },
  {
    img: process,
    heading:
      "In a lively workshop, a story unfolds—a tale of human hands shaping something remarkable.",
    info: "It begins with ordinary materials, full of potential. With care and skill, craftsmen shape these elements, giving them purpose and form. The air is alive with the rhythmic clang of metal meeting metal, as each piece is shaped and joined together.",
  },
  {
    img: process,
    heading:
      "In a lively workshop, a story unfolds—a tale of human hands shaping something remarkable.",
    info: "It begins with ordinary materials, full of potential. With care and skill, craftsmen shape these elements, giving them purpose and form. The air is alive with the rhythmic clang of metal meeting metal, as each piece is shaped and joined together.",
  },
];

const Experties=()=>{

  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Adjust the threshold as needed
  });

  return (
    <>
          <Header/>
   
    <div className="experties">

      <div className="top-sec">
        <div className="top-image">
          <img width="100%" height="100%" src={Exp1} />  
        </div>
        <div
          
          className="highlights "
        >
          <div style={{ textTransform: "uppercase", fontSize: "1.3rem" }}>
            Manufacturing Highlights
          </div>
          <div className="card-container m-w-c">
            <motion.div
             ref={ref}
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, y: "2rem" }}
              transition={{
                duration: 0.3,
                type: "ease-in",
              }}
              className="card card1 exp-card"
            >
              <div className="title">Precision & Design</div>
              <div className="info">
                Products designed per international standards.
              </div>
            </motion.div>
            <motion.div
             ref={ref}
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, y: "2rem" }}
              transition={{
                duration: 1,
                type: "ease-in",
              }}
              className="card card2 exp-card"
            >
              <div className="title">Surface Finishing:</div>
              <div className="info">
                A robust outer layer guarding through buffing, polishing,
                plating, and more - a crucial step for the desired texture.
              </div>
            </motion.div>
            <motion.div
             ref={ref}
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, y: "2rem" }}
              transition={{
                duration: 0.5,
                type: "ease-in",
              }}
              className="card card3 exp-card"
            >
              <div className="title">Quality Control:</div>
              <div className="info">
                Meticulous scrutiny, seamless cohesion - embracing a 3-stage
                quality inspection for optimal finish & enduring durability.
              </div>
            </motion.div>
          </div>
        
        </div>
      </div>

      {/* process */}
      <div className="container">
        <div className="process m-w-c">
          <div className="The-Process" >
            The{" "}
            <span style={{ fontWeight: "bold", color: "#4C341F" }}>
              Process
            </span>
          </div>
          <div className="timeline-exp">
            <TmExp />
            <div style={{display:'flex',gap:'3rem',flexDirection:'column'}}>
            {data.map((item, i) => {
            return (
              <motion.div
              ref={ref}
                initial={{ opacity: 0, y: "5rem" }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0, y: "2rem" }}
                transition={{
                  duration: 1,
                  type: "ease-in",
                }}
                className="process-card"
                key={i}
              >
                <div className="process-img">
                  <img width="100%" height="100%" src={item.img} alt="" />
                </div>
                <div className="process-info">
                  <div className="process-info-upper blt">{item.heading}</div>
                  <div className="process-info-bottom blt">
                    {truncate(item.info, { length: 250 })} 
                    
                  </div>
                </div>
              </motion.div>
            );
          })}
          </div>
          </div>
         
        </div>

        {/* bottom */}
        <motion.div
         ref={ref}
          initial={{ opacity: 0, y: "3rem" }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: "3rem" }}
          transition={{
            duration: 1,
            type: "ease-in",
          }}
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            marginBottom: "2rem",
            width:"100%"
          }}
          className="material m-w-c"
        >
          <div className="material-protray">
            Materials That Portray <br /> Quality & Style{" "}
          </div>
          <div
            style={{ textAlign: "left", color: "#1F1F1F", fontWeight: "450" }}
          >
            Materials, That Level Up.
          </div>
        </motion.div>

        {/* images */}
        <motion.div
         ref={ref}
        initial={{ opacity: 0, y: "3rem" }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0, y: "3rem" }}
        transition={{
          duration: 1,
          type: "ease-in",
        }}
        className="m-w-c"
          style={{
            textTransform: "uppercase",
            textAlign: "left",
            color: "#1F1F1F",
            fontWeight: "400",
            width:'100%'
          }}
        >
          what we use:
        </motion.div>
        <div className="process-bottom-images m-w-c">

          <div className="f-we">
          <motion.div
           ref={ref}
          initial={{ opacity: 0, y: "3rem" }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: "3rem" }}
          transition={{
            duration: 0.6,
            type: "ease-in",
          }}
          className="p-b-i">
            <img
              src={cop}
              alt=""
              
            />
            <div class="overlay-text">
              <h3>Copper</h3>
              <p style={{fontSize:'12px'}}>If safety is your numero<br/>uno priority</p>
              
            </div>
          </motion.div>
          <motion.div
          
          initial={{ opacity: 0, y: "3rem" }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: "3rem" }}
          transition={{
            duration: 1,
            type: "ease-in",
          }}
          className="p-b-i">
            <img
              src={steel}
              alt=""
            />
             <div class="overlay-text">
              <h3>Steel</h3>
              <p style={{fontSize:'12px'}}>If safety is your numero<br/>uno priority</p>
              
            </div>
          </motion.div>
          </div>

          <div className="s-we">
          <motion.div
           ref={ref}
          initial={{ opacity: 0, y: "3rem" }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: "3rem" }}
          transition={{
            duration: 1,
            type: "ease-in",
          }}
          className="p-b-i">
            <img
              src={alum}
              alt=""
            />
            <div class="overlay-text">
              <h3>Zinc</h3>
              <p style={{fontSize:'12px'}}>If safety is your numero<br/>uno priority</p>
              
            </div>
          </motion.div>

          <motion.div 
           ref={ref}
          initial={{ opacity: 0, y: "3rem" }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0, y: "3rem" }}
          transition={{
            duration: 0.2,
            type: "ease-in",
          }}
          className="p-b-i">
            <img
              src={alum}
              alt=""
            />
             <div class="overlay-text">
              <h3>Aluminium</h3>
              <p style={{fontSize:'12px'}}>If safety is your numero<br/>uno priority</p>
              
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </div>

    <PreFooter/>
    <Footer/>

    </>
  );
};

export default Experties;