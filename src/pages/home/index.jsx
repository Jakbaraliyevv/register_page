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

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <section className="py-12 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-yellow-300 text-purple-800 font-bold rounded-full mb-6 text-lg shadow-lg">
            🎉 BEPUL O'QUV LAGERI 🎉
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-yellow-300">Qiziq</span> kontentlar <br />
            qanday tayorlanar ekan?
          </h1>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-xl font-medium">
              Milliy qadriyatlar asosida zamonaviy kontent yaratuvchilar uchun
              noyob imkoniyat!
            </p>
          </div>
          <Link to="/register">
            <Button
              onClick={() => navigate("/register")}
              type="primary"
              size="large"
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold h-14 px-10 rounded-full text-lg shadow-lg border-0 max-[480px]:w-[80%]"
              icon={<SmileOutlined />}
            >
              Ro'yxatdan o'tish
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-6 text-white text-center">
              <h2 className="text-3xl font-bold">Lager haqida</h2>
              <p className="text-xl">3 kunlik qiziqarli mashg'ulotlar</p>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <CalendarOutlined className="text-yellow-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Qachon bo'ladi?
                  </h3>
                  <p className="text-gray-600 text-lg">📅 7-9 may kunlari</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <PlayCircleOutlined className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Nimalar o'rganamiz?
                  </h3>
                  <ul className="text-gray-600 text-lg space-y-2">
                    <li className="flex items-start">
                      <VideoCameraOutlined className="text-green-500 mr-2 mt-1" />
                      Milliy o'yinlarga asoslangan multimedia mahsulotlarini
                      yaratish
                    </li>
                    <li className="flex items-start">
                      <EditOutlined className="text-blue-500 mr-2 mt-1" />
                      Animatsion video tayyorlash: senariy, dizayn, ovoz va
                      montaj
                    </li>
                    <li className="flex items-start">
                      <BulbOutlined className="text-yellow-500 mr-2 mt-1" />
                      Zamonaviy va milliy ruhdagi kreativ kontent ishlab chiqish
                      texnikalari
                    </li>
                    <li className="flex items-start">
                      <TeamOutlined className="text-purple-500 mr-2 mt-1" />
                      Amaliy mashg'ulotlar va tajribali mutaxassislar bilan
                      muloqot
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-8">
            Kimlar uchun?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: "🎥", text: "Kontent yaratuvchilar" },
              { icon: "🎨", text: "Dizayner va animatorlar" },
              { icon: "📷", text: "Bloggerlar, jurnalistlar" },
              { icon: "🏆", text: "Talabalar va ijodkor yoshlar" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="font-bold text-gray-800">{item.text}</div>
              </div>
            ))}
          </div>

         
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-purple-600 to-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">O'rinlar soni cheklangan!</h2>
          <p className="text-xl mb-8">
            Tezroq ro'yxatdan o'ting va qiziqarli lagerda o'z o'rningizni band
            qiling!
          </p>
          <Link to="/register">
            <Button
              onClick={() => navigate("/register")}
              type="primary"
              size="large"
              className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold h-14 px-10 rounded-full text-lg shadow-lg max-[480px]:w-[90%] max-[480px]:w-[90%]"
              icon={<TrophyOutlined />}
            >
              Men ham qatnashmoqchiman!
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-6 mb-6">
            {["📱", "📷", "🎬"].map((icon, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center text-xl"
              >
                {icon}
              </div>
            ))}
          </div>
          <p className="text-lg">
            "Milliy Kontent Lager" - Bolalar uchun ijodiy dastur
          </p>
          <p className="text-gray-400 mt-2">
            © {new Date().getFullYear()} Barcha huquqlar himoyalangan
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
