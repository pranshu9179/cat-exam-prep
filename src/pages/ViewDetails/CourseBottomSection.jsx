import React from "react";
import { motion } from "framer-motion";

const CourseBottomSection = () => {
  const studentsAlsoBought = [
    {
      id: 1,
      title: "UI/UX Web Design in Figma 2025 | AI & Big Projects",
      hours: "16 total hours",
      rating: 4.7,
      reviews: "643",
      price: 579,
      oldPrice: 1699,
      tag: "Bestseller",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6auMD2sLavMFvWrM5mlT702rAA_9gOex0A&s",
    },
    {
      id: 2,
      title: "Complete Figma Megacourse: UI/UX Design Beginner to Expert",
      hours: "41.5 total hours",
      rating: 4.4,
      reviews: "59,948",
      price: 569,
      oldPrice: 3499,
      tag: "Premium",
      image:
        "https://dekhouniversity.com/wp-content/uploads/2023/08/about-cat-exam.webp",
    },
    {
      id: 3,
      title: "Master Figma: Getting started Beginner to Pro Class",
      hours: "5 total hours",
      rating: 4.7,
      reviews: "4,893",
      price: 619,
      oldPrice: 2699,
      tag: "Bestseller",
      image:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190729162935/cat2019Eligibility.png",
    },
  ];

  const boughtTogether = [
    {
      id: 1,
      title: "Learn Figma - UI/UX Design Essential Training",
      instructor: "Caleb Kingston",
      price: 769,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06-3DpdaVr_nLzrT0zyx5WlIMN2VGaxxE0g&s",
    },
    {
      id: 2,
      title: "DESIGN RULES: Principles + Practices for Great UI Design",
      instructor: "Joe Natoli",
      price: 739,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06-3DpdaVr_nLzrT0zyx5WlIMN2VGaxxE0g&s",
    },
    {
      id: 3,
      title: "UX & Web Design Master Course: Strategy, Design, Development",
      instructor: "Joe Natoli",
      price: 689,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06-3DpdaVr_nLzrT0zyx5WlIMN2VGaxxE0g&s",
    },
  ];

  const instructor = {
    name: "Caleb Kingston",
    role: "User Interface teacher at www.appdesigntips.com",
    rating: 4.4,
    reviews: "20,840",
    students: "85,870",
    courses: 4,
    bio: `Back in 2010, I started Brainsip with a desire to design compelling and engaging apps.
For over 7 years, I have designed many high-profile web and iPhone applications.
The applications range from 3D medical web apps to project management systems.`,
    avatar:
      "https://cdn.vectorstock.com/i/1000v/51/87/student-avatar-user-profile-icon-vector-47025187.jpg",
  };

  const reviews = [
    {
      name: "Ralph B.",
      comment:
        "Good for beginners! Covers design principles well, but could use more real-world examples.",
      date: "1 month ago",
      stars: 4,
      avatar:
        "https://ui-avatars.com/api/?name=Ralph+B&background=6B46C1&color=fff",
    },
    {
      name: "Harry D.",
      comment:
        "Excellent course! The instructor explains everything very clearly. Highly recommend!",
      date: "2 months ago",
      stars: 5,
      avatar:
        "https://ui-avatars.com/api/?name=Harry+D&background=6B46C1&color=fff",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      {/* Section Header Reusable Style */}
      <style>{`
        .section-title {
          @apply text-3xl font-semibold mb-8 text-gray-900 border-b-2 border-blue-100 pb-2;
        }
      `}</style>

      {/* Students also bought */}
      <section className="mb-20">
        {/* <h2 className="section-title">Students also bought</h2> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentsAlsoBought.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  {course.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-700 transition">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{course.hours}</p>
                <div className="flex items-center gap-2 mt-2 text-yellow-500 text-sm">
                  ⭐ {course.rating}
                  <span className="text-gray-400">({course.reviews})</span>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <p className="font-bold text-xl text-gray-900">
                      ₹{course.price}
                    </p>
                    <p className="text-gray-400 line-through text-sm">
                      ₹{course.oldPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently bought together */}
      <section className="mb-20">
        {/* <h2 className="section-title">Frequently bought together</h2> */}
        <div className="bg-gradient-to-br from-white to-blue-50 border border-gray-200 rounded-2xl shadow-md p-6">
          {boughtTogether.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-4 border-b last:border-none"
            >
              <div className="flex items-center gap-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg shadow-sm"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.instructor}</p>
                </div>
              </div>
              <p className="font-semibold text-blue-700 text-lg">
                ₹{item.price}
              </p>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <p className="font-semibold text-lg">
              Total:{" "}
              <span className="text-blue-700 text-2xl">
                ₹{boughtTogether.reduce((sum, item) => sum + item.price, 0)}
              </span>
            </p>
            <button className="bg-blue-700 text-white px-8 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition">
              Add all to cart
            </button>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="mb-20">
        {/* <h2 className="section-title">Instructor</h2> */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="w-28 h-28 rounded-full object-cover shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold text-blue-700">
                {instructor.name}
              </h3>
              <p className="text-gray-600">{instructor.role}</p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                <span>⭐ {instructor.rating} Instructor Rating</span>
                <span>🗣 {instructor.reviews} Reviews</span>
                <span>🎓 {instructor.students} Students</span>
                <span>📚 {instructor.courses} Courses</span>
              </div>
              <p className="mt-5 text-gray-700 leading-relaxed whitespace-pre-line">
                {instructor.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ FINAL CTA */}
      <section className="text-center py-14 bg-gradient-to-r from-blue-100 via-blue-50 to-cyan-100">
         <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Ready to start learning Figma?
        </h2>
        <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
          Join 70,000+ learners and build professional UI/UX designs with Figma.
          Get certified, get creative!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all"
        >
          Enroll Now
        </motion.button>
      </section>
        {/* Reviews Section */}
      <section>
        {/* <h2 className="section-title mt-5">⭐ 4.4 course rating • 18K ratings</h2> */}
        <div className="grid sm:grid-cols-2 gap-8 mt-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-12 h-12 rounded-full shadow-sm"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{r.name}</h4>
                  <p className="text-sm text-gray-500">{r.date}</p>
                </div>
              </div>
              <div className="text-yellow-500 text-sm mb-2">
                {"⭐".repeat(r.stars)}{" "}
                <span className="text-gray-500">({r.stars})</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{r.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseBottomSection;
