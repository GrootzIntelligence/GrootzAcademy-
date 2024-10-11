import React from 'react';
import './EnrollForm.css';
const EnrollForm = () => {
    return (
        <div className="enroll-container">
            <div className="enroll-text-section">
                <span className="enroll-text1"><h1>What are you waiting for</h1></span>
                <div className="enroll-button">
                    <a href="#">Enroll now</a>
                </div>
            </div>

            <div className="enroll-form-section">
                <h2>Download Brochure <i class="fa-solid fa-xmark"></i><span className="enroll-close-button">&times;</span></h2>
                <form>
                    <input type="text" placeholder="Enter Name*" className="enroll-input" required />
                    <input type="email" placeholder="Enter Email Address*" className="enroll-input" required />
                    <input type="tel" placeholder="+91 Enter Mobile Number*" className="enroll-input" required />
                    <select required className="enroll-select">
                        <option value="" disabled selected>Select Course*</option>
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                    </select>
                    <div className="enroll-captcha">
                        <img src="https://via.placeholder.com/100x40.png?text=16qe9o" alt="captcha" className="enroll-captcha-img" />
                        <input type="text" placeholder="Enter text as shown" className="enroll-captcha-input" required />
                    </div>
                    <div className="enroll-checkbox-container">
                        <span><input type="checkbox" id="enroll-checkbox" /></span>
                        <label htmlFor="enroll-checkbox" className="enroll-autho">I authorize Grootz Academy & its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call.</label>
                    </div>
                    <button type="submit" className="enroll-submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EnrollForm;
