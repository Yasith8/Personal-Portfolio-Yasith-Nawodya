import './App.css'
import MainPage from './components/MainPage'
import Header from './components/Header'
import About from './components/About'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Projects from './components/Projects';

function App() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = e => {
      const throttleTimeout = 16;
      if (!throttleTimeout) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        return;
      }
      const now = Date.now();
      if (now - lastMouseMoveTime >= throttleTimeout) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        lastMouseMoveTime = now;
      }
    };

    let lastMouseMoveTime = 0;
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const cursorVariant = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    }
  };


  return (
   <div className='min-w-screen min-h-fit h-fit bg-[#121120] px-5 flex flex-col items-center'>
    <motion.div
        className='cursor blur-[5rem]'
        variants={cursorVariant}
        animate="default"
      />
    <Header/>
    <MainPage/>
    <About/>
    <Projects/>
   </div>
  )
}

export default App
