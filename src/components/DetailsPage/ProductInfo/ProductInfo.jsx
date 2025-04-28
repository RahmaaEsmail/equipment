import React, { useState } from "react";
import { PRODUCT_DATA_2 } from "../../../utils/productData";
import { useParams } from "react-router-dom";
import { Rate } from "antd";
import { motion } from "framer-motion";

export default function ProductInfo() {
  const { id } = useParams();
  const [tabState, setTab] = useState(1);
  const [rating, setRating] = useState(0);
  const reviews = [
    {
      id: 1,
      username: "سهام فؤاد",
      rate: 3,
      desc: "منتج رائع",
      sammary: "عرض جيد",
      date: "1/7/2022",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="desc-tab pb-2 border-b border-b-gray-300">
        <button
          className={`${tabState == 1 ? "clicked-tab" : ""}`}
          onClick={() => {
            setTab(1);
          }}
        >
          التفاصيل
        </button>
        <button
          className={`${tabState == 2 ? "clicked-tab" : ""}`}
          onClick={() => {
            setTab(2);
          }}
        >
          المزيد من المعلومات
        </button>
        <button
          className={`${tabState == 3 ? "clicked-tab" : ""}`}
          onClick={() => {
            setTab(3);
          }}
        >
          تقييم المنتج
        </button>
      </div>
      {tabState == 3 ? (
        <div className="review pb-3 !border-b !border-b-gray-200">
          <h3>مراجعات العميل</h3>
          {/* <br /> */}
          {reviews?.map((item, index) => (
            <div key={index}>
              <p>{item.desc}</p>
              <div className="customer-review">
                <div className="flex items-center gap-2">
                <span>التقييم : </span>
                <Rate
                  onChange={setRating}
                  value={rating}
                  className="text-[14px] text-[var(--main-color)]"
                />
                </div>
                <p>
                  {item.sammary}
                  <br />
                  عن طريق {item.username} &nbsp; {item.date}
                </p>
              </div>
              {/* <hr /> */}
            </div>
          ))}
          <h3 className="text-(--main-color)">
            انت تقيم: <br />
            {PRODUCT_DATA_2[id - 1]?.title}
          </h3>
          <div className="my-3">
          <p className="font-medium">تقييمك</p>
          <Rate
            onChange={setRating}
            value={rating}
            className="text-[14px] text-[var(--main-color)]"
          />{" "}
          </div>
          <div className="flex gap-2 flex-wrap md:flex-nowrap  items-center justify-between w-full">
            <div className="input-group">
              <label>الاسم</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>الملخص</label>
              <input type="text" />
            </div>
          </div>
          <div className="input-group !my-3">
            <label>المراجعة</label>
            <textarea rows={4}></textarea>
          </div>
          <button>تقييم</button>
        </div>
      ) : tabState == 2 ? (
        <div className="flex mt-5 flex-col gap-2">
          {/* <br /> */}
          {PRODUCT_DATA_2[id - 1]?.more_info.split("\n").map((item, index) => (
            <div className="flex !text-stone-500" key={index}>
              <p>{item}</p>
              {/* <br /> */}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex mt-5 flex-col gap-2">
          {PRODUCT_DATA_2[id - 1]?.desc.split("\n").map((item, index) => (
            <div className="flex !text-stone-500" key={index}>
              <p>{item}</p>
              {/* <br /> */}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
