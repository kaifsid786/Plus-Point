import React, { useState, useRef } from "react";
import "./Form3.css";
import rightImg from "../../../images/contact-img.png";
import arrow from "../../../images/contact-arrow.svg";
import emailjs from "@emailjs/browser";

export default function Form3(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_21irvfr",
        "template_5a5tx2r",
        form.current,
        "4b2IseQlivRCEo0r4"
      )
      .then(
        (result) => {
          props.setI(3);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div
        className="form-3"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="main-form3">
          <div className="form3-wrapper">
            <div className="form3-left">
              <form
                className="form3-left-content"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="form3-left-title">
                  <span>
                    {" "}
                    <img
                      src={arrow}
                      onClick={() => {
                        props.setI(1);
                      }}
                    />{" "}
                  </span>{" "}
                  Get in Touch
                </div>
                <div className="form3-left-info">
                  {" "}
                  Fill out this small form to help us know you better
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  required
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="number"
                  required
                />
                <input
                  type="hidden"
                  name="occupation"
                  value={props.userData.occupation}
                />
                <input
                  type="hidden"
                  name="interest"
                  value={props.userData.interst}
                />
                <input type="email" placeholder="Email" name="email" required />
                <div className="form3-msg">Message*</div>
                <textarea name="message" id=""></textarea>
                <button className="form3-left-btn">Continue</button>
                <div className="form-filler">
                  <div className="form-bgColor" style={{ width: "90%" }}></div>
                </div>
              </form>
            </div>
            <div className="form3-right">
              <img src={rightImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
