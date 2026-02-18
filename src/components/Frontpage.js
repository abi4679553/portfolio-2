import React from "react";
import profile from "../assests/Screenshot 2026-02-08 204801.png";
import About from "./About";

const Frontpage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-[#1a0033] via-[#2d004d] to-[#0b1d5e]"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-10 md:px-16 text-white">

        <div className="space-y-6 text-center md:text-left">
          <p className="text-sm tracking-widest text-pink-200 uppercase">
            Hello there, welcome to my site
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            I’m <span className="text-pink-400">Shankareshwari</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-500">
            A Frontend Developer
          </h2>

          <p className="text-gray-200 max-w-md mx-auto md:mx-0 leading-relaxed">
            I design and build modern, responsive web interfaces using React & Tailwind CSS.
          </p>
        </div>

        <div className="flex justify-center mt-10 md:mt-0">
          <div className="w-[260px] h-[260px] rounded-full overflow-hidden">
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
      
    </section>
    
    
  );
};

export default Frontpage;
