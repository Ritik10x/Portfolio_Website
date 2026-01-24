import { motion } from "framer-motion";
import Introduction2 from "./introduction2";
import ProfilePicture2 from "./ProfilePhoto2";
import ThreeBackgroundDouble from "./ThreeBackgroundDouble";

const HeroSectionDouble = () => {
  return (
    <section className="relative min-h-screen flex items-center px-20 overflow-hidden mt-25 md:mt-0">
      <ThreeBackgroundDouble />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <Introduction2 />
        <ProfilePicture2 />
      </motion.div>
    </section>
  );
};

export default HeroSectionDouble;
