import React from 'react';
import Copyright from '../components/copy';
import Navbar from '../components/navbar';
import '../Stylesheets/indx.css';
import Clear from '../components/clear';

const Index = () => {

    return (
      <div>
        <div className='banner'><strong>eXCLUSIVE</strong></div>
        <Navbar/>
        <body>

          {/* info box1 */}
          <div className='info-box1'>
            <div className='img1'></div>
            <div className='sec1'>
             <div className='header1'>
                <p>mzansi tings </p>
              </div>
              <div className='info'>
              <p>Quis velit non incididunt aliqua laborum cupidatat ex reprehenderit. Occaecat ad adipisicing nostrud ea nulla occaecat ut. Irure aliqua proident nisi laborum elit sit tempor ad officia consectetur est proident pariatur veniam
              Quis velit non incididunt aliqua laborum cupidatat ex reprehenderit. Occaecat ad adipisicing nostrud ea nulla occaecat ut. Irure aliqua proident nisi laborum elit sit tempor ad officia consectetur est proident pariatur veniam
                .</p>
              </div>
            
            <div>              
              </div>
            </div>
          </div>
   

          {/* info box2 */}
          <div className='info-box1'>
            <div className='#'></div>

          </div>

          {/* info box3 */}
          <div className='info-box1'>
            <div className='#'></div>

          </div>

        </body>
        <Copyright/>
      </div>
    );
  }
  
  export default Index;