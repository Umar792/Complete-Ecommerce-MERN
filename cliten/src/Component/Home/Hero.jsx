import React from "react";
import "./Hero.css";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left_hero_slide">
        <img
          src="https://s.alicdn.com/@sc04/kf/H235848edc42a4d26ac88fa0becde6025s.jpg_720x720q50.jpg"
          alt=""
        />
      </div>
      {/* ========== */}
      <Carousel className="carousal h-[300px] border-2 w-[100%] m-auto">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ae01.alicdn.com/kf/H99948d81ab0f496292325b1f6046f11fJ.jpg_Q90.jpg_.webp"
            alt="First slide"
            style={{ height: "100%" }}
          />
          <Carousel.Caption>
            <button className="slider-btn">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://m.media-amazon.com/images/I/610MEKlP11L._SX3000_.jpg"
            alt="Second slide"
            style={{ height: "100%" }}
          />

          <Carousel.Caption>
            <button className="slider-btn">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://couponspot.de/siteresources/images/TopSlider/1687197282060892000.jpg"
            alt="Third slide"
            style={{ height: "100%" }}
          />

          <Carousel.Caption>
            <button className="slider-btn">SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* ========= */}
      <div className="right_hero_slide">
        <img
          src="https://s.alicdn.com/@img/imgextra/i2/O1CN01jIKbru1OnXz7TYprK_!!6000000001750-0-tps-460-698.jpg_720x720.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
