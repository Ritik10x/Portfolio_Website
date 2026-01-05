import porPic from "../pictures/portfolioPic.JPG"
  

const ProfilePicture=()=>{

    return(
        
        
        <div className="w-full flex justify-center items-center">
        
        <div className="flex justify-center w-1/2
        "><img className="w-full p-12   " 
         src={porPic} alt="image"/>
         </div>
        </div>
        
    )
}
export default ProfilePicture