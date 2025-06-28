import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const NewArrivals = () => {
  const { data: newArrivalItem, isLoading } = useQuery({
    queryKey: ["new-arrivals"],
    queryFn: async () => {
      const res = await axios.get("/items");
      return res.data.collections;
    },
  });

  if(isLoading){
    return <span> Loading in new arrivals</span>
  }
  
  return (
    <div className="w-full md:min-h-screen pb-32">
      <div className="text-center py-16 px-2">
        <h2 className="md:text-2xl text-xl lg:text-3xl font-bold uppercase">
          New Arrivals
        </h2>
        <p>ADORN YOURSELF WITH LUMORA FINE JEWELRY</p>
      </div>

      {/* Slide with swiper */}
      <div className="px-2">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          pagination={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="w-full md:h-[300px] h-[300px] lg:h-[60vh] "
        >
          {newArrivalItem?.map((item) => (
            <SwiperSlide key={item?._id} className="group hover:cursor-pointer">
              <div className="h-[80%] w-full overflow-hidden">
                <img
                  src={item?.image[0]}
                  alt={item?.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 ease-in-out"
                />
              </div>
              <div className="text-center py-2 px-4">
                <h3 className="text-xl group-hover:text-primary transition-colors duration-300 ease-in-out">
                  {item?.title}
                </h3>
                <div>
                  <span className="capitalize text-gray-700">
                    {item.category?.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
