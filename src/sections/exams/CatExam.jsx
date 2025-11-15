import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SeparatorLine from "../../components/SepratorLine";

const CatExam = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    pincode: "",
  });

  const [expandedFaq, setExpandedFaq] = useState(null);

  // put this above your CatExam component in CatExam.jsx
  const Feature = ({ text }) => (
    <div className="flex items-start gap-2">
      {/* inline check icon — no extra imports required */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-[#E16B3A] flex-shrink-0 mt-0.5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M20.03 6.47a.75.75 0 01.07 1.06l-9 10.5a.75.75 0 01-1.08.02l-5-5a.75.75 0 111.06-1.06l4.47 4.47 8.47-9.88a.75.75 0 011.06-.07z"
          clipRule="evenodd"
        />
      </svg>

      <p className="text-gray-300">{text}</p>
    </div>
  );

  const catSections = [
    {
      section: "Verbal Ability and Reading Comprehension (VARC)",
      questions: "24",
      time: "40 minutes",
      description:
        "Reading comprehension passages, para jumbles, para completion, odd one out",
    },
    {
      section: "Data Interpretation and Logical Reasoning (DILR)",
      questions: "22",
      time: "40 minutes",
      description:
        "Data interpretation sets, logical reasoning puzzles, analytical reasoning",
    },
    {
      section: "Quantitative Ability (QA)",
      questions: "22",
      time: "40 minutes",
      description:
        "Arithmetic, algebra, geometry, number system, modern mathematics",
    },
  ];

  const importantDates = [
    { event: "CAT 2025 Notification", date: "July 2025" },
    { event: "CAT 2025 Registration Start", date: "August 2025" },
    { event: "CAT 2025 Registration End", date: "September 2025" },
    { event: "CAT 2025 Admit Card", date: "October 2025" },
    { event: "CAT 2025 Exam Date", date: "Last Sunday of November 2025" },
    { event: "CAT 2025 Answer Key", date: "December 2025" },
    { event: "CAT 2025 Result", date: "January 2026" },
  ];

  const topColleges = [
    { name: "IIM Ahmedabad", cutoff: "99+" },
    { name: "IIM Bangalore", cutoff: "99+" },
    { name: "IIM Calcutta", cutoff: "99+" },
    { name: "IIM Lucknow", cutoff: "97+" },
    { name: "IIM Kozhikode", cutoff: "97+" },
    { name: "IIM Indore", cutoff: "95+" },
    { name: "FMS Delhi", cutoff: "98+" },
    { name: "XLRI Jamshedpur", cutoff: "95+" },
    { name: "SP Jain Mumbai", cutoff: "95+" },
    { name: "MDI Gurgaon", cutoff: "94+" },
  ];

  const faqs = [
    {
      question: "What is the CAT exam pattern for 2025?",
      answer:
        "CAT 2025 consists of 3 sections with 68 questions in total. VARC has 24 questions, DILR has 22 questions, and QA has 22 questions. Each section has 40 minutes duration with no negative marking for non-MCQs.",
    },
    {
      question: "What is the minimum percentile required for IIMs?",
      answer:
        "The minimum CAT percentile varies by IIM. Top IIMs (A, B, C) typically require 99+ percentile, while newer IIMs may accept 90-95 percentile. Each IIM also has sectional cutoffs that must be cleared.",
    },
    {
      question: "Can final year students apply for CAT 2025?",
      answer:
        "Yes, final year students of graduation can apply for CAT 2025. However, they must complete their graduation with the required percentage before joining the MBA program.",
    },
    {
      question: "How many times can I attempt CAT?",
      answer:
        "There is no restriction on the number of attempts for CAT. You can take the exam as many times as you want, provided you meet the eligibility criteria each year.",
    },
  ];

  // CAT Prep Slider States
  const catPrepCards = [
    {
      title: "For VARC Section",
      points: [
        "Read newspapers, magazines, and articles daily",
        "Practice RC passages from diverse topics",
        "Build vocabulary consistently",
        "Aim for 2–3 minutes per question",
      ],
    },
    {
      title: "For DILR Section",
      points: [
        "Practice puzzles and data sets regularly",
        "Identify solvable sets quickly",
        "Focus on accuracy more than attempts",
        "Improve speed through consistent practice",
      ],
    },
    {
      title: "For QA Section",
      points: [
        "Master fundamental concepts",
        "Practice mental calculations & shortcuts",
        "Focus on arithmetic & algebra",
        "Practice previous year questions",
      ],
    },
    {
      title: "General Strategy",
      points: [
        "Take full-length mock tests regularly",
        "Analyze your performance after each mock",
        "Maintain a mistake journal",
        "Stay consistent with your preparation",
      ],
    },
  ];

  const [catPrepCurrent, setCatPrepCurrent] = useState(0);
  const [catPrepPaused, setCatPrepPaused] = useState(false);

  const catPrepNext = () =>
    setCatPrepCurrent((prev) => (prev + 1) % catPrepCards.length);

  const catPrepPrev = () =>
    setCatPrepCurrent((prev) =>
      prev === 0 ? catPrepCards.length - 1 : prev - 1
    );

  // Auto Slide every 3s (pause on hover)
  useEffect(() => {
    if (catPrepPaused) return;

    const interval = setInterval(() => {
      setCatPrepCurrent((prev) => (prev + 1) % catPrepCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [catPrepPaused]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const cards = [1, 2];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  //  preparation cards
  const [prepCurrent, setPrepCurrent] = useState(0);
  const prepCards = [1, 2, 3, 4]; // total 4 preparation cards

  const nextPrep = () => {
    setPrepCurrent((prev) => (prev + 1) % prepCards.length);
  };

  const prevPrep = () => {
    setPrepCurrent((prev) => (prev - 1 + prepCards.length) % prepCards.length);
  };

  // auto-slide
  useEffect(() => {
    const interval = setInterval(nextPrep, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* LEFT CONTENT */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                CAT 2025:{" "}
                <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                  {" "}
                  Complete Guide{" "}
                </span>{" "}
                to Common Admission Test | Exam Date, Pattern, Syllabus &
                Preparation
              </h1>

              <p className="text-sm text-gray-400 mb-6">
                Updated on 14th November 2025 | 10:54 am | #CAT2025
              </p>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <span className="font-bold md:text-2xl bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                    CAT 2025 (Common Admission Test){" "}
                  </span>
                  is the most prestigious and competitive MBA entrance exam in
                  India, conducted by the Indian Institutes of Management (IIMs)
                  on a rotational basis. CAT 2025 will be held on the{" "}
                  <span className="font-bold text-white">
                    last Sunday of November 2025
                  </span>
                  , opening doors to top Indian B-Schools.
                </p>

                <p>
                  With over{" "}
                  <span className="font-bold text-white">
                    3 lakh candidates
                  </span>{" "}
                  appearing annually, CAT provides admissions to IIM Ahmedabad,
                  IIM Bangalore, IIM Calcutta, FMS Delhi, XLRI, SP Jain, and
                  1,300+ management institutes in India.
                </p>

                <p>
                  CAT 2025 will be a{" "}
                  <span className="font-bold text-white">
                    computer-based test
                  </span>
                  with 68 questions across VARC, DILR, and QA. Each section has
                  a mandatory
                  <span className="font-bold text-white">
                    {" "}
                    40-minute time limit
                  </span>
                  . A strategic plan and consistent practice are essential to
                  score well.
                </p>
              </div>
            </div>

            {/* FORM SECTION */}
            <div
              className="
          rounded-lg shadow-lg p-6 
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
          border border-[#2a2522]
          backdrop-blur-md
        "
            >
              <h3 className="text-xl font-bold text-center text-white mb-6">
                Get Free CAT 2025
                <br />
                Preparation Material
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="
              w-full px-4 py-3 rounded-md bg-black/40 border border-gray-700 
              text-white placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-orange-500
            "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="
              w-full px-4 py-3 rounded-md bg-black/40 border border-gray-700 
              text-white placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-orange-500
            "
                />

                <div className="flex gap-2">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="
                flex-1 px-4 py-3 rounded-md bg-black/40 border border-gray-700 
                text-white placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-orange-500
              "
                  />

                  {/* Send OTP button with your gradient */}
                  <button
                    className="
                px-6 py-3 text-white font-semibold rounded-md 
                bg-[linear-gradient(90deg,#E16B3A,#B14820)]
                hover:opacity-90 transition
              "
                  >
                    Send OTP
                  </button>
                </div>

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="
              w-full px-4 py-3 rounded-md bg-black/40 border border-gray-700 
              text-white placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-orange-500
            "
                />

                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="
              w-full px-4 py-3 rounded-md bg-black/40 border border-gray-700 
              text-white placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-orange-500
            "
                />

                <button
                  onClick={handleSubmit}
                  className="
              w-full py-3 text-lg font-bold text-white rounded-md
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]
              hover:opacity-90 transition
            "
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
                  CAT PREP
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

      {/* CAT 2025 Courses Section */}
      <div className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              CAT 2025 Courses Curated By CAT Experts
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ace CAT 2025 with a focused 4-month plan to strengthen key areas,
              refine strategies, and boost preparation for CAT 2025.
            </p>
          </div>

          <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Test Series Card */}
            <div
              className="
          rounded-xl shadow-xl overflow-hidden border border-[#2a2522]
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
        "
            >
              {/* Header */}
              <div className="relative h-48 flex items-center justify-center">
                <div className="text-center space-y-1">
                  <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">
                    CAT 2025
                  </h3>
                  <p className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                    Test Series
                  </p>

                  <div className="mt-4 text-sm text-gray-300">
                    <p className="font-semibold">Validity till</p>
                    <p className="text-lg font-bold text-[#4aa3ff]">
                      Jan. 10, 2026
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Closest to the actual CAT
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Price Section */}
                <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b border-[#4a3c38]">
                  <span className="text-xl text-gray-400 line-through">
                    ₹ 6,000
                  </span>
                  <span className="text-3xl font-bold text-[#E16B3A]">
                    ₹ 3,150
                  </span>
                  <span className="bg-black/40 text-[#E16B3A] px-3 py-1 rounded-full text-sm font-semibold border border-[#E16B3A]/40">
                    (48% off)
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  <Feature text="30 CAT Full-Length Mocks (15 CDC FLEXI + 15 CDC PRO)" />
                  <Feature text="2260+ Additional Practice Questions in Topic Tests" />
                  <Feature text="Includes 21 PYQ mocks" />
                  <Feature text="Video & Text Solutions" />
                </div>

                {/* Button */}
                <button
                  className="
              w-full text-white font-bold py-3 rounded-lg text-lg
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]
              hover:opacity-90 hover:scale-[1.02] transition-all
              shadow-lg
            "
                >
                  Enroll now
                </button>
              </div>
            </div>

            {/* Comprehensive Course Card */}
            <div
              className="
          rounded-xl shadow-xl overflow-hidden border border-[#2a2522]
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
        "
            >
              {/* Header */}
              <div className="relative h-48 flex items-center justify-center">
                <div className="text-center space-y-1">
                  <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">
                    CAT 2025
                  </h3>
                  <p className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                    Test Series
                  </p>
                  <p className="text-xl font-semibold text-white">
                    Comprehensive
                  </p>

                  <div className="mt-2 text-sm text-gray-300">
                    <p className="font-semibold">Validity till</p>
                    <p className="text-lg font-bold text-[#4aa3ff]">
                      Jan. 10, 2026
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Closest to the actual CAT
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Price Section */}
                <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b border-[#4a3c38]">
                  <span className="text-xl text-gray-400 line-through">
                    ₹ 7,500
                  </span>
                  <span className="text-3xl font-bold text-[#E16B3A]">
                    ₹ 3,900
                  </span>
                  <span className="bg-black/40 text-[#E16B3A] px-3 py-1 rounded-full text-sm font-semibold border border-[#E16B3A]/40">
                    (48% off)
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  <Feature text="30 CAT Full-Length Mocks (15 CDC FLEXI + 15 CDC PRO)" />
                  <Feature text="3250+ Sectional & Topic Tests" />
                  <Feature text="Includes 21 PYQ mocks" />
                  <Feature text="Video & Text Solutions" />
                </div>

                {/* Button */}
                <button
                  className="
              w-full text-white font-bold py-3 rounded-lg text-lg
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]
              hover:opacity-90 hover:scale-[1.02] transition-all
              shadow-lg
            "
                >
                  Enroll now
                </button>
              </div>
            </div>
          </div>
          {/* MOBILE SLIDER VIEW */}
          <div
            className="md:hidden relative overflow-hidden max-w-md mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full inset-0"
              >
                {current === 0 && (
                  <div>
                    {/* --- FIRST CARD CODE EXACTLY AS YOUR CODE --- */}
                    {/* Test Series Card */}
                    <div
                      className="
              rounded-xl shadow-xl overflow-hidden border border-[#2a2522]
              bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
            "
                    >
                      {/* Header */}
                      <div className="relative h-48 flex items-center justify-center">
                        <div className="text-center space-y-1">
                          <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">
                            CAT 2025
                          </h3>
                          <p className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                            Test Series
                          </p>

                          <div className="mt-4 text-sm text-gray-300">
                            <p className="font-semibold">Validity till</p>
                            <p className="text-lg font-bold text-[#4aa3ff]">
                              Jan. 10, 2026
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Closest to the actual CAT
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-6">
                        {/* Price Section */}
                        <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b border-[#4a3c38]">
                          <span className="text-xl text-gray-400 line-through">
                            ₹ 6,000
                          </span>
                          <span className="text-3xl font-bold text-[#E16B3A]">
                            ₹ 3,150
                          </span>
                          <span className="bg-black/40 text-[#E16B3A] px-3 py-1 rounded-full text-sm font-semibold border border-[#E16B3A]/40">
                            (48% off)
                          </span>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-6">
                          <Feature text="30 CAT Full-Length Mocks (15 CDC FLEXI + 15 CDC PRO)" />
                          <Feature text="2260+ Additional Practice Questions in Topic Tests" />
                          <Feature text="Includes 21 PYQ mocks" />
                          <Feature text="Video & Text Solutions" />
                        </div>

                        {/* Button */}
                        <button
                          className="
                  w-full text-white font-bold py-3 rounded-lg text-lg
                  bg-[linear-gradient(90deg,#E16B3A,#B14820)]
                  hover:opacity-90 hover:scale-[1.02] transition-all
                  shadow-lg
                "
                        >
                          Enroll now
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {current === 1 && (
                  <div>
                    {/* --- SECOND CARD EXACT AS IT IS --- */}
                    <div
                      className="
              rounded-xl shadow-xl overflow-hidden border border-[#2a2522]
              bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
            "
                    >
                      {/* Header */}
                      <div className="relative h-48 flex items-center justify-center">
                        <div className="text-center space-y-1">
                          <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">
                            CAT 2025
                          </h3>
                          <p className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                            Test Series
                          </p>
                          <p className="text-xl font-semibold text-white">
                            Comprehensive
                          </p>

                          <div className="mt-2 text-sm text-gray-300">
                            <p className="font-semibold">Validity till</p>
                            <p className="text-lg font-bold text-[#4aa3ff]">
                              Jan. 10, 2026
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Closest to the actual CAT
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-6">
                        {/* Price Section */}
                        <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b border-[#4a3c38]">
                          <span className="text-xl text-gray-400 line-through">
                            ₹ 7,500
                          </span>
                          <span className="text-3xl font-bold text-[#E16B3A]">
                            ₹ 3,900
                          </span>
                          <span className="bg-black/40 text-[#E16B3A] px-3 py-1 rounded-full text-sm font-semibold border border-[#E16B3A]/40">
                            (48% off)
                          </span>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-6">
                          <Feature text="30 CAT Full-Length Mocks (15 CDC FLEXI + 15 CDC PRO)" />
                          <Feature text="3250+ Sectional & Topic Tests" />
                          <Feature text="Includes 21 PYQ mocks" />
                          <Feature text="Video & Text Solutions" />
                        </div>

                        {/* Button */}
                        <button
                          className="
                  w-full text-white font-bold py-3 rounded-lg text-lg
                  bg-[linear-gradient(90deg,#E16B3A,#B14820)]
                  hover:opacity-90 hover:scale-[1.02] transition-all
                  shadow-lg
                "
                        >
                          Enroll now
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* SLIDER DOTS */}
            <div className="flex justify-center mt-4 gap-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${
                    current === index ? "bg-[#E16B3A]" : "bg-gray-600"
                  }`}
                ></button>
              ))}
            </div>

            {/* ARROWS */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -mt-7 left-3 -translate-y-1/2 p-2 bg-white/50 text-white rounded-full "
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 -mt-7 right-3 -translate-y-1/2 p-2 bg-white/50 text-white rounded-full"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <SeparatorLine />

      {/* CAT Exam Pattern */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
            CAT 2025 Exam Pattern
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            CAT 2025 follows a well-defined pattern with three sections tested
            over 120 minutes. Understanding the exam pattern is crucial for
            effective preparation. Here's the detailed breakdown of CAT 2025
            exam pattern:
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
              CAT 2025 Section-wise Details
            </h3>
          </div>

          {/* TABLE (unchanged) */}
          <div className="overflow-x-auto shadow-lg rounded-lg mb-8 border border-[#2a2522]">
            <table className="w-full bg-black">
              <thead className="bg-[#1a1a1a]">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-white">
                    Section
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white">
                    No. of Questions
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white">
                    Time Allotted
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white">
                    Topics Covered
                  </th>
                </tr>
              </thead>

              <tbody>
                {catSections.map((section, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-[#121212]" : "bg-[#1b1b1b]"
                    }
                  >
                    <td className="px-6 py-4 font-semibold text-white">
                      {section.section}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {section.questions}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{section.time}</td>
                    <td className="px-6 py-4 text-gray-300">
                      {section.description}
                    </td>
                  </tr>
                ))}

                <tr className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] font-bold text-white">
                  <td className="px-6 py-4">Total</td>
                  <td className="px-6 py-4">68</td>
                  <td className="px-6 py-4">120 minutes</td>
                  <td className="px-6 py-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* MARKING SCHEME BOX */}
          <div
            className="
        p-6 mb-6 border-l-4 border-[#E16B3A]
        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
        rounded-lg
      "
          >
            <h4 className="font-bold text-white mb-4 text-xl">
              Marking Scheme:
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                • <span className="font-semibold text-white">+3 marks</span> for
                each correct answer
              </li>
              <li>
                • <span className="font-semibold text-white">-1 mark</span> for
                each incorrect MCQ
              </li>
              <li>
                •{" "}
                <span className="font-semibold text-white">
                  No negative marking
                </span>{" "}
                for TITA
              </li>
              <li>
                • Sectional limit:{" "}
                <span className="font-semibold text-white">40 minutes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <SeparatorLine />
      {/* Important Dates */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            CAT 2025 Important Dates
          </h2>

          {/* Gradient Header Box */}
          <div
            className="
        rounded-lg p-6 mb-6 text-center
        border border-[#3a322e]
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
              CAT 2025 Schedule (Tentative)
            </h3>
          </div>

          {/* Table */}
          <div className="overflow-x-auto shadow-lg rounded-lg border border-[#2a2522]">
            <table className="w-full bg-black">
              <thead className="bg-[#1a1a1a]">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-white">
                    Event
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white">
                    Date (Tentative)
                  </th>
                </tr>
              </thead>

              <tbody>
                {importantDates.map((item, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-[#121212]" : "bg-[#1b1b1b]"
                    }
                  >
                    <td className="px-6 py-4 font-semibold text-white">
                      {item.event}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note Box */}
          <div
            className="
        mt-6 p-6 rounded-lg border-l-4 border-[#E16B3A]
        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
      "
          >
            <p className="text-gray-300 leading-relaxed">
              <span className="font-bold text-white">Note:</span> The dates
              mentioned above are tentative based on previous year trends.
              Official dates will be announced by the conducting IIM at{" "}
              <a
                href="https://iimcat.ac.in"
                className="text-[#E16B3A] font-semibold hover:underline"
              >
                iimcat.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>

      <SeparatorLine />
      {/* Eligibility Criteria */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            CAT 2025 Eligibility Criteria
          </h2>

          <div
            className="
        rounded-lg p-8 shadow-xl border border-[#2a2522]
        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
      "
          >
            <div className="space-y-8">
              {/* Educational Qualification */}
              <div>
                <h3
                  className="
              text-xl font-extrabold mb-3
              bg-clip-text text-transparent
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]
            "
                >
                  Educational Qualification
                </h3>

                <div className="space-y-2 text-gray-300 leading-relaxed">
                  <div className="flex items-start">
                    <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
                    <div>
                      Bachelor's degree with at least{" "}
                      <span className="font-bold text-white">50% marks</span> or
                      equivalent CGPA (45% for SC/ST/PWD candidates)
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
                    <div>
                      Final year students can also apply (subject to completing
                      the degree with required percentage)
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
                    <div>
                      Professional degree holders (CA / CS / ICWA) with required
                      percentage are eligible
                    </div>
                  </div>
                </div>
              </div>

              {/* Age Limit */}
              <div>
                <h3
                  className="
              text-xl font-extrabold mb-3
              bg-clip-text text-transparent
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]
            "
                >
                  Age Limit
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  There is{" "}
                  <span className="font-bold text-white">no age limit</span> to
                  appear for the CAT exam.
                </p>
              </div>

              {/* Attempts */}
              <div>
                <h3
                  className="
              text-xl font-extrabold mb-3
              bg-clip-text text-transparent
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]
            "
                >
                  Number of Attempts
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  There is{" "}
                  <span className="font-bold text-white">no restriction</span>{" "}
                  on the number of attempts for CAT.
                </p>
              </div>

              {/* Nationality */}
              <div>
                <h3
                  className="
              text-xl font-extrabold mb-3
              bg-clip-text text-transparent
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]
            "
                >
                  Nationality
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Indian nationals as well as{" "}
                  <span className="font-bold text-white">
                    foreign nationals
                  </span>{" "}
                  can appear for CAT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SeparatorLine />

      {/* Top Colleges */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Top MBA Colleges Accepting CAT 2025 Score
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            CAT score is accepted by over 1,300 B-schools across India. Here are
            some of the top MBA colleges that accept CAT scores along with their
            expected cutoff percentiles:
          </p>

          {/* Gradient Header Box */}
          <div
            className="
        rounded-lg p-6 mb-6 text-center shadow-lg
        border border-[#413630]
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
              Top B-Schools and Expected CAT Cutoffs
            </h3>
          </div>

          {/* Dark Table */}
          <div className="overflow-x-auto shadow-xl rounded-lg border border-[#2a2522]">
            <table className="w-full bg-black text-left">
              <thead className="bg-[#1a1a1a]">
                <tr>
                  <th className="px-6 py-4 font-bold text-white">
                    B-School Name
                  </th>
                  <th className="px-6 py-4 font-bold text-white">
                    Expected CAT Cutoff (Percentile)
                  </th>
                </tr>
              </thead>

              <tbody>
                {topColleges.map((college, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-[#121212] hover:bg-[#1f1f1f] transition"
                        : "bg-[#1b1b1b] hover:bg-[#292929] transition"
                    }
                  >
                    <td className="px-6 py-4 font-semibold text-gray-200">
                      {college.name}
                    </td>
                    <td className="px-6 py-4 text-gray-300">
                      {college.cutoff}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Cards */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div
              className="
          p-6 rounded-lg shadow-lg border-l-4 border-[#E16B3A]
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
        "
            >
              <h4
                className="
            font-extrabold mb-3
            bg-clip-text text-transparent
            bg-[linear-gradient(90deg,#E16B3A,#B14820)]
          "
              >
                All 20 IIMs accept CAT scores:
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                IIM Ahmedabad, Bangalore, Calcutta, Lucknow, Kozhikode, Indore,
                Shillong, Rohtak, Ranchi, Raipur, Trichy, Udaipur, Kashipur,
                Nagpur, Visakhapatnam, Amritsar, Bodh Gaya, Jammu, Sambalpur,
                Sirmaur
              </p>
            </div>

            <div
              className="
          p-6 rounded-lg shadow-lg  border-l-4 border-[#E16B3A]
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
        "
            >
              <h4
                className="
            font-extrabold mb-3
        bg-clip-text text-transparent
        bg-[linear-gradient(90deg,#E16B3A,#B14820)]
          "
              >
                Other Premier Institutions:
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                FMS Delhi, XLRI Jamshedpur, SP Jain Mumbai, MDI Gurgaon, NITIE
                Mumbai, IIT Delhi, IIT Bombay, IIT Kharagpur, IIT Madras, IMT
                Ghaziabad, IMI Delhi, JBIMS Mumbai
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <SeparatorLine />

      {/* CAT Preparation Strategy */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            CAT 2025 Preparation Strategy
          </h2>

          {/* ===================== DESKTOP VIEW ===================== */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {/* VARC */}
            <div className="relative">
              <div
                className="ml-2 p-6 rounded-xl shadow-lg border-l-4 border-[#E16B3A]
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"
              >
                <h3
                  className="text-xl font-bold mb-4 bg-clip-text text-transparent
            bg-[linear-gradient(90deg,#E16B3A,#B14820)]"
                >
                  For VARC Section
                </h3>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Read
                    newspapers, magazines, and articles daily
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Practice RC
                    passages from diverse topics
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Build
                    vocabulary consistently
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Aim for 2–3
                    minutes per question
                  </li>
                </ul>
              </div>
            </div>

            {/* DILR */}
            <div className="relative">
              <div
                className="ml-2 p-6 rounded-xl shadow-lg border-l-4 border-[#E16B3A]
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"
              >
                <h3
                  className="text-xl font-bold mb-4 bg-clip-text text-transparent
            bg-[linear-gradient(90deg,#E16B3A,#B14820)]"
                >
                  For DILR Section
                </h3>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Practice
                    puzzles and data sets regularly
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Identify
                    solvable sets quickly
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Focus on
                    accuracy more than attempts
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Improve speed
                    through consistent practice
                  </li>
                </ul>
              </div>
            </div>

            {/* QA */}
            <div className="relative">
              <div
                className="ml-2 p-6 rounded-xl shadow-lg border-l-4 border-[#E16B3A]
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"
              >
                <h3
                  className="text-xl font-bold mb-4 bg-clip-text text-transparent
            bg-[linear-gradient(90deg,#E16B3A,#B14820)]"
                >
                  For QA Section
                </h3>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Master
                    fundamental concepts
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Practice
                    mental calculations & shortcuts
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Focus on
                    arithmetic & algebra
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Practice
                    previous year questions
                  </li>
                </ul>
              </div>
            </div>

            {/* General Strategy */}
            <div className="relative">
              <div
                className="ml-2 p-6 rounded-xl shadow-lg border-l-4 border-[#E16B3A]
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"
              >
                <h3
                  className="text-xl font-bold mb-4 bg-clip-text text-transparent
            bg-[linear-gradient(90deg,#E16B3A,#B14820)]"
                >
                  General Strategy
                </h3>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Take
                    full-length mock tests regularly
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Analyze your
                    performance after each mock
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Maintain a
                    mistake journal
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E16B3A] mr-2">•</span> Stay
                    consistent with your preparation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ===================== MOBILE SLIDER ===================== */}
          <div
            className="md:hidden relative max-w-md mx-auto mt-6"
            onMouseEnter={() => setCatPrepPaused(true)}
            onMouseLeave={() => setCatPrepPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={catPrepCurrent}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full inset-0"
              >
                <div
                  className="ml-2 p-6 rounded-xl shadow-lg border-l-4 border-[#E16B3A]
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"
                >
                  <h3
                    className="text-xl font-bold mb-4 bg-clip-text text-transparent
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]"
                  >
                    {catPrepCards[catPrepCurrent].title}
                  </h3>

                  <ul className="space-y-3 text-gray-300">
                    {catPrepCards[catPrepCurrent].points.map((p, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#E16B3A] mr-2">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-3">
              {catPrepCards.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCatPrepCurrent(i)}
                  className={`w-3 h-3 rounded-full ${
                    catPrepCurrent === i ? "bg-[#E16B3A]" : "bg-gray-600"
                  }`}
                ></div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={catPrepPrev}
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 text-white bg-white/20 rounded-full backdrop-blur"
            >
              ‹
            </button>
            <button
              onClick={catPrepNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 text-white bg-white/20 rounded-full backdrop-blur"
            >
              ›
            </button>
          </div>

          {/* PRO TIP BOX */}
          <div
            className="mt-8 ml-2 p-6 rounded-xl border-l-4 border-[#E16B3A]
        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"
          >
            <h4 className="font-bold mb-2 text-white">Pro Tip:</h4>
            <p className="text-gray-300">
              Start your CAT preparation at least 6–8 months before the exam.
              Build strong fundamentals first, then increase the difficulty.
              Consistent mock tests are the key to success.
            </p>
          </div>
        </div>
      </div>

      <SeparatorLine />
      {/* FAQ Section */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Frequently Asked Questions About CAT 2025
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

      {/* Footer CTA */}
      {/* <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your CAT 2025 Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of aspirants and get access to expert guidance, study
            materials, and mock tests
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transition-colors">
            Start Preparation Now
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default CatExam;
