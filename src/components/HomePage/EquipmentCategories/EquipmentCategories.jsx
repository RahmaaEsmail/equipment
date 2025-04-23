import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"



const CATEGORIES = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745409956/13_ehpmz7_uyej8t.webp",
    icon :"https://www.aldiwankitchen.com/wp-content/uploads/2024/03/Untitled-design-4.webp",
    title: "الأفران",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744036236/8_gjo0bf.png",
    icon:"https://www.aldiwankitchen.com/wp-content/uploads/2024/03/Untitled-design-2-1.web",
    title: "الشوايات",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744036209/6_d6rnd7.png",
    title: "الخلاطات",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744036114/1_urgssz.png",
    title: "الثلاجات",
    icon:"https://www.aldiwankitchen.com/wp-content/uploads/2024/03/Untitled-design-3-1.webp"
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744036162/16_byy96p.png",
    title: "الأفران",
    icon:"https://www.aldiwankitchen.com/wp-content/uploads/2024/03/Group-1620.webp"
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744036168/10_e7dr7m.png",
    title: "الشوايات",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744036142/4_xtykow.png",
    title: "الخلاطات",
  },
];

export default function EquipmentCategories() {
  return (
    <motion.div
    initial={{y:200, opacity:0}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.8,ease:"easeOut"}}
    className="my-11">
     <div className="flex justify-between items-center">
     <h3 className=" font-semibold !text-2xl mb-5">الفئة حسب المعدات</h3>
     <a href="" className="font-semibold text-md text-(--main-color)">إظهار المزيد</a>
     </div>
      <Swiper spaceBetween={50} slidesPerView={6}>
        {CATEGORIES?.map((item) => (
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
