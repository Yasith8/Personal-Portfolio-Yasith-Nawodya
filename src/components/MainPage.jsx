import React from 'react'
import { motion} from "framer-motion"
import img from '../assets/img.jpg'
import LK from '../assets/LK.svg'

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import pdf from '../assets/Yasith-Nawodya-CV .pdf'


function MainPage() {
  const downloadHandler=()=>{
    const link = document.createElement('a');
    link.href = pdf;
    
    link.download = 'Yasith Nawodya CV.pdf';
  
    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);
  }
  return (
    <div className='md:px-[15rem]'>
      <motion.div 
      className='flex flex-col items-center justify-center'
      initial={{opacity:0,scale:0}}
      animate={{opacity:1,scale:1}}
      transition={{ type: 'tween', duration:0.8 }}
      >
        <img src={img}  className='w-[5.5rem] h-[5.5rem] rounded-full border-[0.3rem] border-white' style={{ zIndex: 1}}/>
        <img src={LK} className='w-[1.5rem] relative -top-3 left-0' style={{ zIndex: 1}}/>
      </motion.div>

      <motion.div className='font-bold text-[1.5rem] md:text-[3rem] text-white flex flex-col items-center'
      initial={{y:100, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{delay:0.5}}
      
      >
      <h1 style={{ zIndex: 1}}>Hi, I'm Yasith👋</h1>
      <h1 style={{ zIndex: 1}}>Full Stack Developer Based on Sri Lanka</h1>
      </motion.div>
      <div className='flex items-center justify-center'>
        <div className='md:w-[25rem] md:h-[25rem] bg-[#64403b] rounded-full blur-[10rem] absolute top-16 left-[50rem]' style={{ zIndex: 0 }}></div>
        <div className='md:w-[25rem] md:h-[25rem] bg-[#422277] rounded-full blur-[10rem] absolute top-16 left-[30rem]' style={{ zIndex:0}}></div>
      </div>
      <motion.div className='flex items-center justify-center gap-3 mt-3'
      initial={{y:100, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{delay:0.5}}
      >
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='p-2 px-3 bg-white flex items-center justify-between w-[9rem] rounded-full z-10'
        onClick={downloadHandler}
        ><span className='font-semibold text-[0.8rem]'>Download CV</span><MdOutlineFileDownload/>
        </motion.button>
        <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='p-3 rounded-full bg-black text-white z-10' href="https://www.linkedin.com/in/yasith-nawodya-86822b208/" target='_blank'><BsLinkedin/></motion.a>
        <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='p-3 rounded-full bg-black text-white z-10' href="https://github.com/Yasith8" target='_blank'><FaGithub/></motion.a>
      </motion.div>
    </div>
  )
}

export default MainPage