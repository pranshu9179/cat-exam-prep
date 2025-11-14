import { useState } from "react";
import { BookOpen, ExternalLink, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

/* ✅ Custom Scrollbar (already your code) */
const styles = `
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(96,165,250,.7); border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
`;

const categories = ["All", "IIT-JEE", "Career Guide", "Chemistry"];

const postsData = [
  {
    slug: "jee-mains-exam-pattern-2026",
    img: "/src/assets/public/ew0V5jf.jpg",
    title: "JEE Mains Exam Pattern 2026 — Marking Scheme & Important Dates",
    category: "IIT-JEE",
    excerpt:
      "JEE Mains 2026 exam registration starts in October. Students may choose...",
    author: "Nidhi Priya",
    date: "Oct 15, 2025",
  },
  {
    slug: "top-10-engineering-courses-high-salary",
    img: "/src/assets/public/ew0V5jf.jpg",
    title: "Top 10 Engineering Courses With Highest Salary in India",
    category: "Career Guide",
    excerpt:
      "Top high-salary courses in India based on demand and placements...",
    author: "Nidhi Priya",
    date: "Oct 14, 2025",
  },
  {
    slug: "jee-main-chemistry-strategy-2026",
    img: "/src/assets/public/ew0V5jf.jpg",
    title: "JEE Main Chemistry Strategy 2026 — Preparation Tips",
    category: "Chemistry",
    excerpt: "Chemistry strategy: How to score high in Chemistry for JEE...",
    author: "Nidhi Priya",
    date: "Oct 13, 2025",
  },
];

const leftSidebar = [
  "Top 50 MBA Colleges — Fees, Placement, Exams",
  "MBA Colleges With FREE Structure",
  "How to Write SOP for MBA (Guide)",
  "Top IIMs — Avg Package 25–33 LPA",
  "MBA in Pune — Eligibility & Admission",
  "Top 50 MBA Colleges — Fees, Placement, Exams",
  "How to Write SOP for MBA (Guide)",
  "Top IIMs — Avg Package 25–33 LPA",
  "MBA in Pune — Eligibility & Admission",
];

const rightSidebar = [
  {
    title: "XAT Exam 2026 — Important Updates",
    img: "/src/assets/public/ew0V5jf.jpg",
  },
  {
    title: "GMAT Focus Edition — Exam Pattern & Syllabus",
    img: "/src/assets/public/ew0V5jf.jpg",
  },
  {
    title: "Which MBA Entrance Exam Is the Hardest?",
    img: "/src/assets/public/ew0V5jf.jpg",
  },
];

export default function BlogSection({ showFilters = true }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPosts = postsData.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <style>{styles}</style>

      {/* ✅ Same Dark Gradient Background Like Toppers */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4 text-white">
        {/* Heading only on Blog Page */}
        {showFilters && (
          <>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">
              Explore Latest Blogs
            </h2>
            <p className="text-gray-300 text-center mb-10">
              Learn from IITians, IIM grads & industry experts
            </p>
          </>
        )}

        {/* ✅ Search + Filter */}
        {showFilters && (
          <div className="flex flex-col md:flex-row justify-between gap-4 items-center mb-10 max-w-7xl mx-auto">
            <div className="relative w-full md:w-1/2">
              <Search
                className="absolute left-3 top-3 text-gray-300"
                size={20}
              />
              <input
                type="text"
                placeholder="Search blog articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-10 py-3 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full border text-sm transition ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white border-blue-500"
                      : "text-gray-300 border-gray-600 hover:bg-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ✅ Layout (Sidebar | Posts | Sidebar) */}
        {showFilters ? (
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr_250px] gap-6 max-w-7xl mx-auto">
            {/* LEFT SIDEBAR */}
            <aside className="hidden md:block sticky top-24 bg-gray-800/70 backdrop-blur-xl shadow-lg rounded-xl p-6 border border-gray-700">
              <h3 className="font-bold text-xl mb-5 flex items-center gap-2 text-blue-400">
                <BookOpen size={18} /> MBA Colleges
              </h3>

              {leftSidebar.map((item, idx) => (
                <p
                  key={idx}
                  className="text-gray-300 hover:text-blue-400 cursor-pointer mb-3"
                >
                  • {item}
                </p>
              ))}
            </aside>

            {/* CENTER SCROLLABLE BLOG FEED */}
            <div className="max-h-screen overflow-y-scroll custom-scrollbar space-y-6 pr-3">
              {filteredPosts.map((post, idx) => (
                <article
                  key={idx}
                  className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-900/40 hover:border-blue-600 transition"
                >
                  <img src={post.img} className="w-full h-56 object-cover" />

                  <div className="p-5">
                    <span className="bg-blue-600 text-white px-3 py-1 text-xs rounded-full">
                      {post.category}
                    </span>

                    <h4 className="text-xl font-semibold mt-3 hover:text-blue-400 cursor-pointer">
                      {post.title}
                    </h4>

                    <p className="text-gray-400 text-sm mt-1">
                      {post.author} • {post.date}
                    </p>

                    <p className="text-gray-300 text-sm mt-3">{post.excerpt}</p>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 mt-4 text-blue-400 font-medium"
                    >
                      Read More <ExternalLink size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="hidden md:block sticky top-24 bg-gray-800/70 backdrop-blur-xl shadow-lg rounded-xl p-6 border border-gray-700">
              <h3 className="font-bold text-xl mb-5 text-blue-400">
                Related Reads
              </h3>

              {rightSidebar.map((item, idx) => (
                <div key={idx} className="mb-6 cursor-pointer group">
                  <img
                    src={item.img}
                    className="rounded-lg group-hover:scale-105 transition duration-300 object-cover h-24 w-full"
                  />
                  <p className="text-gray-300 group-hover:text-blue-400 mt-2 text-sm">
                    {item.title}
                  </p>
                </div>
              ))}
              <button
                className="mt-2 w-full py-2 text-sm border border-green-500 text-green-400 rounded-lg 
hover:bg-green-600 hover:text-white hover:border-green-600 transition font-semibold flex items-center justify-center gap-1"
              >
                View More <ArrowRight size={14} />
              </button>
            </aside>
          </div>
        ) : (
          /* HOME PAGE VERSION */
          <div className="max-w-6xl mx-auto text-center mt-14">
            <h2 className="text-3xl font-extrabold mb-6 text-white">
              Latest from Blog
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsData.slice(0, 3).map((post, idx) => (
                <article
                  key={idx}
                  className="bg-gray-800/60 backdrop-blur-xl rounded-xl shadow-xl border border-gray-700 overflow-hidden hover:border-blue-500 hover:shadow-blue-900 transition"
                >
                  <img src={post.img} className="w-full h-40 object-cover" />
                  <div className="p-4 text-left">
                    <h4 className="text-lg font-semibold text-white hover:text-blue-400 transition">
                      {post.title}
                    </h4>
                    <p className="text-gray-300 text-sm mt-1 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <a
              href="/blog"
              className="inline-block mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View All Blogs →
            </a>
          </div>
        )}
      </section>
    </>
  );
}
