import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleclick = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vdgyeua",
        "template_mpi4jv3",
        formData,
        "2QSeB0RVbOAQhT2LQ"
      )
      .then(() => {
        alert("Email sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("FAILED...", error.text);
      });
  };

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

            <motion.div variants={item} whileHover={{ scale: 1.05 }} className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-pink-500/10 border border-pink-400/30 backdrop-blur-md">
                <Mail className="text-pink-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <span className="hover:text-pink-400 transition">
                  abivengadajalam7708@email.com
                </span>
              </div>
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.05 }} className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-pink-500/10 border border-pink-400/30 backdrop-blur-md">
                <Phone className="text-pink-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <span className="hover:text-pink-400 transition">
                  +91 7708749115
                </span>
              </div>
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.05 }} className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-pink-500/10 border border-pink-400/30 backdrop-blur-md">
                <Linkedin className="text-pink-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <span className="hover:text-pink-400 transition">
                  linkedin.com
                </span>
              </div>
            </motion.div>

            <motion.div variants={item} whileHover={{ scale: 1.05 }} className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-pink-500/10 border border-pink-400/30 backdrop-blur-md">
                <Github className="text-pink-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <span className="hover:text-pink-400 transition">
                  github.com
                </span>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT FORM */}
          <div className="space-y-6">

            <motion.form
              variants={item}
              className="space-y-6 p-6 sm:p-8 rounded-2xl
              bg-white/5 border border-white/10 backdrop-blur-lg
              shadow-xl"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-transparent
                border border-white/20 focus:outline-none
                focus:border-pink-400 focus:ring-1 focus:ring-pink-400
                transition"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-transparent
                border border-white/20 focus:outline-none
                focus:border-pink-400 focus:ring-1 focus:ring-pink-400
                transition"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-transparent
                border border-white/20 focus:outline-none
                focus:border-pink-400 focus:ring-1 focus:ring-pink-400
                transition"
              ></textarea>
            </motion.form>

            {/* RIGHT ALIGNED BUTTON - 130px SHIFT */}
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                onClick={handleclick}
                className="
                px-10 py-3 rounded-full
                bg-gradient-to-r from-pink-500 to-purple-500
                hover:from-pink-600 hover:to-purple-600
                shadow-lg shadow-pink-500/40
                hover:shadow-purple-500/50
                transition-all duration-300
                font-semibold tracking-wide
                mr-[130px]
                "
              >
                Send Message
              </motion.button>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
