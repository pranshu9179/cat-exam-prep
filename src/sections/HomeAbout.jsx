import React from "react";

const HomeAbout = () => {
  const cards = [
    {
      id: 1,
      title: "About CAT",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E16B3A" />
              <stop offset="100%" stopColor="#B14820" />
            </linearGradient>
          </defs>
          <path
            stroke="url(#grad1)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      route: "/about-cat",
    },

    {
      id: 2,
      title: "CAT Syllabus",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E16B3A" />
              <stop offset="100%" stopColor="#B14820" />
            </linearGradient>
          </defs>
          <path
            stroke="url(#grad2)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      route: "/cat-syllabus",
    },

    {
      id: 3,
      title: "CAT Study Plan",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E16B3A" />
              <stop offset="100%" stopColor="#B14820" />
            </linearGradient>
          </defs>
          <path
            stroke="url(#grad3)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      route: "/cat-study-plan",
    },

    {
      id: 4,
      title: "Best Books for CAT prep",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E16B3A" />
              <stop offset="100%" stopColor="#B14820" />
            </linearGradient>
          </defs>
          <path
            stroke="url(#grad4)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      route: "/cat-books",
    },

    {
      id: 5,
      title: "Good CAT Score",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E16B3A" />
              <stop offset="100%" stopColor="#B14820" />
            </linearGradient>
          </defs>
          <path
            stroke="url(#grad5)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      route: "/good-cat-score",
    },

    {
      id: 6,
      title: "CAT Result",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E16B3A" />
              <stop offset="100%" stopColor="#B14820" />
            </linearGradient>
          </defs>
          <path
            stroke="url(#grad6)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      route: "/cat-result",
    },
  ];

  const handleCardClick = (route) => {
    window.location.href = route;
  };

  return (
    <div className="w-full bg-[#000000] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT TEXT SECTION */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white">
              Explore About{" "}
              <span
                className="text-3xl sm:text-4xl lg:text-4xl font-bold 
              bg-clip-text text-transparent 
              bg-[linear-gradient(90deg,#E16B3A,#B14820)]"
              >
                CAT & Other MBA Entrances
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              A good CAT coaching program is one that provides you not only with
              information that is easy to obtain but also with important
              information about the CAT and other entrance exams that many
              students still do not know about, giving your preparation a better
              structure, whether or not you are taking CAT coaching.
            </p>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed md:block hidden">
              Bridging this awareness gap, alongside providing MBA coaching, we
              have also curated important information about MBA, top B-schools
              in India, the CAT syllabus, exam patterns, and more collaterals
              that help you chart your path toward your goal.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {cards.map((card) => (
              <div
                key={card.id}
                // onClick={() => handleCardClick(card.route)}
                className="
    relative rounded-lg p-6  group 
    transition-all duration-300
    bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
  "
              >
                {/* GRADIENT BORDER ON HOVER */}
                <div
                  className="
      absolute inset-0 rounded-lg p-[2px]
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
      bg-[linear-gradient(90deg,#E16B3A,#B14820)]
    "
                >
                  <div className="w-full h-full rounded-lg bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"></div>
                </div>

                {/* ORIGINAL CARD BORDER (normal state) */}
                <div className="absolute inset-0 rounded-lg border border-[#4d3b34] group-hover:opacity-0 transition-opacity duration-300"></div>

                {/* CARD CONTENT */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#E16B3A,#B14820)]">
                      {card.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                      {card.title}
                    </h3>

                    <svg
                      className="w-5 h-5 text-white group-hover:text-orange-300 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
