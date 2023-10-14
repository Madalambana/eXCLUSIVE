import React from "react";
import Copyright from "../components/copy";
import Navbar from "../components/navbar";
import  styles from "../Stylesheets/sprt.module.css";
import { Link } from "react-router-dom";

const Support = (props) => {
  return (
    <div>
      <Navbar />
      <body></body>
      <div>
        <p className={styles.sprt}>Personalized Support</p>

        <div className={styles.secI}>
          <p className={styles.headerI}>Curious and would like answers?</p>
          <input className={styles.inputS} type="text" placeholder="'We're all ears...'"></input>
          
          <button className={styles.buttonS}>
          <Link to="#" className={styles.a}>
            Ask
          </Link>
          </button>
        </div>

        <div className={styles.secII}>
          <div className={styles.imgI}></div>
          <p className={styles.headerII}>Would like to contact us?</p>
          <p className={styles.info}>
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
