import React from "react";
import Copyright from "../components/copy";
import Navbar from "../components/navbar";
import "../Stylesheets/sgnUp.css";

const SignUp = (props) => {
  return (
    <div>
      <Navbar />
      <body>
        <div className="backgrd">
          <p className="header1">Sign up</p>

          <label>Email</label>
          <br></br>
          <input type="text" name="fName"></input>
          <br></br>
          <label>Full Name</label>
          <input type="text" name="email"></input>

          <label>Password</label>
          <input type="text" name="password"></input>

          <label className="title4">Confirm password</label>
          <input type="text" name="password"></input>

          <button className="btn3">
            <a className="a" href="#">
              Sign up
            </a>
          </button>
        </div>
      </body>

      <Copyright />
    </div>
  );
};

export default SignUp;
