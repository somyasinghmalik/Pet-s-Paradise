import React from "react";
import developerPng from "./images/Dog.png";

const Contact = () => {
  return (
    <div className="contactUs-wrapper">
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h2>📬 Let's Get in Touch</h2>
        <p style={{ marginBottom: "2rem", fontStyle: "italic" }}>
          I’m always open to discussing new opportunities, creative ideas, or collaborations!
        </p>

        <div className="contact-link-box">
          <i className="fa fa-envelope"></i>
          <a href="mailto:somyasinghmalik@gmail.com">somyasinghmalik@gmail.com</a>
        </div>

        <div className="contact-link-box">
          <i className="fa fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/somya-malik-671458171/">LinkedIn - somya malik</a>
        </div>

        <div className="contact-link-box">
          <i className="fa fa-github"></i>
          <a href="https://github.com/somyasinghmalik">GitHub - somyasinghmalik</a>
        </div>

        <div className="contact-link-box">
          <i className="fa fa-instagram"></i>
          <a href="https://www.instagram.com/somyasinghmalik/">@somyasinghmalik</a>
        </div>

        <div className="contact-link-box">
          <i className="fa fa-phone"></i>
          <a href="tel:+917599527317">+91 75995 27317</a>
        </div>
      </div>

      <div className="contactUs-pic">
        <img src={developerPng} alt="Dog illustration" />
      </div>
    </div>
    </div>
  );
};

export default Contact;
