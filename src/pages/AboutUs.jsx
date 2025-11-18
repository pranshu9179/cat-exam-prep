import {
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Clock,
  GraduationCap,
  Headphones,
  LineChart,
  MessageSquare,
  Star,
  Target,
  Users,
  ChevronDown,
  Play,
  CheckCircle,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SeparatorLine from "../components/SepratorLine";

const AboutUs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [visibleCounters, setVisibleCounters] = useState({
    students: 0,
    successRate: 0,
    mentors: 0,
  });
  const countersRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate counters
          const animateCounter = (target, duration) => {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= target) {
                setVisibleCounters((prev) => ({
                  ...prev,
                  [target === 10000
                    ? "students"
                    : target === 98
                    ? "successRate"
                    : "mentors"]: target,
                }));
                clearInterval(timer);
              } else {
                setVisibleCounters((prev) => ({
                  ...prev,
                  [target === 10000
                    ? "students"
                    : target === 98
                    ? "successRate"
                    : "mentors"]: Math.floor(start),
                }));
              }
            }, 16);
          };

          animateCounter(10000, 2000); // Students
          animateCounter(98, 1500); // Success Rate
          animateCounter(50, 1800); // Mentors
        }
      },
      { threshold: 0.5 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      number: visibleCounters.students.toLocaleString(),
      label: "Students Trained",
      suffix: "+",
    },
    {
      icon: Star,
      number: visibleCounters.successRate,
      label: "Success Rate",
      suffix: "%",
    },
    {
      icon: GraduationCap,
      number: visibleCounters.mentors,
      label: "Expert Mentors",
      suffix: "+",
    },
  ];

  const features = [
    {
      icon: Target,
      title: "Personalized Study Plans",
      description:
        "Tailored schedules that match your pace and target percentile.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Deep insights into your progress, strengths, and areas to improve.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MessageSquare,
      title: "Doubt Discussion Forum",
      description:
        "Interact with mentors and peers to clarify doubts instantly.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Attend live or recorded sessions anytime, anywhere.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Award,
      title: "Expert Faculty",
      description:
        "Learn from IIM alumni and CAT mentors with years of experience.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Headphones,
      title: "Mentorship Support",
      description: "1-on-1 mentorship to help you stay motivated and focused.",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: "Proven Results",
      description:
        "Consistently producing 99+ percentilers across multiple CAT exams.",
    },
    {
      icon: Users,
      title: "Experienced Mentors",
      description:
        "Learn from IIM alumni and seasoned CAT trainers with years of expertise.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Material",
      description:
        "Access high-quality notes, topic-wise tests, and revision content.",
    },
    {
      icon: Brain,
      title: "Smart Learning Tools",
      description:
        "Adaptive practice and AI-based progress tracking for smarter prep.",
    },
    {
      icon: LineChart,
      title: "Performance Reviews",
      description:
        "Detailed analysis and weekly feedback to help you stay on track.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Get instant help from our mentors and support team whenever you need it.",
    },
  ];

  const [mobileIndex, setMobileIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  const [whyIndex, setWhyIndex] = useState(0);
  const [whyPaused, setWhyPaused] = useState(false);

  useEffect(() => {
    if (whyPaused) return;

    const interval = setInterval(() => {
      setWhyIndex((prev) => (prev + 1) % whyChooseUs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [whyPaused]);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section
        className="relative py-16 px-6 md:px-12 overflow-hidden bg-black"
        style={{
          background:
            "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
        }}
      >
        {/* Decorative Blurs */}
        <div className="absolute inset-0 bg-black pointer-events-none" />

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About{" "}
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              CAT Master
            </span>{" "}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We’re a team of passionate mentors, IIM alumni, and data-driven
            educators committed to giving every aspirant personalized guidance &
            smarter preparation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* PRIMARY BUTTON */}
            <button
              className="
      group px-8 py-4 
      bg-[linear-gradient(90deg,#E16B3A,#B14820)] 
      text-white rounded-2xl font-semibold 
      flex items-center gap-3
      hover:scale-105 transition-all duration-300
    "
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* SECONDARY WATCH DEMO BUTTON */}
            <button
              className="
      group px-8 py-4 
      rounded-2xl font-semibold flex items-center gap-3
      text-white border border-[#E16B3A]/40
      hover:scale-105 transition-all duration-300
    "
              style={{
                background:
                  "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
              }}
            >
              <Play className="w-5 h-5 text-[#B14820]" />
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      <SeparatorLine />
      {/* Stats Section */}
      <section ref={countersRef} className="py-16 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="
    text-center p-8 rounded-2xl transition-all duration-500
    hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(225,107,58,0.35)]
    border border-transparent hover:border-[#E16B3A]
  "
                style={{
                  background:
                    "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* ICON BOX */}
                <div
                  className="
              w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center 
              shadow-md
            bg-[linear-gradient(90deg,#E16B3A,#B14820)]
            "
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* NUMBER */}
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                  {stat.number}
                  {stat.suffix}
                </div>

                {/* LABEL */}
                <div className="text-gray-300 font-medium mt-2 tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-10 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-1 pb-4 text-black">
                Our Preparation{" "}
                <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                  Strategy
                </span>{" "}
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At <strong className="text-[#B14820]">CAT Master</strong>, we
                focus on smart preparation — not just hard work. Our structured
                learning journey helps you master concepts, practice
                efficiently, and refine test strategy to reach your target
                percentile.
              </p>

              {/* Bullet Points */}
              <div className="space-y-4 mb-8">
                {[
                  "Adaptive learning paths based on your performance",
                  "Regular mock tests with detailed analytics",
                  "Personalized mentorship and guidance",
                  "Comprehensive study material and resources",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <CheckCircle className="w-6 h-6 text-[#E16B3A] group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {["Learn", "Work", "Test", "Improve"].map((step, index) => (
                  <motion.button
                    key={step}
                    className={`md:px-6 px-4 py-2 rounded-xl font-semibold transition-all duration-300
              ${
                index === 0
                  ? "text-white bg-[linear-gradient(90deg,#E16B3A,#B14820)] hover:scale-105"
                  : "text-[#B14820] border border-[#B14820]/40 hover:border-[#B14820] hover:scale-105"
              }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {step}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="relative rounded-3xl overflow-hidden shadow-xl group"
                style={{
                  background:
                    "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="CAT preparation strategy"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm opacity-90">
                    Learn smarter with interactive tools, adaptive tests, and
                    expert guidance crafted for your CAT success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold mb-4 text-white text-center">
              Features That Drive{" "}
              <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                Success
              </span>{" "}
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive learning ecosystem designed to maximize your CAT
              preparation efficiency
            </p>
          </motion.div>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="
            group p-8 rounded-2xl transition-all duration-500
            border border-[#E16B3A]/30
            hover:-translate-y-2 hover:border-[#E16B3A]
          "
                style={{
                  background:
                    "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="
              w-14 h-14 rounded-2xl flex justify-center items-center mb-6
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]
              group-hover:scale-110 transition-transform duration-300
            "
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* MOBILE AUTO SLIDER */}
          <div className="md:hidden relative mt-6">
            <AnimatePresence mode="wait">
              {(() => {
                const FeatureIcon = features[mobileIndex].icon;
                return (
                  <motion.div
                    key={mobileIndex}
                    initial={{ opacity: 0, x: 70 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -70 }}
                    transition={{ duration: 0.45 }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    className="p-8 rounded-2xl border border-[#E16B3A]/30"
                    style={{
                      background:
                        "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
                    }}
                  >
                    {/* ICON */}
                    <div className="w-14 h-14 rounded-2xl flex justify-center items-center mb-6 bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                      <FeatureIcon className="w-7 h-7 text-white" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {features[mobileIndex].title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-gray-300 leading-relaxed">
                      {features[mobileIndex].description}
                    </p>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* ARROWS */}
            <button
              onClick={() =>
                setMobileIndex((prev) =>
                  prev === 0 ? features.length - 1 : prev - 1
                )
              }
              className="absolute top-1/2 left-0 -translate-y-1/2 p-2 text-white bg-white/20 rounded-full hover:bg-white/40rounded-full backdrop-blur"
            >
              ‹
            </button>

            <button
              onClick={() =>
                setMobileIndex((prev) =>
                  prev === features.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute top-1/2 right-0 -translate-y-1/2 p-2 text-white bg-white/20 rounded-full hover:bg-white/40 backdrop-blur"
            >
              ›
            </button>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-4 pb-4">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    mobileIndex === i ? "bg-[#E16B3A]" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <SeparatorLine />
      {/* Why Choose Us Section */}
      <section className="py-10 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold mb-2 text-white">
              Why Choose <span className="text-[#E16B3A]">CAT Master?</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover what sets us apart in the competitive world of CAT
              coaching
            </p>
          </motion.div>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                className="
            group p-6 rounded-2xl border border-[#E16B3A]/30
            hover:border-[#E16B3A] transition-all duration-500 hover:-translate-y-1
          "
                style={{
                  background:
                    "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div
                  className="
              w-12 h-12 rounded-xl flex items-center justify-center mb-4
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]
              group-hover:scale-110 transition-transform duration-300
            "
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* MOBILE SLIDER */}
          <div className="md:hidden relative mt-6">
            <AnimatePresence mode="wait">
              {(() => {
                const Icon = whyChooseUs[whyIndex].icon;

                return (
                  <motion.div
                    key={whyIndex}
                    initial={{ opacity: 0, x: 70 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -70 }}
                    transition={{ duration: 0.45 }}
                    onMouseEnter={() => setWhyPaused(true)}
                    onMouseLeave={() => setWhyPaused(false)}
                    className="p-6 rounded-2xl border border-[#E16B3A]/30"
                    style={{
                      background:
                        "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl flex justify-center items-center mb-4 bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="font-bold text-white mb-2">
                      {whyChooseUs[whyIndex].title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {whyChooseUs[whyIndex].description}
                    </p>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* ARROWS */}
            <button
              onClick={() =>
                setWhyIndex((prev) =>
                  prev === 0 ? whyChooseUs.length - 1 : prev - 1
                )
              }
              className="absolute top-1/2 left-0 -translate-y-1/2 p-2 text-white bg-white/20 rounded-full backdrop-blur"
            >
              ‹
            </button>

            <button
              onClick={() =>
                setWhyIndex((prev) =>
                  prev === whyChooseUs.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute top-1/2 right-0 -translate-y-1/2 p-2 text-white bg-white/20 rounded-full backdrop-blur"
            >
              ›
            </button>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-4 pb-2">
              {whyChooseUs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setWhyIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    whyIndex === i ? "bg-[#E16B3A]" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white text-start mb-8"
          >
            Frequently Asked Questions
          </motion.h2>

          {/* FAQ LIST */}
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                className="
            rounded-lg overflow-hidden
            border border-[#3a322e]
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
            shadow-md
          "
              >
                {/* QUESTION BUTTON */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
              w-full px-6 py-4 flex items-center justify-between
              hover:bg-black/40 transition-all duration-300 text-left
            "
                >
                  <span
                    className="
                font-semibold text-base sm:text-lg
                bg-clip-text text-transparent
                bg-[linear-gradient(90deg,#E16B3A,#B14820)]
              "
                  >
                    {faq.q}
                  </span>

                  {openFAQ === index ? (
                    <ChevronDown className="w-5 h-5 text-[#E16B3A]" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-[#E16B3A]" />
                  )}
                </button>

                {/* SMOOTH ANIMATED ANSWER */}
                <AnimatePresence mode="wait">
                  {openFAQ === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className="
                    px-6 py-4 
                    border-t border-[#3a322e]
                    bg-black/60
                  "
                      >
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Start Your CAT Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-blue-100"
          >
            Join thousands of successful CAT aspirants who transformed their
            preparation with us.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl">
              Enroll Now
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Book Free Demo
            </button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;

const FAQS = [
  {
    q: "Do I need prior CAT experience to join?",
    a: "Not at all. We offer foundation-level batches designed for first-time aspirants with comprehensive beginner-friendly content.",
  },
  {
    q: "Are the classes live or recorded?",
    a: "Both! You'll get access to live interactive sessions as well as recordings for flexible learning. All sessions are recorded and available for lifetime access.",
  },
  {
    q: "Do you provide mock tests?",
    a: "Yes, we provide section-wise and full-length mock tests with detailed analysis reports, All-India ranking, and personalized improvement suggestions.",
  },
  {
    q: "Is one-on-one mentorship available?",
    a: "Yes, personalized mentorship is available under our CAT 99+ Achiever Program with regular one-on-one sessions with IIM alumni mentors.",
  },
  {
    q: "Can I access the course on mobile?",
    a: "Absolutely! Our platform is fully responsive and mobile-friendly, accessible 24/7 from any device with offline download capabilities.",
  },
];
