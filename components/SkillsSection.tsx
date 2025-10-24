import React, { useEffect, useRef, useState } from 'https://aistudiocdn.com/react@^19.2.0';
import { SKILLS_DATA } from '../constants';
import type { Skill } from '../types';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(skill.proficiency);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [skill.proficiency]);
  
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-dark dark:text-light">{skill.name}</span>
        <span className="text-sm font-medium text-primary dark:text-primary-dark">{skill.proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div 
          className="bg-primary dark:bg-primary-dark h-2.5 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-white dark:bg-dark-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Professional Skills</h2>
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {SKILLS_DATA.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;