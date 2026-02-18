import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen w-full
      bg-gradient-to-br from-[#14002b] via-[#240046] to-[#001d3d]
      text-white px-6 md:px-16 py-24 overflow-hidden"
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
            Education
          </h2>
          <div className="w-20 h-[4px] bg-pink-500 rounded-full mx-auto md:mx-0"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-12">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-6 top-0 w-[3px] h-full 
                          bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>

          {/* 10th */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative md:pl-16"
          >
            <div className="absolute hidden md:flex left-0 top-6
              bg-pink-500 p-3 rounded-full shadow-lg shadow-pink-500/40">
              <GraduationCap size={20} />
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl
              border border-white/10 shadow-xl hover:border-pink-400/40 transition duration-500">

              <h3 className="text-2xl font-semibold text-pink-400">
                10th Standard
              </h3>
              <p className="text-gray-300 mt-2">
                Sakthi Higher Secondary School
              </p>
              <p className="text-gray-400 mt-1">
                Percentage: <span className="text-pink-400 font-semibold">80%</span>
              </p>
            </div>
          </motion.div>

          {/* 12th */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative md:pl-16"
          >
            <div className="absolute hidden md:flex left-0 top-6
              bg-purple-500 p-3 rounded-full shadow-lg shadow-purple-500/40">
              <GraduationCap size={20} />
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl
              border border-white/10 shadow-xl hover:border-purple-400/40 transition duration-500">

              <h3 className="text-2xl font-semibold text-purple-400">
                12th Standard
              </h3>
              <p className="text-gray-300 mt-2">
                Sakthi Higher Secondary School
              </p>
              <p className="text-gray-400 mt-1">
                Public Exam Marks: 
                <span className="text-purple-400 font-semibold"> 472 / 600</span>
              </p>
            </div>
          </motion.div>

          {/* BE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative md:pl-16"
          >
            <div className="absolute hidden md:flex left-0 top-6
              bg-gradient-to-r from-pink-500 to-purple-500 
              p-3 rounded-full shadow-lg shadow-pink-500/40">
              <GraduationCap size={20} />
            </div>

            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl
              border border-white/10 shadow-xl hover:border-pink-400/40 transition duration-500">

              <h3 className="text-2xl font-semibold text-pink-400">
                Bachelor of Engineering (CSE)
              </h3>
              <p className="text-gray-300 mt-2">
                Nandha College of Technology, Erode
              </p>
              <p className="text-gray-400 mt-1">
                Duration: 
                <span className="text-pink-400 font-semibold"> 2023 – 2027</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
