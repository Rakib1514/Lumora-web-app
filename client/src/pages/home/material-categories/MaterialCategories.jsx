import SimpleParallax from "simple-parallax-js";

const MaterialCategories = () => {
  return (
    <div className="h-[300vh]">
      {/* First */}

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="bg-[#1D2130] flex flex-col justify-center items-center text-white uppercase">
          <p className="text-3xl ">DIAMOND</p>
          <p>Fine-cut jewelry for special</p>
          <button className="uppercase px-4 py-2 border-2 border-primary">
            DISCOVER
          </button>
        </div>
        <div className="h-full w-full">
          <SimpleParallax scale={1.2}>
            <img
              src="https://cdn.prosystem.com.bd/images/AMISHEE/322549628_471679048485100_4994536812733070206_n9815c484-8a39-46fe-b222-64437ab6d2ba.jpeg"
              alt=""
              className="w-full h-screen object-cover "
            />
          </SimpleParallax>
        </div>
      </div>

      {/* second */}

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="h-full w-full">
          <SimpleParallax scale={1.2}>
            <img
              src="https://cdn.prosystem.com.bd/images/AMISHEE/280670390_1023093098320218_8746185853728633496_na116c1f3-f973-4331-97c7-f5f5d02641f0.jpg"
              alt=""
              className="w-full h-screen object-cover "
            />
          </SimpleParallax>
        </div>
        <div className="bg-[#D18C80] flex flex-col justify-center items-center text-white uppercase">
          <p className="text-3xl ">POLKI</p>
          <p>Exclusive brand of gold and uncut diamonds</p>
          <button className="uppercase px-4 py-2 border-2 border-primary">
            DISCOVER
          </button>
        </div>
      </div>

      {/* Third */}

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="bg-[#3C151E] flex flex-col justify-center items-center text-white uppercase">
          <p className="text-3xl ">GOLD</p>
          <p>jewelry that deserve compliments</p>
          <button className="uppercase px-4 py-2 border-2 border-primary">
            DISCOVER
          </button>
        </div>
        <div className="h-full w-full">
          <SimpleParallax scale={1.2}>
            <img
              src="https://cdn.prosystem.com.bd/images/AMISHEE/393936018_374178238271491_8109726425382206088_n93279d20-6804-45a9-9293-ab33dbd03eed.jpg"
              alt=""
              className="w-full h-screen object-cover "
            />
          </SimpleParallax>
        </div>
      </div>
    </div>
  );
};

export default MaterialCategories;
