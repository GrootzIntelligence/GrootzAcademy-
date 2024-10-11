import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeadStart from './components/HeadStart';
import Skills from './components/Skills';

import TextSection from './components/TextSection'; 
import ImageSection from './components/ImageSection'; 
import EnrollForm from './components/EnrollForm'; 
import { useState, useEffect } from 'react'; 

import Courses from './components/Courses';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

function App() {
  const texts = [
    'Flexible <span style="color: black;">Training Methods</span><br><span style="color: black;">Focused</span> Career Building',
    '<span class="black-text">Thrive the</span> Creativity</span><br><span class="black-text">Triple the</span> Success',
  ];

  const images = [
    "image 2.png",
    "image.png",
  ];

  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div>
      <div className="container">
        <TextSection
          heading={texts[currentIndex]}
          tech="Technical and Non - Technical Courses, Study Material"
          buttonLink="#"
          buttonText="Book Now"
        />
        <ImageSection
          imgSrc={images[currentIndex]}
          altText="Career Building Illustration"
        />
      </div>
      <Navbar />
      <Skills />
      <HeadStart />
      <EnrollForm />
    </div>
  );
}

export default App;