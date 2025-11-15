import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import SeparatorLine from "../../components/SepratorLine";
const MbaExam = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    pincode: "",
  });

  const [expandedFaq, setExpandedFaq] = useState(null);

  const examData = [
    {
      exam: "CAT 2025",
      questions: "68",
      time: "120 minutes",
      timeline: "Last Sunday of November 2025",
      website: "iimcat.ac.in",
    },
    {
      exam: "XAT 2026",
      questions: "95",
      time: "180 minutes",
      timeline: "January 4, 2026",
      website: "https://bit.ly/3JlKjNd",
    },
    {
      exam: "NMAT 2025",
      questions: "108",
      time: "120 minutes",
      timeline:
        "For Phase 1: November 2025 - December 2025\nFor Phase 2: January 2026",
      website: "https://bit.ly/4o9ej4x",
    },
    {
      exam: "SNAP 2025",
      questions: "60",
      time: "60 minutes",
      timeline: "December 2025",
      website: "https://bit.ly/4llJ5pb",
    },
    {
      exam: "MICAT 2026",
      questions: "234",
      time: "165 minutes",
      timeline: "For Phase 1: December 2025\nFor Phase 2: January 2026",
      website: "www.mica.ac.in/pgdm",
    },
    {
      exam: "MAH MBA CET 2025",
      questions: "200",
      time: "150 minutes",
      timeline: "April 1 - April 3, 2025",
      website: "https://cetcell.mahacet.org/",
    },
    {
      exam: "CMAT 2026",
      questions: "100",
      time: "180 minutes",
      timeline: "January 2026",
      website: "https://cmat.nta.nic.in/",
    },
    {
      exam: "IBSAT 2025",
      questions: "140",
      time: "120 minutes",
      timeline: "December 2025",
      website: "https://admissions.ibsindia.org/ibsat/",
    },
    {
      exam: "MAT 2025",
      questions: "150",
      time: "120 minutes",
      timeline: "December 2025",
      website: "https://mat.aima.in/",
    },
    {
      exam: "TANCET 2025",
      questions: "100",
      time: "120 minutes",
      timeline: "March 22, 2025",
      website: "https://tancet.annauniv.edu/tancet/",
    },
    {
      exam: "CUET PG 2025",
      questions: "75",
      time: "105 minutes",
      timeline: "March 13, 2025, to March 31, 2025",
      website: "https://nta.ac.in/",
    },
  ];

  const collegeData = [
    { exam: "CAT", colleges: "IIMs, IMI, FMS Delhi, JBIMS, SPJIMR, IIT, MDI" },
    { exam: "XAT", colleges: "XLRI, XIMB, XIME, TAPMI, MICA, IMT, GIM" },
    {
      exam: "NMAT",
      colleges: "NMIMS, XIMB, ISB Hyderabad, SPJIMR, TAPMI, IBS",
    },
    { exam: "MICAT", colleges: "MICA Ahmedabad" },
    { exam: "CMAT", colleges: "Great Lakes, GIM, VIT, BIMTECH" },
    {
      exam: "SNAP",
      colleges: "SIBM Pune, SCMHRD Pune +13 other Symbiosis Colleges",
    },
    { exam: "MAH MBA CET", colleges: "JBIMS, SIMSREE, PUMBA" },
    { exam: "TANCET", colleges: "Anna University, PPG Business School" },
  ];

  const faqs = [
    {
      question: "Can I do MBA without cracking CAT?",
      answer:
        "Yes, you can pursue an MBA without cracking CAT. There are numerous other entrance exams like XAT, NMAT, SNAP, MAT, CMAT, and state-level exams that provide admission to various MBA colleges across India.",
    },
    {
      question: "Which is the top MBA entrance exam in India?",
      answer:
        "CAT (Common Admission Test) is considered the top MBA entrance exam in India. It is conducted for admission to IIMs and other premier B-schools, with over 3 lakh students appearing for it annually.",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="px-4 py-12 md:py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-snug">
                <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                  {" "}
                  Top MBA{" "}
                </span>{" "}
                Entrance Exams{" "}
                <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                  {" "}
                  2026-27{" "}
                </span>{" "}
                | Check The Latest Exam Dates Of
                <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                  {" "}
                  MBA Entrance Exams{" "}
                </span>{" "}
              </h1>

              <p className="text-sm text-gray-400 mb-6">
                Updated on 14th July 2026 | 10:54 am | #TopMBAEntranceExams
              </p>

              <div className="space-y-4 text-gray-300 text-[15px] leading-relaxed">
                <p>
                  <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold text-xl">
                    {" "}
                    Top MBA entrance exams in India{" "}
                  </span>{" "}
                  , such as CAT, XAT, MAT, SNAP, NMAT, and many others, will be
                  held between November 2025 and March 2026. These
                  <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold ">
                    {" "}
                    MBA entrance exams{" "}
                  </span>{" "}
                  open the doors to top MBA colleges in India.
                </p>

                <p>
                  Out of{" "}
                  <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold ">
                    {" "}
                    India's Top MBA entrance exams{" "}
                  </span>{" "}
                  , CAT is the most popular. More than 3 lakh students register
                  every year, competing for seats in IIMs and top B-schools like
                  FMS Delhi and SP Jain.
                </p>

                <p>
                  To secure admission, students should prepare for 3–4
                  <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold ">
                    {" "}
                    MBA entrance exams{" "}
                  </span>{" "}
                  . Learn about the
                  <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold ">
                    {" "}
                    MBA entrance exams 2026{" "}
                  </span>{" "}
                  , patterns, and accepted colleges in this article.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div
              className="    rounded-lg shadow-lg p-6 
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
          border border-[#2a2522]
          backdrop-blur-md"
            >
              <h3 className="text-xl font-bold text-center mb-6 text-white leading-snug">
                Get Your Hands On The Eligibility PDF For <br />
                Top MBA Entrance Exams
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="     w-full px-4 py-3 rounded-md bg-black/40 border border-gray-700 
              text-white placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="     w-full px-4 py-3 rounded-md bg-black/40 border border-gray-700 
              text-white placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <div className="flex gap-2">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 rounded-md bg-black/40 border border-gray-700 
                text-white placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="px-6 py-3 text-white font-semibold rounded-md bg-[linear-gradient(90deg,#E16B3A,#B14820)] hover:opacity-90 transition">
                    Send OTP
                  </button>
                </div>

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="     w-full px-4 py-3 rounded-md bg-black/40 border border-gray-700 
              text-white placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="     w-full px-4 py-3 rounded-md bg-black/40 border border-gray-700 
              text-white placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <button
                  onClick={handleSubmit}
                  className="w-full py-3 text-white font-bold rounded-md text-lg bg-[linear-gradient(90deg,#E16B3A,#B14820)] hover:opacity-90 transition"
                >
                  Download Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CAT Prep Banner */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
      relative overflow-hidden rounded-2xl shadow-2xl 
      bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
      border border-gray-800
    "
        >
          {/* Floating Background Orbs */}
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-40 h-40 rounded-full 
      bg-[radial-gradient(circle,#E16B3A,#B14820)] opacity-20 blur-2xl"
          />

          <motion.div
            animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full 
      bg-[radial-gradient(circle,#000000,#392e29)] opacity-20 blur-2xl"
          />

          <div className="relative flex flex-col md:flex-row items-center justify-between px-8 py-12">
            {/* LEFT SIDE */}
            <div className="md:w-1/2 mb-6 md:mb-0 space-y-4">
              {/* KICKSTART */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="
            inline-block px-8 py-4 rounded-xl shadow-lg 
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
            border border-[#4a3c38] transition-all
          "
              >
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
                  KICKSTART
                </h3>
              </motion.div>

              {/* YOUR */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="
            inline-block px-8 py-4 rounded-xl shadow-lg ml-6
            bg-[linear-gradient(90deg,#E16B3A,#B14820)]
            transition-all
          "
              >
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  YOUR
                </h3>
              </motion.div>

              {/* CAT PREP */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="
            inline-block px-8 py-4 rounded-xl shadow-lg
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
            border border-[#4a3c38] transition-all
          "
              >
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                  MBA PREP
                </h3>
              </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="md:w-1/2 text-center md:text-right"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-300 leading-tight mb-6">
                Access our{" "}
                <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                  FREE
                </span>
                <br />
                learning portal now!
              </h2>

              {/* Button Animation */}
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
                className="
            py-4 px-12 md:px-16 rounded-full text-xl font-bold text-white shadow-xl
            bg-[linear-gradient(90deg,#E16B3A,#B14820)]
            transition-all
          "
              >
                Click Here
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Exam Dates Table */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-8">
            Top{" "}
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              {" "}
              MBA{" "}
            </span>{" "}
            Entrance Exams 2025: Exam Dates
          </h2>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed text-center">
            There are numerous entrance exams for admissions to MBA programs
            across the country. However, the top MBA entrance exams ensure
            candidates an opportunity to get into a top B-school with a good
            reputation and high placements.
          </p>

          <p className="text-gray-300 text-xl md:text-2xl mb-4 leading-relaxed font-medium">
            Here is a list of the top{" "}
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold">
              {" "}
              MBA entrance exams in India
            </span>{" "}
            :-
          </p>
          {/* Section Heading Box */}
          <div
            className="
        rounded-lg p-6 mb-6 text-center border border-[#3a322e]
        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
      "
          >
            <h3
              className="
          text-xl md:text-2xl font-extrabold
          bg-clip-text text-transparent
          bg-[linear-gradient(90deg,#E16B3A,#B14820)]
        "
            >
              Top MBA Entrance Exams 2025: Exam Dates & Paper Pattern
            </h3>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto shadow-lg rounded-lg mb-8 border border-[#2a2522]">
            <table className="w-full bg-black">
              <thead className="bg-[#1a1a1a]">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-white">
                    Entrance Exam
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white">
                    Number of Questions
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white">
                    Time Allotted
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white">
                    Exam Timeline (Tentative)
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white">
                    Official Website
                  </th>
                </tr>
              </thead>

              <tbody>
                {examData.map((exam, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-[#121212]" : "bg-[#1b1b1b]"
                    }
                  >
                    <td className="px-6 py-4 font-semibold text-white">
                      {exam.exam}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {exam.questions}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{exam.time}</td>
                    <td className="px-6 py-4 whitespace-pre-line text-gray-300">
                      {exam.timeline}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={`https://${exam.website}`}
                        className="text-[#E16B3A] hover:underline font-semibold"
                      >
                        {exam.website}
                      </a>
                    </td>
                  </tr>
                ))}

                {/* TOTAL ROW */}
                {/* <tr className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] font-bold text-white">
            <td className="px-6 py-4">Total</td>
            <td className="px-6 py-4">—</td>
            <td className="px-6 py-4">—</td>
            <td className="px-6 py-4">—</td>
            <td className="px-6 py-4">—</td>
          </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <SeparatorLine />

      {/* About Section */}
      <div className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* MAIN HEADING */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
            About The{" "}
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              Top MBA
            </span>{" "}
            Entrance Exams In{" "}
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              India
            </span>{" "}
          </h2>

          {/* PARAGRAPH 1 */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            Amongst the top MBA entrance exams in India, there are more than 50
            entrance tests that will help you gain admission to some of the{" "}
            <a href="#" className="text-[#E16B3A] hover:underline">
              top MBA colleges in India
            </a>
            . These MBA entrance exams 2025 will be conducted at three different
            levels.
          </p>

          {/* BULLET LIST 1 */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
              <div className="text-gray-300">
                <span className="font-bold text-white">National Level:</span>{" "}
                The most populated national-level MBA entrance exams include
                CAT, CMAT and MAT, which pave the way to top IIMs and other
                B-schools.
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
              <div className="text-gray-300">
                <span className="font-bold text-white">State Level:</span> The
                most asked state-level MBA entrance exams include MAH-CET,
                TSICET, APICET, KMAT and TANCET.
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
              <div className="text-gray-300">
                <span className="font-bold text-white">
                  University/College Level:
                </span>{" "}
                Some of the prominent university-level MBA entrance exams
                include XAT, SNAP and MICAT.
              </div>
            </div>
          </div>

          {/* PARAGRAPH 2 */}
          <p className="text-gray-300 mb-8 leading-relaxed">
            Most of the MBA Entrance Exams have undergone severe changes in the
            academic year 2024. Let's learn about these entrance exams for MBA
            in India in detail, along with their exam patterns and the colleges
            that accept them.
          </p>

          {/* SUB HEADING */}
          <h3 className="text-3xl font-extrabold text-white mb-6">
            {" "}
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              MBA
            </span>{" "}
          </h3>

          {/* PARAGRAPHS */}
          <p className="text-gray-300 mb-6 leading-relaxed md:block hidden">
            The Common Admission Test or{" "}
            <a href="#" className="text-[#E16B3A] hover:underline">
              CAT Exam
            </a>{" "}
            is the most popular entrance exam for MBA in India, with over 2 lakh
            applicants per year. Over 1,300 MBA colleges select candidates for
            admission based on marks obtained in this exam. It is a
            computer-based exam held across the country in the month of November
            every year. CAT is the only entrance test for admission to MBA
            programs in the IIMs, and over 150 B-schools accept the CAT score
            for admission to their programs.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            The CAT is a computer-based test (CBT) comprised of 3 sections:
          </p>

          {/* BULLET LIST 2 */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
              <div className="text-gray-300">
                <span className="font-bold text-white">
                  Verbal Ability and Reading Comprehension (VARC):
                </span>{" "}
                Assessing English language skills and comprehension
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
              <div className="text-gray-300">
                <span className="font-bold text-white">
                  Data Interpretation and Logical Reasoning (DILR):
                </span>{" "}
                Testing analytical and problem-solving abilities
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
              <div className="text-gray-300">
                <span className="font-bold text-white">
                  Quantitative Ability (QA):
                </span>{" "}
                Dealing with mathematical skills
              </div>
            </div>
          </div>

          {/* PARAGRAPH 3 */}
          <p className="text-gray-300 mb-8 leading-relaxed">
            There are a total of 68 questions, as seen from the previous year's
            trends of CAT 2024 (24 VARC, 22 DILR, and 22 QA). The examination is
            held for a duration of 2 hours, with 40 minutes being allotted for
            each section, and it uses a +3 marking scheme for each correct
            response and a -1 for each incorrect response (for MCQs). The CAT
            2024 exam pattern saw major changes, including 5 sets in DILR and no
            parajumbles in VARC.
          </p>
          {/* BOX: ALL ABOUT CAT */}
          <div
            className="
    p-6 rounded-lg 
    bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
    border border-[#3a322e]
  "
          >
            <h4 className="text-xl md:text-3xl  font-extrabold text-center text-white mb-6">
              All About CAT
            </h4>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {[
                "CAT Syllabus",
                "CAT Exam Pattern",
                "CAT Eligibility",
                "CAT Preparation",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="
          text-white font-semibold text-center py-4 rounded-lg
          bg-[linear-gradient(90deg,#E16B3A,#B14820)]
          border border-[#3a322e]
          shadow-md transition-all duration-300
          hover:scale-[1.03] hover:shadow-xl hover:border-white
        "
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SeparatorLine />
      {/* Admission Procedure */}
      <div className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-8">
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              {" "}
              MBA
            </span>{" "}
            Admission Procedure Through{" "}
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              {" "}
              Top MBA Entrance Exams
            </span>{" "}
            2025
          </h2>

          {/* TABLE WRAPPER */}
          <div className="overflow-x-auto shadow-lg rounded-lg border border-[#2a2522]">
            <table className="w-full bg-black">
              {/* TABLE HEAD */}
              <thead
                className=" p-6 rounded-lg 
    bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
    border border-[#3a322e"
              >
                <tr>
                  <th className="px-6 py-4 text-left font-bold bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent text-xl md:2xl">
                    Important Parameters
                  </th>
                  <th className="px-6 py-4 text-left font-bold bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent text-xl md:2xl">
                    Description
                  </th>
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody>
                <tr className="bg-[#121212]">
                  <td className="px-6 py-4 font-semibold text-white">
                    Eligibility Criteria
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    At least 50% in graduation, final year students can register
                    as well.
                  </td>
                </tr>

                <tr className="bg-[#1b1b1b]">
                  <td className="px-6 py-4 font-semibold text-white">
                    Age limit
                  </td>
                  <td className="px-6 py-4 text-gray-300">none</td>
                </tr>

                <tr className="bg-[#121212]">
                  <td className="px-6 py-4 font-semibold text-white">
                    Selection of the Entrance exam based on targeted colleges
                  </td>
                  <td className="px-6 py-4 text-gray-300 whitespace-pre-line">
                    CAT scores: 20 IIMs, FMS, IMT, MDI, IMI, and IITs XAT
                    scores: XLRI, GIM, IMT, MICA NMAT score: NMIMS, SP Jain,
                    Great Lakes, KJ Sumaiya SNAP score: 16 Symbiosis member
                    institutes
                  </td>
                </tr>

                <tr className="bg-[#1b1b1b]">
                  <td className="px-6 py-4 font-semibold text-white">
                    Selection of shortlisted students for further admission
                    rounds (Group Discussion-Written Ability Test-Personal
                    Interview)
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Shortlisting is based on exam score, academic background,
                    work experience, and gender diversity. Top B-schools like
                    IIMs, FMS, IMT, and MDI conduct mandatory group discussion
                    sessions.
                  </td>
                </tr>

                <tr className="bg-[#121212]">
                  <td className="px-6 py-4 font-semibold text-white">
                    Declaration of merit lists by the universities
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Institutes announce results in the form of merit lists,
                    downloadable from the official website, containing selected
                    students' details and scores.
                  </td>
                </tr>

                <tr className="bg-[#1b1b1b]">
                  <td className="px-6 py-4 font-semibold text-white">
                    Accepting admission letter and payment of acceptance fees
                  </td>
                  <td className="px-6 py-4 text-gray-300">
                    Candidates must accept the admission offer email and pay the
                    fees before the deadline to confirm admission.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* PARAGRAPH */}
          <p className="text-gray-300 mt-8 leading-relaxed">
            The data/statistics formulated every year in the form of cut-offs,
            weightage, batch profile, gender diversity, academic diversity,
            summer placements, and final placements play a mandatory role in
            shaping the reputation of the institute. When talking about the
            topmost B-schools in our country, most of the institutes' admission
            procedures can be drawn along similar lines.
          </p>
        </div>
      </div>
      <SeparatorLine />
      {/* Colleges Accepting Exams */}
      <div className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
            Colleges Accepting{" "}
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              {" "}
              MBA Entrance Exams
            </span>{" "}
            2025 in{" "}
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              {" "}
              India
            </span>{" "}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            When candidates choose the MBA entrance exams they wish to appear
            for, they must identify the B-schools of their choice. Based on the
            institutes and the entrance exams they accept, candidates should
            finalize their decision for the MBA entrance exams. Here are the top
            MBA entrance exams and the list of major universities that accept
            them for admission.
          </p>

          {/* SECTION HEADING BOX */}
          <div
            className="
        rounded-lg p-6 mb-6 text-center border border-[#3a322e]
        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
      "
          >
            <h3
              className="
          text-xl md:text-2xl font-extrabold
          bg-clip-text text-transparent
          bg-[linear-gradient(90deg,#E16B3A,#B14820)]
        "
            >
              Top B-schools Accepting MBA Entrance Exams 2025
            </h3>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto shadow-lg rounded-lg border border-[#2a2522]">
            <table className="w-full bg-black">
              {/* TABLE HEADER */}
              <thead className="bg-[#1a1a1a]">
                <tr>
                  <th className="px-6 py-4 text-left font-bold bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent text-xl md:2xl">
                    MBA Entrance Exams
                  </th>
                  <th className="px-6 py-4 text-left font-bold bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent text-xl md:2xl">
                    Top B-schools Across India
                  </th>
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody>
                {collegeData.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-[#121212]" : "bg-[#1b1b1b]"
                    }
                  >
                    <td className="px-6 py-4 font-semibold text-white">
                      {item.exam}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{item.colleges}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <SeparatorLine />
      {/* FAQ Section */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="
            rounded-lg overflow-hidden border border-[#3a322e]
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
            shadow-md
          "
              >
                {/* Question button */}
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="
              w-full px-6 py-4 text-left flex items-center justify-between
              hover:bg-black/40 transition-all
            "
                >
                  <span
                    className="
                font-semibold text-lg
                bg-clip-text text-transparent
                bg-[linear-gradient(90deg,#E16B3A,#B14820)]
              "
                  >
                    {faq.question}
                  </span>

                  {/* Icons */}
                  {expandedFaq === index ? (
                    <ChevronDown className="w-5 h-5 text-[#E16B3A] flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-[#E16B3A] flex-shrink-0" />
                  )}
                </button>

                {/* Answer */}
                {expandedFaq === index && (
                  <div
                    className="
                px-6 py-4 border-t border-[#3a322e]
                bg-black/60
              "
                  >
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MbaExam;
