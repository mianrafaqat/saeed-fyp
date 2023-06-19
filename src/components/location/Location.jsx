import React from "react";
import "./Location.scss";
import { islambad, karachi, lahore } from "../../constant/dummy";

const Location = () => {
  return (
    <>
      <div className="Locationbanner">
        <h1>Popular Location</h1>
      </div>

      <div className="container Loccontent">
        <div className="headings">
          <h2>For Sale</h2>
          <h2>To Buy</h2>
        </div>
        <p>Most Popular Locations for Plots</p>

        <div className="locationDetails">
          <div className="lahore">
            {lahore.map((item) => (
              <div key={item.title}>
                <h3> {item.title} </h3>
                <div>
                  <div className="locationContent">
                    {item.locations.map((loctaion) => (
                      <div className="locationContentDetail">
                        <div className="locationTitle">
                          <img src={loctaion.img} alt="arrow" />
                          <p> {loctaion.title} </p>
                        </div>
                        <div className="locationNo">
                          {" "}
                          <p>{loctaion.srNo}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lahore">
            {karachi.map((item) => (
              <div key={item.title}>
                <h3> {item.title} </h3>
                <div>
                  <div className="locationContent">
                    {item.locations.map((loctaion) => (
                      <div className="locationContentDetail">
                        <div className="locationTitle">
                          <img src={loctaion.img} alt="arrow" />
                          <p> {loctaion.title} </p>
                        </div>
                        <div className="locationNo">
                          {" "}
                          <p>{loctaion.srNo}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lahore">
            {islambad.map((item) => (
              <div key={item.title}>
                <h3> {item.title} </h3>
                <div>
                  <div className="locationContent">
                    {item.locations.map((loctaion) => (
                      <div className="locationContentDetail">
                        <div className="locationTitle">
                          <img src={loctaion.img} alt="arrow" />
                          <p> {loctaion.title} </p>
                        </div>
                        <div className="locationNo">
                          {" "}
                          <p>{loctaion.srNo}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
