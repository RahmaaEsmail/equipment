// import React from "react";
// import { PRODUCT_DATA } from "../../../utils/productData";
// import Card from "../../Card/Card";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules"; // for Swiper v9+
// import "swiper/css";
// import {motion} from 'framer-motion';

// const variants = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 },
// }

// export default function HomeProducts() {
//   return (
//     <motion.div
//     initial={{opacity:0 , y:100}}
//     whileInView={{opacity:1 , y:0}}
//     transition={{duration:0.8 , ease:"easeOut"}}
//     className="my-7 bg-white p-4 rounded-lg">
//       <div className="w-fit mx-auto text-center mt-10 flex flex-col gap-2">
//       <p className="text-(--main-color) font-semibold text-lg">اكتشف أفضل اختياراتنا</p>
//       <h3 className="text-left font-semibold text-4xl text-black">
//         Featured Products
//       </h3>
//       </div>
//       <div className="grid grid-cols-4 !min-w-[1000px] overflow-hidden gap-3 snap-x snap-mandatory">
//             {PRODUCT_DATA?.map(item => <Card item={item} />)}
//             </div>
//       {/* <Swiper
//         className="!my-10"
//         slidesPerView={4}
//         spaceBetween={30}
//       >
//         {PRODUCT_DATA?.map((item) => (
//           // <SwiperSlide key={item?.id}>
//           <div className="grid grid-cols-4 gap-3 overflow-x-auto scroll-snap-type-x mandatory">
//             <Card item={item} />
//             </div>
//           // </SwiperSlide>
//         ))}
//       </Swiper> */}
//     </motion.div>
//   );
// }

import React from "react";
import { PRODUCT_DATA } from "../../../utils/productData";
import Card from "../../Card/Card";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export default function TopSeller() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-7 bg-white p-4 rounded-lg"
    >
      <div className="title w-fit !mx-auto text-center mt-10 flex flex-col gap-2">
        <p className="text-(--main-color) font-semibold text-lg">
          اكتشف أفضل اختياراتنا
        </p>
        <h3 className="text-center font-semibold text-4xl text-black">
          الأكثر مبيعا
        </h3>
      </div>

      <div className="relative py-9 w-full overflow-x-auto scroll-snap-type-x mandatory">
        <Swiper
          slidesPerView={4}
          spaceBetween={8}
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
          <div className="flex gap-3">
            {PRODUCT_DATA?.map((item) => (
              <SwiperSlide
                key={item.id}
                className="flex-none w-[282px] scroll-snap-align-start"
              >
                <Card item={item} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </motion.div>
  );
}
