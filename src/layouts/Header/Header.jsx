import React, { useState } from "react";
import "../../sass/Header/Header.modules.css";
import {
  IoShuffleOutline,
  IoCartOutline,
  IoHeartOutline,
  IoSearchOutline,
  IoChevronDownOutline,
  IoMenuSharp,
  IoClose,
  IoPersonOutline,
} from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/react.svg";
import { Menu } from "antd";
import { Dropdown, Space } from "antd";
import { Link, useLocation } from "react-router-dom";
import { CATEGORIES } from "../../components/HomePage/FoodCategories/FoodCategories";
import { FaUser } from "react-icons/fa6";
import { configs } from "../../configs";

export default function Header() {
  const menuItems = [
    {
      key: "sub1",
      label: "معدات المطبخ",
      children: [
        {
          key: "g1",
          type: "group",
          children: [
            { key: "1", label: "Option 1" },
            { key: "2", label: "Option 2" },
            { key: "3", label: "Option 3" },
            { key: "4", label: "Option 4" },
            { key: "5", label: "Option 5" },
          ],
        },
      ],
    },
    {
      key: "sub2",
      label: "معدات المغسلة",
      children: [
        {
          key: "g2",
          type: "group",
          children: [
            { key: "6", label: "Option 1" },
            { key: "7", label: "Option 2" },
            { key: "8", label: "Option 3" },
            { key: "9", label: "Option 4" },
            { key: "10", label: "Option 5" },
          ],
        },
      ],
    },
    {
      key: "sub3",
      label: "معدات القهوة والبار",
      children: [
        {
          key: "g3",
          type: "group",
          children: [
            { key: "11", label: "Option 1" },
            { key: "12", label: "Option 2" },
            { key: "13", label: "Option 3" },
            { key: "14", label: "Option 4" },
            { key: "15", label: "Option 5" },
          ],
        },
      ],
    },
    {
      key: "sub4",
      label: "التبريد",
      children: [
        {
          key: "g4",
          type: "group",
          children: [
            { key: "16", label: "Option 1" },
            { key: "17", label: "Option 2" },
            { key: "18", label: "Option 3" },
            { key: "19", label: "Option 4" },
            { key: "20", label: "Option 5" },
          ],
        },
      ],
    },
    {
      key: "1",
      label: "غسالة الاطباق",
    },
    {
      key: "2",
      label: "ماكينة الايسكريم",
    },
    {
      key: "3",
      label: "معدات الوجبات الخفيفة",
    },
    {
      key: "4",
      label: "معدات المطبخ",
    },
    {
      key: "5",
      label: "معدات المطبخ",
    },
  ];
  const items = [
    {
      label: "Bakery Equipment",
      key: "0",
      children: [
        {
          key: "g1",
          type: "group",
          children: [
            { key: "1", label: "Option 1" },
            { key: "2", label: "Option 2" },
            { key: "3", label: "Option 3" },
            { key: "4", label: "Option 4" },
            { key: "5", label: "Option 5" },
          ],
        },
      ],
    },
    {
      label: "Coffee & Bar Equipment",
      key: "1",
      children: [
        {
          key: "g1",
          type: "group",
          children: [
            { key: "6", label: "Option 1" },
            { key: "7", label: "Option 2" },
            { key: "8", label: "Option 3" },
            { key: "9", label: "Option 4" },
            { key: "10", label: "Option 5" },
          ],
        },
      ],
    },
    {
      label: "Cooking Equipment",
      key: "2",
      children: [
        {
          key: "g1",
          type: "group",
          children: [
            { key: "11", label: "Option 1" },
            { key: "12", label: "Option 2" },
            { key: "13", label: "Option 3" },
            { key: "14", label: "Option 4" },
            { key: "15", label: "Option 5" },
          ],
        },
      ],
    },
    {
      label: "Dishwashers",
      key: "16",
    },
    {
      label: "Fabrication",
      key: "17",
    },
    {
      label: "Ice Cream Machines",
      key: "18",
    },
    {
      label: "Ice Machines",
      key: "19",
    },
    {
      label: "Laundry Equipment",
      key: "20",
    },
    {
      label: "Meat Mincer",
      key: "21",
    },
    {
      label: "Refriferation",
      key: "22",
    },
    {
      label: "Snacks Equipment",
      key: "23",
    },
    {
      label: "Vegetables Prepration",
      key: "24",
    },
  ];
  const searchItems = [
    {
      label: "Bakery Equipment",
      key: "0",
    },
    {
      label: "Coffee & Bar Equipment",
      key: "1",
    },
    {
      label: "Cooking Equipment",
      key: "2",
    },
    {
      label: "Dishwashers",
      key: "3",
    },
    {
      label: "Fabrication",
      key: "4",
    },
    {
      label: "Ice Cream Machines",
      key: "5",
    },
    {
      label: "Ice Machines",
      key: "6",
    },
    {
      label: "Laundry Equipment",
      key: "7",
    },
    {
      label: "Meat Mincer",
      key: "8",
    },
    {
      label: "Refriferation",
      key: "9",
    },
    {
      label: "Snacks Equipment",
      key: "10",
    },
    {
      label: "Vegetables Prepration",
      key: "11",
    },
  ];
  const laundry = [
    {
      label: "Coffee & Bar Equipment",
      key: "1",
    },
    {
      label: "Cooking Equipment",
      key: "2",
    },
    {
      label: "Dishwashers",
      key: "3",
    },
  ];

  const categoryItems = CATEGORIES.map((cat) => ({
    key: String(cat.id),
    label: cat.title,
  }));

  const [tabState, setTab] = useState(false);
  const [navDisplay, setNavDisplay] = useState(false);
  const { pathname } = useLocation();
  const [selectedData, setSelectedData] = useState(
    localStorage.getItem("SELECTED_ORDER")
      ? JSON.parse(localStorage.getItem("SELECTED_ORDER"))
      : []
  );
  const [whishLishProducts, setWishListProducts] = useState(
    JSON.parse(localStorage?.getItem("WISHLIST_PRODUCTS")) || []
  );
  const isLogin = localStorage.getItem(configs.STORAGE_TOKEN_NAME);

  const noLayoutRoutes = [
    "/login",
    "/register",
    "/forgetPassword",
    "/resetCode",
    "/resetPassword",
  ];

  const hideLayout = noLayoutRoutes.includes(pathname);

  return (
    <section>
      <div className="address-bar">
        <div className="address">
          <h2>diwaner@eim.ae</h2>
          <h2>+971 6 5468 4564</h2>
          <h2>+971 6 5468 4564</h2>
          <h2>Jeddah:Al Ghamdi, Al Andalus, Riyadh</h2>
        </div>

        <div className="flex gap-2 items-center">
          <FaFacebookF />
          <FaLinkedinIn />
        </div>
      </div>

      <header>
        <Link className="hidden lg:flex" to="/">
          <img
            src={
              "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744031432/EQUIPMENT_edewxx.png"
            }
            alt=""
          />
        </Link>

        <div className="search">
          <IoSearchOutline />
          <div className="category">
            <Dropdown
              menu={{ items: searchItems }}
              trigger={["click"]}
              className="w-[150px] text-(--del-price-color)"
            >
              <Space>
                <IoChevronDownOutline size={16} />
                اختار التصنيف
              </Space>
            </Dropdown>
          </div>
          <input type="text" placeholder="ابحث عن المنتجات" />
        </div>
        {
          // <button className="sm-btn !bg-[#0d2b25]">
          //   لديك مشروع؟ تحدث معنا
          // </button>
        }
        <div className="main-btns">
          {isLogin && (
            <>
              <Link to="/payment_processed">
                <IoCartOutline />
                <span>{selectedData?.length}</span>
              </Link>
              <Link to="/account/favorite-items">
                <IoHeartOutline />
                <span>{whishLishProducts?.length}</span>
              </Link>
              <div>
                <IoShuffleOutline />
                <span>0</span>
              </div>
            </>
          )}
          {isLogin ? (
            <Link to="/account">
              <IoPersonOutline />
            </Link>
          ) : (
            <Link to="/login">
              <IoPersonOutline />
            </Link>
          )}
        </div>

        <div className="flex items-center lg:hidden">
          <Link className="" to="/">
            <img
              className="object-contain w-[60px] sm:w-[80px] md:w-[100px]"
              src={
                "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744031432/EQUIPMENT_edewxx.png"
              }
              alt=""
            />
          </Link>
          <IoMenuSharp
            className="menu-ico"
            onClick={() => {
              setNavDisplay(true);
            }}
          />
        </div>
        {navDisplay ? (
          <div className="layer">
            <div className="menu-content">
              <IoClose
                onClick={() => {
                  setNavDisplay(false);
                }}
              />
              <div className="menu-search">
                <IoSearchOutline />
                <input type="text" placeholder="ابحث عن المنتجات" />
              </div>
              <div className="tabs">
                <button
                  className={`${tabState ? "active" : ""}`}
                  onClick={() => {
                    setTab(!tabState);
                  }}
                >
                  التصنيفات
                </button>
                <button
                  className={`${tabState ? "" : "active"}`}
                  onClick={() => {
                    setTab(!tabState);
                  }}
                >
                  القائمة
                </button>
              </div>
              {tabState ? (
                <ul>
                  <Menu
                    className="!bg-transparent"
                    mode="inline"
                    items={categoryItems}
                  />
                </ul>
              ) : (
                <ul className="px-2 flex flex-col gap-2">
                  <li>
                    <Link to="/">الرئيسية</Link>
                  </li>
                  <li>
                    <Link to="/products">المنتجات</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">تواصل معنا</Link>
                  </li>
                  <li>
                    <Link to={"/about-us"}>حولنا</Link>
                  </li>
                  <button className="bg-[#4e4228] w-fit text-white p-2 rounded-md flex justify-center items-center">
                    <Link to="/quotations">طلب عرض أسعار</Link>
                  </button>
                </ul>
              )}
            </div>
          </div>
        ) : null}
      </header>

      <div className="nav-list">
        <Dropdown
          menu={{ items: categoryItems }}
          className="bg-(--main-color) text-(--main-bgColor) h-12 w-75 !flex justify-around !items-center cursor-pointer"
        >
          <Space>
            <p className="flex gap-3 items-center">
              <IoMenuSharp /> تصفح التصنيفات
            </p>
            <IoChevronDownOutline />
          </Space>
        </Dropdown>
        <Link to="/">الرئيسية</Link>
        <Link to="/products">المنتجات</Link>

        <Link to="/contact-us">تواصل معنا</Link>
        <Link to="/about-us">حولنا</Link>
        <Dropdown menu={{ items: laundry }} className="cursor-pointer">
          <Space>
            معدات المغسلة
            <IoChevronDownOutline />
          </Space>
        </Dropdown>
        <div>
          <Dropdown menu={{ items }} className="cursor-pointer">
            <Space>
              معدات المطبخ
              <IoChevronDownOutline />
            </Space>
          </Dropdown>
        </div>
        <button>
          <Link to="/quotations">طلب عرض أسعار</Link>
        </button>
      </div>
    </section>
  );
}
