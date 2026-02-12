import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen w-full
      bg-gradient-to-br from-[#1a0033] via-[#2d004d] to-[#0b1d5e]
      text-white px-6 sm:px-10 md:px-16 py-20"
    >
      <div className="max-w-5xl mx-auto space-y-16">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-pink-400 tracking-wide">
            Experience
          </h2>

          <div className="w-20 h-[3px] bg-pink-500 animate-pulse rounded-full"></div>

          <p className="text-gray-300 max-w-xl">
            My professional journey and real-time frontend development experience.
          </p>
        </motion.div>

        {/* EXPERIENCE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="relative border-l-2 border-pink-500 pl-8 group"
        >

          {/* ICON */}
          <div className="absolute -left-5 top-4 
            bg-pink-500 p-3 rounded-full 
            shadow-lg shadow-pink-500/50 
            group-hover:shadow-pink-500/80 
            transition duration-500">
            <Briefcase size={18} />
          </div>

          {/* CARD CONTENT */}
          <div className="bg-white/5 backdrop-blur-lg 
            p-8 rounded-2xl 
            border border-white/10 
            shadow-xl 
            group-hover:border-pink-400/40 
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

            <ul className="list-disc list-inside text-gray-300 space-y-3 mt-4 leading-relaxed">
              <li>
                Developed responsive and modern UI using HTML, CSS, JavaScript.
              </li>
              <li>
                Built reusable React components for real-time client projects.
              </li>
              <li>
                Integrated REST APIs and handled frontend data rendering.
              </li>
              <li>
                Optimized performance and ensured cross-device compatibility.
              </li>
              <li>
                Collaborated with team members in debugging and UI enhancements.
              </li>
            </ul>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
