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

import "./Blogs.css";

const Blogs = () => {
  const data = [
    {
      img: "https://s3-alpha-sig.figma.com/img/d0a9/82c6/3dec605b805b03b7f4470690dfc7e56a?Expires=1696204800&Signature=X1y2XfOxCuwJYkBNTUxnE1jz5YW45G48f3AsD4dDtAjiBBumzYNwfysnUlC23qVZyI6hjdmGzMPnH1GE1fte5PIjBTvJ486RTeufJeVN4ROzlvUg6ly3Ekdo-u0K8b0Bufw4v0HibqfsYjpsm1cPr3AdTi3bQgOddxSO4FFYVO-EvMY4PTEUQ-Wq-KwbrzKAHZm41M7zXnoqDjgylwo2iFRA1-6VD-X5g1e6z9ne1EdrHBBNCVCEp3Hg7CWXb~-x-gde3Phsr4yO-d-~VhbGv8L1nd3VJkJdLEgw-LqBQdZHDZjz69WK0Sq2qUeriWGB7Ek-f9Oo8QKgKs7R6vn29Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading:
        "How to select the best material for your door hardware? Here’s a guide.",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/69b2/05cd/1048693d55afb8cdf5c5235a2fc8894e?Expires=1696204800&Signature=paFWzQIZkomit3tEAUWxezFE2UeCFM8LkqKeiC0pay-E~91q2ECpDKAgwRxqU~pn03K4jxbosd71ZqC8swNhqS5DYa9iYIJMigNkhNMRQQI0yIDzfIWqdnQELfZ25t69ughBbXJLpml6o0hYm~Q4n6kNpj-cMT064IcPd1qnsow-FNwvrGQPb9PRDqxsAlOkXkClvQgVVa66l15pt63UgSBYeoGxCxpNuYiz19sdFUw8cIcTuR5FvA70knvCaAwux4TD~ll0dGkgs43Ua0HqISJSCr9vEDt8F~EGXwwHUoEqosKEs5k2wm6ojhyv4~cPeav96jfmIAAdeFvR99fZXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading:
        "How to select the best material for your door hardware? Here’s a guide.",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/948f/19bb/a889073bb8e5f3f0273f1f69bc419cb0?Expires=1696204800&Signature=jF4PvNR2EoVogyq3s2NoFSiHD22X7TIcTVjvDADBtV~N4eYFMR-0-qDr9ajR30aGXu6D8CnyUK9B4sV3~DrHHXo8HJXh-fI5tvk3bcYO9xYyezO9ECPDicfTUot0RwUKcWARQBx23x~dh3nMn3gFkpmf6A7g1-W~v6avubWsMN3UNq3E67x4O66GzzX4HZkrPP5v65DPQ2BhthyZ-h2fKXku5X9WYTijas3NjdxgwvC6ZmkQEqUA-qpC3Q19tBlz~CuXOPxFLt2x4fb43Xk0ry5AEi8rcUgXtwxG6izVW0twmLXvsr1HOA~ioJDaGQBXOFWZ3n4pAS6Zt7ump4ui4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading:
        "How to select the best material for your door hardware? Here’s a guide.",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/948f/19bb/a889073bb8e5f3f0273f1f69bc419cb0?Expires=1696204800&Signature=jF4PvNR2EoVogyq3s2NoFSiHD22X7TIcTVjvDADBtV~N4eYFMR-0-qDr9ajR30aGXu6D8CnyUK9B4sV3~DrHHXo8HJXh-fI5tvk3bcYO9xYyezO9ECPDicfTUot0RwUKcWARQBx23x~dh3nMn3gFkpmf6A7g1-W~v6avubWsMN3UNq3E67x4O66GzzX4HZkrPP5v65DPQ2BhthyZ-h2fKXku5X9WYTijas3NjdxgwvC6ZmkQEqUA-qpC3Q19tBlz~CuXOPxFLt2x4fb43Xk0ry5AEi8rcUgXtwxG6izVW0twmLXvsr1HOA~ioJDaGQBXOFWZ3n4pAS6Zt7ump4ui4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading:
        "How to select the best material for your door hardware? Here’s a guide.",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
  ];
  return (
    <div className="blogs">
      <div className="top-sec">
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
          <h1>Blogs</h1>
        </div>
        <div className="container">
          <div style={{ marginBottom: "2rem" }} className="top-container">
            <div className="top-container-left">
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 350,
                  border: "1px solid #8C8F92",
                  borderRadius: "30px",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, borderRadius: 50, paddingLeft: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </div>
            <div className="top-container-right">
              <span className="top-container-right-tag">Tags:</span>
              <li>
                <ul>Mortise Locks</ul>
                <ul>Aldrop</ul>
                <ul>Handles</ul>
                <ul>Luxurious Collection</ul>
                <ul>Door closers</ul>
              </li>
            </div>
          </div>

          {/* items */}
          <div className="process">
            {data.map((item, i) => {
              return (
                <div className="process-card" key={i}>
                  <div className="process-img">
                    <img width="100%" src={item.img} alt="" />
                  </div>
                  <div className="process-info">
                    <div className="process-info-upper">{item.heading}</div>
                    <div className="process-info-bottom">{truncate(item.info,{length:300})}</div>

                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                        color: "#51565D",
                        fontSize: "12px",
                      }}
                      className="d-c-v"
                    >
                      {/* date-comment-views */}
                      <span>{item.date}</span>
                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                      <span>{item.views}</span>
                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                      <span>{item.comment}</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "#4C341F",
                        fontWeight: "600",
                      }}
                    >
                      <span>Read more</span>
                      <span className="arrow">
                        <Arrow />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* items end */}
            <div style={{justifyContent:'center',display:'flex',alignItems:'center'}}  className="pagination">
            <Stack style={{justifyContent:'center',display:'flex'}} spacing={2}>
            <Pagination count={15} shape="rounded" />
          </Stack>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Blogs;
