// import React from "react";
// import {
//   CheckOutlined,
//   EnvironmentOutlined,
//   ExclamationCircleOutlined,
//   FileWordOutlined,
//   ReadOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { Button, Input } from "antd";
// function FormComponents() {
//   return (
//     <section className="w-full ">
//       <div className="bg-[#FFF] p-[25px] rounded-md shadow-md">
//         <div>
//           <UserOutlined />
//           Shaxsiy ma'lumotlar
//         </div>

//         <form>
//           <div className="flex flex-col gap-[20px]">
//             <div className="flex flex-col gap-[20px]">
//               <div>
//                 <label>Ism</label>
//                 <Input
//                   className="w-full p-3 border border-gray-300 rounded-md"
//                   placeholder="Ismingizni kiriting:"
//                 />
//               </div>
//               <div>
//                 <label>Familiya</label>
//                 <Input
//                   className="w-full p-3 border border-gray-300 rounded-md"
//                   placeholder="Familiyangizni kiriting:"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col gap-[20px]">
//               <div>
//                 <label className="block text-gray-700 mb-2">Hudud</label>
//                 <select
//                   name="region"
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 >
//                   <option value="">Tanlang</option>
//                   <option value="tashkent">Toshkent shahri</option>
//                   <option value="tashkent_region">Toshkent viloyati</option>
//                   <option value="samarkand">Samarqand</option>
//                   <option value="bukhara">Buxoro</option>
//                   <option value="andijan">Andijon</option>
//                   <option value="fergana">Farg'ona</option>
//                   <option value="namangan">Namangan</option>
//                   <option value="navoiy">Navoiy</option>
//                   <option value="kashkadarya">Qashqadaryo</option>
//                   <option value="surkhandarya">Surxondaryo</option>
//                   <option value="khorezm">Xorazm</option>
//                   <option value="jizzakh">Jizzax</option>
//                   <option value="syrdarya">Sirdaryo</option>
//                   <option value="karakalpakstan">Qoraqalpog'iston</option>
//                 </select>
//               </div>
//               <div>
//                 <label>Yosh</label>
//                 <Input
//                   className="w-full p-3 border border-gray-300 rounded-md"
//                   type="number"
//                   placeholder="Ismingizni kiriting:"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col gap-[20px]">
//               <div>
//                 <label>Jinsi</label>
//                 <select
//                   name="region"
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 >
//                   <option value="">Tanlang</option>
//                   <option value="tashkent">Erkak</option>
//                   <option value="tashkent">Ayol</option>
//                 </select>
//               </div>
//               <div>
//                 <label>Tugulgan Yili</label>
//                 <Input placeholder="Tugulgan yili:" />
//               </div>
//             </div>
//             <div className="flex flex-col gap-[20px]">
//               <div>
//                 <EnvironmentOutlined />
//                 Manzil va Ta'lim
//                 <h2></h2>
//               </div>
//               <div>
//                 <label>Yashash manzili</label>
//                 <textarea
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                   rows={2}
//                 ></textarea>
//               </div>
//               <div>
//                 <span className="flex items-center gap-2">
//                   <ReadOutlined />
//                   <p>O'qish/Ta'lim joyi</p>
//                 </span>
//                 <Input
//                   className="w-full p-3 border border-gray-300 rounded-md"
//                   placeholder="O'qish joyi"
//                 />
//               </div>
//               <div>
//                 <div className="flex items-center gap-2">
//                   <FileWordOutlined />
//                   Portfoliyo
//                 </div>
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                   <label className="block w-full cursor-pointer">
//                     <div></div>
//                     <div className="mb-3">
//                       <ExclamationCircleOutlined
//                         className="mx-auto text-gray-400"
//                         size={36}
//                       />
//                     </div>
//                     <p className="text-gray-700 mb-2">
//                       Portfolio faylini yuklang (PDF, DOC)
//                     </p>
//                     <p className="text-gray-500 text-sm mb-4">
//                       Maksimal hajm: 10MB
//                     </p>
//                     <input
//                       type="file"
//                       name="portfolio"
//                       className="hidden"
//                       accept=".pdf,.doc,.docx"
//                     />
//                     <button
//                       type="button"
//                       className="bg-blue-100 text-blue-700 px-6 py-2 rounded-md hover:bg-blue-200 transition duration-300"
//                     >
//                       Faylni tanlash
//                     </button>
//                   </label>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex items-center gap-2">
//                   <ExclamationCircleOutlined />
//                   Nima uchun sizni tanlashimiz kerak?
//                 </div>
//                 <div>
//                   <textarea
//                     placeholder="O'zingiz haqingizda va nima uchun aynan sizni tanlaymiz degan savolga javob bering..."
//                     className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//                     rows={4}
//                   ></textarea>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <Button type="primary" className="w-full h-[50px]">
//                 <CheckOutlined />
//                 Ro'yxatdan o'tish
//               </Button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default FormComponents;

import React from "react";
import {
  CheckOutlined,
  EnvironmentOutlined,
  ExclamationCircleOutlined,
  FileWordOutlined,
  ReadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input, DatePicker } from "antd";
import dayjs from "dayjs";

function FormComponents() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        {/* Personal Information Header */}
        <div className="flex items-center gap-3 mb-6">
          <UserOutlined className="text-blue-500 text-xl" />
          <h2 className="text-xl font-semibold text-gray-800 max-[500px]:text-[17px]">
            Shaxsiy ma'lumotlar
          </h2>
        </div>

        <form>
          <div className="space-y-6">
            {/* First Row - Name and Surname */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
                  Ism
                </label>
                <Input
                  className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
                  placeholder="Ismingizni kiriting "
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
                  Familiya
                </label>
                <Input
                  className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
                  placeholder="Familiyangizni kiriting"
                />
              </div>
            </div>

            {/* Second Row - Region and Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
                  Hudud
                </label>
                <select
                  name="region"
                  className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition max-[450px]:placeholder:text-[13px]"
                  required
                >
                  <option value="">Tanlang</option>
                  <option value="tashkent">Toshkent shahri</option>
                  <option value="tashkent_region">Toshkent viloyati</option>
                  <option value="samarkand">Samarqand</option>
                  <option value="bukhara">Buxoro</option>
                  <option value="andijan">Andijon</option>
                  <option value="fergana">Farg'ona</option>
                  <option value="namangan">Namangan</option>
                  <option value="navoiy">Navoiy</option>
                  <option value="kashkadarya">Qashqadaryo</option>
                  <option value="surkhandarya">Surxondaryo</option>
                  <option value="khorezm">Xorazm</option>
                  <option value="jizzakh">Jizzax</option>
                  <option value="syrdarya">Sirdaryo</option>
                  <option value="karakalpakstan">Qoraqalpog'iston</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
                  Yosh
                </label>
                <Input
                  className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
                  type="number"
                  placeholder="Yoshingizni kiriting"
                />
              </div>
            </div>

            {/* Third Row - Gender and Birth Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
                  Jinsi
                </label>
                <select
                  name="gender"
                  className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition max-[450px]:placeholder:text-[13px]"
                  required
                >
                  <option value="">Tanlang</option>
                  <option value="male">Erkak</option>
                  <option value="female">Ayol</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
                  Tug'ilgan yili
                </label>
                <DatePicker
                  picker="year"
                  className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
                  placeholder="Tug'ilgan yilingizni tanlang"
                />
              </div>
            </div>

            {/* Address and Education Section */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-3 mb-6">
                <EnvironmentOutlined className="text-blue-500 text-xl" />
                <h2 className="text-xl font-semibold text-gray-800 max-[500px]:text-[17px]">
                  Manzil va Ta'lim
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Yashash manzili
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition max-[450px]:placeholder:text-[13px]"
                    rows={4}
                    placeholder="To'liq manzilingizni yozing (ko'cha, uy, shahar)"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <span className="flex items-center gap-2 max-[500px]:text-[15px]">
                      <ReadOutlined className="text-blue-500" />
                      <span>O'qish/Ta'lim joyi</span>
                    </span>
                  </label>
                  <Input
                    className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
                    placeholder="O'qish joyingiz nomi (maktab, universitet, kurs nomi)"
                  />
                </div>
              </div>
            </div>

            {/* Portfolio Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileWordOutlined className="text-blue-500 text-xl" />
                <h2 className="text-xl font-semibold text-gray-800 max-[500px]:text-[15px]">
                  Portfolio
                </h2>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition max-[450px]:placeholder:text-[13px]">
                <label className="block w-full cursor-pointer">
                  <div className="mb-3">
                    <ExclamationCircleOutlined className="mx-auto text-gray-400 text-3xl" />
                  </div>
                  <p className="text-gray-700 mb-2 font-medium max-[500px]:text-[15px]">
                    Portfolio faylini yuklang (PDF, DOC)
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    Maksimal hajm: 10MB
                  </p>
                  <input
                    type="file"
                    name="portfolio"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                  <button
                    type="button"
                    className="bg-blue-100 text-blue-700 px-6 py-2 rounded-lg hover:bg-blue-200 transition duration-300 font-medium max-[450px]:placeholder:text-[13px] max-[500px]:text-[15px]"
                  >
                    Faylni tanlash
                  </button>
                </label>
              </div>
            </div>

            {/* Why Choose You Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ExclamationCircleOutlined className="text-blue-500 text-xl" />
                <h2 className="text-xl font-semibold text-gray-800 max-[500px]:text-[15px]">
                  Nima uchun sizni tanlashimiz kerak?
                </h2>
              </div>
              <textarea
                placeholder="O'zingiz haqingizda va nima uchun aynan sizni tanlashimiz kerakligi haqida yozing..."
                className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition placeholder:text-sm max-[500px]:placeholder:text-xs"
                rows={5}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="primary"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 transition rounded-lg "
                icon={<CheckOutlined />}
              >
                Ro'yxatdan o'tish
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FormComponents;
