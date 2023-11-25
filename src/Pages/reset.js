import React from 'react';
import Copyright from "../components/copy";
import Navbar from "../components/navbar";
import styles from "../Stylesheets/reset.module.css"


const Reset = (props) =>  {
  return (
    <div >
      <Navbar/>
     <div className={styles.back}> 
     <div className={styles.lock}></div>
     <div className={styles.rightR}>
        <label className={styles.headerR}> Password reset</label>
     <input className={styles.inputR} type='email' placeholder='Enter email'></input>
     <button className={styles.buttonR}>
      <p>
        Reset
      </p>
     </button>
     </div>
   
     </div>
     
     <Copyright/>
    </div>
  );
}

export default Reset;