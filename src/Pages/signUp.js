import React from "react";
import Copyright from "../components/copy";
import Navbar from "../components/navbar";
import styles from "../Stylesheets/sgnUp.module.css";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  return (
    <div>
      <Navbar />
      <body>
        <div className={styles.backgrd}>
          <p className={styles.headSU}>Sign up</p>
          <form
           method="post">

<label className={styles.labelSU}>Email</label>
          <br></br>
          <input className={styles.inputSU} type="text" name="fName"></input>
          <br></br>
          <label className={styles.labelSU}>Full Name</label>
          <input className={styles.inputSU}  type="text" name="email"></input>

          <label className={styles.labelSU}>Password</label>
          <input className={styles.inputSU} type="text" name="password"></input>

          <label  className={styles.labelSU}>Confirm password</label>
          <input className={styles.inputSU}  type="text" name="password"></input>

          <button className={styles.buttonSU}>
            <Link className={styles.aSU} to="#">
              Sign up
            </Link>
          </button>
          </form>

          
  
          
        </div>
      </body>

      <Copyright />
    </div>
  );
};

export default SignUp;
