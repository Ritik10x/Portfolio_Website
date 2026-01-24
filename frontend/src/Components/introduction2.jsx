import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";


const Introduction2 = () => {
  return (
    <div className="font-mono space-y-6">

      {/* Role Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-block px-4 py-1 border border-gray-400 text-sm tracking-wide"
      >
        Full-Stack Developer
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-5xl font-extrabold leading-tight"
      >
        Hi, I’m <br />
        <span className="block">Ritik Singh</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg text-gray-700 max-w-xl"
      >
        A passionate fresher Full-Stack Developer who enjoys building clean,
        scalable web applications. Always learning, experimenting, and growing
        with modern technologies.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4 pt-4"
      >
        <a
          href="https://github.com/Ritik10x"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-black font-semibold flex items-center gap-2 hover:bg-black hover:text-white transition"
        >
          <FaGithub className="text-lg" />
          GitHub Profile
        </a>

        <a
          href="/Ritik_Jan_23_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"

          className="px-6 py-2 border border-black font-semibold hover:bg-black hover:text-white transition"
        >
          Resume
        </a>
      </motion.div>

    </div>
  );
};

export default Introduction2;
