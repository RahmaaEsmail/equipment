import React, { useState } from "react";
import { CATEGORIESPRODUCTSDATA } from "../../utils/CategoriesProductsData";
import { useParams } from "react-router-dom";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import "./style.css";
import {
  IoHeartOutline,
  IoShareSocial,
  IoSwapHorizontal,
} from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import pay1 from "../../assets/PayPal.png";
import pay2 from "../../assets/DinersClub.png";
import pay3 from "../../assets/Mastercard.png";
import pay4 from "../../assets/Stripe.png";
import pay5 from "../../assets/Visa.png";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { product_id } = useParams();
  const productData = CATEGORIESPRODUCTSDATA.find(
    (product) => product?.id === Number(product_id)
  );
  console.log(productData);

  const [ProductImg, setProductImg] = useState(productData?.img[0]);
  const [ProductQuantity, setProductQuantity] = useState(1);
  return (
    <>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-5"
      >
        <div className="w-[100%] bg-[#f7f7f7] flex  ">
          <div className="w-[45%] h-100  p-[10px]" style={{ direction: "rtl" }}>
            <h1 className="text-[30px] font-bold ">{productData?.title}</h1>
            <div className="flex w-fit text-amber-300 m-[10px_20px] gap-1 items-center justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p>(5 نجوم )</p>
            </div>
            <p>{productData?.description}</p>

            <div className="flex gap-2 my-4 items-center  w-[15%] font-medium">
              <del className="text-(--del-price-color) text-[25px] ">
                {productData?.old_price}
              </del>
              <p className="text-(--main-color) text-[30px]">
                {productData?.new_price}
              </p>
            </div>
            <p>
              <b className="text-red-700"> سارعوا! </b> متبقي ٤ قطع فقط!
            </p>
            <progress
              className="w-[90%] rounded-[15px]"
              max={100}
              value={50}
              style={{ borderRadius: "15px" }}
            ></progress>
            <hr className="mt-[25px] text-gray-400 " />

            <div className="flex w-[100%] m-[20px] gap-[20px] ">
              <span className="flex w-[30%]  p-[10px] bg-gray-100 items-center  rounded-[50px] justify-between ">
                <button
                  className=" cursor-pointer transition-all duration-[.3s] hover:text-amber-300 "
                  onClick={() =>
                    setProductQuantity(
                      ProductQuantity > 1
                        ? ProductQuantity - 1
                        : ProductQuantity
                    )
                  }
                >
                  <FaMinus size={18} />
                </button>
                <p className="text-2xl">{ProductQuantity}</p>
                <button
                  className=" cursor-pointer transition-all duration-[.3s] hover:text-amber-300"
                  onClick={() => setProductQuantity(ProductQuantity + 1)}
                >
                  <FaPlus size={18} />
                </button>
              </span>
              <button className="w-[58%] font-bold  p-[10px] text-white  transition-all duration-[.3s] bg-black  hover:bg-red-600 rounded-[50px] cursor-pointer ">
                اضافة للسله
              </button>
            </div>
            <button className="w-[90%] block m-auto font-bold bg-red-700 p-[10px] text-white rounded-[50px] cursor-pointer ">
              شراء الان
            </button>
            <p className="w-fit m-[10px_auto] cursor-pointer transition-all duration-[.3s] hover:text-red-800 font-bold underline ">
              طرق دفع اخري
            </p>
            <div className="flex w-[80%]  gap-[20px] my-[15px] ">
              <p className="flex items-center gap-[5px] cursor-pointer hover:text-red-800 transition-all duration-[.3s] bg-amber-100 p-[5px] rounded-[5px] ">
                <IoHeartOutline /> اضافة الي لائحة التمني
              </p>
              <p className="flex items-center gap-[5px] cursor-pointer hover:text-red-800 transition-all duration-[.3s] bg-amber-100 p-[5px] rounded-[5px] ">
                <IoSwapHorizontal /> مقارنه
              </p>
              <p className="flex items-center gap-[5px] cursor-pointer hover:text-red-800 transition-all duration-[.3s] bg-amber-100 p-[5px] rounded-[5px] ">
                <FaRegQuestionCircle /> اترك سؤال
              </p>
              <p className="flex items-center gap-[5px] cursor-pointer hover:text-red-800 transition-all duration-[.3s] bg-amber-100 p-[5px] rounded-[5px] ">
                <IoShareSocial />
                مشاركه
              </p>
            </div>
            <p>ضمان الدفع الآمن:</p>
            <div className="flex gap-[15px] my-[20px] mx-auto w-fit ">
              <img
                className="h-[50px] border-[.1px] border-gray-200 "
                src={pay1}
                alt=""
              />
              <img
                className="h-[50px] border-[.1px] border-gray-200 "
                src={pay2}
                alt=""
              />
              <img
                className="h-[50px] border-[.1px] border-gray-200 "
                src={pay3}
                alt=""
              />
              <img
                className="h-[50px] border-[.1px] border-gray-200 "
                src={pay4}
                alt=""
              />
              <img
                className="h-[50px] border-[.1px] border-gray-200 "
                src={pay5}
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%] flex">
            <img
              src={ProductImg}
              className="w-[80%] block m-auto max-h-[600px] "
              alt=""
            />
            <div className="flex flex-col gap-[30px] w-fit max-w-[70%] m-[10px_auto] ">
              {productData?.img?.map((img, index) => {
                return (
                  <img
                    src={img}
                    className="w-[120px] cursor-pointer border-[.1px] border-gray-500 rounded-[5px] "
                    onClick={() => setProductImg(productData?.img[index])}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductDetails;
