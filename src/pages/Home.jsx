import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CoursesSection from "../sections/CoursesSection";
import ToppersSection from "../sections/ToppersSections";
import ResourcesSection from "../sections/ResourcesSection";
import BlogSection from "../sections/BlogSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import FAQSection from "../sections/FAQSection";
import WhyChooseUs from "../sections/WhyChooseUs";
import Faculties from "../sections/Faculties";
import ToppersStory from "../sections/ToppersStory";
import FreeCatMaterials from "../sections/FreeCatMaterial";
import SeparatorLine from "../components/SepratorLine";
import CourseComparison from "../sections/CourseComparision";
import HomeBottom from "../sections/HomeBottom";
import HomeAbout from "../sections/HomeAbout";
import CollegeDetails from "../sections/CollegeDetails";
import WhatWeDeliver from "../sections/WhatWeDeliver";

// ✅ IMPROVED SLIDER COMPONENT
function Slider() {
  const cards = [
    {
      img: "https://www.iquanta.in/blog/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-09-at-5.20.09-PM.jpeg",
      title: "Live CAT 2025 Online Classes",
      desc: "Learn from IIM Alumni with interactive live sessions, personalized mentorship & AI-driven mock analysis.",
    },
    {
      img: "https://www.iquanta.in/blog/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-09-at-5.20.09-PM.jpeg",
      title: "AI-Based Mock Tests",
      desc: "Experience real CAT-level difficulty with AI adaptive mocks and detailed performance analytics.",
    },
    {
      img: "https://www.iquanta.in/blog/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-09-at-5.20.09-PM.jpeg",
      title: "100K+ Active CAT Aspirants",
      desc: "Get 24x7 peer learning support, topic discussions, and expert guidance.",
    },
    {
      img: "https://www.iquanta.in/blog/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-09-at-5.20.09-PM.jpeg",
      title: "Comprehensive Study Material",
      desc: "Access updated CAT 2025 syllabus, sectional practice, and mentor-curated shortcuts.",
    },
    {
      img: "https://www.iquanta.in/blog/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-09-at-5.20.09-PM.jpeg",
      title: "Personalized Learning Path",
      desc: "Custom study plans based on your strengths and weaknesses with regular progress tracking.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ✅ Main Slider Container */}
      <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-[rgb(24,24,24)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center"
          >
            <div className="flex flex-col md:flex-row items-center w-full h-full p-6 md:p-8">
              {/* Image Section */}
              <div className="flex-shrink-0 w-full md:w-2/5 mb-6 md:mb-0 md:mr-8">
                <div className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
                  <img
                    className="w-full h-full object-cover"
                    src={cards[currentIndex].img}
                    alt={cards[currentIndex].title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
                  {cards[currentIndex].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {cards[currentIndex].desc}
                </p>
                <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ✅ Navigation Arrows */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button> */}

        {/* <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button> */}
      </div>

      {/* ✅ Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-3">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gray-900 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* ✅ Progress Bar */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
        <motion.div
          className="bg-gray-900 h-1 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: isPaused ? "100%" : "0%" }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: isPaused ? 0 : Infinity,
          }}
        />
      </div>
    </div>
  );
}

// Alternative: Card Slider (if you prefer multiple cards visible)
function CardSlider() {
  const cards = [
    {
      img: "https://www.verbalhub.com/blog-images/best-cat-courses-online.png",
      title: "Live CAT 2025 Online Classes",
      desc: "Learn from IIM Alumni with interactive live sessions.",
    },
    {
      img: "https://www.verbalhub.com/blog-images/best-cat-courses-online.png",
      title: "AI-Based Mock Tests",
      desc: "Experience real CAT-level difficulty with AI adaptive mocks.",
    },
    {
      img: "https://www.verbalhub.com/blog-images/best-cat-courses-online.png",
      title: "100K+ Active CAT Aspirants",
      desc: "Get 24x7 peer learning support and expert guidance.",
    },
    {
      img: "https://www.verbalhub.com/blog-images/best-cat-courses-online.png",
      title: "Comprehensive Study Material",
      desc: "Access updated CAT 2025 syllabus and sectional practice.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.ceil(cards.length / cardsPerView)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto ">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${currentIndex * (100 / cardsPerView)}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mx-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    src={card.img}
                    alt={card.title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                    {card.title}
                  </h3>

                  <p className="text-white leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots for card slider */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(cards.length / cardsPerView) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
          )
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ✅ HERO SECTION */}
      <section className="relative bg-[#000000] ">
        <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0 ">
            <div className="md:block hidden">
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Crack CAT with India's
                <span className="inline">
                  <img
                    className="inline w-auto h-8 sm:h-10 lg:h-12"
                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-1.svg"
                    alt="shape-1"
                  />
                </span>{" "}
                Best Online Coaching
                <span className="inline">
                  <img
                    className="inline w-auto h-8 sm:h-10 lg:h-11"
                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-2.svg"
                    alt="shape-2"
                  />
                </span>
              </h1>

              <p className="mt-6 text-base font-normal leading-7 text-white">
                Join India's most trusted CAT Online Coaching Platform with 24x7
                doubt-solving, live classes from IIM alumni, and structured
                study plans tailored for CAT, XAT, NMAT & more.
              </p>

              <svg
                className="w-auto h-4 mt-8 text-gray-300"
                viewBox="0 0 172 16"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                />
                <line
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                />
              </svg>

              <p className="mt-8 text-base font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                Subscribe for Free CAT Preparation Tips & Updates
              </p>


              <form action="#" method="post" className="relative mt-4">
                <div className="absolute transitiona-all duration-1000 opacity-30 inset-0  rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <div>
                      <input
                        type="email"
                        id="email"
                        className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-300 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200  bg-[linear-gradient(90deg,#E16B3A,#B14820)] border border-transparent rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Join Now
                  </button>
                </div>
              </form>
              
              </div>
              <div className="md:hidden flex flex-row justify-center text-center text-3xl text-white  ">Start Your Journey</div>
            </div>
          </div>
        </div>

        {/* ✅ RIGHT SIDE - CHOOSE ONE SLIDER VERSION */}
        <div className="pb-8 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:flex lg:items-center lg:pb-0 lg:pr-8">
          {/* Use either Slider (single card) or CardSlider (multiple cards) */}
          <Slider />
          {/* <CardSlider /> */}
        </div>
      </section>

      {/* ✅ REST OF YOUR SECTIONS */}
      <div>
        {/* Your other sections remain the same */}
         <SeparatorLine />
        <WhatWeDeliver/>
        <TestimonialsSection />
        <SeparatorLine />
        <ToppersSection />
        <SeparatorLine />

        <CoursesSection />
        <SeparatorLine />
        <Faculties />
        <SeparatorLine />
        <ToppersStory />
        <SeparatorLine />
        <WhyChooseUs />
        <SeparatorLine />
        <HomeAbout />
        <SeparatorLine />
        <CollegeDetails />
        <SeparatorLine />
        <FreeCatMaterials />
        <SeparatorLine />
        <CourseComparison />
        <SeparatorLine />
        <HomeBottom />
      </div>
    </>
  );
}
