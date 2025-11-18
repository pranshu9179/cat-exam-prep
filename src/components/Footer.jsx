import {
  Facebook,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-gray-300 pt-8 pb-4">
      <div
        className="
        max-w-7xl mx-auto px-6 
        grid grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-12
      "
      >
        {/* BRAND */}
        <div className="col-span-2">
          <h3 className="text-4xl font-extrabold bg-gradient-to-r from-[#E16B3A] to-[#B14820] bg-clip-text text-transparent">
            We
          </h3>

          <p className="mt-4 text-[15px] text-gray-400 leading-relaxed">
            India’s No.1 CAT Online Coaching Platform helping aspirants achieve
            <span className="text-[#E16B3A] font-semibold">
              {" "}
              <br /> 99+ percentile
            </span>
            .
          </p>

          <div className="mt-5 space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-[#E16B3A]" />
              support@catprep.in
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-[#E16B3A]" />
              +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} className="text-[#E16B3A]" />
              New Delhi, India
            </p>
          </div>
        </div>

        {/* ⭐ 🌟 MOBILE GRID WRAPPER (2 COLS) */}
        <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-2">
          {/* COURSES */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Courses</h4>
            <ul className="space-y-2 text-[15px]">
              {[
                "CAT 2026 Full Course",
                "CAT Pro Course",
                "Mock Test Series",
                "CAT 99%ile Program",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-[#E16B3A] transition duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-[15px]">
              {[
                "CAT Syllabus PDF",
                "Daily Quizzes",
                "VARC Tricks",
                "Formula PDF",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-[#E16B3A] transition duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* FOLLOW US — TAKES FULL WIDTH UNDER BOTH */}
          <div className="col-span-2">
            <h4 className="font-semibold text-lg text-white mb-4">Follow us</h4>

            <div className="flex gap-4 mt-2">
              {[Facebook, Youtube, Instagram].map((Icon, i) => (
                <span
                  key={i}
                  className="p-2 rounded-full bg-[#111] border border-gray-700 
                  hover:bg-[#E16B3A] hover:border-transparent
                  hover:scale-110 hover:shadow-[0_0_15px_#E16B3A] 
                  transition-all duration-300 cursor-pointer"
                >
                  <Icon size={20} />
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              Stay updated with daily CAT tips & strategy videos.
            </p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 border-t border-gray-800 pt-5">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#E16B3A] font-semibold">We</span>. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
