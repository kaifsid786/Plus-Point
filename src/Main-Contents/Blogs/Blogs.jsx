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
import Header from '../Header/Header';
import PreFooter from '../PreFooter/PreFooter';
import Footer from '../Footer/Footer';

import "./Blogs.css";

const Blogs = () => {
  const data = [
    {
      img: "https://s3-alpha-sig.figma.com/img/d0a9/82c6/3dec605b805b03b7f4470690dfc7e56a?Expires=1697414400&Signature=En1VQvor9vaXNM-~LTMIck0V9pjZeo~dRX2If0hvOTqKebi74cRKqe5G-yXD81pQ7nC9jJLeRuXMHRoCXGVwad2Kqz-yaej8NsdmGw8U8Ia95hRUhrSmrITM9Itt5CMyaEtur06c3PGIHghljxj9jUiirRT1cobK~aFr~vQCPt~xAh83yiVBcvByjnc4YSu8xKfmKCZAbC-eQj-lQnidAeqxATxxJhrEES2Lt2chVAxlPCCLliJNqiTBGLJL0syDoD1fhdu1dk8Dp~8ZClinQWOonFUoUNwej3~18A7v2dIL~1fCRY8MeMz1R8AdKSAU0E0fucTvuT7HKIQ-jEBEzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading:
        "How to select the best material for your door hardware? Here’s a guide.",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/d0a9/82c6/3dec605b805b03b7f4470690dfc7e56a?Expires=1697414400&Signature=En1VQvor9vaXNM-~LTMIck0V9pjZeo~dRX2If0hvOTqKebi74cRKqe5G-yXD81pQ7nC9jJLeRuXMHRoCXGVwad2Kqz-yaej8NsdmGw8U8Ia95hRUhrSmrITM9Itt5CMyaEtur06c3PGIHghljxj9jUiirRT1cobK~aFr~vQCPt~xAh83yiVBcvByjnc4YSu8xKfmKCZAbC-eQj-lQnidAeqxATxxJhrEES2Lt2chVAxlPCCLliJNqiTBGLJL0syDoD1fhdu1dk8Dp~8ZClinQWOonFUoUNwej3~18A7v2dIL~1fCRY8MeMz1R8AdKSAU0E0fucTvuT7HKIQ-jEBEzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading:
        "How to select the best material for your door hardware? Here’s a guide.",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/69b2/05cd/1048693d55afb8cdf5c5235a2fc8894e?Expires=1697414400&Signature=N9ndWpOCfc20Xfy5qxIsiEkJChzyclZC8-tpxq2CWIr2ZZKc4kAWTPGTuSJAxS1FXimqvwdRQEoasp9tcqaGv0rwaqW5JI8uWY6vttiicIWPZIhV9dHdbQRVtkfCqSe9JqPaXzXhvO0-KWClkMngY3VFpWD7S6qd66iKfZIJB8IvKELWdTdzT5azGBVs~GaSECdP1lVITlK6LLOtZJtD98dDz1WXWS82jZl-g3lRS6JO8erDclL6BBjIpb84SGuOSF6OfyHrDzqVbFo3HwA1-sG6A7XmSQNVh06DSV8Au5BffSiN5SGlWOTlruM104W58LrhFDApqHXMEw04Fh3nSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading:
        "How to select the best material for your door hardware? Here’s a guide.",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/948f/19bb/a889073bb8e5f3f0273f1f69bc419cb0?Expires=1697414400&Signature=G5eiosnm4lUOAZHJphUitxjVGqBQ--O8pVAa7oKe-FQGYzmHf1I69qmyaqCa1vidhP8yHd0njp~f-gX0G8tYHIqHaJ~W-X5JTiiCLG3EgV5H-k6WD~FLKWbaceejOLSTJH7yJ24OMrjtgpy~-pCqQ3hrAHQF5HDyMjRfz3Yrlq-EhiS9iAKpVepC1nD26bdKebXw3KBwwykEPZrLEAJqjyESiXYv98Fr182tHofvYe2XZJjV3qumADuZwLg7ZwHXTe2YEwK5nG-9TvtMcPZ-jCXQOlprBkQ2Qd5gaW7-eKwMoLyXnQKvcOsAKn3vHylahljJSIUmRRsmoMiEbZKbgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      heading:
        "How to select the best material for your door hardware? Here’s a guide.",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      date: "08-Jan-2023",
      views: "23 views",
      comment: "1 comment",
    },
  ];
  return (
    <>
    <Header />
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
                  <div className=" bolgs-imgs">
                    <img width="100%" src={item.img} alt="" />
                  </div>
                  <div className="process-info">
                    <div className="process-info-upper">{item.heading}</div>
                    <div className="process-info-bottom">{truncate(item.info,{length:400})}</div>

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
                        color: "rgba(76, 52, 31, 1), rgba(181, 134, 94, 1)",
                        fontSize:'1.5rem',
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
    <PreFooter />
    <Footer />
    </>
  );
};

export default Blogs;
