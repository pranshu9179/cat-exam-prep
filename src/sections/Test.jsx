import React, { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
  FiUser,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const ShiftingDropDown = () => {
  const navigate = useNavigate() 
  return (
    <div className="flex h-14 w-full bg-[rgb(24,24,24)] justify-between items-center px-6 py-8 pb-10 text-neutral-100">
      {/* Logo */}
      <div className="flex items-center">
        <button onClick={() => navigate("/")}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="font-bold text-xl text-white">Logo</span>
        </div>
          </button>
      </div>

      {/* Tabs */}
      <div className="flex-1 flex justify-center">
        <Tabs />
      </div>

      {/* Login / Signup */}
      <div className="flex items-center gap-3">
        {/* Login */}
        <button className="flex items-center gap-1 px-4 py-2 text-sm text-neutral-300 hover:text-white transition-colors">
          <FiUser className="w-4 h-4" />
          <span>Login</span>
        </button>

        {/* SIGN UP WITH GRADIENT */}
        <button
          className="px-4 py-2 text-sm text-white rounded-full transition-colors"
          style={{
            background: "linear-gradient(90deg, #E16B3A 0%, #B14820 100%)",
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2 z-50"
    >
      {TABS.map((t) => (
        <Tab
          key={t.id}
          selected={selected}
          handleSetSelected={handleSetSelected}
          tab={t.id}
        >
          {t.title}
        </Tab>
      ))}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  const navigate = useNavigate();
  const currentTab = TABS.find((t) => t.id === tab);
  const hasDropdown = currentTab?.Component;

  const handleClick = () => {
    if (hasDropdown) {
      handleSetSelected(tab);
    } else if (currentTab.title === "About Us") {
      navigate("/about-us");
    }
  };

  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => hasDropdown && handleSetSelected(tab)}
      onClick={handleClick}
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? "bg-neutral-700 text-white"
          : "text-neutral-300 hover:text-white"
      }`}
    >
      <span>{children}</span>

      {hasDropdown && (
        <FiChevronDown
          className={`transition-transform ${
            selected === tab ? "rotate-180" : ""
          }`}
        />
      )}
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-700 
                 bg-[rgb(24,24,24)] p-4 z-[999]"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => (
        <div className="overflow-hidden" key={t.id}>
          {selected === t.id && (
            <motion.div
              initial={{
                opacity: 0,
                x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <t.Component />
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px] z-[999]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)" }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 
                 rounded-tl border border-neutral-700 bg-[rgb(24,24,24)] z-[999]"
    />
  );
};

const Products = () => {
  return (
    <div>
      <div className="flex gap-4 text-neutral-300">
        <div>
          <h3 className="mb-2 text-sm font-medium text-white">Startup</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Bookkeeping
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Invoicing
          </a>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium text-white">Scaleup</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Live Coaching
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            Reviews
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Tax/VAT
          </a>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium text-white">Enterprise</h3>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            White glove
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
            SOX Compliance
          </a>
          <a href="#" className="block text-sm text-neutral-400">
            Staffing
          </a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-cyan-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const Exam = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
      <button
        onClick={() => navigate("/cat-Exam")}
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-300 hover:text-white"
      >
        <FiHome className="mb-2 text-xl text-cyan-300" />
        <span className="text-xs">CAT</span>
      </button>

      <button
        onClick={() => navigate("/mba-Exam")}
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-300 hover:text-white"
      >
        <FiHome className="mb-2 text-xl text-cyan-300" />
        <span className="text-xs">MBA</span>
      </button>

      <button
        onClick={() => navigate("/xat-Exam")}
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-300 hover:text-white"
      >
        <FiBarChart2 className="mb-2 text-xl text-cyan-300" />
        <span className="text-xs">XAT</span>
      </button>

      <button
        onClick={() => navigate("/xgmt-Exam")}
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-300 hover:text-white"
      >
        <FiPieChart className="mb-2 text-xl text-cyan-300" />
        <span className="text-xs">XGMT</span>
      </button>
      <button
        onClick={() => navigate("/tuitions-Exam")}
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-300 hover:text-white"
      >
        <FiBarChart2 className="mb-2 text-xl text-cyan-300" />
        <span className="text-xs">Tuitions</span>
      </button>
    </div>
  );
};

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a className="block">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
            alt="Business meeting"
          />
          <h4 className="mb-0.5 text-sm font-medium text-white">
            Business Growth Strategies
          </h4>
          <p className="text-xs text-neutral-400">
            Learn how to scale your business with proven strategies.
          </p>
        </a>

        <a className="block">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            alt="Data analytics"
          />
          <h4 className="mb-0.5 text-sm font-medium text-white">
            Data Driven Decisions
          </h4>
          <p className="text-xs text-neutral-400">
            Make smarter decisions with analytics.
          </p>
        </a>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-cyan-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const Courses = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a className="block">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://media.iquanta.in/ui_images/CAT-2026-Course.webp"
            alt="Course"
          />
          <h4 className="mb-0.5 text-sm font-medium text-white">
            Business Growth
          </h4>
          <p className="text-xs text-neutral-400">Improve your skills.</p>
        </a>

        <a className="block">
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://newspaperads.ads2publish.com/wp-content/uploads/2017/09/endeavor-institute-cat-18-cat-courses-ad-times-of-india-ahmedabad-20-09-2017.jpg"
            alt="Course"
          />
          <h4 className="mb-0.5 text-sm font-medium text-white">
            Data & Analytics
          </h4>
          <p className="text-xs text-neutral-400">Learn data-driven methods.</p>
        </a>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-cyan-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

const TABS = [
  { title: "Products", Component: Products },
  { title: "Exam", Component: Exam },
  { title: "Blog", Component: Blog },
  { title: "Courses", Component: Courses },
  { title: "About Us", Component: null },
].map((n, idx) => ({ ...n, id: idx + 1 }));
