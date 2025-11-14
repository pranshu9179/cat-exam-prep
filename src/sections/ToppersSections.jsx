import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const toppers = [
  {
    name: "Rishi Mittal",
    rank: "100%iler",
    score: "99 SCORE",
    percentile: "99.75 %ile",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&h=500&q=80",
    category: "We CAT 2024 Topper",
    description:
      "This was my first attempt at the CAT exam, and I began my coaching journey with We in the first week of August. Initially, I had absolutely no idea where to begin or how to structure my preparation. The mentors guided me with weekly study plans, personalized strategies, and concept-wise improvement targets. The daily practice sessions and topic-wise assignments helped me build a strong foundation in Quant and LRDI. Mock test discussions—especially the detailed performance analysis—were incredibly useful in identifying patterns in my mistakes and improving my accuracy. What helped me most was the consistent support and motivation from the faculty, which kept me disciplined, focused, and confident throughout the journey.",
    batch: "CAT 2024",
    background: "Engineering",
  },

  {
    name: "Soursabeey Banerjee",
    rank: "99.95%iler",
    score: "98 SCORE",
    percentile: "99.95 %ile",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&h=500&q=80",
    category: "CAT Topper",
    description:
      "We’s unique teaching methodology played a major role in helping me score well in CAT. Their LRDI pattern-based solving techniques completely changed the way I approached the section. The VARC strategy—especially the RC elimination framework—improved my speed and accuracy drastically. I benefited immensely from the daily assignments, weekly targets, and constant mentor feedback. The doubt-solving groups were extremely active, and every query was answered quickly, ensuring that I never got stuck for long. The structured study plan, combined with regular mock tests and performance tracking, helped me maintain discipline and consistency. Without this guidance, achieving such a percentile would have been difficult.",
    batch: "CAT 2024",
    background: "Commerce",
  },

  {
    name: "Farzan Shakh",
    rank: "99.94%iler",
    score: "97 SCORE",
    percentile: "99.94 %ile",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&h=500&q=80",
    category: "CAT Topper",
    description:
      "The doubt-solving sessions and intensive mock test ecosystem at We were instrumental in my success. Every time I struggled with a topic, the mentors were always available, often replying within minutes. Their 24×7 academic support, combined with structured assignments and progressive difficulty levels, allowed me to build strong conceptual clarity. The mock test analysis helped me identify weak areas and refine my test-taking strategy. Over time, I improved both my accuracy and my ability to handle pressure. The consistency that We helped me develop was the biggest reason behind my high percentile, and I am extremely grateful for their guidance.",
    batch: "CAT 2024",
    background: "Engineering",
  },

  {
    name: "Rounak Tikma",
    rank: "99.9%iler",
    score: "96 SCORE",
    percentile: "99.9 %ile",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80",
    category: "CAT Topper",
    description:
      "We's structured preparation plan helped me maintain consistency throughout my entire CAT journey. The daily practice doses ensured that I had a clear routine to follow, and the topic-wise assessments made revision highly effective. I especially liked their mock tests, which closely resembled the actual CAT difficulty level. The feedback sessions helped me refine my approach to each section—especially in Quant, where I initially struggled. With every mock, I became more confident in my test-taking strategy. The faculty’s continuous support and motivation made the process far smoother and more enjoyable than I had expected.",
    batch: "CAT 2024",
    background: "Science",
  },

  {
    name: "Aditya Prasad",
    rank: "99.55%iler",
    score: "95 SCORE",
    percentile: "99.55 %ile",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=500&q=80",
    category: "CAT Topper",
    description:
      "The comprehensive study modules and regular practice sessions at We gave me the clarity and confidence I needed for CAT. Their mock test ecosystem is incredibly well-designed and very close to the actual CAT pattern. The in-depth analysis reports helped me identify weak areas—especially in VARC—and the mentors personally guided me on how to improve them. Over time, I observed significant improvements in both accuracy and time management. The environment and study culture at We pushed me to stay consistent and perform better with each passing week.",
    batch: "CAT 2024",
    background: "Engineering",
  },

  {
    name: "Precious Kumar",
    rank: "99.75%iler",
    score: "96 SCORE",
    percentile: "99.75 %ile",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=500&q=80",
    category: "We CAT 2024 Topper",
    description:
      "As a working professional, balancing job responsibilities and CAT preparation felt overwhelming—until I joined We. Their flexible batch timings, recorded lectures, and structured weekend revision sessions were exactly what I needed. The mentors provided personalized guidance on how to prepare effectively in limited time. The targeted assignments, short practice drills, and detailed mock test reviews helped me stay on track despite my busy schedule. What makes We truly special is their dedication—the faculty genuinely cares about every student’s progress and constantly motivates them to do better.",
    batch: "CAT 2024",
    background: "Working Professional",
  },
];


const stats = [
  { number: "500+", label: "99%ilers" },
  { number: "2000+", label: "95%ilers" },
  { number: "50+", label: "100%ilers" },
  { number: "5000+", label: "Students" },
];

export default function ToppersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % toppers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (i) => setCurrentIndex(i);

  return (
    <section className="relative bg-[#000000] py-10 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)] mb-6">
            CAT online classes Toppers' Review & Journey
          </h2>

          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            Hear from CAT Toppers sharing their journey, challenges, strategies & success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-7">

          {/* LEFT SIDE */}
          <div className="space-y-4">

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="rounded-2xl p-5 text-center border border-[#5a4a41] shadow-xl
                  bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"
                >
                  <div className="text-3xl font-black bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                    {stat.number}
                  </div>
                  <div className="text-xs font-semibold text-white uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Topper Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {toppers.map((topper, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -8 }}
                  onClick={() => goToSlide(index)}
                  className={`rounded-2xl shadow-xl border cursor-pointer overflow-hidden 
                    bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                    ${index === currentIndex ? "border-[#E16B3A] ring-4 ring-[#B14820]/40" : "border-[#3b2f2a]"}
                  `}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img src={topper.img} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 text-xs font-bold text-white 
                      bg-[linear-gradient(90deg,#E16B3A,#B14820)] px-3 py-1 rounded-full">
                      {topper.rank}
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="text-sm font-bold text-white truncate">{topper.name}</h4>
                    <div className="mt-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded-lg inline-block">
                      {topper.background}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE FEATURE CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl shadow-2xl border border-[#5d4b43] p-7 
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"
          >
              <h3 className="text-2xl font-bold text-white mb-8 text-center leading-tight">
              We Toppers sharing their experience with CAT course
              and what they loved the most about us.
            </h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-22 h-22 rounded-full overflow-hidden border-4 border-[#E16B3A] ring-4 ring-[#B14820]/40">
                      <img src={toppers[currentIndex].img} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-[linear-gradient(90deg,#E16B3A,#B14820)] text-white text-[10px] px-2 py-1 rounded-full">
                      ✓ Verified
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {toppers[currentIndex].name}
                    </h4>
                    <p className="text-[#E16B3A] font-bold text-lg">{toppers[currentIndex].rank}</p>
                    <p className="text-white/80 text-sm mt-1">
                      Background: {toppers[currentIndex].background}
                    </p>
                  </div>
                </div>

                <p className="text-white bg-black/30 p-5 rounded-2xl border border-[#5d4b43] text-sm leading-relaxed mb-6">
                  {toppers[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {toppers.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.3 }}
                  className={`rounded-full transition-all ${
                    index === currentIndex
                      ? "w-10 h-3 bg-[linear-gradient(90deg,#E16B3A,#B14820)]"
                      : "w-3 h-3 bg-white/40"
                  }`}
                />
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
