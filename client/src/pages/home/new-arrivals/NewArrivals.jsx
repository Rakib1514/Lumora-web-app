import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const NewArrivals = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="text-center py-8 px-2">
        <h2 className="text-3xl font-bold uppercase">New Arrivals</h2>
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
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="w-full md:h-[300px] h-[300px] lg:h-[70vh]"
        >
          <SwiperSlide className="border border-red-600 ">Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
