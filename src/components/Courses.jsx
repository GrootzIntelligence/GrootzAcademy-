import React from 'react';
import { ArrowLeft, Check, Monitor, BookOpen, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const courseCategories = [
  "Graphic design",
  "UI/UX design",
  "Web development",
  "Digital Marketing",
  "Web design",
  "Full Stack development"
];

const FeatureCard = ({ title, items, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-4">
      <Icon className="text-orange-500 mr-3" size={24} />
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Features = () => {
  const featureData = [
    {
      title: "Tools Covered",
      icon: Monitor,
      items: [
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe InDesign',
        'Adobe XD',
        'Adobe Color Utility'
      ]
    },
    {
      title: "Design Theory",
      icon: BookOpen,
      items: [
        'Visual Layout Principles',
        'AI Tools in Design',
        'Typography Fundamentals',
        'Color Theory',
        'Social Media Design'
      ]
    },
    {
      title: "Skills Developed",
      icon: Palette,
      items: [
        'Image Manipulation',
        'Vector Graphics Creation',
        'Creative Thinking Process',
        'Digital Sketching',
        'UI/UX Prototyping'
      ]
    }
  ];

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Course Features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors text-lg shadow-md hover:shadow-lg">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const CourseSection = ({ title, description, imageUrl }) => (
  <div className="flex flex-col md:flex-row bg-white p-4 md:p-8 gap-8">
    <div className="w-full md:w-1/2 flex flex-col justify-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-orange-500">{title}</span> Course
      </h1>
      <p className="text-gray-700 mb-6 text-sm md:text-base">
        {description}
      </p>
      <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full self-start hover:bg-orange-600 transition-colors text-sm md:text-base">
        Apply Now
      </button>
    </div>
    <div className="w-full md:w-1/2 mt-6 md:mt-0">
      <img
        src={imageUrl}
        alt={`${title} course preview`}
        className="w-full h-64 md:h-[25rem] object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
);

const CoursesPage = () => {
  return (
    <div className="flex flex-col mt-16 md:mt-[4.2rem]">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-orange-500 p-4 md:p-8 flex flex-col">
          <Link to="/" className="inline-flex items-center px-3 py-1 mb-4 text-white">
            <ArrowLeft className="mr-2" size={16} />
            Back
          </Link>
          <div className="flex-grow md:mt-8 md:ml-4">
            <h1 className="text-2xl mt-14 md:text-4xl font-semibold text-white mb-4 leading-tight">
              Best Career-ready Courses available only on Grootz
            </h1>
            <p className="text-white text-sm md:text-base mb-4 max-w-xl">
              Join the best institute for graphic designing course in 
              Delhi to unleash your creative potential and build a successful career.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gray-200 h-[200px] md:h-auto">
          <img src="/courses-main.png" alt="Course preview" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Course categories */}
      <div className="bg-white rounded-xl shadow-2xl -mt-12 mx-4 md:mx-auto px-4 md:px-8 py-4 md:py-6 relative z-10 w-full max-w-6xl overflow-x-auto">
        <div className="flex justify-between items-center gap-4 md:gap-6 min-w-max">
          {courseCategories.map((category, index) => (
            <button
              key={index}
              className="text-xs md:text-sm lg:text-base text-gray-600 hover:text-black hover:font-semibold hover:scale-105 transition-all focus:text-orange-500 font-medium whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <CourseSection
        title="UI/UX Design"
        description="Our comprehensive UI/UX design course covers essential tools like Adobe Photoshop, Illustrator, XD, and InDesign, alongside training in design philosophy and process. Learn through hybrid classes and kickstart your career with our placement services."
        imageUrl="/laptop.png"
      />

      {/* Features Component */}
      <Features />

      <CourseSection
        title="Graphic Design"
        description="Master the art of visual communication with our Graphic Design course. From branding to digital illustration, learn to create impactful designs using industry-standard tools and techniques."
        imageUrl="/laptop.png"
      />
        <Features />

      <CourseSection
        title="Web Development"
        description="Dive into the world of web development. Learn to code, design, and deploy responsive websites and web applications using the latest technologies and best practices in the industry."
        imageUrl="/laptop.png"
      />

<Features />
    </div>
  );
};

export default CoursesPage;