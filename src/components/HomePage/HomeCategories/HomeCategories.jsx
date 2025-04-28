import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Navigation } from "swiper/modules";

export const BRANDS = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949995/braun_usik3b.jpg",
    title: "Braun",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949978/kenwood_jkt9k3.jpg",
    title: "Kenwood",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949995/bosch_f2on1y.jpg",
    title: "Bosch",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743950002/mienta_dacab2.jpg",
    title: "Mienta",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949997/pyrex_1_ng6x2e.jpg",
    title: "Pyrex",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949989/rushbrush_ktp1rj.jpg",
    title: "Rush Brush",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1743949978/campingaz_tcspbz.jpg",
    title: "Campingaz",
  },
];

export default function HomeCategories() {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-11"
    >
      <div className="title flex justify-between items-center">
        <h3 className=" font-semibold text-2xl mb-5">المعدات حسب الماركة</h3>
        <a className="text-(--main-color) font-semibold text-md">
          إظهار المزيد
        </a>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        autoplay={{ delay: 2000, stopOnLastSlide: false }}
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
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-[150px]  h-[150px] rounded-full"
                src={item?.image}
              />
              <p className="font-semibold mt-3 !text-lg text-center">
                {item?.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
