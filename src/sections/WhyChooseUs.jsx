import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const cardImgPlaceholder =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80";
const modalThumb1 =
  "https://images.unsplash.com/photo-1555435025-9e249707f0b4?auto=format&fit=crop&w=500&q=80";
const modalThumb2 =
  "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=500&q=80";
const modalThumb3 =
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=500&q=80";

export default function WhyChooseUs() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  /* ---------------- MOBILE SLIDER LOGIC ---------------- */
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () =>
    setMobileIndex((prev) => (prev + 1) % steps.flatMap((s) => s.items).length);

  const prevSlide = () =>
    setMobileIndex(
      (prev) =>
        (prev - 1 + steps.flatMap((s) => s.items).length) %
        steps.flatMap((s) => s.items).length
    );

  useEffect(() => {
    if (isPaused) return;

    const t = setInterval(() => {
      setMobileIndex(
        (prev) => (prev + 1) % steps.flatMap((s) => s.items).length
      );
    }, 3000);

    return () => clearInterval(t);
  }, [isPaused]);

  /* ------------- MODAL SCROLL PREVENTION ------------- */
  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "";
  }, [activeModal]);

  const steps = [
    {
      step: 1,
      heading: "Foundation Building",
      column: 1,
      icon: "🎯",
      items: [
        {
          id: "varc-essentials",
          title: "VARC Essentials",
          subtitle: "3 CAT Basic Modules",
          image: cardImgPlaceholder,
          btnLabel: "View Details",
          modalContent: {
            title: "VARC Essentials",
            paragraphs: [
              "RC Accuracy, Para summary techniques and passage-structure drills.",
              "What's included: sectional practice, strategies, and timed sessions.",
            ],
            images: [modalThumb1, modalThumb2, modalThumb3],
          },
        },
      ],
    },

    {
      step: 2,
      heading: "Concept Mastery",
      icon: "💡",
      items: [
        {
          id: "conceptual-live",
          title: "Live Conceptual",
          subtitle: "Conceptual + Application Classes",
          image: cardImgPlaceholder,
          btnLabel: "View Details",
          modalContent: {
            title: "Live Conceptual Classes",
            paragraphs: [
              "Concept-first approach with application.",
              "Topic-wise assignments and recorded lectures included.",
            ],
            images: [modalThumb1, modalThumb2, modalThumb3],
          },
        },
      ],
    },

    {
      step: 3,
      heading: "Practice",
      icon: "✍️",
      items: [
        {
          id: "rigorous-practice",
          title: "Rigorous Practice",
          subtitle: "Topic-wise Assignments",
          image: cardImgPlaceholder,
          btnLabel: "View Details",
          modalContent: {
            title: "Rigorous Practice",
            paragraphs: ["Topic-wise assignments after every session."],
            images: [modalThumb1],
          },
        },
      ],
    },

    {
      step: 4,
      heading: "Advanced",
      icon: "🚀",
      items: [
        {
          id: "engineer-varc",
          title: "Engineers' VARC",
          subtitle: "3 Advanced Modules",
          image: cardImgPlaceholder,
          btnLabel: "View Details",
          modalContent: {
            title: "Engineers' VARC",
            paragraphs: ["Designed to simplify abstract arguments."],
            images: [modalThumb1, modalThumb2, modalThumb3],
          },
        },
      ],
    },
  ];

  const allItems = steps.flatMap((s) => s.items);

  const openModal = (item) => setActiveModal(item);
  const closeModal = () => setActiveModal(null);

  const handleEnroll = () => {
    closeModal();
    const sec = document.getElementById("courses-section");
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#000] py-10 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-[1250px] mx-auto relative z-10">
        {/* HEADING */}
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-[linear-gradient(90deg,#E16B3A,#B14820)] leading-tight mb-6">
            Why We Are The Best CAT Coaching in India?
          </h2>

          <p className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto">
            We CAT Course featuring Dual Pedagogy, great results and unique
            teaching methods.
          </p>
        </header>

        {/* ====================== DESKTOP GRID ====================== */}
        <div className="hidden sm:block space-y-8">
          {steps.map((col) => (
            <div key={col.step} className="space-y-6">
              {col.items.map((item) => (
                <article
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="
                    bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                    rounded-3xl border border-[#5b463e]/60 shadow-xl
                    hover:scale-[1.015] transition-all duration-500
                  "
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                      />
                    </div>

                    <div className="md:w-3/5 p-8">
                      <div className="inline-block bg-[#E16B3A]/20 border border-[#E16B3A]/40 text-white px-4 py-1 rounded-full text-xs font-bold mb-4">
                        {item.subtitle}
                      </div>

                      <h3 className="text-3xl font-black text-white mb-4">
                        {item.title}
                      </h3>

                      <p className="text-gray-300 text-sm mb-6">
                        {item.modalContent.paragraphs[0].substring(0, 150)}...
                      </p>

                      <button
                        onClick={() => openModal(item)}
                        className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] text-white px-6 py-2 rounded-xl font-bold text-sm"
                      >
                        {item.btnLabel} →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>

        {/* ====================== MOBILE SLIDER ====================== */}
        {/* ====================== MOBILE SLIDER ====================== */}
        <div
          className="sm:hidden relative w-full max-w-sm mx-auto mt-10"
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
              {(() => {
                const item = allItems[mobileIndex];
                return (
              <article
  key={item.id}
  className="
    bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
    rounded-3xl border border-[#5b463e]/60 shadow-xl
    overflow-hidden flex flex-col
    min-h-[580px]     /* 🔥 Ensures card grows and content never hides */
  "
>
  {/* IMAGE */}
  <img
    src={item.image}
    className="w-full h-64 object-cover flex-shrink-0"
  />

  {/* FULL DETAILS */}
  <div className="p-6 flex flex-col flex-1">
    {/* Tag */}
    <div className="inline-block bg-[#E16B3A]/20 border border-[#E16B3A]/40 text-white px-4 py-1 rounded-full text-xs font-bold mb-3">
      {item.subtitle}
    </div>

    {/* Title */}
    <h3 className="text-2xl font-black text-white mb-3 leading-tight">
      {item.title}
    </h3>

    {/* Description – FULL TEXT + scroll if too long */}
    <p className="
      text-gray-300 text-sm leading-relaxed mb-5 
      max-h-40 overflow-y-auto pr-1      /* 🔥 Allows scrolling only if needed */
    ">
      {item.modalContent.paragraphs[0]}
    </p>

    {/* Features List */}
    <div className="space-y-2 mb-5">
      {[
        "Comprehensive Study Material",
        "Expert Faculty Support",
        "Practice Sessions Included",
      ].map((text, i) => (
        <div className="flex items-center gap-3 text-sm" key={i}>
          <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-[#E16B3A] to-[#B14820] flex items-center justify-center">
            <span className="text-white text-xs">✓</span>
          </div>
          <span className="text-gray-300 font-medium">{text}</span>
        </div>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex items-center justify-between mt-auto pt-2">
      <button
        onClick={() => openModal(item)}
        className="
          bg-[linear-gradient(90deg,#E16B3A,#B14820)]
          text-white text-sm font-bold px-6 py-2 rounded-xl shadow-lg
        "
      >
        {item.btnLabel} →
      </button>

      <div className="flex items-center gap-2 text-sm px-3 py-1 rounded-full 
        bg-[linear-gradient(90deg,#E16B3A,#B14820)] text-white shadow-md">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        <span className="font-medium">Live Access</span>
      </div>
    </div>
  </div>
</article>

                );
              })()}
            </motion.div>
          </AnimatePresence>

          {/* BIGGER OUTSIDE ARROWS */}
          <button
            onClick={prevSlide}
            className="
     absolute -left-3 top-1/2 -translate-y-1/2
            bg-white/30 text-white p-3 rounded-full 
            backdrop-blur-md shadow-lg hover:bg-black/60 transition
    "
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="
      absolute -right-3 top-1/2 -translate-y-1/2
            bg-white/30 text-white p-3 rounded-full 
            backdrop-blur-md shadow-lg hover:bg-black/60 transition
    "
          >
            ›
          </button>

          {/* DOTS */}
          <div className="flex justify-center mt-4 space-x-2">
            {allItems.map((_, i) => (
              <div
                key={i}
                onClick={() => setMobileIndex(i)}
                className={`
          w-3 h-3 rounded-full cursor-pointer transition 
          ${i === mobileIndex ? "bg-orange-500 scale-110" : "bg-gray-600"}
        `}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* ====================== MODAL ====================== */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center px-4 py-10">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="relative z-50 w-full max-w-5xl bg-[#0b0b0b] rounded-3xl border border-[#3a2d29] overflow-hidden shadow-2xl">
            <div className="p-10 max-h-[80vh] overflow-y-auto">
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-[linear-gradient(90deg,#E16B3A,#B14820)] mb-6">
                {activeModal.modalContent.title}
              </h3>

              {activeModal.modalContent.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-gray-200 bg-[#1a1a1a] p-5 rounded-2xl border border-[#3c3c3c] mb-4"
                >
                  {p}
                </p>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {activeModal.modalContent.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="rounded-2xl h-[250px] object-cover border border-[#4a3c35]"
                  />
                ))}
              </div>

              {/* Footer */}
              <div className="mt-10 bg-[#1a1a1a] p-6 rounded-2xl border border-[#3c3c3c] flex flex-col sm:flex-row sm:justify-between">
                <button
                  onClick={handleEnroll}
                  className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] px-8 py-4 rounded-xl text-white font-bold hover:scale-105 transition"
                >
                  🎯 Enroll / See Course
                </button>

                <p className="text-gray-300 text-sm mt-4 sm:mt-0">
                  💬 Have questions? Chat with support.
                </p>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="absolute right-6 top-6 w-10 h-10 bg-[#E16B3A] text-white rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
