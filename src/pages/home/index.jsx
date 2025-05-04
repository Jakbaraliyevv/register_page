import React from "react";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  BulbOutlined,
  CalendarOutlined,
  EditOutlined,
  PlayCircleOutlined,
  SmileOutlined,
  TeamOutlined,
  TrophyOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import svg1 from "../../assets/svg1.svg";
import svg2 from "../../assets/svg2.svg";
import svg3 from "../../assets/svg3.svg";
import svg4 from "../../assets/svg4.svg";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Hero section */}
      <section className="py-8 md:py-12 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 md:px-6 py-2 bg-yellow-300 text-purple-800 font-bold rounded-full mb-4 md:mb-6 text-sm md:text-lg shadow-lg">
            🎉 BEPUL O'QUV OROMGOHI 🎉
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-yellow-300">Qiziq</span> kontentlar <br />
            qanday tayorlanar ekan?
          </h1>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-6 md:mb-8 max-w-2xl mx-auto">
            <p className="text-base md:text-xl font-medium">
              Milliy qadriyatlar asosida zamonaviy kontent yaratuvchilar uchun
              noyob imkoniyat!
            </p>
          </div>
          <Link to="/register">
            <Button
              onClick={() => navigate("/register")}
              type="primary"
              size="large"
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold h-10 md:h-14 px-6 md:px-10 rounded-full text-base md:text-lg shadow-lg border-0 w-full sm:w-auto"
              icon={<SmileOutlined />}
            >
              Ro'yxatdan o'tish
            </Button>
          </Link>
        </div>
      </section>

      {/* About section */}
      <section className="py-8 md:py-12 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-4 md:p-6 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold">Oromgoh haqida</h2>
              <p className="text-lg md:text-xl">
                2 kunlik qiziqarli mashg'ulotlar
              </p>
            </div>

            <div className="p-4 md:p-6 flex flex-col gap-8">
              {/* Date info */}
              <div className="flex items-center w-full text-end">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full ">
                  <p className="text-gray-600 text-base md:text-lg w-full">
                    📅 7-9 may kunlari
                  </p>
                </div>
              </div>

              {/* What we'll learn */}
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

      {/* For whom section */}
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

      {/* CTA section */}
      <section className="py-10 md:py-16 px-4 bg-gradient-to-b from-purple-600 to-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            O'rinlar soni cheklangan!
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8">
            Tezroq ro'yxatdan o'ting va qiziqarli oromgoh o'z o'rningizni band
            qiling!
          </p>
          <Link to="/register">
            <Button
              onClick={() => navigate("/register")}
              type="primary"
              size="large"
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold h-10 md:h-14 px-6 md:px-10 rounded-full text-base md:text-lg shadow-lg w-full sm:w-auto"
              icon={<TrophyOutlined />}
            >
              Men ham qatnashmoqchiman!
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
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
