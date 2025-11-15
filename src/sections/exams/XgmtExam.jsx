import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SeparatorLine from "../../components/SepratorLine";

const XgmtExam = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    pincode: "",
  });

  const [expandedFaq, setExpandedFaq] = useState(null);

  const xgmtSections = [
    {
      section: "Business Analytics & Data Interpretation",
      questions: "25",
      time: "45 minutes",
      description:
        "Data interpretation, statistical analysis, business case studies, data sufficiency",
    },
    {
      section: "Quantitative Ability & Reasoning",
      questions: "22",
      time: "45 minutes",
      description:
        "Advanced mathematics, logical reasoning, quantitative comparison, problem solving",
    },
    {
      section: "Verbal Ability & Critical Reasoning",
      questions: "23",
      time: "45 minutes",
      description:
        "Reading comprehension, critical reasoning, vocabulary in context, argument analysis",
    },
    {
      section: "General Awareness & Business Fundamentals",
      questions: "20",
      time: "30 minutes",
      description:
        "Current business trends, economics, corporate world, management principles",
    },
  ];

  const importantDates = [
    { event: "X-GMT 2025 Notification", date: "December 2024" },
    { event: "X-GMT 2025 Registration Start", date: "January 2025" },
    { event: "X-GMT 2025 Registration End", date: "March 2025" },
    { event: "X-GMT 2025 Admit Card", date: "April 2025" },
    { event: "X-GMT 2025 Exam Date", date: "April 2025" },
    { event: "X-GMT 2025 Answer Key", date: "May 2025" },
    { event: "X-GMT 2025 Result", date: "May 2025" },
  ];

  const topColleges = [
    { name: "XLRI Jamshedpur (Business Analytics)", cutoff: "85+" },
    { name: "SP Jain Mumbai (Global Business)", cutoff: "80+" },
    { name: "IMI Delhi (Analytics Program)", cutoff: "78+" },
    { name: "XIM Bhubaneswar (Business Analytics)", cutoff: "75+" },
    { name: "Great Lakes Chennai (Analytics)", cutoff: "75+" },
    { name: "TAPMI Manipal (Analytics)", cutoff: "70+" },
    { name: "LIBA Chennai (Analytics)", cutoff: "68+" },
    { name: "IFIM Bangalore (Business Analytics)", cutoff: "65+" },
    { name: "XIME Bangalore (Analytics)", cutoff: "65+" },
    { name: "Christ University (Analytics)", cutoff: "60+" },
  ];

  const faqs = [
    {
      question: "What is X-GMT and who conducts it?",
      answer:
        "X-GMT (Xavier General Management Aptitude Test) is a specialized management aptitude test conducted by XLRI Jamshedpur for admission to various general management and business analytics programs offered by XLRI and other participating institutes.",
    },
    {
      question: "What programs can I get through X-GMT?",
      answer:
        "X-GMT is primarily for XLRI's General Management Program (GMP), Business Analytics programs, and other specialized management courses at XLRI and other participating B-schools that focus on working professionals and analytics domains.",
    },
    {
      question: "Is work experience required for X-GMT?",
      answer:
        "Yes, for most programs through X-GMT, especially XLRI's GMP, significant work experience is required (typically 3+ years). However, some analytics programs may accept fresh graduates.",
    },
    {
      question: "How is X-GMT different from XAT?",
      answer:
        "X-GMT focuses more on business analytics, data interpretation, and is designed for experienced professionals, while XAT is for regular MBA programs. X-GMT has stronger emphasis on analytical skills and business fundamentals.",
    },
  ];

  // ==== Preparation Slider States ====
  const prepCards = [
    {
      title: "For Business Analytics & DI",
      points: [
        "Practice complex data interpretation sets regularly",
        "Learn statistical tools and analytical techniques",
        "Work on business case studies and scenario analysis",
        "Focus on data sufficiency and logical data analysis",
      ],
    },
    {
      title: "For Quantitative Ability",
      points: [
        "Master advanced mathematical concepts and applications",
        "Practice quantitative comparison and problem solving",
        "Focus on business mathematics and financial calculations",
        "Develop speed and accuracy in calculations",
      ],
    },
    {
      title: "For Verbal & Critical Reasoning",
      points: [
        "Read business publications and analytical reports",
        "Practice critical reasoning and argument analysis",
        "Work on reading comprehension with complex passages",
        "Develop vocabulary in business context",
      ],
    },
    {
      title: "For General Awareness",
      points: [
        "Follow current business trends and economic updates",
        "Read about corporate world and management principles",
        "Stay updated with industry analysis and market trends",
        "Focus on business fundamentals and corporate governance",
      ],
    },
  ];

  const [prepCurrent, setPrepCurrent] = useState(0);
  const [prepPaused, setPrepPaused] = useState(false);

  const prepNext = () =>
    setPrepCurrent((prev) => (prev + 1) % prepCards.length);

  const prepPrev = () =>
    setPrepCurrent((prev) => (prev === 0 ? prepCards.length - 1 : prev - 1));

  // ==== AUTOPLAY ====
  useEffect(() => {
    if (prepPaused) return;

    const interval = setInterval(() => {
      setPrepCurrent((prev) => (prev + 1) % prepCards.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [prepPaused]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const Feature = ({ text }) => (
    <div className="flex items-start gap-2">
      <Check className="w-5 h-5 text-[#E16B3A] flex-shrink-0 mt-0.5" />
      <p className="text-gray-300">{text}</p>
    </div>
  );

  // Slider States
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Cards for mobile slider
  const cards = [0, 1];

  // Next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  // Previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  // AUTOPLAY
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, current]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="px-4 py-12 md:py-10 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* LEFT CONTENT */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-snug">
                <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                  X-GMT 2025:
                </span>{" "}
                Complete Guide to Xavier General Management Test | Exam Date,
                Pattern, Syllabus & Preparation
              </h1>

              <p className="text-sm text-gray-400 mb-6">
                Updated on 14th November 2024 | 10:54 am | #XGMT2025
              </p>

              <div className="space-y-4 text-gray-300 text-[15px] leading-relaxed">
                <p>
                  <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold">
                    X-GMT 2025 (Xavier General Management Aptitude Test)
                  </span>{" "}
                  is a specialized management entrance exam conducted by XLRI
                  Jamshedpur for admission to General Management and Business
                  Analytics programs. X-GMT 2025 will be held in{" "}
                  <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold">
                    April 2025
                  </span>
                  , targeting working professionals and analytics-focused
                  candidates.
                </p>

                <p>
                  With a strong focus on{" "}
                  <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold">
                    business analytics and data-driven decision making
                  </span>
                  , X-GMT is ideal for aspirants seeking specialized management
                  programs. The exam tests aptitude in:
                  <br />• Business Analytics & Data Interpretation •
                  Quantitative Ability & Reasoning • Verbal Ability & Critical
                  Reasoning • General Awareness & Business Fundamentals
                </p>

                <p>
                  X-GMT 2025 will be a{" "}
                  <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold">
                    computer-based test (CBT)
                  </span>{" "}
                  of 165 minutes with 90 questions. It is widely recognized for
                  its analytical depth, data interpretation difficulty, and
                  strong emphasis on business fundamentals— perfect for
                  professionals transitioning into analytics or leadership
                  roles.
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div
              className="
          rounded-lg shadow-lg px-6 pt-6 pb-4
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
          border border-[#2a2522]
          backdrop-blur-md
        "
            >
              <h3 className="text-xl font-bold text-center mb-6 text-white leading-snug">
                Get Free X-GMT 2025 <br /> Preparation Material
              </h3>

              <div className="space-y-3">
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
              w-full py-3 text-white font-bold rounded-md text-lg 
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

      {/* X-GMT Prep Banner */}
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
          {/* Floating Orbs */}
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

              {/* X-GMT PREP */}
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
                  X-GMT PREP
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
                analytics portal now!
              </h2>

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

      {/* X-GMT 2025 Courses Section */}
      <div className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                X-GMT 2025
              </span>{" "}
              Courses Curated By{" "}
              <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                Analytics Experts
              </span>
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ace X-GMT 2025 with a specialized plan focusing on business
              analytics, data interpretation, and management aptitude for
              working professionals.
            </p>
          </div>

          {/* DESKTOP GRID */}
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
                    X-GMT 2025
                  </h3>

                  <p className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                    Test Series
                  </p>

                  <div className="mt-4 text-sm text-gray-300">
                    <p className="font-semibold">Validity till</p>
                    <p className="text-lg font-bold text-[#4aa3ff]">
                      May 30, 2025
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Focus on Business Analytics
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Prices */}
                <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b border-[#4a3c38]">
                  <span className="text-xl text-gray-400 line-through">
                    ₹ 5,500
                  </span>
                  <span className="text-3xl font-bold text-[#E16B3A]">
                    ₹ 2,850
                  </span>
                  <span className="bg-black/40 text-[#E16B3A] px-3 py-1 rounded-full text-sm font-semibold border border-[#E16B3A]/40">
                    (48% off)
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  <Feature text="20 X-GMT Full-Length Mocks (8 FLEXI + 12 PRO)" />
                  <Feature text="1500+ Business Analytics Practice Questions" />
                  <Feature text="12 PYQ Mocks — DI & Analytics Focus" />
                  <Feature text="Video Solutions With Analytics Approach" />
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

            {/* Comprehensive Card */}
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
                    X-GMT 2025
                  </h3>

                  <p className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                    Analytics Pro
                  </p>

                  <p className="text-xl font-semibold text-white">
                    Comprehensive
                  </p>

                  <div className="mt-2 text-sm text-gray-300">
                    <p className="font-semibold">Validity till</p>
                    <p className="text-lg font-bold text-[#4aa3ff]">
                      May 30, 2025
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Advanced Analytics Focus
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Prices */}
                <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b border-[#4a3c38]">
                  <span className="text-xl text-gray-400 line-through">
                    ₹ 7,000
                  </span>
                  <span className="text-3xl font-bold text-[#E16B3A]">
                    ₹ 3,650
                  </span>
                  <span className="bg-black/40 text-[#E16B3A] px-3 py-1 rounded-full text-sm font-semibold border border-[#E16B3A]/40">
                    (48% off)
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  <Feature text="20 X-GMT Full-Length Mocks (8 FLEXI + 12 PRO)" />
                  <Feature text="2200+ Advanced Analytics Practice Questions" />
                  <Feature text="12 PYQ Mocks With Case Study Analysis" />
                  <Feature text="Video Solutions + Analytics Toolkit" />
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

          {/* ================= MOBILE SLIDER ================= */}
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
                {/* Slide 1 */}
                {current === 0 && (
                  <div>
                    <div
                      className="
                rounded-xl shadow-xl overflow-hidden border border-[#2a2522]
                bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
              "
                    >
                      <div className="relative h-48 flex items-center justify-center">
                        <div className="text-center space-y-1">
                          <h3 className="text-3xl font-extrabold text-white">
                            X-GMT 2025
                          </h3>
                          <p className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                            Test Series
                          </p>

                          <p className="text-sm text-gray-300 mt-2">
                            Validity till
                          </p>
                          <p className="text-lg font-bold text-[#4aa3ff]">
                            May 30, 2025
                          </p>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b border-[#4a3c38]">
                          <span className="text-xl text-gray-400 line-through">
                            ₹ 5,500
                          </span>
                          <span className="text-3xl font-bold text-[#E16B3A]">
                            ₹ 2,850
                          </span>
                        </div>

                        <div className="space-y-3 mb-6">
                          <Feature text="20 X-GMT Full-Length Mocks (8 FLEXI + 12 PRO)" />
                          <Feature text="1500+ Business Analytics Practice Questions" />
                          <Feature text="12 PYQ Mocks — DI Focus" />
                          <Feature text="Video Solutions With Analytics Approach" />
                        </div>

                        <button
                          className="
                    w-full text-white font-bold py-3 rounded-lg text-lg
                    bg-[linear-gradient(90deg,#E16B3A,#B14820)]
                    hover:opacity-90 transition-all
                  "
                        >
                          Enroll now
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Slide 2 */}
                {current === 1 && (
                  <div>
                    <div
                      className="
                rounded-xl shadow-xl overflow-hidden border border-[#2a2522]
                bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
              "
                    >
                      <div className="relative h-48 flex items-center justify-center">
                        <div className="text-center space-y-1">
                          <h3 className="text-3xl font-extrabold text-white">
                            X-GMT 2025
                          </h3>
                          <p className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                            Analytics Pro
                          </p>

                          <p className="text-sm text-gray-300 mt-2">
                            Validity till
                          </p>
                          <p className="text-lg font-bold text-[#4aa3ff]">
                            May 30, 2025
                          </p>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b border-[#4a3c38]">
                          <span className="text-xl text-gray-400 line-through">
                            ₹ 7,000
                          </span>
                          <span className="text-3xl font-bold text-[#E16B3A]">
                            ₹ 3,650
                          </span>
                        </div>

                        <div className="space-y-3 mb-6">
                          <Feature text="20 X-GMT Full-Length Mocks (8 FLEXI + 12 PRO)" />
                          <Feature text="2200+ Advanced Analytics Practice Questions" />
                          <Feature text="Case Study Based PYQs" />
                          <Feature text="Video Solutions With Analytics Approach" />
                        </div>

                        <button
                          className="
                    w-full text-white font-bold py-3 rounded-lg text-lg
                    bg-[linear-gradient(90deg,#E16B3A,#B14820)]
                    hover:opacity-90 transition-all
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

            {/* Slider Dots */}
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

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -mt-10 left-3 -translate-y-1/2 p-2 bg-white/20 text-white rounded-full"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 -mt-10 right-3 -translate-y-1/2 p-2 bg-white/20 text-white rounded-full"
            >
              ›
            </button>
          </div>
        </div>
      </div>
      <SeparatorLine />
      {/* X-GMT Exam Pattern */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-8">
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              X-GMT 2025
            </span>{" "}
            Exam Pattern
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 mb-6 leading-relaxed text-center">
            X-GMT 2025 follows a specialized pattern with four sections tested
            over 165 minutes, with a strong emphasis on business analytics and
            data interpretation—key skills essential for modern management
            roles. Here's the complete breakdown:
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
              X-GMT 2025 Section-wise Details
            </h3>
          </div>

          {/* TABLE */}
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
                {xgmtSections.map((section, index) => (
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

                {/* TOTAL ROW */}
                <tr className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] font-bold text-white">
                  <td className="px-6 py-4">Total</td>
                  <td className="px-6 py-4">90</td>
                  <td className="px-6 py-4">165 minutes</td>
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
                • <span className="font-semibold text-white">+1 mark</span> for
                each correct answer
              </li>
              <li>
                • <span className="font-semibold text-white">-0.25 marks</span>{" "}
                for each incorrect answer
              </li>
              <li>
                •{" "}
                <span className="font-semibold text-white">
                  No negative marking
                </span>{" "}
                for unattempted questions
              </li>
              <li>
                • Sectional time limits with no switching between sections
              </li>
              <li>
                • Strong emphasis on application-based & analytical questions
              </li>
            </ul>
          </div>
        </div>
      </div>
      <SeparatorLine />
      {/* Important Dates */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              X-GMT 2025
            </span>{" "}
            Important{" "}
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              Dates
            </span>
          </h2>

          {/* Section Title Box */}
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
              X-GMT 2025 Schedule (Tentative)
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
              Official dates will be announced by XLRI on the official X-GMT
              website{" "}
              <a
                href="https://xlri.ac.in"
                className="text-[#E16B3A] underline hover:opacity-80"
              >
                xlri.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>

      <SeparatorLine />
      {/* Eligibility Criteria */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-8">
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              X-GMT 2025
            </span>{" "}
            Eligibility Criteria
          </h2>

          {/* Outer Box */}
          <div
            className="
        rounded-xl p-8 shadow-lg border border-[#3a322e]
        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
      "
          >
            <div className="space-y-10">
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

                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start">
                    <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
                    <p>
                      Bachelor's degree of minimum 3 years duration with{" "}
                      <span className="font-bold text-white">50% marks</span> or
                      equivalent CGPA
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
                    <p>
                      Degree must be from a recognized university or institution
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
                    <p>
                      Professional qualifications like CA/CS/ICWA are also
                      eligible
                    </p>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h3
                  className="
              text-xl font-extrabold mb-3
              bg-clip-text text-transparent
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]
            "
                >
                  Work Experience
                </h3>

                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start">
                    <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
                    <p>
                      For General Management Program: Minimum{" "}
                      <span className="font-bold text-white">3 years</span> of
                      work experience required
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
                    <p>
                      For Business Analytics programs: Work experience preferred
                      but not mandatory
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
                    <p>
                      Internships and training periods not counted as work
                      experience
                    </p>
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

                <p className="text-gray-300">
                  There is{" "}
                  <span className="font-bold text-white">
                    no upper age limit
                  </span>{" "}
                  for X-GMT, but candidates must meet the work experience
                  criteria for specific programs.
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
                  can appear for X-GMT.
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
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              Top Colleges
            </span>{" "}
            Accepting{" "}
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              X-GMT 2025
            </span>{" "}
            Score
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed text-center">
            X-GMT score is accepted by premier B-schools for their General
            Management and Business Analytics programs. Here are the top
            colleges that accept X-GMT scores along with their expected cutoff
            percentiles:
          </p>

          {/* Section Title Box */}
          <div
            className="
        rounded-lg p-6 mb-6 text-center border border-[#3a322e]
        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
      "
          >
            <h3
              className="
          text-xl font-extrabold
          bg-clip-text text-transparent
          bg-[linear-gradient(90deg,#E16B3A,#B14820)]
        "
            >
              Top B-schools and Expected X-GMT Cutoffs
            </h3>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto shadow-xl rounded-lg border border-[#2a2522]">
            <table className="w-full bg-black">
              <thead className="bg-[#1a1a1a]">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-white">
                    B-School Name
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-white">
                    Expected X-GMT Cutoff (Percentile)
                  </th>
                </tr>
              </thead>

              <tbody>
                {topColleges.map((college, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-[#121212] text-gray-300"
                        : "bg-[#1b1b1b] text-gray-300"
                    }
                  >
                    <td className="px-6 py-4 font-semibold text-white">
                      {college.name}
                    </td>
                    <td className="px-6 py-4">{college.cutoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Info Cards */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* XLRI Programs */}
            <div
              className="
          rounded-lg p-6 shadow-lg border-l-4 border-[#E16B3A]
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
        "
            >
              <h4
                className="
            font-bold mb-3
            bg-clip-text text-transparent
            bg-[linear-gradient(90deg,#E16B3A,#B14820)]
          "
              >
                XLRI Programs through X-GMT:
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                General Management Program (GMP), Executive Diploma in Business
                Management, Certificate Programs in Business Analytics, Advanced
                Management Programs for working professionals
              </p>
            </div>

            {/* Other Analytics Programs */}
            <div
              className="
          rounded-lg p-6 shadow-lg border-l-4 border-[#E16B3A]
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
        "
            >
              <h4
                className="
            font-bold mb-3
            bg-clip-text text-transparent
            bg-[linear-gradient(90deg,#E16B3A,#B14820)]
          "
              >
                Other Analytics Programs:
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Business Analytics, Data Science Management, Analytics &
                Data-driven Decision Making, Digital Business Management,
                specialized management programs for experienced professionals
              </p>
            </div>
          </div>
        </div>
      </div>
      <SeparatorLine />
      {/* Preparation Tips */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              X-GMT 2025
            </span>{" "}
            Preparation Strategy
          </h2>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {prepCards.map((card, idx) => (
              <div
                key={idx}
                className="
            rounded-xl p-6 shadow-lg border-l-4 border-[#E16B3A]
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
          "
              >
                <h3
                  className="
              text-xl font-bold mb-4
              bg-clip-text text-transparent
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]
            "
                >
                  {card.title}
                </h3>

                <ul className="space-y-3 text-gray-300">
                  {card.points.map((p, i2) => (
                    <li key={i2} className="flex items-start">
                      <span className="text-[#E16B3A] mr-2">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* MOBILE SLIDER */}
          <div
            className="md:hidden relative max-w-md mx-auto mt-4"
            onMouseEnter={() => setPrepPaused(true)}
            onMouseLeave={() => setPrepPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={prepCurrent}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.45 }}
              >
                <div
                  className="
              rounded-xl p-6 shadow-lg border-l-4 border-[#E16B3A]
              bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
            "
                >
                  <h3
                    className="
                  text-xl font-bold mb-4
                  bg-clip-text text-transparent
                  bg-[linear-gradient(90deg,#E16B3A,#B14820)]
                "
                  >
                    {prepCards[prepCurrent].title}
                  </h3>

                  <ul className="space-y-3 text-gray-300">
                    {prepCards[prepCurrent].points.map((p, i) => (
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
            <div className="flex justify-center gap-2 mt-4">
              {prepCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPrepCurrent(i)}
                  className={`w-3 h-3 rounded-full ${
                    prepCurrent === i ? "bg-[#E16B3A]" : "bg-gray-600"
                  }`}
                ></button>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prepPrev}
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-white/20 text-white rounded-full"
            >
              ‹
            </button>

            <button
              onClick={prepNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-white/20 text-white rounded-full"
            >
              ›
            </button>
          </div>

          {/* PRO TIP BOX */}
          <div
            className="
        mt-10 p-6 border-l-4 border-[#E16B3A]
        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
        rounded-lg
      "
          >
            <h4 className="font-bold text-white mb-2 text-xl">
              Pro Tip for Working Professionals:
            </h4>

            <p className="text-gray-300 leading-relaxed">
              As X-GMT targets experienced professionals, leverage your work
              experience in preparation. Relate analytical concepts to real
              business scenarios you've encountered. Focus on time management
              and take weekend mock tests to simulate actual exam conditions.
              Use structured planning to balance preparation with work
              commitments.
            </p>
          </div>
        </div>
      </div>
      <SeparatorLine />
      {/* FAQ Section */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Frequently Asked Questions About X-GMT 2025
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="
            rounded-lg overflow-hidden
            border border-[#3a322e]
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
            shadow-md
          "
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="
              w-full px-6 py-4 text-left 
              flex items-center justify-between
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
                px-6 py-4 
                border-t border-[#3a322e]
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
      {/* <div className="bg-gradient-to-r from-green-700 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Advance Your Management Career with X-GMT 2025?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join experienced professionals and get access to specialized
            analytics preparation, industry-relevant study materials, and
            professional mock tests
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transition-colors">
            Start Preparation Now
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default XgmtExam;
