import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeadStart from './components/HeadStart';
import Skills from './components/Skills';
import Courses from './components/Courses';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Skills/>
              <HeadStart />
              <ContactForm />
             <Footer />
            </>
          } />
          <Route path="/courses" element={
            <>
            <Courses />
            <ContactForm />
             <Footer /> 
            </> 
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;