import React, { useState } from "react";
import { Link, replace, useNavigate } from "react-router-dom";
import { configs } from "../../configs";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData , setLoginData] = useState({
    email:"",
    password:"",
  })

  function handleLogin() {
    localStorage.setItem(configs.STORAGE_TOKEN_NAME , JSON.stringify(loginData))
    window.location.href ="/"
  }
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">أهلاً بعودتك</h1>
          <p className="text-gray-600 mt-2">
            من فضلك أدخل بياناتك لتسجيل الدخول
          </p>
        </div>

        <form>
          <div className="space-y-4 ">
            {/* حقل البريد الإلكتروني */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium  mb-1 text-main-textColor"
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
                onChange={(e) =>setLoginData({...loginData , email :e.target?.value})}
                value={loginData?.email}
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

            {/* حقل كلمة المرور */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium  text-main-textColor"
                >
                  كلمة المرور
                </label>
                <Link to={"/forgetPassword"} href="#" className="text-xs font-medium text-third   ">
                  هل نسيت كلمة المرور؟
                </Link>
              </div>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  onChange={(e) =>setLoginData({...loginData, password : e.target?.value})}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main-textColor focus:border-main-textColor transition"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>
            {/* زر إنشاء الحساب */}
            {/* <div className="mt-6">
            <button
              type="submit"
              className="w-full cursor-pointer flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main-textColor hover:bg-main-textColorDarker transition"
            >
               تسجيل الدخول
            </button>
          </div> */}
        </form>

        {/* رابط إنشاء حساب جديد */}
        <div className="mt-6 text-center">
          <p className="text-sm  text-a7a">
            ليس لديك حساب؟
            <Link
              to="/register"
              className="font-medium text-main-textColor hover:text-main-textColorDarker transition  "
            >
              سجّل الآن
            </Link>
          </p>
        </div>

        <button onClick={handleLogin} className="mt-6 w-full bg-(--main-color) text-white p-2 rounded-md">تسجيل الدخول </button>

      </div>
    </div>
  );
};

export default LoginPage;
