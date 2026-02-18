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
      className="relative min-h-screen w-full
      bg-gradient-to-br from-[#1a0033] via-[#2d004d] to-[#0b1d5e]
      text-white px-6 md:px-16 py-24 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto space-y-16"
      >

        {/* TITLE */}
        <motion.div variants={item} className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold 
                         bg-gradient-to-r from-pink-400 to-purple-400
                         bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="w-20 h-[4px] bg-pink-500 rounded-full mx-auto md:mx-0"></div>
          <p className="text-gray-300 max-w-xl mx-auto md:mx-0">
            Feel free to reach out for opportunities, collaborations,
            or professional inquiries.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT INFO */}
          <motion.div variants={container} className="space-y-8">

            {[
              { icon: <Mail />, label: "Email", value: "abivengadajalam7708@email.com" },
              { icon: <Phone />, label: "Phone", value: "+91 7708749115" },
              { icon: <Linkedin />, label: "LinkedIn", value: "linkedin.com" },
              { icon: <Github />, label: "GitHub", value: "github.com" },
            ].map((itemData, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 
                p-4 rounded-xl bg-white/5 backdrop-blur-md
                border border-white/10 hover:border-pink-400/40
                transition duration-300"
              >
                <div className="p-3 rounded-full bg-pink-500/20 text-pink-400">
                  {itemData.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400">{itemData.label}</p>
                  <span className="hover:text-pink-400 transition">
                    {itemData.value}
                  </span>
                </div>
              </motion.div>
            ))}

          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            variants={item}
            onSubmit={handleclick}
            className="space-y-6 p-8 rounded-2xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-2xl"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-transparent
              border border-white/20 focus:outline-none
              focus:border-pink-400 focus:ring-2 focus:ring-pink-400
              transition"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-transparent
              border border-white/20 focus:outline-none
              focus:border-pink-400 focus:ring-2 focus:ring-pink-400
              transition"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-lg bg-transparent
              border border-white/20 focus:outline-none
              focus:border-pink-400 focus:ring-2 focus:ring-pink-400
              transition"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 rounded-full
              bg-gradient-to-r from-pink-500 to-purple-500
              hover:from-pink-600 hover:to-purple-600
              shadow-lg shadow-pink-500/40
              hover:shadow-purple-500/50
              transition-all duration-300
              font-semibold tracking-wide"
            >
              Send Message 🚀
            </motion.button>
          </motion.form>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
