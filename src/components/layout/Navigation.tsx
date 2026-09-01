import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon, FiFeather, FiDroplet, FiChevronDown } from 'react-icons/fi';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { type ThemeOption, useTheme } from '../../hooks/useTheme';
import { personalInfo } from '../../data/portfolio';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#work' },
  { label: 'Projects', href: '#projects' },
];

const themeOptions: { value: ThemeOption; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'cool', label: 'Cool' },
  { value: 'warm', label: 'Warm' },
];

const themeCards = [
  {
    value: 'light' as ThemeOption,
    label: 'Light',
    description: 'Bright & Crisp',
    icon: <FiSun />,
    accent: 'var(--color-primary)',
  },
  {
    value: 'dark' as ThemeOption,
    label: 'Dark',
    description: 'Deep Contrast',
    icon: <FiMoon />,
    accent: 'var(--color-accent)',
  },
  {
    value: 'cool' as ThemeOption,
    label: 'Cool',
    description: 'Frosted Blues',
    icon: <FiDroplet />,
    accent: 'var(--color-primary)',
  },
  {
    value: 'warm' as ThemeOption,
    label: 'Warm',
    description: 'Cozy Autumn',
    icon: <FiFeather />,
    accent: 'var(--color-primary)',
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => (typeof window !== 'undefined' ? window.scrollY > 50 : false));
  const scrollToSection = useScrollToSection();
  const { theme, setTheme } = useTheme();
  const themeDropdownRef = useRef<HTMLDivElement | null>(null);
  const themeCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearThemeCloseTimer = useCallback(() => {
    if (themeCloseTimeout.current) {
      clearTimeout(themeCloseTimeout.current);
      themeCloseTimeout.current = null;
    }
  }, []);

  const scheduleThemeClose = useCallback(() => {
    if (!isThemeOpen) {
      return;
    }

    clearThemeCloseTimer();
    themeCloseTimeout.current = window.setTimeout(() => {
      setIsThemeOpen(false);
      themeCloseTimeout.current = null;
    }, 500);
  }, [clearThemeCloseTimer, isThemeOpen]);

  // Only show background when mobile menu is open, otherwise keep transparent
  const hasBg = isOpen;
  
  const navBgStyle = {
    backgroundColor: hasBg
      ? 'color-mix(in srgb, var(--color-surface, #ffffff) 88%, transparent)'
      : 'transparent',
    borderBottom: hasBg
      ? '1px solid var(--color-border, rgba(0,0,0,0.08))'
      : '1px solid transparent',
    backdropFilter: hasBg ? 'blur(10px)' : undefined,
    transition: 'background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease',
  } as const;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isThemeOpen) {
      clearThemeCloseTimer();
      return undefined;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
        clearThemeCloseTimer();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      clearThemeCloseTimer();
    };
  }, [isThemeOpen, clearThemeCloseTimer]);

  useEffect(() => () => clearThemeCloseTimer(), [clearThemeCloseTimer]);

  return (
    <motion.nav
      initial={scrolled ? { y: 0 } : { y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 pt-2 md:pt-4 ${
        hasBg ? 'shadow-lg' : ''
      }`}
      style={navBgStyle}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-gradient cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" onClick={() => scrollToSection('#home')}>
              <span className="text-gradient">{personalInfo.name}</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center h-full divide-x divide-gray-200/60 dark:divide-gray-700/60">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium cursor-pointer hover:bg-primary-50 dark:hover:bg-primary-900/10"
                whileHover={{}}
                whileTap={{}}
                onClick={() => scrollToSection(item.href)}
              >
                <div className="block px-2 py-1">
                  {item.label}
                </div>
              </motion.div>
            ))}

            <motion.div
              className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium cursor-pointer hover:bg-primary-50 dark:hover:bg-primary-900/10"
              whileHover={{}}
              whileTap={{}}
            >
              <Link to="/contact" className="block px-2 py-1">Let's Talk</Link>
            </motion.div>

            <div
              ref={themeDropdownRef}
              className="relative hidden md:block ml-4 h-full"
              style={{ minWidth: 110 }}
              onMouseEnter={() => {
                clearThemeCloseTimer();
                setIsThemeOpen(true);
              }}
              onMouseLeave={scheduleThemeClose}
            >
              <button
                type="button"
                className="flex items-center gap-2 h-full py-4 text-sm font-medium cursor-pointer select-none bg-transparent focus:outline-none"
                style={{
                  color: 'var(--color-text)',
                }}
                aria-haspopup="menu"
                aria-expanded={isThemeOpen}
              >
                <span>Theme: {themeOptions.find((opt) => opt.value === theme)?.label ?? 'Dark'}</span>
                <FiChevronDown
                  className="transition-transform"
                  style={{ transform: isThemeOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
              <AnimatePresence>
                {isThemeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 md:left-auto md:right-0 top-full -mt-2 pt-1 z-50 -translate-x-1/2 md:translate-x-0"
                  >
                    <div
                      className="grid grid-cols-2 gap-3 p-4 rounded-2xl shadow-xl"
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--color-surface) 96%, transparent)',
                        maxWidth: '380px',
                        minWidth: '320px',
                      }}
                    >
                      {themeCards.map((card) => {
                        const isActive = theme === card.value;
                        return (
                          <button
                            key={card.value}
                            onClick={() => {
                              setTheme(card.value);
                              clearThemeCloseTimer();
                              setIsThemeOpen(false);
                            }}
                            className={`glass w-36 aspect-square rounded-2xl flex flex-col items-center justify-center transition-all ${
                              isActive
                                ? 'border border-primary-600 shadow-lg shadow-primary-500/20 scale-105'
                                : 'hover:border-primary-600 hover:shadow-lg hover:shadow-primary-500/10'
                            }`}
                            style={{
                              backgroundColor: 'color-mix(in srgb, var(--color-surface) 90%, transparent)',
                            }}
                          >
                            <div
                              className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 text-xl"
                              style={{
                                backgroundColor: 'color-mix(in srgb, var(--color-primary) 12%, transparent)',
                                color: card.accent,
                              }}
                            >
                              {card.icon}
                            </div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">
                              {card.label}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">{card.description}</div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-3">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium py-2 cursor-pointer"
              >
                <Link
                  to="/"
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <button
              className="w-full bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors mt-2"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/contact" className="block w-full h-full">
                Let's Talk
              </Link>
            </button>
            {/* Theme cards for mobile */}
            <div className="mt-6 flex flex-col items-center">
              <div className="flex flex-row gap-1 w-full max-w-xs justify-center">
                {themeCards.map((card) => {
                  const isActive = theme === card.value;
                  return (
                    <button
                      key={card.value}
                      onClick={() => {
                        setTheme(card.value);
                        setIsOpen(false);
                      }}
                      className={`glass flex flex-col items-center justify-center transition-all rounded-lg py-2 px-1 aspect-square ${
                        isActive
                          ? 'border border-primary-600 shadow-lg shadow-primary-500/20 scale-105'
                          : 'hover:border-primary-600 hover:shadow-lg hover:shadow-primary-500/10'
                      }`}
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--color-surface) 92%, transparent)',
                        minWidth: 0,
                        maxWidth: '80px',
                        minHeight: '70px',
                      }}
                    >
                      <div
                              className="inline-flex items-center justify-center w-6 h-6 rounded-full mb-1 text-base"
                              style={{
                                backgroundColor: 'color-mix(in srgb, var(--color-primary) 12%, transparent)',
                                color: card.accent,
                              }}
                      >
                        {card.icon}
                      </div>
                      <div className="text-xs font-semibold text-gray-900 dark:text-white">
                        {card.label}
                      </div>
                      <div className="text-[10px] text-gray-600 dark:text-gray-400 text-center leading-tight">{card.description}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

