import React from 'react'
import Introduction from './introduction'
import ProfilePicture from './ProfilePhoto'


const HeroSection = () => {
  return (
    <div className=' flex p-20' >
      <Introduction/>
      <ProfilePicture/>
    </div>
  )
}

export default HeroSection
