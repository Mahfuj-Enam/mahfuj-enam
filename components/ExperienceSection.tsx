
import React, { useEffect, useRef } from 'react';
import { EXPERIENCE_DATA } from '../constants';
import type { Experience } from '../types';

const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => {
  const isLeft = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
     const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0');
                entry.target.classList.add(isLeft ? 'animate-fade-in-left' : 'animate-fade-in-right');
                observer.unobserve(entry.target);
            }
        },
        { threshold: 0.1 }
     );
     if (ref.current) {
         observer.observe(ref.current);
     }
     return () => observer.disconnect();
  }, [isLeft]);

  return (
    <div ref={ref} className="mb-8 flex justify-between items-center w-full opacity-0" style={{ animationFillMode: 'forwards', animationDelay: `${index * 150}ms`}}>
      <div className={`order-1 w-5/12 ${isLeft ? '' : 'md:hidden'}`}></div>
      <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
      </div>
      <div className={`order-1 bg-white dark:bg-dark-secondary rounded-lg shadow-xl w-full md:w-5/12 p-6 transition-transform duration-500 hover:scale-105`}>
        <p className="mb-2 text-sm font-semibold text-primary dark:text-primary-dark">{experience.period}</p>
        <h3 className="mb-3 font-bold text-xl">{experience.designation}</h3>
        <p className="text-sm font-medium text-secondary dark:text-gray-400 mb-4">{experience.company}</p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
            {experience.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
        </ul>
      </div>
    </div>
  );
};


const ExperienceSection: React.FC = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
          @keyframes animate-fade-in-left {
            0% { opacity: 0; transform: translateX(-100px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-left { animation: animate-fade-in-left 0.8s ease-out; }
          
          @keyframes animate-fade-in-right {
            0% { opacity: 0; transform: translateX(100px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-right { animation: animate-fade-in-right 0.8s ease-out; }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <section id="experience" className="py-20 md:py-32 bg-light dark:bg-dark">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Work Experience</h2>
                <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
                    <div className="absolute border-2-2 border-opacity-20 border-gray-700 dark:border-gray-400 h-full border" style={{ left: '50%' }}></div>
                    {EXPERIENCE_DATA.map((exp, index) => (
                         <div key={index} className="mb-8 flex justify-between items-center w-full" >
                           <div className={`order-1 w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:text-right'}`}></div>
                           <div className="z-20 flex items-center order-1 bg-primary dark:bg-primary-dark shadow-xl w-10 h-10 rounded-full">
                               <svg className="w-6 h-6 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                           </div>
                           <div className={`order-1 bg-white dark:bg-dark-secondary rounded-lg shadow-xl w-full md:w-5/12 p-6 transition-transform duration-500 hover:scale-105 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                                <p className="mb-2 text-sm font-semibold text-primary dark:text-primary-dark">{exp.period}</p>
                                <h3 className="mb-3 font-bold text-xl">{exp.designation}</h3>
                                <p className="text-sm font-medium text-secondary dark:text-gray-400 mb-4">{exp.company}</p>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                                </ul>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
