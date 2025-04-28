import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgetPasswordPage = () => {

  const navigate = useNavigate()


  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">استعادة كلمة المرور</h1>
          <p className="text-gray-600 mt-2">
            أدخل بريدك الإلكتروني وسنرسل لك  كود تعيين كلمة المرور
          </p>
        </div>

        <form>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-main-textColor"
              >
                البريد الإلكتروني
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main-textColor focus:border-main-textColor transition"
                  placeholder="بريدك الإلكتروني"
                />
              </div>
            </div>

            <div>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  navigate("/resetCode")
                }}
                type="submit"
                className="w-full cursor-pointer flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main-textColor hover:bg-main-textColorDarker transition"
              >
                إرسال كود الاستعادة
              </button>
            </div>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-sm text-blue-600 hover:text-blue-500 font-medium"
          >
            الرجوع لتسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
