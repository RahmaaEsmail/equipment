import React, { useEffect, useState } from "react";
import { PRODUCT_DATA } from "../../utils/productData";
import Card from "../../components/Card/Card";
import { Button, Slider } from "antd";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox";
import { CATEGORIES } from "../../components/HomePage/FoodCategories/FoodCategories";
import { BRANDS } from "../../components/HomePage/HomeCategories/HomeCategories";
import { Link } from "react-router-dom";

export default function ProductsOfCategories() {
  const [value, setValue] = useState([3810, 8650]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleFilter = () => {
    // You can add filter logic here
    console.log("Filtered with:", value);
  };

  return (
    <div className="!mx-8">
      
      <div className="h-[60px] my-3 bg-white shadow-xl flex  px-2 items-center rounded-md">
        <div className="flex gap-2 items-center text-md my-auto">
            <Link to="/" className="underline pb-1">الصفحه الرئيسية</Link>
            /
            <p>المنتجات</p>
        </div>
      </div>
          

      <div className="grid  gap-3">
        {/* <div className=" h-fit flex flex-col   rounded-xl border border-gray-300 p-2 px-5">
          <div className="border-b  p-2 px-5  border-b-gray-200 pb-3">
            <h3 className="font-bold text-lg text-(--main-color)">الفئات</h3>

            <div className="flex flex-col gap-2 mt-3">
              {CATEGORIES?.map((item) => (
                <div key={item?.id} className="flex  !gap-3 items-center">
                  <CustomCheckbox />
                  <p className="font-medium text-md">{item?.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b  p-2 px-5  border-b-gray-200 pb-3">
            <h3 className="font-bold  text-lg text-(--main-color)">
              العلامه التجارية
            </h3>

            <div className="flex flex-col gap-2 mt-3">
              {BRANDS?.map((item) => (
                <div key={item?.id} className="flex  gap-3 items-center">
                  <CustomCheckbox />
                  <p className="font-medium text-md">{item?.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className=" p-2 px-5 ">
            <h3 className="font-bold text-lg text-(--main-color)">
              تصفية حسب السعر
            </h3>

            <div className="w-full max-w-md mt-1 mx-auto">
              <Slider
                range
                min={0}
                max={10000}
                step={10}
                value={value}
                onChange={handleChange}
                trackStyle={[
                  { backgroundColor: "var(--main-color)", height: 4 },
                ]}
              />

              <div className="flex justify-between items-center mt-3 text-gray-700">
                <p className="text-md flex">
                  <p className="font-semibold">السعر</p>:{" "}
                  <span className="font-semibold text-black">
                    جنيه {value[0].toLocaleString()} — جنيه{" "}
                    {value[1].toLocaleString()}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="grid grid-cols-4 gap-2 p-2">
          {PRODUCT_DATA?.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
