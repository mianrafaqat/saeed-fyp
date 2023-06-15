import React from "react";
import "./SpotLight.css";
import spot1 from "../../assets/spot1.png";
import spot2 from "../../assets/spot2.png";
import spot3 from "../../assets/spot3.png";

const SpotLight = () => {
  return (
    <div className="spotloght container">
      <h1 className="spotHeading">Property Spotlight</h1>
      <div className="spotContent">
        <div className="spotContentStyle">
          <img src={spot1} alt="spot" />
          <p className="para">Featured: Brandon, MS</p>
          <p className="para">3 Bd / 2 Bath / 1,800 Sq Ft</p>
          <p className="para">Built in 2007 w/ 2-car garage</p>
          <p className="para">LIVE COURTHOUSE AUCTION</p>
          <p className="para">Auction Date: Wed, June 28</p>
          <p className="para">CLICK HERE FOR DETAILS!</p>
        </div>
        <div className="spotContentStyle">
          <img src={spot2} alt="spot" />
          <p className="para">Featured: Mesa, AZ</p>
          <p className="para">4 Bd / 3 Bath / 2,566 Sq Ft</p>
          <p className="para">Newer build on a large lot</p>
          <p className="para">LIVE COURTHOUSE AUCTION</p>
          <p className="para">Auction Date: Fri, June 30</p>
          <p className="para">CLICK HERE FOR DETAILS!</p>
        </div>
        <div className="spotContentStyle">
          <img src={spot3} alt="spot" />
          <p className="para">Featured: Grand Prairie, TX</p>
          <p className="para">Great location and potential!</p>
          <p className="para">Built in 2007 w/ 2-car garage</p>
          <p className="para">LIVE COURTHOUSE AUCTION</p>
          <p className="para">Auction Date: Wed, July 5</p>
          <p className="para">CLICK HERE FOR DETAILS!</p>
        </div>
      </div>
    </div>
  );
};

export default SpotLight;
