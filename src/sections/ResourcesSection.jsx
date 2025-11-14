// import React from "react";

// const pdfs = [
//   {
//     id: 1,
//     title: "CAT Syllabus & Strategy",
//     img: "/src/assets/public/ew0V5jf.jpg",
//   },
//   { id: 2, title: "VARC Cheat Sheet", img: "/src/assets/public/ew0V5jf.jpg" },
//   { id: 3, title: "Quant Formula PDF", img: "/src/assets/public/ew0V5jf.jpg" },
// ];

// export default function ResourcesSection() {
//   return (
//     <section id="resources" className="space-y-4">
//       <div className="flex items-center justify-between">
//         <h3 className="text-2xl font-bold">Get All PDFs</h3>
//       </div>
//       <div className="grid md:grid-cols-3 gap-4">
//         {pdfs.map((p) => (
//           <a
//             key={p.id}
//             className="bg-white p-4 rounded shadow flex items-center gap-3"
//             href="#"
//           >
//             <img
//               src={p.img}
//               alt={p.title}
//               className="w-20 h-20 object-cover rounded"
//             />
//             <div>
//               <div className="font-semibold">{p.title}</div>
//               <div className="text-xs text-gray-500">Download free</div>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }




import React from "react";

const pdfs = [
  { id: 1, title: "CAT Complete Syllabus (PDF)", img: "/src/assets/public/ew0V5jf.jpg" },
  { id: 2, title: "VARC Strategy + Tricks", img: "/src/assets/public/ew0V5jf.jpg" },
  { id: 3, title: "Quant Formula Handbook", img: "/src/assets/public/ew0V5jf.jpg" },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="space-y-10">
      <h3 className="text-3xl font-extrabold text-center">Free Study Material</h3>
      <p className="text-center text-gray-600">
        Download PDFs prepared by IIM alumni – based on latest CAT pattern.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pdfs.map((p) => (
          <a
            key={p.id}
            href="#"
            className="rounded-xl p-5 bg-white border hover:border-blue-600 shadow-lg hover:shadow-xl transition flex items-center gap-4"
          >
            <img
              className="w-20 h-20 rounded-lg object-cover"
              src={p.img}
              alt={p.title}
            />
            <div>
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-xs text-gray-500">📥 Download PDF</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
