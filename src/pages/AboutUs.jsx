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
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
                  [target === 10000 ? "students" : target === 98 ? "successRate" : "mentors"]: target,
                }));
                clearInterval(timer);
              } else {
                setVisibleCounters((prev) => ({
                  ...prev,
                  [target === 10000 ? "students" : target === 98 ? "successRate" : "mentors"]: Math.floor(start),
                }));
              }
            }, 16);
          };

          animateCounter(10000, 2000); // Students
          animateCounter(98, 1500);    // Success Rate
          animateCounter(50, 1800);    // Mentors
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
      description: "Tailored schedules that match your pace and target percentile.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Deep insights into your progress, strengths, and areas to improve.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MessageSquare,
      title: "Doubt Discussion Forum",
      description: "Interact with mentors and peers to clarify doubts instantly.",
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
      description: "Learn from IIM alumni and CAT mentors with years of experience.",
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
      description: "Consistently producing 99+ percentilers across multiple CAT exams.",
    },
    {
      icon: Users,
      title: "Experienced Mentors",
      description: "Learn from IIM alumni and seasoned CAT trainers with years of expertise.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Material",
      description: "Access high-quality notes, topic-wise tests, and revision content.",
    },
    {
      icon: Brain,
      title: "Smart Learning Tools",
      description: "Adaptive practice and AI-based progress tracking for smarter prep.",
    },
    {
      icon: LineChart,
      title: "Performance Reviews",
      description: "Detailed analysis and weekly feedback to help you stay on track.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get instant help from our mentors and support team whenever you need it.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative py-14 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-500/10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About CAT Master
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're a team of passionate mentors, IIM alumni, and data-driven educators 
            who believe every CAT aspirant deserves personalized guidance and smart preparation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold flex items-center gap-3 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white text-blue-600 border border-blue-200 rounded-2xl font-semibold flex items-center gap-3 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={countersRef} className="py-16 px-6 md:px-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-slate-600 font-medium mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-10 px-6 md:px-12 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-1 pb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Our Preparation Strategy
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At <strong className="text-blue-600">CAT Master</strong>, we focus on smart preparation — 
                not just hard work. Our structured learning journey helps you master concepts, 
                practice efficiently, and refine test strategy to reach your target percentile.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Adaptive learning paths based on your performance",
                  "Regular mock tests with detailed analytics",
                  "Personalized mentorship and guidance",
                  "Comprehensive study material and resources"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <CheckCircle className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 group-hover:text-slate-900 transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {["Learn", "Work", "Test", "Improve"].map((step, index) => (
                  <motion.button
                    key={step}
                    className={`md:px-6 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                      index === 0 
                        ? "bg-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105" 
                        : "bg-white text-blue-600 border border-blue-200 hover:border-blue-300 hover:shadow-lg"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {step}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="CAT preparation strategy"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm opacity-90">
                    Learn smarter with interactive tools, adaptive tests, and expert guidance crafted for your CAT success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Features That Drive Success
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive learning ecosystem designed to maximize your CAT preparation efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-slate-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 px-6 md:px-12 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold mb-1 pb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Why Choose CAT Master?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover what sets us apart in the competitive world of CAT coaching
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-200 bg-gradient-to-br from-white to-slate-50/50 hover:to-blue-50/50 transition-all duration-500 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300 mb-4 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 px-6 md:px-12 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold mb-1 pb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Get answers to the most common questions about our program
            </p>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-slate-600 leading-relaxed">{faq.a}</p>
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
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
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
            Join thousands of successful CAT aspirants who transformed their preparation with us.
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
      </section>
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