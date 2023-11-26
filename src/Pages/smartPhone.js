import React from "react";
import Copyright from "./copy";
import Navbar from "../components/navbar";
import styles from "../Stylesheets/smrtphn.module.css";
import Clear from "../components/clear";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Smartphones = (props) => {

  const navigate = useNavigate();


  return (
    <div>
      <Navbar />
      <div className={styles.banner}>
        <p>Smartphones</p>
      </div>

      <div className={styles.section}>
        {/* realme */}
        <div className={styles.head}>
          <h3>realme</h3>
        </div>
        <Clear/>

        {/* quadrant 1 */}
        <div className={styles.floatlft}>
        <div className={styles.display}></div>
        <div className={styles.miniInf}>
            <p>
              {" "}
              Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
              doeiusmod tempor ut labore et dolore magna . Ut enim adminim
              veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip
              ex ea commodoconsequat.{" "}
            </p>
          </div>

          <button className={styles.buttonSM}
          onClick={()=> navigate('/select')}>
            <Link to="" className={styles.aSM}>
              Purchase
            </Link>
          </button>
        </div>

        {/* quadrant 2 */}
        <div className={styles.floatrght}>
          <div className={styles.display}></div>
          <div className={styles.miniInf}>
            <p>
              {" "}
              Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
              doeiusmod tempor ut labore et dolore magna . Ut enim adminim
              veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip
              ex ea commodoconsequat.{" "}
            </p>
          </div>

          <button className={styles.buttonSM}>
            <Link to="" className={styles.aSM}>
              Purchase
            </Link>
          </button>
        </div>

        <Clear />

        {/* quadrant 3 */}
        <div className={styles.floatrght}>
          <div className={styles.display}></div>
          <div className={styles.miniInf}>
            <p>
              {" "}
              Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
              doeiusmod tempor ut labore et dolore magna . Ut enim adminim
              veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip
              ex ea commodoconsequat.{" "}
            </p>
          </div>

          <button className={styles.buttonSM}>
            <Link to="" className={styles.aSM}>
              Purchase
            </Link>
          </button>
        </div>

        {/* quadrant 4 */}
        <div className={styles.floatrght}>
          <div className={styles.display}></div>
          <div className={styles.miniInf}>
            <p>
              {" "}
              Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
              doeiusmod tempor ut labore et dolore magna . Ut enim adminim
              veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip
              ex ea commodoconsequat.{" "}
            </p>
          </div>

          <button className={styles.buttonSM}>
            <Link to="" className={styles.aSM}>
              Purchase
            </Link>
          </button>
        </div>

        <Clear />
        
          <Link to="">
          <div className="more"></div>
          </Link>
        
      </div>
      <Copyright />
    </div>
  );
};

export default Smartphones;
