import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Monitor,
  Users,
  Presentation,
} from "lucide-react";

import hero1 from "../../assets/public/ew0V5jf.jpg";
import hero2 from "../../assets/public/Childrens-Day.jpg";
import { motion, AnimatePresence } from "framer-motion";
import SeparatorLine from "../../components/SepratorLine";
const Tuitions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedLearning, setSelectedLearning] = useState(null);

  const slides = [
    {
      image: hero1,
      alt: "Slide 1",
    },
    {
      image: hero2,
      alt: "Slide 2",
    },
    {
      image: hero1,
      alt: "Slide 3",
    },
  ];
  const testimonials = [
    {
      name: "Shreyansh",
      image: "https://via.placeholder.com/100/cccccc/666666?text=S",
      text: "I joined Career Launcher in 10th standard and my experience was great. The faculty members were very supportive and the study material was very helpful. All these points helped me to score 96.2% in my 10th Board exams. Furthermore, the competitive environment motivated me to study hard.",
      enrollment: "60178586",
    },
    {
      name: "Adithys Krishna S",
      image: "https://via.placeholder.com/100/cccccc/666666?text=A",
      text: "I had a great experience with Career Launcher during my 9th and 10th standards. All the teachers are student-friendly and also helped me a lot to achieve my score of 94.4% in 10th. They always help us learn efficiently and also give many extra questions to study.",
      enrollment: "60178568",
    },
    {
      name: "Ansh Mehta",
      image: "https://via.placeholder.com/100/cccccc/666666?text=A",
      text: "Career Launcher has helped me a lot in my securing 95.2% in class X CBSE Board. I'd really like to extend special thanks to Gaurav sir, Maths faculty at my Indirapuram center, who helped me in every way possible- from clearing doubts on the phone to taking extra classes.",
      enrollment: "60266534",
    },
  ];

  const faqs = [
    {
      question: "What is the duration of the tuition program?",
      answer:
        "The tuition program runs throughout the academic year, aligned with the CBSE curriculum for classes 8-12.",
    },
    {
      question: "Are the classes conducted online or offline?",
      answer:
        "We offer both online and offline modes of learning. Students can choose based on their convenience and preference.",
    },
    {
      question: "What subjects are covered in the tuition program?",
      answer:
        "We cover all major subjects including Mathematics, Science, English, and Social Studies based on the CBSE curriculum.",
    },
    {
      question: "How often are parent-mentor interactions scheduled?",
      answer:
        "Parent-mentor interactions are scheduled twice during the course span to discuss student progress and address concerns.",
    },
    {
      question: "Is study material provided?",
      answer:
        "Yes, comprehensive study material including worksheets, practice questions, and recorded sessions are provided through our MyZone portal.",
    },
  ];

  // const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  // NEXT
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // PREV
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // AUTOPLAY (3 seconds)
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [paused]);

  // const nextTestimonial = () => {
  //   setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  // };

  // const prevTestimonial = () => {
  //   setCurrentTestimonial(
  //     (prev) => (prev - 1 + testimonials.length) % testimonials.length
  //   );
  // };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  // const [paused, setPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // autoplay
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      nextTestimonial();
    }, 3000);
    return () => clearInterval(t);
  }, [paused, currentTestimonial]);

  return (
    <div className="min-h-screen bg-white">
      {/* PREMIUM TUITIONS SECTION  */}
      <section className="w-full bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-4 text-white">
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              Tuitions
            </span>{" "}
            for Classes 8-12
          </h1>

          {/* Sub Heading */}
          <div
            className="bg-[radial-gradient(144.43%_144.43%_at_50%_-25%,#392e29_0%,#000000_100%)]
      border border-[#3a322e] rounded-full py-3 px-6 text-center mb-10 shadow-lg"
          >
            <p className="text-[#E16B3A] text-sm sm:text-base lg:text-lg font-semibold">
              Achieve academic excellence with our premium tuitions program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2">
              {/* ========================= MOBILE SLIDER ========================= */}
              <div
                className="md:hidden relative overflow-hidden max-w-md mx-auto"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full inset-0"
                  >
                    <div
                      className="
                  rounded-xl shadow-xl overflow-hidden border border-[#2a2522]
                  bg-[radial-gradient(144.43%_144.43%_at_50%_-25%,#392e29_0%,#000000_100%)]
                "
                    >
                      {/* IMAGE */}
                      <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].alt}
                        className="w-full h-64 object-fit"
                      />

                      {/* DESCRIPTION UNDER IMAGE */}
                      <div className="p-6">
                        <p className="text-gray-300 text-sm leading-relaxed text-justify">
                          Welcome to Career Launcher Tuitions — Experience
                          premium online tutoring with personalized learning,
                          convenience, and expert educators. Our sessions are
                          curated to boost academic excellence through
                          structured lessons.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slider Dots */}
                <div className="flex justify-center mt-3 gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentSlide === index ? "bg-[#E16B3A]" : "bg-gray-600"
                      }`}
                    ></button>
                  ))}
                </div>

                {/* Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 -mt-10 left-3 -translate-y-1/2 p-2 bg-white/20 text-white rounded-full"
                >
                  ‹
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 -mt-10 right-3 -translate-y-1/2 p-2 bg-white/20 text-white rounded-full"
                >
                  ›
                </button>
              </div>

              {/* ========================= DESKTOP SLIDER ========================= */}
              <div
                className="hidden md:block relative overflow-hidden rounded-xl
            border border-[#2a2522] shadow-xl 
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25%,#392e29_0%,#000000_100%)]
            mb-6"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -150 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full"
                  >
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].alt}
                      className="w-full h-80 object-fit"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Desktop Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 
              bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-10"
                >
                  ‹
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 
              bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-10"
                >
                  ›
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify mt-4">
                Welcome to Career Launcher Tuitions — Experience premium online
                tutoring with personalized learning, convenience, and expert
                educators.
              </p>

              {/* Class Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 ">
                {[
                  "Class 8",
                  "Class 9",
                  "Class 10",
                  "Class 11",
                  "Class 12",
                  "CL - Olympiad",
                ].map((c, i) => (
                  <button
                    key={i}
                    className="py-3 px-4 rounded-lg font-semibold text-white
                bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)] border border-[#3a322e] hover:border-[#B14820] transition-all"
                  >
                    {c}
                  </button>
                ))}

                <button
                  className="col-span-2 sm:col-span-3 py-3 px-4 rounded-lg font-semibold text-white
            bg-[linear-gradient(90deg,#E16B3A,#B14820)] hover:opacity-90 transition-all"
                >
                  Free Study Material
                </button>
              </div>

              {/* What's New */}
              <div className="mt-8">
                <div
                  className="inline-block px-6 py-2 rounded-t-lg
            bg-[linear-gradient(90deg,#E16B3A,#B14820)]"
                >
                  <h3 className="text-xl font-bold text-white">What's New?</h3>
                </div>

                <div className="bg-black/40 border border-[#3a322e] text-gray-300 p-4 rounded-b-lg rounded-tr-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#E16B3A] rounded-full p-2 flex-shrink-0">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm sm:text-base">
                      CL Aptitude Olympiad 2025 is live!{" "}
                      <span className="text-[#E16B3A] font-semibold cursor-pointer">
                        Know More!
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================================== */}
            {/* ======================= RIGHT CONTACT FORM ========================== */}
            {/* ===================================================================== */}

            <div
              className="rounded-xl p-6 shadow-xl 
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25%,#392e29_0%,#000000_100%)]
          border border-[#2a2522]"
            >
              <h3 className="text-2xl font-bold text-center mb-2 text-white">
                Want to know more?
              </h3>
              <p className="text-center text-gray-400 mb-6">Let’s connect!</p>

              <div className="space-y-4">
                {/* Radio Buttons */}
                <div>
                  <p className="text-gray-300 font-semibold mb-3 ">
                    Are you a :-
                  </p>
                  <div className="flex gap-4 ">
                    <label className="flex items-center cursor-pointer text-gray-300">
                      <input
                        type="radio"
                        name="userType"
                        className="w-4 h-4"
                        defaultChecked
                      />
                      <span className="ml-2">Student</span>
                    </label>
                    <label className="flex items-center cursor-pointer text-gray-300">
                      <input type="radio" name="userType" className="w-4 h-4" />
                      <span className="ml-2">Parent</span>
                    </label>
                  </div>
                </div>

                {/* Inputs */}
                {["Enter your Name", "Enter your email"].map((p, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={p}
                    className="w-full px-4 py-3 bg-black/40 border border-gray-700 
                text-white placeholder-gray-400 rounded-lg focus:outline-none 
                focus:ring-2 focus:ring-[#E16B3A]"
                  />
                ))}

                {/* Phone + OTP */}
                <div className="flex gap-2">
                  <input
                    type="tel"
                    placeholder="Enter Mobile No."
                    className="flex-1 px-4 py-3 bg-black/40 border border-gray-700 
                text-white placeholder-gray-400 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#E16B3A]"
                  />
                  <button
                    className="bg-[linear-gradient(90deg,#E16B3A,#B14820)]
              text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                  >
                    Send OTP
                  </button>
                </div>

                {/* Selects */}
                <div className="relative">
                  <button
                    onClick={() => setOpen1(!open1)}
                    className="
      w-full flex items-center justify-between px-4 py-3 rounded-xl
      bg-[linear-gradient(180deg,#2b2522,#191412)]
      text-gray-300 border border-[#3a322e]
      shadow-[inset_0_0_15px_rgba(0,0,0,0.6)]
    "
                  >
                    <span className="flex items-center gap-2">
                      <i className="fa-solid fa-book text-gray-300"></i>
                      {selectedClass ? (
                        selectedClass
                      ) : (
                        <span className="flex items-center gap-2">
                          I'm looking for <ChevronDown />
                        </span>
                      )}
                    </span>
                    <i
                      className={`fa-solid fa-chevron-${
                        open1 ? "up" : "down"
                      } text-gray-400`}
                    ></i>
                  </button>

                  {open1 && (
                    <div
                      className="
        absolute w-full mt-2 rounded-xl overflow-hidden z-20
        bg-[linear-gradient(180deg,#2b2522,#181311)]
        border border-[#3a322e]
        shadow-2xl
      "
                    >
                      {[
                        "Class 8",
                        "Class 9",
                        "Class 10",
                        "Class 11",
                        "Class 12",
                      ].map((item, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setSelectedClass(item);
                            setOpen1(false);
                          }}
                          className="
            px-4 py-3 text-gray-300 text-sm cursor-pointer
            hover:bg-white/10 transition-all
          "
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => setOpen2(!open2)}
                    className="
      w-full flex items-center justify-between px-4 py-3 rounded-xl
      bg-[linear-gradient(180deg,#2b2522,#191412)]
      text-gray-300 border border-[#3a322e]
      shadow-[inset_0_0_15px_rgba(0,0,0,0.6)]
    "
                  >
                    <span className="flex items-center gap-2">
                      <i className="fa-solid fa-layer-group text-gray-300"></i>
                      <span className="flex items-center gap-2">
                        {selectedLearning || (
                          <>
                            Preferred mode of learning <ChevronDown />
                          </>
                        )}
                      </span>
                    </span>
                    <i
                      className={`fa-solid fa-chevron-${
                        open2 ? "up" : "down"
                      } text-gray-400`}
                    ></i>
                  </button>

                  {open2 && (
                    <div
                      className="
        absolute w-full mt-2 rounded-xl overflow-hidden z-20
        bg-[linear-gradient(180deg,#2b2522,#181311)]
        border border-[#3a322e]
        shadow-2xl
      "
                    >
                      {["Online", "Offline", "Both"].map((item, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setSelectedLearning(item);
                            setOpen2(false);
                          }}
                          className="
            px-4 py-3 text-gray-300 text-sm cursor-pointer
            hover:bg-white/10 transition-all
          "
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  className="w-full py-3 bg-[linear-gradient(90deg,#E16B3A,#B14820)]
            text-white rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SeparatorLine />
      {/* Pedagogy Section - Image 2 */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-white">
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              Tuition's
            </span>{" "}
            unique student-centric pedagogy
          </h2>
          <div className="w-20 h-1 bg-[linear-gradient(90deg,#E16B3A,#B14820)] mx-auto mb-12"></div>

          {/* Top Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={hero1}
                alt="Student-centric pedagogy diagram"
                className="w-full max-w-md rounded-xl border border-[#3a322e] shadow-xl 
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25%,#392e29_0%,#000000_100%)]"
              />
            </div>

            {/* Text */}
            <div className="space-y-6 text-gray-300 text-justify">
              <p className="text-sm sm:text-base leading-relaxed">
                At Career Launcher, we are committed to ensuring students
                receive the best education that goes beyond just improving
                performance in CBSE curriculum classes. Recognizing the
                importance of class 8-12 learning in shaping future career
                pursuits and preparing for national-level competitive exams, our
                mission is to empower students for success.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                Our tuition program prioritizes concept clarity, a crucial
                factor for students to excel in their chosen career paths. We
                offer a comprehensive range of effective learning tools and
                resources, as illustrated in the accompanying diagram.
                Additionally, our AI-enabled Career Launcher platform delivers
                personalized guidance, enabling students to navigate their
                educational journey with confidence and purpose.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                Discover the Career Launcher advantage – where excellence meets
                personalized learning. Join us as we pave the way for your
                academic success and future career achievements.
              </p>
            </div>
          </div>
          <SeparatorLine />
          {/* Comprehensive Preparation */}
          <div className="mt-16">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-white">
              <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                Comprehensive
              </span>{" "}
              Preparation
            </h2>
            <div className="w-20 h-1 bg-[linear-gradient(90deg,#E16B3A,#B14820)] mx-auto mb-12"></div>

            {/* Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {[
                "Class 8th",
                "Class 9th",
                "Class 10th",
                "Class 11th",
                "Class 12th",
              ].map((className, index) => (
                <div
                  key={index}
                  className="
              rounded-xl p-6 cursor-pointer 
              bg-[radial-gradient(144.43%_144.43%_at_50%_-25%,#392e29_0%,#000000_100%)]
              border border-[#3a322e] shadow-lg
            
              hover:border-[#E16B3A]
              transition-all 
            "
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="
                w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center
                border-4 border-dashed border-[#E16B3A]
              "
                    >
                      <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-[#E16B3A]" />
                    </div>
                  </div>

                  <h3 className="text-center text-lg sm:text-xl font-extrabold text-white">
                    {className}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SeparatorLine />
      {/* Why Tuitions & What Makes Us Different - Image 3 */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* IMAGE */}
            <div className="flex justify-center order-2 lg:order-1">
              <img
                src={hero1}
                alt="Why Tuitions illustration"
                className="
            w-full max-w-sm rounded-xl shadow-xl 
            border border-[#3a322e]
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25%,#392e29_0%,#000000_100%)]
          "
              />
            </div>

            {/* TEXT CONTENT */}
            <div className="order-1 lg:order-2">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
                <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
                  Why
                </span>{" "}
                Tuitions?
              </h2>

              <div className="w-20 h-1 bg-[linear-gradient(90deg,#E16B3A,#B14820)] mb-6"></div>

              {/* Paragraphs */}
              <div className="space-y-4 text-gray-300 text-justify">
                <p className="text-sm sm:text-base leading-relaxed">
                  Since 1995, Career Launcher has played a pivotal role in
                  shaping up the careers of students. Our commitment towards
                  ensuring the success of students in class 8 to 12, is at the
                  core of Tuitions.
                </p>

                <p className="text-sm sm:text-base leading-relaxed">
                  At Career Launcher, we are ensuring that students are equipped
                  with all the fundamentals and concepts of subjects based on
                  the CBSE curriculum. Along with NCERT material, we provide
                  top-notch study material for students to practice which helps
                  them in fetching excellent marks in exams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SeparatorLine />
      {/* What Makes Us Different – XAT Premium Dark Theme */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              What makes us different?
            </span>
          </h2>

          <div className="w-20 h-1 bg-[linear-gradient(90deg,#E16B3A,#B14820)] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT SIDE TEXT */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                Stay on Track with Career Launcher
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <p className="leading-relaxed text-justify">
                  Every student gets access to our 24x7,
                  artificial-intelligence-based, online learning portal to
                  study, practise, take tests, and view their performance
                  analysis.
                </p>
                <p className="leading-relaxed text-justify">
                  Stay updated on the latest class or webinar being held for you
                  and your peers. You can also watch conceptual videos and
                  strategy sessions that are uploaded on a regular basis.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE CARD */}
            <div
              className="
          rounded-xl p-8 shadow-xl text-center
          border border-[#3a322e]
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25%,#392e29_0%,#000000_100%)]
        "
            >
              {/* Logo */}
              <div className="mb-6">
                <img
                  src={hero1}
                  alt="Career Launcher Logo"
                  className="mx-auto h-12 sm:h-16 opacity-90 rounded-2xl"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-6 bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                Your bridge to success
              </h3>

              {/* Buttons */}
              <div className="flex justify-center gap-4">
                {/* Sign In */}
                <button
                  className="
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]
              hover:opacity-90 text-white font-semibold 
              py-3 px-8 rounded-lg transition-all shadow-lg
            "
                >
                  Log In
                </button>

                {/* Sign Up */}
                <button
                  className="
              border-2 border-[#E16B3A]
              text-[#E16B3A] font-semibold py-3 px-8 rounded-lg
              hover:bg-[#E16B3A] hover:text-white transition-all
            "
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SeparatorLine />
      {/* Parent's Journey - XAT Premium Theme */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-white">
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              Parent's Journey
            </span>{" "}
            in the Program
          </h2>

          <div className="w-20 h-1 bg-[linear-gradient(90deg,#E16B3A,#B14820)] mx-auto mb-8"></div>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-12 text-justify max-w-5xl mx-auto">
            Parents play a very important role in a student's academic journey.
            More importantly in this age where they are going near to making big
            decisions for their careers, parents and students both need to be
            clear about their interests and options available to them. So we
            have planned a parent journey as well along with students.
          </p>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* CARD 1 */}
            <div
              className="
          rounded-lg p-6 sm:p-8 shadow-lg border border-[#3a322e]
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25%,#392e29_0%,#000000_100%)]
        "
            >
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-12 h-12 sm:w-16 sm:h-16 text-[#E16B3A] flex-shrink-0" />
                <div>
                  <h3
                    className="
                text-xl sm:text-2xl font-extrabold mb-2
                bg-clip-text text-transparent
                bg-[linear-gradient(90deg,#E16B3A,#B14820)]
              "
                  >
                    Parent Mentor Interaction
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                We have scheduled 2 PMIs across the course span. Through this,
                parents can check on their kid's progress and discuss it
                directly with the faculties.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="
          rounded-lg p-6 sm:p-8 shadow-lg border border-[#3a322e]
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25%,#392e29_0%,#000000_100%)]
        "
            >
              <div className="flex items-start gap-4 mb-4">
                <Presentation className="w-12 h-12 sm:w-16 sm:h-16 text-[#E16B3A] flex-shrink-0" />
                <div>
                  <h3
                    className="
                text-xl sm:text-2xl font-extrabold mb-2
                bg-clip-text text-transparent
                bg-[linear-gradient(90deg,#E16B3A,#B14820)]
              "
                  >
                    Seminar/Workshop for Parents
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                Various Seminar/Workshop for parents have also been scheduled
                across the duration of the course, having parenting tips and
                career options on agenda.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SeparatorLine />

      {/* STUDENT TESTIMONIALS – XAT Premium Slider */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-4">
            <span className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent">
              1000s of MBA Exam Toppers
            </span>{" "}
            from We CAT Course
          </h2>

          <p className="text-gray-600 text-center max-w-3xl mx-auto text-sm sm:text-base mb-10">
            Hundreds of CAT Aspirants have improved their score and cracked top
            IIMs in their second attempt
          </p>

          {/* Slider Wrapper */}
          <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 120 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -120 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                {/* SINGLE CARD */}
                <div
                  className="
              rounded-xl p-6 sm:p-8 shadow-xl border border-[#3a322e]
              bg-[radial-gradient(99.67%_99.67%_at_50%_-25.21%,#E76B38_0%,#000000_100%)]
              text-white max-w-4xl mx-auto
            "
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full border-2 border-white"
                    />
                    <div>
                      <h3 className="text-xl font-bold">
                        {testimonials[currentTestimonial].name}
                      </h3>
                      <p className="text-xs text-gray-200">
                        {testimonials[currentTestimonial].date}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4 text-justify">
                    {testimonials[currentTestimonial].text}
                  </p>

                  {/* Enrollment */}
                  <p className="text-xs font-semibold text-[#ffd2b3]">
                    Enrollment ID: {testimonials[currentTestimonial].enrollment}
                  </p>

                  {/* Video / Image */}
                  {testimonials[currentTestimonial].video && (
                    <div className="mt-6 rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="240"
                        src={testimonials[currentTestimonial].video}
                        className="rounded-lg"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ARROWS */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 
        bg-black/40 hover:bg-black/60 text-white p-3 sm:p-4 rounded-full"
            >
              ‹
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 
        bg-black/40 hover:bg-black/60 text-white p-3 sm:p-4 rounded-full"
            >
              ›
            </button>

            {/* DOTS */}
            <div className="flex justify-center mt-5 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full ${
                    currentTestimonial === i ? "bg-[#E16B3A]" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SeparatorLine />
      {/* FAQ Section – XAT Theme + Framer Motion */}
      <section className="w-full bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-start mb-8">
            Frequently Asked Questions
          </h2>

          {/* FAQ LIST */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="
            rounded-lg overflow-hidden
            border border-[#3a322e]
            bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
            shadow-md
          "
              >
                {/* QUESTION BUTTON */}
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="
              w-full px-6 py-4 text-left flex items-center justify-between
              hover:bg-black/40 transition-all
            "
                >
                  <span
                    className="
                font-semibold text-base sm:text-lg
                bg-clip-text text-transparent
                bg-[linear-gradient(90deg,#E16B3A,#B14820)]
              "
                  >
                    {faq.question}
                  </span>

                  {openFaq === index ? (
                    <ChevronDown className="w-5 h-5 text-[#E16B3A]" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-[#E16B3A]" />
                  )}
                </button>

                {/* ANIMATED ANSWER */}
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div
                        className="
                    px-6 py-4 
                    border-t border-[#3a322e]
                    bg-black/60
                  "
                      >
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tuitions;
