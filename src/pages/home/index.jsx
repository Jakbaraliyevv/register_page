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
      <section className="py-12 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-yellow-300 text-purple-800 font-bold rounded-full mb-6 text-lg shadow-lg">
            🎉 BEPUL O'QUV OROMGOHI 🎉
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
        <div className="max-w-[80%] mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-6 text-white text-center">
              <h2 className="text-3xl font-bold">Oromgoh haqida</h2>
              <p className="text-xl">2 kunlik qiziqarli mashg'ulotlar</p>
            </div>

            <div className="p-6 w-full flex flex-col gap-[40px] md:grid-cols-2 ">
              <div className="flex items-center w-full">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <CalendarOutlined className="text-yellow-600 text-2xl" />
                </div>
                <div className="flex items-center justify-between w-full">
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
                <div className="flex flex-col gap-[40px]">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Nimalar o'rganamiz?
                  </h3>

                  <div className="flex items-center justify-between gap-[30px]">
                    <div className="shadow-blue-200 shadow-md h-[350px]">
                      <div>
                        <img src={svg1} className="w-full h-[50%]" alt="" />
                      </div>
                      <p className="  text-center">
                        Milliy o'yinlarga asoslangan multimedia mahsulotlarini
                        yaratish
                      </p>
                    </div>
                    <div className="shadow-blue-200 shadow-md h-[350px]">
                      <div>
                        <img src={svg2} className="w-full h-[50%]" alt="" />
                      </div>
                      <p className="p-2 text-center">
                        Animatsion video tayyorlash: senariy, dizayn, ovoz va
                        montaj
                      </p>
                    </div>
                    <div className="shadow-blue-200 shadow-md h-[350px]">
                      <div>
                        <img src={svg3} className="w-full h-[50%]" alt="" />
                      </div>
                      <p className="p-2 text-center">
                        Zamonaviy va milliy ruhdagi kreativ kontent ishlab
                        chiqish texnikalari
                      </p>
                    </div>

                    <div className="shadow-blue-200 shadow-md h-[350px]">
                      <div>
                        <img src={svg4} alt="" />
                      </div>
                      <p className="p-2 text-center">
                        Amaliy mashg'ulotlar va tajribali mutaxassislar bilan
                        muloqot
                      </p>
                    </div>
                  </div>
                  {/* <ul className="text-gray-600 text-lg space-y-2">
                    <li className="flex items-start gap-2">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src={svg1}
                        alt=""
                      />
                      Milliy o'yinlarga asoslangan multimedia mahsulotlarini
                      yaratish
                    </li>
                    <li className="flex items-start">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src={svg2}
                        alt=""
                      />
                      Animatsion video tayyorlash: senariy, dizayn, ovoz va
                      montaj
                    </li>
                    <li className="flex items-start">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src={svg3}
                        alt=""
                      />
                      Zamonaviy va milliy ruhdagi kreativ kontent ishlab chiqish
                      texnikalari
                    </li>
                    <li className="flex items-start">
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src={svg4}
                        alt=""
                      />
                      Amaliy mashg'ulotlar va tajribali mutaxassislar bilan
                      muloqot
                    </li>
                  </ul> */}
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
              { icon: "🎨", text: "Dizayner va animatorlar" },
              { icon: "📷", text: "Fotograflar" },
              { icon: "🎥", text: "Kontent yaratuvchilar" },
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
            Tezroq ro'yxatdan o'ting va qiziqarli oromgoh o'z o'rningizni band
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
            "Milliy Kontent Oromgoh" - Bolalar uchun ijodiy dastur
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
