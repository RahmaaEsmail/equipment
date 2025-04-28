import React from "react";
import "./style.css";
import { CiLock } from "react-icons/ci";
import { GiDatabase } from "react-icons/gi";
import { CgServerless } from "react-icons/cg";
import { VscDebugConsole } from "react-icons/vsc";
import { color } from "framer-motion";

const AboutOurApp = () => {
  const data = [
    {
      icon: <CiLock color="white" />,
      title: "صيانة الأمان",
      description: "القليل من الروتر بيفي جورملس مش جولي جوش كراس.",
      color: "red-500",
    },
    {
      icon: <GiDatabase color="white" />,
      title: "قاعدة بيانات النسخ الاحتياطي",
      description: "القليل من الروتر بيفي جورملس مش جولي جوش كراس.",
      color: "sky-500",
    },
    {
      icon: <CgServerless color="white" />,
      title: "صيانة الخادم",
      description: "القليل من الروتر بيفي جورملس مش جولي جوش كراس.",
      color: "gray-300",
    },
    {
      icon: <VscDebugConsole color="white" />,
      title: "لا يوجد خطر قابل للاحتجاج",
      description: "القليل من الروتر بيفي جورملس مش جولي جوش كراس.",
      color: "[#9a7936]",
    },
  ];
  return (
    <>
      <div className="about_f_banner w-[100%] flex flex-wrap md:!flex-nowrap justify-between bg-white  py-[20px] ">
        <div className="w-full md:w-[50%] p-[20PX] ">
          <p className="text-[20px] text-[#9a7936] px-[10px] font-bold ">
            عن تطبيقنا
          </p>
          <h1 className="text-[25px] md:text-[40px] font-bold ">
            طريقة جديدة لشراء اجهزة مطعمك عبر الإنترنت.
          </h1>

          <div className="w-[100%] py-[20px] flex justify-between flex-wrap gap-[25px] md:gap-[15px]  ">
            {data.map((feature) => {
              return (
                <>
                  <span className="w-full md:w-[45%] flex flex-col md:gap-[10px]">
                    <p
                      className={`text-[30px]  bg-${feature?.color} rounded-md w-fit p-[5px_15px]`}
                    >
                      {" "}
                      {feature?.icon}
                    </p>
                    <p className="font-bold text-[22px]">{feature?.title}</p>
                    <p className="text-stone-500"> {feature?.description}</p>
                  </span>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-[45%] flex justify-center ">
          <img
            src="https://res.cloudinary.com/dhgp9dzdt/image/upload/v1745507902/Screenshot_2025-04-24_171719_o4036h.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutOurApp;
