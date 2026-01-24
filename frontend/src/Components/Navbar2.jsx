import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaBriefcase,
  FaProjectDiagram,
  FaTools,
  FaUser,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavBar2 = () => {
  const x = "{";
  const y = "}";

  const [open, setOpen] = useState(false);

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
      <div className="relative flex items-center justify-between md:justify-center px-6 py-4 w-full">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="font-mono font-extrabold text-lg leading-tight text-black md:absolute md:left-8"
        >
          Trust Me, <br />
          <u>I’m an Engineer</u>
        </motion.div>

        {/* Desktop / Tablet Nav */}
        <ol className="hidden md:flex font-mono gap-6 lg:gap-8 px-8 py-3 rounded-2xl border border-gray-200 bg-white shadow-md">
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
                className="flex items-center gap-2 text-black font-bold tracking-wide"
              >
                <span className="text-sm opacity-70 group-hover:opacity-100 transition">
                  {item.icon}
                </span>
                <span>{x}{item.name}{y}</span>
              </a>

              <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black
                           group-hover:w-full transition-all duration-300"
              />
            </motion.li>
          ))}
        </ol>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-black"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <ul className="flex flex-col px-6 py-4 gap-4 font-mono">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 text-black font-bold"
                  >
                    {item.icon}
                    {x}{item.name}{y}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar2;
