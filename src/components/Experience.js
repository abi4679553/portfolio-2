import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen w-full
      bg-gradient-to-br from-[#1a0033] via-[#2d004d] to-[#0b1d5e]
      text-white
      px-4 sm:px-6 md:px-12 xl:px-20
      py-16 sm:py-20 xl:py-28"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-3 sm:space-y-4 text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 
                         font-bold text-pink-400 tracking-wide">
            Experience
          </h2>

          <div className="w-14 sm:w-16 md:w-20 h-[3px] bg-pink-500 rounded-full mx-auto md:mx-0"></div>

          <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto md:mx-0">
            Professional frontend development experience in real-time projects.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Vertical Line (hidden on small screens) */}
          <div className="hidden sm:block absolute left-3 top-0 w-[2px] h-full bg-pink-500"></div>

          {/* CARD */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative sm:pl-12"
          >

            {/* ICON */}
            <div className="absolute hidden sm:flex left-0 top-4 
              bg-pink-500 p-2 sm:p-3 rounded-full
              shadow-lg shadow-pink-500/50">
              <Briefcase size={16} className="sm:w-[18px] sm:h-[18px]" />
            </div>

            {/* CONTENT CARD */}
            <div className="bg-white/5 backdrop-blur-lg 
              p-5 sm:p-6 md:p-8
              rounded-xl sm:rounded-2xl
              border border-white/10 
              shadow-xl 
              hover:border-pink-400/40
              transition duration-500 space-y-3 sm:space-y-4">

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-pink-400">
                Frontend Developer Intern
              </h3>

              <p className="text-pink-300 font-medium text-base sm:text-lg">
                SAN Technovation
              </p>

              <p className="text-xs sm:text-sm text-gray-400">
                Real-Time Project Experience | 2026
              </p>

              <ul className="list-disc list-inside text-gray-300 
                             text-sm sm:text-base
                             space-y-2 sm:space-y-3 mt-3 leading-relaxed">
                <li>Developed responsive and modern UI using HTML, CSS, JavaScript.</li>
                <li>Built reusable React components for real-time client projects.</li>
                <li>Integrated REST APIs and handled frontend data rendering.</li>
                <li>Optimized performance and ensured cross-device compatibility.</li>
                <li>Collaborated in debugging and UI improvements.</li>
              </ul>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
