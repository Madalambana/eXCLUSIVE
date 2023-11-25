import React from 'react';
import { Link } from 'react-router-dom';
import Copyright from "../components/copy";
import Navbar from "../components/navbar";


const NoPage = (props) =>  {
  return (
    <div >
      <Navbar/>
     <h1> Error 404: Not found</h1>
     <br/>
     <br/>
     <br/>
     <p><Link to='/'>Home</Link></p>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>     
     <br/>
     <br/>
     <Copyright/>
    </div>
  );
}

export default NoPage;