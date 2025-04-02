import React, { Fragment } from "react";
import "../cards/Cards.css";

const Cards = () => {
  return (
    <Fragment>
      <div className="card-main-container">
        <div className="card">
          <div className="inline">
            <i>icons</i>
            <p>01</p>
          </div>
          <h4>Discover your abilities and skills</h4>
          <p>
            Use scientific diagnostic tools to recognise your abilities and
            interests.
          </p>
        </div>
        <div class="diamond-container">
          <div class="diamond"></div>
        </div>
        {/* <div className="small-tilt-box dimaond-shape">
          <i></i>
        </div> */}
      </div>
    </Fragment>
  );
};

export default Cards;
