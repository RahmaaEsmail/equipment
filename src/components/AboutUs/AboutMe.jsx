import React from "react";
import "./style.css";
import logo from "../../assets/EQUIPMENT.png";

const AboutMe = () => {
  const services = [
    {
      id: 1,
      title: "بيع المنتجات",
      description:
        "نقدم مجموعة واسعة من معدات المطبخ عالية الجودة، من أواني الطهي إلى الأجهزة المتطورة، لضمان أفضل تجربة لك.",
    },
    {
      id: 2,
      title: "تصميم المطابخ حسب الطلب",
      description:
        "يعمل خبراؤنا على تصميم مطبخ عملي وأنيق ومخصص ليناسب احتياجات منزلك أو مطعمك.",
    },
    {
      id: 3,
      title: "خدمات التركيب",
      description:
        "نوفر خدمات تركيب احترافية لجميع معدات المطبخ مع ضمان السلامة والكفاءة العالية.",
    },
    {
      id: 4,
      title: "الصيانة والإصلاح",
      description:
        "حافظ على تشغيل مطبخك بكفاءة مع خدماتنا الموثوقة للصيانة والإصلاح لجميع أنواع المعدات.",
    },
    {
      id: 5,
      title: "خدمات الاستشارات",
      description:
        "هل ترغب في ترقية مطبخك؟ يقدم مستشارونا نصائح وخبرات لمساعدتك على اختيار المعدات المناسبة.",
    },
    {
      id: 6,
      title: "طلبات الجملة للأعمال",
      description:
        "خصومات وعروض خاصة للطلبات الكبيرة للفنادق والمطاعم وشركات التموين.",
    },
  ];

  return (
    <div className="about_f_banner w-full flex flex-col lg:flex-row flex-wrap justify-between py-10 gap-8">
      {/* Company Name */}
      <div className="w-full flex justify-center">
        <span className="flex justify-center items-center flex-col md:flex-row gap-3 border border-[#9a7936] p-4 rounded-md">
          <p className="text-2xl font-bold">اسم الشركة:</p>
          <p className="text-2xl text-[#9a7936] font-bold">Equpement Store</p>
        </span>
      </div>

      {/* First 3 Services */}
<div className="flex flex-col sm:flex-row gap-2 items-center">
<div className="w-full sm:w-[90%] md:w-[30%] m-auto flex flex-col gap-4">
        {services.slice(0, 3).map((service, index) => (
          <span key={service.id} className="border border-[#9a7936] w-full block">
            <p className="bg-[#9a7936] p-2 font-bold text-white">{index + 1}</p>
            <div className="p-4">
              <p className="text-lg font-bold text-[#9a7936]">{service.title}</p>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          </span>
        ))}
      </div>

      {/* Logo */}
      <div className="w-full sm:w-[90%] md:w-[30%] m-auto flex justify-center">
        <img src={logo} alt="Logo" className="w-[300px] h-auto object-contain" />
      </div>

      {/* Remaining Services */}
      <div className="w-full  sm:w-[90%] md:w-[30%]  m-auto flex flex-col gap-4">
        {services.slice(3).map((service) => (
          <span key={service.id} className="border border-[#9a7936] w-full block">
            <p className="bg-[#9a7936] p-2 font-bold text-white">{service.id}</p>
            <div className="p-4">
              <p className="text-lg font-bold text-[#9a7936]">{service.title}</p>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          </span>
        ))}
      </div>
</div>
    </div>
  );
};

export default AboutMe;
