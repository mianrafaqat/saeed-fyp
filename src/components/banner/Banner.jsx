import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="content">
          <div className="text">
            <h2 className="banner-h">Sign up for email and text alerts</h2>
            <p className="banner-p">
              Find out when properties that match your criteria become
              available. No spam, we promise.
            </p>
          </div>

          <div className="button">
            <button className="banner-btn">Sign up!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
