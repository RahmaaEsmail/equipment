import React, { useState, useEffect } from "react";
import { PRODUCT_DATA_2 } from "../../../utils/productData";
import { useParams } from 'react-router-dom';
import { IoPodiumSharp, IoHeartOutline, IoBagOutline, IoGiftOutline, IoClose } from "react-icons/io5";
import { FaStar, FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaEnvelope, FaAngleLeft, FaAngleRight, FaBell, FaMinus, FaPlus } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";


export default function MainProduct() {
    const { id } = useParams();

    //-----------modal
    const [imageModal, setImageModal] = useState(false);
    const [imgSrc, setImgSrc] = useState("");
    useEffect(() => {
        if (imageModal) {
            document.body.style.overflow = 'hidden';
            return () => document.body.style.overflow = 'unset';
        }
    }, [imageModal]);



    //----------swipers
    const [swiper, setSwiper] = useState({ activeIndex: 0 });
    const [arrows, setarrows] = useState(false);
    const [currentIndex, setcurrentIndex] = useState(0);
    const nexto = () => {
        swiper.slideNext();
        setcurrentIndex(swiper.activeIndex)
    };
    const pervto = () => {
        swiper.slidePrev();
        setcurrentIndex(swiper.activeIndex)
    };
    const moveto = (index) => {
        swiper.slideTo(index);
        setcurrentIndex(swiper.activeIndex)
    };



    //----------amount
    const [count, setCount] = useState(1);
    const increase = () => {
        setCount(count + 1);
    };
    const decrease = () => {
        let newCount = count - 1;
        if (newCount <= 0) {
            newCount = 1;
        }
        setCount(newCount);
    }
    return (
        <motion.div className="product-details"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="details">
                <h1>{PRODUCT_DATA_2[id - 1]?.title}</h1>
                <p className="flex gap-2 my-3 items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />&nbsp;
                    كن اول من يراجع هذا المنتج
                </p>
                {/* <br />
                <hr /> */}
                <h2 className="pt-3 font-light border-t border-t-gray-200">
                    <span className="text-(--del-price-color) line-through">{PRODUCT_DATA_2[id - 1]?.old_price}</span>
                    &nbsp;&nbsp;
                    <span>{PRODUCT_DATA_2[id - 1]?.new_price}</span>
                </h2>
                <br />
                <div>
                    {
                        PRODUCT_DATA_2[id - 1]?.desc?.split("\n")?.map((item, index) => (
                            <div key={index}>
                                <p>{item}</p>
                                <br />
                            </div>
                        ))
                    }
                </div>
                <h3>التوفر : {PRODUCT_DATA_2[id - 1]?.outOfStock ? <span>غير متوفر بالمخزن</span> : <b>متوفر</b>}</h3>
                <h3 className="pb-3">SKU : <b>{PRODUCT_DATA_2[id - 1]?.SKU}</b></h3>
               
                <div className="pro-btns pt-3 border-t border-t-gray-200">
                    {
                        PRODUCT_DATA_2[id - 1]?.outOfStock ?
                            <button className="addCart-btn"><FaBell />&nbsp;اعلمني عندما يكون هذا المنتج في المخزن</button>
                            :
                            <>
                                <div className="amount">
                                    <button onClick={increase}>+</button>
                                    <p>{count}</p>
                                    <button onClick={decrease}>-</button>
                                </div>
                                <button className="addCart-btn" onClick={() => {
                                    // addCart(PRODUCT_DATA_2[id-1])
                                }}><IoBagOutline className="!text-white"/>&nbsp;اضف لعربة التسوق</button>
                            </>
                    }

                    <button><IoHeartOutline /></button>
                    <button><IoPodiumSharp /></button>
                    <button><IoGiftOutline /></button>
                </div>

                <div className='share pt-3 border-t border-t-gray-200'>
                    <div className="hover:bg-sky-700"><FaFacebookF /></div>
                    <div className="hover:bg-sky-500"><FaTwitter /></div>
                    <div className="hover:bg-sky-700"><FaLinkedinIn /></div>
                    <div className="hover:bg-red-700"><FaGooglePlusG /></div>
                    <div className="hover:bg-red-700"><FaEnvelope /></div>
                </div>
            </div>

            <div className="pro-img">
                <div className="detail-imgs"
                    onMouseOver={() => {
                        setarrows(true)
                    }}
                    onMouseOut={() => {
                        setarrows(false)
                    }}
                >
                    <Swiper
                        onSwiper={(s) => {
                            setSwiper(s);
                        }}
                    >
                        {PRODUCT_DATA_2[id - 1].img?.map((item, index) => (
                            <SwiperSlide key={index} className="main-img">
                                <img src={item} alt=""
                                    onClick={() => {
                                        setImageModal(true)
                                        setImgSrc(item)
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {
                        arrows ?
                            <>
                                <button className='left'
                                    onClick={nexto}>
                                    <FaAngleLeft />
                                </button>
                                <button className='right'
                                    onClick={pervto}>
                                    <FaAngleRight />
                                </button>
                            </>
                            : null
                    }
                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={4}
                >
                    {PRODUCT_DATA_2[id - 1].img?.map((item, index) => (
                        <SwiperSlide key={index} className="img-swiper">
                            {
                                <img src={item} alt=""
                                    className={`${swiper.activeIndex == index ? "bordered-img" : ""}`}
                                    onClick={() => {
                                        moveto(index)
                                    }} />
                            }
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {
                imageModal ?
                    <div className='modal-layout'>
                        <div className="img-modal">
                            <IoClose onClick={() => {
                                setImageModal(false)
                            }} />
                            <img src={imgSrc} className="big-img" />
                            <div className="imgs-bar">
                                {PRODUCT_DATA_2[id - 1].img?.map((item, index) => (
                                    <img
                                        src={item} alt=""
                                        key={index}
                                        className={`${item == imgSrc ? "bordered-img" : ""}`}
                                        onClick={() => {
                                            setImgSrc(item)
                                        }} />
                                ))}
                            </div>
                        </div>
                    </div>
                    : null
            }
        </motion.div>
    );
}
