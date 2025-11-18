import { useState } from "react";
import { BookOpen, ExternalLink, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "../assets/public/ew0V5jf.jpg";

/* ✅ Custom Scrollbar */
const styles = `
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #E16B3A; border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
`;

const categories = ["All", "IIT-JEE", "Career Guide", "Chemistry"];

const postsData = [
  {
    slug: "jee-mains-exam-pattern-2026",
    img: hero1,
    title: "JEE Mains Exam Pattern 2026 — Marking Scheme & Important Dates",
    category: "IIT-JEE",
    excerpt:
      "JEE Mains 2026 exam registration starts in October. Students may choose...",
    author: "Nidhi Priya",
    date: "Oct 15, 2025",
  },
  {
    slug: "top-10-engineering-courses-high-salary",
    img: hero1,
    title: "Top 10 Engineering Courses With Highest Salary in India",
    category: "Career Guide",
    excerpt:
      "Top high-salary courses in India based on demand and placements...",
    author: "Nidhi Priya",
    date: "Oct 14, 2025",
  },
  {
    slug: "jee-main-chemistry-strategy-2026",
    img: hero1,
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
    img: hero1,
  },
  {
    title: "GMAT Focus Edition — Exam Pattern & Syllabus",
    img: hero1,
  },
  {
    title: "Which MBA Entrance Exam Is the Hardest?",
    img: hero1,
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

      {/* MAIN SECTION – PURE BLACK BACKGROUND */}
      <section
        className="py-10 px-4 text-white"
        style={{ background: "#000000" }}
      >
        {/* HEADING (BLOG PAGE) */}
        {showFilters && (
          <>
            <h2 className="text-4xl font-extrabold text-center">
              Explore Latest <span className="text-orange-500">Blogs</span>
            </h2>
            <p className="text-gray-300 text-center mb-10">
              Learn from IITians, IIM grads & industry experts
            </p>
          </>
        )}

        {/* SEARCH + FILTER */}
        {showFilters && (
          <div className="flex flex-col md:flex-row justify-between gap-4 items-center mb-10 max-w-7xl mx-auto">
            {/* Search */}
            <div className="relative w-full md:w-1/2">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search blog articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black/40 border border-white rounded-lg px-10 py-3 text-gray-200 focus:ring-2 focus:ring-orange-500 transition outline-none"
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
                      ? "bg-orange-500 text-white border-orange-400"
                      : "text-white border-orange-500/40 hover:bg-orange-500/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* BLOG PAGE FULL LAYOUT */}
        {showFilters ? (
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr_260px] gap-6 max-w-7xl mx-auto">
            {/* LEFT SIDEBAR – CARD WITH RADIAL BACKGROUND */}
            <aside
              className="hidden md:block sticky top-24 rounded-xl p-6 backdrop-blur-xl shadow-[0_0_20px_rgba(255,122,0,0.15)] border border-orange-500/30"
              style={{
                background:
                  "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
              }}
            >
              <h3 className="font-bold text-xl mb-5 flex items-center gap-2 text-orange-400">
                <BookOpen size={18} /> MBA Colleges
              </h3>

              {leftSidebar.map((item, idx) => (
                <p
                  key={idx}
                  className="text-gray-200 hover:text-orange-400 cursor-pointer mb-3 text-sm"
                >
                  • {item}
                </p>
              ))}
            </aside>

            {/* CENTER SCROLLABLE POSTS – CARDS WITH RADIAL BACKGROUND */}
            <div className="max-h-screen overflow-y-scroll custom-scrollbar space-y-6 pr-3">
              {filteredPosts.map((post, idx) => (
                <article
                  key={idx}
                  className="rounded-xl overflow-hidden backdrop-blur-xl shadow-[0_0_25px_rgba(255,122,0,0.20)]  transition border border-orange-500/30"
                  style={{
                    background:
                      "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
                  }}
                >
                  <img src={post.img} className="w-full h-56 object-cover" />

                  <div className="p-5">
                    <span className="bg-orange-500 text-black px-3 py-1 text-xs rounded-full font-semibold">
                      {post.category}
                    </span>

                    <h4 className="text-xl font-semibold mt-3 hover:text-orange-400 cursor-pointer">
                      {post.title}
                    </h4>

                    <p className="text-gray-300 text-sm mt-1">
                      {post.author} • {post.date}
                    </p>

                    <p className="text-gray-200 text-sm mt-3">{post.excerpt}</p>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 mt-4 text-orange-400 font-medium"
                    >
                      Read More <ExternalLink size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* RIGHT SIDEBAR – CARD WITH RADIAL BACKGROUND */}
            <aside
              className="hidden md:block sticky top-24 rounded-xl p-6 backdrop-blur-xl shadow-[0_0_20px_rgba(255,122,0,0.15)] border border-orange-500/30"
              style={{
                background:
                  "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
              }}
            >
              <h3 className="font-bold text-xl mb-5 text-orange-400">
                Related Reads
              </h3>

              {rightSidebar.map((item, idx) => (
                <div key={idx} className="mb-6 cursor-pointer group">
                  <img
                    src={item.img}
                    className="rounded-lg group-hover:scale-105 transition duration-300 object-cover h-24 w-full"
                  />
                  <p className="text-gray-200 group-hover:text-orange-400 mt-2 text-sm">
                    {item.title}
                  </p>
                </div>
              ))}

              <button
                className="mt-2 w-full py-2 text-sm border border-orange-500 text-orange-400 rounded-lg 
                hover:bg-orange-500 hover:text-black transition font-semibold flex items-center justify-center gap-1"
              >
                View More <ArrowRight size={14} />
              </button>
            </aside>
          </div>
        ) : (
          /* HOME PAGE VERSION (MINI) – CARDS WITH RADIAL BACKGROUND */
          <div className="max-w-6xl mx-auto text-center mt-4">
            <h2 className="text-3xl font-extrabold mb-6 text-white">
              Latest from <span className="text-orange-500">Blog</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsData.slice(0, 3).map((post, idx) => (
                <article
                  key={idx}
                  className="rounded-xl shadow-xl border border-orange-500/30 overflow-hidden hover:shadow-orange-600/30 transition"
                  style={{
                    background:
                      "radial-gradient(144.43% 144.43% at 50% -25.21%, #392e29 0%, #000000 100%)",
                  }}
                >
                  <img src={post.img} className="w-full h-40 object-cover" />
                  <div className="p-4 text-left">
                    <h4 className="text-lg font-semibold text-white hover:text-orange-400 transition">
                      {post.title}
                    </h4>
                    <p className="text-gray-200 text-sm mt-1 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <a
              href="/blog"
              className="inline-block mt-10 bg-orange-500 text-black px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold"
            >
              View All Blogs →
            </a>
          </div>
        )}
      </section>
    </>
  );
}
