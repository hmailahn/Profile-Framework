import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface IntroContextType {
  showIntro: boolean;
  introComplete: boolean;
}

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export const IntroProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Show rain for 2 seconds before starting to fade it out
    const timer = setTimeout(() => {
      setShowIntro(false);
      // Allow a bit of time for the fade out to start before triggering content animations
      setTimeout(() => {
        setIntroComplete(true);
      }, 100); 
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <IntroContext.Provider value={{ showIntro, introComplete }}>
      {children}
    </IntroContext.Provider>
  );
};

export const useIntro = () => {
  const context = useContext(IntroContext);
  if (context === undefined) {
    throw new Error('useIntro must be used within a IntroProvider');
  }
  return context;
};
