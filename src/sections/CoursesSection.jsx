import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaStar,
  FaCheckCircle,
  FaChevronRight,
  FaTimes,
  FaClock,
  FaUsers,
  FaBook,
  FaTrophy,
} from "react-icons/fa";

import cat2025 from "/src/assets/public/ew0V5jf.jpg";
import cat2026 from "/src/assets/public/ew0V5jf.jpg";
import mocks from "/src/assets/public/ew0V5jf.jpg";
import nmat from "/src/assets/public/ew0V5jf.jpg";
import noncat from "/src/assets/public/ew0V5jf.jpg";
import pro from "/src/assets/public/ew0V5jf.jpg";
import { Navigate, useNavigate } from "react-router-dom";

export default function CoursesSection() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  // inside CoursesSection component, with other useState calls
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const courses = [
    /* ------------------ (YOUR SAME COURSES DATA HERE) ------------------ */
    {
      id: 1,
      tag: "CAT 2025",
      title: "CAT 2025 Crash Course",
      rating: 4.95,
      price: "₹4,999",
      oldPrice: "₹11,000",
      image: cat2025,
      features: [
        "QA 250 | LDRI 70 | RC 80",
        "8–10 Hrs Mega Marathons",
        "35 Full + 45 Sectional Mocks",
      ],
      description:
        "Intensive crash course designed for CAT 2025 aspirants who want to maximize their preparation in a short time.",
      highlights: [
        "250 Quantitative Ability questions",
        "70 LRDI problems",
        "80 RC passages",
        "35 Full-length mock tests",
      ],
      duration: "3 Months",
      students: "2,500+",
      modules: "15 Modules",
    },

    {
      id: 2,
      tag: "CAT 2026",
      title: "CAT 2026 Full Course",
      rating: 4.95,
      price: "₹39,999",
      oldPrice: "₹52,000",
      image: cat2026,
      features: [
        "3 CAT Advance Modules",
        "250+ Live Classes",
        "200 Assignments",
      ],
      description:
        "Complete end-to-end preparation program for CAT 2026 with comprehensive coverage.",
      highlights: [
        "3 Advance Modules",
        "250+ Live interactive classes",
        "200 assignments",
      ],
      duration: "12 Months",
      students: "5,000+",
      modules: "50 Modules",
    },

    {
      id: 3,
      tag: "CAT 2025",
      title: "CAT 2025 Mock Test Series",
      rating: 4.95,
      price: "₹999",
      oldPrice: "₹4,000",
      image: mocks,
      features: [
        "35 Full Mocks | 45 Sectionals",
        "15 Non-CAT Mocks",
        "AI Driven Analysis",
      ],
      description: "Mock test series with AI-powered analysis.",
      highlights: [
        "35 Full-length CAT mock tests",
        "45 Sectional tests",
        "AI-driven insights",
      ],
      duration: "6 Months",
      students: "8,000+",
      modules: "80 Tests",
    },

    {
      id: 4,
      tag: "CAT 2025",
      title: "NMAT + SNAP Course 2025-26",
      rating: 4.95,
      price: "₹14,999",
      oldPrice: "₹24,000",
      image: nmat,
      features: ["200+ Hrs Live Classes", "400+ Videos", "10 Mocks"],
      description:
        "Specialized course for NMAT and SNAP preparation with exam-focused strategies.",
      highlights: [
        "200+ hours classes",
        "400 recorded videos",
        "10 NMAT + 10 SNAP mocks",
      ],
      duration: "8 Months",
      students: "3,500+",
      modules: "35 Modules",
    },

    {
      id: 5,
      tag: "CAT 2025",
      title: "All Non CAT Course",
      rating: 4.95,
      price: "₹19,999",
      oldPrice: "₹30,000",
      image: noncat,
      features: ["NMAT | MICAT | SNAP | XAT", "Live Classes", "Mocks"],
      description: "Unified program for all major non-CAT exams.",
      highlights: ["NMAT prep", "SNAP prep", "XAT DM", "TISSNET full coverage"],
      duration: "10 Months",
      students: "4,200+",
      modules: "60 Modules",
    },

    {
      id: 6,
      tag: "CAT 2026",
      title: "CAT 2026 PRO Course",
      rating: 4.95,
      price: "₹44,999",
      oldPrice: "₹60,000",
      image: pro,
      features: [
        "Everything in Full Course",
        "IIM ABC Practice Batch",
        "CAT Books | AI Analysis",
      ],
      description: "Premium course for 99+ percentile aspirants.",
      highlights: [
        "IIM ABC batch",
        "AI analysis",
        "Mentorship",
        "Case studies",
      ],
      duration: "12 Months",
      students: "1,800+",
      modules: "75 Modules",
    },
  ];

  const handleWhatsApp = () => {
    window.open(`https://wa.me/447418352482`, "_blank");
  };

  const nextSlide = () => setMobileIndex((prev) => (prev + 1) % courses.length);

  const prevSlide = () =>
    setMobileIndex((prev) => (prev - 1 + courses.length) % courses.length);

  /* -------------------------- AUTO SLIDE (Optional) -------------------------- */
  // useEffect(() => {
  //   const t = setInterval(nextSlide, 4000);
  //   return () => clearInterval(t);
  // }, []);

  // AUTO SLIDE
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % courses.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, courses.length]);

  return (
    <section className="bg-black py-16 px-6 relative overflow-hidden">
      {/* Animated BG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E16B3A]/20 blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B14820]/20 blur-3xl opacity-20" />
      </div>

      <div className="relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
            The Most Result-Oriented CAT Courses
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mt-4">
            Learn from top mentors and accelerate your preparation.
          </p>
        </motion.div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(course.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              {/* ================= CARD FRONT/BACK (unchanged) ================ */}
              <SingleCourseCard
                course={course}
                expandedCard={expandedCard}
                hoveredCard={hoveredCard}
                setExpandedCard={setExpandedCard}
                setHoveredCard={setHoveredCard}
                handleWhatsApp={handleWhatsApp}
              />
            </motion.div>
          ))}
        </div>

        {/* ==================== MOBILE SLIDER ==================== */}
<div
  className="sm:hidden relative w-full max-w-lg mx-auto mt-10"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  {/* SLIDER CONTAINER */}
  <div className="relative">
    <div className="overflow-hidden rounded-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={mobileIndex}
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -120 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <SingleCourseCard
            course={courses[mobileIndex]}
            expandedCard={expandedCard}
            hoveredCard={hoveredCard}
            setExpandedCard={setExpandedCard}
            setHoveredCard={setHoveredCard}
            handleWhatsApp={handleWhatsApp}
          />
        </motion.div>
      </AnimatePresence>
    </div>

    {/* OUTSIDE ARROWS (FIXED) */}
    <button
      onClick={prevSlide}
      className="
        absolute -left-6 top-1/2 -translate-y-1/2
        bg-white/30 text-white p-3 rounded-full
        backdrop-blur-md shadow-lg hover:bg-black/60 transition
        z-50
      "
    >
      ‹
    </button>

    <button
      onClick={nextSlide}
      className="
        absolute -right-6 top-1/2 -translate-y-1/2
        bg-white/30 text-white p-3 rounded-full
        backdrop-blur-md shadow-lg hover:bg-black/60 transition
        z-50
      "
    >
      ›
    </button>
  </div>

  {/* DOTS */}
  <div className="flex justify-center gap-2 mt-4">
    {courses.map((_, i) => (
      <div
        key={i}
        onClick={() => setMobileIndex(i)}
        className={`w-3 h-3 rounded-full cursor-pointer ${
          i === mobileIndex ? "bg-orange-500 w-6" : "bg-gray-500"
        }`}
      />
    ))}
  </div>
</div>

      </div>
    </section>
  );
}

/* ================================================================================= */
/*                     Reusable FULL CARD (Front + Back) Component                   */
/* ================================================================================= */

function SingleCourseCard({
  course,
  expandedCard,
  hoveredCard,
  setExpandedCard,
  setHoveredCard,
  handleWhatsApp,
}) {
  return (
    <motion.div
      className="relative h-[530px] perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateY: expandedCard === course.id ? 180 : 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      {/* FRONT */}
      <motion.div
        className="absolute inset-0 backface-hidden"
        style={{ backfaceVisibility: "hidden" }}
        animate={{
          scale: hoveredCard === course.id ? 1.03 : 1,
          y: hoveredCard === course.id ? -6 : 0,
        }}
        transition={{ duration: 0.25 }}
      >
        <FrontCard
          course={course}
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          setExpandedCard={setExpandedCard}
        />
      </motion.div>

      {/* BACK */}
      <motion.div
        className="absolute inset-0 backface-hidden"
        style={{ transform: "rotateY(180deg)" }}
      >
        <BackCard
          course={course}
          setExpandedCard={setExpandedCard}
          handleWhatsApp={handleWhatsApp}
        />
      </motion.div>
    </motion.div>
  );
}

/* ================================================================================= */
/*                                 CARD FRONT                                        */
/* ================================================================================= */

function FrontCard({ course, hoveredCard, setHoveredCard, setExpandedCard }) {
  return (
    <div
      className="h-full rounded-3xl shadow-xl overflow-hidden relative border border-[#5d4b43]
              bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"
    >
      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          animate={{ scale: hoveredCard === course.id ? 1.15 : 1 }}
          transition={{ duration: 0.6 }}
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {/* Tag */}
        <motion.div
          animate={{ y: hoveredCard === course.id ? -10 : 0 }}
          className="absolute top-6 left-6 bg-black/40 px-4 py-2 rounded-full"
        >
          <span className="text-[#E16B3A] font-bold text-sm">{course.tag}</span>
        </motion.div>

        {/* Rating */}
        <motion.div
          animate={{ y: hoveredCard === course.id ? -10 : 0 }}
          className="absolute top-6 right-6 bg-yellow-500 px-4 py-2 rounded-full flex items-center gap-2"
        >
          <FaStar className="text-white" size={14} />
          <span className="text-black font-bold text-sm">{course.rating}</span>
        </motion.div>

        {/* Title */}
        <div className="absolute bottom-8 left-6 right-6">
          <h3 className="text-2xl font-bold text-white">{course.title}</h3>
        </div>
      </div>

      {/* FEATURES */}
      <div className="p-6 space-y-4">
        {course.features.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-black/40 px-3 py-2 rounded-lg border border-[#5d4b43]"
          >
            <FaCheckCircle className="text-green-400" size={14} />
            <span className="text-sm text-white">{f}</span>
          </div>
        ))}

        <div className="pt-4 border-t border-[#5d4b43] flex items-center justify-between">
          <div>
            <p className="text-white/50 line-through text-sm">
              {course.oldPrice}
            </p>
            <p className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
              {course.price}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpandedCard(course.id)}
            className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] text-white p-2.5 rounded-full shadow-lg"
          >
            <FaChevronRight size={16} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

/* ================================================================================= */
/*                                  CARD BACK                                        */
/* ================================================================================= */

function BackCard({ course, setExpandedCard, handleWhatsApp }) {
    const navigate = useNavigate();
  return (
    <div className="h-full rounded-3xl shadow-2xl overflow-hidden relative border border-[#5d4b43] bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]">
      {/* Close Button */}
      <button
        onClick={() => setExpandedCard(null)}
        className="absolute top-6 right-6 bg-white/10 p-2 rounded-full"
      >
        <FaTimes className="text-white" />
      </button>

      {/* Title */}
      <div className="p-6 pb-4 border-b border-[#5d4b43]">
        <h3 className="text-2xl font-bold text-white">{course.title}</h3>
      </div>

      {/* Scrollable Info */}
      <div className="h-[calc(100%-150px)] overflow-y-auto p-6 space-y-4 text-white/80">
        <div>
          <h4 className="font-bold flex items-center gap-2 text-white">
            <FaTrophy className="text-yellow-300" /> Course Description
          </h4>
          <p className="mt-2">{course.description}</p>
        </div>

        <div>
          <h4 className="font-bold mb-2 text-white">Course Highlights</h4>
          {course.highlights.map((h, i) => (
            <div key={i} className="flex gap-2">
              <FaCheckCircle className="text-green-300 mt-1" size={12} />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER BUTTONS */}
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-5 p-4 bg-black/30">
        <button className="bg-white text-[#E16B3A] font-bold py-2 rounded-xl"
        onClick={()=>{Navigate("/coursedetail")}}>
          <a>View Details</a>
        </button>

        <button
          onClick={handleWhatsApp}
          className="bg-green-500 text-white font-bold py-2 rounded-xl flex justify-center items-center gap-2"
        >
          <FaWhatsapp size={20} /> WhatsApp
        </button>
      </div>
    </div>
  );
}
