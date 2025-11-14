import React, { useState, useEffect } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const toppersData = [
  {
    name: "Gursimran Ahuja",
    college: "IIM Ahmedabad",
    percentile: "99.83",
    text: "Being active in your online course and engaging with peers can truly transform your preparation. Every time I participated in We’s live sessions, I learned something new — not just concepts, but new ways to think about problems. The peer learning and the constant motivation from mentors helped me avoid common mistakes and solve questions faster under pressure. I’m deeply thankful to We for creating such an interactive learning environment that helped me stay focused and confident throughout my CAT journey.",
    image: "https://randomuser.me/api/portraits/women/86.jpg",
  },
  {
    name: "Shikhar Sachdeva",
    college: "IIM Ahmedabad",
    percentile: "99.98",
    text: "It's difficult to put into words the gratitude I feel for my mentor, Indrajeet Singh. His guidance, constant motivation, and deep understanding of the exam helped me stay calm and consistent. We's structured course and active community made even the toughest concepts easy to grasp. Every mock discussion and doubt-solving session gave me more clarity and confidence. Looking back, I can say this journey with We has not just helped me crack CAT, but also made me a more disciplined learner overall.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Sahil Aggarwal",
    college: "IIM Ahmedabad",
    percentile: "99.76",
    text: "With a tight schedule and limited time for preparation, I knew I had to rely on the right guidance — and We turned out to be a complete game-changer. The concise yet comprehensive lectures saved me hours of confusion. The shortcuts, strategies, and detailed explanations made solving even the toughest Quant questions easy. My preparation improved drastically within a few months, and that confidence reflected in my CAT score. I owe a huge part of my success to the amazing mentors and community at We.",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Biswanath Chakraborty",
    college: "IIM Bangalore",
    percentile: "99.06",
    text: "My CAT journey started two years ago with lots of uncertainty and fear, but joining We changed everything. The way concepts were explained — especially in Quant and VARC — made complex topics simple. The group discussions and practice sessions with previous toppers pushed me beyond my limits. We gave me not just knowledge, but also the right mindset to tackle challenges. Today, when I look back, I realize that consistent effort and proper mentorship were the real keys to achieving my dream score.",
    image: "https://randomuser.me/api/portraits/men/69.jpg",
  },
  {
    name: "Debarshee Mitra",
    college: "IIM Calcutta",
    percentile: "99.70",
    text: "I still remember struggling with time management during my initial preparation. That's when We's structured approach came to the rescue. The detailed concept classes, regular mocks, and insightful doubt-clearing sessions helped me improve with every passing week. By September, I could see a clear difference in my accuracy and speed. The mentors at We always ensured that no question went unanswered. Achieving a 99.86 percentile felt like a dream come true, and We played a huge role in making it possible.",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    name: "Akshat Jain",
    college: "IIM Bangalore",
    percentile: "99.82",
    text: "Indrajeet Sir's shortcuts and problem-solving techniques are absolute lifesavers during the exam. His way of teaching makes even the toughest Quant topics look easy and fun. I used to struggle with timing earlier, but after applying his methods, I could solve questions faster and more accurately. The regular mocks, video explanations, and constant mentor support made my preparation journey smooth and enjoyable. We truly focuses on both concept clarity and exam strategy — the perfect combination for CAT success.",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    name: "Pratik Ranjan",
    college: "IIM Lucknow",
    percentile: "99.83",
    text: "The We crash course turned out to be a blessing during the final months of preparation. It helped me revise every topic quickly and build confidence before the actual exam. The focused revision sessions, mock analysis, and personal feedback made all the difference. What stood out to me was the clarity of explanations and the dedication of the mentors — they genuinely care about every student's progress. Thanks to We, I was able to perform beyond my expectations and achieve a score I once thought was impossible.",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    name: "Shweta Arya",
    college: "IIM Shillong",
    percentile: "99.83",
    text: "Before joining We, I struggled with consistency and concept clarity. The way the mentors taught — breaking complex ideas into simple steps — made learning so much more effective. I especially loved how the community was always active, helping and motivating each other. My weaker sections gradually became my strengths, and the improvement was clearly visible in my mocks. We's flexible online setup allowed me to study at my own pace while staying connected with mentors. It was a complete support system that helped me reach my dream IIM.",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
];

const ToppersStory = () => {
  /* ---------------- MOBILE SLIDER LOGIC ---------------- */
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () =>
    setMobileIndex((prev) => (prev + 1) % toppersData.length);

  const prevSlide = () =>
    setMobileIndex((prev) => (prev - 1 + toppersData.length) % toppersData.length);

  useEffect(() => {
    if (isPaused) return;

    const t = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % toppersData.length);
    }, 3000);

    return () => clearInterval(t);
  }, [isPaused, toppersData.length]);

  return (
    <div className="bg-white text-black py-12 px-4 md:px-8">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 
        bg-clip-text text-transparent 
        bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
        Read Toppers' Success Stories
      </h2>

      {/* DESKTOP GRID */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {toppersData.map((topper, index) => (
          <div
            key={index}
            className="
              rounded-2xl p-6 flex flex-col justify-between h-full shadow-xl 
              hover:shadow-2xl transition-all duration-300
              border border-[#7a4a25]
              bg-[radial-gradient(99.67%_99.67%_at_50%_-25.21%,#e76b38_0%,#000000_100%)]
              text-white
            "
          >
            {/* Profile */}
            <div className="flex items-center mb-4">
              <img
                src={topper.image}
                alt={topper.name}
                className="h-20 w-20 rounded-full border-2 border-white object-cover"
              />
              <div className="ml-4">
                <p className="text-white/80 font-semibold text-sm">CAT Percentile</p>
                <p className="text-white font-bold text-xl">{topper.percentile}</p>
              </div>
            </div>

            {/* Scrollable text */}
            <div className="flex-1 mb-4 overflow-y-auto max-h-40 
              bg-black/30 border border-white/20 
              rounded-lg p-3 text-white/90 text-sm leading-relaxed scrollbar-custom">
              {topper.text}
            </div>

            <div className="text-center mt-2">
              <p className="font-bold text-lg text-white">{topper.name}</p>
              <p className="text-white/70 text-sm">{topper.college}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE SLIDER */}
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
            {(() => {
              const topper = toppersData[mobileIndex];
              return (
                <div
                  className="
                    rounded-2xl p-6 flex flex-col justify-between h-full shadow-xl 
                    border border-[#7a4a25]
                    bg-[radial-gradient(99.67%_99.67%_at_50%_-25.21%,#e76b38_0%,#000000_100%)]
                    text-white
                  "
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={topper.image}
                      alt={topper.name}
                      className="h-20 w-20 rounded-full border-2 border-white object-cover"
                    />
                    <div className="ml-4">
                      <p className="text-white/80 font-semibold text-sm">CAT Percentile</p>
                      <p className="text-white font-bold text-xl">{topper.percentile}</p>
                    </div>
                  </div>

                  <div className="
                    flex-1 mb-4 overflow-y-auto max-h-40 
                    bg-black/30 border border-white/20 
                    rounded-lg p-3 text-white/90 text-sm leading-relaxed 
                  ">
                    {topper.text}
                  </div>

                  <div className="text-center mt-2">
                    <p className="font-bold text-lg text-white">{topper.name}</p>
                    <p className="text-white/70 text-sm">{topper.college}</p>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </AnimatePresence>

        {/* ARROWS */}
       {/* OUTSIDE ARROWS */}
<button
  onClick={prevSlide}
  className="
    absolute -left-5 top-1/2 -translate-y-1/2
    bg-black/40 text-white p-3 rounded-full 
    backdrop-blur-md shadow-lg
    hover:bg-black/60 transition
  "
>
  ‹
</button>

<button
  onClick={nextSlide}
  className="
    absolute -right-5 top-1/2 -translate-y-1/2
    bg-black/40 text-white p-3 rounded-full 
    backdrop-blur-md shadow-lg
    hover:bg-black/60 transition
  "
>
  ›
</button>

        {/* DOTS */}
        <div className="flex justify-center mt-4 space-x-2">
          {toppersData.map((_, dotIndex) => (
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
  );
};

export default ToppersStory;
