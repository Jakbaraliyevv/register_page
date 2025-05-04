// import React from "react";
// import { Button } from "antd";
// import { Link } from "react-router-dom";
// import {
//   CalendarOutlined,
//   PlayCircleOutlined,
//   SmileOutlined,
//   TrophyOutlined,
// } from "@ant-design/icons";

// function HomePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
//       <section className="py-12 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="inline-block px-6 py-2 bg-yellow-300 text-purple-800 font-bold rounded-full mb-6 text-lg shadow-lg">
//             🎉 BEPUL O'QUV LAGERI 🎉
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//             <span className="text-yellow-300">Qiziqarli</span> kontentlar <br />
//             yaratishni o'rganamiz!
//           </h1>
//           <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl mx-auto">
//             <p className="text-xl font-medium">
//               "Milliy o'yinlarimiz asosida video, animatsiya va qiziqarli
//               postlar yaratishni o'rganamiz!"
//             </p>
//           </div>
//           <Link to="/register">
//             <Button
//               type="primary"
//               size="large"
//               className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold h-14 px-10 rounded-full text-lg shadow-lg border-0"
//               icon={<SmileOutlined />}
//             >
//               Qatnashish uchun ro'yxatdan o'tish
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <section className="py-12 px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//             <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-6 text-white text-center">
//               <h2 className="text-3xl font-bold">Lager haqida</h2>
//               <p className="text-xl">3 kunlik qiziqarli mashg'ulotlar</p>
//             </div>

//             <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="flex items-start">
//                 <div className="bg-yellow-100 p-3 rounded-full mr-4">
//                   <CalendarOutlined className="text-yellow-600 text-2xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">
//                     Qachon bo'ladi?
//                   </h3>
//                   <p className="text-gray-600 text-lg">📅 7-9 may kunlari</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-blue-100 p-3 rounded-full mr-4">
//                   <PlayCircleOutlined className="text-blue-600 text-2xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">
//                     Nimalar o'rganamiz?
//                   </h3>
//                   <ul className="text-gray-600 text-lg space-y-2">
//                     <li>🎬 Qiziqarli videolar yasash</li>
//                     <li>✏️ Animatsiya chizish</li>
//                     <li>📱 Instagram uchun postlar</li>
//                     <li>🎭 Milliy o'yinlar haqida hikoyalar</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 px-4 bg-gradient-to-r from-yellow-100 to-orange-100">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-purple-800 mb-8">
//             Lagerda nimalar bo'ladi?
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
//             {[
//               { icon: "🎨", text: "Rasmlar" },
//               { icon: "🎥", text: "Videolar" },
//               { icon: "🎭", text: "O'yinlar" },
//               { icon: "🏆", text: "Mukofotlar" },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
//               >
//                 <div className="text-4xl mb-2">{item.icon}</div>
//                 <div className="font-bold text-gray-800">{item.text}</div>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white rounded-xl p-6 shadow-lg inline-block max-w-md">
//             <div className="text-5xl mb-4">🏅</div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">
//               Eng yaxshi ishlar uchun sovg'alar!
//             </h3>
//             <p className="text-gray-600">
//               Har kuni eng yaxshi ishlarni qilgan bolalar sovg'alar bilan
//               taqdirlanadi!
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 px-4 bg-gradient-to-b from-purple-600 to-blue-600 text-white text-center">
//         <div className="max-w-2xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">O'rinlar soni cheklangan!</h2>
//           <p className="text-xl mb-8">
//             Tezroq ro'yxatdan o'ting va qiziqarli lagerda o'z o'rningizni band
//             qiling!
//           </p>
//           <Link to="/register">
//             <Button
//               type="primary"
//               size="large"
//               className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold h-14 px-10 rounded-full text-lg shadow-lg"
//               icon={<TrophyOutlined />}
//             >
//               Men ham qatnashmoqchiman!
//             </Button>
//           </Link>
//         </div>
//       </section>

//       <footer className="bg-gray-800 text-white py-8 px-4 text-center">
//         <div className="max-w-4xl mx-auto">
//           <div className="flex justify-center space-x-6 mb-6">
//             {["📱", "📷", "🎬"].map((icon, i) => (
//               <div
//                 key={i}
//                 className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center text-xl"
//               >
//                 {icon}
//               </div>
//             ))}
//           </div>
//           <p className="text-lg">
//             "Milliy Kontent Lager" - Bolalar uchun ijodiy dastur
//           </p>
//           <p className="text-gray-400 mt-2">
//             © {new Date().getFullYear()} Barcha huquqlar himoyalangan
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;

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
