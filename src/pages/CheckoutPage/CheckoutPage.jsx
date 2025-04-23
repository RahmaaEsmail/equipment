import React from "react";
import { Link } from "react-router-dom";

export default function CheckoutPage({ activeStep, setActiveStep }) {
  return (
    <div>
      <div className="grid grid-cols-[8fr_4fr] gap-3">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-2 items-center">
              <div className="input-group">
                <label>الاسم</label>
                <input placeholder="rahma esmail" />
              </div>

              <div className="input-group">
                <label>
                  الايميل{" "}
                  <span className="text-red-700 text-lg font-bold">*</span>
                </label>
                <input type="email" placeholder="rahma@gmail.com" />
              </div>
            </div>

            <div className="flex justify-between gap-2 items-center">
              <div className="input-group">
                <label>
                  البلد{" "}
                  <span className="text-red-700 text-lg font-bold">*</span>
                </label>
                <select>
                  <option>اختر بلد</option>
                </select>
              </div>

              <div className="input-group">
                <label>
                  المدينة{" "}
                  <span className="text-red-700 text-lg font-bold">*</span>
                </label>
                <select>
                  <option>اختر مدينة</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between gap-2 items-center">
              <div className="input-group">
                <label>رقم الهاتف</label>
                <input type="tel" placeholder="01203762873" />
              </div>

              <div className="input-group">
                <label>
                  اسم الشركة{" "}
                  <span className="text-red-700 text-lg font-bold">*</span>
                </label>
                <input type="text" placeholder="rahma@gmail.com" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-2xl mt-4">طريقة الدفع</h3>

            <div className="grid grid-cols-3 gap-5 items-center my-4">
              <div className="flex h-[100px] gap-4 bg-[#f9f6ef] border border-(--main-color) rounded-md p-3 items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 bg-gray-100 border-0 outline-none focus:border-0 focus:outline-none"
                  style={{
                    accentColor: "var(--main-color)",
                    "--tw-ring-color": "var(--main-color)",
                    "--tw-border-color": "var(--main-color)",
                  }}
                />

                <div className="flex flex-col gap-0">
                  <h6 className="font-medium">بطاقة إئتمان</h6>
                  <p className="text-gray-600">ادفع ببطاقتك الائتمانية</p>
                </div>
              </div>

              <div className="flex h-[100px] gap-4 bg-[#f9f6ef] border border-(--main-color) rounded-md p-3 items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 bg-gray-100 border-0 outline-none focus:border-0 focus:outline-none"
                  style={{
                    accentColor: "var(--main-color)",
                    "--tw-ring-color": "var(--main-color)",
                    "--tw-border-color": "var(--main-color)",
                  }}
                />

                <div className="flex flex-col gap-0">
                  <h6 className="font-medium">الدفع عند التسليم</h6>
                  <p className="text-gray-600">+15 دولارًا رسوم معالجة الدفع</p>
                </div>
              </div>

              <div className="flex h-[100px] gap-4 bg-[#f9f6ef] border border-(--main-color) rounded-md p-3 items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 bg-gray-100 border-0 outline-none focus:border-0 focus:outline-none"
                  style={{
                    accentColor: "var(--main-color)",
                    "--tw-ring-color": "var(--main-color)",
                    "--tw-border-color": "var(--main-color)",
                  }}
                />

                <div className="flex flex-col gap-0">
                  <h6 className="font-medium">حساب باي بال</h6>
                  <p className="text-gray-600">قم بالاتصال بحسابك</p>
                </div>
              </div>
            </div>

            <div className=" mt-7 rounded-lg">
              <h3 className="font-medium  text-md">
                هل لديك قسيمة أو بطاقة هدية؟
              </h3>
              <div className="flex  mt-3 gap-2 items-center">
                <input className="border p-2 w-[500px] rounded-md border-[#ccc] bg-[#cccccc2f]" />
                <button className="bg-(--main-color) text-white p-2 rounded-md  flex justify-center items-center">
                  تطبيق الكود
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className=" mt-4  p-2  px-4 rounded-lg">
            <ul className="flex flex-col mt-5 pb-4  gap-2">
              <li className="flex gap-2 border-b-gray-400 border-b pb-4 text-md font-medium items-center justify-between">
                <p className="text-gray-500 ">المجموع الفرعي</p>
                <p className="">$7,592.00</p>
              </li>

              <li className="flex gap-2 text-md pb-4 border-b-gray-400 border-b font-medium items-center justify-between">
                <p className="text-gray-500 ">توفير</p>
                <p className=" text-green-700">-$299.00</p>
              </li>

              <li className="flex gap-2 text-md pb-4  border-b-gray-400 border-b font-medium items-center justify-between">
                <p className="text-gray-500 ">استلام من المتجر</p>
                <p className="">$99</p>
              </li>

              <li className="flex gap-2 text-md pb-4 border-b-gray-400 border-b font-medium items-center justify-between">
                <p className="text-gray-500 "> ضريبة</p>
                <p className="">$799</p>
              </li>
            </ul>

            <div className="flex gap-2 text-lg font-medium items-center justify-between">
              <p className="text-gray-800 font-bold">الحساب الكلي</p>
              <p>$8,191.00</p>
            </div>

            <button className="bg-(--main-color) mt-5 mb-3 w-full text-white p-2 rounded-md">
              الانتقال إلى الدفع
            </button>
            <p className=" text-md">
              <span>
                {" "}
                يتطلب عنصر واحد أو أكثر في سلة التسوق الخاصة بك حسابًا.
              </span>
              <Link
                className="text-(--main-color) underline underline-offset-4"
                to="/products"
              >
                قم بتسجيل الدخول أو إنشاء حساب الآن.
              </Link>
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setActiveStep(3)}
        className="bg-(--main-color) text-white p-2 px-4 mt-4 flex rounded-md !ms-auto"
      >
        التالي
      </button>

    </div>
  );
}
