import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";



export const CATEGORIES = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744032242/2_j5sbfi.png",
    icon: "https://bouri.com/media/catalog/category/food.png",
    title: "معدات المخابز",
    products: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745301788/download__1_-removebg-preview_nwftrv.png",
        name: "فرن تجاري",
        desc: "فرن عالي السعه للاستخدام التجاري مع ميزات متقدمة للتحكم"
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745301788/download__2_-removebg-preview_yq9zpk.png",
        name: "عجانة 30 لتر",
        desc: "عجانة قوية لعجن العجين بكميات كبيرة، مثالية للمخابز."
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745301884/images-removebg-preview_ytssce.png",
        name: "ماكينة تشكيل العجين",
        desc: "تُستخدم لتشكيل العجين بشكل آلي لتوفير الوقت والجهد."
      },

    ]
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744032249/1_oe8qxn.png",
    icon: "https://www.aldiwankitchen.com/wp-content/uploads/2024/03/Untitled-design-2-1.web",
    title: "البيتزا",
    products: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745302011/download__3_-removebg-preview_1_itf3wr.png",
        name: "فرن بيتزا حجري",
        desc: "يوفر توزيع حرارة ممتاز للحصول على بيتزا مقرمشة مثالية."
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745302011/download__4_-removebg-preview_boh3pz.png",
        name: "عجانة بيتزا",
        desc: "مصممة خصيصاً لتحضير عجين البيتزا بكفاءة عالية."
      },

    ]
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744032228/3_se7lh0.png",
    icon: "https://www.aldiwankitchen.com/wp-content/uploads/2024/03/Untitled-design-1-1.webp",
    title: "المطعم",
    products: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745302147/download__5_-removebg-preview_s0gohl.png",
        name: "طاولة تسخين",
        desc: "للحفاظ على الأطعمة ساخنة لفترات طويلة أثناء التقديم."
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745302162/download__6_-removebg-preview_vyydaz.png",
        name: "شواية كهربائية",
        desc: "شواية عالية الجودة لتحضير اللحوم والخضار بسرعة واحترافية."
      },
    ]
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744032244/8_ecpbyw.png",
    title: "البار",
    icon: "https://www.aldiwankitchen.com/wp-content/uploads/2024/03/Untitled-design-3-1.webp",
    products: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745302368/download__7_-removebg-preview_hoprhy.png",
        name: "خلاط كوكتيل",
        desc: "خلاط عالي السرعة لتحضير العصائر والكوكتيلات."
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1745302376/download__8_-removebg-preview_ov3wpj.png",
        name: "ماكينة ثلج",
        desc: "ماكينة مخصصة لإنتاج الثلج لاستخدامات البار والمطاعم."
      },
    ]
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744032247/4_ndqhd5.png",
    title: "حلويات",
    icon: "https://www.aldiwankitchen.com/wp-content/uploads/2024/03/Group-1620.webp",
    products: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1713790300/choco-wrapper.png",
        name: "ماكينة تغليف شوكولاتة",
        desc: "تُستخدم لتغليف قطع الشوكولاتة بطريقة احترافية."
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1713790317/cake-mold.png",
        name: "ماكينة تشكيل كيك",
        desc: "أداة مثالية لصناعة قوالب الكيك بأشكال مختلفة."
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1713790334/sweets-fridge.png",
        name: "ثلاجة عرض حلويات",
        desc: "ثلاجة زجاجية لحفظ الحلويات بشكل جذاب وبارد."
      }
    ]
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1744032230/5_mpajbl.png",
    title: "جزاره",
    icon: "https://www.aldiwankitchen.com/wp-content/uploads/2024/03/Group-1622.webp",
    products: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1713790351/meat-grinder.png",
        name: "مفرمة لحم كهربائية",
        desc: "لتحضير اللحم المفروم بسرعة ودقة."
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1713790368/bone-saw.png",
        name: "منشار عظم كهربائي",
        desc: "يُستخدم لتقطيع العظام واللحوم الكبيرة بسهولة."
      },
      {
        id: 3,
        img: "https://res.cloudinary.com/dbz6ebekj/image/upload/v1713790385/meat-fridge.png",
        name: "ثلاجة تخزين لحوم",
        desc: "ثلاجة مخصصة لحفظ اللحوم بدرجات حرارة منخفضة جداً."
      }
    ]
  }
];


export default function FoodCategories() {
  const navigate = useNavigate();
  return (
    <motion.div
    initial={{y:200, opacity:0}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.8,ease:"easeOut"}}
    className="my-11">
     <div className="flex justify-between items-center">
     <h3 className=" font-semibold !text-2xl mb-5">الفئة حسب نوع الطعام</h3>
     <a href="" className="text-(--main-color) font-semibold text-md">إظهار المزيد</a>
     </div>
      <Swiper spaceBetween={50} slidesPerView={6}>
        {CATEGORIES?.map((item) => (
          <SwiperSlide onClick={() => navigate(`/products/${item?.id}`)} key={item?.id}>
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-[150px]  h-[150px] rounded-full"
                src={item?.image}
              />
              <p className="font-semibold mt-3 !text-lg text-center">
                {item?.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
