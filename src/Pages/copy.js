import React from 'react';
import '../Stylesheets/copy.css';
import { Link } from 'react-router-dom';

const Copyright = () => {

    return (
      <div className='copyright'>
        <footer>
          <div className='cpy'>
          <p>Copyright &copy; 2023</p>
          </div>
         
          <div className='box1'>
          <ul><Link to=''>Privacy Policy</Link></ul>
          <ul><Link to=''>Disclaimer</Link></ul>
          </div>
        
          <div className='box2'>
          <ul><Link to=''>Terms and conditions</Link></ul>
          <ul><Link to=''>About Us</Link></ul>
          </div>
          

    
    </footer>
      </div>
    );
  }
  
  export default Copyright;