import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Banner from "./banner/Banner";
import NewArrivals from "./new-arrivals/NewArrivals";

const Home = () => {
  const { scrollY } = useScroll();

  const [vh, setVh] = useState(0);

  useEffect(() => {
    setVh(window.innerHeight);
    window.addEventListener("resize", () => setVh(window.innerHeight));
    return () =>
      window.removeEventListener("resize", () => setVh(window.innerHeight));
  }, []);

  const driftY = useTransform(scrollY, [0, vh], [0, -vh * 0.2]);

  return (
    <div>
      <div className="sticky -top-16 w-full h-screen overflow-hidden z-10">
        <motion.div style={{ y: driftY }} className="h-full w-full">
          <Banner scrollY={scrollY} />
        </motion.div>
      </div>

      <div className="min-h-[200vh] bg-white w-full relative z-20">
        <NewArrivals />
      </div>
    </div>
  );
};

export default Home;
