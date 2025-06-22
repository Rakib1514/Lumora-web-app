import { Carousel } from "antd";
import "antd/dist/reset.css";
import { motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const Banner = ({ scrollY }) => {
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const [vh, setVh] = useState(0);
  
  useEffect(() => {
    const updateVh = () => setVh(window.innerHeight);
    updateVh();
    window.addEventListener("resize", updateVh);
    return () => window.removeEventListener("resize", updateVh);
  }, []);

  const overlayOpacity = useTransform(scrollY, [0, vh], [0.2, 0.8]);

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

  const carouselData = [
    {
      heading: "Embrace splendor of this festive season",
      subHeading: "Celebrate special moments with radiant treasures",
      img: "https://cdn.prosystem.com.bd/images/AMISHEE/A-16-10-24_-2783-copy-c72d01b24-6502-4b18-bf42-4678fd8451bc.jpg",
      path: "/",
    },
    {
      heading: "Let each piece tell a story",
      subHeading: "Experience the allure of its grandeur",
      img: "https://cdn.prosystem.com.bd/images/AMISHEE/A-16-10-24_-1288-copy-c72dbf3ca-32a0-40a9-a6c8-f11bb89bd1d9.jpg",
      path: "/",
    },
  ];

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
      <Carousel {...settings}>
        {carouselData.map((carousel) => (
          <motion.div
            key={carousel.img}
            initial={{ scale: 1 }}
            animate={{
              scale: 1,
              transition: { duration: 3, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 3, ease: "easeInOut" },
            }}
            className="relative h-screen flex items-center justify-center"
          >
            <img
              src={carousel.img}
              alt="slide"
              className="object-cover h-full w-full object-center"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <h2 className="text-4xl">{carousel.heading}</h2>
              <p className="text-xl ">{carousel.subHeading}</p>
              <button className=" py-2 px-4 border-2 border-primary">Explore</button>
            </div>

            {/* overlay layer */}
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="pointer-events-none absolute inset-0 bg-black"
            />
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
