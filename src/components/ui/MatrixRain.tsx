import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MatrixRainProps {
  isActive: boolean;
  isOverlay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MatrixRain: React.FC<MatrixRainProps> = ({ isActive, isOverlay = true, className, style }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [targetOpacity, setTargetOpacity] = useState(0.7);
  const isExitingRef = useRef(false);

  useEffect(() => {
    const updateOpacity = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTargetOpacity(isDark ? 0.9 : 0.7);
    };
    updateOpacity();
    const observer = new MutationObserver(updateOpacity);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
      isExitingRef.current = false;
    } else {
      isExitingRef.current = true;
      // Allow time for drops to fall off screen
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    // Matrix characters - Katakana and Numerals (The Matrix style)
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
    const charArray = chars.split('');
    
    const fontSize = 24;
    const columns = canvas.width / fontSize;
    
    // Array of drops - one per column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * (canvas.height / fontSize));
    }

    // Get theme color
    const getThemeColor = () => {
      const style = getComputedStyle(document.documentElement);
      return style.getPropertyValue('--color-primary').trim() || '#0F0';
    };
    
    let themeColor = getThemeColor();

    // Watch for theme changes to update color dynamically
    const observer = new MutationObserver(() => {
      themeColor = getThemeColor();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class']
    });

    let lastDrawTime = 0;
    const fps = 12;
    const frameInterval = 1000 / fps;

    const draw = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(draw);

      const elapsed = timestamp - lastDrawTime;
      if (elapsed < frameInterval) return;

      lastDrawTime = timestamp - (elapsed % frameInterval);

      // Use destination-out to fade existing pixels to transparent
      // This creates the trail effect without a solid background
      ctx.globalCompositeOperation = 'destination-out';
      
      // Fade out faster when exiting to clear the screen of trails
      // Lower value = longer trails
      ctx.fillStyle = isExitingRef.current ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = themeColor;
      ctx.font = `${fontSize}px 'MS Gothic', 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Sending the drop back to the top randomly after it has crossed the screen
        if (y > canvas.height && Math.random() > 0.985) {
          // Only reset if NOT exiting
          if (!isExitingRef.current) {
            drops[i] = 0;
          }
        }

        // Incrementing Y coordinate
        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    const handleResize = () => {
      setCanvasSize();
      const newColumns = Math.ceil(window.innerWidth / fontSize);
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = Math.random() * (window.innerHeight / fontSize);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
          animate={{ 
            opacity: isOverlay ? 1 : targetOpacity,
            backgroundColor: isOverlay ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0)'
          }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 2.0 },
            backgroundColor: { duration: 2.0, ease: "easeInOut" }
          }}
          className={className || "fixed inset-0 z-[100] pointer-events-none"}
          style={style}
        >
          <canvas
            ref={canvasRef}
            className="block w-full h-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MatrixRain;
