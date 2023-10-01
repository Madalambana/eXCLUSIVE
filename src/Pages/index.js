import React from 'react';
import Copyright from '../components/copy';
import Navbar from '../components/navbar';
import '../Stylesheets/indx.css';
// import Clear from './clear';

const Index = () => {

    return (
      <div>
        <div className='banner'><strong>eXCLUSIVE</strong></div>

        <Navbar/>
        <Copyright/>
      </div>
    );
  }
  
  export default Index;