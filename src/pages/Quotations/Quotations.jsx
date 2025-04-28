import React, { useEffect, useState } from "react";
import { CATEGORIES } from "../../components/HomePage/FoodCategories/FoodCategories";
import { FaChevronDown, FaRegTrashCan, FaTrash } from "react-icons/fa6";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { toast } from "react-toastify";

const TABS = [
  { id: 1, name: "عادي" },
  { id: 2, name: "تاجر" },
];

export default function Quotations() {
  const [activeTab, setActiveTab] = useState(1);
  const [openCategory, setOpenCategory] = useState(0);
  const [selectedData, setSelectedData] = useState(
    localStorage.getItem("SELECTED_ORDER")
      ? JSON.parse(localStorage.getItem("SELECTED_ORDER"))
      : []
  );

  function handleIncreaseOrder(id) {
    setSelectedData((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function handleDecreaseOrder(id) {
    setSelectedData((prev) =>
      prev.map((item) =>
        item.id == id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  }

  function handleCreateQuotation() {
    console.log("hello world")
     toast.success("تم إرسال الطلب بنجاح")
     localStorage.setItem("SELECTED_ORDER", JSON.stringify(selectedData));
  }

  useEffect(() => {
    localStorage.setItem("SELECTED_ORDER", JSON.stringify(selectedData));
  }, []);

  

  return (
    <div className="px-4 md:!px-8   overflow-hidden">
      <BreadCrumb
        data={[
          { id: 1, title: "الصفحه الرئيسية", route: "/" },
          {
            id: 2,
            title: "عروض السعر",
          },
        ]}
      />

      <div className="flex  my-5">
        <div className="flex gap-3  border-b border-b-gray-300 items-center w-full">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2  font-medium text-md transition-all duration-200 ${
                activeTab === tab.id
                  ? "border-b-2 border-b-(--main-color)  text-(--main-color)"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <div className=" rounded-md h-auto md:h-[430px]  grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="overflow-y-auto pb-4 pe-0 md:pe-6">
          <h3 className="font-bold text-xl text-(--main-color)">الفئات</h3>

          <div className="flex flex-col gap-2 my-4 w-full">
            {CATEGORIES?.map((item) => (
              <>
                <div
                  onClick={() =>
                    setOpenCategory((openCategory) =>
                      openCategory == item?.id ? null : item?.id
                    )
                  }
                  className="flex   cursor-pointer  text-(--main-color) font-bold  p-3  rounded-md  border border-(--main-color) justify-between gap-2 items-center"
                >
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-12 h-12 object-cover rounded-md"
                      src={item?.image}
                    />
                    <p>{item?.title}</p>
                  </div>
                  <FaChevronDown />
                </div>

                {openCategory == item?.id &&
                  item?.products?.map((product) => (
                    <div className="flex gap-3 justify-between bg-white items-center border border-(--main-color) p-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <img
                          src={product?.img}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex flex-col">
                          <p className="font-medium text-black">
                            {product?.name}
                          </p>
                          <p className="text-gray-600 font-light">
                            {product?.desc}
                          </p>
                        </div>
                      </div>

                      <div class="me-4">
                        <input
                          onChange={(e) => {
                            if (e.target.checked) {
                              // تأكد إنه مش موجود بالفعل قبل الإضافة
                              const exists = selectedData.some(
                                (prod) => prod.id === product.id
                              );
                              if (!exists) {
                                setSelectedData([
                                  ...selectedData,
                                  {
                                    ...product,
                                    quantity: 1,
                                    category: item?.title,
                                  },
                                ]);
                              }
                            } else {
                              // إلغاء التحديد → حذف من selectedData
                              setSelectedData((prev) =>
                                prev.filter((prod) => prod.id !== product.id)
                              );
                            }
                          }}
                          checked={selectedData?.some(
                            (prod) => prod?.id == product?.id
                          )}
                          id="red-checkbox"
                          type="checkbox"
                          className="w-5 h-5 accent-[var(--main-color)] bg-gray-100 border-gray-300 !rounded-lg"
                        />
                      </div>
                    </div>
                  ))}
              </>
            ))}
          </div>
        </div>

        <div className="h-full">
          <h3 className="font-bold text-xl text-(--main-color)">
            العناصر المختاره
          </h3>

          <div>
            {selectedData?.length ? (
              <>
                <div className="flex flex-col  pe-0 md:pe-4 mt-4 md:h-[180px] overflow-y-auto gap-2">
                  {selectedData?.map(
                    (item) =>
                      item?.quantity != 0 && (
                        <div className="border  border-(--main-color) p-2 rounded-lg">
                          <FaRegTrashCan
                            className="text-gray-400 ms-auto"
                            onClick={() => {
                              setSelectedData((prev) =>
                                prev?.filter((prod) => prod?.id != item?.id)
                              );
                            }}
                          />

                          <div className="flex justify-between items-center">
                            <div className="flex gap-2 pb-2 items-center">
                              <img
                                src={item?.img}
                                className="w-14 h-14 rounded-lg object-cover"
                              />
                              <div className="flex flex-col">
                                <p className="font-medium text-black">
                                  {item?.name}
                                </p>
                                <p className="text-gray-600 font-light">
                                  {item?.desc}
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-2 items-center justify-center pt-2">
                              <p
                                onClick={() => handleIncreaseOrder(item?.id)}
                                className="bg-[var(--main-color)] text-white w-6 h-6 rounded-md flex justify-center items-center cursor-pointer"
                              >
                                +
                              </p>
                              <p className="border border-[var(--main-color)] w-12 h-7 rounded-md text-[var(--main-color)] flex justify-center items-center">
                                {item?.quantity}
                              </p>
                              <p
                                onClick={() => handleDecreaseOrder(item?.id)}
                                className="bg-[var(--main-color)] w-6 h-6 rounded-md text-white flex justify-center items-center cursor-pointer"
                              >
                                -
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </>
            ) : (
              <p>No Data Available</p>
            )}

            <div className="flex flex-col gap-2 items-center mt-5">
              <h3 className="text-right me-auto">ملاحظات اضافيه</h3>
              <textarea
                placeholder="...اضف ملاحظات (اختياري)"
                className="me-auto w-full border outline-none focus:border-(--main-color) border-(--main-color) p-3 rounded-lg"
              ></textarea>
            </div>

            <button onClick={handleCreateQuotation} className="bg-(--main-color) text-white w-full flex justify-center items-center p-3 my-5 rounded-md">
              إرسال الطلب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
