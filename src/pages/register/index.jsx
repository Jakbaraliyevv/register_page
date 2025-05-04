import React from "react";
import FormComponents from "../../components/form";

function Home() {
  return (
    <div className="w-[70%] m-auto flex flex-col gap-[25px] mt-[20px] max-[768px]:w-[80%] max-[550px]:w-[90%] max-[450px]:w-[95%]">
      <div className="flex items-center justify-center flex-col gap-[4px]">
        <h1 className="text-[25px] font-bold  text-gray-800 ">
          Ro'yxatdan o'tish
        </h1>
        <p className="text-gray-600 max-[450px]:text-[14px]">
          Iltimos, barcha ma'lumotlarni to'g'ri va to'liq kiriting
        </p>
      </div>
      <div>
        <FormComponents />
      </div>
    </div>
  );
}

export default Home;
