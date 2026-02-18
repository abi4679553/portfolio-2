import React from "react";
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative w-full overflow-hidden
      bg-gradient-to-r from-[#1a0033] via-[#2d004d] to-[#0b1d5e]
      text-white
      py-12 md:py-16
      px-6 md:px-16"
    >

      {/* Soft Glow */}
      <div className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl top-0 left-0"></div>
      <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto
        flex flex-col md:flex-row
        justify-between items-center
        gap-10"
      >

        {/* LEFT SIDE */}
        <div className="text-center md:text-left space-y-3">

          <h3 className="text-2xl md:text-3xl font-semibold
            bg-gradient-to-r from-pink-400 to-purple-400
            bg-clip-text text-transparent">
            SHANKARESHWARI
          </h3>

          <p className="text-gray-300 text-sm md:text-base">
            Frontend Developer • Building Modern Web Interfaces
          </p>

        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6">

          {[
            { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/" },
            { icon: <Github size={20} />, link: "https://github.com/" },
            { icon: <Mail size={20} />, link: "mailto:yourmail@email.com" }
          ].map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full 
              bg-white/10 backdrop-blur-md
              border border-white/20
              hover:bg-pink-500
              hover:shadow-lg hover:shadow-pink-500/50
              transition duration-300"
            >
              {item.icon}
            </motion.a>
          ))}

        </div>
      </motion.div>

      {/* Divider */}
      <div className="w-full h-[1px] my-10 bg-gradient-to-r
        from-transparent via-pink-400 to-transparent opacity-60">
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-400 text-sm tracking-wide relative z-10">
        © {new Date().getFullYear()} Shankareshwari. All Rights Reserved.
      </div>

      {/* Scroll Button */}
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute right-6 bottom-6
        p-3 rounded-full 
        bg-gradient-to-r from-pink-500 to-purple-500
        shadow-lg shadow-pink-500/50
        hover:shadow-pink-500/80
        transition duration-300"
      >
        <ArrowUp size={18} />
      </motion.button>

    </footer>
  );
};

export default Footer;
