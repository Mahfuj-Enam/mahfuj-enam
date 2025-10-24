import React, { useEffect, useRef } from 'https://aistudiocdn.com/react@^19.2.0';
import { EXPERIENCE_DATA } from '../constants';
import type { Experience } from '../types';

const TimelineItem: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => {
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    entry.target.classList.remove('opacity-0');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = itemRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const isLeftAligned = index % 2 === 0;

    const card = (
        <div className="bg-white dark:bg-dark-secondary rounded-lg shadow-xl p-6 transition-transform duration-500 hover:scale-105">
            <p className="mb-2 text-sm font-semibold text-primary dark:text-primary-dark">{experience.period}</p>
            <h3 className="mb-3 font-bold text-xl">{experience.designation}</h3>
            <p className="text-sm font-medium text-secondary dark:text-gray-400 mb-4">{experience.company}</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {experience.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
            </ul>
        </div>
    );

    return (
        <div
            ref={itemRef}
            className={`opacity-0 relative md:flex mb-12 ${isLeftAligned ? 'md:flex-row-reverse' : ''}`}
        >
            <div className="md:w-5/12">{card}</div>
            <div className="md:w-2/12 flex justify-center">
                <div className="absolute top-1/2 -translate-y-1/2 md:static md:translate-y-0 z-10 flex items-center bg-primary dark:bg-primary-dark shadow-xl w-10 h-10 rounded-full -left-5 md:left-auto">
                     <svg className="w-6 h-6 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
            </div>
            <div className="hidden md:block md:w-5/12"></div>
        </div>
    );
};

const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="py-20 md:py-32 bg-light dark:bg-dark">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Work Experience</h2>
                <div className="relative pl-5 md:pl-0">
                    <div className="absolute h-full w-0.5 bg-gray-300 dark:bg-gray-700 top-0 left-5 md:left-1/2 md:-translate-x-1/2"></div>
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <TimelineItem key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;