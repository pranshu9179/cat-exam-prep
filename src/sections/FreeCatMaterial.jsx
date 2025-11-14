import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaBullseye,
  FaFilePdf,
  FaFolderOpen,
  FaBrain,
  FaPlay,
  FaChartBar,
  FaClipboardList,
  FaTools,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

export default function FreeCatMaterials() {
  const leftCards = [
    { icon: <FaBullseye />, title: "CAT Daily Target" },
    { icon: <FaFilePdf />, title: "CAT Free PDFs" },
    { icon: <FaFolderOpen />, title: "CAT Past Papers" },
    { icon: <FaBrain />, title: "Free CAT Quizzes & Tests" },
  ];

  const rightCards = [
    { icon: <FaPlay />, title: "Free Conceptual Videos & Practice Marathons" },
    { icon: <FaChartBar />, title: "Explore CAT Dashboard" },
    { icon: <FaClipboardList />, title: "Free CAT Mock & Sectionals" },
    { icon: <FaTools />, title: "Free CAT Tools" },
  ];

  const socialCards = [
    {
      icon: <FaFacebook size={35} className="text-white" />,
      title: "Facebook Page for CAT Preparation",
      subtitle: "4 Lakh members",
      button: "JOIN NOW",
    },
    {
      icon: <FaInstagram size={35} className="text-white" />,
      title: "Instagram Channel for MBA Updates",
      subtitle: "1 Lakh followers",
      button: "FOLLOW US",
    },
    {
      icon: <FaYoutube size={35} className="text-white" />,
      title: "Youtube for CAT Playlists & Updates",
      subtitle: "500K subscribers",
      button: "SUBSCRIBE",
    },
    {
      icon: <FaWhatsapp size={35} className="text-white" />,
      title: "Whatsapp for CAT PDFs & Doubts ",
      subtitle: "50K members",
      button: "JOIN NOW",
    },
    {
      icon: <FaTelegram size={35} className="text-white" />,
      title: "Telegram for Mocks & Study Materials",
      subtitle: "1 Lakh members",
      button: "JOIN NOW",
    },
  ];

  /* ---------------- MOBILE SLIDER LOGIC ---------------- */
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () =>
    setMobileIndex((prev) => (prev + 1) % socialCards.length);

  const prevSlide = () =>
    setMobileIndex(
      (prev) => (prev - 1 + socialCards.length) % socialCards.length
    );

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % socialCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, socialCards.length]);

  return (
    <section className="bg-white text-gray-900 py-8 px-6 md:px-10">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900">
        Free CAT Preparation Materials
      </h2>

      <div className="grid md:grid-cols-3 gap-10 items-center relative">
        {/* LEFT CARDS */}
        <div className="grid grid-cols-2 gap-4 md:block md:space-y-6 relative z-10">
          {leftCards.map((card, i) => (
            <div
              key={i}
              className="
    flex flex-col items-center text-center md:flex-row md:justify-between
    p-3 rounded-xl shadow-lg 
    transition-all duration-300 cursor-pointer
    border border-transparent
    bg-[linear-gradient(90deg,#E16B3A,#B14820)]
    hover:border-white
    min-h-[90px]
  "
            >
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-3">
                <div className="p-3 rounded-xl text-white text-xl md:text-lg">
                  {card.icon}
                </div>

                <p className="font-semibold text-white text-sm leading-snug md:text-base">
                  {card.title}
                </p>
              </div>

              <span className="text-white text-xl hidden md:block">↗</span>
            </div>
          ))}
        </div>

        {/* CENTER MOCKUP */}
        <div className="text-center">
          <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-gray-200 inline-block">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="CAT Daily Target"
              className="rounded-2xl object-cover w-[350px] md:w-[380px] h-60 mx-auto"
            />

            <button className="absolute top-3 right-3 bg-[#E16B3A] text-white px-4 py-1 text-xs font-semibold rounded-full hover:opacity-90 transition-all">
              Explore
            </button>

            <div className="absolute top-3 left-3 bg-black/80 px-3 py-1 text-xs rounded-full font-semibold text-white">
              Daily CAT Target
            </div>
          </div>

          <p className="text-gray-700 text-sm mt-6 max-w-md mx-auto leading-relaxed">
            Master CAT with daily tasks, structured prep plans, and free
            resources. Designed for students who want results.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-2 gap-4 md:block md:space-y-6 relative z-10">
          {rightCards.map((card, i) => (
            <div
              key={i}
              className="
    flex flex-col items-center text-center md:flex-row md:justify-between
    p-5 rounded-xl shadow-lg 
    transition-all duration-300 cursor-pointer
    border border-transparent
    bg-[linear-gradient(90deg,#E16B3A,#B14820)]
    hover:border-white
    min-h-[90px]
  "
            >
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-3">
                <div className="p-3 rounded-xl text-white text-xl md:text-lg">
                  {card.icon}
                </div>

                <p className="font-semibold text-white text-sm leading-snug md:text-base">
                  {card.title}
                </p>
              </div>

              <span className="text-white text-xl hidden md:block">↗</span>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL COMMUNITY SECTION */}
      <div className="mt-15 text-center bg-black py-16 w-screen  relative left-1/2 right-1/2 -mx-[50vw]">
        <h3
          className="text-3xl md:text-4xl font-bold mb-10  bg-clip-text text-transparent 
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]"
        >
          Join the Largest CAT Prep Community
        </h3>

        {/* ---------------- DESKTOP GRID (unchanged) ---------------- */}
        <div className="hidden md:grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {socialCards.map((s, i) => (
            <div
              key={i}
              className="
          relative rounded-lg p-6 cursor-pointer group 
          transition-all duration-300
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
        "
            >
              {/* GRADIENT BORDER ON HOVER */}
              <div
                className="
            absolute inset-0 rounded-lg p-0.5
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
            bg-[linear-gradient(90deg,#E16B3A,#B14820)] 
          "
              >
                <div className="w-full h-full rounded-lg bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"></div>
              </div>

              {/* NORMAL BORDER */}
              <div
                className="
            absolute inset-0 rounded-lg border border-[#4d3b34]
            group-hover:opacity-0 
            transition-opacity duration-300
          "
              ></div>

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  <div className="p-3 rounded-full bg-[linear-gradient(90deg,#E16B3A,#B14820)] text-white">
                    {s.icon}
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                    {s.title}
                  </h3>
                  <svg
                    className="w-5 h-5 text-white group-hover:text-orange-300 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {s.subtitle && (
                  <p className="text-sm text-gray-300">{s.subtitle}</p>
                )}

                <button className="mt-2 bg-white text-black hover:bg-[linear-gradient(90deg,#E16B3A,#B14820)] hover:text-white font-bold text-sm px-5 py-2 rounded-lg hover:bg-gray-200 transition-all">
                  {s.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ---------------- MOBILE SLIDER ---------------- */}
        <div
          className="md:hidden relative w-full overflow-hidden px-4"
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
              className="w-full"
            >
              {(() => {
                const s = socialCards[mobileIndex];
                return (
                  <div
                    className="
                relative rounded-lg p-6 cursor-pointer group 
                transition-all duration-300
                bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
              "
                  >
                    {/* Hover Gradient Border */}
                    <div
                      className="
                  absolute inset-0 rounded-lg p-0.5
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  bg-[linear-gradient(90deg,#E16B3A,#B14820)]
                "
                    >
                      <div className="w-full h-full rounded-lg bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"></div>
                    </div>

                    {/* Normal Border */}
                    <div
                      className="
                  absolute inset-0 rounded-lg border border-[#4d3b34]
                  group-hover:opacity-0 transition-opacity duration-300
                "
                    ></div>

                    {/* Mobile Card Content */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        <div className="p-3 rounded-full bg-[linear-gradient(90deg,#E16B3A,#B14820)] text-white">
                          {s.icon}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-white">
                        {s.title}
                      </h3>

                      {s.subtitle && (
                        <p className="text-sm text-gray-300">{s.subtitle}</p>
                      )}

                      <button className="mt-2 bg-white text-black  font-bold text-sm px-5 py-2 rounded-lg">
                        {s.button}
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </AnimatePresence>

          {/* Slider Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {socialCards.map((_, dotIndex) => (
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
      </div>
    </section>
  );
}
