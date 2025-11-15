import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SeparatorLine from "../../components/SepratorLine";
const XatExam = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    pincode: "",
  });

  const [expandedFaq, setExpandedFaq] = useState(null);

  const xatSections = [
    {
      section: "Decision Making (DM)",
      questions: "21",
      time: "165 minutes total",
      description:
        "Caselets, ethical dilemmas, analytical reasoning, situational judgment",
    },
    {
      section: "Verbal and Logical Ability (VLA)",
      questions: "24",
      time: "165 minutes total",
      description:
        "Reading comprehension, grammar, vocabulary, para jumbles, critical reasoning",
    },
    {
      section: "Quantitative Ability & Data Interpretation (QADI)",
      questions: "27",
      time: "165 minutes total",
      description:
        "Arithmetic, algebra, geometry, modern math, data interpretation, data sufficiency",
    },
    {
      section: "General Knowledge (GK)",
      questions: "25",
      time: "15 minutes",
      description:
        "Current affairs, business, economics, politics, sports, awards, static GK",
    },
  ];

  const importantDates = [
    { event: "XAT 2025 Notification", date: "July 2024" },
    { event: "XAT 2025 Registration Start", date: "August 2024" },
    { event: "XAT 2025 Registration End", date: "November 2024" },
    { event: "XAT 2025 Admit Card", date: "December 2024" },
    { event: "XAT 2025 Exam Date", date: "First Sunday of January 2025" },
    { event: "XAT 2025 Answer Key", date: "January 2025" },
    { event: "XAT 2025 Result", date: "January 2025" },
  ];

  const topColleges = [
    { name: "XLRI Jamshedpur", cutoff: "95+" },
    { name: "SP Jain Mumbai", cutoff: "90+" },
    { name: "IMI Delhi", cutoff: "85+" },
    { name: "XIM Bhubaneswar", cutoff: "85+" },
    { name: "TAPMI Manipal", cutoff: "80+" },
    { name: "Great Lakes Chennai", cutoff: "80+" },
    { name: "LIBA Chennai", cutoff: "75+" },
    { name: "XIME Bangalore", cutoff: "70+" },
    { name: "IFIM Bangalore", cutoff: "70+" },
    { name: "IMT Ghaziabad", cutoff: "85+" },
  ];

  const faqs = [
    {
      question: "What is unique about XAT exam pattern?",
      answer:
        "XAT has a unique Decision Making section and includes General Knowledge as a separate scored section. The exam also features an essay writing component and has negative marking for all sections including 0.10 negative marks for GK.",
    },
    {
      question: "What is the minimum percentile required for XLRI?",
      answer:
        "For XLRI, the minimum XAT percentile varies by program. For HRM, typically 95+ percentile is required, while for BM, 97+ percentile is expected. XLRI also considers academic background, work experience, and performance in GD-PI.",
    },
    {
      question: "Is work experience mandatory for XAT?",
      answer:
        "No, work experience is not mandatory for XAT. Both freshers and experienced candidates can apply. However, some institutes like XLRI give weightage to work experience during the selection process.",
    },
    {
      question: "How is XAT different from CAT?",
      answer:
        "XAT has Decision Making section, includes GK as scored section, has essay writing, and is conducted by XLRI. CAT is conducted by IIMs and focuses more on traditional sections without GK. XAT also has different marking scheme and exam pattern.",
    },
  ];

  const prepCards = [
    {
      title: "For Decision Making Section",
      points: [
        "Practice caselets and ethical dilemma scenarios regularly",
        "Develop strong analytical and logical reasoning skills",
        "Focus on situational judgment and managerial decision making",
        "Read business case studies and management principles",
      ],
    },
    {
      title: "For VLA Section",
      points: [
        "Read extensively - editorials, business magazines, quality fiction",
        "Practice RC passages from diverse and complex topics",
        "Work on grammar rules and vocabulary building",
        "Practice critical reasoning and para jumbles",
      ],
    },
    {
      title: "For QADI Section",
      points: [
        "Master fundamental mathematical concepts thoroughly",
        "Practice data interpretation sets with various chart types",
        "Focus on arithmetic, algebra, and modern mathematics",
        "Learn time-saving calculation techniques",
      ],
    },
    {
      title: "For GK & Essay Writing",
      points: [
        "Read newspapers daily for current affairs",
        "Follow business news, economics, and corporate updates",
        "Practice essay writing on diverse topics regularly",
        "Develop structured thinking and coherent writing style",
      ],
    },
  ];

  const [prepCurrent, setPrepCurrent] = useState(0);
  const [prepPaused, setPrepPaused] = useState(false);

  const prepNext = () =>
    setPrepCurrent((prev) => (prev + 1) % prepCards.length);

  const prepPrev = () =>
    setPrepCurrent((prev) => (prev === 0 ? prepCards.length - 1 : prev - 1));

  // AUTO SLIDE every 3 seconds (pause on hover)
  useEffect(() => {
    if (prepPaused) return; // stop auto slide when paused

    const interval = setInterval(() => {
      setPrepCurrent((prev) => (prev + 1) % prepCards.length);
    }, 3000);

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
      <Check className="w-5 h-5 text-[#E16B3A] mt-0.5 flex-shrink-0" />
      <p className="text-gray-300">{text}</p>
    </div>
  );

  // ===================== SLIDER STATES =====================
  const cards = [0, 1]; // two cards

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  // Previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="px-4 py-12 md:py-16 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* LEFT CONTENT */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-snug">
                <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                  XAT 2025:
                </span>{" "}
                Complete Guide to Xavier Aptitude Test | Exam Date, Pattern,
                Syllabus & Preparation
              </h1>

              <p className="text-sm text-gray-400 mb-6">
                Updated on 14th November 2024 | 10:54 am | #XAT2025
              </p>

              <div className="space-y-4 text-gray-300 text-[15px] leading-relaxed">
                <p>
                  <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold">
                    XAT 2025 (Xavier Aptitude Test)
                  </span>{" "}
                  is one of the most prestigious MBA entrance exams in India,
                  conducted by XLRI Jamshedpur on behalf of XAMI. XAT 2025 will
                  be held on the{" "}
                  <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold">
                    first Sunday of January 2025
                  </span>
                  , opening doors to 160+ top B-schools including XLRI, SP Jain,
                  IMI, XIMB, and many more.
                </p>

                <p>
                  With over{" "}
                  <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold">
                    1 lakh candidates
                  </span>
                  appearing annually, XAT is known for its unique Decision
                  Making section and includes General Knowledge as a scored
                  component. The exam tests aptitude in: Decision Making, Verbal
                  & Logical Ability, Quantitative Ability & Data Interpretation,
                  and General Knowledge.
                </p>

                <p>
                  XAT 2025 will be a{" "}
                  <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent font-bold">
                    computer-based test (CBT)
                  </span>{" "}
                  of 180 minutes duration with 97 questions + an essay. The exam
                  is known for its Decision Making section which tests ethical
                  judgment & analytical thinking — crucial for future managers &
                  leaders.
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div
              className="
          rounded-lg shadow-lg p-6 
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
          border border-[#2a2522]
          backdrop-blur-md
        "
            >
              <h3 className="text-xl font-bold text-center mb-6 text-white leading-snug">
                Get Free XAT 2025 <br /> Preparation Material
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

      {/* XAT Prep Banner */}
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

              {/* XAT PREP */}
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
                  XAT PREP
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

              {/* BUTTON */}
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

      {/* XAT 2025 Courses Section */}
      <div className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                XAT 2025
              </span>{" "}
              Courses Curated By{" "}
              <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                XAT Experts
              </span>{" "}
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ace XAT 2025 with a focused 3-month plan to master Decision
              Making, strengthen key areas, and boost preparation for XAT 2025.
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
                    XAT 2025
                  </h3>

                  <p className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                    Test Series
                  </p>

                  <div className="mt-4 text-sm text-gray-300">
                    <p className="font-semibold">Validity till</p>
                    <p className="text-lg font-bold text-[#4aa3ff]">
                      Feb. 10, 2025
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Closest to the actual XAT
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Price Section */}
                <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b border-[#4a3c38]">
                  <span className="text-xl text-gray-400 line-through">
                    ₹ 5,000
                  </span>
                  <span className="text-3xl font-bold text-[#E16B3A]">
                    ₹ 2,650
                  </span>
                  <span className="bg-black/40 text-[#E16B3A] px-3 py-1 rounded-full text-sm font-semibold border border-[#E16B3A]/40">
                    (47% off)
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  <Feature text="25 XAT Full-Length Mocks (10 FLEXI + 15 PRO)" />
                  <Feature text="1800+ Additional Practice Questions in Topic Tests" />
                  <Feature text="Include 15 PYQ mocks with Decision Making focus" />
                  <Feature text="Video & Text Solutions with monthly GK updates" />
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
                    XAT 2025
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
                      Feb. 10, 2025
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Closest to the actual XAT
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Price Section */}
                <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b border-[#4a3c38]">
                  <span className="text-xl text-gray-400 line-through">
                    ₹ 6,500
                  </span>
                  <span className="text-3xl font-bold text-[#E16B3A]">
                    ₹ 3,400
                  </span>
                  <span className="bg-black/40 text-[#E16B3A] px-3 py-1 rounded-full text-sm font-semibold border border-[#E16B3A]/40">
                    (48% off)
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  <Feature text="25 XAT Full-Length Mocks (10 FLEXI + 15 PRO)" />
                  <Feature text="2500+ Additional Practice Questions in Sectional Tests" />
                  <Feature text="Include 15 PYQ mocks with Essay Evaluation" />
                  <Feature text="Video & Text Solutions + Monthly GK Updates" />
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

          {/* MOBILE SLIDER */}
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
                    {/* FIRST CARD — Test Series */}
                    <div
                      className="
                  rounded-xl shadow-xl overflow-hidden border border-[#2a2522]
                  bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                "
                    >
                      {/* HEADER */}
                      <div className="relative h-48 flex items-center justify-center">
                        <div className="text-center space-y-1">
                          <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">
                            XAT 2025
                          </h3>
                          <p className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                            Test Series
                          </p>

                          <div className="mt-4 text-sm text-gray-300">
                            <p className="font-semibold">Validity till</p>
                            <p className="text-lg font-bold text-[#4aa3ff]">
                              Feb. 10, 2025
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Closest to the actual XAT
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* BODY */}
                      <div className="p-6">
                        {/* Price */}
                        <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b border-[#4a3c38]">
                          <span className="text-xl text-gray-400 line-through">
                            ₹ 5,000
                          </span>
                          <span className="text-3xl font-bold text-[#E16B3A]">
                            ₹ 2,650
                          </span>
                          <span className="bg-black/40 text-[#E16B3A] px-3 py-1 rounded-full text-sm font-semibold border border-[#E16B3A]/40">
                            (47% off)
                          </span>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-6">
                          <Feature text="25 XAT Full-Length Mocks (10 FLEXI + 15 PRO)" />
                          <Feature text="1800+ Additional Practice Questions" />
                          <Feature text="15 PYQ Mocks — Decision Making Focus" />
                          <Feature text="Video & Text Solutions with GK" />
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

                {/* SECOND CARD — Comprehensive */}
                {current === 1 && (
                  <div>
                    <div
                      className="
                  rounded-xl shadow-xl overflow-hidden border border-[#2a2522]
                  bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                "
                    >
                      {/* HEADER */}
                      <div className="relative h-48 flex items-center justify-center">
                        <div className="text-center space-y-1">
                          <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">
                            XAT 2025
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
                              Feb. 10, 2025
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Closest to the actual XAT
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* BODY */}
                      <div className="p-6">
                        {/* Price */}
                        <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b border-[#4a3c38]">
                          <span className="text-xl text-gray-400 line-through">
                            ₹ 6,500
                          </span>
                          <span className="text-3xl font-bold text-[#E16B3A]">
                            ₹ 3,400
                          </span>
                          <span className="bg-black/40 text-[#E16B3A] px-3 py-1 rounded-full text-sm font-semibold border border-[#E16B3A]/40">
                            (48% off)
                          </span>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 mb-6">
                          <Feature text="25 XAT Full-Length Mocks (10 FLEXI + 15 PRO)" />
                          <Feature text="2500+ Additional Sectional Tests" />
                          <Feature text="15 PYQ Mocks + Essay Evaluation" />
                          <Feature text="Video & Text Solutions + Monthly GK" />
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

            {/* ARROWS */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -mt-7 left-3 -translate-y-1/2 p-2 bg-white/20 text-white rounded-full"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 -mt-7 right-3 -translate-y-1/2 p-2 bg-white/20 text-white rounded-full"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <SeparatorLine />

      {/* XAT Exam Pattern */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-8">
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              XAT 2025
            </span>{" "}
            Exam Pattern
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed text-center">
            XAT 2025 follows a unique pattern with four sections tested over 180
            minutes, plus an additional 15 minutes for essay writing. The
            Decision Making section is exclusive to XAT and tests crucial
            managerial abilities. Here's the detailed breakdown:
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
              XAT 2025 Section-wise Details
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
                {xatSections.map((section, index) => (
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

                {/* Essay Row */}
                <tr className="bg-[#1b1b1b] font-bold">
                  <td className="px-6 py-4 text-white">Essay Writing</td>
                  <td className="px-6 py-4 text-gray-300">1 topic</td>
                  <td className="px-6 py-4 text-gray-300">15 minutes</td>
                  <td className="px-6 py-4 text-gray-300">-</td>
                </tr>

                {/* Total Row */}
                <tr className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] font-bold text-white">
                  <td className="px-6 py-4">Total</td>
                  <td className="px-6 py-4">97 + Essay</td>
                  <td className="px-6 py-4">195 minutes</td>
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
                for each incorrect answer in first 3 sections
              </li>
              <li>
                • <span className="font-semibold text-white">-0.10 marks</span>{" "}
                for each incorrect answer in GK section
              </li>
              <li>
                •{" "}
                <span className="font-semibold text-white">
                  No negative marking
                </span>{" "}
                for Essay Writing
              </li>
              <li>• No sectional time limit (except GK – 15 minutes)</li>
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
              XAT 2025
            </span>{" "}
            Important{" "}
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              Dates
            </span>{" "}
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
              XAT 2025 Schedule (Tentative)
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
              Official dates will be announced by XLRI on the official XAT
              website{" "}
              <a
                href="https://xatonline.in"
                className="text-[#E16B3A] underline hover:opacity-80"
              >
                xatonline.in
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
              XAT 2025
            </span>{" "}
            Eligibility Criteria
          </h2>

          {/* BOX */}
          <div
            className="
        rounded-xl p-8 shadow-lg border border-[#3a322e]
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
                      Final year students can also apply (subject to completion
                      of degree with required percentage)
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="text-[#E16B3A] mr-3 mt-1">✓</div>
                    <p>No percentage bar for SC/ST candidates</p>
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
                  <span className="font-bold text-white">no age limit</span> to
                  appear for XAT exam.
                </p>
              </div>

              {/* Number of Attempts */}
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

                <p className="text-gray-300">
                  There is{" "}
                  <span className="font-bold text-white">no restriction</span>{" "}
                  on the number of attempts for XAT.
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
                  can appear for XAT. NRIs can apply through XAT or GMAT scores.
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
                 Top MBA
                </span>{" "} Colleges Accepting     <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                  XAT 2025
                </span>{" "} Score
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed text-center">
            XAT score is accepted by 160+ premier B-schools across India. Here
            are some of the top MBA colleges that accept XAT scores along with
            their expected cutoff percentiles:
          </p>

          {/* Top B-schools Box */}
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
              Top B-schools and Expected XAT Cutoffs
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
                    Expected XAT Cutoff (Percentile)
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
                XLRI Programs through XAT:
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Business Management (BM), Human Resource Management (HRM),
                General Management Program (GMP), Fellow Program in Management
                (FPM)
              </p>
            </div>

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
                Other Premier XAT Colleges:
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                XIM Bhubaneswar, LIBA Chennai, TAPMI Manipal, Great Lakes
                Chennai, XIME Bangalore, IFIM Bangalore, Welingkar Mumbai,
                Christ University Bangalore
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
                  XAT 2025
                </span>{" "}Preparation Strategy
          </h2>

          {/* ===== DESKTOP 2-COLUMN GRID ===== */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {/* CARD COMPONENT */}
            {[
              {
                title: "For Decision Making Section",
                points: [
                  "Practice caselets and ethical dilemma scenarios regularly",
                  "Develop strong analytical and logical reasoning skills",
                  "Focus on situational judgment and managerial decision making",
                  "Read business case studies and management principles",
                ],
              },
              {
                title: "For VLA Section",
                points: [
                  "Read extensively - editorials, business magazines, quality fiction",
                  "Practice RC passages from diverse and complex topics",
                  "Work on grammar rules and vocabulary building",
                  "Practice critical reasoning and para jumbles",
                ],
              },
              {
                title: "For QADI Section",
                points: [
                  "Master fundamental mathematical concepts thoroughly",
                  "Practice data interpretation sets with various chart types",
                  "Focus on arithmetic, algebra, and modern mathematics",
                  "Learn time-saving calculation techniques",
                ],
              },
              {
                title: "For GK & Essay Writing",
                points: [
                  "Read newspapers daily for current affairs",
                  "Follow business news, economics, and corporate updates",
                  "Practice essay writing on diverse topics regularly",
                  "Develop structured thinking and coherent writing style",
                ],
              },
            ].map((card, idx) => (
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

          {/* ========= MOBILE SLIDER ========= */}
          <div
            className="md:hidden relative max-w-md mx-auto mt-4"
            onMouseEnter={() => setPrepPaused(true)}
            onMouseLeave={() => setPrepPaused(false)}
          >
            {/* SLIDER STATE */}
            {cards && null /* Ignore – just to prevent lint error */}

            <AnimatePresence mode="wait">
              <motion.div
                key={prepCurrent}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.45 }}
                className="w-full"
              >
                {/* SINGLE CARD */}
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

            {/* SLIDER DOTS */}
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

            {/* ARROWS */}
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
            <h4 className="font-bold text-white mb-2 text-xl">Pro Tip:</h4>
            <p className="text-gray-300 leading-relaxed">
              Start your XAT preparation at least 4–6 months before the exam.
              Focus particularly on Decision Making as it's unique to XAT.
              Regular GK reading and essay writing practice are crucial. Take
              mock tests simulating the full XAT pattern including the essay.
            </p>
          </div>
        </div>
      </div>

      <SeparatorLine />
      {/* FAQ Section */}
      <div className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Frequently Asked Questions About XAT 2025
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
                {/* Question Button */}
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
      {/* <div className="bg-gradient-to-r from-blue-700 to-purple-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your XAT 2025 Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of aspirants and get access to expert guidance, study
            materials, and mock tests with focus on Decision Making
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transition-colors">
            Start Preparation Now
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default XatExam;
