import { p, path } from "motion/react-client";
import SimpleParallax from "simple-parallax-js";

const MaterialCategories = () => {
  const categoryOptions = [
    {
      title: "DIAMOND",
      description: "Fine-cut jewelry for special",
      imageUrl:
        "https://cdn.prosystem.com.bd/images/AMISHEE/322549628_471679048485100_4994536812733070206_n9815c484-8a39-46fe-b222-64437ab6d2ba.jpeg",
      buttonText: "DISCOVER",
      path: "/diamond",
      backgroundColor: "#1D2130",
    },
    {
      title: "POLKI",
      description: "Exclusive brand of gold and uncut diamonds",
      imageUrl:
        "https://cdn.prosystem.com.bd/images/AMISHEE/280670390_1023093098320218_8746185853728633496_na116c1f3-f973-4331-97c7-f5f5d02641f0.jpg",
      buttonText: "DISCOVER",
      path: "/polki",
      backgroundColor: "#D18C80",
    },
    {
      title: "GOLD",
      description: "Jewelry that deserve compliments",
      imageUrl:
        "https://cdn.prosystem.com.bd/images/AMISHEE/393936018_374178238271491_8109726425382206088_n93279d20-6804-45a9-9293-ab33dbd03eed.jpg",
      buttonText: "DISCOVER",
      path: "/gold",
      backgroundColor: "#3C151E",
    }
  ];

  return (
    <div className="h-[300vh]">

      {
        categoryOptions.map((category, idx) => (
          <div
            key={idx}
            className=" grid md:grid-cols-2 grid-cols-1 h-screen"
            style={{ backgroundColor: category.backgroundColor }}
          >
            <div className={` flex flex-col justify-center items-center text-center text-white uppercase ${idx % 2 !== 0 ? "md:order-2": "md:order-1"}`}>
              <p className="text-3xl">{category.title}</p>
              <p>{category.description}</p>
              <button className="uppercase px-4 py-2 border-2 border-primary">
                {category.buttonText}
              </button>
            </div>
            <div className={` overflow-hidden relative ${idx % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
              <SimpleParallax scale={1.2}>
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </SimpleParallax>
            </div>
          </div>
        ))
      }
      

    </div>
  );
};

export default MaterialCategories;
