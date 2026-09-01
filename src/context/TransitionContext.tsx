import React, { createContext, useContext, useState, type ReactNode } from 'react';
import MatrixRain from '../components/ui/MatrixRain';

interface TransitionContextType {
  isTransitioning: boolean;
  startTransition: (callback: () => void) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = (callback: () => void) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);

    // Wait for the rain to fill the screen (fade in + rain fall time)
    setTimeout(() => {
      // Perform the actual navigation or state change
      callback();
      setIsTransitioning(false);
    }, 1200);
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
      <MatrixRain isActive={isTransitioning} />
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};
