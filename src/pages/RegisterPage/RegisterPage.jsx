import React from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
   const navigate = useNavigate();
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">إنشاء حساب جديد</h1>
          <p className="text-gray-600 mt-2">
            من فضلك أدخل بياناتك لإنشاء حسابك
          </p>
        </div>

        <form>
          <div className="space-y-4 ">
            {/* الاسم بالكامل */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium mb-1 text-main-textColor"
              >
                الاسم بالكامل
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="مثال: محمد أحمد"
              />
            </div>

            {/* البريد الإلكتروني */}
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
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="بريدك الإلكتروني"
                />
              </div>
            </div>

            {/* كلمة المرور */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-main-textColor"
              >
                كلمة المرور
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main-textColor focus:border-main-textColor transition"
                placeholder="••••••••"
              />
            </div>

            {/* تأكيد كلمة المرور */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-main-textColor"
              >
                تأكيد كلمة المرور
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main-textColor focus:border-main-textColor transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* زر إنشاء الحساب */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main-textColor hover:bg-main-textColorDarker transition"
            >
              إنشاء الحساب
            </button>
          </div>
        </form>

        {/* رابط تسجيل الدخول */}
        <div className="mt-6 text-center">
          <p className="text-sm text-a7a">
            لديك حساب بالفعل؟
            <Link
              to="/login"
              className="font-medium text-main-textColor hover:text-main-textColorDarker transition"
            >
              تسجيل الدخول
            </Link>
          </p>
        </div>

        <button onClick={() => navigate('/login')} className="mt-6 w-full bg-(--main-color) text-white p-2 rounded-md">إنشاء حساب</button>
      </div>
    </div>
  );
};

export default RegisterPage;
