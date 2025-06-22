import Banner from "./banner/Banner";

const Home = () => {
  return (
    <div className="h-[400vh]">
      <div className="sticky top-0 w-full h-screen z-10">
        <Banner />
      </div>

      <div className="relative bg-purple-600 h-[200vh] z-20"></div>
    </div>
  );
};

export default Home;
