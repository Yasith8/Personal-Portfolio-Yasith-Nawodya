import React from 'react'
import { motion} from "framer-motion"
import '../App.css'

function Header() {
  return (
    <motion.div className='fixed glass-container top-6 left-1/2 flex gap-5 py-2 px-5 rounded-full'
    initial={{opacity:0, y:-100, x:'-50%'}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.5}}
    >
      <h2><a className='text-[#ffffffa1] hover:text-white' href="#home">Home</a></h2>
      <h2><a className='text-[#ffffffa1] hover:text-white' href="#about">About</a></h2>
      <h2><a className='text-[#ffffffa1] hover:text-white' href="#project">Projects</a></h2>
      <h2><a className='text-[#ffffffa1] hover:text-white' href="#skills">Skills</a></h2>
      <h2><a className='text-[#ffffffa1] hover:text-white' href="#contact">Contact</a></h2>
    </motion.div>
  )
}

export default Header