import React from "react";
import "./style.css";

const AbouFbanner = () => {
  return (
    <div className="about_f_banner w-[100%] items-center gap-7 md:gap-3 !flex-wrap md:!flex-nowrap   flex justify-around bg-white p-[20px] rounded-md  ">
      <div className="w-full justify-center items-center md:w-[50%]  !mx-auto flex gap-[20px] ">
        <div className="w-[40%] flex flex-col gap-[15px] ">
          <img
            src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1745505557/15196324276131519632427612szuy1872559462060818533-e1608404722609_xhdkj5.jpg"
            className="w-full rounded-[24px]"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1745505773/images_gpafsb.jpg"
            className="w-full rounded-[24px]"
            alt=""
          />
        </div>

        <div className="w-[40%] flex justify-center items-center ">
          <img
            src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1745505668/images_rj2gza.jpg"
            className="w-full rounded-[24px]"
            alt=""
          />
        </div>
      </div>
      <div className="w-full md:w-[45%]">
        <p className="text-[20px] text-[#9a7936] ">لماذا تختارنا؟</p>
        <h1 className="text-[25px] md:text-[40px] font-bold ">
          اجعل عملاءك سعداء من خلال تقديم الخدمات.
        </h1>
        <p className="text-[16px] mt-3 text-stone-500 leading:[25px] md:leading-[30px] font-bold ">
          من الحقائق المعروفة أن القارئ سيتشتت بسبب المحتوى المقروء للصفحة عند
          النظر إلى تصميمها. الهدف من استخدام لوريم إيبسوم هو أن له شكلاً أقرب
          إلى النص الحقيقي.
          <br />
          اسم النطاق هو إحدى الخطوات الأولى لتأسيس علامتك التجارية. حافظ على
          صورة متسقة لعلامتك التجارية من خلال اسم نطاق يتطابق مع نشاطك التجاري.
        </p>
        <button className="p-[10px_40px] mt-[15px] bg-[#9a7936] text-white font-bold rounded-[5px] cursor-pointer border-[.1px] transition-all duration-[.3s] hover:bg-white hover:border-[.1px] hover:border-[#9a7936] hover:text-[#9a7936] ">
          قم بالطلب الان
        </button>
      </div>
    </div>
  );
};

export default AbouFbanner;
