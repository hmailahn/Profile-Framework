import { motion } from 'framer-motion';

interface BlobConfig {
  className: string;
  animation: {
    x: number[];
    y: number[];
    scale: number[];
  };
  duration: number;
  delay?: number;
}

interface AnimatedBlobBackgroundProps {
  className?: string;
  blobCount?: number;
  intensity?: 'low' | 'medium' | 'high';
}

const defaultBlobs: BlobConfig[] = [
  {
    className: "absolute -top-32 -right-32 w-96 h-96 bg-primary-300 dark:bg-primary-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-20",
    animation: {
      x: [0, 50, -30, 0],
      y: [0, -60, 40, 0],
      scale: [1, 1.2, 0.9, 1],
    },
    duration: 20,
  },
  {
    className: "absolute -bottom-32 -left-32 w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 dark:opacity-20",
    animation: {
      x: [0, -40, 50, 0],
      y: [0, 60, -30, 0],
      scale: [1, 1.1, 0.95, 1],
    },
    duration: 25,
    delay: 2,
  },
  {
    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20",
    animation: {
      x: [0, 30, -20, 0],
      y: [0, -40, 25, 0],
      scale: [1, 1.15, 0.85, 1],
    },
    duration: 18,
    delay: 1,
  },
  {
    className: "absolute top-20 left-20 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-55 dark:opacity-20",
    animation: {
      x: [0, 40, -25, 0],
      y: [0, 30, -45, 0],
      scale: [1, 1.3, 0.8, 1],
    },
    duration: 15,
    delay: 0.5,
  },
  {
    className: "absolute bottom-20 right-20 w-72 h-72 bg-cyan-300 dark:bg-cyan-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-55 dark:opacity-20",
    animation: {
      x: [0, -35, 45, 0],
      y: [0, -50, 35, 0],
      scale: [1, 1.25, 0.9, 1],
    },
    duration: 22,
    delay: 3,
  },
  {
    className: "absolute top-32 left-1/2 -translate-x-1/2 w-56 h-56 bg-orange-300 dark:bg-orange-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20",
    animation: {
      x: [0, 25, -35, 0],
      y: [0, 50, -30, 0],
      scale: [1, 1.4, 0.75, 1],
    },
    duration: 12,
    delay: 1.5,
  },
  {
    className: "absolute bottom-40 left-1/4 w-96 h-64 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-45 dark:opacity-20",
    animation: {
      x: [0, -50, 40, 0],
      y: [0, 35, -40, 0],
      scale: [1, 1.2, 0.85, 1],
    },
    duration: 28,
    delay: 4,
  },
  {
    className: "absolute top-1/2 right-1/4 w-48 h-48 bg-yellow-300 dark:bg-yellow-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20",
    animation: {
      x: [0, -30, 50, 0],
      y: [0, -25, 40, 0],
      scale: [1, 1.35, 0.8, 1],
    },
    duration: 16,
    delay: 2.5,
  },
  {
    className: "absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-300 dark:bg-violet-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 dark:opacity-20",
    animation: {
      x: [0, 60, -40, 0],
      y: [0, -70, 50, 0],
      scale: [1, 1.1, 0.95, 1],
    },
    duration: 24,
    delay: 5,
  },
];

export default function AnimatedBlobBackground({ 
  className = '', 
  blobCount,
  intensity = 'high' 
}: AnimatedBlobBackgroundProps) {
  // Detect if mobile device for performance optimization
  const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || 'ontouchstart' in window);
  
  // Get blobs to render based on count or intensity
  // Reduce blobs on mobile for better performance
  const effectiveIntensity = isMobile && !blobCount 
    ? (intensity === 'high' ? 'medium' : intensity === 'medium' ? 'low' : intensity)
    : intensity;
    
  const blobsToRender = blobCount 
    ? defaultBlobs.slice(0, blobCount)
    : effectiveIntensity === 'low' 
      ? defaultBlobs.slice(0, 3)
      : effectiveIntensity === 'medium'
        ? defaultBlobs.slice(0, 5)
        : defaultBlobs;

  // Adjust opacity multiplier based on intensity
  const opacityMultiplier = intensity === 'low' ? 0.6 : intensity === 'medium' ? 0.8 : 1;

  return (
    <div className={`absolute min-h-svh inset-0 overflow-hidden pointer-events-none ${className}`}>
      {blobsToRender.map((blob, index) => {
        // Adjust opacity in className if intensity is not high
        const adjustedClassName = intensity !== 'high' && blob.className.includes('opacity-')
          ? blob.className.replace(/opacity-(\d+)/, (_, opacity) => {
              const newOpacity = Math.round(Number(opacity) * opacityMultiplier);
              return `opacity-${newOpacity}`;
            })
          : blob.className;

        return (
          <motion.div
            key={index}
            className={`${adjustedClassName} will-change-transform`}
            animate={{
              x: blob.animation.x,
              y: blob.animation.y,
              scale: blob.animation.scale,
            }}
            transition={{
              duration: isMobile ? blob.duration * 1.5 : blob.duration, // Slower on mobile for smoother performance
              repeat: Infinity,
              ease: "easeInOut",
              delay: blob.delay || 0,
            }}
            style={{
              transform: 'translateZ(0)', // Force GPU acceleration
            }}
          />
        );
      })}
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-50/30 via-transparent to-transparent dark:from-primary-900/10 pointer-events-none" />
    </div>
  );
}

