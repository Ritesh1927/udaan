import React from "react";
import "./Home.css";
import Basuri from "../assets/Basuri2.png";
import Cards from "../component/cards/Cards";
const Home = () => {
  return (
    <>
      <section className="container">
        <div className="">
          <div className="welcome-heading inline mt15 ">
            <p className="welcome-tag">
              Welcome to <span className="udaan-name">UDAAN</span>
            </p>
          </div>

          {/* /////cards/////////// */}
          <div>
            <div className="start-child-cont">
              <Cards
                // img={card1img}
                step="01"
                head="CREATE AN  ACCOUNT"
                content="In order to get started with EarnwithClick, at first all you need is Shera links Account & you can create it by sign-up option."
                className="step-1-card"
                buttonclass="step-1-button"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
