import React from "react";
import "./AI.css";
import icon1 from "../../assets/home.png";

const AI = () => {
  return (
    <div className="ai container">
      <h2 className="ai-h">Why AI Based Property Biding System?</h2>
      <div className="ai-content">
        <div className="ai-data">
          <img src={icon1} alt="icn" />
          <h2 className="aiData-h">Auctions Made Easy</h2>
          <p className="ai-para">
            Our state-of-the-art online bidding technology makes real estate
            transactions less cumbersome and more cost-effective for all
            parties.
          </p>
        </div>
        <div className="ai-data">
          <img src={icon1} alt="icn" />
          <h2 className="aiData-h">Auctions Made Easy</h2>
          <p className="ai-para">
            Our state-of-the-art online bidding technology makes real estate
            transactions less cumbersome and more cost-effective for all
            parties.
          </p>
        </div>
        <div className="ai-data">
          <img src={icon1} alt="icn" />
          <h2 className="aiData-h">Auctions Made Easy</h2>
          <p className="ai-para">
            Our state-of-the-art online bidding technology makes real estate
            transactions less cumbersome and more cost-effective for all
            parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AI;
