import React, { useEffect, useState } from "react";
import {
  IoBagHandleSharp,
  IoEyeOutline,
  IoHeartOutline,
  IoSwapHorizontal,
} from "react-icons/io5";
import { motion } from "framer-motion";
import { Modal, Tooltip } from "antd";
import {
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaMinus,
  FaPlus,
  FaStar,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { toast } from "react-toastify";

export default function Card({
  item,
  onClick,
  cardClassName,
  cardImg,
  cardTitle,
  cardPrice,
  tooltipCard,
  isFav,
  setIsFav,
  handleAddToWishlist,
  whishLishProducts
}) {
  const navigate = useNavigate();
  const [OpenModal, setOpenModal] = useState(null);
  const [ProductQuantity, setProductQuantity] = useState(1);


  return (
    <div className="snap-start">
      <div
        className={`card_icons_container cursor-pointer ${cardClassName} border overflow-hidden border-gray-300 relative h-[350px] rounded-2xl p-3 `}
      >
        <div className="flex absolute !z-50 card_icons -right-14 top-3 flex-col gap-3 items-center">
          <Tooltip
            title="إضافه للسله"
            placement={"left"}
            className="bg-black text-white"
          >
            <button
              className={`bg-gray-200 !text-black hover:bg-black hover:!text-white transition-all w-[50px] h-[50px] rounded-full flex justify-center items-center ${tooltipCard}`}
            >
              <IoBagHandleSharp />
            </button>
          </Tooltip>

          <Tooltip
            title={whishLishProducts?.some((prod) => prod.id === item.id) ? "إزالة من المفضلة" : "إضافة إلي المفضلة"}
            placement={"left"}
            className="bg-black text-white"
          >
            <button
              onClick={() => handleAddToWishlist(item)}
              className={`bg-gray-200 !text-black hover:bg-black hover:!text-white transition-all w-[50px] h-[50px] rounded-full flex justify-center items-center ${tooltipCard}`}
            >
              {whishLishProducts?.some((prod) => prod.id === item.id) ? (
                <FaHeart className="text-red-500" />
              ) : (
                <IoHeartOutline />
              )}

              {/* <IoHeartOutline className="" /> */}
            </button>
          </Tooltip>

          <Tooltip
            title="نظره سريعة"
            placement={"left"}
            className="bg-black text-white"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenModal(item);
              }}
              className={`bg-gray-200 !text-black hover:bg-black hover:!text-white transition-all w-[50px] h-[50px] rounded-full flex justify-center items-center ${tooltipCard}`}
            >
              <IoEyeOutline />
            </button>
          </Tooltip>

          <Tooltip
            title="إضافه الي المقارنه"
            placement={"left"}
            className="bg-black text-white"
          >
            <button
              className={`bg-gray-200 !text-black hover:bg-black hover:!text-white transition-all w-[50px] h-[50px] rounded-full flex justify-center items-center ${tooltipCard}`}
            >
              <IoSwapHorizontal />
            </button>
          </Tooltip>
        </div>
        <img
          onClick={() => {
            navigate(`/Products/${item?.id}`);
          }}
          src={item?.img[0]}
          className={`w-full h-full object-cover ${cardImg}`}
        />{" "}
      </div>

      <div className="!my-5 cursor-pointer !text-center !mx-auto">
        <p className={`font-semibold ${cardTitle}`}>{item?.title}</p>
        <div
          className={`flex gap-2 !my-4 !items-center justify-center !mx-auto !w-fit font-medium ${cardPrice}`}
        >
          <p className="text-(--main-color) text-center mx-auto">
            {item?.new_price}
          </p>
          {item?.old_price && (
            <del className="text-(--del-price-color)">{item?.old_price}</del>
          )}
        </div>

        <div className="flex text-gray-400 gap-1 !items-center justify-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>

      <Modal
        open={OpenModal}
        onCancel={() => setOpenModal(null)}
        onClose={() => setOpenModal(null)}
        footer={null}
        width={"70%"}
        style={{ direction: "rtl" }}
      >
        <div className="w-[100%]  flex  ">
          {/* <img src={OpenModal?.img} className="" alt="" /> */}
          <div className="w-[45%] relative">
            <div className="absolute bg-[rgba(179,178,178,0.5)] text-black w-[40px] h-[40px] rounded-full flex justify-center items-center top-[250px] left-2 z-10 -translate-y-1/2 cursor-pointer swiper-button-prev-custom">
              <FaChevronLeft size={20} />
            </div>
            <div className="absolute top-[250px] bg-[rgba(136,135,135,0.5)] text-black right-2 z-10 w-[40px] h-[40px] rounded-full flex justify-center items-center -translate-y-1/2 cursor-pointer swiper-button-next-custom">
              <FaChevronRight size={20} className="font-thin" />
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              spaceBetween={50}
              slidesPerView={1}
            >
              {OpenModal?.img?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <img className="w-full rounded-md" src={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-[60%]  p-[10px] ">
            <h1 className="text-[25px]">{OpenModal?.title}</h1>
            <span className="flex items-center gap-[15px] p-[15px] ">
              <sub>
                <del className="text-[22px] text-red-900 ">
                  {OpenModal?.old_price}
                </del>
              </sub>
              <p className="text-[22px] text-[#9a7936] ">
                {OpenModal?.new_price}
              </p>
            </span>
            <p>{OpenModal?.description}</p>
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
              <button className="w-[58%] font-bold  p-[10px] text-white  transition-all duration-[.3s] bg-black  hover:bg-red-800 rounded-[50px] cursor-pointer ">
                اضافة للسله
              </button>
            </div>
            <button className="w-[90%] block m-auto font-bold bg-amber-300 p-[10px] text-white rounded-[50px] cursor-pointer ">
              شراء الان
            </button>
            <p className="w-fit m-[10px_auto] cursor-pointer transition-all duration-[.3s] hover:text-red-800 font-bold underline ">
              طرق دفع اخري
            </p>

            <p
              onClick={() => navigate(`/product-details/${item?.id}`)}
              className="w-fit m-[10px] flex items-center gap-[5px] cursor-pointer transition-all duration-[.3s] hover:text-red-800 font-bold  "
            >
              التفاصيل كامله
              <FaArrowLeft />
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
