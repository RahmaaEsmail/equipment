import React from "react";
import { HiOutlineCreditCard, HiOutlineTruck } from "react-icons/hi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoMdReverseCamera } from "react-icons/io";

export default function HomeStatistics() {
  return (
    <div className="my-3 px-8 grid grid-cols-4 gap-3 py-4">
      <div className="flex gap-3">
        <HiOutlineTruck className="text-[35px] h-[35px] text-[#3150ff]" />
        <div className="flex flex-col gap-0">
          <h5 className="text-black text-sm font-bold py-0 my-0">شحن وإرجاع مجاني</h5>
          <p className="text-gray-400 my-0 py-0 text-sm">شحن مجاني لجميع الطلبات فوق 3000 جنيه.</p>
        </div>
      </div>

      <div className="flex gap-3">
        <HiOutlineCurrencyDollar className="text-[35px] h-[35px] text-[#3150ff] font-light" />
        <div className="flex flex-col gap-0">
          <h5 className="text-black text-sm font-bold py-0 my-0">إرجاع خلال 14 يوم</h5>
          <p className="text-gray-400 my-0 py-0 text-sm">ضمان استرداد كامل للأموال 100%</p>
        </div>
      </div>

      <div className="flex gap-3">
        <IoMdReverseCamera className="text-[35px] h-[35px] text-[#3150ff]" />
        <div className="flex flex-col gap-0">
          <h5 className="text-black text-sm font-bold py-0 my-0">دعم سريع</h5>
          <p className="text-gray-400 my-0 py-0 text-sm">دعم أونلاين وخط ساخن 16866</p>
        </div>
      </div>

      <div className="flex gap-3">
        <HiOutlineCreditCard className="text-[35px] h-[35px] text-[#3150ff]" />
        <div className="flex flex-col gap-0">
          <h5 className="text-black text-sm font-bold py-0 my-0">خيارات دفع آمنة</h5>
          <p className="text-gray-400 my-0 py-0 text-sm">دفع إلكتروني آمن وسهل لجميع الطلبات</p>
        </div>
      </div>
    </div>
  );
}
