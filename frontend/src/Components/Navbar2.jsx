import { motion } from "framer-motion";
import {
  FaHome,
  FaBriefcase,
  FaProjectDiagram,
  FaTools,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

const NavBar = () => {
  const x = "{";
  const y = "}";

  const navItems = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "Experience", href: "#Experience", icon: <FaBriefcase /> },
    { name: "Projects", href: "#Project", icon: <FaProjectDiagram /> },
    { name: "Skills", href: "#Skills", icon: <FaTools /> },
    { name: "About", href: "#About", icon: <FaUser /> },
    { name: "Contact", href: "#Contact", icon: <FaEnvelope /> },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm"
    >
      <div className="relative flex justify-center items-center py-4">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute left-8 font-mono font-extrabold text-lg leading-tight text-black"
        >
          {x} MERN STACK <br /> DEVELOPER {y}
        </motion.div>

        {/* Nav Links */}
        <ol className="font-mono flex gap-8 px-10 py-3 rounded-2xl border border-gray-200 bg-white shadow-md">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.08 }}
              className="relative group"
            >
              <a
                href={item.href}
                className="flex items-center gap-2 text-black font-semibold tracking-wide"
              >
                {/* Icon */}
                <span className="text-sm opacity-70 group-hover:opacity-100 transition">
                  {item.icon}
                </span>

                {/* Text */}
                <span>{x}{item.name}{y}</span>
              </a>

              {/* Hover underline */}
              <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black
                           group-hover:w-full transition-all duration-300"
              />
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.nav>
  );
};

export default NavBar;
