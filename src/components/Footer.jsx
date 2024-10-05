import React, { useEffect, useRef } from 'react';
import '../components/css/Footer.css'; // External CSS for the styles

const Footer = () => {
  const footerLeftRef = useRef(null);
  const footerMiddleRef = useRef(null);
  const footerAboutRef = useRef(null);

  useEffect(() => {
    const footerLeft = footerLeftRef.current;
    const footerMiddle = footerMiddleRef.current;
    const footerAbout = footerAboutRef.current;

    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === footerLeft) {
            entry.target.classList.add('slide-left');
          } else if (entry.target === footerMiddle) {
            entry.target.classList.add('slide-top');
          } else if (entry.target === footerAbout) {
            entry.target.classList.add('slide-right');
          }
          observer.unobserve(entry.target); // Stop observing after animation is triggered
        }
      });
    }, observerOptions);

    observer.observe(footerLeft);
    observer.observe(footerMiddle);
    observer.observe(footerAbout);

    return () => {
      observer.disconnect(); // Clean up observer on component unmount
    };
  }, []);

  return (
    <section id="footer" className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Section for Logo and Contact Info */}
          <div className="footer-left" ref={footerLeftRef}>
            <div className="logo-container">
                <div className="flex gap-3">
              <img
                src="/footer-logo.png"
                alt="Grootz Logo"
                className="footer-logo"
                style={{ width: '120px', height: '120px' }}
              />
              <img src="/footer-logo-name.png" alt="Grootz Logo" className="footer-logo w-auto object-contain" />
              </div>
              <div className="para">
                <p>Support @grootz.com</p>
                <p>+91 - 123456789</p>
              </div>
            </div>
          </div>

          {/* Right Section for Quick Links and About Links */}
          <div className="footer-right">
            <div className="footer-middle" ref={footerMiddleRef}>
              <h3>Quick</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Activities</a></li>
                <li><a href="/">Courses</a></li>
              </ul>
            </div>

            <div className="footer-about" ref={footerAboutRef}>
              <h3>About</h3>
              <ul>
                <li><a href="/">Blog</a></li>
                <li><a href="/">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>  
  );
};

export default Footer;
