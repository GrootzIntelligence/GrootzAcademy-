import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MentorCard = ({ title, text, icon, stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-20 bg-white rounded-lg shadow-md mb-12">
      <div>
        <h3 className="text-3xl mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{text}</p>
        <hr className="border-t border-gray-300 my-4" />
        <p className="text-gray-600 mb-4">{text}</p>
        <hr className="border-t border-gray-300 my-4" />
        {stats && (
          <div className="flex justify-start items-center gap-12">
            {stats.map((stat, index) => (
              <div key={index}>
                <h4 className="text-orange-500 text-3xl font-bold">{stat.value}</h4>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <img src={icon} alt={title} className="w-64 h-64" />
      </div>
    </div>
  );
};

const GrootzAdv = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const components = [
    {
      title: 'INDUSTRY - READY CURRICULUM',
      text: 'Expert-made, expert-vetted: Designed by industry veterans and vetted by industry experts, our curriculum only includes the topics and skills that the industry demands.',
      icon: '/adv1.svg',
      stats: [
        { value: 10, label: 'Courses' },
        { value: 6, label: 'Month' },
        { value: 3, label: 'Classes per week' },
      ]
    },
    {
      title: 'MODERN INFRASTRUCTURE',
      text: 'Expert-made, expert-vetted: Designed by industry veterans and vetted by industry experts, our curriculum only includes the topics and skills that the industry demands.',
      icon: '/adv2.svg',
    },
    {
      title: 'INDUSTRY - TRAINED MENTORS',
      text: 'Expert-made, expert-vetted: Designed by industry veterans and vetted by industry experts, our curriculum only includes the topics and skills that the industry demands.',
      icon: '/adv3.svg',
    },
    {
      title: 'PORTFOLIO BUILDING',
      text: 'Expert-made, expert-vetted: Designed by industry veterans and vetted by industry experts, our curriculum only includes the topics and skills that the industry demands.',
      icon: '/adv4.svg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [components.length]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="container mx-auto p-12">
      <div className="text-center mb-20">
        <h2 className="text-orange-500 text-4xl font-bold">The Grootz Advantage</h2>
        <p className="text-gray-600 text-xl">Why should you enroll into a course at Grootz Academy?</p>
      </div>

      <motion.div
        key={currentIndex} 
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
        transition={{ duration: 1 }}
      >
        <MentorCard 
          title={components[currentIndex].title}
          text={components[currentIndex].text}
          icon={components[currentIndex].icon}
          stats={components[currentIndex].stats}
        />
      </motion.div>
    </div>
  );
};

export default GrootzAdv;
