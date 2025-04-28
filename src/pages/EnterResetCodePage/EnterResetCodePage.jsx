import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const EnterResetCodePage = () => {
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    console.log(e);
    setCode(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(code);
    if (code.length !== 6) {
      message.error("يجب إدخال كود مكون من 6 أرقام");
      return;
    }
    navigate("/resetPassword");
    // تابع التحقق من الكود هنا
    message.success("تم التحقق من الكود بنجاح");
  };

  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          أدخل كود الاستعادة
        </h1>
        <p className="text-gray-600 mb-6">
          تم إرسال الكود إلى بريدك الإلكتروني
        </p>
        <div dir="ltr" className="flex justify-center mb-4">
          <Input.OTP
            className="!border !border-main-textColor"
            rootClassName="!border !border-main-textColor"
            value={code}
            length={5}
            onChange={handleChange}
            formatter={(str) => str.toUpperCase()}
          />
        </div>

        <Button
          type="primary"
          block
          size="large"
          className="!mt-6 !bg-main-textColor  !hover:bg-main-textColorDarker"
          onClick={handleSubmit}
        >
          تأكيد الكود
        </Button>

        <div className="mt-4">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            إعادة إرسال الكود؟
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnterResetCodePage;
