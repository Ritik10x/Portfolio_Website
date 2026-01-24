import { useEffect, useState } from "react"
import { SlSettings } from "react-icons/sl"
import { PiCopyrightLight } from "react-icons/pi";


const NameFooter=()=>{

    const date= Date()
    console.log(date)
    const cur = '{'
    const ly = '}'

    
    return(
        <>
       <div className="p-4">
        <h1 className=" text-center 
        font-mono font-bold text-[137px] md:text-[245px]">RITIK SINGH</h1>
       </div> 
       <div className=" flex justify-between">
        <p className="font-mono pl-6">{date}</p>
        <p><span className="flex pr-4 font-mono"><PiCopyrightLight className="mt-[5px]"
         />{cur}All Right Reserved</span>
         <span className="pr-4 font-mono">2025 Ritik Singh{ly}</span>
        </p>
       </div>
       </>
    )
}
export default NameFooter