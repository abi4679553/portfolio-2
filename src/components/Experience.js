import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full
      bg-gradient-to-br from-[#1a0033] via-[#2d004d] to-[#0b1d5e]
      text-white
      px-6 md:px-16
      py-24 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl top-20 left-10"></div>
      <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold
                         bg-gradient-to-r from-pink-400 to-purple-400
                         bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="w-20 h-[4px] bg-pink-500 rounded-full mx-auto md:mx-0"></div>

          <p className="text-gray-300 max-w-lg mx-auto md:mx-0">
            Professional frontend development experience in real-time projects.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Animated Vertical Line */}
          <div className="hidden md:block absolute left-5 top-0 w-[3px] h-full 
                          bg-gradient-to-b from-pink-500 to-purple-500 
                          rounded-full animate-pulse"></div>

          {/* EXPERIENCE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="relative md:pl-16"
          >

            {/* ICON */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute hidden md:flex left-0 top-6
              bg-gradient-to-r from-pink-500 to-purple-500
              p-3 rounded-full
              shadow-lg shadow-pink-500/50"
            >
              <Briefcase size={20} />
            </motion.div>

            {/* CARD */}
            <div className="bg-white/5 backdrop-blur-xl
              p-8 rounded-2xl
              border border-white/10
              shadow-2xl
              hover:border-pink-400/50
              hover:shadow-pink-500/20
              transition duration-500 space-y-4">

              <h3 className="text-2xl font-semibold text-pink-400">
                Frontend Developer Intern
              </h3>

              <p className="text-pink-300 font-medium text-lg">
                SAN Technovation
              </p>

              <p className="text-sm text-gray-400">
                Real-Time Project Experience | 2026
              </p>

              <ul className="list-disc list-inside text-gray-300
                             space-y-3 mt-4 leading-relaxed">
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
