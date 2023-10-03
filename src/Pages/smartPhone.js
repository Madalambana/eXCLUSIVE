import React from "react";
import Copyright from "../components/copy";
import Navbar from "../components/navbar";
import "../Stylesheets/smrtphn.css";
import Clear from "../components/clear";

const Smartphones = (props) => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <p>Smartphones</p>
      </div>

      <div className="sec1">
        {/* realme */}
        <div className="header">
          <h3>realme</h3>
        </div>

        {/* quadrant 1 */}
        <div className="floatlft">
          <div className="rm1"></div>
          <p className="rmi">
            {" "}
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
            doeiusmod tempor ut labore et dolore magna . Ut enim adminim veniam,
            quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea
            commodoconsequat.{" "}
          </p>

          <p className="purchaseBtn">
            <a href="selection" className="a3">
              Purchase{" "}
            </a>
          </p>
        </div>

        {/* quadrant 2 */}
        <div className="floatrght">
          <div className="rm1"></div>
          <p className="rmi">
            {" "}
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
            doeiusmod tempor ut labore et dolore magna . Ut enim adminim veniam,
            quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea
            commodoconsequat.{" "}
          </p>

          <p className="purchaseBtn">
            <a href="selection" className="a3">
              Purchase{" "}
            </a>
          </p>
        </div>

        <Clear />

        {/* quadrant 3 */}
        <div className="floatlft">
          <div className="rm1"></div>
          <p className="rmi">
            {" "}
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
            doeiusmod tempor ut labore et dolore magna . Ut enim adminim veniam,
            quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea
            commodoconsequat.{" "}
          </p>

          <p className="purchaseBtn">
            <a href="selection" className="a3">
              Purchase{" "}
            </a>
          </p>
        </div>

        {/* quadrant 4 */}
        <div className="floatrght">
          <div className="rm1"></div>
          <p className="rmi">
            {" "}
            Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
            doeiusmod tempor ut labore et dolore magna . Ut enim adminim veniam,
            quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea
            commodoconsequat.{" "}
          </p>

          <p className="purchaseBtn">
            <a href="selection" className="a3">
              Purchase{" "}
            </a>
          </p>
        </div>

        <Clear />
        <div className="more"><a href="#"></a></div>
      </div>
      <Copyright />
    </div>
  );
};

export default Smartphones;
