import React from "react"
import { Link } from "react-router-dom"
const NavBar=()=>{
let x = '{'
  let y = '}'
    return(
    <div className=" flex justify-center p-2 w-full shadow-lg fixed z-1 bg-white ">
      <span className="absolute left-9 top-2 font-extrabold text-xl font-mono"
      > {x }MERN STACK <br /> DEVELOPER {y}</span> 
        <ol className=" font-mono
        w-[37%] h-[45px] border  border-gray-100 shadow-lg rounded-2xl   mt-3 flex justify-center items-center">
            <li className="transition-all delay-100 duration-300  hover:text-3xl  ease-in-out cursor-pointer   "><a href="#home">{x}Home</a></li>{y}
            <li className="transition-all delay-100 duration-300  hover:text-3xl ease-in-out  cursor-pointer  ml-6"><a href='#Experience'>{x}Experience</a></li>{y}
            <li className=" transition-all delay-100 duration-300  hover:text-3xl ease-in-out  cursor-pointer ml-6"><a href='#Project'>{x}Project</a></li>{y}
            <li className=" transition-all delay-100 duration-300  hover:text-3xl ease-in-out  cursor-pointer ml-6"><a href='#Skills'>{x}Skills</a></li>{y}
            <li className=" transition-all delay-100 duration-300  hover:text-3xl ease-in-out  cursor-pointer ml-6"><a href='#Contact'>{x}About</a></li>{y}
           </ol>
    
    </div>
    )
}
export default NavBar