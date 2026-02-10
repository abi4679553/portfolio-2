import React from "react";
import profile from "../assests/Screenshot 2026-02-08 204801.png";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-[#12002f] via-[#3a0147] to-[#001d6e]"
    >
      <div
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2
        items-center px-8 md:px-16 text-white"
      >
        {/* LEFT CONTENT */}
        <div className="space-y-6 animate-fadeUp">
          <p className="text-sm tracking-widest text-gray-300 uppercase">
            Hello there, welcome to my site
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            I’m <span className="text-pink-500">Shankareshwari</span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-500">
            A Frontend Developer
          </h2>

          <p className="text-gray-300 max-w-md leading-relaxed">
            I design and build modern, responsive and user-friendly web
            interfaces using React & Tailwind CSS.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              className="px-6 py-3 rounded-full bg-pink-500
              hover:bg-pink-600 transition font-medium"
            >
              See Portfolio
            </button>

            <button
              className="px-6 py-3 rounded-full border
              border-pink-500 text-pink-400
              hover:bg-pink-500 hover:text-white transition font-medium"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center mt-10 md:mt-0 animate-fadeIn">
          {/* OUTER CIRCLE BORDER */}
          <div
            className="w-[280px] h-[280px] md:w-[320px] md:h-[320px]
            p-[6px] rounded-full
            bg-gradient-to-tr from-pink-500 to-violet-500"
          >
            {/* INNER CIRCLE (IMAGE HOLDER) */}
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
