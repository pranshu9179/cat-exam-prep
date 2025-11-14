import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, BookOpen, Star, ArrowRight } from "lucide-react";

// Dummy data for courses
const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    desc: "Learn MERN stack with hands-on projects and real-time experience.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 2,
    title: "Data Science & AI",
    desc: "Master Python, Machine Learning, and AI-driven analytics.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "Design beautiful and user-friendly digital experiences.",
    img: "https://images.unsplash.com/photo-1559027615-ce3a9a3c1098",
  },
  {
    id: 4,
    title: "Cloud Computing",
    desc: "AWS, Azure, Docker, and Kubernetes explained practically.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

const timeline = [
  {
    step: "Enroll & Orientation",
    desc: "Start your journey by enrolling in your favorite course.",
  },
  {
    step: "Interactive Learning",
    desc: "Attend live sessions and complete projects weekly.",
  },
  {
    step: "Assessments",
    desc: "Test your knowledge with quizzes and challenges.",
  },
  {
    step: "Certification",
    desc: "Get your certificate and showcase your achievement.",
  },
];

const videos = [
  {
    title: "Introduction to React",
    thumb: "https://img.youtube.com/vi/w7ejDZ8SWv8/0.jpg",
    link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
  },
  {
    title: "Data Science Basics",
    thumb: "https://img.youtube.com/vi/ua-CiDNNj30/0.jpg",
    link: "https://www.youtube.com/watch?v=ua-CiDNNj30",
  },
  {
    title: "Figma for Beginners",
    thumb: "https://img.youtube.com/vi/jpXw3zHJS3g/0.jpg",
    link: "https://www.youtube.com/watch?v=jpXw3zHJS3g",
  },
];

const AllCoursesPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* 🌟 Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-lg text-gray-100 mb-6">
            Learn, grow, and build your future with industry-ready skills.
          </p>
          <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
            Browse Courses
          </button>
        </motion.div>
      </section>

      {/* 🎓 Course Showcase Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Courses
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={course.img}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.desc}</p>
                <div className="flex items-center justify-between pt-3">
                  <button className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-800">
                    View Course <ArrowRight size={18} />
                  </button>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🧭 Timeline Section */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Your Learning Journey
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-300"></div>
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`mb-12 flex items-center ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-1/2"></div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-1/2 p-6"
              >
                <div className="bg-white shadow-lg rounded-2xl p-6 border border-indigo-100">
                  <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎥 Video Showcase Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Watch & Learn
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.a
              key={i}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="relative block overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={video.thumb}
                alt={video.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <PlayCircle className="text-white" size={50} />
              </div>
              <div className="absolute bottom-0 bg-black/60 text-white w-full py-2 px-4 text-sm">
                {video.title}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* 💡 Why Choose Us Section */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Learn With Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-indigo-700 p-6 rounded-2xl shadow-lg">
            <BookOpen size={40} className="mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Expert Mentors</h4>
            <p className="text-gray-200 text-sm">
              Learn directly from industry professionals with years of
              experience.
            </p>
          </div>
          <div className="bg-indigo-700 p-6 rounded-2xl shadow-lg">
            <Star size={40} className="mx-auto mb-4 text-yellow-400" />
            <h4 className="font-semibold text-lg mb-2">Practical Learning</h4>
            <p className="text-gray-200 text-sm">
              Hands-on projects and assignments for real-world experience.
            </p>
          </div>
          <div className="bg-indigo-700 p-6 rounded-2xl shadow-lg">
            <ArrowRight size={40} className="mx-auto mb-4" />
            <h4 className="font-semibold text-lg mb-2">Career Growth</h4>
            <p className="text-gray-200 text-sm">
              Get certified and open doors to new opportunities worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllCoursesPage;