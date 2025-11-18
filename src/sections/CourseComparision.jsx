import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function CourseComparison() {
  const columns = [
    "CAT 2026 Full Course",
    "CAT 2026 Full Course + IIM ABC",
    "CAT 2026 Full Course Pro",
    "Other Coachings",
  ];

  const features = [
    { name: "Live Conceptual Classes", values: [true, true, true, true] },
    { name: "All Year Practice Sessions", values: [true, true, true, false] },
    { name: "Assignments", values: [true, true, true, true] },
    { name: "24×7 Doubt Solving", values: [true, true, true, false] },
    {
      name: "Sectionals with Video Solution",
      values: [true, true, true, false],
    },
    { name: "Engineers VARC Videos", values: [true, true, true, false] },
    { name: "CAT LRDI Inception", values: [true, true, true, false] },
    { name: "QA CutShort Module", values: [true, true, true, false] },
    { name: "AI Mock Analysis", values: [true, true, true, false] },
    { name: "Peer to Peer Learning", values: [true, true, true, false] },
    { name: "Free 2 Month Crash Course", values: [true, true, true, false] },
    { name: "LRDI Essentials", values: [true, true, true, false] },
  ];

  const getIcon = (value, colIndex) => {
    if (value)
      return (
        <FaCheckCircle
          className={`text-green-400 text-lg mx-auto ${
            colIndex === 3 ? "opacity-40" : ""
          }`}
        />
      );
    else
      return (
        <FaTimesCircle
          className={`text-red-400 text-lg mx-auto ${
            colIndex === 3 ? "opacity-40" : ""
          }`}
        />
      );
  };

  return (
    <section className="bg-black py-10 -mt-10 px-4 md:px-24 overflow-hidden ">
      {/* TITLE */}
      <h2
        className="
          text-center mb-6 text-2xl mt-6 md:text-4xl font-extrabold 
          bg-clip-text text-transparent 
          bg-[linear-gradient(90deg,#E16B3A,#B14820)]
        "
      >
        Course Comparison Overview
      </h2>

      <div
        className="
          overflow-x-auto rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.15)]
          border border-[#4d3b34]/40
          bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
        "
      >
        <table className="w-full min-w-[850px] border-collapse text-white">
          {/* TABLE HEADER */}
          <thead>
            <tr
              className="
                text-sm md:text-base 
                bg-[#000000]/40 
                backdrop-blur-sm
              "
            >
              <th className="text-left px-4 py-4 font-semibold">
                Course Features
              </th>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="
                    px-4 py-4 font-semibold border-l border-[#4d3b34]/40
                  "
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {features.map((feature, idx) => (
              <tr
                key={idx}
                className={`
                  text-sm md:text-base border-t border-[#4d3b34]/30
                  ${
                    idx % 2 === 0
                      ? "bg-[#392e29]/40"
                      : "bg-[#000000]/20"
                  }
                  hover:bg-[#E16B3A]/10 transition-all
                `}
              >
                <td className="px-4 py-3 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-[linear-gradient(90deg,#E16B3A,#B14820)] rounded-full"></span>
                  {feature.name}
                </td>

                {feature.values.map((v, colIdx) => (
                  <td
                    key={colIdx}
                    className="
                      py-3 border-l border-[#4d3b34]/30
                    "
                  >
                    {getIcon(v, colIdx)}
                  </td>
                ))}
              </tr>
            ))}

            {/* BUY NOW BUTTONS */}
            <tr className="border-t border-[#4d3b34]/40 bg-black/40">
              <td></td>

              {/* Button 1 */}
              <td className="py-5">
                <button
                  className="
                    px-6 py-2 rounded-lg text-white font-semibold mx-auto 
                    flex items-center justify-center gap-2
                    bg-[linear-gradient(90deg,#E16B3A,#B14820)]
                    hover:opacity-90 transition-all
                  "
                >
                  Buy Now →
                </button>
              </td>

              {/* Button 2 */}
              <td className="py-5">
                <button
                  className="
                    px-6 py-2 rounded-lg text-white font-semibold mx-auto 
                    flex items-center justify-center gap-2
                    bg-[linear-gradient(90deg,#E16B3A,#B14820)]
                    hover:opacity-90 transition-all
                  "
                >
                  Buy Now →
                </button>
              </td>

              {/* Button 3 */}
              <td className="py-5">
                <button
                  className="
                    px-6 py-2 rounded-lg text-white font-semibold mx-auto 
                    flex items-center justify-center gap-2
                    bg-[linear-gradient(90deg,#E16B3A,#B14820)]
                    hover:opacity-90 transition-all
                  "
                >
                  Buy Now →
                </button>
              </td>

              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
