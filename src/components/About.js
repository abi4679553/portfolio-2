import React from "react";

const About = () => {
  return (
    <section
      className="min-h-screen w-full
      bg-gradient-to-br from-[#12002f] via-[#2a0040] to-[#0b1d5e]
      text-white px-6 sm:px-10 md:px-16 py-20"
    >
      <div className="max-w-5xl mx-auto space-y-14">

        {/* TITLE */}
        <div className="space-y-3 animate-slideUp">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-pink-400">
            About Me
          </h2>
          <div className="w-16 h-[3px] bg-pink-400"></div>
        </div>

        {/* INTRO */}
        <p className="text-sm sm:text-base xl:text-lg text-gray-200 leading-relaxed animate-fadeIn">
          Hi, I’m <span className="text-pink-400 font-semibold">Shankareshwari</span>,
          a Frontend Developer currently pursuing my Bachelor of Engineering (BE)
          at <span className="font-medium">Nandha College of Technology, Erode</span>,
          graduating in <span className="font-medium">2027</span>.
        </p>

        {/* DESCRIPTION */}
        <p className="text-sm sm:text-base xl:text-lg text-gray-200 leading-relaxed animate-fadeIn delay-100">
          I focus on building clean, responsive, and user-friendly web interfaces
          using <span className="text-pink-400">React</span> and
          <span className="text-pink-400"> Tailwind CSS</span>. As a fresher,
          I am continuously improving my frontend development skills through
          hands-on practice and projects.
        </p>

        {/* SKILLS */}
        <div className="animate-slideUp delay-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-pink-400 mb-5">
            Skills & Technologies
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Git & GitHub",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2 rounded-full
                text-xs sm:text-sm xl:text-base
                border border-pink-400/40
                text-pink-200 bg-pink-500/10
                transition-colors duration-300
                hover:bg-pink-500 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* GOAL */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5 animate-fadeIn delay-300">
          <p className="text-sm sm:text-base xl:text-lg text-gray-200 leading-relaxed">
            🎯 My goal is to start my career as a
            <span className="text-pink-400 font-medium"> Frontend Developer</span>,
            gain hands-on industry experience, and contribute to real-world projects
            while continuously enhancing my technical and design skills.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
