import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // for Swiper v9+
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const BRANDS = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949978/philips_rebw35.jpg",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949978/black-decker_wki8gy.jpg",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949978/kenwood_jkt9k3.jpg",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949978/okka_dhfbok.jpg",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949978/campingaz_tcspbz.jpg",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949989/rushbrush_ktp1rj.jpg",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949995/braun_usik3b.jpg",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949995/bosch_f2on1y.jpg",
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949996/delongi_t7ufal.jpg",
  },
];

export default function HomeBrands() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-5 px-8"
    >
      <h3 className="sec_title text-center font-semibold  text-4xl text-black">
        العلامات التجارية المميزة
      </h3>

      <div className="relative w-full">
        {/* <div className="absolute bg-[rgba(125,125,125,0.6)] text-white w-[40px] h-[40px] rounded-full flex justify-center items-center top-[80px] left-[-20px] z-10 -translate-y-1/2 cursor-pointer swiper-button-prev-custom">
          <FaChevronLeft size={20} />
        </div>
        <div className="absolute top-[80px] bg-[rgba(125,125,125,0.6)] text-white right-[-20px] z-10 w-[40px] h-[40px] rounded-full flex justify-center items-center -translate-y-1/2 cursor-pointer swiper-button-next-custom">
          <FaChevronRight size={20} className="font-thin" />
        </div> */}

        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          autoplay={{ delay: 1000, stopOnLastSlide: false }}
          loop={true}
          className="my-4"
          slidesPerView={6}
          spaceBetween={30}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
        >
          {BRANDS?.map((item) => (
            <SwiperSlide key={item?.id}>
              <div className="shadow-md p-4 rounded-md bg-white">
                <img src={item?.img} className="object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
