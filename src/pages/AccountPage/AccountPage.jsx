import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import AccountSideNav from "../../components/AccountPage/AccountSideNav";
import ProfilePage from "./ProfilePage/ProfilePage";
import { Outlet, useLocation } from "react-router-dom";
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const AccountPage = () => {
  const [editModal, setEditModal] = useState(false);
  const pathname = useLocation();

  useEffect(() => {
    console.log(pathname?.pathname)
  },  [pathname])

  const data = [
    {
      id: 1,
      title: "الصفحة الرئيسية",
      route: "/",
    },
    {
      id: 2,
      title: "حسابي",
      route: "/account",
    },
    pathname && {
      id: 3,
      title: location.pathname.replace("/account/", "").replace(/-/g, " "),
    },
  ].filter(Boolean);
  
  return (

    <div className="mx-8">
    <BreadCrumb data={data} />
    <Row gutter={24} className=" my-5 ">
      <Col span={6}>
        <AccountSideNav />
      </Col>
      <Col span={18}>
      <Outlet />
      </Col>
    </Row>
    </div>
  );
};

export default AccountPage;
