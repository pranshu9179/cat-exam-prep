import React from "react";

const HomeBottom = () => {
  return (
    <div className="w-full bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content Section */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
              Get ready to crack CAT with
            </h1>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent 
              bg-[linear-gradient(90deg,#E16B3A,#B14820)] mb-6"
            >
              Career Launcher!
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
              Welcome to the official Career Launcher app - your one-stop
              destination for
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              all your entrance-exam preparation needs!
            </p>

            <p
              className="text-xl sm:text-2xl font-semibold  bg-clip-text text-transparent 
              bg-[linear-gradient(90deg,#E16B3A,#B14820)] mb-8"
            >
              Download the app now<span className="text-white"> !</span>
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <div className="relative group rounded-lg">
                  {/* GRADIENT BORDER ON HOVER */}
                  <div
                    className="
        absolute inset-0 rounded-lg p-0.5
        opacity-0 group-hover:opacity-100 
        transition-all duration-300
        bg-[linear-gradient(90deg,#E16B3A,#B14820)]
      "
                  >
                    <div className="w-full h-full rounded-lg bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]"></div>
                  </div>

                  {/* ORIGINAL BUTTON */}
                  <div
                    className="
        relative z-10 
        bg-[radial-gradient(144.43%_144.43%_at_50%_-25.21%,#392e29_0%,#000000_100%)]
        text-white  px-6 py-3 rounded-lg 
        flex items-center gap-3 shadow-lg 
        border border-[#4d3b34]
        group-hover:border-transparent
        transition-all duration-300
      "
                  >
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>

                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <div className="bg-[linear-gradient(90deg,#E16B3A,#B14820)] text-white px-6 py-3 rounded-lg flex items-center gap-3 shadow-lg hover:shadow-xl">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 relative max-w-md lg:max-w-lg md:block hidden">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
              alt="Student with phone showing Career Launcher app"
              className="w-full h-auto object-contain  rounded-3xl" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBottom;
