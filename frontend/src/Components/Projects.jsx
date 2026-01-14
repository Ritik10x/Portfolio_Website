import { motion } from "framer-motion";

const projects = [
  {
    title: "Pluto Play",
    description:
      "A modern video streaming platform with video feed, search, and real-time live chat, optimized using Redux and API caching for smooth performance.",
    live: "https://plutoplay.netlify.app/",
    github: "https://github.com/Ritik10x/Pluto-Play",
  },
  {
    title: "Stream-GPT",
    description:
      "An AI-powered movie recommendation app delivering personalized suggestions through prompt engineering with efficient state and API handling.",
    live: "https://stream-gpt-ai.netlify.app/",
    github: "https://github.com/Ritik10x/Stream-GPT",
  },
  {
    title: "Portfolio Website",
    description:
      "A full-stack personal portfolio showcasing projects and skills, featuring smooth animations and a clean developer-focused design.",
    live: "https://ritik-portfolio-site.netlify.app/",
    github: "https://github.com/Ritik10x/Portfolio_Website",
  },
];

const Project = () => {
  return (
    <section className="font-mono w-full px-16 pt-10 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ x: -120, rotateY: -25, opacity: 0 }}
            whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            whileHover={{ y: -6 }}
            className="
              cursor-pointer rounded-xl
              p-7 h-[270px]
              border border-gray-200
              flex flex-col justify-between
              bg-white text-black
              transition-all duration-300
              hover:bg-black hover:text-white
              hover:shadow-2xl
            "
          >
            {/* Title + Description */}
            <div>
              <h1 className="text-xl font-bold tracking-wide">
                {project.title}
              </h1>

              <p className="mt-4 text-sm leading-relaxed opacity-80">
                {project.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4 py-2 rounded border border-current
                  text-sm font-semibold
                  transition
                  hover:bg-white hover:text-black
                "
              >
                Live
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4 py-2 rounded border border-current
                  text-sm font-semibold
                  transition
                  hover:bg-white hover:text-black
                "
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
