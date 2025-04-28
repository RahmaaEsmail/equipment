import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  FaArrowLeft,
  FaArrowLeftLong,
  FaArrowRightLong,
} from "react-icons/fa6";
import { PRODUCT_DATA } from "../../../utils/productData";
import Card from "../../Card/Card";
import { motion } from "framer-motion";
import "./style.css";

export default function HomeTools() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="tools_container grid grid-cols-2 gap-2 px-8 bg-white rounded-lg py-7"
    >
      <div className="banner_container grid grid-cols-2 gap-1">
        <div className="rounded-md p-5">
          <h5 className="sec_title font-bold text-3xl text-[#9a7936]">
            أدوات المطبخ الأساسية
          </h5>
          <div className="flex text-[#888] flex-col gap-4 my-9">
            <p>حاويات الطعام الزجاجية والبلاستيكية</p>
            <p>أواني الطهي الزجاجية</p>
            <p>أدوات الخبز المعدنية غير اللاصقة</p>
            <p>القدور والمقالي وأجهزة الضغط</p>
            <p>أدوات تقديم الطعام</p>
            <p>إكسسوارات المطبخ والتخزين</p>
            <p>السكاكين والمقصات</p>
            <p>الأدوات والملحقات</p>
          </div>

          <button className="flex h-full  mt-auto text-[#3150ff] gap-2 items-center">
            <span>عرض الكل</span>
            <FaArrowLeftLong className="my-auto" />
          </button>
        </div>

        <div className="banner">
          <img
            src="https://res.cloudinary.com/dbz6ebekj/image/upload/v1743948580/PYREX_OFFERS_sdn7d5.png"
            className="w-full rounded-md h-full"
            alt="عرض بيركس"
          />
        </div>
      </div>

      <div className="products grid-cols-2 grid gap-1">
        {PRODUCT_DATA?.slice(0, 4)?.map((item) => (
          <Card key={item?.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
}
