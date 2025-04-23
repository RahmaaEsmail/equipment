import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SummaryPage() {
  const [selectedData, setSelectedData] = useState(
    localStorage.getItem("SELECTED_ORDER")
      ? JSON.parse(localStorage.getItem("SELECTED_ORDER"))
      : []
  );
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="font-medium text-2xl my-3 text-(--main-color)">
          ملخص الطلب
        </h3>
        <ul className="flex flex-col gap-2">
          <li className="flex pb-3 border-b border-b-stone-200 gap-2 items-center justify-between">
            <p className="font-medium">تاريخ الطلب :</p>
            <p className="text-stone-500">24 November 2023</p>
          </li>

          <li className="flex pb-3 border-b border-b-stone-200 gap-2 items-center justify-between">
            <p className="font-medium">الايميل :</p>
            <p className="text-stone-500">rahma@gmail.com</p>
          </li>

          <li className="flex pb-3 border-b border-b-stone-200 gap-2 items-center justify-between">
            <p className="font-medium"> رقم الهاتف :</p>
            <p className="text-stone-500">+123 456 7890</p>
          </li>

          <li className="flex pb-3 border-b border-b-stone-200 gap-2 items-center justify-between">
            <p className="font-medium"> طريثة الدفع :</p>
            <p className="text-stone-500">Credit Card</p>
          </li>

          <li className="flex pb-3 border-b border-b-stone-200 gap-2 items-center justify-between">
            <p className="font-medium">عنوان الشحن :</p>
            <p className="text-stone-500">
              62 Miles Drive St, Newark, NJ 07103, California,
            </p>
          </li>
        </ul>
      </div>

      <div className="my-4">
        <h3 className="font-medium my-3 text-2xl text-(--main-color)">
          المنتجات{" "}
        </h3>

        <div className="bg-gray-100 p-3 px-6 border border-gray-200 rounded-lg">
          {selectedData?.map((item) => (
            <div className="grid  mx-auto not-last:border-b not-last:border-b-gray-300 py-4 grid-cols-4 gap-3 items-center">
              <div className="flex gap-2 just items-center ">
                <img
                  className="h-16 w-16 rounded-md object-cover"
                  src={item?.img}
                />
                <p className="font-medium text-lg">{item?.name}</p>
              </div>

              <p className="text-center font-medium"> x{item?.quantity}</p>
              <p className="text-center"> {item?.desc}</p>

              <p className="text-left font-bold text-lg">3000 جنيه</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className=" mt-4  p-2  px-4 rounded-lg">
        <h3 className="font-medium text-2xl my-3 text-(--main-color)">
          ملخص الطلب
        </h3>          <ul className="flex flex-col mt-5 pb-4 gap-2">
            <li className="flex gap-2 text-lg font-medium items-center justify-between">
              <p className="text-gray-500 ">السعر الأصلي</p>
              <p className="">$7,592.00</p>
            </li>

            <li className="flex gap-2 text-lg font-medium items-center justify-between">
              <p className="text-gray-500 ">توفير</p>
              <p className=" text-green-700">-$299.00</p>
            </li>

            <li className="flex gap-2 text-lg font-medium items-center justify-between">
              <p className="text-gray-500 ">استلام من المتجر</p>
              <p className="">$99</p>
            </li>

            <li className="flex gap-2 text-lg font-medium items-center justify-between">
              <p className="text-gray-500 "> ضريبة</p>
              <p className="">$799</p>
            </li>
          </ul>

          <p className="pt-2 border-t border-t-gray-400"></p>

          <div className="flex gap-2 text-lg font-medium items-center justify-between">
            <p className="text-gray-800 font-bold">الحساب الكلي</p>
            <p>$8,191.00</p>
          </div>



          <div className="flex gap-2 mt-4 w-[50%]  items-center">
            <button className="bg-(--main-color) w-full text-white p-3 rounded-md">
              ارسل الاوردر
            </button>
            <button className="border w-full  p-3 rounded-md text-(--main-color) border-(--main-color) ">
              العوده للتسوق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
