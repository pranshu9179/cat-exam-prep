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

import React, { useEffect, useRef, useState } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
  FiUser,
  FiMenu,
  FiX,
  FiFileText,
  FiBook,
  FiCheckSquare,
  FiUsers,
  FiFile,
  FiCreditCard,
  FiStar,
  FiTrendingUp,
  FiCheckCircle,
  FiShield,
  FiBriefcase,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ShiftingDropDown = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // close on Esc key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="w-full bg-[rgb(24,24,24)] text-neutral-100 border-b">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 h-14">
        {/* LEFT: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-md sm:hidden focus:outline-none"
            aria-label="Open menu"
          >
            <FiMenu className="w-7 h-7 text-neutral-100" />
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="Go to home"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-xl text-white">Logo</span>
          </button>
        </div>

        {/* CENTER: Desktop Tabs */}
        <div className="hidden sm:flex flex-1 justify-center">
          <Tabs />
        </div>

        {/* RIGHT: Join for Free */}
        <div className="flex items-center">
          <button
            onClick={() => navigate("/join")}
            className="px-4 py-2 text-sm text-white rounded-full transition-colors"
            style={{
              background: "linear-gradient(90deg, #E16B3A 0%, #B14820 100%)",
            }}
          >
            Join for Free
          </button>
        </div>
      </div>

      {/* Mobile bottom sheet */}
      <AnimatePresence>
        {mobileOpen && <MobilePanel onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  );
};
/* ---------------------- Desktop Tabs (unchanged logic) ---------------------- */
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

      <AnimatePresence initial={false}>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  const navigate = useNavigate();
  const currentTab = TABS.find((t) => t.id === tab);
  const hasDropdown = !!currentTab?.Component;

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
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors focus:outline-none ${
        selected === tab
          ? "bg-neutral-700 text-white"
          : "text-neutral-300 hover:text-white"
      }`}
      aria-haspopup={hasDropdown ? "true" : undefined}
      aria-expanded={selected === tab ? "true" : "false"}
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

/* Desktop overlay content (unchanged) */
const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="absolute left-1/2 -translate-x-1/2 top-[calc(100%_+_18px)] w-96 rounded-lg border border-neutral-700 
                 bg-[rgb(24,24,24)] p-4 z-[999] shadow-lg"
      role="dialog"
      aria-label="Navigation submenu"
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
  const [left, setLeft] = useState("50%");

  useEffect(() => {
    moveNub();
    window.addEventListener("resize", moveNub);
    return () => window.removeEventListener("resize", moveNub);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const moveNub = () => {
    if (!selected) {
      setLeft("50%");
      return;
    }
    const hoveredTab = document.getElementById(`shift-tab-${selected}`);
    const overlayContent = document.getElementById("overlay-content");

    if (!hoveredTab || !overlayContent) {
      setLeft("50%");
      return;
    }

    const tabRect = hoveredTab.getBoundingClientRect();
    const { left: contentLeft } = overlayContent.getBoundingClientRect();

    const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
    setLeft(
      `${Math.max(12, Math.min(tabCenter, overlayContent.offsetWidth - 12))}px`
    );
  };

  return (
    <motion.span
      style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)", left }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute top-0 h-4 w-4 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-700 bg-[rgb(24,24,24)] z-[999]"
    />
  );
};

/* ---------------------- Mobile: Bottom Sheet Panel ---------------------- */
const MobilePanel = ({ onClose }) => {
  const backdropRef = useRef(null);
  const navigate = useNavigate();

  // close when clicking backdrop area
  const handleBackdrop = (e) => {
    if (e.target === backdropRef.current) onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        ref={backdropRef}
        onClick={handleBackdrop}
        initial={{ opacity: 0.55 }}
        animate={{ opacity: 0.55 }}
        exit={{ opacity: 0.55 }}
        className="fixed inset-0 bg-black z-40"
      />

      {/* Bottom sheet */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        className="fixed bottom-0 left-0  right-0 bg-[rgb(24,24,24)]  z-9999 shadow-xl pt-7 pb-8 h-full "
      >
        <div className="flex items-center justify-between px-5 pb-4 border-b border-neutral-700">
          <button
            onClick={() => {
              navigate("/");
              onClose();
            }}
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">L</span>
              </div>
              <span className="text-white font-semibold text-lg">Menu</span>
            </div>
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-neutral-100 focus:outline-none"
            aria-label="Close menu"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Menu items styled like your image */}
        <MobileMenuContent onClose={onClose} />
      </motion.div>
    </>
  );
};

/* ===================== MOBILE MENU WITH ACCORDION + STAGGER + ICONS ===================== */
// const MobileMenuContent = ({ onClose }) => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(null);

//   const toggle = (id) => {
//     setOpen(open === id ? null : id);
//   };

//   const go = (path) => {
//     onClose();
//     if (path) navigate(path);
//   };

//   // Stagger animation container
//   const listVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.08 },
//     },
//   };

//   // Stagger animation for each item
//   const itemVariants = {
//     hidden: { opacity: 0, x: -10 },
//     visible: { opacity: 1, x: 0 },
//   };

//   return (
//     <div className="flex flex-col px-4 mt-3 space-y-2">
//       {/* ======================== PRODUCTS ======================== */}
//       <div>
//         <button
//           onClick={() => toggle("products")}
//           className="w-full flex items-center justify-between bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)] text-neutral-100
//                      px-4 py-4 rounded-xl"
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
//               <FiFileText className="w-5 h-5 text-neutral-200" />
//             </div>
//             <div className="text-sm">Products</div>
//           </div>

//           <FiChevronDown
//             className={`text-neutral-400 transition-transform ${
//               open === "products" ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         {/* Dropdown */}
//         <AnimatePresence>
//           {open === "products" && (
//             <motion.div
//               initial={{ height: 0 }}
//               animate={{ height: "auto" }}
//               exit={{ height: 0 }}
//               className="overflow-hidden border-l border-neutral-700 ml-6"
//             >
//               <motion.div
//                 variants={listVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="p-3 space-y-3"
//               >
//                 {[
//                   "Book Keeping",
//                   "Invoicing",
//                   "Live Coaching",
//                   "Reviews",
//                   "Tax/VAT",
//                   "White glove",
//                   "SOX Compliance",
//                   "Staffing",
//                 ].map((item) => (
//                   <motion.button
//                     key={item}
//                     variants={itemVariants}
//                     onClick={() => go("#")}
//                     className="w-full text-left flex items-center gap-3 text-neutral-300"
//                   >
//                     <FiArrowRight className="text-neutral-500" />
//                     {item}
//                   </motion.button>
//                 ))}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* ======================== EXAM ======================== */}
//       <div>
//         <button
//           onClick={() => toggle("exam")}
//           className="w-full flex items-center justify-between bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)] text-neutral-100
//                      px-4 py-4 rounded-xl"
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
//               <FiHome className="w-5 h-5 text-neutral-200" />
//             </div>
//             <div className="text-sm">Exam</div>
//           </div>

//           <FiChevronDown
//             className={`text-neutral-400 transition-transform ${
//               open === "exam" ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         {/* Dropdown */}
//         <AnimatePresence>
//           {open === "exam" && (
//             <motion.div
//               initial={{ height: 0 }}
//               animate={{ height: "auto" }}
//               exit={{ height: 0 }}
//               className="overflow-hidden border-l border-neutral-700 ml-6"
//             >
//               <motion.div
//                 variants={listVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="p-3 grid grid-cols-2 gap-2"
//               >
//                 {[
//                   { name: "CAT", icon: <FiBook /> },
//                   { name: "MBA", icon: <FiUsers /> },
//                   { name: "XAT", icon: <FiCheckSquare /> },
//                   { name: "XGMT", icon: <FiPieChart /> },
//                   { name: "Tuitions", icon: <FiFile /> },
//                 ].map((item) => (
//                   <motion.button
//                     key={item.name}
//                     onClick={() =>
//                       go(
//                         item.name === "CAT"
//                           ? "/cat-Exam"
//                           : item.name === "MBA"
//                           ? "/mba-Exam"
//                           : item.name === "XAT"
//                           ? "/xat-Exam"
//                           : item.name === "XGMT"
//                           ? "/xgmt-Exam"
//                           : "/tuitions-Exam"
//                       )
//                     }
//                     variants={itemVariants}
//                     className="w-full flex items-center gap-3 bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)] text-neutral-100
//                                px-4 py-3 rounded-lg"
//                   >
//                     <div className="text-neutral-300">{item.icon}</div>
//                     <span className="text-xs">{item.name}</span>
//                   </motion.button>
//                 ))}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* ======================== BLOG ======================== */}
//       <div>
//         <button
//           onClick={() => toggle("blog")}
//           className="w-full flex items-center justify-between bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
//                      text-neutral-100 px-4 py-4 rounded-xl"
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
//               <FiFileText className="w-5 h-5 text-neutral-200" />
//             </div>
//             <div className="text-sm">Blog</div>
//           </div>

//           <FiChevronDown
//             className={`text-neutral-400 transition-transform ${
//               open === "blog" ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         {/* Dropdown */}
//         <AnimatePresence>
//           {open === "blog" && (
//             <motion.div
//               initial={{ height: 0 }}
//               animate={{ height: "auto" }}
//               exit={{ height: 0 }}
//               className="overflow-hidden border-l border-neutral-700 ml-6"
//             >
//               <motion.div
//                 variants={listVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="p-3 space-y-3"
//               >
//                 {["Business Growth Strategies", "Data Driven Decisions"].map(
//                   (item) => (
//                     <motion.button
//                       key={item}
//                       onClick={() => go("#")}
//                       variants={itemVariants}
//                       className="flex items-center gap-3 text-neutral-300 text-left"
//                     >
//                       <FiArrowRight className="text-neutral-500" />
//                       {item}
//                     </motion.button>
//                   )
//                 )}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* ======================== COURSES ======================== */}
//       <div>
//         <button
//           onClick={() => toggle("courses")}
//           className="w-full flex items-center justify-between bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
//                      text-neutral-100 px-4 py-4 rounded-xl"
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
//               <FiBook className="w-5 h-5 text-neutral-200" />
//             </div>
//             <div className="text-sm">Courses</div>
//           </div>

//           <FiChevronDown
//             className={`text-neutral-400 transition-transform ${
//               open === "courses" ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         <AnimatePresence>
//           {open === "courses" && (
//             <motion.div
//               initial={{ height: 0 }}
//               animate={{ height: "auto" }}
//               exit={{ height: 0 }}
//               className="overflow-hidden border-l border-neutral-700 ml-6"
//             >
//               <motion.div
//                 variants={listVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="p-3 space-y-3"
//               >
//                 {["Business Growth", "Data & Analytics"].map((item) => (
//                   <motion.button
//                     key={item}
//                     onClick={() => go("#")}
//                     variants={itemVariants}
//                     className="flex items-center gap-3 text-neutral-300 text-left"
//                   >
//                     <FiArrowRight className="text-neutral-500" />
//                     {item}
//                   </motion.button>
//                 ))}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* ======================== ABOUT US ======================== */}
//       <button
//         onClick={() => {
//           onClose();
//           navigate("/about-us");
//         }}
//         className="w-full flex items-center justify-between bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
//                    text-neutral-100 px-4 py-4 rounded-xl"
//       >
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
//             <FiUser className="w-5 h-5 text-neutral-200" />
//           </div>
//           <div className="text-sm">About Us</div>
//         </div>
//         <FiArrowRight className="text-neutral-400" />
//       </button>
//     </div>
//   );
// };

const MobileMenuContent = ({ onClose }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  const go = (path) => {
    onClose();
    if (path) navigate(path);
  };

  // Stagger animation container
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  // Stagger animation for each item
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col px-4 mt-3 space-y-2">
      {/* ======================== PRODUCTS ======================== */}
      <div>
        <button
          onClick={() => toggle("products")}
          className="w-full flex items-center justify-between 
                     bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                     text-neutral-100 px-4 py-4 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
              <FiFileText className="w-5 h-5 text-neutral-200" />
            </div>
            <div className="text-sm">Products</div>
          </div>

          <FiChevronDown
            className={`text-neutral-400 transition-transform ${
              open === "products" ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {open === "products" && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden border-l border-neutral-700 ml-6"
            >
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="p-3 grid grid-cols-2 gap-2"
              >
                {[
                  { name: "Book Keeping", icon: <FiFileText /> },
                  { name: "Invoicing", icon: <FiCreditCard /> },
                  { name: "Live Coaching", icon: <FiUsers /> },
                  { name: "Reviews", icon: <FiStar /> },
                  { name: "Tax/VAT", icon: <FiTrendingUp /> },
                  { name: "White glove", icon: <FiCheckCircle /> },
                  { name: "SOX Compliance", icon: <FiShield /> },
                  { name: "Staffing", icon: <FiBriefcase /> },
                ].map((item) => (
                  <motion.button
                    key={item.name}
                    variants={itemVariants}
                    onClick={() => go("#")}
                    className="w-full flex items-center gap-3 
                               bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                               text-neutral-100 px-4 py-3 rounded-lg"
                  >
                    <div className="text-neutral-300 text-lg">{item.icon}</div>
                    <span className="text-xs">{item.name}</span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========================== EXAM ========================== */}
      <div>
        <button
          onClick={() => toggle("exam")}
          className="w-full flex items-center justify-between 
                     bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                     text-neutral-100 px-4 py-4 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
              <FiHome className="w-5 h-5 text-neutral-200" />
            </div>
            <div className="text-sm">Exam</div>
          </div>

          <FiChevronDown
            className={`text-neutral-400 transition-transform ${
              open === "exam" ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {open === "exam" && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden border-l border-neutral-700 ml-6"
            >
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="p-3 grid grid-cols-2 gap-2"
              >
                {[
                  { name: "CAT", icon: <FiBook />, path: "/cat-Exam" },
                  { name: "MBA", icon: <FiUsers />, path: "/mba-Exam" },
                  { name: "XAT", icon: <FiCheckSquare />, path: "/xat-Exam" },
                  { name: "XGMT", icon: <FiPieChart />, path: "/xgmt-Exam" },
                  {
                    name: "Tuitions",
                    icon: <FiFile />,
                    path: "/tuitions-Exam",
                  },
                ].map((item) => (
                  <motion.button
                    key={item.name}
                    variants={itemVariants}
                    onClick={() => go(item.path)}
                    className="w-full flex items-center gap-3 
                               bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                               text-neutral-100 px-4 py-3 rounded-lg"
                  >
                    <div className="text-neutral-300">{item.icon}</div>
                    <span className="text-xs">{item.name}</span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================== BLOG ========================= */}
      <div>
        <button
          onClick={() => toggle("blog")}
          className="w-full flex items-center justify-between 
                     bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                     text-neutral-100 px-4 py-4 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
              <FiFileText className="w-5 h-5 text-neutral-200" />
            </div>
            <div className="text-sm">Blog</div>
          </div>

          <FiChevronDown
            className={`text-neutral-400 transition-transform ${
              open === "blog" ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {open === "blog" && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden border-l border-neutral-700 ml-6"
            >
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="p-3 grid grid-cols-2 gap-2"
              >
                {[
                  {
                    name: "Business Growth Strategies",
                    icon: <FiTrendingUp />,
                  },
                  { name: "Data Driven Decisions", icon: <FiBarChart2 /> },
                ].map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => go("#")}
                    variants={itemVariants}
                    className="w-full flex items-center gap-3 
                               bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                               text-neutral-100 px-4 py-3 rounded-lg"
                  >
                    <div className="text-neutral-300">{item.icon}</div>
                    <span className="text-xs">{item.name}</span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========================= COURSES ======================== */}
      <div>
        <button
          onClick={() => toggle("courses")}
          className="w-full flex items-center justify-between 
                     bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                     text-neutral-100 px-4 py-4 rounded-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
              <FiBook className="w-5 h-5 text-neutral-200" />
            </div>
            <div className="text-sm">Courses</div>
          </div>

          <FiChevronDown
            className={`text-neutral-400 transition-transform ${
              open === "courses" ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {open === "courses" && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden border-l border-neutral-700 ml-6"
            >
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className="p-3 grid grid-cols-2 gap-2"
              >
                {[
                  { name: "Business Growth", icon: <FiBarChart2 /> },
                  { name: "Data & Analytics", icon: <FiPieChart /> },
                ].map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => go("#")}
                    variants={itemVariants}
                    className="w-full flex items-center gap-3 
                               bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                               text-neutral-100 px-4 py-3 rounded-lg"
                  >
                    <div className="text-neutral-300">{item.icon}</div>
                    <span className="text-xs">{item.name}</span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ========================= ABOUT US ======================= */}
      <button
        onClick={() => {
          onClose();
          navigate("/about-us");
        }}
        className="w-full flex items-center justify-between 
                   bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
                   text-neutral-100 px-4 py-4 rounded-xl"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
            <FiUser className="w-5 h-5 text-neutral-200" />
          </div>
          <div className="text-sm">About Us</div>
        </div>
        <FiArrowRight className="text-neutral-400" />
      </button>
    </div>
  );
};

/* ------------------ MobilePanel (bottom-sheet with blurred backdrop + spring) ------------------ */
// const MobilePanel = ({ onClose }) => {
//   const backdropRef = useRef(null);

//   // close when clicking backdrop area
//   const handleBackdrop = (e) => {
//     if (e.target === backdropRef.current) onClose();
//   };

//   return (
//     <>
//       {/* backdrop with blur */}
//       <motion.div
//         ref={backdropRef}
//         onClick={handleBackdrop}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.45 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
//       />

//       {/* bottom sheet with spring animation */}
//       <motion.div
//         initial={{ y: "100%" }}
//         animate={{ y: 0 }}
//         exit={{ y: "100%" }}
//         transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.8 }}
//         className="fixed bottom-0 left-0 right-0 bg-[rgb(28,28,28)] rounded-t-2xl z-50 shadow-xl pt-4 pb-8 max-h-[88vh] overflow-y-auto"
//       >
//         <div className="flex items-center justify-between px-5 pb-4 border-b border-neutral-700">
//           <div className="flex items-center gap-2">
//             <div className="w-7 h-7 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-xs">L</span>
//             </div>
//             <span className="text-white font-semibold text-lg">Menu</span>
//           </div>

//           <button
//             onClick={onClose}
//             className="p-2 rounded-md text-neutral-100 focus:outline-none"
//             aria-label="Close menu"
//           >
//             <FiX className="w-6 h-6" />
//           </button>
//         </div>

//         {/* mobile menu content */}
//         <MobileMenuContent onClose={onClose} />
//       </motion.div>
//     </>
//   );
// };

/* ------------------ MobileMenuContent (accordion + stagger + icons + shimmer + vibrate) ------------------ */
// const MobileMenuContent = ({ onClose }) => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(null);

//   const toggle = (id) => setOpen(open === id ? null : id);

//   const go = (path) => {
//     onClose();
//     // vibration/haptic feedback (if available)
//     try {
//       if (navigator && "vibrate" in navigator) navigator.vibrate(10);
//     } catch (e) {}
//     if (path) navigate(path);
//   };

//   // Stagger animation container
//   const listVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.06 },
//     },
//   };

//   // Stagger animation for each item
//   const itemVariants = {
//     hidden: { opacity: 0, x: -10 },
//     visible: { opacity: 1, x: 0 },
//   };

//   // inline CSS for shimmer (kept local to component)
//   const shimmerStyles = `
//     @keyframes shimmerX {
//       0% { transform: translateX(-120%); opacity: 0; }
//       50% { transform: translateX(0%); opacity: 0.25; }
//       100% { transform: translateX(120%); opacity: 0; }
//     }
//     .shimmer-wrap { position: relative; overflow: hidden; }
//     .shimmer-overlay {
//       position: absolute;
//       top: 0; left: -120%;
//       height: 100%; width: 80%;
//       background: linear-gradient(90deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.00) 100%);
//       transform: translateX(-120%);
//     }
//     .shimmer-wrap:hover .shimmer-overlay { animation: shimmerX 900ms ease-in-out 1; }
//   `;

//   return (
//     <>
//       {/* local styles for shimmer */}
//       <style>{shimmerStyles}</style>

//       <div className="flex flex-col px-4 mt-3 space-y-2">
//         {/* PRODUCTS */}
//         <div>
//           <button
//             onClick={() => toggle("products")}
//             className="w-full flex items-center justify-between
//                        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
//                        text-neutral-100 px-4 py-4 rounded-xl"
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
//                 <FiFileText className="w-5 h-5 text-neutral-200" />
//               </div>
//               <div className="text-sm">Products</div>
//             </div>

//             <FiChevronDown
//               className={`text-neutral-400 transition-transform ${
//                 open === "products" ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           <AnimatePresence>
//             {open === "products" && (
//               <motion.div
//                 initial={{ height: 0 }}
//                 animate={{ height: "auto" }}
//                 exit={{ height: 0 }}
//                 className="overflow-hidden border-l border-neutral-700 ml-6"
//               >
//                 <motion.div
//                   variants={listVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="p-3 grid grid-cols-2 gap-2"
//                 >
//                   {[
//                     { name: "Book Keeping", icon: <FiFileText /> },
//                     { name: "Invoicing", icon: <FiCreditCard /> },
//                     { name: "Live Coaching", icon: <FiUsers /> },
//                     { name: "Reviews", icon: <FiStar /> },
//                     { name: "Tax/VAT", icon: <FiTrendingUp /> },
//                     { name: "White glove", icon: <FiCheckCircle /> },
//                     { name: "SOX Compliance", icon: <FiShield /> },
//                     { name: "Staffing", icon: <FiBriefcase /> },
//                   ].map((item) => (
//                     <motion.button
//                       key={item.name}
//                       variants={itemVariants}
//                       onClick={() => go("#")}
//                       className="w-full flex items-center gap-3
//                                  bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
//                                  text-neutral-100 px-4 py-3 rounded-lg shimmer-wrap"
//                     >
//                       <div className="text-neutral-300 text-lg">{item.icon}</div>
//                       <span className="text-xs flex-1 text-left">{item.name}</span>

//                       {/* subtle shimmer overlay element */}
//                       <span className="shimmer-overlay" aria-hidden="true" />
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* EXAM (unchanged layout, but gets shimmer + vibrate on click) */}
//         <div>
//           <button
//             onClick={() => toggle("exam")}
//             className="w-full flex items-center justify-between
//                        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
//                        text-neutral-100 px-4 py-4 rounded-xl"
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
//                 <FiHome className="w-5 h-5 text-neutral-200" />
//               </div>
//               <div className="text-sm">Exam</div>
//             </div>

//             <FiChevronDown
//               className={`text-neutral-400 transition-transform ${
//                 open === "exam" ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           <AnimatePresence>
//             {open === "exam" && (
//               <motion.div
//                 initial={{ height: 0 }}
//                 animate={{ height: "auto" }}
//                 exit={{ height: 0 }}
//                 className="overflow-hidden border-l border-neutral-700 ml-6"
//               >
//                 <motion.div
//                   variants={listVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="p-3 grid grid-cols-2 gap-2"
//                 >
//                   {[
//                     { name: "CAT", icon: <FiBook />, path: "/cat-Exam" },
//                     { name: "MBA", icon: <FiUsers />, path: "/mba-Exam" },
//                     { name: "XAT", icon: <FiCheckSquare />, path: "/xat-Exam" },
//                     { name: "XGMT", icon: <FiPieChart />, path: "/xgmt-Exam" },
//                     { name: "Tuitions", icon: <FiFile />, path: "/tuitions-Exam" },
//                   ].map((item) => (
//                     <motion.button
//                       key={item.name}
//                       variants={itemVariants}
//                       onClick={() => go(item.path)}
//                       className="w-full flex items-center gap-3
//                                  bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
//                                  text-neutral-100 px-4 py-3 rounded-lg shimmer-wrap"
//                     >
//                       <div className="text-neutral-300">{item.icon}</div>
//                       <span className="text-xs flex-1 text-left">{item.name}</span>
//                       <span className="shimmer-overlay" aria-hidden="true" />
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* BLOG */}
//         <div>
//           <button
//             onClick={() => toggle("blog")}
//             className="w-full flex items-center justify-between
//                        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
//                        text-neutral-100 px-4 py-4 rounded-xl"
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
//                 <FiFileText className="w-5 h-5 text-neutral-200" />
//               </div>
//               <div className="text-sm">Blog</div>
//             </div>

//             <FiChevronDown
//               className={`text-neutral-400 transition-transform ${
//                 open === "blog" ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           <AnimatePresence>
//             {open === "blog" && (
//               <motion.div
//                 initial={{ height: 0 }}
//                 animate={{ height: "auto" }}
//                 exit={{ height: 0 }}
//                 className="overflow-hidden border-l border-neutral-700 ml-6"
//               >
//                 <motion.div
//                   variants={listVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="p-3 grid grid-cols-2 gap-2"
//                 >
//                   {[
//                     { name: "Business Growth Strategies", icon: <FiTrendingUp /> },
//                     { name: "Data Driven Decisions", icon: <FiBarChart2 /> },
//                   ].map((item) => (
//                     <motion.button
//                       key={item.name}
//                       onClick={() => go("#")}
//                       variants={itemVariants}
//                       className="w-full flex items-center gap-3
//                                  bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
//                                  text-neutral-100 px-4 py-3 rounded-lg shimmer-wrap"
//                     >
//                       <div className="text-neutral-300">{item.icon}</div>
//                       <span className="text-xs flex-1 text-left">{item.name}</span>
//                       <span className="shimmer-overlay" aria-hidden="true" />
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* COURSES */}
//         <div>
//           <button
//             onClick={() => toggle("courses")}
//             className="w-full flex items-center justify-between
//                        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
//                        text-neutral-100 px-4 py-4 rounded-xl"
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
//                 <FiBook className="w-5 h-5 text-neutral-200" />
//               </div>
//               <div className="text-sm">Courses</div>
//             </div>

//             <FiChevronDown
//               className={`text-neutral-400 transition-transform ${
//                 open === "courses" ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           <AnimatePresence>
//             {open === "courses" && (
//               <motion.div
//                 initial={{ height: 0 }}
//                 animate={{ height: "auto" }}
//                 exit={{ height: 0 }}
//                 className="overflow-hidden border-l border-neutral-700 ml-6"
//               >
//                 <motion.div
//                   variants={listVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="p-3 grid grid-cols-2 gap-2"
//                 >
//                   {[
//                     { name: "Business Growth", icon: <FiBarChart2 /> },
//                     { name: "Data & Analytics", icon: <FiPieChart /> },
//                   ].map((item) => (
//                     <motion.button
//                       key={item.name}
//                       onClick={() => go("#")}
//                       variants={itemVariants}
//                       className="w-full flex items-center gap-3
//                                  bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
//                                  text-neutral-100 px-4 py-3 rounded-lg shimmer-wrap"
//                     >
//                       <div className="text-neutral-300">{item.icon}</div>
//                       <span className="text-xs flex-1 text-left">{item.name}</span>
//                       <span className="shimmer-overlay" aria-hidden="true" />
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* ABOUT US */}
//         <button
//           onClick={() => {
//             onClose();
//             // small vibrate on about click
//             try { if (navigator && "vibrate" in navigator) navigator.vibrate(8); } catch (e) {}
//             navigate("/about-us");
//           }}
//           className="w-full flex items-center justify-between
//                      bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
//                      text-neutral-100 px-4 py-4 rounded-xl"
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-8 h-8 rounded-md bg-neutral-800 flex items-center justify-center">
//               <FiUser className="w-5 h-5 text-neutral-200" />
//             </div>
//             <div className="text-sm">About Us</div>
//           </div>
//           <FiArrowRight className="text-neutral-400" />
//         </button>
//       </div>
//     </>
//   );
// };

/* ---------------------- Original Desktop Component Contents (unchanged) ---------------------- */
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

export default ShiftingDropDown;
