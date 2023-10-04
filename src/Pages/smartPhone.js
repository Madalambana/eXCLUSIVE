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
        <Clear/>

        {/* quadrant 1 */}
        <div className="floatlft">
        <div className="img1"></div>
        <div className="mini-inf">
            <p>
              {" "}
              Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
              doeiusmod tempor ut labore et dolore magna . Ut enim adminim
              veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip
              ex ea commodoconsequat.{" "}
            </p>
          </div>

          <button>
            <a href="#" className="a">
              Purchase
            </a>
          </button>
        </div>

        {/* quadrant 2 */}
        <div className="floatrght">
          <div className="img1"></div>
          <div className="mini-inf">
            <p>
              {" "}
              Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
              doeiusmod tempor ut labore et dolore magna . Ut enim adminim
              veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip
              ex ea commodoconsequat.{" "}
            </p>
          </div>

          <button>
            <a href="#" className="a">
              Purchase
            </a>
          </button>
        </div>

        <Clear />

        {/* quadrant 3 */}
        <div className="floatlft">
        <div className="img1"></div>
        <div className="mini-inf">
            <p>
              {" "}
              Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
              doeiusmod tempor ut labore et dolore magna . Ut enim adminim
              veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip
              ex ea commodoconsequat.{" "}
            </p>
          </div>

          <button>
            <a href="#" className="a">
              Purchase
            </a>
          </button>
        </div>

        {/* quadrant 4 */}
        <div className="floatrght">
        <div className="img1"></div>
        <div className="mini-inf">
            <p>
              {" "}
              Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
              doeiusmod tempor ut labore et dolore magna . Ut enim adminim
              veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip
              ex ea commodoconsequat.{" "}
            </p>
          </div>

          <button>
            <a href="#" className="a">
              Purchase
            </a>
          </button>
        </div>

        <Clear />
        
          <a href="#">
          <div className="more"></div>
          </a>
        
      </div>
      <Copyright />
    </div>
  );
};

export default Smartphones;
