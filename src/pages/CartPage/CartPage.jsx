import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function CartPage({ activeStep, setActiveStep }) {
  const [selectedData, setSelectedData] = useState(
    localStorage.getItem("SELECTED_ORDER")
      ? JSON.parse(localStorage.getItem("SELECTED_ORDER"))
      : []
  );
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-[5fr_5fr] md:grid-cols-[7fr_5fr] gap-3">
        <div className="flex flex-col pe-0 md:!pe-4 mt-4 gap-4">
          {selectedData?.length ? selectedData?.map(
            (item) =>
              item?.quantity != 0 && (
                <div className="border     border-(--main-color) p-2 rounded-lg">
                  <FaRegTrashCan
                    className="text-gray-400 ms-auto"
                    onClick={() => {
                      setSelectedData((prev) =>
                        prev?.filter((prod) => prod?.id != item?.id)
                      );
                    }}
                  />

                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 pb-2 items-center">
                      <img
                        src={item?.img}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-lg text-black">
                          {item?.name}
                        </p>
                        <p className="text-gray-600  text-lg">{item?.desc}</p>
                        <p className="text-(--main-color) font-medium">
                          3,000 جنيه
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 items-center justify-center pt-2">
                      <p
                        // onClick={() => handleIncreaseOrder(item?.id)}
                        className="bg-[var(--main-color)] text-white w-6 h-6 rounded-md flex justify-center items-center cursor-pointer"
                      >
                        +
                      </p>
                      <p className="border border-[var(--main-color)] w-12 h-7 rounded-md text-[var(--main-color)] flex justify-center items-center">
                        {item?.quantity}
                      </p>
                      <p
                        // onClick={() => handleDecreaseOrder(item?.id)}
                        className="bg-[var(--main-color)] w-6 h-6 rounded-md text-white flex justify-center items-center cursor-pointer"
                      >
                        -
                      </p>
                    </div>
                  </div>
                </div>
              )
          ) : <div>
              <p className="font-semibold text-center">لا توجد عناصر في العربه</p>
            </div>}
        </div>

        <div className="flex flex-col gap-2">
          <div className="border mt-4   border-(--main-color) p-2  px-4 rounded-lg">
            <h3 className="font-bold text-3xl">ملخص الطلب</h3>
            <ul className="flex flex-col mt-5 pb-4 gap-2">
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

            <div className="flex gap-2 text-xl font-medium items-center justify-between">
              <p className="text-gray-800 font-bold">الحساب الكلي</p>
              <p>$8,191.00</p>
            </div>

            <button className="bg-(--main-color) mt-5 mb-3 w-full text-white p-2 rounded-md">
              الانتقال إلى الدفع
            </button>
            <p className="text-center text-lg">
              <span> أو</span>
              <Link
                className="text-(--main-color) underline underline-offset-4"
                to="/products"
              >
                اكمل تسوق{" "}
              </Link>
            </p>
          </div>

          <div className="border mt-4    border-(--main-color)  p-5 rounded-lg">
            <h3 className="font-medium  text-xl">
              هل لديك قسيمة أو بطاقة هدية؟
            </h3>
            <input className="border border-gray-400 rounded-md mt-3 px-3 py-4 w-full" />
            <button className="bg-(--main-color) text-white p-2 rounded-md mt-4 w-full flex justify-center items-center">
              تطبيق الكود
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setActiveStep(2)}
        className="bg-(--main-color) text-white p-2 px-4 mt-4 flex rounded-md !ms-auto"
      >
        التالي
      </button>
    </div>
  );
}
