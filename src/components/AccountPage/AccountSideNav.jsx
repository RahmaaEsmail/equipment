import React from "react";
import { FaHome, FaShuttleVan, FaUserCog } from "react-icons/fa";
import { FaGift, FaHeart, FaStar, FaWallet } from "react-icons/fa6";
import { HiOutlineLogout } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AccountSideNav = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(100%)]">
      <div className="w-full shadow h-[calc(100vh-50px)] sticky top-[25px]  max-w-xs p-4 rounded-xl bg-white border-0 border-primary-lite">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            className="w-12 h-12 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
            alt="Profile"
          />
          <div>
            <p className="font-semibold text-gray-900">
              Helene Engels <span className="text-sm text-gray-500">(PRO)</span>
            </p>
            <p className="text-sm text-gray-500">helene@example.com</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-2 mb-6 mt-[40px]">
          <button
            onClick={() => navigate("/account")}
            className="flex flex-col items-center p-2 rounded-lg bg-[#80f9f9a8] cursor-pointer transition hover:bg-[#80f9f9]"
          >
            <div className="bg-[#c7defb] text-blue-600 rounded-full p-2">
              <FaUserCog />
            </div>
            <span className="text-sm text-gray-800">حسابي</span>
          </button>
          <button
            onClick={() => navigate("gifts")}
            className="flex flex-col items-center p-2 rounded-lg bg-[#dcb7f6b6] hover:bg-[#dcb7f6f1] cursor-pointer transition"
          >
            <div className="bg-purple-100 text-purple-600 rounded-full p-2">
              <FaGift />
            </div>
            <span className="text-sm text-gray-800">الهدايا</span>
          </button>
          <button
            onClick={() => navigate("wallet")}
            className="flex flex-col items-center p-2 rounded-lg hover:bg-[#b0f7f7] bg-[#c2f8f8cf] cursor-pointer transition"
          >
            <div className="text-teal-600 rounded-full p-2">
              <FaWallet />
            </div>
            <span className="text-sm text-teal-800 font-medium">محفظة</span>
          </button>
        </div>

        {/* Menu Links */}
        <ul className="space-y-8 text-gray-700 text-sm">
          <li onClick={()=> navigate("my-orders")} className="flex items-center gap-2 hover:text-main-textColor cursor-pointer text-[16px] font-semibold">
            <span className="text-black/50">
              <FaShuttleVan />
            </span>{" "}
            طلباتي
          </li>
          <li onClick={()=> navigate("reviews")}  className="flex items-center gap-2 hover:text-main-textColor cursor-pointer text-[16px] font-semibold">
            <span className="text-black/50">
              <FaStar />
            </span>{" "}
            المراجعات
          </li>
          <li onClick={()=> navigate("delivery-locations")}  className="flex items-center gap-2 hover:text-main-textColor cursor-pointer text-[16px] font-semibold">
            <span  className="text-black/50">
              <FaHome />
            </span>{" "}
            عناوين التسليم
          </li>

          <li onClick={()=> navigate("favorite-items")}  className="flex items-center gap-2 hover:text-main-textColor cursor-pointer text-[16px] font-semibold">
            <span className="text-black/50">
              <FaHeart />
            </span>{" "}
            العناصر المفضلة
          </li>
        </ul>

        {/* Footer */}
        <div className="mt-4 border-t border-primary-light pt-4 space-y-2">
          <div onClick={()=> navigate("settings-page")} className="flex items-center gap-2 text-gray-700 text-sm hover:text-main-textColor cursor-pointer text-[16px] font-semibold">
            <span className="text-lg ">
              <IoSettings />
            </span>{" "}
            الإعدادات
          </div>
          <div className="flex items-center gap-2 text-red-600 text-sm hover:underline cursor-pointer text-[16px] font-semibold">
            <span>
              <HiOutlineLogout />
            </span>{" "}
            تسجيل الخروج
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSideNav;
