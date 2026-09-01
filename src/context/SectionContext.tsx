import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { type SectionId, sections } from '../constants/sections';

interface SectionContextType {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  sections: SectionId[];
  isScrollLocked: boolean;
  setScrollLocked: (locked: boolean) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isScrollLocked, setScrollLocked] = useState(false);
  // Reset to home when leaving the home page? 
  // Or keep state? 
  // If we navigate to /project/1 and back, we might want to be at the same place?
  // For now, let's just keep the state.

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection, sections, isScrollLocked, setScrollLocked }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};
