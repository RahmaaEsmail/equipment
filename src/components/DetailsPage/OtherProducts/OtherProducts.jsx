import React from "react";
import { PRODUCT_DATA } from "../../../utils/productData";
import Card from "../../Card/Card";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";


export default function OtherProducts() {
    return (
        <motion.div className="related-pro"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <p className="text-(--main-color) text-2xl font-bold">منتجات اخرى قد تعجبك</p>
            <br />
            <Swiper
                slidesPerView={5}
                spaceBetween={5}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    480: { slidesPerView: 2, spaceBetween: 10 },
                    768: { slidesPerView: 3, spaceBetween: 10 },
                    1024: { slidesPerView: 5, spaceBetween: 5 },
                }}
            >
                {PRODUCT_DATA.map(item => (
                    <SwiperSlide key={item.id}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    )
}