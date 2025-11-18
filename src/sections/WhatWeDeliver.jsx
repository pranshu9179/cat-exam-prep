import React from "react";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  School,
  BookMarked,
  Globe,
  Search,
  ShoppingCart,
  MapPin,
  Award,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhatWeDeliver = () => {

  const navigate = useNavigate();


  const programs = [
    { icon: <Briefcase className="w-12 h-12" />, title: "CAT",path: "/cat-Exam" },
    { icon: <GraduationCap className="w-12 h-12" />, title: "MBA",path: "/mba-Exam" },
    { icon: <BookOpen className="w-12 h-12" />, title: "XAT",path: "/xat-Exam" },
    { icon: <School className="w-12 h-12" />, title: "CUET",path: "/mba-Exam" },
    { icon: <BookMarked className="w-12 h-12" />, title: "Tuitions" ,path: "/tutions-Exam"},
    { icon: <Globe className="w-12 h-12" />, title: "XGMT",path: "/xgmt-Exam" },
  ];

  const actions = [
    { icon: <Search className="w-16 h-16" />, title: "Explore Programs" },
    { icon: <ShoppingCart className="w-16 h-16" />, title: "Enroll now" },
    { icon: <MapPin className="w-16 h-16" />, title: "Find a Center" },
  ];

  return (
    <div className="w-full bg-[#000000]">
      {/* What are you looking for section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 
            text-white"
          >
            What are{" "}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
              you looking for?
            </span>
          </h1>

          <p className="text-center text-gray-300 text-sm sm:text-base lg:text-lg mb-12 px-4">
            Prepare for MBA, Law, CUET, CAT, BBA and more. Achieve your career
            goals and make your parents proud.
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 ">
            {programs.map((program, index) => (
              <div
                key={index}
                  onClick={() => navigate(program.path)}
                className="rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center cursor-pointer group
                bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                border border-[#5a463e] hover:border-[#E16B3A]  transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div className="text-[#E16B3A] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-200 ">
                  {program.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Starts with One Step section */}
      {/* (Color theme already added, uncomment when needed) */}
      {/* 
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div className="flex items-center mb-8 lg:mb-0">

              <div className="mr-4 sm:mr-6 text-[#E16B3A]">
                <Award className="w-20 h-20 sm:w-24 sm:h-24" />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2
                  text-transparent bg-clip-text bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                  Success Starts with <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#E16B3A,#B14820)]">One Step</span>
                </h2>
                <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                  Start learning with our curated programs driven by knowledge, ambition, and result.
                </p>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {actions.map((action, index) => (
              <div
                key={index}
                className="rounded-xl p-10 bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                border border-[#5a463e] hover:border-[#E16B3A] shadow-md hover:shadow-2xl transition-all duration-300
                flex flex-col items-center justify-center cursor-pointer group"
              >
                <div className="text-[#E16B3A] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {action.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-200">
                  {action.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>
      */}
    </div>
  );
};

export default WhatWeDeliver;
