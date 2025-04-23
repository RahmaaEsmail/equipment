import React from "react";
import "../../sass/Footer/Footer.modules.css";
import { MdOutlineHeadsetMic } from "react-icons/md";
import {
  FaRegCreditCard,
  FaUserNurse,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { PiTruckFill } from "react-icons/pi";

import logo from "../../assets/react.svg";
export default function Footer() {
  const mainCategories = [
    {
      id: 1,
      name: "Cooking Equipment",
    },
    {
      id: 2,
      name: "Bakery Equipment",
    },
    {
      id: 3,
      name: "Refriferation",
    },
    {
      id: 4,
      name: "Laundry Equipment",
    },
  ];
  const imgsCategories = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745408850/extreme-turquoise_qm76yd-removebg-preview_1_ucvpiw.png",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745408894/steam_pro-01_gfxgdc-removebg-preview_1_rihip1.png",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745408953/trio1_1_hwp62c-removebg-preview_1_vr6qnu.png",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745408850/extreme-turquoise_qm76yd-removebg-preview_1_ucvpiw.png",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745408894/steam_pro-01_gfxgdc-removebg-preview_1_rihip1.png",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745408953/trio1_1_hwp62c-removebg-preview_1_vr6qnu.png",
    },
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745408894/steam_pro-01_gfxgdc-removebg-preview_1_rihip1.png",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745408953/trio1_1_hwp62c-removebg-preview_1_vr6qnu.png",
    },
  ];
  return (
    <section className="footer">
      {/* <div className="feature">
        <div className="item">
          <PiTruckFill />
          <p>شحن <br />شحن سهل للعملاء</p>
        </div>
        <div className="item">
          <MdOutlineHeadsetMic />
          <p>دعم 24/7 <br /> نحن هنا لمساعدتك</p>
        </div>
        <div className="item">
          <FaRegCreditCard />
          <p>الدفع اونلاين <br /> نحن نقبل الدفع اونلاين</p>
        </div>
        <div className="item">
          <FaUserNurse />
          <p>توصل سريع <br /> سريع وسهل</p>
        </div>
      </div> */}
      {/* <br />
      <hr />
      <br />
      <br /> */}
      <div className="content">
        <div>
          <img
            src={
              "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744031432/EQ_WHITE_ydrhyi.png"
            }
            alt=""
            width={120}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            quibusdam ea aperiam dolor, necessitatibus, itaque at excepturi,
            aliquam facilis
          </p>
        </div>
        <div className="flex justify-around">
          <div>
            <h5>روابط سريعة</h5>
            <ul>
              <li>
                <a href="#">تسوق</a>
              </li>
              <li>
                <a href="#">حولنا</a>
              </li>
              <li>
                <a href="#">سياسة الاسترجاع</a>
              </li>
              <li>
                <a href="#">تواصل معنا</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>التصنيفات</h5>
            <ul>
              {mainCategories.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gallery">
          {imgsCategories.map((item, index) => (
            <img src={item.image} key={index} />
          ))}
        </div>
      </div>
      <br />

      <div className="flex py-5 border-y border-y-gray-200 justify-around flex-wrap">
        <div className="flex flex-col justify-center items-center gap-1">
          <p>طرق الدفع:</p>
          <img
            className="w-[200px] object-contain"
            src="https://res.cloudinary.com/dbz6ebekj/image/upload/v1745406928/images-removebg-preview_1_nfbm3v.png"
          />
        </div>

       
        <div className="">
          <p className="text-lg font-semibold mb-2">للتواصل معنا:</p>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-700 text-white hover:bg-sky-800 transition-all duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-800 transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-5">
        &copy; 2025 - All Right reserved | Designed By Camp Coding 360
      </p>
    </section>
  );
}
