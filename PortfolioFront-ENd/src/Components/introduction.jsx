import React from 'react'

const Introduction = () => {

  let x = '{'
  let y = '}'
  return (
    <div className='w-3/4  text-2xl font-mono font-bold justify-center text-start p-3.5 space-y-3.5'>
        <h2 className='text-3xl'>
            {x}Hi, I'm RITIK SINGH{y}

        </h2>
        
      <li>A passionate Full-Stack Developer who loves building clean, scalable, and impactful digital products.</li>

     <li> I work across the full web stack using React, Node.js, and MongoDB, transforming ideas into elegant, high-performance applications.</li>
      
       <li> Curious, detail-driven, and always improving — I don’t just write code, I build solutions that feel intuitive, look great, and make a difference
      </li>
    </div>
  )
}

export default Introduction
