import React from "react";
import "./style.css";
import CountUp from "react-countup";

const Experiancesec = () => {
  return (
    <div className="about_f_banner w-[100%] items-center flex-wrap md:!flex-nowrap   flex justify-around bg-white  p-[20px] rounded-md  ">
      <div className="w-full md:w-[40%] flex gap-[20px] ">
        <span className="rounded-md w-full md:w-[45%]">
          <img
            src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1745505853/knocksense_2023-10_e52847b3-8158-451c-be09-96da1533cd40_1_oz5kf3.avif"
            alt=""
            className=" rounded-[24px] w-full"
          />
        </span>
        <span className="mt-[100px] w-full md:w-[45%]">
          <img
            src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1745505602/images_clul4v.jpg"
            alt=""
            className=" rounded-[24px] w-full "
          />
        </span>
      </div>
      <div className="w-full md:w-[50%]">
        <p className="text-[20px] text-[#9a7936] px-[10px] font-bold ">
          لماذا نحن ؟
        </p>
        <h1 className="text-[25px] md:text-[40px] font-bold ">
          نجهز مطبخك للنجاح عن طريق الانترنت
        </h1>
        <p className="text-[16px] leading-[25px]  text-stone-500 mt-3 md:leading-[30px] font-bold ">
          في متجرنا لمعدات المطبخ، نحن نؤمن أن المطبخ المثالي يبدأ بالمعدات
          المثالية. بخبرتنا الطويلة وشغفنا بالتفاصيل، قمنا بتجهيز الآلاف من
          المطابخ بمعدات موثوقة وجودة عالية لضمان أفضل أداء يومي. إلى النص
          الحقيقي.
          <br />
          المطابخ بمعدات موثوقة وجودة عالية لضمان أفضل أداء يومي. إلى النص
          الحقيقي.
        </p>
        {/* <div className="flex w-full md:w-[80%] m-0 md:m-auto gap-[10px] md:gap-[30px] pt-[30px] text-center ">
          <span>
            <h1 className="text-[30px] font-bold ">
              +
              <CountUp
                className="account-balance"
                start={0}
                end={15}
                duration={1}
                useEasing={true}
                separator=","
              />{" "}
            </h1>
            <p className="block m-auto whitespace-nowrap font-semibold w-fit">سنة خبرة</p>
          </span>
          <span>
            <h1 className="text-[30px] font-bold ">
              +
              <CountUp
                className="account-balance"
                start={0}
                end={500}
                duration={1}
                useEasing={true}
                separator=","
              />{" "}
            </h1>
            <p className="block m-auto whitespace-nowrap font-semibold w-fit">
              مشروع تجهيز مطابخ ناجح
            </p>
          </span>
          <span>
            <h1 className="text-[30px] font-bold ">
              +
              <CountUp
                className="account-balance"
                start={0}
                end={300}
                duration={1}
                useEasing={true}
                separator=","
              />{" "}
            </h1>
            <p className="block m-auto font-semibold whitespace-nowrap w-fit">عميل سعيد</p>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Experiancesec;
