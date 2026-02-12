import React from "react";
import profile from "../assests/Screenshot 2026-02-08 204801.png";

const Frontpage = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-[#1a0033] via-[#2d004d] to-[#0b1d5e]"
    >
      <div
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2
        items-center
        px-6 sm:px-10 md:px-16
        text-white"
      >
        {/* LEFT CONTENT */}
        <div className="space-y-5 sm:space-y-6 animate-slideUp text-center md:text-left">
          <p className="text-xs sm:text-sm tracking-widest text-pink-200 uppercase">
            Hello there, welcome to my site
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            I’m{" "}
            <span className="text-pink-400 relative after:content-[''] after:block after:h-[3px] after:w-14 sm:after:w-16 after:bg-pink-400 after:mt-2 mx-auto md:mx-0">
              Shankareshwari
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-500 animate-fadeIn">
            A Frontend Developer
          </h2>

          <p className="text-gray-200 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
            I design and build modern, responsive and user-friendly web
            interfaces using React & Tailwind CSS.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button
              className="px-6 py-3 rounded-full bg-pink-500 text-white
              hover:bg-pink-600 hover:scale-105
              transition-all duration-300 font-medium shadow-lg"
            >
              See Portfolio
            </button>

            <button
              className="px-6 py-3 rounded-full border
              border-pink-400 text-pink-300
              hover:bg-pink-500 hover:text-white hover:scale-105
              transition-all duration-300 font-medium"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center mt-10 md:mt-0 animate-zoomIn">
          <div
            className="
            w-[220px] h-[220px]
            sm:w-[260px] sm:h-[260px]
            md:w-[300px] md:h-[300px]
            xl:w-[340px] xl:h-[340px]
            p-[6px] rounded-full
            bg-gradient-to-tr from-pink-400 to-violet-400
            animate-pulseGlow"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0f0225]">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover rounded-full
                hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frontpage;
