// import React, { useEffect, useState } from "react";
// import {
//   FiArrowRight,
//   FiBarChart2,
//   FiChevronDown,
//   FiHome,
//   FiPieChart,
//   FiUser,
// } from "react-icons/fi";
// import { AnimatePresence, motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export const ShiftingDropDown = () => {
//   const navigate = useNavigate() 
//   return (
//     <div className="flex h-14 w-full bg-[rgb(24,24,24)] justify-between items-center px-6 py-8 pb-10 text-neutral-100">
//       {/* Logo */}
//       <div className="flex items-center">
//         <button onClick={() => navigate("/")}>
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
//             <span className="text-white font-bold text-sm">L</span>
//           </div>
//           <span className="font-bold text-xl text-white">Logo</span>
//         </div>
//           </button>
//       </div>

//       {/* Tabs */}
//       <div className="flex-1 flex justify-center">
//         <Tabs />
//       </div>

//       {/* Login / Signup */}
//       <div className="flex items-center gap-3">
//         {/* Login */}
//         <button className="flex items-center gap-1 px-4 py-2 text-sm text-neutral-300 hover:text-white transition-colors">
//           <FiUser className="w-4 h-4" />
//           <span>Login</span>
//         </button>

//         {/* SIGN UP WITH GRADIENT */}
//         <button
//           className="px-4 py-2 text-sm text-white rounded-full transition-colors"
//           style={{
//             background: "linear-gradient(90deg, #E16B3A 0%, #B14820 100%)",
//           }}
//         >
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// const Tabs = () => {
//   const [selected, setSelected] = useState(null);
//   const [dir, setDir] = useState(null);

//   const handleSetSelected = (val) => {
//     if (typeof selected === "number" && typeof val === "number") {
//       setDir(selected > val ? "r" : "l");
//     } else if (val === null) {
//       setDir(null);
//     }
//     setSelected(val);
//   };

//   return (
//     <div
//       onMouseLeave={() => handleSetSelected(null)}
//       className="relative flex h-fit gap-2 z-50"
//     >
//       {TABS.map((t) => (
//         <Tab
//           key={t.id}
//           selected={selected}
//           handleSetSelected={handleSetSelected}
//           tab={t.id}
//         >
//           {t.title}
//         </Tab>
//       ))}

//       <AnimatePresence>
//         {selected && <Content dir={dir} selected={selected} />}
//       </AnimatePresence>
//     </div>
//   );
// };

// const Tab = ({ children, tab, handleSetSelected, selected }) => {
//   const navigate = useNavigate();
//   const currentTab = TABS.find((t) => t.id === tab);
//   const hasDropdown = currentTab?.Component;

//   const handleClick = () => {
//     if (hasDropdown) {
//       handleSetSelected(tab);
//     } else if (currentTab.title === "About Us") {
//       navigate("/about-us");
//     }
//   };

//   return (
//     <button
//       id={`shift-tab-${tab}`}
//       onMouseEnter={() => hasDropdown && handleSetSelected(tab)}
//       onClick={handleClick}
//       className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
//         selected === tab
//           ? "bg-neutral-700 text-white"
//           : "text-neutral-300 hover:text-white"
//       }`}
//     >
//       <span>{children}</span>

//       {hasDropdown && (
//         <FiChevronDown
//           className={`transition-transform ${
//             selected === tab ? "rotate-180" : ""
//           }`}
//         />
//       )}
//     </button>
//   );
// };

// const Content = ({ selected, dir }) => {
//   return (
//     <motion.div
//       id="overlay-content"
//       initial={{ opacity: 0, y: 8 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 8 }}
//       className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-700 
//                  bg-[rgb(24,24,24)] p-4 z-[999]"
//     >
//       <Bridge />
//       <Nub selected={selected} />

//       {TABS.map((t) => (
//         <div className="overflow-hidden" key={t.id}>
//           {selected === t.id && (
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
//               }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.25, ease: "easeInOut" }}
//             >
//               <t.Component />
//             </motion.div>
//           )}
//         </div>
//       ))}
//     </motion.div>
//   );
// };

// const Bridge = () => (
//   <div className="absolute -top-6 left-0 right-0 h-6 z-[999]" />
// );

// const Nub = ({ selected }) => {
//   const [left, setLeft] = useState(0);

//   useEffect(() => {
//     moveNub();
//   }, [selected]);

//   const moveNub = () => {
//     if (selected) {
//       const hoveredTab = document.getElementById(`shift-tab-${selected}`);
//       const overlayContent = document.getElementById("overlay-content");

//       if (!hoveredTab || !overlayContent) return;

//       const tabRect = hoveredTab.getBoundingClientRect();
//       const { left: contentLeft } = overlayContent.getBoundingClientRect();

//       const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

//       setLeft(tabCenter);
//     }
//   };

//   return (
//     <motion.span
//       style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)" }}
//       animate={{ left }}
//       transition={{ duration: 0.25, ease: "easeInOut" }}
//       className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 
//                  rounded-tl border border-neutral-700 bg-[rgb(24,24,24)] z-[999]"
//     />
//   );
// };

// const Products = () => {
//   return (
//     <div>
//       <div className="flex gap-4 text-neutral-300">
//         <div>
//           <h3 className="mb-2 text-sm font-medium text-white">Startup</h3>
//           <a href="#" className="mb-1 block text-sm text-neutral-400">
//             Bookkeeping
//           </a>
//           <a href="#" className="block text-sm text-neutral-400">
//             Invoicing
//           </a>
//         </div>

//         <div>
//           <h3 className="mb-2 text-sm font-medium text-white">Scaleup</h3>
//           <a href="#" className="mb-1 block text-sm text-neutral-400">
//             Live Coaching
//           </a>
//           <a href="#" className="mb-1 block text-sm text-neutral-400">
//             Reviews
//           </a>
//           <a href="#" className="block text-sm text-neutral-400">
//             Tax/VAT
//           </a>
//         </div>

//         <div>
//           <h3 className="mb-2 text-sm font-medium text-white">Enterprise</h3>
//           <a href="#" className="mb-1 block text-sm text-neutral-400">
//             White glove
//           </a>
//           <a href="#" className="mb-1 block text-sm text-neutral-400">
//             SOX Compliance
//           </a>
//           <a href="#" className="block text-sm text-neutral-400">
//             Staffing
//           </a>
//         </div>
//       </div>

//       <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-cyan-300">
//         <span>View more</span>
//         <FiArrowRight />
//       </button>
//     </div>
//   );
// };

// const Exam = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
//       <button
//         onClick={() => navigate("/cat-Exam")}
//         className="flex w-full flex-col items-center justify-center py-2 text-neutral-300 hover:text-white"
//       >
//         <FiHome className="mb-2 text-xl text-cyan-300" />
//         <span className="text-xs">CAT</span>
//       </button>

//       <button
//         onClick={() => navigate("/mba-Exam")}
//         className="flex w-full flex-col items-center justify-center py-2 text-neutral-300 hover:text-white"
//       >
//         <FiHome className="mb-2 text-xl text-cyan-300" />
//         <span className="text-xs">MBA</span>
//       </button>

//       <button
//         onClick={() => navigate("/xat-Exam")}
//         className="flex w-full flex-col items-center justify-center py-2 text-neutral-300 hover:text-white"
//       >
//         <FiBarChart2 className="mb-2 text-xl text-cyan-300" />
//         <span className="text-xs">XAT</span>
//       </button>

//       <button
//         onClick={() => navigate("/xgmt-Exam")}
//         className="flex w-full flex-col items-center justify-center py-2 text-neutral-300 hover:text-white"
//       >
//         <FiPieChart className="mb-2 text-xl text-cyan-300" />
//         <span className="text-xs">XGMT</span>
//       </button>
//       <button
//         onClick={() => navigate("/tuitions-Exam")}
//         className="flex w-full flex-col items-center justify-center py-2 text-neutral-300 hover:text-white"
//       >
//         <FiBarChart2 className="mb-2 text-xl text-cyan-300" />
//         <span className="text-xs">Tuitions</span>
//       </button>
//     </div>
//   );
// };

// const Blog = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-2 gap-2">
//         <a className="block">
//           <img
//             className="mb-2 h-14 w-full rounded object-cover"
//             src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
//             alt="Business meeting"
//           />
//           <h4 className="mb-0.5 text-sm font-medium text-white">
//             Business Growth Strategies
//           </h4>
//           <p className="text-xs text-neutral-400">
//             Learn how to scale your business with proven strategies.
//           </p>
//         </a>

//         <a className="block">
//           <img
//             className="mb-2 h-14 w-full rounded object-cover"
//             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
//             alt="Data analytics"
//           />
//           <h4 className="mb-0.5 text-sm font-medium text-white">
//             Data Driven Decisions
//           </h4>
//           <p className="text-xs text-neutral-400">
//             Make smarter decisions with analytics.
//           </p>
//         </a>
//       </div>

//       <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-cyan-300">
//         <span>View more</span>
//         <FiArrowRight />
//       </button>
//     </div>
//   );
// };

// const Courses = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-2 gap-2">
//         <a className="block">
//           <img
//             className="mb-2 h-14 w-full rounded object-cover"
//             src="https://media.iquanta.in/ui_images/CAT-2026-Course.webp"
//             alt="Course"
//           />
//           <h4 className="mb-0.5 text-sm font-medium text-white">
//             Business Growth
//           </h4>
//           <p className="text-xs text-neutral-400">Improve your skills.</p>
//         </a>

//         <a className="block">
//           <img
//             className="mb-2 h-14 w-full rounded object-cover"
//             src="https://newspaperads.ads2publish.com/wp-content/uploads/2017/09/endeavor-institute-cat-18-cat-courses-ad-times-of-india-ahmedabad-20-09-2017.jpg"
//             alt="Course"
//           />
//           <h4 className="mb-0.5 text-sm font-medium text-white">
//             Data & Analytics
//           </h4>
//           <p className="text-xs text-neutral-400">Learn data-driven methods.</p>
//         </a>
//       </div>

//       <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-cyan-300">
//         <span>View more</span>
//         <FiArrowRight />
//       </button>
//     </div>
//   );
// };

// const TABS = [
//   { title: "Products", Component: Products },
//   { title: "Exam", Component: Exam },
//   { title: "Blog", Component: Blog },
//   { title: "Courses", Component: Courses },
//   { title: "About Us", Component: null },
// ].map((n, idx) => ({ ...n, id: idx + 1 }));






import React, { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
  FiUser,
  FiX,
  FiMenu,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

/* --------------------------------------------------------------------------- */
/* MAIN NAVBAR */
/* --------------------------------------------------------------------------- */

export const ShiftingDropDown = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex h-14 w-full sticky top-0 left-0 z-[9999] 
      justify-between items-center px-6 py-8 pb-10 text-neutral-100
      transition-all duration-300 
      bg-[rgb(24,24,24)]
      ${shadow ? "shadow-lg shadow-black/40" : ""}`}
    >
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

      {/* Desktop Tabs */}
      <div className="hidden md:flex flex-1 justify-center">
        <Tabs />
      </div>

      {/* Desktop Login & Signup */}
      <div className="hidden md:flex items-center gap-3">
        <button className="flex items-center gap-1 px-4 py-2 text-sm text-neutral-300 hover:text-white transition-colors">
          <FiUser className="w-4 h-4" />
          <span>Login</span>
        </button>

        <button
          className="px-4 py-2 text-sm text-white rounded-full transition-colors"
          style={{
            background: "linear-gradient(90deg, #E16B3A 0%, #B14820 100%)",
          }}
        >
          Sign Up
        </button>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden text-white text-2xl"
      >
        <FiMenu />
      </button>

      {/* MOBILE MENU */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </div>
  );
};

/* --------------------------------------------------------------------------- */
/* DESKTOP TABS */
/* --------------------------------------------------------------------------- */

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
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-all duration-300
        ${
          selected === tab
            ? "bg-neutral-700 text-white"
            : "text-neutral-300 hover:text-white"
        }`}
    >
      {children}

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
  <div className="absolute -top-6 left-0 right-0 h-6 z-[999]" />
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

/* --------------------------------------------------------------------------- */
/* DESKTOP DROPDOWNS (unchanged, original content kept) */
/* --------------------------------------------------------------------------- */

const Products = () => {
  return (
    <div>
      <div className="flex gap-4 text-neutral-300">
        <div>
          <h3 className="mb-2 text-sm font-medium text-white">Startup</h3>
          <a className="mb-1 block text-sm text-neutral-400">Bookkeeping</a>
          <a className="block text-sm text-neutral-400">Invoicing</a>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium text-white">Scaleup</h3>
          <a className="mb-1 block text-sm text-neutral-400">Live Coaching</a>
          <a className="mb-1 block text-sm text-neutral-400">Reviews</a>
          <a className="block text-sm text-neutral-400">Tax/VAT</a>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-medium text-white">Enterprise</h3>
          <a className="mb-1 block text-sm text-neutral-400">White glove</a>
          <a className="mb-1 block text-sm text-neutral-400">SOX Compliance</a>
          <a className="block text-sm text-neutral-400">Staffing</a>
        </div>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-cyan-300">
        <span>View more</span>
        <FiArrowRight />
      </button>
    </div>
  );
};

/* --------------------------------------------------------------------------- */
/* DESKTOP EXAM DROPDOWN CONTENT (unchanged except spacing) */
/* --------------------------------------------------------------------------- */

const Exam = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">

      <ExamItem label="CAT" route="/cat-Exam" icon={<FiHome />} />
      <ExamItem label="MBA" route="/mba-Exam" icon={<FiHome />} />
      <ExamItem label="XAT" route="/xat-Exam" icon={<FiBarChart2 />} />
      <ExamItem label="XGMT" route="/xgmt-Exam" icon={<FiPieChart />} />
      <ExamItem label="Tuitions" route="/tuitions-Exam" icon={<FiBarChart2 />} />

    </div>
  );
};

const ExamItem = ({ label, route, icon }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(route)}
      className="flex flex-col items-center justify-center py-2 text-neutral-300 hover:text-white transition-all duration-200"
    >
      <div className="mb-1 text-xl text-cyan-300">{icon}</div>
      <span className="text-xs">{label}</span>
    </button>
  );
};

/* --------------------------------------------------------------------------- */
/* DESKTOP BLOG */
/* --------------------------------------------------------------------------- */

const Blog = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a>
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
          />
          <h4 className="text-sm font-medium text-white">Business Growth Strategies</h4>
          <p className="text-xs text-neutral-400">
            Learn how to scale your business with proven strategies.
          </p>
        </a>

        <a>
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          />
          <h4 className="text-sm font-medium text-white">Data Driven Decisions</h4>
          <p className="text-xs text-neutral-400">
            Make smarter decisions with analytics.
          </p>
        </a>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-cyan-300">
        View more <FiArrowRight />
      </button>
    </div>
  );
};

/* --------------------------------------------------------------------------- */
/* DESKTOP COURSES */
/* --------------------------------------------------------------------------- */

const Courses = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a>
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://media.iquanta.in/ui_images/CAT-2026-Course.webp"
          />
          <h4 className="text-sm font-medium text-white">Business Growth</h4>
          <p className="text-xs text-neutral-400">Improve your skills.</p>
        </a>

        <a>
          <img
            className="mb-2 h-14 w-full rounded object-cover"
            src="https://newspaperads.ads2publish.com/wp-content/uploads/2017/09/endeavor-institute-cat-18-cat-courses-ad-times-of-india-ahmedabad-20-09-2017.jpg"
          />
          <h4 className="text-sm font-medium text-white">Data & Analytics</h4>
          <p className="text-xs text-neutral-400">Learn data-driven methods.</p>
        </a>
      </div>

      <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-cyan-300">
        View more <FiArrowRight />
      </button>
    </div>
  );
};

/* --------------------------------------------------------------------------- */
/* TABS ARRAY */
/* --------------------------------------------------------------------------- */

const TABS = [
  { title: "Products", Component: Products },
  { title: "Exam", Component: Exam },
  { title: "Blog", Component: Blog },
  { title: "Courses", Component: Courses },
  { title: "About Us", Component: null },
].map((n, idx) => ({ ...n, id: idx + 1 }));

/* --------------------------------------------------------------------------- */
/* MOBILE MENU */
/* --------------------------------------------------------------------------- */

const MobileMenu = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <AnimatePresence>
  {open && (
    <>
      {/* CLICK OUTSIDE BACKDROP */}
      <motion.div
        onClick={onClose}

        initial={{ opacity: "0%" }}
          animate={{ opacity: 0 }}
          exit={{ opacity: " 0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 bg-black/60 md:hidden z-[9998] top-0 right-0 w-80 h-full bg-[rgb(20,20,20)] border-l border-neutral-800 z-[99999] p-6 overflow-y-auto"
      />

      {/* MOBILE MENU PANEL */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-80 h-full bg-[rgb(20,20,20)] border-l border-neutral-800 
                   z-[99999] p-6 overflow-y-auto"
      >
        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-1 text-sm text-neutral-300 hover:text-white"
          >
            <FiUser /> Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-3 py-1 text-sm text-white rounded-full"
            style={{
              background: "linear-gradient(90deg,#E16B3A,#B14820)",
            }}
          >
            Sign Up
          </button>

          <button onClick={onClose} className="text-white text-xl">
            <FiX />
          </button>
        </div>

        {/* MENU ITEMS */}
        {TABS.map((t) => (
          <div key={t.id} className="mb-3">
            <button
              className="flex justify-between w-full text-left text-gray-300 hover:text-white text-lg py-2"
              onClick={() =>
                t.Component
                  ? setOpenDropdown(openDropdown === t.id ? null : t.id)
                  : navigate("/about-us")
              }
            >
              {t.title}
              {t.Component && (
                <FiChevronDown
                  className={`transition-transform ${
                    openDropdown === t.id ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>

            {/* MOBILE DROPDOWN CONTENT */}
            {openDropdown === t.id && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="mt-2 ml-2"
              >
                <t.Component mobile onClose={onClose} />
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </>
  )}
</AnimatePresence>

  );
};

/* --------------------------------------------------------------------------- */
/* MOBILE DROPDOWN: EXAM (Beautiful Improved Version) */
/* --------------------------------------------------------------------------- */

const Exam_Mobile = ({ onClose }) => {
  const navigate = useNavigate();

  const items = [
    { label: "CAT", route: "/cat-Exam", icon: <FiHome /> },
    { label: "MBA", route: "/mba-Exam", icon: <FiHome /> },
    { label: "XAT", route: "/xat-Exam", icon: <FiBarChart2 /> },
    { label: "XGMT", route: "/xgmt-Exam", icon: <FiPieChart /> },
    { label: "Tuitions", route: "/tuitions-Exam", icon: <FiBarChart2 /> },
  ];

  return (
    <div className="w-full">
      <div className="h-[1px] bg-[#3a322e] mb-4"></div>

      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              navigate(item.route);
              onClose();
            }}
            className="w-full flex items-center gap-4 py-3 px-2 rounded-lg
              text-gray-300 hover:text-white hover:bg-[rgba(225,107,58,0.10)] 
              transition-all duration-300"
          >
            <div className="text-cyan-300 text-xl w-8 h-8 flex items-center justify-center">
              {item.icon}
            </div>
            <span className="text-base">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="h-[1px] bg-[#3a322e] mt-4"></div>
    </div>
  );
};

/* Replace default Exam component for mobile */
Exam.ComponentMobile = Exam_Mobile;
