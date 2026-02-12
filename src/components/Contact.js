import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <section
      className="min-h-screen w-full
      bg-gradient-to-br from-[#1a0033] via-[#2d004d] to-[#0b1d5e]
      text-white px-6 sm:px-10 md:px-16 py-20 overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto space-y-16"
      >
        {/* TITLE */}
        <motion.div variants={item} className="space-y-3">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-pink-400">
            Contact Me
          </h2>
          <div className="w-16 h-[3px] bg-pink-400 animate-pulse"></div>
          <p className="text-gray-300 max-w-xl">
            Feel free to reach out for opportunities, collaborations,
            or professional inquiries.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <motion.div variants={container} className="space-y-8">

            {/* EMAIL */}
            <motion.div variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 transition duration-300"
            >
              <div className="p-3 rounded-full bg-pink-500/10 border border-pink-400/30 backdrop-blur-md">
                <Mail className="text-pink-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:abivengadajalam7708@email.com"
                  className="hover:text-pink-400 transition"
                >
                  abivengadajalam7708@email.com
                </a>
              </div>
            </motion.div>

            {/* PHONE */}
            <motion.div variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 transition duration-300"
            >
              <div className="p-3 rounded-full bg-pink-500/10 border border-pink-400/30 backdrop-blur-md">
                <Phone className="text-pink-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a
                  href="tel:+917708749115"
                  className="hover:text-pink-400 transition"
                >
                  +91 7708749115
                </a>
              </div>
            </motion.div>

            {/* LINKEDIN */}
            <motion.div variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 transition duration-300"
            >
              <div className="p-3 rounded-full bg-pink-500/10 border border-pink-400/30 backdrop-blur-md">
                <Linkedin className="text-pink-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition"
                >
                  linkedin.com
                </a>
              </div>
            </motion.div>

            {/* GITHUB */}
            <motion.div variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 transition duration-300"
            >
              <div className="p-3 rounded-full bg-pink-500/10 border border-pink-400/30 backdrop-blur-md">
                <Github className="text-pink-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition"
                >
                  github.com
                </a>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            variants={item}
            className="space-y-6 p-6 sm:p-8 rounded-2xl
            bg-white/5 border border-white/10 backdrop-blur-lg
            shadow-xl"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-transparent
              border border-white/20 focus:outline-none
              focus:border-pink-400 focus:ring-1 focus:ring-pink-400
              transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-transparent
              border border-white/20 focus:outline-none
              focus:border-pink-400 focus:ring-1 focus:ring-pink-400
              transition"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-transparent
              border border-white/20 focus:outline-none
              focus:border-pink-400 focus:ring-1 focus:ring-pink-400
              transition"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 rounded-full
              bg-pink-500 hover:bg-pink-600
              shadow-lg shadow-pink-500/40
              transition font-medium"
            >
              Send Message
            </motion.button>
          </motion.form>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
