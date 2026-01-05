import { useState } from 'react'
import {Form_Creation_Api} from './APiStore'


const Form2 =()=>{

    
    const [formData,setFormData] = useState({
        Name:"",
        Phone:"",
        Email:"",
        Message:""
    })

    const handleChange = (e)=>{setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

    const handleSubmit = async (e)=>{e.preventDefault()

    try{
        const res = await fetch(Form_Creation_Api,{
          
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json()
        
        if(res.ok){
            alert("Message sent Successfully")
            setFormData({
                Name:"",
                Phone:"",
                Email:"",
                Message:""
            })
        }
        else{
            alert("something Went Wrong")
        }

    }
    catch(err){
        alert("server Error")
    }
}


    return(
         <div className="  mt-7 w-full flex flex-col justify-center items-center ">
            
          <form className="flex flex-col text-2xl" onSubmit={handleSubmit}>
        <label className="font-mono"
        >Name</label>

        <input className="border-b font-mono text-lg "
        type="text" placeholder="Enter Your Name"
        value={formData.Name}
        onChange={handleChange}
        name='Name' />

        <label className="font-mono"
        >Phone</label>

        <input className="border-b font-mono  text-lg"
         type="number" placeholder="62xxxxxx83"
         value={formData.Phone}
        onChange={handleChange} 
        name='Phone'/>

        <label  className="font-mono"
        > Email</label>

        <input className="border-b font-mono  text-lg"
        type="email"  placeholder="johnDoe@email.com"
        value={formData.Email}
        onChange={handleChange}
        name='Email'/>

        <label  className="font-mono"
        htmlFor="">How can i help you</label>

        <textarea className="border-b text-lg" 
        value={formData.Message}
        onChange={handleChange}
        name='Message'
        ></textarea>
  <button className=" transition-all ease-in-out delay-75 duration-150 hover:scale-150 hover:bg-slate-300 hover:text-white font-mono m-2 p-2 rounded-lg shadow-lg" type="submit"
        >Submit</button>

        </form>
        
        
        </div>
    )
}
export default Form2