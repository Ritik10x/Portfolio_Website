import Footer from "./footer"
import Form from "./form"
import Form2 from "./form2"
import NameFooter from "./NameFooter"

const Contact=()=>{

    return(
        <>
        <div className=" w-full flex flex-col justify-center text-center"> 
            <h2 className="font-bold text-xl font-mono">LET'S START THE CONVERSATION</h2>
            <h1 className="font-bold text-5xl md:text-8xl font-mono">GREAT IDEAS</h1>
            <h3 className="font-mono tracking-[18px]">START WITH</h3>
            <h1 className=" font-bold text-5xl md:text-8xl font-mono">GREAT COLLABORATION</h1>
        </div>
       {/* <Form/> */}
       <Form2/>
       <Footer/>
       <NameFooter/>
        </>
    )
}
export default Contact