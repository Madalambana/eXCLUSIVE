import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SignUp = (props) => {
  return (
    
    <div>
        <Navbar></Navbar>
<div className="backColour4">
<p className="head4">
                Sign up
                </p>
                <p className="title4">
                  Full Name
                </p>
                  <input className="input2" type="text" name='fName'></input>
                <p className="title4">
                  Email
                </p>
                <input  className="input2" type="text" name='email'></input>
                <p className="title4">
                  Password
                </p>
                  <input className="input2" type="text" name='password'></input>
                <p className="title4">
                Confirm password
                </p>
                <input  className="input2" type="text" name='password'></input>
                
                <p className="btn3">
                <a className="a3" href='#'>Sign up</a>
                </p>
                
</div>
    <Footer></Footer>
    </div>
    
  )
}

export default SignUp