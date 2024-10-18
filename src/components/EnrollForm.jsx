import React, { useState } from 'react';

const ImprovedEnrollmentComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    captcha: '',
    agreed: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className=" bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 bg-orange-500 p-8 text-white flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">What are you waiting for?</h1>
          <p className="text-lg mb-8">Join our program and take the first step towards your new career!</p>
          <a href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50 transition duration-150 ease-in-out w-full md:w-auto">
            Enroll now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        {/* Right Section - Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Download Brochure</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter Name*"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address*"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                +91
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Mobile Number*"
                className="flex-1 rounded-r-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <select
                name="course"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.course}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Course*</option>
                <option value="web-development">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="ux-design">UX Design</option>
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <img src="/api/placeholder/100/40" alt="captcha" className="rounded" />
              <input
                type="text"
                name="captcha"
                placeholder="Enter text as shown"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.captcha}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreed"
                id="agree-terms"
                className="mt-1"
                checked={formData.agreed}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="agree-terms" className="ml-2 text-sm text-gray-600">
                I authorize Grootz Academy & its representatives to contact me with updates via Email/SMS/WhatsApp/Call.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 font-semibold"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImprovedEnrollmentComponent;