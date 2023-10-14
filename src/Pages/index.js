import React from "react";
import Copyright from "../components/copy";
import Navbar from "../components/navbar";
import styles from "../Stylesheets/indx.module.css";
import Clear from "../components/clear";

const Index = () => {
  return (
    <div>
      <div className={styles.banner}>
        <strong>eXCLUSIVE</strong>
      </div>
      <Navbar />
      <body>
        {/* info box1 */}
        <div className={styles.infoBox1}>
          <div className={styles.img1}></div>
          <div className={styles.sec1}>
            <div className={styles.header1}>
              <p>mzansi tings </p>
            </div>
            <div className={styles.info}>
              <p>
                Quis velit non incididunt aliqua laborum cupidatat ex
                reprehenderit. Occaecat ad adipisicing nostrud ea nulla occaecat
                ut. Irure aliqua proident nisi laborum elit sit tempor ad
                officia consectetur est proident pariatur veniam Quis velit non
                incididunt aliqua laborum cupidatat ex reprehenderit. Occaecat
                ad adipisicing nostrud ea nulla occaecat ut. Irure aliqua
                proident nisi laborum elit sit tempor ad officia consectetur est
                proident pariatur veniam.
              </p>
            </div>

            <div></div>
          </div>
        </div>

        <div className={styles.img2}></div>

        {/* info box2 */}
        <div className={styles.infoBox2}>
          <div className={styles.header2}>Popular and trusted names</div>
          <div className={styles.topSec1}>
            <div className={styles.q1}>
              <p>
                Aliquip consectetur magna in culpa. Lorem dolor aliqua culpa
                Lorem nulla. Veniam dolore cillum pariatur sint labore ut est ut
                ut cillum mollit. Dolore minim culpa officia nulla aliqua dolore
                consectetur adipisicing ex adipisicing minim nostrud.
              </p>
              <div className={styles.brndimg1}></div>
            </div>

            <div className={styles.q2}>
              <p>
                Aliquip consectetur magna in culpa. Lorem dolor aliqua culpa
                Lorem nulla. Veniam dolore cillum pariatur sint labore ut est ut
                ut cillum mollit. Dolore minim culpa officia nulla aliqua dolore
                consectetur adipisicing ex adipisicing minim nostrud.
              </p>
              <div className={styles.brndimg2}></div>
            </div>
          </div>

          <Clear />

          <div className={styles.topSec2}>
            <div className={styles.q3}>
              <div className={styles.brndimg3}></div>
              <p>
                Aliquip consectetur magna in culpa. Lorem dolor aliqua culpa
                Lorem nulla. Veniam dolore cillum pariatur sint labore ut est ut
                ut cillum mollit. Dolore minim culpa officia nulla aliqua dolore
                consectetur adipisicing ex adipisicing minim nostrud.
              </p>
            </div>

            <div className={styles.q4}>
              <p>
                Aliquip consectetur magna in culpa. Lorem dolor aliqua culpa
                Lorem nulla. Veniam dolore cillum pariatur sint labore ut est ut
                ut cillum mollit. Dolore minim culpa officia nulla aliqua dolore
                consectetur adipisicing ex adipisicing minim nostrud.
              </p>
              <div className={styles.brndimg4}></div>
            </div>
          </div>
          <Clear />
          <button className={styles.buttonidx}>
            <p>And more...</p>
          </button>
        </div>

        {/* info box3 */}
        <div className={styles.infoBox3}>
          <div className={styles.img3}></div>

          <div className={styles.sec2}>
            <div className={styles.header3}>
              <p> Indvidual and reliable</p>
            </div>
            <div className={styles.para}>
              <p>
                Sunt nisi amet adipisicing aliqua qui anim mollit adipisicing
                duis qui consequat irure commodo. Nisi quis id id irure velit do
                laboris. Aliqua ullamco excepteur aute proident. Do nostrud
                eiusmod eu pariatur magna voluptate. Officia anim ea proident
                labore non amet culpa nostrud eiusmod
                <br></br>
                <br></br>
                commodo ea enim voluptate eiusmod. Nostrud in sunt nostrud
                laborum irure cillum cillum labore mollit minim cupidatat do
                Lorem culpa.
              </p>
            </div>
          </div>
        </div>
      </body>
      <Copyright />
    </div>
  );
};

export default Index;
