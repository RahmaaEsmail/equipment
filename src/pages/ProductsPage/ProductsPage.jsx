import React, { useState } from "react";
import { PRODUCT_DATA } from "../../utils/productData";
import Card from "../../components/Card/Card";
import { BRANDS } from "../../components/HomePage/HomeCategories/HomeCategories";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox";
import { Slider } from "antd";
import { CATEGORIES } from "../../components/HomePage/FoodCategories/FoodCategories";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { toast } from "react-toastify";

export default function ProductsPage() {
  const [whishLishProducts, setWishListProducts] = useState(
    JSON.parse(localStorage?.getItem("WISHLIST_PRODUCTS")) || []
  );
  const [openBrand, setOpenBrand] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const navigate = useNavigate();
  const [openCategories, setOpenCategories] = useState(false);
  const [value, setValue] = useState([3810, 8650]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleFilter = () => {
    // You can add filter logic here
    console.log("Filtered with:", value);
  };

  function handleAddToWishlist(item) {
    const isAlreadyFav = whishLishProducts.some((prod) => prod.id === item.id);

    let updatedList;

    if (isAlreadyFav) {
      updatedList = whishLishProducts.filter((prod) => prod.id !== item.id);
      toast.success("تمت إزالة المنتج من المفضلة");
    } else {
      updatedList = [...whishLishProducts, { ...item, isFav: true }];
      toast.success("تمت إضافة المنتج إلى المفضلة");
    }

    console.log(updatedList);
    setWishListProducts(updatedList);
    localStorage.setItem("WISHLIST_PRODUCTS", JSON.stringify(updatedList));
  }

  return (
    <div className="!mx-8 flex flex-col gap-3">
      <BreadCrumb
        data={[
          {
            id: 1,
            route: "/",
            title: "الصفحه الرئيسية",
          },
          {
            id: 2,
            title: "المنتجات",
          },
        ]}
      />

      <div className="grid grid-cols-[3fr_9fr] gap-3  my-4">
        <div className="flex flex-col h-fit gap-2 py-4 border border-gray-300 rounded-lg">
          <div className="!px-4">
            <div className="flex  justify-between items-center !px-3 !py-3 border-b border-b-gray-200">
              <p className="font-medium my-auto">سلع جديدة</p>
              <div className="bg-green-600 h-fit text-white !px-1 text-sm flex justify-center items-center rounded-sm">
                <p>NEW</p>
              </div>
            </div>

            <div className="flex justify-between items-center !px-3 !py-3 border-b border-b-gray-200">
              <p className="font-medium my-auto">عروض خاصة</p>
              <div className="bg-[#0ae3eb] h-fit text-white !px-1 text-sm flex justify-center items-center rounded-sm">
                <p className="my-auto">SALE</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 !mt-2 !px-4">
            {CATEGORIES?.map((item) => (
              <div
                key={item?.id}
                className="flex cursor-pointer justify-between border-b border-b-gray-200 pb-3 !gap-3 items-center"
              >
                <div className="flex items-center gap-4">
                  <img src={item?.icon} className="w-10 h-10 rounded-full" />
                  <p className="font-medium text-sm text-gray-500">
                    {item?.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="!pb-3 border-b border-b-gray-200">
            <div
              onClick={() => setOpenBrand((prev) => !prev)}
              className="flex !px-3 gap-2 cursor-pointer  justify-between items-center font-semibold"
            >
              <p className="cursor-pointer">الماركة</p>
              <p className="text-3xl cursor-pointer">{openBrand ? "-" : "+"}</p>
            </div>

            {openBrand && (
              <div className="flex flex-col gap-3 !mt-2 !px-3">
                {BRANDS?.map((item) => (
                  <div key={item?.id} className="flex  !gap-3 items-center">
                    <CustomCheckbox />
                    <p className="font-medium text-sm text-gray-600">
                      {item?.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="!pb-3">
            <div
              onClick={() => setOpenPrice((prev) => !prev)}
              className="flex !px-3 gap-2 cursor-pointer  justify-between items-center font-semibold"
            >
              <p className="cursor-pointer">السعر</p>
              <p className="text-3xl cursor-pointer">{openPrice ? "-" : "+"}</p>
            </div>

            {openPrice && (
              <div className="flex flex-col gap-3 !mt-2 !px-3">
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

                <div className="flex justify-between items-center  text-gray-700">
                  <p className="text-md flex">
                    <span className="font-semibold text-sm text-gray-600">
                      جنيه {value[0].toLocaleString()} — جنيه{" "}
                      {value[1].toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center !mb-3">
            <div className="flex gap-2 items-baseline-last">
              <p className="font-medium text-(--main-color)">رتب حسب : </p>
              <select className="border border-gray-300 !p-2 rounded-md">
                <option>اسم المنتج</option>
                <option>السعر</option>
              </select>
            </div>

            <div className="flex gap-2 items-baseline-last">
              <p className="font-medium text-(--main-color)"> أعرض: </p>
              <select className="border border-gray-300 !p-2 rounded-md">
                <option>الكل</option>
                <option>48</option>
                <option>30</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-4 !gap-3">
            {PRODUCT_DATA?.map((item) => (
              <Card
              whishLishProducts={whishLishProducts}
              handleAddToWishlist={handleAddToWishlist}
                onClick={() => navigate(`/Products/${item?.id}`)}
                cardClassName={"!h-[200px]"}
                tooltipCard={"!w-[30px] !h-[30px]"}
                cardPrice={"!text-[14px] !my-2"}
                cardTitle={"!text-[14px]"}
                cardImg={"!w-48"}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
