
import React, { useState, useEffect, useRef } from 'react';
import { EDUCATION_DATA } from '../constants';

const AnimatedCounter: React.FC<{ end: number; duration?: number }> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const endValue = end;
          const increment = endValue / (duration / 16); // 60fps
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-dark-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold text-primary dark:text-primary-dark mb-4">Career Summary</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              A dedicated and results-oriented HR & Admin professional with over 7 years of comprehensive experience in shaping productive, compliant, and engaging workplace environments. Proven expertise in full-cycle recruitment, performance management, policy development, and ensuring adherence to labor laws. Adept at leveraging HRIS for data-driven insights and managing all facets of compensation, benefits, and administrative functions to support organizational growth and employee well-being.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary dark:text-primary-dark mb-4">Education</h3>
            <ul className="space-y-4">
              {EDUCATION_DATA.map((edu, index) => (
                <li key={index}>
                  <p className="font-bold">{edu.degree}</p>
                  <p className="text-sm text-secondary dark:text-gray-400">{edu.institution}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-primary dark:text-primary-dark"><AnimatedCounter end={7} />+</p>
                <p className="text-secondary dark:text-gray-400">Years of Experience</p>
            </div>
             <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-primary dark:text-primary-dark"><AnimatedCounter end={500} />+</p>
                <p className="text-secondary dark:text-gray-400">Employees Managed</p>
            </div>
             <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm col-span-2 md:col-span-1">
                <p className="text-4xl font-bold text-primary dark:text-primary-dark"><AnimatedCounter end={15} />+</p>
                <p className="text-secondary dark:text-gray-400">HR Projects Led</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
