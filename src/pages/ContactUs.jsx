// import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Printer,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";
import mapimg1 from "../assets/public/mapimg1.png";
import { AnimatePresence, motion } from "framer-motion";
// import { ArrowRight, ChevronRight, Phone, Mail, ChevronLeft } from "lucide-react";

import { useState, useEffect } from "react";
import SeparatorLine from "../components/SepratorLine";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPlay,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cards = [
    {
      title: "Customer Support",
      content:
        "Have a query or grievance? Our dedicated customer support team is available to help you with course information, enrollment issues, technical assistance, and feedback resolution — ensuring a smooth and reliable experience at every step.",
      link: "Customer Support",
    },
    {
      title: "Careers at CL",
      content:
        "CL is an equal opportunity workplace committed to innovation and professional growth. Join a dynamic team of educators, technologists, and professionals who are passionate about transforming education and empowering future leaders.",
      link: "Apply Now",
    },
    {
      title: "Franchisee Queries",
      content: "Transform your passion for education into a successful venture",
      phones: ["011-41281100", "+91-9810576049"],
      emails: ["bp@careerlauncher.com", "network@careerlauncher.com"],
    },
  ];

  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % cards.length),
      3000
    );
    return () => clearInterval(timer);
  }, [pause]);

  const next = () => setIndex((prev) => (prev + 1) % cards.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Find a Center Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-snug">
                Find a <span className="text-orange-400">center</span> near you
              </h1>

              <p className="text-gray-300 mb-8 text-lg">
                Our 200+ centers, spread across the nation, are more than just
                classrooms. They are hubs of academic excellence where dreams
                are nurtured, skills are honed, and futures are built.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="text-orange-400 mt-1 text-xl">✓</div>
                  <p className="text-gray-300">
                    Personalized learning from top educators in your city
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-orange-400 mt-1 text-xl">✓</div>
                  <p className="text-gray-300">
                    State-of-the-Art Facilities with latest technologies
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-orange-400 mt-1 text-xl">✓</div>
                  <p className="text-gray-300">
                    Unparalleled in-person experience
                  </p>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center text-lg font-semibold pb-1 
         bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent
         hover:opacity-80 transition-all border-b border-orange-500"
              >
                Find a center near me <ChevronRight className="ml-1 w-5 h-5" />
              </a>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-orange-500/20 blur-3xl"></div>

                <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden ">
                  <img
                    src={mapimg1}
                    alt="India Map with Centers"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SeparatorLine />
      {/* Enquiry Form Section */}
      {/* <section className="py-16 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-3xl mx-auto rounded-lg py-16 px-4 md:px-8"
         style={{
                background:
                  "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
              }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Send us an <span className="text-orange-500">Enquiry</span>
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Fill out the form below and our team will get back to you shortly
          </p>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Phone *
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="+91 1234567890"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Subject of enquiry"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Tell us more about your enquiry..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Submit Enquiry
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Enquiry Form Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black">
        <div
          className="max-w-3xl mx-auto rounded-2xl px-8 py-10 shadow-[0_0_40px_rgba(225,107,58,0.15)] backdrop-blur-xl border border-white/10"
          style={{
            background:
              "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
          }}
        >
          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3">
            <span className="text-white">Send us an </span>
            <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
              Enquiry
            </span>
          </h2>

          <p className="text-center text-gray-300 text-sm mb-10">
            Fill out the form below and our team will get back to you shortly
          </p>

          {/* FORM */}
          <div className="space-y-7">
            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="input-field"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="input-field"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">
                  Phone *
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                  className="input-field"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of enquiry"
                  className="input-field"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium">
                Message *
              </label>
              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your enquiry..."
                className="input-field resize-none"
              />
            </div>

            {/* BUTTON */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="px-10 py-3 rounded-xl font-semibold bg-[linear-gradient(90deg,#E16B3A,#B14820)] text-white shadow-[0_0_15px_rgba(225,107,58,0.45)] hover:scale-105 transition-all duration-300"
              >
                Submit Enquiry
              </button>
            </div>
          </div>
        </div>

        {/* INPUT STYLING */}
        <style>{`
    .input-field {
      width: 100%;
      padding: 14px 18px;
      border-radius: 10px;
      background: rgba(255,255,255,0.06);
      border: 2px solid rgba(255,255,255,0.18);
      color: white;
      font-size: 14px;
      transition: 0.25s;
    }
    .input-field::placeholder {
      color: rgba(255,255,255,0.4);
    }
    .input-field:focus {
      border-color: #E16B3A;
      box-shadow: 0 0 12px rgba(225,107,58,0.7);
      outline: none;
    }
  `}</style>
      </section>
      <SeparatorLine />
      {/* Three Cards Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* ⭐ DESKTOP VIEW (3 CARDS) */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {/* CUSTOMER SUPPORT */}
            <div
              className=" p-8 rounded-xl shadow-md backdrop-blur-xl
        border border-transparent
        hover:border-[#E16B3A]
        hover:shadow-[0_0_25px_rgba(225,107,58,0.35)]
        hover:scale-[1.02] transition-all duration-500"
              style={{
                background:
                  "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
              }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Customer <span className="text-orange-400">Support</span>
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Have a query or grievance? Our dedicated customer support team
                is available to help you with course information, enrollment
                issues, technical assistance, and feedback resolution — ensuring
                a smooth and reliable experience at every step.
              </p>

              <a
                href="#"
                className="inline-flex items-center font-semibold pb-1 bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent border-b border-orange-500"
              >
                Customer Support <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>

            {/* CAREERS */}
            <div
              className=" p-8 rounded-xl shadow-md backdrop-blur-xl
        border border-transparent
        hover:border-[#E16B3A]
        hover:shadow-[0_0_25px_rgba(225,107,58,0.35)]
        hover:scale-[1.02] transition-all duration-500"
              style={{
                background:
                  "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
              }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Careers at <span className="text-orange-400">CL</span>
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                CL is an equal opportunity workplace committed to innovation and
                professional growth. Join a dynamic team of educators,
                technologists, and professionals who are passionate about
                transforming education and empowering future leaders.
              </p>

              <a
                href="#"
                className="inline-flex items-center font-semibold pb-1 bg-[linear-gradient(90deg,#E16B3A,#B14820)] bg-clip-text text-transparent border-b border-orange-500"
              >
                Apply here <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>

            {/* FRANCHISEE */}
            <div
              className=" p-8 rounded-xl shadow-md backdrop-blur-xl
        border border-transparent
        hover:border-[#E16B3A]
        hover:shadow-[0_0_25px_rgba(225,107,58,0.35)]
        hover:scale-[1.02] transition-all duration-500"
              style={{
                background:
                  "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
              }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Franchisee <span className="text-orange-400">Queries</span>
              </h2>

              <p className="text-gray-300 mb-6">
                Transform your passion for education into a successful venture
              </p>

              <div className="space-y-2 text-gray-200">
                <div className="flex gap-2 items-center">
                  <Phone className="w-4 h-4" /> 011-41281100
                </div>

                <div className="flex gap-2 items-center">
                  <Phone className="w-4 h-4" /> +91-9810576049
                </div>

                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1" />
                  <div>
                    bp@careerlauncher.com <br />
                    network@careerlauncher.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ⭐ MOBILE SLIDER (CAT Style + NEW BORDER) */}
          <div
            className="md:hidden relative max-w-md mx-auto mt-10"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full min-h-fit overflow-visible"
              >
                <div
                  className="p-6 rounded-xl shadow-lg min-h-fit overflow-visible
            border border-transparent
            hover:border-[#E16B3A]
            hover:shadow-[0_0_25px_rgba(225,107,58,0.35)]
            transition-all duration-500"
                  style={{
                    background:
                      "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
                  }}
                >
                  <h3
                    className="text-xl font-bold mb-4
              bg-clip-text text-transparent
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]"
                  >
                    {cards[index].title}
                  </h3>

                  {cards[index].content && (
                    <p className="text-gray-300 leading-relaxed">
                      {cards[index].content}
                    </p>
                  )}

                  {cards[index].phones && (
                    <ul className="space-y-2 text-gray-300 mt-3">
                      {cards[index].phones.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#E16B3A]">•</span> {p}
                        </li>
                      ))}
                      {cards[index].emails.map((e, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#E16B3A]">•</span> {e}
                        </li>
                      ))}
                    </ul>
                  )}

                  {cards[index].link && (
                    <span className="text-orange-400 font-semibold inline-block mt-4">
                      {cards[index].link}
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-3">
              {cards.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full ${
                    index === i ? "bg-[#E16B3A]" : "bg-gray-600"
                  }`}
                ></div>
              ))}
            </div>

            {/* ARROWS */}
            <button
              onClick={prev}
              className="absolute top-1/2 left-0 -translate-y-1/2 p-2 text-white bg-white/20 rounded-full backdrop-blur"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute top-1/2 right-0 -translate-y-1/2 p-2 text-white bg-white/20 rounded-full backdrop-blur"
            >
              ›
            </button>
          </div>
        </div>
      </section>
      <SeparatorLine />
      {/* Partner Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Partner <span className="text-orange-500">with us</span>
          </h2>

          <p className="text-center text-gray-300 mb-12">
            Join hands with us for a meaningful partnership for nation building
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* CARD 1 */}
            <div
              className="p-6 rounded-xl flex flex-col items-center text-center
          border border-transparent
        hover:border-[#E16B3A]
        hover:shadow-[0_0_25px_rgba(225,107,58,0.35)]
        hover:scale-[1.02] transition-all duration-500"
              style={{
                background:
                  "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
              }}
            >
              <div className="text-orange-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white">Franchisees</h3>
            </div>

            {/* CARD 2 */}
            <div
              className="p-6 rounded-xl flex flex-col items-center text-center
           border border-transparent
        hover:border-[#E16B3A]
        hover:shadow-[0_0_25px_rgba(225,107,58,0.35)]
        hover:scale-[1.02] transition-all duration-500"
              style={{
                background:
                  "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
              }}
            >
              <div className="text-orange-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white">Universities</h3>
            </div>

            {/* CARD 3 */}
            <div
              className="p-6 rounded-xl flex flex-col items-center text-center
           border border-transparent
        hover:border-[#E16B3A]
        hover:shadow-[0_0_25px_rgba(225,107,58,0.35)]
        hover:scale-[1.02] transition-all duration-500"
              style={{
                background:
                  "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
              }}
            >
              <div className="text-orange-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm0 13.5l-5-2.73V10l5 2.73 5-2.73v3.77l-5 2.73z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white">Schools</h3>
            </div>

            {/* CARD 4 */}
            <div
              className="p-6 rounded-xl flex flex-col items-center text-center
             border border-transparent
        hover:border-[#E16B3A]
        hover:shadow-[0_0_25px_rgba(225,107,58,0.35)]
        hover:scale-[1.02] transition-all duration-500"
              style={{
                background:
                  "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
              }}
            >
              <div className="text-orange-500 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-white">Study Abroad</h3>
            </div>
          </div>
        </div>
      </section>

      <SeparatorLine />
      {/* Head Office Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            CL <span className="text-orange-500">Head Office</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* MAP */}
            <div
              className="rounded-xl overflow-hidden h-96 border border-orange-500/30 shadow-[0_0_25px_rgba(225,107,58,0.20)]"
              style={{
                background:
                  "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5926419305844!2d77.1142!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMyJzA3LjgiTiA3N8KwMDYnNTEuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="CL Head Office Location"
              ></iframe>
            </div>

            {/* INFO BOX */}
            <div
              className="space-y-6 p-6 rounded-xl border border-orange-500/20 
        hover:shadow-[0_0_25px_rgba(225,107,58,0.35)] transition duration-500"
              style={{
                background:
                  "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
              }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  CL Educate Ltd.
                </h3>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <p>
                      A-45, First Floor, Mohan Co-operative Industrial Estate,{" "}
                      <br />
                      New Delhi - 110044
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <p>Tel No.: 011-41281100</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Printer className="w-5 h-5 text-orange-500" />
                    <p>Fax No. 011-41281101</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-semibold text-white">
                        Jobs. Send your resumes to:
                      </p>
                      <p className="text-gray-300">hr@careerlauncher.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIAL ICONS */}

              <div>
                <p className="font-semibold mb-3 text-white">
                  Follow us on{" "}
                  <span className="text-orange-500">Social Media</span>
                </p>

                <div className="flex gap-3 flex-wrap">
                  {[
                    FaFacebook,
                    FaInstagram,
                    FaLinkedin,
                    FaTwitter,
                    FaYoutube,
                    FaPlay,
                  ].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-lg flex items-center justify-center
        border-2 border-gray-500/50 text-gray-300
         hover:border-[#E16B3A] 
        transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
