import React from "react";
import { motion } from "framer-motion";
import profile from "../assests/Screenshot 2026-02-08 204801.png";
import About from "./About";
import Education from "./Education";
import Project from "./Project";
import Experience from "./Experience";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";

const Frontpage = () => {
  return (
    <div>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center 
        bg-gradient-to-br from-[#1a0033] via-[#2d004d] to-[#0b1d5e] overflow-hidden"
      >
        {/* Background Glow Circles */}
        <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-10 md:px-16 text-white relative z-10">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <p className="text-sm tracking-widest text-pink-300 uppercase">
              Hello there, welcome to my site
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              I’m{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Shankareshwari
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-500">
              👩‍💻 Frontend Developer
            </h2>

            <p className="text-gray-200 max-w-md mx-auto md:mx-0 leading-relaxed">
              I design and build modern, responsive web interfaces using React & Tailwind CSS.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition duration-300 font-semibold shadow-lg"
              >
                Hire Me
              </a>
              <a
                href="#project"
                className="px-6 py-3 rounded-full border border-pink-400 hover:bg-pink-500 hover:text-white transition duration-300 font-semibold"
              >
                View Projects
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mt-10 md:mt-0"
          >
            <div className="relative w-[280px] h-[280px] rounded-full p-1 bg-gradient-to-r from-pink-500 to-purple-500 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <About />
      <Education />
      <Project />
      <Experience />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
};

export default Frontpage;
