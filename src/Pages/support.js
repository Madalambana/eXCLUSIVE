import React from "react";
import Copyright from "../components/copy";
import Navbar from "../components/navbar";
import "../Stylesheets/sprt.css";

const Support = (props) => {
  return (
    <div>
      <Navbar />
      <body></body>
      <div>
        <p className="sprt">Personalized Support</p>

        <div className="sec1">
          <p className="header1">Curious and would like answers?</p>
          <input type="text" placeholder="'We're all ears...'"></input>
          
          <button>
          <a href="#" className="a">
            Ask
          </a>
          </button>
        </div>

        <div className="sec2">
          <div className="img1"></div>
          <p className="header2">Would like to contact us?</p>
          <p className="info">
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
            doeiusmod tempor ut labore et dolore magna . Ut enim adminim veniam,
            quis nostrudexercitation ullamco laboris nisi ut aliquip
          </p>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Support;
