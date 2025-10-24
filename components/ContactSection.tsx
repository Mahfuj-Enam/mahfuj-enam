import React, { useState } from 'https://aistudiocdn.com/react@^19.2.0';
import { PERSONAL_INFO } from '../constants';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const validate = () => {
      const newErrors = { name: '', email: '', message: '' };
      let isValid = true;

      if (!formData.name.trim()) {
          newErrors.name = 'Name is required.';
          isValid = false;
      }
      if (!formData.email.trim()) {
          newErrors.email = 'Email is required.';
          isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is invalid.';
          isValid = false;
      }
      if (!formData.message.trim()) {
          newErrors.message = 'Message is required.';
          isValid = false;
      }
      
      setErrors(newErrors);
      return isValid;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Here you would typically send the form data to a backend service
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-light dark:bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-dark-secondary p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
                {isSubmitted ? (
                    <div className="text-center p-8 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                        <p className="font-bold">Thank you!</p>
                        <p>Your message has been sent successfully.</p>
                    </div>
                ) : (
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
                         {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                         {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    <button type="submit" className="w-full bg-primary hover:bg-blue-700 dark:bg-primary-dark dark:hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-md transition-transform transform hover:scale-105 duration-300">Send Message</button>
                </form>
                )}
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Feel free to reach out via email, connect with me on social media, or download my CV for more details.
                </p>
                <div className="space-y-4 mb-8">
                    <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-primary dark:text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a></p>
                    <p className="flex items-center"><svg className="w-5 h-5 mr-3 text-primary dark:text-primary-dark" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></p>
                </div>
                 <a href={PERSONAL_INFO.cvPath} download className="w-full md:w-auto text-center bg-secondary hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-md transition-transform transform hover:scale-105 duration-300">Download CV</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;