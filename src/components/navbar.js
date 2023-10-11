import React from 'react';
import '../Stylesheets/navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
      <div className="navBar">
        <h2><Link to="/">eXCLUSIVE</Link></h2>
     <nav >
        <ul>
            <li><Link to="/phones">Smartphones</Link></li>
            <li><Link to="#">OS</Link></li>
            <li><Link to="/support">Support</Link></li>
        </ul>
    </nav>
   <Link to='/login'><div className='SignIn'></div></Link>
      </div>
    );
  }
  
  export default Navbar;