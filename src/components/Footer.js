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
      py-8 sm:py-10 md:py-12 xl:py-16
      px-4 sm:px-8 md:px-16 xl:px-24
      border-t border-pink-500/20"
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto
        flex flex-col md:flex-row
        justify-between items-center
        gap-6 md:gap-8"
      >

        {/* LEFT SIDE */}
        <div className="text-center md:text-left space-y-1 sm:space-y-2">
          <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl
                         font-semibold text-pink-400 tracking-wide">
            SHANKARESHWARI
          </h3>

          <p className="text-gray-400
                        text-xs sm:text-sm md:text-base">
            Frontend Developer | Modern Web Interfaces
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-3 sm:gap-4 md:gap-5">

          {[
            { icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, link: "https://www.linkedin.com/" },
            { icon: <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, link: "https://github.com/" },
            { icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />, link: "mailto:yourmail@email.com" }
          ].map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 md:p-3.5
              rounded-full bg-pink-500/10
              border border-pink-400/30
              hover:bg-pink-500
              transition duration-300
              shadow-md shadow-pink-500/30"
            >
              {item.icon}
            </motion.a>
          ))}

        </div>
      </motion.div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r
        from-transparent via-pink-400 to-transparent
        my-4 sm:my-6 md:my-8 opacity-60">
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500
                      text-[10px] sm:text-xs md:text-sm tracking-wide">
        © {new Date().getFullYear()} Shankareshwari. All Rights Reserved.
      </div>

      {/* Scroll To Top */}
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute
        right-3 sm:right-4 md:right-6 xl:right-10
        bottom-3 sm:bottom-4 md:bottom-6 xl:bottom-8
        p-2 sm:p-2.5 md:p-3
        rounded-full bg-pink-500
        shadow-md shadow-pink-500/50
        transition duration-300"
      >
        <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      </motion.button>

    </footer>
  );
};

export default Footer;
