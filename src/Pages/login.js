import React from "react";
import Copyright from "../components/copy";
import Navbar from "../components/navbar";
import styles from"../Stylesheets/logn.module.css";
import Clear from "../components/clear";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <Navbar />
      <body>
        <div className={styles.logo}></div>
        <div className={styles.login}>
          <div className={styles.heading}>
            <p>Login</p>
          </div>
          <form method="post">
            <div className={styles.title}>
              <p>
                Don't have an account?{" "}
                <Link className={styles.aL} to="/signup">
                  Create a free account
                </Link>
              </p>
            </div>

            <label className={styles.labelL} for="email">Email:</label>
            <input className={styles.inputL} type="text" name="#" id="#"></input>
            <label className={styles.labelL} for="passwrd">Password :</label>
            <input className={styles.inputL} type="text" name="#" id="#"></input>

            <p className={styles.title2}>
              <Link className={styles.aL} to="#">
                Forgot password?
              </Link>
            </p>

            <button className={styles.buttonL} type="submit">Login</button>
          </form>
        </div>
      </body>
      <Clear />
      <Copyright />
    </div>
  );
};

export default Login;
