import { motion } from "framer-motion";
import porPic from "../assets/images/PortfolioPic.jpg";

const ProfilePicture2 = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Background block (fills emptiness) */}
        <div className="absolute -inset-4 border border-gray-300"></div>

        <motion.img
          src={porPic}
          alt="Ritik Singh"
          className="relative w-72 h-80 object-cover grayscale hover:grayscale-0 transition duration-500"
        />
      </motion.div>
    </div>
  );
};

export default ProfilePicture2;
