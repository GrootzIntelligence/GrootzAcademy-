import React from 'react';
import './css/EnrollForm.css'

const EnrollmentComponent = () => {
  return (
    <div className="enroll-container">
      <div className="enroll-text-section">
        <h1>What are you waiting for</h1>
        <div className="enroll-button">
          <a href="/">Enroll now →</a>
        </div>
      </div>
      
      <div className="enroll-form-section">
        <h2>Download Brochure <span className="enroll-close-button">×</span></h2>
        <form>
          <input type="text" placeholder="Enter Name*" className="enroll-input" required />
          <input type="email" placeholder="Enter Email Address*" className="enroll-input" required />
          <div className="phone-input-container">
            <span className="country-code">+91</span>
            <input type="tel" placeholder="Enter Mobile Number*" className="enroll-input phone-input" required />
          </div>
          <select required className="enroll-select">
            <option value="" disabled selected>Select Course*</option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
          </select>
          <div className="enroll-captcha">
            <img src="/api/placeholder/100/40" alt="captcha" className="enroll-captcha-img" />
            <input type="text" placeholder="Enter text as shown" className="enroll-input enroll-captcha-input" required />
          </div>
          <div className="enroll-checkbox-container">
            <input type="checkbox" id="enroll-checkbox" />
            <label htmlFor="enroll-checkbox">I authorize Grootz Academy & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call.</label>
          </div>
          <button type="submit" className="enroll-submit-button">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentComponent;