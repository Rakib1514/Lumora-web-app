import { Carousel } from "antd";
import "antd/dist/reset.css";
import { motion, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
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

  const overlayOpacity = useTransform(scrollY, [0, vh], [0, 0.8]);

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
      <Carousel {...settings}>
        {[
          "https://cdn.prosystem.com.bd/images/AMISHEE/A-16-10-24_-2783-copy-c72d01b24-6502-4b18-bf42-4678fd8451bc.jpg",
          "https://cdn.prosystem.com.bd/images/AMISHEE/A-16-10-24_-1288-copy-c72dbf3ca-32a0-40a9-a6c8-f11bb89bd1d9.jpg",
        ].map((src) => (
          <motion.div
            key={src}
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
              src={src}
              alt="slide"
              className="object-cover h-full w-full object-center"
            />

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
