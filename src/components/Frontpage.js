import React from "react";
import profile from "../assests/Screenshot 2026-02-08 204801.png";
import About from "./About";
import Skills from "./Skills";

const Frontpage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-[#1a0033] via-[#2d004d] to-[#0b1d5e]"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-10 md:px-16 text-white">

        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-sm tracking-widest text-pink-200 uppercase">
            Hello there, welcome to my site
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            I’m{" "}
            <span className="text-pink-400">
              Shankareshwari
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-500">
            A Frontend Developer
          </h2>

          <p className="text-gray-200 max-w-md mx-auto md:mx-0 leading-relaxed">
            I design and build modern, responsive and user-friendly web
            interfaces using React & Tailwind CSS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition font-medium">
              See Portfolio
            </button>

            <button className="px-6 py-3 rounded-full border border-pink-400 text-pink-300 hover:bg-pink-500 hover:text-white transition font-medium">
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center mt-10 md:mt-0">
          <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] xl:w-[340px] xl:h-[340px] p-[6px] rounded-full bg-gradient-to-tr from-pink-400 to-violet-400">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0f0225]">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

      </div>
   
    </section>

    
  );
};

export default Frontpage;
