import React from "react";
import "./style.css";

const OurPartiners = () => {
  const partners = [
    {
      id: 1,
      name: "Zwilling J.A. Henckels",
      logo: "https://res.cloudinary.com/dhgp9dzdt/image/upload/v1745669813/images_rasykf.jpg",
      website: "https://www.zwilling.com/",
    },
    {
      id: 2,
      name: "Gorenje",
      logo: "https://res.cloudinary.com/dhgp9dzdt/image/upload/v1745669642/360_F_225524228_BZ87xQGmiz78Z0zHtMYMyiB8vfyZOngP_ygvhw5.jpg",
      website: "https://www.gorenje.com/",
    },
    {
      id: 3,
      name: "KitchenAid",
      logo: "https://res.cloudinary.com/dhgp9dzdt/image/upload/v1745669738/images_lykncl.png",
      website: "https://www.kitchenaid.com/",
    },
    {
      id: 4,
      name: "Electrolux",
      logo: "https://res.cloudinary.com/dhgp9dzdt/image/upload/v1745669717/vector-logo-for-kitchen-appliances-dark-decorative-sign-board-with-illustration-of-variety-home-appliance-concept-with-unique-brush-lettering-for-wo-2F30WJC_yertba.jpg",
      website: "https://www.electrolux.com/",
    },
    {
      id: 5,
      name: "Whirlpool",
      logo: "https://res.cloudinary.com/dhgp9dzdt/image/upload/v1745669671/download_lq2cwp.png",
      website: "https://www.whirlpool.com/",
    },
  ];

  return (
    <>
      <div className="about_f_banner w-[100%] items-center  gap-7 flex-wrap md:!flex-nowrap flex justify-around bg-white  p-[20px] rounded-md  ">
        {partners.map((partiner) => {
          return (
            <span className="text-center">
              <img
                src={partiner?.logo}
                className="h-[100px] rounded-[24px]"
                alt=""
              />
              <p>{partiner?.name}</p>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default OurPartiners;
