import React from "react";
import { ArrowLeft, ArrowRight, Download, Check } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  { name: 'Adobe Photoshop', icon: 'Ps', color: 'bg-blue-600' },
  { name: 'Illustrator', icon: 'Ai', color: 'bg-orange-600' },
  { name: 'InDesign', icon: 'Id', color: 'bg-pink-600' },
  { name: 'Behance', icon: 'Be', color: 'bg-blue-800' },
];

const features = [
  'Visual Lay-outing',
  'AI Tools',
  'Typography',
  'Visual Lay-outing',
  'Social media post',
  'Sketching',
  'Image manipulation',
  'Color theory',
  'Creative thinking process',
];

const CoursesPage = () => {
  return (
    <div className="flex flex-col mt-16 md:mt-[4.2rem] mb-10">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-orange-500 p-4 md:p-8 flex flex-col">
          <Link
            to="/courses"
            className="inline-flex items-center px-3 py-1 mb-4 text-white"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back
          </Link>
          <div className="flex-grow md:mt-8 md:ml-4">
            <h1 className="text-2xl mt-8 md:mt-14 md:text-4xl font-semibold text-white mb-4 leading-tight">
              Best Career-ready Courses available only on Grootz
            </h1>
            <p className="text-white text-sm md:text-base mb-4 max-w-xl">
              Join the best institute for graphic designing course in Delhi to
              unleash your creative potential and build a successful career.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-gray-200 h-[200px] md:h-auto">
          <img
            src="/single-main.png"
            alt="Course preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Course categories */}
      <div className="bg-white rounded-xl shadow-2xl -mt-12 mx-4 md:mx-auto px-4 md:px-8 py-6 relative z-10 w-full max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <button className="w-full md:w-auto flex items-center justify-center gap-2 text-orange-500 border border-orange-500 rounded px-4 py-2 hover:bg-orange-50 transition-colors">
            Book Now
            <ArrowRight size={16} />
          </button>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-semibold">Program Duration: 6 months</span>
            <span className="text-sm text-gray-600">
              3 Hours of Day Class | 3 Days a Week | 2 Days in Week
            </span>
          </div>

          <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-orange-500 text-white rounded px-4 py-2 hover:bg-orange-600 transition-colors">
            Download Curriculum
            <Download size={16} />
          </button>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto p-4 md:p-6 bg-white mt-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-orange-500">Graphics Designing</span> Course
            </h1>
            <p className="mb-6 text-gray-600">
              Ours is the most comprehensive graphic designing course. It covers all
              essential tools like Adobe Photoshop, Illustrator, XD and In-design besides
              training in design philosophy and process. You can learn graphic design
              online with hybrid classes and secure a career at a good company with our
              placement services.
            </p>
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="text-orange-500 mr-2 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full md:w-auto bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="single.png"
              alt="Graphics Design Workspace"
              className="w-full h-[20rem] md:h-[30rem] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">Tools Covered</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="adp.png" alt="Adobe Photoshop" className="w-full max-w-[12rem] h-auto mx-auto hover:scale-105 transition-all" />
            <img src="adi.png" alt="Adobe Illustrator" className="w-full max-w-[12rem] h-auto mx-auto hover:scale-105 transition-all" />
            <img src="id.png" alt="InDesign" className="w-full max-w-[12rem] h-auto mx-auto hover:scale-105 transition-all" />
            <img src="be.png" alt="Behance" className="w-full max-w-[12rem] h-auto mx-auto hover:scale-105 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;