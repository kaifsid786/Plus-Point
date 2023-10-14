import React,{useState,useEffect} from "react";
import "./Experties.css";
import Exp1 from "../../images/Experties.png";
import process from "../../images/process.png";
import { truncate } from "lodash";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../Header/Header";
import PreFooter from "../PreFooter/PreFooter";
import Footer from "../Footer/Footer";



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
          
          className="highlights"
        >
          <div style={{ textTransform: "uppercase", fontSize: "1.3rem" }}>
            Manufacturing Highlights
          </div>
          <div className="card-container">
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
        <div className="process">
          <div className="The-Process" >
            The{" "}
            <span style={{ fontWeight: "bold", color: "#4C341F" }}>
              Process
            </span>
          </div>

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
                  <div className="process-info-upper">{item.heading}</div>
                  <div className="process-info-bottom">
                    {truncate(item.info, { length: 250 })} 
                    
                  </div>
                </div>
              </motion.div>
            );
          })}
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
          }}
          className="material"
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
          style={{
            textTransform: "uppercase",
            textAlign: "left",
            color: "#1F1F1F",
            fontWeight: "400",
          }}
        >
          what we use:
        </motion.div>
        <div className="process-bottom-images">

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
              src="https://s3-alpha-sig.figma.com/img/e557/431e/9c037e7f00aede4d12cde7c771d18b05?Expires=1697414400&Signature=NST5FhkB3lIxcUDUv~yAFbiKdTM~Ulok~Z541t9KzE5IQCn4qDz3SbtEpmmmqvOeu1pMPz54IHK2QPv81G822OGS08h~AmjyIq8IFoycZZGOW1edFCtuTcyz2wVcpABJh-yy-rwhCm-jKnPI4jFAky6Ya4GT7CtHGsOsGaa6HCzzD0lFZRImOqZmjWHkETQ2dAZFKj6C0rAmcDp6zrXzTd11DsAHThzVYdzqxm8yLMLzD5smH8stf0D2zfRgvvEALTFevgO3R1yHxP4p8NecQYTTfcIlYlGGqIlB2Vi2FNA3mMbeQCor30jAtGdUClUMECxTeie2AF04~xhd71Q8sw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              src="https://s3-alpha-sig.figma.com/img/09c6/6037/c6edf1634872ae6b48bc69c32a92ff67?Expires=1697414400&Signature=Tt5b9Jgx~ujeLRUh~lTaHsd5xM161HPtccGmwvVg0pQN1R8OBS2HUOvialOr8eMt4Kr9v6gZxW6Bimkl3jqi6~ZpoFJCRs6q1I9K8u530~SPqwP791PbvNb3LaEj6gFT-ITT9kRhPdcw5AMpe7-QfyBJUV7mLyNzqTSFywCMwyXs8kV7PLyq4PnQVRSMDT7RPG-XaMot13fnpqz6wx36kTehHVeivtHE6xGG~RhBeO5-t7PDUZp8kNwif71jI5No7rU6M5NgcMVKFFYdZaVW1G8Qc6G~yl34rQP3jHpQ-k5dLCLs1aXIr~06glREDC0YV3RHmvOHyoMDdaeNnakHgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              src="https://s3-alpha-sig.figma.com/img/99c7/3ec4/87f66f0aa854360233c139688514b7c0?Expires=1697414400&Signature=hHTbkxASwuIukLRRgCLMAZ2AqSJv0F5d1Px4r2qas0tzxYifA9CVlR36RMF~VvvF6Iw5REwnXux1YI48yDDG2tKS2LdNxbuk270-9FA-nsUW0i9Jnj2gM09-AA-h8FjIfyuSgypNc6tfc7VlebZ3nKpcPY8ax3Xs4l36DgeyX46fhPWfzS8BqO31peKQ4Qgy03YwLO~yZi6yDwVCYSHYsX9~fCeKo-3bui0vtF2NRJanIy6F9OA1iuGa4z7qEb~Z9dHs6GKpwRKenu~MS5EwFjbw3adIwWJ7HOJkYgqFGAR5LTJQF~PLolwxTLhfKHCYVlnvpttjZ8yI8fO7bjM6pg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
              src="https://s3-alpha-sig.figma.com/img/99c7/3ec4/87f66f0aa854360233c139688514b7c0?Expires=1697414400&Signature=hHTbkxASwuIukLRRgCLMAZ2AqSJv0F5d1Px4r2qas0tzxYifA9CVlR36RMF~VvvF6Iw5REwnXux1YI48yDDG2tKS2LdNxbuk270-9FA-nsUW0i9Jnj2gM09-AA-h8FjIfyuSgypNc6tfc7VlebZ3nKpcPY8ax3Xs4l36DgeyX46fhPWfzS8BqO31peKQ4Qgy03YwLO~yZi6yDwVCYSHYsX9~fCeKo-3bui0vtF2NRJanIy6F9OA1iuGa4z7qEb~Z9dHs6GKpwRKenu~MS5EwFjbw3adIwWJ7HOJkYgqFGAR5LTJQF~PLolwxTLhfKHCYVlnvpttjZ8yI8fO7bjM6pg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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