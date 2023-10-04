import React,{useState,useEffect} from "react";
import "./Experties.css";
import Exp1 from "../../images/Experties.png";
import process from "../../images/process.png";
import { truncate } from "lodash";
import { motion } from "framer-motion";

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
const Experties = () => {

  

  return (
    <div className="experties">
      <div className="top-sec">
        <div className="top-image">
          <img width="100%" height="100%" src={Exp1} />
        </div>
        <div
          style={{
            background: "#4C341F",
            fontFamily: "poppins",
            color: "white",
            gap: "2rem",
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            paddingBottom: "4rem",
          }}
          className="highlights"
        >
          <div style={{ textTransform: "uppercase", fontSize: "1.3rem" }}>
            Manufacturing Highlights
          </div>
          <div className="card-container">
            <motion.div
              initial={{ y: "2rem", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
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
              initial={{ y: "2rem", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
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
              initial={{ y: "2rem", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
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
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "0 2rem",
            }}
            className="card"
          >
            <div className="card1 exp-card">
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#4C341F",
                }}
              >
                Precision & Design{" "}
              </div>
              <div className="info">
                Products design per international standerd.
              </div>
            </div>
            <div className="card2 exp-card">
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#4C341F",
                }}
              >
                Surface Finishing:{" "}
              </div>
              <div className="info">
                A robust outer layer guarding through buffing, polishing,
                plating, and more
                <br />– a crucial step for the desired texture.
              </div>
            </div>
            <div className="card3 exp-card">
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#4C341F",
                }}
              >
                Quality Control:{" "}
              </div>
              <div className="info">
                Meticulous scrutiny, seamless cohesion - embracing a 3-stage
                quality inspection for optimal finish & enduring durability.
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* process */}
      <div className="container">
        <div className="process">
          <div style={{ fontSize: "2rem", textAlign: "left" }}>
            The{" "}
            <span style={{ fontWeight: "bold", color: "#4C341F" }}>
              Process
            </span>
          </div>

          {data.map((item, i) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: "5rem" }}
                whileInView={{ y: 0, opacity: 1 }}
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
          initial={{ opacity: 0, y: "3rem" }}
          whileInView={{ y: 0, opacity: 1 }}
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
        initial={{ opacity: 0, y: "3rem" }}
        whileInView={{ y: 0, opacity: 1 }}
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
          <motion.div 
          initial={{ opacity: 0, y: "3rem" }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "ease-in",
          }} className="p-b-i">
            <img
              src="https://s3-alpha-sig.figma.com/img/e557/431e/9c037e7f00aede4d12cde7c771d18b05?Expires=1696204800&Signature=JdZQ2CVBB8g2QSZGGVo~okzsbLMKq8YhS7X6p0XvQz6MOYAvzarRtwMhn~dhNuIP9tccZENZFMWP3uWdqaTWBC8AA-ZUiiL1~0MccM~xAhLNPxU~2o7rQ3w~9lID80WzHJXawe--iWeItfMexP~E4jmsJPSuwkcgW55zqw2lHh8YEu4LrhhQSmE6ayNzVu1bxoPPSQlNj2OIbRysXx4tOsU5kHKD8yOi23XxZSWKhkDqcJ5qsJFj8eAD6dxlEbt9FuKwru1bDuBiZ9lnjFQsmjI8d5bxa4fGgEPE~7TEgjxdzA2uReGP8iIjEVfXUX4w-n-q092uUnbEvvY8XeI5dg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: "3rem" }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            type: "ease-in",
          }}
          className="p-b-i">
            <img
              src="https://s3-alpha-sig.figma.com/img/09c6/6037/c6edf1634872ae6b48bc69c32a92ff67?Expires=1696204800&Signature=KCTlG-kJSfdz-P0-KhdOsdWZtHAnrvxvxPO15OHEws43uAyTXSK1L-DQ7w5tHL60B5GclHrPz4RhUOZvpGE39DAzywbwaQlnNp75PKLbf8PfeAgsE1~tMoeEUkE0NhL3jszSTNl7PA4TT4LSipcaaTlvNEOm-IIOr7vR3xQ51MtKHmV01Z3NwsYHrLRRXQrDmw3FjYdGVJt0g1f-5-EXDok24hluwDQHFi3XiCpvGvINKzfxCPuh0T~S91tBK2BnB~LzMjVRl1VA1hx0atfXG7lP-C~rt36OJVuqYFKWV0hoi0XRfCTes4DDBBIc1Frsw7yA5WIqRFp6C1Ux~tafQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: "3rem" }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "ease-in",
          }}
          className="p-b-i">
            <img
              src="https://s3-alpha-sig.figma.com/img/99c7/3ec4/87f66f0aa854360233c139688514b7c0?Expires=1696204800&Signature=VK0z6uYdWpr5azFI8QjfBIy4k-8IzkowIPZDtO85QL~eIcGudNQpOO7NSGub8XZJzryxuPTBmw07j9o-CSiTJSX8ETi6aVPzk-AJfHOJ04IIZRzq8i3pj3cgnu7I~hRlBcOoAd~wj4wBqgZr7RwXcGX1v~CufW0aZWzsdO2tI7TLVKYXHoo5ulkxszlyIW8XHYGCqpKUXoD0q8jl4L8~YwQJoYuEEkhmj7iwyZHORKRdJxoc856LEKM3Bktba9uOPU0V3rFXYLOXDmPO-4ecJRoaoUDZTh9-ctv6UchsTVlxfczrIRY-GvWG939AWXtRlT5dOVpW8ks9JX0en-k84w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, y: "3rem" }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.2,
            type: "ease-in",
          }}
          className="p-b-i">
            <img
              src="https://s3-alpha-sig.figma.com/img/99c7/3ec4/87f66f0aa854360233c139688514b7c0?Expires=1696204800&Signature=VK0z6uYdWpr5azFI8QjfBIy4k-8IzkowIPZDtO85QL~eIcGudNQpOO7NSGub8XZJzryxuPTBmw07j9o-CSiTJSX8ETi6aVPzk-AJfHOJ04IIZRzq8i3pj3cgnu7I~hRlBcOoAd~wj4wBqgZr7RwXcGX1v~CufW0aZWzsdO2tI7TLVKYXHoo5ulkxszlyIW8XHYGCqpKUXoD0q8jl4L8~YwQJoYuEEkhmj7iwyZHORKRdJxoc856LEKM3Bktba9uOPU0V3rFXYLOXDmPO-4ecJRoaoUDZTh9-ctv6UchsTVlxfczrIRY-GvWG939AWXtRlT5dOVpW8ks9JX0en-k84w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experties;
