// import React, { useEffect, useState } from "react";
// import { Row, Col } from "antd";
// import AccountSideNav from "../../components/AccountPage/AccountSideNav";
// import ProfilePage from "./ProfilePage/ProfilePage";
// import { Outlet, useLocation } from "react-router-dom";
// import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

// const AccountPage = () => {
//   const pathname = useLocation();

//   useEffect(() => {
//     console.log(pathname?.pathname)
//   },  [pathname])

//   const data = [
//     {
//       id: 1,
//       title: "الصفحة الرئيسية",
//       route: "/",
//     },
//     {
//       id: 2,
//       title: "حسابي",
//       route: "/account",
//     },
//     pathname && {
//       id: 3,
//       title: location.pathname.replace("/account/", "").replace(/-/g, " "),
//     },
//   ].filter(Boolean);
  
//   return (

//     <div className="mx-4 md:!mx-8">
//     <BreadCrumb data={data} />
//     <Row gutter={24} className=" my-5 ">
//       <Col className="hidden lg:flex" span={6}>
//         <AccountSideNav />
//       </Col>
//       <Col className="w-full h" span={18}>
//       <Outlet />
//       </Col>
//     </Row>
//     </div>
//   );
// };

// export default AccountPage;

import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { FaBars, FaX } from "react-icons/fa6";
import AccountSideNav from "../../components/AccountPage/AccountSideNav";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const AccountPage = () => {
  const location = useLocation();
  const [isOpenSideNav, setIsOpenSideNav] = useState(false);

  useEffect(() => {
    console.log(location?.pathname);
  }, [location]);

  useEffect(() => {
    if (isOpenSideNav) {
      document.body.style.overflow = "hidden"; // وقف السكرول لو السايدبار مفتوح
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenSideNav]);

  const data = [
    { id: 1, title: "الصفحة الرئيسية", route: "/" },
    { id: 2, title: "حسابي", route: "/account" },
    location && {
      id: 3,
      title: location.pathname.replace("/account/", "").replace(/-/g, " "),
    },
  ].filter(Boolean);

  return (
    <div className="mx-4 md:mx-8">
      <BreadCrumb data={data} />

      {/* زرار Bars لفتح السايدبار في الموبايل */}
      <div className="flex md:hidden my-4">
        <button
          onClick={() => setIsOpenSideNav(true)}
          className="flex items-center gap-2 text-[var(--main-color)] font-semibold"
        >
          <FaBars className="text-2xl" />
          {/* <span>القائمة</span> */}
        </button>
      </div>

      {/* Desktop layout */}
      <div  className="my-5 hidden md:flex">
      <Row gutter={24}>
        <Col span={6}>
          <AccountSideNav />
        </Col>
        <Col span={18}>
          <Outlet />
        </Col>
      </Row>
      </div>

      {/* Mobile Sidebar */}
      {isOpenSideNav && (
        <div
          className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] flex transition-all duration-300"
          onClick={() => setIsOpenSideNav(false)}
        >
          <div
            className="bg-white w-[80%] max-w-[300px] p-4 h-full overflow-auto"
            onClick={(e) => e.stopPropagation()} // عشان الضغط جوا السايدبار ميفلوش
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsOpenSideNav(false)}
                className="p-2 border border-gray-300 rounded-md"
              >
                <FaX />
              </button>
            </div>

            {/* السايدبار نفسه */}
            <AccountSideNav />
          </div>
        </div>
      )}

      {/* Content في الموبايل تحت بعد السايدبار */}
      <div className="md:hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountPage;
