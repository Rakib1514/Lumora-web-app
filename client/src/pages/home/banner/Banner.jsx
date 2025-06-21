// Banner.jsx
import React, { useState } from "react";
import { Carousel } from "antd";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import "antd/dist/reset.css";  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  // control arrow visibility
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    arrows: true,
    prevArrow: <PrevArrow isVisible={showPrev} />,
    nextArrow: <NextArrow isVisible={showNext} />,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div
      className="relative h-screen"
      onMouseMove={(e) => {
        const { clientX, currentTarget } = e;
        const { left, width } = currentTarget.getBoundingClientRect();
        
        setShowPrev(clientX - left < width / 2);
        setShowNext(clientX - left > width / 2);
      }}
      onMouseLeave={() => {
        setShowPrev(false);
        setShowNext(false);
      }}
    >
      <Carousel {...settings} >
        <div className="h-screen flex items-center justify-center">
          <img src="https://cdn.prosystem.com.bd/images/AMISHEE/A-16-10-24_-2783-copy-c72d01b24-6502-4b18-bf42-4678fd8451bc.jpg" alt="" className="object-cover h-full w-full object-center"/>
        </div>
        <div className="h-screen flex items-center justify-center">
          <img src="https://cdn.prosystem.com.bd/images/AMISHEE/A-16-10-24_-1288-copy-c72dbf3ca-32a0-40a9-a6c8-f11bb89bd1d9.jpg" alt="" className="object-cover h-full w-full object-center"/>
        </div>
        
      </Carousel>
    </div>
  );
};

export default Banner;
