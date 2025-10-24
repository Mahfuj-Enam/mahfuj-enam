import React from 'https://aistudiocdn.com/react@^19.2.0';
import { PERSONAL_INFO } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 dark:from-dark dark:via-dark-secondary dark:to-slate-800 bg-[length:200%_200%] animate-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-300/[0.2] dark:bg-grid-gray-700/[0.2]"></div>
      <div className="container mx-auto px-6 text-center z-10 animate-fade-in-up">
        <img
          src={PERSONAL_INFO.profilePhotoUrl}
          alt="Mahfuj Al Enam"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white dark:border-gray-600 object-cover"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-dark dark:text-white mb-2">
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-lg md:text-2xl text-secondary dark:text-gray-300 font-light">
          {PERSONAL_INFO.tagline}
        </p>
         <a
          href="#contact"
          onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-8 inline-block bg-primary hover:bg-blue-700 dark:bg-primary-dark dark:hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default HeroSection;