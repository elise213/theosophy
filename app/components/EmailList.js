"use client";
import React, { useContext, useRef } from "react";
import styles from "../styles/emailList.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Context } from "../context/appContext";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const EmailList = () => {
  const { store, actions } = useContext(Context);
  const form = useRef();
  const SERVICE_ID = "service_wghlfmq";
  const TEMPLATE_ID = "template_uv8sudi";
  const PUBLIC_KEY = "cJEvycw40i3Bo_bkK";

  const signUpForMailingList = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Successfully Signed Up!",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="email-list-container">
      <form
        ref={form}
        onSubmit={signUpForMailingList}
        className="email-list-form"
      >
        <div className="sign-up-form">
          <span> NEWSLETTER : SUBSCRIBE </span>
          <div className="sign-up-form-2">
            <div className="email-list-input-div">
              <input
                type="text"
                id="emailListInput"
                name="email"
                className="emailListInput"
                placeholder="E-mail"
                required
              />
            </div>
            <input type="hidden" name="subject" value="Email subscription" />
            <button className="send-2" type="submit">
              <ArrowForwardIosIcon style={{ fontSize: "15px" }} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailList;
