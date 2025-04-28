import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.css";

const BANNERS = [
  {
    id: 1,
    image:
      "https://www.aldiwankitchen.com/wp-content/uploads/2024/10/Banner-Desktop-1.webp",
  },
  {
    id: 2,
    image:
      "https://www.aldiwankitchen.com/wp-content/uploads/2024/10/DESKTOP-2-v1.webp",
  },
];

export default function HomeBanner() {
  return (
    <div className="w-full h-full mt-10 relative">
      {/* Custom Arrows (Optional) */}
      {/* <div className="absolute bg-[rgba(255,255,255,0.5)] text-black w-[40px] h-[40px] rounded-full flex justify-center items-center top-1/2 left-4 z-10 -translate-y-1/2 cursor-pointer swiper-button-prev-custom">
        <FaChevronLeft size={20} />
      </div>
      <div className="absolute top-1/2 bg-[rgba(255,255,255,0.5)] text-black right-4 z-10 w-[40px] h-[40px] rounded-full flex justify-center items-center -translate-y-1/2 cursor-pointer swiper-button-next-custom">
        <FaChevronRight size={20} />
      </div> */}

      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        // navigation={{
        //   nextEl: ".swiper-button-next-custom",
        //   prevEl: ".swiper-button-prev-custom",
        // }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {BANNERS.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              className="banner_img h-full w-full object-cover rounded-md"
              src={item.image}
              alt={`Banner ${item.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
