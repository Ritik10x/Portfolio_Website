import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { SiExpress, SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { motion } from "framer-motion";


const Skills=()=>{
const bracesL = '{'
const bracesR = '}'
    return(
        <>
        <div className= " mb-7 font-mono w-full text-center font-bold text-8xl">
            <h1>SKILLS</h1>
            <h1 className="text-xl font-mono" >{bracesL}Can you please rearrange in the row and col manner{bracesR}</h1>
        </div>
        
        <div className=" mb-8 w-full   place-items-center grid grid-cols-4 gap-8">

            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                <TiHtml5/></motion.div>
            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                < DiCss3 /></motion.div>
            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                < SiJavascript /></motion.div>
            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                < FaReact /></motion.div>
            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                < SiRedux /></motion.div>
            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                < RiTailwindCssFill /></motion.div>
            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                < FaBootstrap /></motion.div>
            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                < TbBrandVite /></motion.div>
            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                < FaGitAlt /></motion.div>
            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                < FaGithub /></motion.div>
            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                < FaNodeJs /></motion.div>
            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                < SiExpress /></motion.div>
            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                <SiMongodb /></motion.div>
            <motion.div drag 
            className="text-center text-8xl font-mono  w-[5%] ">
                <SiPostman /></motion.div>
        </div>
        </>
    )
}
export default Skills