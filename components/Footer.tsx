import React from 'https://aistudiocdn.com/react@^19.2.0';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-dark-secondary border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="container mx-auto px-6 text-center text-secondary dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-primary-dark transition-colors">LinkedIn</a>
            <span>&middot;</span>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-primary-dark transition-colors">GitHub</a>
             <span>&middot;</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary dark:hover:text-primary-dark transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;