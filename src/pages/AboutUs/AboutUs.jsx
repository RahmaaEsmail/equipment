import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import AbouFbanner from "../../components/AboutUs/AbouFbanner";
import AboutOurApp from "../../components/AboutUs/AboutOurApp";
import AboutMe from "../../components/AboutUs/AboutMe";
import Experiancesec from "../../components/AboutUs/Experiancesec";
import OurPartiners from "../../components/AboutUs/OurPartiners";

export const AboutUs = () => {
  const data = [
    {
      id: 1,
      title: "الصفحه الرئيسية",
      route: "/",
    },
    {
      id: 2,
      title: "حولنا",
      route: "/about-us",
    },
  ];
  return (
    <div className="mx-4 sm:!mx-8 bg-white p-[20px] rounded-md ">
      <BreadCrumb data={data} />
      <AbouFbanner />
      <AboutOurApp />
      <AboutMe />
      <Experiancesec />
      <OurPartiners />
    </div>
  );
};
