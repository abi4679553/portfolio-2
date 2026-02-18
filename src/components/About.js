import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="relative min-h-screen w-full
      bg-gradient-to-br from-[#12002f] via-[#2a0040] to-[#0b1d5e]
      text-white px-6 sm:px-10 md:px-16 py-24 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold 
                         bg-gradient-to-r from-pink-400 to-purple-400 
                         bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-[4px] bg-pink-400 rounded-full"></div>
        </motion.div>

        {/* INTRO */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-200 leading-relaxed"
        >
          Hi, I’m <span className="text-pink-400 font-semibold">Shankareshwari</span>,
          a Frontend Developer currently pursuing my Bachelor of Engineering (BE)
          at <span className="font-medium text-white">Nandha College of Technology, Erode</span>,
          graduating in <span className="font-medium text-white">2027</span>.
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-200 leading-relaxed"
        >
          I focus on building clean, responsive, and user-friendly web interfaces
          using <span className="text-pink-400 font-semibold">React</span> and
          <span className="text-pink-400 font-semibold"> Tailwind CSS</span>.
          As a fresher, I continuously improve my frontend development skills
          through hands-on practice and real-world projects.
        </motion.p>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-pink-400 mb-6">
            Skills & Technologies
          </h3>

          <div className="flex flex-wrap gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Git & GitHub",
            ].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-2 rounded-full
                text-sm sm:text-base
                border border-pink-400/40
                text-pink-200 bg-white/5 backdrop-blur-md
                hover:bg-pink-500 hover:text-white
                transition duration-300 shadow-md shadow-pink-500/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* GOAL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl 
          bg-white/5 backdrop-blur-md
          border border-white/10
          shadow-lg shadow-pink-500/10"
        >
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            🎯 My goal is to start my career as a
            <span className="text-pink-400 font-semibold"> Frontend Developer</span>,
            gain hands-on industry experience, and contribute to real-world projects
            while continuously enhancing my technical and design skills.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
