import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeadStart from "./components/HeadStart";
import Skills from "./components/Skills";
import HeroSection from "./components/HeroSection";
import EnrollForm from "./components/EnrollForm";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import Single from "./components/Single";
import CoursesSlider from "./components/CoursesSlide";
import GrootzAdv from "./components/GrootzAdv";
import SignUp from "./components/SignUp";


function App() {
  const texts = [
    'Flexible <span style="color: black;">Training Methods</span><br><span style="color: black;">Focused</span> Career Building',
    '<span class="black-text">Thrive the</span> Creativity<br><span class="black-text">Triple the</span> Success',
  ];

  const images = ["image-2.png", "image-1.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection
                  heading={texts[currentIndex]}
                  tech="Technical and Non - Technical Courses, Study Material"
                  buttonLink="#"
                  buttonText="Book Now"
                  imgSrc={images[currentIndex]}
                  altText="Career Building Illustration"
                />
                <Skills />
                <img src="image.png" alt="career"></img>
                <GrootzAdv />
                <HeadStart />
                <CoursesSlider />
                <EnrollForm />
                <ContactForm />
                <Footer />
              </>
            }
          />
          <Route
            path="/courses"
            element={
              <>
                <Courses />
                <ContactForm />
                <Footer />
              </>
            }
          />
          <Route
            path="/single"
            element={
              <>
                <Single />
                <ContactForm />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <SignUp />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
