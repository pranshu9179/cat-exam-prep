import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SeparatorLine from "../components/SepratorLine";

const CollegeDetails = () => {
  const exams = [
    { id: 1, name: "CAT", route: "/cat-details" },
    { id: 2, name: "XAT", route: "/xat-details" },
    { id: 3, name: "NMAT", route: "/nmat-details" },
    { id: 4, name: "SNAP", route: "/snap-details" },
    { id: 5, name: "MICAT", route: "/micat-details" },
    { id: 6, name: "CMAT", route: "/cmat-details" },
    { id: 7, name: "MBA MHCET", route: "/mba-mhcet-details" },
    { id: 8, name: "IBSAT", route: "/ibsat-details" },
  ];

  const colleges = [
    { id: 1, name: "IIM A", route: "/iim-a" },
    { id: 2, name: "IIM B", route: "/iim-b" },
    { id: 3, name: "IIM C", route: "/iim-c" },
    { id: 4, name: "FMS Delhi", route: "/fms-delhi" },
    { id: 5, name: "XLRI Jamshedpur", route: "/xlri-jamshedpur" },
    { id: 6, name: "IIM Lucknow", route: "/iim-lucknow" },
    { id: 7, name: "IIM Kozhikode", route: "/iim-kozhikode" },
    { id: 8, name: "IIM Indore", route: "/iim-indore" },
    { id: 9, name: "SIBM Pune", route: "/sibm-pune" },
  ];

  const advertisements = [
    { id: 2, image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop", alt: "JIMS Placement" },
    { id: 3, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop", alt: "EasyApply Platform" },
    { id: 4, image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&h=300&fit=crop", alt: "Great Lakes PGPM" },
    { id: 5, image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop", alt: "IBS Scores Accepted" },
    { id: 6, image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop", alt: "SPJ Rankings" },
    { id: 8, image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop", alt: "SIU Symbiosis MBA" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % advertisements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [advertisements.length, isPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleExamClick = (route) => (window.location.href = route);
  const handleCollegeClick = (route) => (window.location.href = route);

  return (
    <div className="w-full bg-[#000000]">
      {/* MBA Entrance Exams Section */}
      <div className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 
            text-transparent bg-clip-text bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
            Learn About CAT & Other MBA Entrance Exams
          </h2>

          <p className="text-base sm:text-lg text-gray-300 text-center mb-8 leading-relaxed max-w-4xl mx-auto">
            While preparing for CAT and other MBA entrances...
          </p>

          {/* Exam Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {exams.map((exam) => (
              <button
                key={exam.id}
                // onClick={() => handleExamClick(exam.route)}
                className="px-6 py-3 border-2 border-[#E16B3A] text-[#E16B3A] rounded-full 
                font-semibold hover:bg-[#E16B3A] hover:text-white transition-all"
              >
                {exam.name}
              </button>
            ))}
          </div>
        </div>
      </div>

       <SeparatorLine />

      {/* MBA Colleges Section */}
      <div className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT CONTENT */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text 
                bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                Top MBA Colleges in India
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                 become your gateway to securing admissions to premier B-schools. CAT is the widely accepted entrance exam that opens the doors to 21 IIMs and several other top MBA colleges in India
              </p>
  <p className="text-lg text-gray-300 leading-relaxed md:block hidden">
                 If you've decided to take the exam and plan to join a CAT coaching program, research and shortlist your target B-schools by understanding their selection procedures, rankings, and required percentiles. Many students are often unaware of B-schools until the GD-PI season, so having prior knowledge from the start is crucial.
              </p>
              <div className="flex flex-wrap gap-3">
                {colleges.map((college) => (
                  <button
                    key={college.id}
                    // onClick={() => handleCollegeClick(college.route)}
                    className="px-6 py-3 border-2 border-[#E16B3A] text-[#E16B3A] rounded-full 
                    hover:bg-[#E16B3A] hover:text-white transition-all"
                  >
                    {college.name}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            {/* MOBILE SLIDER */}
            <div
              className="block lg:hidden relative w-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative h-64 rounded-xl overflow-hidden">

  <AnimatePresence mode="wait">
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0, x: 40, scale: 0.98 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -40, scale: 0.98 }}
      transition={{ 
        duration: 0.55, 
        ease: [0.22, 1, 0.36, 1]  // 👈 Smooth cubic-bezier curve
      }}
      className="absolute inset-0"
    >
      <img
        src={advertisements[currentIndex].image}
        alt={advertisements[currentIndex].alt}
        className="w-full h-full object-cover opacity-95"
      />
    </motion.div>
  </AnimatePresence>

</div>


              {/* DOTS */}
              <div className="flex justify-center mt-4 space-x-3">
                {advertisements.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-[#E16B3A] w-8 h-3"
                        : "bg-gray-400 w-3 h-3"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {advertisements.map((ad) => (
                <div
                  key={ad.id}
                  className="rounded-xl overflow-hidden shadow-lg bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"
                >
                  <img
                    src={ad.image}
                    alt={ad.alt}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all"
                  />
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
