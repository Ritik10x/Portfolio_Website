import { motion } from "framer-motion";
import { FaLaptopCode, FaUniversity, FaProjectDiagram } from "react-icons/fa";

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -120,
    rotateY: -25,
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const bracesL = "{";
  const bracesR = "}";

  return (
    <section className="font-mono w-full px-16 pt-10 pb-40">
      {/* Heading */}
      <div className="mb-20 w-full text-center font-bold">
        <h1 className="text-8xl text-black">ABOUT</h1>
        <p className="text-xl mt-4 text-gray-600">
          {bracesL} Get to know me {bracesR}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        
        {/* Who I Am */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
          className="
            group relative
            border border-gray-200 rounded-xl
            p-9 space-y-5
            bg-black text-white
            transition-all duration-300
            hover:shadow-2xl
          "
        >
          {/* Accent line */}
          <span
            className="
              absolute left-0 top-0 h-full w-[3px]
              bg-white
              scale-y-0 origin-top
              group-hover:scale-y-100
              transition-transform duration-300
            "
          />

          <FaLaptopCode className="text-5xl" />
          <h2 className="text-2xl font-bold">Who I Am</h2>
          <p className="text-[15px] leading-relaxed text-gray-200">
            I’m <span className="font-semibold text-white">Ritik Singh</span>, a passionate{" "}
            <span className="font-semibold text-white">Full-Stack Developer</span> who enjoys
            building clean, scalable, and interactive web applications. I focus on writing
            maintainable code and crafting user-friendly digital experiences.
          </p>
        </motion.div>

        {/* What I Built */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
          className="
            group relative
            border border-gray-200 rounded-xl
            p-9 space-y-5
            bg-black text-white
            transition-all duration-300
            hover:shadow-2xl
          "
        >
          {/* Accent line */}
          <span
            className="
              absolute left-0 top-0 h-full w-[3px]
              bg-white
              scale-y-0 origin-top
              group-hover:scale-y-100
              transition-transform duration-300
            "
          />

          <FaProjectDiagram className="text-5xl" />
          <h2 className="text-2xl font-bold">What I Built</h2>
          <p className="text-[15px] leading-relaxed text-gray-200">
            I’ve built real-world projects such as{" "}
            <span className="font-semibold text-white">Pluto Play</span>, a video streaming
            platform, <span className="font-semibold text-white">Stream-GPT</span>, an
            AI-powered recommendation app, and this portfolio. These projects strengthened
            my frontend architecture, API handling, and performance optimization skills.
          </p>
        </motion.div>

        {/* Education & Internship */}
        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
          className="
            group relative
            border border-gray-200 rounded-xl
            p-9 space-y-5
            bg-black text-white
            transition-all duration-300
            hover:shadow-2xl
          "
        >
          {/* Accent line */}
          <span
            className="
              absolute left-0 top-0 h-full w-[3px]
              bg-white
              scale-y-0 origin-top
              group-hover:scale-y-100
              transition-transform duration-300
            "
          />

          <FaUniversity className="text-5xl" />
          <h2 className="text-2xl font-bold">Education & Internship</h2>
          <p className="text-[15px] leading-relaxed text-gray-200">
            I completed my{" "}
            <span className="font-semibold text-white">
              B.Tech / B.E. in Computer Science
            </span>{" "}
            from <span className="font-semibold text-white">Chandigarh University</span>.
            I also worked as a{" "}
            <span className="font-semibold text-white">Full-Stack Intern</span>, where I
            learned and applied the{" "}
            <span className="font-semibold text-white">MERN stack</span> while contributing
            to real projects and improving my development workflow.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
