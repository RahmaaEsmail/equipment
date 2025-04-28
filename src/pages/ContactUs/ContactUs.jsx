import React from "react";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const ContactUs = () => {
  const data = [
    {
      id: 1,
      title: "الصفحه الرئيسية",
      route: "/",
    },
    {
      id: 2,
      title: "تواصل معنا",
      route: "/contact-us",
    },
  ];
  return (
    <div className="mx-4 md:!mx-8">
      <BreadCrumb data={data} />
      <div className="border-[.1px] p-[15px] rounded-md border-gray-300">
        <div className="w-[100%] ">
          <h1 className="text-[23px] md:text-[30px] p-[10px] font-bold">
            {" "}
            هل لم تجد ما كنت تبحث عنه؟
          </h1>
          <p className=" px-[10px]">تصفح جميع مقالات مركز المساعدة لدينا</p>
        </div>
        <div className="flex !flex-wrap md:!flex-nowrap justify-between">
          <div className="w-full md:w-[30%] p-[20px_10px] ">
            <h1 className="text-[20px] md:text-[25px] font-bold p-[10px] border-b-[.1px] border-gray-300">
              {" "}
              نقاط الاتصال 📍
            </h1>
            <span className="py-[5px] block">
              <p className="font-bold text-[18px] md:text-[20px]">
                🇺🇸 Equpement– الولايات المتحدة
              </p>
              <p className="w-full md:w-[90%] text-[#9a7936] font-bold  ">
                11350 McCormick Rd, EP III, Suite 200,Hunt Valley, MD 21031
              </p>
            </span>
            <span className="py-[5px] block">
              <p className="font-bold text-[20px]">المعلومات والمبيعات:</p>
              <p
                onClick={() =>
                  (window.location.href = `mailto:sales@Equipment.com`)
                }
                className="text-[#9a7936] font-bold cursor-pointer"
              >
                sales@Equipment.com
              </p>
            </span>
            <span className="py-[5px] block">
              <p className="font-bold text-[20px]">الدعم الفني:</p>
              <p
                onClick={() =>
                  (window.location.href = `mailto:support@Equipment.com`)
                }
                className="text-[#9a7936] font-bold cursor-pointer"
              >
                support@Equipment.com
              </p>
            </span>
            <span className="py-[5px] block">
              <p className="font-bold text-[20px]">التحقق من التوظيف:</p>
              <p
                onClick={() =>
                  (window.location.href = `mailto:hr@Equipment.com`)
                }
                className="text-[#9a7936] font-bold cursor-pointer"
              >
                hr@Equipment.com
              </p>
            </span>
            <h1 className="text-[20px] md:text-[25px] font-bold p-[10px] border-b-[.1px] border-gray-300 ">
              مكاتبنا حول العالم 🌍
            </h1>
            <span className="py-[5px] block">
              <p className="font-bold text-[18px] md:text-[20px]">كندا :</p>
              <p className="text-[#9a7936] w-full md:w-[90%] font-bold cursor-pointer">
                5333 Avenue Casgrain #1201,Montréal, QC H2T 1X3
              </p>
            </span>
            <span className="py-[5px] block">
              <p className="font-bold text-[18px] md:text-[20px]">ألمانيا :</p>
              <p className="text-[#9a7936] w-full md:w-[90%] font-bold cursor-pointer">
                Neue Schönhauser Str. 3-5, 10178 Berlin
              </p>
            </span>
            <span className="py-[5px] block">
              <p className="font-bold text-[18px] md:text-[20px]">فرنسا :</p>
              <p className="text-[#9a7936] w-full md:w-[90%] font-bold cursor-pointer">
                266 Place Ernest Granier, 34000 Montpellier
              </p>
            </span>
          </div>
          <div className="w-full md:w-[65%]  p-[20px_10px]">
            <h1 className="text-[20px] md:text-[25px] font-bold p-[10px] border-b-[.1px] border-gray-300">
              {" "}
              لا زلت بحاجة إلى مساعدة؟ 🙋‍♀️
            </h1>
            <span className="pt-[20px]  w-[100%] flex flex-col gap-[15px] ">
              <p className="font-bold">
                بريدك الإلكتروني (حتى نتمكن من الرد عليك)
              </p>
              <input
                className="block w-[100%] p-[5px_10px] outline-none border-[.1px] border-gray-300 rounded-[5px] "
                type="text"
                placeholder="Exampel@Equpement.com"
              />
            </span>
            <span className="pt-[20px]  w-[100%] flex flex-col gap-[15px] ">
              <p className="font-bold">الموضوع</p>
              <input
                className="block w-[100%] p-[5px_10px] outline-none border-[.1px] border-gray-300 rounded-[5px] "
                type="text"
                placeholder="دعنا نعرف ماهو موضوع المشكله"
              />
            </span>
            <span className="pt-[20px]  w-[100%] flex flex-col gap-[15px] ">
              <p className="font-bold">رسالتك</p>
              <textarea
                className="block w-[100%] p-[5px_10px] outline-none border-[.1px] border-gray-300 rounded-[5px] "
                type="text"
                placeholder="اترك رسالتك هنا...."
              ></textarea>
            </span>
            <span className="pt-[20px]  w-[100%] flex  gap-[5px] ">
              <input type="checkbox" className="border-gray-300" />
              <p className="font-bold">
                بالنقر على زر الإرسال، فإنك تؤكد أنك قرأت ووافقت على شروط الخدمة
                وبيان الخصوصية الخاصين بنا.
              </p>
            </span>
            <span className="w-[100%] flex justify-end ">
              <button className="p-[8px_30px] bg-[#9a7936] text-white font-bold rounded-[10px] cursor-pointer ">
                ارسال
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
