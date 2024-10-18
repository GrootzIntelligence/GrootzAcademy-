import React from "react";
import '../components/css/Skills.css';

const Skills = () => {
  const handleDownload = () => {
    console.log("Download initiated");
  };

  return (
    <section className="skills-section">
      <h3 className="skills-title">Skills That Make You Industry-Ready</h3>
      <h5 className="skills-subtitle">
        Our industry-focused curriculum, delivered by industry-trained instructors, boosts your career growth.
      </h5>

      <div className="courses-section">
        <div className="courses-intro">
          <h2>Design Courses &gt;&gt;</h2>
          <p>Enhance your creative skills with the right technical training.</p>
        </div>

        <div className="courses-cards">
          <div className="course-card">
            <img
              src="/skill1.png"
              alt="UI/UX Design"
              className="course-image"
            />
            <h3>UI/UX Design</h3>
            <p>Enhance your creative skills with the right technical training.</p>
            <ul>
              <li><strong>Course Duration:</strong> 6 months / 3 classes per week / 2 hours each</li>
              <li><strong>Course Highlights:</strong> Wireframing, layout, responsive design, web designing</li>
            </ul>
            <div className="download-btn" onClick={handleDownload}>
              Download Course
              <i className="fas fa-download" style={{ color: 'green', marginLeft: '5px' }}></i>
            </div>

          </div>

          <div className="course-card">
            <img
              src="/skill2.png"
              alt="Graphics Design"
              className="course-image"
            />
            <h3>Graphics Design</h3>
            <p>Enhance your creative skills with the right technical training.</p>
            <ul>
              <li><strong>Course Duration:</strong> 6 months / 3 classes per week / 2 hours each</li>
              <li><strong>Course Highlights:</strong> Wireframing, layout, responsive design, web designing</li>
            </ul>
            <div className="download-btn" onClick={handleDownload}>
              Download Course
              <i className="fas fa-download" style={{ color: 'green', marginLeft: '5px' }}></i>
            </div>

          </div>
        </div>
      </div>
      <div className="courses-section">
        <div className="courses-intro">
          <h2>Coding Courses &gt;&gt;</h2>
          <p>Build a successful career with your tech skills and our innovative training.</p>
        </div>

        <div className="courses-cards">
          <div className="course-card">
            <img
              src="/skill3.png"
              alt="Web Design"
              className="course-image"
            />
            <h3>Web Design</h3>
            <p>Enhance your creative skills with the right technical training.</p>
            <ul>
              <li><strong>Course Duration:</strong> 6 months / 3 classes per week / 2 hours each</li>
              <li><strong>Course Highlights:</strong> Wireframing, layout, responsive design, web designing</li>
            </ul>
            <div className="download-btn" onClick={handleDownload}>
              Download Course
              <i className="fas fa-download" style={{ color: 'green', marginLeft: '5px' }}></i>
            </div>

          </div>

          <div className="course-card">
            <img
              src="/skill4.png"
              alt="Full Stack Development"
              className="course-image"
            />
            <h3>Full Stack Development</h3>
            <p>Enhance your creative skills with the right technical training.</p>
            <ul>
              <li><strong>Course Duration:</strong> 6 months / 3 classes per week / 2 hours each</li>
              <li><strong>Course Highlights:</strong> Wireframing, layout, responsive design, web designing</li>
            </ul>
            <div className="download-btn" onClick={handleDownload}>
              Download Course
              <i className="fas fa-download" style={{ color: 'green', marginLeft: '5px' }}></i>
            </div>

          </div>
        </div>
      </div>
      <div className="courses-section">
        <div className="courses-intro">
          <h2>Marketing Courses &gt;&gt;</h2>
          <p>Enhance your creative skills with the right technical training.</p>
        </div>

        <div className="courses-cards">
          <div className="course-card">
            <img
              src="/skill5.png"
              alt="Digital Marketing"
              className="course-image"
            />
            <h3>Digital Marketing</h3>
            <p>Enhance your creative skills with the right technical training.</p>
            <ul>
              <li><strong>Course Duration:</strong> 6 months / 3 classes per week / 2 hours each</li>
              <li><strong>Course Highlights:</strong> Wireframing, layout, responsive design, web designing</li>
            </ul>
            <div className="download-btn" onClick={handleDownload}>
              Download Course
              <i className="fas fa-download" style={{ color: 'green', marginLeft: '5px' }}></i>
            </div>

          </div>

          <div className="course-card">
            <img
              src="/skill6.png"
              alt="Social Media Marketing"
              className="course-image"
            />
            <h3>Social Media Marketing</h3>
            <p>Enhance your creative skills with the right technical training.</p>
            <ul>
              <li><strong>Course Duration:</strong> 6 months / 3 classes per week / 2 hours each</li>
              <li><strong>Course Highlights:</strong> Wireframing, layout, responsive design, web designing</li>
            </ul>
            <div className="download-btn" onClick={handleDownload}>
              Download Course
              <i className="fas fa-download" style={{ color: 'green', marginLeft: '5px' }}></i>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
