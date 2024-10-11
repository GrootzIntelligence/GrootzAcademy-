import React from 'react';
import '../components/css/ContactForm.css';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-black text-white p-4 sm:p-8 md:p-12 min-h-screen flex flex-col relative">
      <h1 className="text-4xl ml-36 sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 text-center md:text-left md:absolute md:top-12 md:left-12">Contact</h1>
      <div className="w-full max-w-3xl mx-auto md:ml-auto md:mr-12 mt-4 md:mt-20">
        <form className="flex flex-col gap-4 md:gap-5">
          <div className="flex flex-col md:flex-row gap-4 md:gap-5">
            <div className="form-group flex flex-col w-full">
              <label htmlFor="firstName" className="mb-2 text-sm">First Name*</label>
              <input
                type="text"
                id="firstName"
                required
                className="w-full py-3 px-4 bg-gray-900 border border-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="form-group flex flex-col w-full">
              <label htmlFor="lastName" className="mb-2 text-sm">Last Name*</label>
              <input
                type="text"
                id="lastName"
                required
                className="w-full py-3 px-4 bg-gray-900 border border-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="form-group flex flex-col w-full">
            <label htmlFor="email" className="mb-2 text-sm">Email*</label>
            <input
              type="email"
              id="email"
              required
              className="w-full py-3 px-4 bg-gray-900 border border-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="form-group flex flex-col w-full">
            <label htmlFor="inquiryType" className="mb-2 text-sm">Type of inquiry*</label>
            <input
              type="text"
              id="inquiryType"
              required
              className="w-full py-3 px-4 bg-gray-900 border border-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="form-group flex flex-col w-full">
            <label htmlFor="message" className="mb-2 text-sm">Message</label>
            <textarea
              id="message"
              rows={5}
              className="w-full py-3 px-4 bg-gray-900 border border-gray-700 text-white rounded-lg focus:outline-none focus:border-blue-500 resize-vertical min-h-[150px]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white border-none py-3 px-6 text-lg font-semibold cursor-pointer uppercase w-full md:w-1/2 rounded-full hover:bg-blue-700 transition-colors duration-300 mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;