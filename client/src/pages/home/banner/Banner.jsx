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
        <div className="h-screen bg-amber-500 flex items-center justify-center">
          <h3 className="text-6xl text-white">1</h3>
        </div>
        <div className="h-screen bg-purple-500 flex items-center justify-center">
          <h3 className="text-6xl text-white">2</h3>
        </div>
        <div className="h-screen bg-blue-500 flex items-center justify-center">
          <h3 className="text-6xl text-white">3</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
