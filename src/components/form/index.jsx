// import React from "react";
// import {
//   CheckOutlined,
//   EnvironmentOutlined,
//   ExclamationCircleOutlined,
//   FileWordOutlined,
//   ReadOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { Button, Input, DatePicker } from "antd";

// function FormComponents() {
//   return (
//     <section className="w-full max-w-4xl mx-auto px-4">
//       <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
//         <div className="flex items-center gap-3 mb-6">
//           <UserOutlined className="text-blue-500 text-xl" />
//           <h2 className="text-xl font-semibold text-gray-800 max-[500px]:text-[17px]">
//             Shaxsiy ma'lumotlar
//           </h2>
//         </div>

//         <form>
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
//                   Ism
//                 </label>
//                 <Input
//                   className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
//                   placeholder="Ismingizni kiriting "
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
//                   Familiya
//                 </label>
//                 <Input
//                   className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
//                   placeholder="Familiyangizni kiriting"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
//                   Hudud
//                 </label>
//                 <select
//                   name="region"
//                   className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition max-[450px]:placeholder:text-[13px]"
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
//                 <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
//                   Yosh
//                 </label>
//                 <Input
//                   className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
//                   type="number"
//                   placeholder="Yoshingizni kiriting"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
//                   Jinsi
//                 </label>
//                 <select
//                   name="gender"
//                   className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition max-[450px]:placeholder:text-[13px]"
//                   required
//                 >
//                   <option value="">Tanlang</option>
//                   <option value="male">Erkak</option>
//                   <option value="female">Ayol</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
//                   Tug'ilgan yili
//                 </label>
//                 <DatePicker
//                   picker="year"
//                   className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
//                   placeholder="Tug'ilgan yilingizni tanlang"
//                 />
//               </div>
//             </div>

//             <div className="border-t border-gray-200 pt-6">
//               <div className="flex items-center gap-3 mb-6">
//                 <EnvironmentOutlined className="text-blue-500 text-xl" />
//                 <h2 className="text-xl font-semibold text-gray-800 max-[500px]:text-[17px]">
//                   Manzil va Ta'lim
//                 </h2>
//               </div>

//               <div className="grid grid-cols-1 gap-6">
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Yashash manzili
//                   </label>
//                   <textarea
//                     className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition max-[450px]:placeholder:text-[13px]"
//                     rows={4}
//                     placeholder="To'liq manzilingizni yozing (ko'cha, uy, shahar)"
//                   ></textarea>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     <span className="flex items-center gap-2 max-[500px]:text-[15px]">
//                       <ReadOutlined className="text-blue-500" />
//                       <span>O'qish/Ta'lim joyi</span>
//                     </span>
//                   </label>
//                   <Input
//                     className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
//                     placeholder="O'qish joyingiz nomi (maktab, universitet, kurs nomi)"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <FileWordOutlined className="text-blue-500 text-xl" />
//                 <h2 className="font-medium text-gray-700 max-[500px]:text-[15px]">
//                   Portfolio
//                 </h2>
//               </div>
//               <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition max-[450px]:placeholder:text-[13px]">
//                 <label className="block w-full cursor-pointer">
//                   <div className="mb-3">
//                     <ExclamationCircleOutlined className="mx-auto text-gray-400 text-3xl" />
//                   </div>
//                   <p className="text-gray-700 mb-2 font-medium max-[500px]:text-[15px]">
//                     Portfolio faylini yuklang (PDF, DOC)
//                   </p>
//                   <p className="text-gray-500 text-sm mb-4">
//                     Maksimal hajm: 10MB
//                   </p>
//                   <input
//                     type="file"
//                     name="portfolio"
//                     className="hidden"
//                     accept=".pdf,.doc,.docx"
//                   />
//                   <button
//                     type="button"
//                     className="bg-blue-100 text-blue-700 px-6 py-2 rounded-lg hover:bg-blue-200 transition duration-300 font-medium max-[450px]:placeholder:text-[13px] max-[500px]:text-[15px]"
//                   >
//                     Faylni tanlash
//                   </button>
//                 </label>
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <ExclamationCircleOutlined className="text-blue-500 text-xl" />
//                 <h2 className="font-medium text-gray-700  max-[500px]:text-[15px]">
//                   Nima uchun sizni tanlashimiz kerak?
//                 </h2>
//               </div>
//               <textarea
//                 placeholder="O'zingiz haqingizda va nima uchun aynan sizni tanlashimiz kerakligi haqida yozing..."
//                 className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition placeholder:text-sm max-[500px]:placeholder:text-xs"
//                 rows={5}
//               ></textarea>
//             </div>

//             <div className="pt-4">
//               <Button
//                 type="primary"
//                 className="w-full h-12 bg-blue-600 hover:bg-blue-700 transition rounded-lg "
//                 icon={<CheckOutlined />}
//               >
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

import React, { useState } from "react";
import {
  CheckOutlined,
  EnvironmentOutlined,
  ExclamationCircleOutlined,
  FileWordOutlined,
  ReadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Input, DatePicker, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormComponents() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    surename: "",
    b_day: "",
    place_of_study: "",
    province: "",
    district: "",
    about: "",
    gender: "",
    phone_number: "",
  });

  console.log(formData, "datattatatat");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date, dateString) => {
    setFormData((prev) => ({
      ...prev,
      b_day: dateString,
    }));
  };

  const handleFileChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone_number") {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, "");
      // Limit to 9 characters (Uzbek phone numbers without country code)
      setFormData({
        ...formData,
        [name]: digitsOnly.slice(0, 9),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) {
        message.error("Fayl hajmi 10MB dan katta!");
        return;
      }

      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(selectedFile.type)) {
        message.error("Faqat PDF yoki DOC/DOCX fayllarni yuklashingiz mumkin!");
        return;
      }

      setFile(selectedFile);
      message.success("Fayl muvaffaqiyatli tanlandi!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        if (formData[key]) {
          data.append(key, formData[key]);
        }
      });

      if (file) {
        data.append("file", file);
      }

      const response = await axios.post(
        "http://195.158.4.220:1212/register/",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response?.data?.success) {
        console.log(response?.data, "response");
        navigate("/succses")
        message.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
        setFormData({
          name: "",
          surename: "",
          b_day: "",
          place_of_study: "",
          province: "",
          district: "",
          about: "",
          gender: "",
          age: "",
        });
        setFile(null);
      } else {
        message.error(response.data.message || "Xatolik yuz berdi!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Xatolik yuz berdi! Iltimos, qayta urunib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-6">
          <UserOutlined className="text-blue-500 text-xl" />
          <h2 className="text-xl font-semibold text-gray-800 max-[500px]:text-[17px]">
            Shaxsiy ma'lumotlar
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
                  Ism
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
                  placeholder="Ismingizni kiriting"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
                  Familiya
                </label>
                <Input
                  name="surename"
                  value={formData.surename}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
                  placeholder="Familiyangizni kiriting"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
                  Hudud
                </label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
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
                  Telefon raqam
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                  <span className="pl-3 text-gray-500 font-medium">+998</span>
                  <Input
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    className="flex-1 p-3 border-0 focus:ring-0 max-[450px]:placeholder:text-[13px]"
                    type="tel"
                    pattern="[0-9]{9}"
                    maxLength="9"
                    placeholder="90 123 45 67"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2 max-[500px]:text-[15px]">
                  Jinsi
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
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
                  onChange={handleDateChange}
                  className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
                  placeholder="Tug'ilgan yilingizni tanlang"
                  required
                />
              </div>
            </div>

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
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition max-[450px]:placeholder:text-[13px]"
                    rows={4}
                    placeholder="To'liq manzilingizni yozing (ko'cha, uy, shahar)"
                    required
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
                    name="place_of_study"
                    value={formData.place_of_study}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition max-[450px]:placeholder:text-[13px]"
                    placeholder="O'qish joyingiz nomi (maktab, universitet, kurs nomi)"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileWordOutlined className="text-blue-500 text-xl" />
                <h2 className="font-medium text-gray-700 max-[500px]:text-[15px]">
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
                    name="file"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      document.querySelector('input[name="file"]').click()
                    }
                    className="bg-blue-100 text-blue-700 px-6 py-2 rounded-lg hover:bg-blue-200 transition duration-300 font-medium max-[450px]:placeholder:text-[13px] max-[500px]:text-[15px]"
                  >
                    {file ? file.name : "Faylni tanlash"}
                  </button>
                </label>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <ExclamationCircleOutlined className="text-blue-500 text-xl" />
                <h2 className="font-medium text-gray-700  max-[500px]:text-[15px]">
                  Nima uchun sizni tanlashimiz kerak?
                </h2>
              </div>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                placeholder="O'zingiz haqingizda va nima uchun aynan sizni tanlashimiz kerakligi haqida yozing..."
                className="w-full p-3 border border-gray-300 rounded-lg hover:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition placeholder:text-sm max-[500px]:placeholder:text-xs"
                rows={5}
                required
              ></textarea>
            </div>

            <div className="pt-4">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 transition rounded-lg"
                icon={<CheckOutlined />}
                loading={loading}
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
