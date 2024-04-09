import React, { useRef } from 'react'
import { motion, useViewportScroll} from "framer-motion"

function About() {

    const ref=useRef(null)
    const { scrollYProgress } = useViewportScroll();

   
    return (
        <motion.section id='about' className='max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        ref={ref}
        style={{  y: scrollYProgress * 200 , opacity: scrollYProgress }}
        >
            <h2 className='text-3xl text-white font-bold text-center mb-9'>About me</h2>
            <motion.p className='text-white mb-3 px-10'
            /* initial={{opacity: 0,y:200}}
            animate={{opacity: 1,y:0}}
            transition={{delay:0.2}} */
            >
                After completing my A/Ls, I made the decision to delve into programming. 
                I enrolled in various online courses to grasp the basic fundamentals of software engineering. 
                Subsequently, I pursued a <span className='font-semibold'>degree in Information Technology at the University of Colombo School of Computing (UCSC)</span>. 
                Throughout my academic journey, I've acquired a comprehensive understanding of essential concepts vital to the software industry, 
                such as agile development, data structures and algorithms, and object-oriented programming (OOP) principles. Currently, 
                I am a <span className='font-semibold'>final year undergraduate at UCSC</span>.
            </motion.p>
            <motion.p className='text-white mb-3 px-10'
            /* initial={{opacity: 0,y:100}}
            animate={{opacity: 1,y:0}}
            transition={{delay:0.2}} */
            >
                In my spare time, I indulge in learning new programming languages and technologies. <span className='font-semibold'>My primary focus</span> lies in mastering 
                the <span className='font-semibold'>MERN Stack</span>—a versatile combination of React.js, MongoDB, Node.js, and Express.js.
                Beyond coding, I find joy in a myriad of activities. Whether it's immersing myself in the latest blockbuster film, 
                Playing Cricket, delving into the depths of world history, or getting lost in the pages of a captivating book,
                 I thrive on exploration and discovery.
            </motion.p>
        </motion.section>
    )
}

export default About