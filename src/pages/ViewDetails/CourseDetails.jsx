// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaStar,
//   FaCheckCircle,
//   FaBookOpen,
//   FaPlayCircle,
//   FaClock,
//   FaMobileAlt,
//   FaFileDownload,
//   FaCertificate,
// } from "react-icons/fa";
// import CourseMiddleSection from "../ViewDetails/CourseMiddleSection";
// import CourseBottomSection from "../ViewDetails/CourseBottomSection";

// const CourseDetails = () => {
//   const course = {
//     title: "CAT 2024 Complete Preparation Course",
//     subtitle:
//       "Master Quantitative Aptitude, Verbal Ability, DILR with expert strategies, mock tests, and personalized mentorship for CAT 2024 success.",
//     instructor: "Dr. Ravi Sharma",
//     rating: 4.8,
//     totalRatings: "12,495 ratings",
//     learners: "45,230 learners",
//     lastUpdated: "January 2024",
//     language: "English & Hindi",
//     price: 2999,
//     originalPrice: 8999,
//     discount: 66,
//     videoPreview: "https://www.youtube.com/embed/xfXnKPgLCE8?autoplay=1&mute=1",
//     thumbnail:
//       "https://jaro-website.s3.ap-south-1.amazonaws.com/2025/08/CAT-Exam-Preparation-Tips-2025-Updated-1024x576.webp",
//     features: [
//       "Master all 3 sections: QA, VARC, and DILR",
//       "Solve 1000+ previous year CAT questions",
//       "Learn time management and shortcut techniques",
//       "25+ full-length mock tests with detailed analysis",
//     ],
//     includes: [
//       { icon: <FaClock />, text: "200+ hours of video lectures" },
//       { icon: <FaBookOpen />, text: "50+ practice worksheets" },
//       { icon: <FaFileDownload />, text: "1000+ downloadable questions" },
//       { icon: <FaMobileAlt />, text: "Access on mobile and desktop" },
//       { icon: <FaCertificate />, text: "CAT readiness certificate" },
//     ],
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen font-sans">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 px-6 py-10">
//         {/* LEFT SECTION */}
//         <div className="lg:col-span-2 space-y-10">
//           {/* HEADER */}
//           <div>
//             <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-3">
//               {course.title}
//             </h1>
//             <p className="text-gray-700 text-lg mb-4">{course.subtitle}</p>

//             <div className="flex flex-wrap items-center gap-2 text-gray-500 text-sm mb-4">
//               <span className="flex items-center gap-1 text-yellow-500 font-medium">
//                 <FaStar /> {course.rating}
//               </span>
//               <span>({course.totalRatings})</span>
//               <span>· {course.learners}</span>
//               <span>· Last updated {course.lastUpdated}</span>
//               <span>· {course.language}</span>
//             </div>
//           </div>

//           {/* WHAT YOU'LL LEARN */}
//           <section>
//             <h2 className="text-2xl font-bold text-gray-900 mb-5">
//               What you'll learn
//             </h2>
//             <div className="grid sm:grid-cols-2 gap-4">
//               {course.features.map((item, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ scale: 1.03 }}
//                   className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
//                 >
//                   <FaCheckCircle className="text-green-500 mt-1 text-lg" />
//                   <p className="text-gray-700 font-medium">{item}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </section>

//           {/* COURSE CONTENT */}
//           <section>
//             <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
//               <FaBookOpen className="text-blue-600" /> Course content
//             </h2>
//             <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
//               <p className="text-gray-700 mb-2">
//                 • 8 sections • 150+ lectures • 200+ hours total length
//               </p>
//               <ul className="list-disc pl-6 text-gray-700 space-y-1">
//                 <li>Quantitative Aptitude Mastery</li>
//                 <li>Verbal Ability & Reading Comprehension</li>
//                 <li>Data Interpretation & Logical Reasoning</li>
//                 <li>Mock Test Series & Analysis</li>
//               </ul>
//             </div>
//           </section>

//           {/* INSTRUCTOR SECTION */}
//           <section>
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">
//               Meet your instructor
//             </h2>
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow-md p-6 items-center border border-gray-100"
//             >
//               <img
//                 src="https://i.pravatar.cc/200?img=12"
//                 alt={course.instructor}
//                 className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
//               />
//               <div>
//                 <h3 className="text-xl font-bold text-gray-900">
//                   {course.instructor}
//                 </h3>
//                 <p className="text-blue-600 mb-2 text-sm">
//                   CAT Expert & IIM Ahmedabad Alumni
//                 </p>
//                 <p className="text-gray-700 text-sm leading-relaxed">
//                   Dr. Ravi Sharma is a renowned CAT mentor with 15+ years of
//                   experience, having helped 5000+ students crack CAT with 99+
//                   percentile. His unique teaching methodology focuses on
//                   conceptual clarity and exam strategy.
//                 </p>
//               </div>
//             </motion.div>
//           </section>
//         </div>

//         {/* RIGHT SIDEBAR */}
//         <aside className="sticky top-20 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden h-fit">
//           <div className="relative">
//             <iframe
//               src={course.videoPreview}
//               title="Course Preview"
//               className="w-full h-[230px]"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//             ></iframe>
//             <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition">
//               <FaPlayCircle className="text-white text-5xl" />
//             </div>
//           </div>

//           <div className="p-6">
//             <h3 className="text-3xl font-bold text-gray-900">
//               ₹{course.price}{" "}
//               <span className="text-gray-400 line-through text-lg ml-2">
//                 ₹{course.originalPrice}
//               </span>
//             </h3>
//             <p className="text-green-600 font-semibold mb-4">
//               {course.discount}% off · Limited time offer!
//             </p>

//             <div className="flex flex-col gap-3 mb-5">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
//               >
//                 Add to cart
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className="border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
//               >
//                 Buy now
//               </motion.button>
//             </div>

//             <hr className="my-4" />

//             <h4 className="text-lg font-semibold text-gray-900 mb-3">
//               This course includes:
//             </h4>
//             <ul className="space-y-3">
//               {course.includes.map((item, i) => (
//                 <li key={i} className="flex items-center gap-2 text-gray-700">
//                   <span className="text-blue-600 text-lg">{item.icon}</span>
//                   {item.text}
//                 </li>
//               ))}
//             </ul>

//             <p className="text-center text-gray-500 text-xs mt-6">
//               30-Day Money-Back Guarantee · Access until CAT 2024
//             </p>
//           </div>
//         </aside>
//       </div>
//       <CourseMiddleSection />
//       <CourseBottomSection />
//     </div>
//   );
// };

// export default CourseDetails;


import React from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaCheckCircle,
  FaBookOpen,
  FaPlayCircle,
  FaClock,
  FaMobileAlt,
  FaFileDownload,
  FaCertificate,
} from "react-icons/fa";
import CourseMiddleSection from "../ViewDetails/CourseMiddleSection";
import CourseBottomSection from "../ViewDetails/CourseBottomSection";

const CourseDetails = () => {
  const course = {
    title: "CAT 2024 Complete Preparation Course",
    subtitle:
      "Master Quantitative Aptitude, Verbal Ability, DILR with expert strategies, mock tests, and personalized mentorship for CAT 2024 success.",
    instructor: "Dr. Ravi Sharma",
    rating: 4.8,
    totalRatings: "12,495 ratings",
    learners: "45,230 learners",
    lastUpdated: "January 2024",
    language: "English & Hindi",
    price: 2999,
    originalPrice: 8999,
    discount: 66,
    videoPreview: "https://www.youtube.com/embed/xfXnKPgLCE8?autoplay=1&mute=1",
    thumbnail:
      "https://jaro-website.s3.ap-south-1.amazonaws.com/2025/08/CAT-Exam-Preparation-Tips-2025-Updated-1024x576.webp",
    features: [
      "Master all 3 sections: QA, VARC, and DILR",
      "Solve 1000+ previous year CAT questions",
      "Learn time management and shortcut techniques",
      "25+ full-length mock tests with detailed analysis",
    ],
    includes: [
      { icon: <FaClock />, text: "200+ hours of video lectures" },
      { icon: <FaBookOpen />, text: "50+ practice worksheets" },
      { icon: <FaFileDownload />, text: "1000+ downloadable questions" },
      { icon: <FaMobileAlt />, text: "Access on mobile and desktop" },
      { icon: <FaCertificate />, text: "CAT readiness certificate" },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 px-6 py-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight mb-3 bg-gradient-to-r from-[#E16B3A] to-[#B14820] text-transparent bg-clip-text">
              {course.title}
            </h1>

            <p className="text-lg text-gray-300 mb-4">{course.subtitle}</p>

            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <span className="flex items-center gap-1 text-[#E16B3A] font-medium">
                <FaStar /> {course.rating}
              </span>
              <span>({course.totalRatings})</span>
              <span>· {course.learners}</span>
              <span>· Last updated {course.lastUpdated}</span>
              <span>· {course.language}</span>
            </div>
          </div>

          {/* WHAT YOU WILL LEARN */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#E16B3A]">
              What you'll learn
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {course.features.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-[#E16B3A]/40
                  shadow-[0_0_15px_rgba(225,107,58,0.25)] bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000_100%)]"
                >
                  <FaCheckCircle className="text-green-400 text-lg mt-1" />
                  <p className="font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* COURSE CONTENT */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#E16B3A] flex items-center gap-2">
              <FaBookOpen className="text-[#B14820]" /> Course Content
            </h2>

            <div className="rounded-xl border border-[#E16B3A]/30 p-6 
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000_100%)] shadow-lg">
              <p className="mb-2 text-gray-300">
                • 8 sections • 150+ lectures • 200+ hours total length
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-300">
                <li>Quantitative Aptitude Mastery</li>
                <li>Verbal Ability & Reading Comprehension</li>
                <li>Data Interpretation & Logical Reasoning</li>
                <li>Mock Test Series & Analysis</li>
              </ul>
            </div>
          </section>

          {/* INSTRUCTOR */}
          <section>
            <h2 className="text-2xl font-bold text-[#E16B3A] mb-4">
              Meet Your Instructor
            </h2>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-[#E16B3A]/30
              bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000_100%)] shadow-xl"
            >
              <img
                src="https://i.pravatar.cc/200?img=12"
                className="w-28 h-28 rounded-full border-4 border-[#E16B3A]"
              />

              <div>
                <h3 className="text-xl font-bold text-white">{course.instructor}</h3>

                <p className="text-[#E16B3A] text-sm mb-2">
                  CAT Expert & IIM Ahmedabad Alumni
                </p>

                <p className="text-gray-300 text-sm">
                  Dr. Ravi Sharma is a renowned CAT mentor with 15+ years of experience...
                </p>
              </div>
            </motion.div>
          </section>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside
          className="sticky top-20 rounded-2xl overflow-hidden border border-[#E16B3A]/40 
        shadow-[0_0_25px_rgba(225,107,58,0.35)] bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000_100%)]">

          <iframe
            src={course.videoPreview}
            className="w-full h-[230px]"
            allow="autoplay; encrypted-media"
          />

          <div className="p-6">
            <h3 className="text-3xl font-bold text-white">
              ₹{course.price}
              <span className="text-gray-500 line-through text-lg ml-2">
                ₹{course.originalPrice}
              </span>
            </h3>

            <p className="text-green-400 font-medium mb-4">
              {course.discount}% OFF · Limited Time!
            </p>

            <div className="flex flex-col gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#E16B3A] text-black py-3 rounded-lg font-semibold hover:bg-[#B14820] transition"
              >
                Add to cart
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-gray-500 py-3 rounded-lg font-semibold hover:bg-gray-800"
              >
                Buy now
              </motion.button>
            </div>

            <hr className="my-5 border-gray-700" />

            <h4 className="text-lg font-bold text-[#E16B3A] mb-3">
              This course includes:
            </h4>

            <ul className="space-y-5">
              {course.includes.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <span className="text-[#E16B3A] text-lg">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>

            <p className="text-gray-500 text-xs mt-6 text-center">
              30-Day Money-Back Guarantee · Full Access Till CAT 2024
            </p>
          </div>
        </aside>
      </div>

      <CourseMiddleSection />
      <CourseBottomSection />
    </div>
  );
};

export default CourseDetails;
