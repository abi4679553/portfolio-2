import React from "react";
import { Mail, Phone, Github, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";
import profile from "../assests/Screenshot 2026-02-08 204801.png";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Resume = () => {
  return (
    <section className="relative min-h-screen w-full
      bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]
      text-pink-100 px-4 md:px-10 py-16 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto
        bg-white/10 backdrop-blur-xl
        border border-pink-400/20
        rounded-2xl shadow-lg overflow-hidden"
      >

        {/* HEADER */}
        <motion.div variants={item}
          className="text-center py-10 px-4 border-b border-pink-400/20">

          <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center mb-4">
            <img
              src={profile}
              alt="profile"
              className="w-28 h-28 rounded-full object-cover
              border-2 border-pink-400 shadow-md"
            />
          </motion.div>

          {/* 🔥 BOLD TITLE */}
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-pink-400">
            SHANKARESHWARI V
          </h1>

          <p className="text-pink-200 mt-2 text-base tracking-wide">
            FRONTEND DEVELOPER
          </p>

          {/* Contact */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:abivengadajalam7708@gmail.com"
              className="flex items-center gap-3 px-4 py-2
              bg-pink-500/20 border border-pink-400/40
              rounded-full text-sm text-pink-100
              hover:bg-pink-500/30 transition"
            >
              <Mail size={16} className="text-pink-300" />
              abivengadajalam7708@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:7708749115"
              className="flex items-center gap-3 px-4 py-2
              bg-purple-500/20 border border-purple-400/40
              rounded-full text-sm text-pink-100
              hover:bg-purple-500/30 transition"
            >
              <Phone size={16} className="text-purple-300" />
              +91 7708749115
            </motion.a>

          </div>
        </motion.div>

        {/* BODY */}
        <motion.div
          variants={container}
          className="grid md:grid-cols-2 gap-8 px-6 py-10"
        >

          {/* LEFT */}
          <motion.div variants={item} className="space-y-6">

            <div className="bg-white/5 p-4 rounded-lg border border-pink-400/10">
              <h3 className="text-base font-semibold text-pink-400 mb-2">
                EDUCATION
              </h3>
              <p className="text-sm text-pink-200">
                <strong>B.E – CSE</strong><br />
                Anna University <br />
                2023 – 2027
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg border border-pink-400/10">
              <h3 className="text-base font-semibold text-pink-400 mb-2">
                EXPERIENCE
              </h3>
              <p className="text-sm text-pink-200">
                <strong>Frontend Developer Intern</strong><br />
                SanTechnovation <br />
                2025 – 2026 <br /><br />
                • Built responsive React apps <br />
                • Integrated APIs <br />
                • Worked on client projects
              </p>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div variants={item} className="space-y-6">

            <div className="bg-white/5 p-4 rounded-lg border border-pink-400/10">
              <h3 className="text-base font-semibold text-pink-400 mb-2">
                SKILLS
              </h3>
              <div className="flex flex-wrap gap-2 text-sm">
                {["HTML", "CSS", "JavaScript", "React", "Tailwind"]
                  .map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-pink-500/30 text-pink-100 rounded-full">
                      {skill}
                    </span>
                  ))}
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-lg border border-pink-400/10">
              <h3 className="text-base font-semibold text-pink-400 mb-2">
                PROJECT
              </h3>
              <p className="text-sm text-pink-200">
                <strong>Online Voting System</strong><br />
                • Responsive UI <br />
                • Form validation
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-lg border border-pink-400/10">
              <h3 className="text-base font-semibold text-pink-400 mb-2">
                PROFILES
              </h3>
              <p className="text-sm text-pink-200 flex items-center gap-2">
                <Github size={16} /> github.com/yourprofile
              </p>
              <p className="text-sm text-pink-200 flex items-center gap-2">
                <Linkedin size={16} /> linkedin.com/in/yourprofile
              </p>
            </div>

          </motion.div>

        </motion.div>

        {/* Download */}
        <div className="text-center pb-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/Cav -Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2
            text-sm bg-gradient-to-r from-pink-500 to-purple-500
            text-white rounded-full font-medium shadow-md">
            <Download size={16} /> Download Resume
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
};

export default Resume;
