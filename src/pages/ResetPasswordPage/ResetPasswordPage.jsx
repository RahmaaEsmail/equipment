import React, { useState } from "react";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirm) {
      message.error("من فضلك أدخل كلمة المرور وتأكيدها");
      return;
    }
    if (password !== confirm) {
      message.error("كلمتا المرور غير متطابقتين");
      return;
    }

    // هنا ممكن تبعت الطلب للسيرفر
    message.success("تم تغيير كلمة المرور بنجاح");
  };

  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">إعادة تعيين كلمة المرور</h1>
          <p className="text-gray-600 mt-2">أدخل كلمة المرور الجديدة وأكدها</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1 text-main-textColor transition"
            >
              كلمة المرور الجديدة
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main-textColor focus:border-main-textColor transition"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirm"
              className="block text-sm font-medium mb-1 text-main-textColor"
            >
              تأكيد كلمة المرور
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-main-textColor focus:border-main-textColor transition"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            type="submit"
            className="w-full py-2 px-4 bg-main-textColor hover:bg-main-textColorDarker text-white text-sm font-medium rounded-md transition"
          >
            تعيين كلمة المرور
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
          to={"/login"}
            href="#"
            className="text-sm text-blue-600 hover:underline"
          >
            العودة لتسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
