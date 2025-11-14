import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import girl1 from "../assets/public/girl1.png";

const faculties = [
  {
    id: 1,
    name: "Indrajeet Singh",
    role: "Founder & CEO",
    desc: "Wizard of Quant",
    image: girl1,
  },
  {
    id: 2,
    name: "Kamal Lohia",
    role: "CAT 99.99%iler QA,",
    desc: "LRDI Expert",
    image: girl1,
  },
  {
    id: 3,
    name: "Raj Kumar Jha",
    role: "6 Times CAT QA",
    desc: "100%iler",
    image: girl1,
  },
  {
    id: 4,
    name: "Shabana Ma'am",
    role: "CAT VARC",
    desc: "99.5%iler",
    image: girl1,
  },
  {
    id: 5,
    name: "Sajjan Barnwal",
    role: "CAT 99.8%iler QA,",
    desc: "LRDI Expert",
    image: girl1,
  },
];

export default function Faculties() {
  /* ---------------- MOBILE SLIDER ---------------- */
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () =>
    setMobileIndex((prev) => (prev + 1) % faculties.length);

  const prevSlide = () =>
    setMobileIndex((prev) => (prev - 1 + faculties.length) % faculties.length);

  useEffect(() => {
    if (isPaused) return;

    const t = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % faculties.length);
    }, 3000);

    return () => clearInterval(t);
  }, [isPaused]);

  return (
    <section className="bg-white py-10 px-6 text-gray-900">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 
        tracking-wide bg-clip-text text-transparent 
        bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
        KNOW YOUR CAT FACULTIES
      </h2>

      <p className="text-center max-w-3xl font-medium mx-auto mb-8">
        "Meet the mentors who have helped thousands of aspirants crack CAT with top percentiles.
        Learn from India’s best faculty team, known for their experience, results, and student-first guidance."
      </p>

      {/* DESKTOP GRID (unchanged) */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {faculties.map((faculty) => (
          <motion.div
            key={faculty.id}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.3 }}
            className="
              relative rounded-t-2xl shadow-lg overflow-hidden 
              flex flex-col items-center text-center pb-18 hover:shadow-2xl 
              transition-all duration-300 border border-[#5e3a28]
              bg-[radial-gradient(99.67%_99.67%_at_50%_-25.21%,#e76b38_0%,#000000_100%)]
            "
          >
            <div className="w-full h-70 flex items-end justify-center">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 opacity-90"
              />

              <div className="absolute bottom-2 left-0 w-full text-center px-2 
                bg-[radial-gradient(99.67%_99.67%_at_50%_-25.21%,#e76b38_0%,#000000_100%)]">
                <h3 className="font-semibold text-lg text-white drop-shadow">{faculty.name}</h3>
                <p className="font-medium text-sm text-orange-200">{faculty.role}</p>
                <p className="text-sm text-orange-100">{faculty.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ---------------- MOBILE SLIDER ---------------- */}
      <div
        className="sm:hidden relative w-full max-w-xs mx-auto mt-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={mobileIndex}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.55, ease: "easeInOut" }}
          >
            {/* CARD (unchanged) */}
            {(() => {
              const f = faculties[mobileIndex];
              return (
                <motion.div
                  key={f.id}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="
                    relative rounded-t-2xl shadow-lg overflow-hidden 
                    flex flex-col items-center text-center pb-18 
                    border border-[#5e3a28]
                    bg-[radial-gradient(99.67%_99.67%_at_50%_-25.21%,#e76b38_0%,#000000_100%)]
                  "
                >
                  <div className="w-full h-70 flex items-end justify-center">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="object-cover w-full h-full opacity-90"
                    />

                    <div className="absolute bottom-2 left-0 w-full text-center px-2 
                      bg-[radial-gradient(99.67%_99.67%_at_50%_-25.21%,#e76b38_0%,#000000_100%)]">
                      <h3 className="font-semibold text-lg text-white">{f.name}</h3>
                      <p className="font-medium text-sm text-orange-200">{f.role}</p>
                      <p className="text-sm text-orange-100">{f.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>
        </AnimatePresence>

        {/* ARROWS OUTSIDE */}
        <button
          onClick={prevSlide}
          className="
            absolute -left-5 top-1/2 -translate-y-1/2
            bg-black/40 text-white p-3 rounded-full 
            backdrop-blur-md shadow-lg hover:bg-black/60 transition
          "
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="
            absolute -right-5 top-1/2 -translate-y-1/2
            bg-black/40 text-white p-3 rounded-full 
            backdrop-blur-md shadow-lg hover:bg-black/60 transition
          "
        >
          ›
        </button>

        {/* DOTS */}
        <div className="flex justify-center mt-4 space-x-2">
          {faculties.map((_, dotIndex) => (
            <div
              key={dotIndex}
              onClick={() => setMobileIndex(dotIndex)}
              className={`
                w-3 h-3 rounded-full cursor-pointer transition
                ${dotIndex === mobileIndex ? "bg-orange-500" : "bg-gray-600"}
              `}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
