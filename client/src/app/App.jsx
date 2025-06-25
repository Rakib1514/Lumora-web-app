import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { Outlet } from "react-router";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId); 
    };
  }, []);

  return (
    <div className="bg-body">
      <Outlet />
    </div>
  );
};

export default App;
