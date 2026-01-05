import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const letters = "Experience".split("");

  const paragraph = `During my internship at Future Finder, I worked closely with the development team to design and build dynamic web applications using React.js, Node.js, and MongoDB. I contributed to creating responsive user interfaces, integrating APIs, and managing backend logic to deliver seamless user experiences. I also focused on performance optimization, authentication setup, and debugging to ensure smooth deployment and scalability. This internship helped me strengthen my full-stack development skills, sharpen my problem-solving mindset, and gain real-world exposure to collaborative software development workflows.`;

  const words = paragraph.split(" ");

  // Random crumb-like directions
  const getRandomDirection = () => {
    const directions = [
      { x: -200, y: -100 },
      { x: 200, y: -150 },
      { x: -150, y: 150 },
      { x: 150, y: 200 },
      { x: 0, y: -200 },
      { x: 0, y: 200 },
      { x: -250, y: 0 },
      { x: 250, y: 0 },
    ];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  // Animation control and intersection observer
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.set("hidden");
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      {/* Animated Heading */}
      <motion.h1
        className="font-bold text-5xl mb-6"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { y: "-100vh", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { type: "spring", damping: 10, stiffness: 100 },
              },
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="tracking-wider text-xl font-mono w-[70%] border border-gray-300 rounded-2xl shadow-md p-8 bg-white/30 backdrop-blur-md leading-relaxed"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.04 } },
        }}
      >
        {words.map((word, i) => {
          const dir = getRandomDirection();
          return (
            <motion.span
              key={i}
              className="inline-block mr-2"
              variants={{
                hidden: { x: dir.x, y: dir.y, opacity: 0, rotate: 10 },
                visible: {
                  x: 0,
                  y: 0,
                  opacity: 1,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                    duration: 1.2,
                  },
                },
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.p>
    </div>
  );
};

export default Experience;
