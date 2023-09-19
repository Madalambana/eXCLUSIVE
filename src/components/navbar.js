import React from 'react';
import '../Stylesheets/navbar.css'

const Navbar = () => {

    return (
      <div className="navBar">
        <h2><a href="#">eXCLSUIVE</a></h2>
     <nav >
        <ul>
            <li><a  href="#">Smartphones</a></li>
            <li><a  href="#">OS</a></li>
            <li><a  href="#">Support</a></li>
        </ul>
    </nav>
   <a href='#'><div className='SignIn'></div></a>
      </div>
    );
  }
  
  export default Navbar;