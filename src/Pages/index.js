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
              Quis velit non incididunt aliqua laborum cupidatat ex reprehenderit. Occaecat ad adipisicing nostrud ea nulla occaecat ut. Irure aliqua proident nisi laborum elit sit tempor ad officia consectetur est proident pariatur veniam.
              </p>
              </div>
            
            <div>              
              </div>
            </div>
          </div>

          <div className='img2'></div>

          {/* info box2 */}
          <div className='info-box2'>
            <div className='header2'>
              Popular and trusted names
            </div>
            <div className='topSec1'>
             
              <div className='q1'>
              <p>
                Aliquip consectetur magna in culpa. Lorem dolor aliqua culpa Lorem nulla. Veniam dolore cillum pariatur sint labore ut est ut ut cillum mollit.
                Dolore minim culpa officia nulla aliqua dolore consectetur adipisicing ex adipisicing minim nostrud. Est irure officia velit elit anim proident veniam deserunt sint do ullamco deserunt minim do. Velit qui id tempor incididunt labore eiusmod anim nisi.
              </p>
              <div className='brndimg1'></div>
              </div>

              <div className='q2'>
              <p>
                Aliquip consectetur magna in culpa. Lorem dolor aliqua culpa Lorem nulla. Veniam dolore cillum pariatur sint labore ut est ut ut cillum mollit.
                Dolore minim culpa officia nulla aliqua dolore consectetur adipisicing ex adipisicing minim nostrud. Est irure officia velit elit anim proident veniam deserunt sint do ullamco deserunt minim do. Velit qui id tempor incididunt labore eiusmod anim nisi.
              </p>
              <div className='brndimg2'></div>
              </div>

            </div>

            <Clear/>
            
            <div className='topSec2'>
             
             <div className='q3'>
             <div className='brndimg3'></div>
             <p>
               Aliquip consectetur magna in culpa. Lorem dolor aliqua culpa Lorem nulla. Veniam dolore cillum pariatur sint labore ut est ut ut cillum mollit.
               Dolore minim culpa officia nulla aliqua dolore consectetur adipisicing ex adipisicing minim nostrud. Est irure officia velit elit anim proident veniam deserunt sint do ullamco deserunt minim do. Velit qui id tempor incididunt labore eiusmod anim nisi.
             </p>
            </div>

             <div className='q4'>
             <p>
               Aliquip consectetur magna in culpa. Lorem dolor aliqua culpa Lorem nulla. Veniam dolore cillum pariatur sint labore ut est ut ut cillum mollit.
               Dolore minim culpa officia nulla aliqua dolore consectetur adipisicing ex adipisicing minim nostrud. Est irure officia velit elit anim proident veniam deserunt sint do ullamco deserunt minim do. Velit qui id tempor incididunt labore eiusmod anim nisi.
             </p>
             <div className='brndimg2'></div>
             </div>

           </div>
           <Clear/>
           <button > 
            <p>And more...</p>
          </button>
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