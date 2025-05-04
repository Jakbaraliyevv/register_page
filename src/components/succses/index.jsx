import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
function SuccsesComponents() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full flex flex-col items-center justify-center gap-4">
        <div className="w-[40px] h-[40px] ">
          <div className="bg-green-100  w-full h-full  rounded-full  ">
            <CheckOutlined className="text-green-600 w-full h-full flex items-center justify-center" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Ro'yxatdan o'tish muvaffaqiyatli yakunlandi!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sizning arizangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Ortga qaytish
        </Button>
      </div>
    </div>
  );
}

export default SuccsesComponents;
