import React from "react";
import { motion } from "framer-motion";

const technicalSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 75 },
];

const softSkills = [
  { name: "Communication", level: 85 },
  { name: "Team Work", level: 80 },
  { name: "Problem Solving", level: 75 },
  { name: "Adaptability", level: 85 },
];

const Skills = () => {
  return (
    <section className="relative min-h-screen w-full
      bg-gradient-to-br from-[#1a0033] via-[#2d004d] to-[#0b1d5e]
      text-white px-6 md:px-16 py-16 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-pink-500/15 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/15 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* 🔥 ULTRA BIG TITLE */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-wider mb-16
          bg-gradient-to-r from-pink-400 to-purple-400
          bg-clip-text text-transparent"
        >
          Professional Skills
        </motion.h2>

        {/* ================= TECHNICAL SKILLS ================= */}
        <div className="mb-14">

          <h3 className="text-lg font-semibold mb-6 text-pink-300">
            Technical Skills
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {technicalSkills.map((skill, index) => {
              const radius = 40;
              const stroke = 6;
              const normalizedRadius = radius - stroke * 2;
              const circumference = normalizedRadius * 2 * Math.PI;
              const strokeDashoffset =
                circumference - (skill.level / 100) * circumference;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <svg height={radius * 2} width={radius * 2}>
                    <circle
                      stroke="#ffffff20"
                      fill="transparent"
                      strokeWidth={stroke}
                      r={normalizedRadius}
                      cx={radius}
                      cy={radius}
                    />
                    <motion.circle
                      stroke="url(#gradient)"
                      fill="transparent"
                      strokeWidth={stroke}
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      r={normalizedRadius}
                      cx={radius}
                      cy={radius}
                      style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset }}
                      transition={{ duration: 1 }}
                    />
                    <defs>
                      <linearGradient id="gradient">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p className="mt-2 text-sm font-medium">{skill.name}</p>
                  <span className="text-pink-400 text-xs">
                    {skill.level}%
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= SOFT SKILLS ================= */}
        <div>

          <h3 className="text-lg font-semibold mb-6 text-purple-300">
            Soft Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-lg
                border border-white/10
                rounded-lg p-5"
              >

                <div className="flex justify-between mb-2 text-sm">
                  <span>{skill.name}</span>
                  <span className="text-purple-400">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="h-2 rounded-full
                    bg-gradient-to-r from-pink-500 to-purple-500"
                  />
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
