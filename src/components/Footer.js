import React from "react";
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden
      bg-gradient-to-r from-[#1a0033] via-[#2d004d] to-[#0b1d5e]
      text-white py-16 px-6 sm:px-12 border-t border-pink-500/20">

      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-pink-500/5 blur-3xl opacity-40 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto flex flex-col md:flex-row
        justify-between items-center gap-10"
      >

        {/* LEFT SIDE */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-3xl font-bold text-pink-400 tracking-wide">
            SHANKARESHWARI
          </h3>
          <p className="text-gray-300 text-sm">
            Frontend Developer | Crafting Modern & Responsive Web Experiences
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
              whileHover={{ scale: 1.3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-pink-500/10
              border border-pink-400/30
              hover:bg-pink-500
              transition duration-300
              shadow-lg shadow-pink-500/30
              hover:shadow-pink-500/70"
            >
              {item.icon}
            </motion.a>
          ))}

        </div>
      </motion.div>

      {/* Divider Line Animation */}
      <div className="w-full h-[1px] bg-gradient-to-r
        from-transparent via-pink-400 to-transparent
        my-10 animate-pulse"></div>

      {/* Bottom Section */}
      <div className="relative text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Shankareshwari. All Rights Reserved.
      </div>

      {/* Scroll To Top Button */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute right-6 bottom-6
        p-3 rounded-full bg-pink-500
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
