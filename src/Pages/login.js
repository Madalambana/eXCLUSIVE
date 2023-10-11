import React from "react";
import Copyright from "../components/copy";
import Navbar from "../components/navbar";
import "../Stylesheets/logn.css";
import Clear from "../components/clear";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <Navbar />
      <body>
        <div className="img_1"></div>
        <div className="login">
          <div className="header">
            <p>Login</p>
          </div>
          <form method="post">
            <div className="title">
              <p>
                Don't have an account?{" "}
                <Link className="a" to="/signup">
                  Create a free account
                </Link>
              </p>
            </div>

            <label for="email">Email:</label>
            <input type="text" name="#" id="#"></input>
            <label for="passwrd">Password :</label>
            <input type="text" name="#" id="#"></input>

            <p className="title2">
              <Link className="a" to="#">
                Forgot password?
              </Link>
            </p>

            <button type="submit">Login</button>
          </form>
        </div>
      </body>
      <Clear />
      <Copyright />
    </div>
  );
};

export default Login;
