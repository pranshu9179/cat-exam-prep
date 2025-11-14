import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SeparatorLine from "./components/SepratorLine";
import AboutUs from "./pages/AboutUs";
import CourseDetail from "./pages/ViewDetails/CourseDetails";
import CatExam from "./sections/exams/CatExam";
import MbaExam from "./sections/exams/MbaExam";
import XatExam from "./sections/exams/XatExam";
import XgmtExam from "./sections/exams/XgmtExam";
import Tuitions from "./sections/exams/Tuitions ";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/coursedetail" element={<CourseDetail />} />
          <Route path="/cat-Exam" element={<CatExam/>}/>
          <Route path="/mba-Exam" element={<MbaExam/>}/>
          <Route path="/xat-Exam" element={<XatExam/>}/>
          <Route path="/xgmt-Exam" element={<XgmtExam/>}/>
          <Route path="/tuitions-Exam" element={<Tuitions/>}/>

        </Routes>
      </main>
      <SeparatorLine />
      <Footer />
    </div>
  );
}
