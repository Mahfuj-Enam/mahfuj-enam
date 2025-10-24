
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors duration-300 font-medium"
  >
    {children}
  </a>
);

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-dark-secondary/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-primary dark:text-primary-dark">
          Mahfuj Al Enam
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mr-2">
                {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark dark:text-light focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
        </div>
      </nav>
      {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-dark-secondary py-4">
              <div className="flex flex-col items-center space-y-4">
                  <NavLink href="#about" >About</NavLink>
                  <NavLink href="#experience">Experience</NavLink>
                  <NavLink href="#skills">Skills</NavLink>
                  <NavLink href="#contact">Contact</NavLink>
              </div>
          </div>
      )}
    </header>
  );
};

export default Header;
