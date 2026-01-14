import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";

import { SiJavascript, SiExpress, SiRedux, SiMongodb, SiPostman } from "react-icons/si";

import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";

import { motion } from "framer-motion";


const skills = [
  { icon: <TiHtml5 />, name: "HTML5" },
  { icon: <DiCss3 />, name: "CSS3" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <TbBrandVite />, name: "Vite" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
];

const Skills = () => {
  const bracesL = "{";
  const bracesR = "}";

  return (
    <>
      {/* Heading */}
      <div className="mb-14 font-mono w-full text-center font-bold">
        <h1 className="text-8xl">SKILLS</h1>
        <p className="text-xl mt-3 opacity-70">
          {bracesL} Tech I work with - play drag drop icon {bracesR}
        </p>
      </div>

      {/* Skills Grid */}
      <div className="w-full px-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 place-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={{ top: -500, bottom: 500, left: -500, right: 500 }}
            initial={{ y: -80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.05,
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{ y: -6 }}
            className="cursor-grab active:cursor-grabbing
                       flex flex-col items-center gap-3
                       font-mono"
          >
            {/* Icon */}
            <div className="text-7xl">
              {skill.icon}
            </div>

            {/* Skill Name */}
            <p className="text-lg font-semibold tracking-wide">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Skills;
