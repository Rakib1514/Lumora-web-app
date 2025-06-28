import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import useCategories from "../../hooks/useCategories";

const Collections = () => {
  const params = useParams();

  const { categories } = useCategories();

  const { data=[], isLoading } = useQuery({
    queryKey: ["collection", params.id],
    queryFn: async () => {
      const res = await axios.get(`/items?category=${params.id}`);
      return res.data.collections;
    },
  });

  const collections = [...data, ...data,...data, ...data,...data, ...data, ]

  if(isLoading){
    <span>Loading in collection</span>
  }

  return (
    <div>
      <div className="md:h-[60vh] relative w-full">
        <img
          src="https://i.ibb.co/3DTDcJm/ds.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Categories section */}
      <div className="">
        <div className="text-center py-4 px-2">
          <h2 className="md:text-2xl text-xl font-bold uppercase">
            Forever Jewels
          </h2>
          <p>
            Bring every moment full of luxury with Lumora's fine gold and
            diamond jewelry.
          </p>
        </div>

        {/* Categories  */}

        <div className="px-4">
          <Swiper
            breakpoints={{
              0: { slidesPerView: 2.4 },
              768: { slidesPerView: 4.4 },
              1024: { slidesPerView: 5 },
            }}
            spaceBetween={15}
            centeredSlides={false}
            className="lg:max-w-7xl "
          >
            <SwiperSlide className="bg-white shadow-lg rounded-lg">
              <div className="lg:h-32 h-26 flex justify-center items-center">
                <span className="font-semibold text-lg ">ALL</span>
              </div>
            </SwiperSlide>

            {categories?.map((category) => (
              <SwiperSlide key={category._id}>
                <img
                  src={category.image}
                  alt=""
                  className="lg:h-32 h-26 w-full object-cover rounded-lg shadow-lg"
                />
                <p className="py-2 text-center capitalize">{category.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div >
        <div className="flex gap-4 items-center my-8">
          <div className="p-4 border">Filter</div>
          <div>
            <span className="font-bold">{params.category}</span>
            <span> {collections?.length} Available</span>
          </div>
        </div>

        {/* Collection display with grid */}

        <div className="grid grid-cols-4 gap-4">
          {collections.map((item) => (
            <div key={item?._id} className="group hover:cursor-pointer">
              <div className="h-72 w-full overflow-hidden">
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
            </div>
          ))}
        </div>
      </div>

      <div className="h-[400vh]"></div>
    </div>
  );
};

export default Collections;
