import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import {
  BookOutlined,
  RocketOutlined,
  TeamOutlined,
  TrophyOutlined,
  StarOutlined,
  SafetyOutlined
} from "@ant-design/icons";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <RocketOutlined className="text-blue-600 text-3xl mr-2" />
            <h1 className="text-2xl font-bold text-blue-700">Yosh Inovatorlar</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#dastur" className="text-gray-700 hover:text-blue-600 font-medium">Dastur haqida</a>
            <a href="#imkoniyatlar" className="text-gray-700 hover:text-blue-600 font-medium">Imkoniyatlar</a>
            <a href="#savollar" className="text-gray-700 hover:text-blue-600 font-medium">Ko'p so'raladigan savollar</a>
          </nav>
          <Link to="/register">
            <Button 
              type="primary" 
              className="bg-blue-600 hover:bg-blue-700 font-medium rounded-lg"
            >
              Ro'yxatdan o'tish
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full opacity-20 translate-x-1/2 translate-y-1/4"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Yosh <span className="text-blue-600">inovatorlar</span> tanlovida o'z kelajagingizni yarating!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Bizning dasturimiz orqali o'z g'oyalaringizni rivojlantiring, 
                yangi bilimlar va ko'nikmalar orttiring, hamda kelajak kasb egalariga aylaning.
              </p>
              <div className="flex space-x-4">
                <Link to="/register">
                  <Button 
                    type="primary" 
                    size="large"
                    className="bg-blue-600 hover:bg-blue-700 font-bold text-lg h-14 px-8 rounded-lg flex items-center shadow-lg"
                  >
                    Ro'yxatdan o'tish
                  </Button>
                </Link>
                <a href="#dastur">
                  <Button 
                    size="large"
                    className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-lg h-14 px-8 rounded-lg flex items-center"
                  >
                    Batafsil ma'lumot
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-500 rounded-full flex items-center justify-center relative overflow-hidden shadow-xl">
                  <img 
                    src="/api/placeholder/500/500" 
                    alt="Bolalar innovatsiyada" 
                    className="w-60 h-60 md:w-76 md:h-76 object-cover rounded-full" 
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full p-4 shadow-lg">
                  <RocketOutlined className="text-white text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section id="dastur" className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Dastur <span className="text-blue-600">haqida</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border-l-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <BookOutlined className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Yangi bilimlar</h3>
              <p className="text-gray-600">
                Dasturimiz orqali zamonaviy texnologiyalar, innovatsion g'oyalar va yangi bilimlarni o'rganasiz.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border-l-4 border-green-500">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TeamOutlined className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ajoyib jamoa</h3>
              <p className="text-gray-600">
                Fikrlaydigan, izlanuvchan va ijodkor bolalar bilan tanishib, birga o'rganish imkoniyati.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border-l-4 border-purple-500">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TrophyOutlined className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sovrinlar va imkoniyatlar</h3>
              <p className="text-gray-600">
                Eng yaxshi ishtirokchilar uchun qimmatbaho sovrinlar va kelajakdagi o'sish imkoniyatlari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="imkoniyatlar" className="py-16 bg-blue-600 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Bizning <span className="text-yellow-300">imkoniyatlar</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <StarOutlined className="text-yellow-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Bepul ta'lim</h3>
                  <p className="text-gray-600">
                    Tanlovda qatnashib, mutaxassislardan bepul ta'lim olish imkoniyatiga ega bo'lasiz.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <SafetyOutlined className="text-blue-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Kelajak kasblar</h3>
                  <p className="text-gray-600">
                    Zamonaviy texnologiyalar va kelajak kasblarini o'rganish imkoniyati.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <TeamOutlined className="text-green-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Jamoaviy ishlash</h3>
                  <p className="text-gray-600">
                    Shaxsiy va jamoaviy loyihalarda ishlash tajribasini olish.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <TrophyOutlined className="text-purple-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Sovrinlar</h3>
                  <p className="text-gray-600">
                    Qimmatbaho sovrinlar, sertifikatlar va kelajak imkoniyatlari.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="savollar" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Ko'p <span className="text-blue-600">so'raladigan savollar</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dasturga kimlar qatnasha oladi?</h3>
              <p className="text-gray-600">
                7-18 yoshli barcha o'quvchilar dasturga bemalol qatnashishlari mumkin. Sizdan faqat qiziquvchanlik va intilish talab etiladi.
              </p>
            </div>
            
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Dastur davomiyligi qancha?</h3>
              <p className="text-gray-600">
                Dastur 3 oy davom etadi, har hafta qiziqarli mashg'ulotlar, seminarlar va amaliy loyihalar bo'lib o'tadi.
              </p>
            </div>
            
            <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ishtirok etish uchun nimalar talab qilinadi?</h3>
              <p className="text-gray-600">
                Ishtirok etish uchun ro'yxatdan o'tish formasini to'ldirish, o'zingiz haqingizda qisqacha ma'lumot va imkoniyat bo'lsa portfolio yuklash talab qilinadi.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ro'yxatdan o'tish muddati qachongacha?</h3>
              <p className="text-gray-600">
                Ro'yxatdan o'tish uchun 15 kunlik muddat belgilangan. Shoshiling, o'rnimiz cheklangan!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hoziroq ro'yxatdan o'ting!</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Kelajak texnologiyalarini o'rganing, yangi do'stlar orttiring va o'z 
            g'oyalaringizni hayotga tatbiq eting!
          </p>
          <Link to="/register">
            <Button 
              type="primary" 
              size="large"
              className="bg-yellow-500 hover:bg-yellow-600 text-lg h-14 px-8 rounded-lg font-bold border-0"
            >
              Ro'yxatdan o'tish
            </Button>
          </Link>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-blue-200">Ishtirokchilar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-blue-200">Mentorlar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">30+</div>
              <div className="text-blue-200">Loyihalar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-blue-200">Hamkorlar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <RocketOutlined className="text-blue-400 text-2xl mr-2" />
                <h3 className="text-xl font-bold">Yosh Inovatorlar</h3>
              </div>
              <p className="text-gray-400 mt-2">Kelajak bugundan boshlanadi!</p>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-8">
              <a href="#dastur" className="text-gray-300 hover:text-white">Dastur haqida</a>
              <a href="#imkoniyatlar" className="text-gray-300 hover:text-white">Imkoniyatlar</a>
              <a href="#savollar" className="text-gray-300 hover:text-white">Ko'p so'raladigan savollar</a>
              <Link to="/register" className="text-blue-400 hover:text-blue-300">Ro'yxatdan o'tish</Link>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Yosh Inovatorlar. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;