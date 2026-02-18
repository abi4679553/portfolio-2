import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Online Voting System",
    description:
      "A secure and responsive web-based voting application built using HTML, CSS and JavaScript with proper form validation and user-friendly UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built using React.js and Tailwind CSS showcasing projects, skills and professional details.",
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "Frontend Internship Project",
    description:
      "Developed responsive UI components and integrated APIs during internship at SanTechnovation, focusing on performance and user experience.",
    tech: ["React.js", "API Integration", "UI/UX"],
    github: "https://github.com/",
    live: "#",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Projects = () => {
  return (
    <section className="relative min-h-screen w-full
      bg-gradient-to-br from-[#1a0033] via-[#2d004d] to-[#0b1d5e]
      text-white px-6 md:px-16 py-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto"
      >

        {/* 🔥 PINK TITLE */}
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-extrabold tracking-wide text-center mb-16 text-pink-400"
        >
          Projects
        </motion.h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl
              border border-white/10
              rounded-xl p-6
              hover:border-pink-400/40
              hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]
              transition duration-300"
            >

              <h3 className="text-xl font-semibold mb-4 text-pink-300">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full
                    bg-pink-500/30 text-pink-100">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm
                  bg-white/10 px-4 py-2 rounded-full
                  hover:bg-pink-500 transition"
                >
                  <Github size={16} />
                  Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm
                  bg-pink-500 px-4 py-2 rounded-full
                  text-white"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              </div>

            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
};

export default Projects;
