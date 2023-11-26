import React from "react";
import Copyright from "../components/copy";
import Navbar from "../components/navbar";
import styles from "../Stylesheets/sel.module.css";

const Selection = (props) => {
 
  return (
    <div>
      <Navbar/>
      <section>
      <div className={styles.main}>
        <p className={styles.headSL1}>realme</p>
        <div className={styles.imgSL1}></div>
        <div className={styles.infoRight}>
          <p>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
            doeiusmod tempor ut labore et dolore magna . Ut enim adminim veniam,
            quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea
            commodoconsequat. Duis aute i
          </p>      
        </div>

        <button className={styles.button1}>
            Wishlist
          </button>
          <button className={styles.button2}>
            Add to basket
          </button>
      </div>
      </section>
     
     <section>
       <div className={styles.main2}>
        <div className={styles.infoLeft}>
          <p className={styles.headSL2}>Details </p>
          <p className={styles.selInfo}>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
            doeiusmod tempor ut labore et dolore magna . Ut enim adminim veniam,
            quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea
            commodoconsequat. Duis aute i
          </p>
        </div>
        <div className={styles.imgSL2}></div>
      </div>
     </section>
      
     
      <Copyright />
    </div>
  );
};

export default Selection;
