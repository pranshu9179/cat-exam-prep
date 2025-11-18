// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaCheckCircle,
//   FaBookOpen,
//   FaClock,
//   FaMobileAlt,
//   FaCertificate,
//   FaFileDownload,
//   FaPlayCircle,
//   FaPlay,
// } from "react-icons/fa";

// const CourseMiddleSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const courseContent = [
//     {
//       title: "Introduction to the Course",
//       lectures: "3 lectures • 2min",
//       details: [
//         {
//           title: "Welcome to the Course",
//           video: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
//         },
//         {
//           title: "Course Overview",
//           video: "https://www.youtube.com/watch?v=bMknfKXIFA8",
//         },
//         {
//           title: "Setup Instructions",
//           video: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
//         },
//       ],
//     },
//     {
//       title: "Learning the Figma Interface",
//       lectures: "6 lectures • 53min",
//       details: [
//         {
//           title: "What is Figma?",
//           video: "https://www.youtube.com/watch?v=4W4LvJnNegA",
//         },
//         {
//           title: "Interface Tour",
//           video: "https://www.youtube.com/watch?v=jwCmIBJ8Jtc",
//         },
//         {
//           title: "Tools Overview",
//           video: "https://www.youtube.com/watch?v=T8UXsLZz5GM",
//         },
//         {
//           title: "Shortcuts & Tips",
//           video: "https://www.youtube.com/watch?v=0fYi8SGA20k",
//         },
//         {
//           title: "Working with Frames",
//           video: "https://www.youtube.com/watch?v=9U1iDkT3v4w",
//         },
//         {
//           title: "Aligning & Distributing Elements",
//           video: "https://www.youtube.com/watch?v=RzVvThhjAKw",
//         },
//       ],
//     },
//     {
//       title: "Adding and Editing Content",
//       lectures: "3 lectures • 1hr 44min",
//       details: [
//         {
//           title: "Typography & Colors",
//           video: "https://www.youtube.com/watch?v=3JluqTojuME",
//         },
//         {
//           title: "Icons & Components",
//           video: "https://www.youtube.com/watch?v=uh7bSSS9iug",
//         },
//         {
//           title: "Images & Auto Layout",
//           video: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
//         },
//       ],
//     },
//   ];

//   const toggleSection = (index) =>
//     setOpenIndex(openIndex === index ? null : index);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-6 text-gray-800">
//       {/* ✅ GRID - LEFT & RIGHT */}
//       <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 items-start">
//         {/* ✅ LEFT SIDE */}
//         <div>
//           {/* ✅ This course includes */}
//           <section className="mb-14">
//             <h2 className="text-3xl font-bold mb-6 text-white">This course includes</h2>
//             <div className="grid sm:grid-cols-2 gap-5">
//               {[
//                 { icon: <FaClock />, text: "3.5 hours on-demand video" },
//                 { icon: <FaBookOpen />, text: "1 article" },
//                 { icon: <FaFileDownload />, text: "3 downloadable resources" },
//                 { icon: <FaMobileAlt />, text: "Access on mobile and TV" },
//                 { icon: <FaCertificate />, text: "Certificate of completion" },
//                 { icon: <FaPlayCircle />, text: "Lifetime access" },
//               ].map((item, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ scale: 1.03 }}
//                   className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
//                 >
//                   <span className="text-blue-600 text-2xl">{item.icon}</span>
//                   <p className="text-gray-700 font-medium">{item.text}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </section>
//         </div>

//         {/* ✅ RIGHT SIDE - WHAT YOU'LL LEARN */}
//         <div>
//           <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10 px-6 rounded-2xl shadow-sm border border-gray-100">
//             <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
//               What you'll learn
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {[
//                 "Design beautiful and engaging mobile apps",
//                 "Create responsive web layouts with Figma",
//                 "Use design elements effectively & consistently",
//                 "Build interactive prototypes for clients",
//                 "Understand auto layout & components deeply",
//                 "Work with reusable design systems",
//               ].map((point, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ scale: 1.03, x: 6 }}
//                   transition={{ duration: 0.2 }}
//                   className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300"
//                 >
//                   <FaCheckCircle className="text-green-500 mt-1 text-xl" />
//                   <p className="text-gray-700 font-medium text-base">
//                     {point}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* ✅ COURSE CONTENT - FULL WIDTH */}
//       <section className="mt-16">
//         <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
//           <FaBookOpen className="text-blue-600" /> Course content
//         </h2>
//         <p className="text-gray-500 mb-5">
//           {courseContent.length} sections •{" "}
//           {courseContent.reduce((a, b) => a + b.details.length, 0)} lectures •
//           Approx. 3h 40m total length
//         </p>

//         <div className="border bg-white border-gray-200 rounded-xl overflow-hidden shadow-md">
//           {courseContent.map((section, index) => (
//             <div key={index} className="bg-white">
//               <button
//                 className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-gray-50 transition"
//                 onClick={() => toggleSection(index)}
//               >
//                 <div className="flex flex-col">
//                   <span className="font-semibold text-gray-900">
//                     {section.title}
//                   </span>
//                   <span className="text-sm text-gray-500">
//                     {section.lectures}
//                   </span>
//                 </div>
//                 <motion.span
//                   animate={{ rotate: openIndex === index ? 90 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="text-gray-500 text-xl font-bold"
//                 >
//                   ▶
//                 </motion.span>
//               </button>

//               <AnimatePresence>
//                 {openIndex === index && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="px-6 py-3 bg-gray-50 border-t border-gray-200"
//                   >
//                     <ul className="list-none pl-2 text-sm text-gray-700 space-y-2">
//                       {section.details.map((item, i) => (
//                         <li
//                           key={i}
//                           className="flex justify-between items-center bg-white rounded-lg px-4 py-2 border hover:shadow-sm transition"
//                         >
//                           <div className="flex items-center gap-2">
//                             <FaPlay className="text-blue-500 text-sm" />
//                             <span>{item.title}</span>
//                           </div>
//                           {item.video && (
//                             <a
//                               href={item.video}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                             >
//                               Watch
//                             </a>
//                           )}
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ✅ EXPLORE RELATED TOPICS */}
//       <section className="mt-16 text-center">
//         <h2 className="text-3xl font-bold mb-6">Explore related topics</h2>
//         <div className="flex flex-wrap justify-center gap-3">
//           {[
//             "Figma",
//             "User Interface Design",
//             "User Experience Design",
//             "Design",
//           ].map((topic, i) => (
//             <motion.button
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-full bg-white hover:bg-gray-100 transition shadow-sm"
//             >
//               {topic}
//             </motion.button>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CourseMiddleSection;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaBookOpen,
  FaClock,
  FaMobileAlt,
  FaCertificate,
  FaFileDownload,
  FaPlayCircle,
  FaPlay,
} from "react-icons/fa";

const CourseMiddleSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const courseContent = [
    {
      title: "Introduction to the Course",
      lectures: "3 lectures • 2min",
      details: [
        { title: "Welcome to the Course", video: "https://www.youtube.com/watch?v=ysz5S6PUM-U" },
        { title: "Course Overview", video: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
        { title: "Setup Instructions", video: "https://www.youtube.com/watch?v=Ke90Tje7VS0" },
      ],
    },
    {
      title: "Learning the Figma Interface",
      lectures: "6 lectures • 53min",
      details: [
        { title: "What is Figma?", video: "https://www.youtube.com/watch?v=4W4LvJnNegA" },
        { title: "Interface Tour", video: "https://www.youtube.com/watch?v=jwCmIBJ8Jtc" },
        { title: "Tools Overview", video: "https://www.youtube.com/watch?v=T8UXsLZz5GM" },
        { title: "Shortcuts & Tips", video: "https://www.youtube.com/watch?v=0fYi8SGA20k" },
        { title: "Working with Frames", video: "https://www.youtube.com/watch?v=9U1iDkT3v4w" },
        { title: "Aligning Elements", video: "https://www.youtube.com/watch?v=RzVvThhjAKw" },
      ],
    },
    {
      title: "Adding and Editing Content",
      lectures: "3 lectures • 1hr 44min",
      details: [
        { title: "Typography & Colors", video: "https://www.youtube.com/watch?v=3JluqTojuME" },
        { title: "Icons & Components", video: "https://www.youtube.com/watch?v=uh7bSSS9iug" },
        { title: "Images & Auto Layout", video: "https://www.youtube.com/watch?v=FTFaQWZBqQ8" },
      ],
    },
  ];

  const toggleSection = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 text-gray-200 bg-black">

      {/* 🔶 GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">

        {/* 🔶 COURSE INCLUDES */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-6 text-[#E16B3A]">
            This course includes
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: <FaClock />, text: "3.5 hours on-demand video" },
              { icon: <FaBookOpen />, text: "1 article" },
              { icon: <FaFileDownload />, text: "3 downloadable resources" },
              { icon: <FaMobileAlt />, text: "Access on mobile and TV" },
              { icon: <FaCertificate />, text: "Certificate of completion" },
              { icon: <FaPlayCircle />, text: "Lifetime access" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="
                flex items-center gap-3 p-4 rounded-xl
                border border-[#E16B3A]/40
                shadow-[0_0_15px_rgba(225,107,58,0.25)]
                bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000_100%)]
                "
              >
                <span className="text-[#E16B3A] text-2xl">{item.icon}</span>
                <p className="font-medium text-gray-200">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🔶 WHAT YOU'LL LEARN */}
        <section className="w-full rounded-2xl p-8 border border-[#E16B3A]/30
        shadow-[0_0_25px_rgba(225,107,58,0.30)]
        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000_100%)]">

          <h2 className="text-3xl font-bold mb-8 text-[#E16B3A]">
            What you'll learn
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Design beautiful and engaging mobile apps",
              "Create responsive web layouts with Figma",
              "Use design elements effectively",
              "Build interactive prototypes",
              "Understand Auto-Layout deeply",
              "Work with reusable design systems",
            ].map((point, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, x: 8 }}
                className="flex gap-3 p-4 rounded-2xl border border-[#E16B3A]/30
                bg-black/40 text-gray-300"
              >
                <FaCheckCircle className="text-green-400 text-xl mt-1" />
                <p className="font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* 🔶 COURSE CONTENT SECTION */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2 text-[#E16B3A]">
          <FaBookOpen /> Course content
        </h2>

        <p className="text-gray-400 mb-4">
          {courseContent.length} sections • {courseContent.reduce((a, b) => a + b.details.length, 0)} lectures
        </p>

        <div
          className="rounded-xl shadow-xl overflow-hidden border border-[#E16B3A]/30
      bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000_100%)]"
        >
          {courseContent.map((section, index) => (
            <div key={index}>
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-300 
              hover:bg-black/40 transition"
                onClick={() => toggleSection(index)}
              >
                <div>
                  <span className="font-semibold">{section.title}</span>
                  <p className="text-sm text-gray-400">{section.lectures}</p>
                </div>

                <motion.span
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  className="text-[#E16B3A] text-xl"
                >
                  ▶
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 py-3 bg-black/30 border-t border-[#E16B3A]/20"
                  >
                    {section.details.map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center p-3 rounded-lg
                      border border-[#E16B3A]/20 my-1 bg-black/40 text-gray-200"
                      >
                        <div className="flex items-center gap-2">
                          <FaPlay className="text-[#E16B3A]" /> {item.title}
                        </div>

                        <a
                          href={item.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:text-orange-300 font-medium"
                        >
                          Watch
                        </a>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 🔶 RELATED TOPICS */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#E16B3A]">Explore related topics</h2>

        <div className="flex flex-wrap justify-center gap-3">
          {["Figma", "UI Design", "UX Design", "Design"].map((topic, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 rounded-full border border-[#E16B3A] text-[#E16B3A] hover:bg-[#E16B3A] hover:text-black transition"
            >
              {topic}
            </motion.button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseMiddleSection;
