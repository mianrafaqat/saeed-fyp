import React from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";

const Slider = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <div>
            <h2>Zameen Projects</h2>
          </div>
          <div>
            <p>View all ></p>
          </div>
        </div>
      </div>
      <div className="LocSlider">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="zSlides">
              <img src={slide1} alt="slide" />
              <h3>PKR 1.96 Crore to 2.76 Crore</h3>
              <h3>Zameen Opal, Lahore</h3>
              <p>Lahore, Land Breeze Housing Society</p>
              <h4>Flats</h4>
              <h4>885 sqft to 1248 sqft</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zSlides">
              <img src={slide2} alt="slide" />
              <h3>PKR 1.96 Crore to 2.76 Crore</h3>
              <h3>Zameen Opal, Lahore</h3>
              <p>Lahore, Land Breeze Housing Society</p>
              <h4>Flats</h4>
              <h4>885 sqft to 1248 sqft</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zSlides">
              <img src={slide3} alt="slide" />
              <h3>PKR 1.96 Crore to 2.76 Crore</h3>
              <h3>Zameen Opal, Lahore</h3>
              <p>Lahore, Land Breeze Housing Society</p>
              <h4>Flats</h4>
              <h4>885 sqft to 1248 sqft</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="zSlides">
              <img src={slide1} alt="slide" />
              <h3>PKR 1.96 Crore to 2.76 Crore</h3>
              <h3>Zameen Opal, Lahore</h3>
              <p>Lahore, Land Breeze Housing Society</p>
              <h4>Flats</h4>
              <h4>885 sqft to 1248 sqft</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
