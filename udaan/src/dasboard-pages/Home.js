import React from "react";
import "./Home.css";
import Basuri from "../assets/Basuri2.png";
const Home = () => {
  return (
    <>
      <section className="container">
        <div className="">
          {/* <div className="basuri-img-container">
            <img className="basuri" src={Basuri} alt="" />
          </div> */}

          <div className="welcome-heading inline mt15 ">
            <p className="welcome-tag">
              Welcome to <span className="udaan-name">UDAAN</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
