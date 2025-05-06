// import React, { useState } from "react";

// const StudentTable = () => {
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedStudents, setSelectedStudents] = useState([]);

//   const students = [
//     {
//       id: 176,
//       firstName: "Shirin",
//       lastName: "Iskanderova",
//       patronymic: "Daniyar qizi",
//     },
//     {
//       id: 177,
//       firstName: "Muattaroy",
//       lastName: "Roximberdiyeva",
//       patronymic: "Akramjon qizi",
//     },
//     {
//         id: 176,
//         firstName: "Shirin",
//         lastName: "Iskanderova",
//         patronymic: "Daniyar qizi",
//       },
//       {
//         id: 177,
//         firstName: "Muattaroy",
//         lastName: "Roximberdiyeva",
//         patronymic: "Akramjon qizi",
//       },
//       {
//         id: 176,
//         firstName: "Shirin",
//         lastName: "Iskanderova",
//         patronymic: "Daniyar qizi",
//       },
//       {
//         id: 177,
//         firstName: "Muattaroy",
//         lastName: "Roximberdiyeva",
//         patronymic: "Akramjon qizi",
//       },
//       {
//         id: 176,
//         firstName: "Shirin",
//         lastName: "Iskanderova",
//         patronymic: "Daniyar qizi",
//       },
//       {
//         id: 177,
//         firstName: "Muattaroy",
//         lastName: "Roximberdiyeva",
//         patronymic: "Akramjon qizi",
//       },
//       {
//         id: 176,
//         firstName: "Shirin",
//         lastName: "Iskanderova",
//         patronymic: "Daniyar qizi",
//       },
//       {
//         id: 177,
//         firstName: "Muattaroy",
//         lastName: "Roximberdiyeva",
//         patronymic: "Akramjon qizi",
//       },
//       {
//         id: 176,
//         firstName: "Shirin",
//         lastName: "Iskanderova",
//         patronymic: "Daniyar qizi",
//       },
//       {
//         id: 177,
//         firstName: "Muattaroy",
//         lastName: "Roximberdiyeva",
//         patronymic: "Akramjon qizi",
//       },
//   ];

//   const toggleStudent = (id, e) => {
//     e.stopPropagation();
//     setSelectedStudents((prev) =>
//       prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
//     );
//   };

//   const openModal = (student) => {
//     setSelectedStudent(student);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="w-[90%] m-auto my-4">
//       <h1 className="text-2xl font-bold mb-6 text-center">
//         Talabalar Ro'yxati
//       </h1>

//       {/* Desktop Table */}
//       <div className="hidden md:block overflow-x-auto">
//         <table className="w-full bg-white border rounded-lg">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-3 text-left">№</th>
//               <th className="p-3 text-left">Ism</th>
//               <th className="p-3 text-left">Familiya</th>
//               <th className="p-3 text-left">Otasining ismi</th>
//               <th className="p-3 w-10 text-right"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student, index) => (
//               <tr
//                 key={student.id}
//                 className="hover:bg-gray-50 cursor-pointer border-t"
//                 onClick={() => openModal(student)}
//               >
//                 <td className="p-3">{index + 1}</td>
//                 <td className="p-3 font-medium">{student.firstName}</td>
//                 <td className="p-3">{student.lastName}</td>
//                 <td className="p-3">{student.patronymic}</td>
//                 <td
//                   className="p-3 text-right"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <input
//                     type="checkbox"
//                     checked={selectedStudents.includes(student.id)}
//                     onChange={(e) => toggleStudent(student.id, e)}
//                     className="h-4 w-4 accent-blue-500"
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Mobile List */}
//       <div className="md:hidden space-y-2">
//         {students.map((student, index) => (
//           <div
//             key={student.id}
//             className="bg-white p-3 rounded-lg border flex items-center gap-3"
//             onClick={() => openModal(student)}
//           >
//             <input
//               type="checkbox"
//               checked={selectedStudents.includes(student.id)}
//               onChange={(e) => toggleStudent(student.id, e)}
//               onClick={(e) => e.stopPropagation()}
//               className="h-4 w-4 flex-none accent-blue-500"
//             />
//             <div className="flex-1">
//               <div className="font-medium">
//                 #{index + 1} {student.firstName}
//               </div>
//               <div className="text-sm text-gray-600">
//                 {student.lastName} • {student.patronymic}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Simple Fast Modal */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-2"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-start mb-4">
//               <h2 className="text-xl font-bold">Talaba ma'lumotlari</h2>
//               <button
//                 onClick={closeModal}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 ✕
//               </button>
//             </div>

//             {selectedStudent && (
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-gray-500">ID</span>
//                   <span className="font-medium">{selectedStudent.id}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-500">Ism</span>
//                   <span className="font-medium">
//                     {selectedStudent.firstName}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-500">Familya</span>
//                   <span className="font-medium">
//                     {selectedStudent.lastName}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-500">Otasining ismi</span>
//                   <span className="font-medium">
//                     {selectedStudent.patronymic}
//                   </span>
//                 </div>
//               </div>
//             )}

//             <button
//               onClick={closeModal}
//               className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//             >
//               Yopish
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentTable;

import React, { useState } from "react";

const StudentTable = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  // Mock data generation - in a real app you would fetch this from an API
  const generateStudents = () => {
    const students = [];
    for (let i = 1; i <= 100; i++) {
      students.push({
        id: 175 + i,
        firstName: `Student${i}`,
        lastName: `Lastname${i}`,
        patronymic: `Patronymic${i}`
      });
    }
    return students;
  };

  const students = generateStudents();

  // Get current students
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(students.length / studentsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Pagination controls
  const renderPagination = () => {
    const pageButtons = [];
    const maxVisibleButtons = 5; // Maximum buttons to show at once

    let startPage, endPage;
    if (totalPages <= maxVisibleButtons) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const maxButtonsBeforeCurrent = Math.floor(maxVisibleButtons / 2);
      const maxButtonsAfterCurrent = Math.ceil(maxVisibleButtons / 2) - 1;
      
      if (currentPage <= maxButtonsBeforeCurrent) {
        startPage = 1;
        endPage = maxVisibleButtons;
      } else if (currentPage + maxButtonsAfterCurrent >= totalPages) {
        startPage = totalPages - maxVisibleButtons + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxButtonsBeforeCurrent;
        endPage = currentPage + maxButtonsAfterCurrent;
      }
    }

    // First page button
    if (startPage > 1) {
      pageButtons.push(
        <button
          key={1}
          onClick={() => paginate(1)}
          className={`mx-1 px-3 py-1 rounded ${currentPage === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pageButtons.push(<span key="start-ellipsis" className="px-2">...</span>);
      }
    }

    // Page number buttons
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`mx-1 px-3 py-1 rounded ${currentPage === i ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {i}
        </button>
      );
    }

    // Last page button
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageButtons.push(<span key="end-ellipsis" className="px-2">...</span>);
      }
      pageButtons.push(
        <button
          key={totalPages}
          onClick={() => paginate(totalPages)}
          className={`mx-1 px-3 py-1 rounded ${currentPage === totalPages ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {totalPages}
        </button>
      );
    }

    return (
      <div className="flex flex-wrap justify-center items-center mt-6 gap-1">
        <button
          onClick={() => paginate(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          &lt;
        </button>
        
        {pageButtons}
        
        <button
          onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    );
  };

  const toggleStudent = (id, e) => {
    e.stopPropagation();
    setSelectedStudents((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const openModal = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[90%] m-auto my-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Talabalar Ro'yxati</h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-white border rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">№</th>
              <th className="p-3 text-left">Ism</th>
              <th className="p-3 text-left">Familiya</th>
              <th className="p-3 text-left">Otasining ismi</th>
              <th className="p-3 w-10 text-right"></th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student, index) => (
              <tr
                key={student.id}
                className="hover:bg-gray-50 cursor-pointer border-t"
                onClick={() => openModal(student)}
              >
                <td className="p-3">{indexOfFirstStudent + index + 1}</td>
                <td className="p-3 font-medium">{student.firstName}</td>
                <td className="p-3">{student.lastName}</td>
                <td className="p-3">{student.patronymic}</td>
                <td
                  className="p-3 text-right"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(student.id)}
                    onChange={(e) => toggleStudent(student.id, e)}
                    className="h-4 w-4 accent-blue-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile List */}
      <div className="md:hidden space-y-2">
        {currentStudents.map((student, index) => (
          <div
            key={student.id}
            className="bg-white p-3 rounded-lg border flex items-center gap-3"
            onClick={() => openModal(student)}
          >
            <input
              type="checkbox"
              checked={selectedStudents.includes(student.id)}
              onChange={(e) => toggleStudent(student.id, e)}
              onClick={(e) => e.stopPropagation()}
              className="h-4 w-4 flex-none accent-blue-500"
            />
            <div className="flex-1">
              <div className="font-medium">
                #{indexOfFirstStudent + index + 1} {student.firstName}
              </div>
              <div className="text-sm text-gray-600">
                {student.lastName} • {student.patronymic}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Responsive Pagination */}
      {renderPagination()}

      {/* Simple Fast Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">Talaba ma'lumotlari</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {selectedStudent && (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">ID</span>
                  <span className="font-medium">{selectedStudent.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Ism</span>
                  <span className="font-medium">
                    {selectedStudent.firstName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Familya</span>
                  <span className="font-medium">
                    {selectedStudent.lastName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Otasining ismi</span>
                  <span className="font-medium">
                    {selectedStudent.patronymic}
                  </span>
                </div>
              </div>
            )}

            <button
              onClick={closeModal}
              className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentTable;
