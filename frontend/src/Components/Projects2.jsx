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
      "A full-stack personal portfolio showcasing projects and skills, featuring a Node.js backend, MongoDB storage, and smooth animated interactions.",
    live: "https://ritik-portfolio-site.netlify.app/",
    github: "https://github.com/Ritik10x/Portfolio_Website",
  },
];

const Project = () => {
  return (
    <div className="font-mono w-full grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="cursor-pointer rounded shadow-lg
          p-6 w-full h-[260px] border border-gray-200
          flex flex-col justify-between
          transition-all ease-in-out duration-150
          hover:scale-105 hover:bg-slate-300 hover:text-white hover:shadow-2xl"
        >
          {/* Title + Description */}
          <div>
            <h1 className="text-xl font-bold tracking-wide">
              {project.title}
            </h1>

            <p className="mt-3 text-sm leading-relaxed opacity-80">
              {project.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-current rounded
              text-sm font-semibold
              hover:bg-black hover:text-white transition"
            >
              Live
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-current rounded
              text-sm font-semibold
              hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
