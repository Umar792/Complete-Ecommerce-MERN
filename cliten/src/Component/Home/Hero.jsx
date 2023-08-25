import React from "react";
import "./Hero.css";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left_hero_slide">
        <img
          src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      {/* ========== */}
      <Carousel className="carousal h-[300px] border-2 w-[100%] m-auto">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://couponspot.de/siteresources/images/TopSlider/1691171030073094300.PNG"
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
            src="https://couponspot.de/siteresources/images/TopSlider/1627338390024007600.jpg"
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
          src="https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
