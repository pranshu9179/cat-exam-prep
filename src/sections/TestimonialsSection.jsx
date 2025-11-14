import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rushikesh Patil",
    time: "A DAY BEFORE CAT EXAM",
    text: `I was in tears while reading the post and the comments section...`,
    converted: "IIM Bangalore",
    media: [
      { type: "youtube", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      {
        type: "image",
        url: "https://techcrunch.com/wp-content/uploads/2024/04/youtube-read-only-comments-announcement-1.png",
      },
    ],
  },
  {
    name: "Shubhashish Gargari",
    time: "A DAY BEFORE CAT EXAM",
    text: "Seriously sir.. don't know kya hoga par... I'll surely miss those late night classes Seriously sir.. don't know kya hoga par... I'll surely miss those late night classes Seriously sir.. don't know kya hoga par...",
    converted: "IIM Ranchi",
    media: [
      {
        type: "chat",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjcs1Rs7fTz2zEBwDkwyGN50D60a2mZH55ruFpbo4z3M6Iwpb88jQV0XdzigIcI3kbrI&usqp=CAU",
      },
      {
        type: "image",
        url: "https://i.ytimg.com/vi/niLiiQCBVFY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAuULrLpE9eIniN5wPwXxk6T94Dqg",
      },
    ],
  },
  {
    name: "Rushikesh Patil",
    time: "A DAY BEFORE CAT EXAM",
    text: `I was in tears while reading the post and the comments section...`,
    converted: "IIM Bangalore",
    media: [
      { type: "youtube", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      {
        type: "image",
        url: "https://techcrunch.com/wp-content/uploads/2024/04/youtube-read-only-comments-announcement-1.png",
      },
    ],
  },
  {
    name: "Shubhashish Gargari",
    time: "A DAY BEFORE CAT EXAM",
    text: "Seriously sir.. don't know kya hoga par... I'll surely miss those late night classes Seriously sir.. don't know kya hoga par... I'll surely miss those late night classes Seriously sir.. don't know kya hoga par...",
    converted: "IIM Ranchi",
    media: [
      {
        type: "chat",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjcs1Rs7fTz2zEBwDkwyGN50D60a2mZH55ruFpbo4z3M6Iwpb88jQV0XdzigIcI3kbrI&usqp=CAU",
      },
      {
        type: "image",
        url: "https://i.ytimg.com/vi/niLiiQCBVFY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAuULrLpE9eIniN5wPwXxk6T94Dqg",
      },
    ],
  },
];

const TestimonialCard = ({ testimonial }) => (
  // (Your same card — unchanged)
  <div
    className="rounded-2xl p-5 shadow-lg flex flex-col gap-3 transition-shadow duration-300 hover:shadow-2xl h-full min-h-[28rem] border"
    style={{
      background:
        "radial-gradient(99.67% 99.67% at 50% -25.21%, #e76b38 0%, #000000 100%)",
      borderColor: "#642f15",
    }}
  >
    <div className="font-semibold text-sm text-white">{testimonial.name}</div>

    <div className="text-xs text-white/80">{testimonial.time}</div>

    <div className="flex-1 overflow-y-auto max-h-48 bg-black/40 border border-orange-900/40 rounded-lg p-3 text-white text-sm leading-relaxed scrollbar-custom">
      {testimonial.text}
    </div>

    <div className="font-bold text-yellow-300 mt-2">
      Converted {testimonial.converted}
    </div>

    <div className="flex flex-col gap-2 mt-2">
      {testimonial.media.map((m, i) =>
        m.type === "youtube" ? (
          <iframe
            key={i}
            className="w-full h-44 rounded-lg border border-orange-900/40"
            src={m.url}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            key={i}
            src={m.url}
            alt={m.type}
            className="w-full max-h-44 object-cover rounded-lg border border-orange-900/40"
          />
        )
      )}
    </div>
  </div>
);

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // const nextSlide = () =>
  //   setCurrent((prev) => (prev + 1) % testimonials.length);

  // const prevSlide = () =>
  //   setCurrent(
  //     (prev) => (prev - 1 + testimonials.length) % testimonials.length
  //   );

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // Auto-slide
  // useEffect(() => {
  //   if (isPaused) return;
  //   const interval = setInterval(nextSlide, 3500);
  //   return () => clearInterval(interval);
  // }, [isPaused]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  return (
    <div className="bg-white p-6 md:p-8 flex flex-col items-center gap-5">
      {/* main head */}
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-1 bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
        1000s of MBA Exam Toppers from We CAT Course
      </h3>

      <p className="text-black text-md font-bold text-center max-w-3xl">
        Hundreds of CAT Aspirants have improved their score and cracked top IIMs
        in their second attempt
      </p>

      {/* ================== DESKTOP GRID (unchanged) ================== */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {testimonials.map((t, index) => (
          <TestimonialCard testimonial={t} key={index} />
        ))}
      </div>

      {/* ================== MOBILE SLIDER ================== */}
      <div
        className="sm:hidden relative w-full max-w-lg mx-auto mt-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Smooth Slide */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              // variants={variants}
              // key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full  inset-0 flex items-center"
            >
              {/* Keep card structure exactly the same */}
              <TestimonialCard testimonial={testimonials[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* LEFT ARROW */}
           {/* OUTSIDE ARROWS (FIXED) */}
    <button
      onClick={prevSlide}
      className="
        absolute -left-6 top-1/2 -translate-y-1/2
        bg-black/40 text-white p-3 rounded-full
        backdrop-blur-md shadow-lg hover:bg-black/60 transition
        z-50
      "
    >
      ‹
    </button>

        {/* RIGHT ARROW */}
 <button
      onClick={nextSlide}
      className="
        absolute -right-6 top-1/2 -translate-y-1/2
        bg-black/40 text-white p-3 rounded-full
        backdrop-blur-md shadow-lg hover:bg-black/60 transition
        z-50
      "
    >
      ›
    </button>

        {/* DOTS */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === current ? "bg-black w-6" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
