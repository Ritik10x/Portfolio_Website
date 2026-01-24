import { MdArrowOutward } from "react-icons/md";
import { easeInOut, motion } from "framer-motion";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {

    return (
        <>
            <div className=" p-4 m-2 w-full flex flex-col md:flex-row md:justify-end ">
                <div className="mt-2 md:mr-7 ">
                    <motion.h1
                        drag
                        dragConstraints={
                            {
                                left: 0,
                                right: 1000,
                                top: 0,
                                bottom: 0
                            }
                        }
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}

                        className="font-mono font-bold text-xl md:text-4xl "
                    > <span className="flex "><IoCallOutline className="mt-1.5" />+91 6230918137</span></motion.h1>
                    <h1 className="font-mono font-bold text-xl md:text-4xl md:mr-5"
                    ><span className="flex "><AiOutlineMail className="mt-1.5 " />ritiksingh60101@gmail.com</span></h1>
                    <ol className="mt-3
            flex justify-between">
                        <li><span className="flex border-b font-mono">
                            <a href="https://www.linkedin.com/in/ritik-singh-5602b7233/" target="_blank"
                            >LINKDIN</a>
                            <MdArrowOutward className="mt-[3px]" /></span></li>
                        <li><span className="flex border-b font-mono">TELEGRAM
                            <MdArrowOutward className="mt-[3px]" /></span></li>
                        <li><span className="flex border-b font-mono">
                            <a href="https://github.com/Ritik10x" target="_blank">GIT-HUB</a>
                            <MdArrowOutward className="mt-[3px]" /></span></li>



                    </ol>

                </div>





            </div>


        </>
    )
}
export default Footer