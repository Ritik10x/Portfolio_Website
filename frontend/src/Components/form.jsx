
const Form =()=>{


    return(
         <div className=" mt-7 w-full flex flex-col justify-center items-center ">
            <div className=" p-4 w-1/3 flex flex-col">
        <label className="font-mono"
        >Name</label>

        <input className="border-b font-mono"
        type="text" placeholder="Enter Your Name"
         />

        <label className="font-mono"
        >Phone</label>

        <input className="border-b font-mono"
         type="number" placeholder="62xxxxxx83" 
         />

        <label  className="font-mono"
        > Email</label>

        <input className="border-b font-mono"
        type="email"  placeholder="johnDoe@email.com" 
       />

        <label  className="font-mono"
        htmlFor="">How can i help you</label>

        <textarea className="border-b"
      
        ></textarea>

        
        </div>
        <button className=" transition-all ease-in-out delay-75 duration-150 hover:scale-150 hover:bg-slate-300 hover:text-white font-mono m-2 p-2 rounded-lg shadow-lg" type="submit"
        >Submit</button>
        </div>
    )
}
export default Form