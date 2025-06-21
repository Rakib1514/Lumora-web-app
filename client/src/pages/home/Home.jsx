import Banner from "./banner/Banner";

const Home = () => {
  return (
    <div className="h-[400vh]">
      {/* 1. Sticky banner at z‑10 */}
      <div className="sticky top-0 w-full h-screen z-10">
        <Banner />
      </div>

      {/* 2. Scrolling section ABOVE it */}
      <div className="relative bg-purple-600 h-[200vh] z-20">
        {/* your content here */}
      </div>
    </div>

    // <>
    // <Banner />
    // <div className="h-[200vh]"></div>
    // </>
    
  );
};

export default Home;
