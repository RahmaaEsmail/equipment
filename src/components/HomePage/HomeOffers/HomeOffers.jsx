import React from 'react'
import Card from '../../Card/Card'
import { PRODUCT_DATA } from '../../../utils/productData'
import { FaRegHeart, FaRegStar } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import { Tooltip } from 'antd'
import { IoBagHandleSharp, IoEyeOutline, IoHeartOutline, IoSwapHorizontal } from 'react-icons/io5'
import {motion}  from 'framer-motion'


export default function HomeOffers() {
  return (
    <motion.div initial={{opacity: 0 , y:100}} whileInView={{opacity : 1, y: 0}} transition={{duration:0.8,ease:"easeOut"}} className='my-5 bg-white rounded-lg p-8'>
        <h3 className="text-center font-semibold  text-4xl text-black">
        عروض مميزه
        </h3>

        <div className="grid my-5 grid-cols-[4fr_8fr] gap-2">
            <div className="">
                  <div className="card_icons_container border overflow-hidden border-gray-300 relative h-[550px] rounded-2xl p-3 ">
                    <div className="flex absolute  card_icons -right-14 top-3 flex-col gap-3 items-center">
                      <Tooltip
                        title="إضافه للسله"
                        placement={"left"}
                        className="bg-black text-white"
                      >
                        <button className="bg-gray-200 !text-black hover:bg-black hover:!text-white transition-all w-[50px] h-[50px] rounded-full flex justify-center items-center">
                          <IoBagHandleSharp />
                        </button>
                      </Tooltip>
            
                      <Tooltip
                        title="إضافه الي المفضلة"
                        placement={"left"}
                        className="bg-black text-white"
                      >
                        <button className="bg-gray-200 !text-black hover:bg-black hover:!text-white transition-all w-[50px] h-[50px] rounded-full flex justify-center items-center">
                          <IoHeartOutline />
                        </button>
                      </Tooltip>
            
                      <Tooltip
                        title="نظره سريعة"
                        placement={"left"}
                        className="bg-black text-white"
                      >
                        <button className="bg-gray-200 !text-black hover:bg-black hover:!text-white transition-all w-[50px] h-[50px] rounded-full flex justify-center items-center">
                          <IoEyeOutline />
                        </button>
                      </Tooltip>
            
                      <Tooltip
                        title="إضافه الي المقارنه"
                        placement={"left"}
                        className="bg-black text-white"
                      >
                        <button className="bg-gray-200 !text-black hover:bg-black hover:!text-white transition-all w-[50px] h-[50px] rounded-full flex justify-center items-center">
                          <IoSwapHorizontal />
                        </button>
                      </Tooltip>
                    </div>
                    <img src={PRODUCT_DATA[PRODUCT_DATA?.length - 1]?.img} className="w-full h-full object-cover" />{" "}
                  </div>
            
                  <div className="my-5 mt-24 text-center mx-auto">
                    <p className="font-semibold">{PRODUCT_DATA[PRODUCT_DATA?.length - 1]?.title}</p>
                    <div className="flex gap-2 my-4 PRODUCT_DATA[PRODUCT_DATA?.length - 1]s-center mx-auto w-fit font-medium">
                      <p className="text-(--main-color)">{PRODUCT_DATA[PRODUCT_DATA?.length - 1]?.new_price}</p>
                      <del className="text-(--del-price-color)">{PRODUCT_DATA[PRODUCT_DATA?.length - 1]?.old_price}</del>
                    </div>
            
                    <div className="flex text-gray-400 gap-1 items-center justify-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <button className='w-full rounded-lg flex justify-center mt-10 py-3 items-center text-white bg-(--main-color)'>إضافه للسله</button>
                  </div>
                </div>

            <div className='grid-cols-3  grid gap-1'>
              {PRODUCT_DATA?.slice(0,6)?.map(item => <Card item={item}/>)}
            </div>
        </div>
    </motion.div>
  )
}
