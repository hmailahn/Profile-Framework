import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hero -> About Transitions
  const { scrollYProgress: heroProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(heroProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.4], [1, 0.9]);
  
  const aboutOpacity = useTransform(heroProgress, [0.3, 0.6], [0, 1]);
  const aboutScale = useTransform(heroProgress, [0.3, 0.6], [1.1, 1]);
  const aboutPointerEvents = useTransform(heroProgress, (v) => v > 0.4 ? 'auto' : 'none');

  return (
    <div className="relative w-full">
      <div ref={containerRef} className="relative z-0 h-[250vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
             <motion.div 
               style={{ opacity: heroOpacity, scale: heroScale }} 
               className="absolute inset-0 z-0 h-full w-full flex items-center justify-center bg-transparent"
             >
                <div id="home" className="absolute top-0 w-full h-full"> 
                   <Hero />
                </div>
             </motion.div>

             <motion.div 
               style={{ opacity: aboutOpacity, scale: aboutScale, pointerEvents: aboutPointerEvents }} 
               className="absolute inset-0 z-10 h-full w-full flex items-center justify-center"
             >
                <div className="w-full h-full overflow-y-auto overflow-x-hidden bg-background">
                    <About />
                </div>
             </motion.div>
        </div>
        
        <div id="about" className="absolute top-[50%] left-0 w-full h-1 pointer-events-none" />
        
      </div>

      <div id="work" className="relative z-10">
        <Experience />
      </div>
      <div id="projects" className="relative z-10 bg-background">
        <Projects />
      </div>
    </div>
  );
}

