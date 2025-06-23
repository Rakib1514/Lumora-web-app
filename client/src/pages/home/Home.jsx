import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Banner from "./banner/Banner";
import NewArrivals from "./new-arrivals/NewArrivals";
import MaterialCategories from "./material-categories/MaterialCategories";

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
    <>
      <div className="relative">
        <div className="sticky -top-16 w-full h-screen overflow-hidden z-10">
          <motion.div style={{ y: driftY }} className="h-full w-full">
            <Banner scrollY={scrollY} />
          </motion.div>
        </div>
        <div className="bg-body w-full relative z-20">
          <NewArrivals />
        </div>
      </div>
       <MaterialCategories/>
    </>
  );
};

export default Home;
