import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Arrow from "@mui/icons-material/ArrowForward";
import DirectionsIcon from "@mui/icons-material/Directions";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {truncate} from 'lodash';
import "./BlogInside.css";
import { ArrowBack, ArrowDownward, ArrowDownwardSharp, Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";

const BlogInside = () => {
  const data = [
    {
      img: "https://s3-alpha-sig.figma.com/img/d0a9/82c6/3dec605b805b03b7f4470690dfc7e56a?Expires=1696204800&Signature=X1y2XfOxCuwJYkBNTUxnE1jz5YW45G48f3AsD4dDtAjiBBumzYNwfysnUlC23qVZyI6hjdmGzMPnH1GE1fte5PIjBTvJ486RTeufJeVN4ROzlvUg6ly3Ekdo-u0K8b0Bufw4v0HibqfsYjpsm1cPr3AdTi3bQgOddxSO4FFYVO-EvMY4PTEUQ-Wq-KwbrzKAHZm41M7zXnoqDjgylwo2iFRA1-6VD-X5g1e6z9ne1EdrHBBNCVCEp3Hg7CWXb~-x-gde3Phsr4yO-d-~VhbGv8L1nd3VJkJdLEgw-LqBQdZHDZjz69WK0Sq2qUeriWGB7Ek-f9Oo8QKgKs7R6vn29Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading: "select the best material for your door hardware",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
  ];
  return (
    <div className="blog-inside">
      <div
        style={{
          display: "flex",
          background: "#4C341F",
          justifyContent: "center",
          color: "#FFFBDB",
          alignItems: "center",
        }}
        className="top-image"
      >
        <h1>
          How to select the best material for your door <br /> hardware? Here’s
          a guide.
        </h1>
      </div>
      <div className="container">
        <div className="process">
          {data.map((item, i) => {
            return (
              <div
                className="process-card"
                style={{ display: "flex", flexDirection: "column" }}
                key={i}
              >
                <div className=" blog-inside-image">
                  <img width="100%" src={item.img} alt="" />
                </div>
                <div className="process-info">
                  <div style={{fontSize:'1.5rem'}} className="process-info-upper">{item.heading}</div>
                  <div className="process-info-bottom">{item.info}</div>
                </div>

                <div className=" later-images">
                  <div className="later-image-1">
                    <img width="100%" src={item.img} alt="" />
                  </div>

                  <div className="later-image-2">
                    <img width="100%" src={item.img} alt="" />
                  </div>
                </div>

                <div className="process-info">
                  <div style={{fontSize:'1.5rem'}} className="process-info-upper ">{item.heading}</div>
                  <div className="process-info-bottom">{item.info}</div>
                  <br />
                  <div className="process-info-bottom">{item.info}</div>
                </div>

                <div className="process-info">
                  <div style={{fontSize:'1.5rem'}} className="process-info-upper">{item.heading}</div>
                  <div className="process-info-bottom">{item.info}</div>
                  <br />
                  
                </div>

              </div>
            );
          })}
        </div>
          <Divider></Divider>
        <div className="top-container">
       
            <div className="top-container-right">
              <span className="top-container-right-tag">Tags:</span>
              <li>
                <ul>Airdrop Locks</ul>
                <ul>Headlines</ul>
              
                <ul>Luxurious Collection</ul>
              
              </li>
            </div>
            <div className="top-container-right inside-blog-icon">
              <span className="top-container-right-tag ">Share This Article:</span>
              <li>
                <ul><WhatsApp/></ul>
                <ul><Facebook /></ul>
              
                <ul><Twitter /></ul>
                <ul><Instagram /></ul>
              
              </li>
            </div>
            
          </div>
          <Divider />

          <div className="prev-next">
            <span><ArrowBack/> Prev</span>
            <span>Next <Arrow/></span>
          </div>

          {/* comments */}
          <div className="blog-comments">
            <div className="comment-heading">
              <span style={{fontWeight:'600'}}>Comments</span>
              <span style={{border:"2px solid black",borderRadius:"30px",padding:"10px 15px"}}>Recommended </span>
            </div>
            <div className="comment-profile">
              
            </div>
          </div>
      </div>
    </div>
  );
};

export default BlogInside;
