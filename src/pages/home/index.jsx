import React from "react";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CalendarOutlined } from "@ant-design/icons";

import svg1 from "../../assets/svg1.svg";
import svg2 from "../../assets/svg2.svg";
import svg3 from "../../assets/svg3.svg";
import svg4 from "../../assets/svg4.svg";
import tg from "../../assets/telegram.webp";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <section className="py-8 md:py-12 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-20 w-32 h-32 bg-yellow-300 rounded-full filter blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400 rounded-full filter blur-xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 md:px-6 py-2 bg-yellow-300 text-purple-800 font-bold rounded-full mb-4 md:mb-6 text-sm md:text-lg shadow-lg max-[420px]:flex max-[380px]:flex-col max-[380px]:gap-2">
            <div className="flex items-center">
              <CalendarOutlined className="mr-2" />

              <span>7-9 MAY, 2025</span>
              <span className="mx-2 block max-[380px]:hidden">•</span>
            </div>
            <span>🎉O'QUV OROMGOHI 🎉</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-yellow-300">Ro'yxatdan </span>
            o'tish yakunlandi. Natijalarni Digital Generation Uzbekistan
            telegram kanalida e'lon qilinadi.
          </h1>

          <Link to={"https://t.me/digitalgeneration_uz"}>
            <Button
              type="primary"
              size="large"
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold h-10 md:h-14 px-6 md:px-10 rounded-full text-base md:text-lg shadow-lg border-0 w-full sm:w-auto transform hover:scale-105 transition-transform duration-300"
            >
              <img className="w-[20px]" src={tg} alt="" />
              Telegram
            </Button>
          </Link>

          <h1 className="text-yellow-300 text-2xl sm:text-4xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight mt-4">
            E'tiboringiz uchun raxmat.
          </h1>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4">
        <div className="w-full max-w-[90%] mx-auto">
          <div className=" overflow-hidden">
            <div className="p-4 md:p-6 flex flex-col gap-8">
              <div className="flex flex-col">
                <div className="flex items-start mb-4"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-2">
                  {[
                    {
                      image: svg1,
                      text: "Milliy o'yinlarga asoslangan multimedia mahsulotlarini yaratish",
                    },
                    {
                      image: svg2,
                      text: "Animatsion video tayyorlash: senariy, dizayn, ovoz va montaj",
                    },
                    {
                      image: svg3,
                      text: "Zamonaviy va milliy ruhdagi kreativ kontent ishlab chiqish texnikalari",
                    },
                    {
                      image: svg4,
                      text: "Amaliy mashg'ulotlar va tajribali mutaxassislar bilan muloqot",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="shadow-blue-200 shadow-md rounded-lg overflow-hidden flex flex-col h-full"
                    >
                      <div className="w-full h-40 flex items-center justify-center bg-gray-50 p-4">
                        <img
                          src={item.image}
                          className="max-h-full max-w-full object-contain"
                          alt=""
                        />
                      </div>
                      <p className="p-3 text-center flex-grow flex items-center justify-center">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-6 md:mb-8">
            Kimlar uchun?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10">
            {[
              { icon: "🎨", text: "Dizayner va animatorlar" },
              { icon: "📷", text: "Fotograflar" },
              { icon: "🎥", text: "Kontent yaratuvchilar" },
              { icon: "🏆", text: "Talabalar va ijodkor yoshlar" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-3 md:p-4 shadow-md hover:shadow-lg transition"
              >
                <div className="text-3xl md:text-4xl mb-2">{item.icon}</div>
                <div className="font-bold text-gray-800 text-sm sm:text-base">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6 md:py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4 md:space-x-6 mb-4 md:mb-6">
            {["📱", "📷", "🎬"].map((icon, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-lg md:text-xl"
              >
                {icon}
              </div>
            ))}
          </div>
          <p className="text-base md:text-lg">
            "Milliy Kontent Oromgoh" - Bolalar uchun ijodiy dastur
          </p>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            © {new Date().getFullYear()} Barcha huquqlar himoyalangan
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
