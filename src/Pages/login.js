import React from 'react';
import Copyright from '../components/copy';
import Navbar from '../components/navbar';
import '../Stylesheets/logn.css';
import Clear from '../components/clear';


const Login = () => {
    return (
        <div>
              <Navbar/>
              <body>
                <div className='img1'></div>
                <div className='login'>
                    <div className='header'>
                    <p>
                        Login
                    </p>
                    </div>
                <form method="post" >
                    <div className='title'>
                    <p>Don't have an account? <a className="a" href='#'>Create a free account</a>
                    </p>
                    </div>
                   
                    <label for="email">Email:</label>
                    <input type='text' name='#' id='#'></input>             
                    <label for="passwrd">Password   :</label>
                    <input type='text' name='#' id='#'></input>  
                
                    <p className="title2">
                        <a className="a" href='#'>Forgot password?</a>
                    </p>
                    
                    <button type="submit">Login</button>     
                </form>

                </div>
              </body>
              <Clear/>
        <Copyright/>
        </div>
      
    );
}

export default Login;