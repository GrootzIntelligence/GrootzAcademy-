import React from "react";
import { motion } from "framer-motion";

function HeroSection({ heading, tech, buttonLink, buttonText, imgSrc, altText }) {
  return (
    <section className="hero">
      <motion.div 
        className="text-section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 dangerouslySetInnerHTML={{ __html: heading }} />
        <p id="tech">{tech}</p>
        <div className="button">
          <a href={buttonLink}>
            {buttonText} <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </motion.div>
      <motion.div 
        className="image-section"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src={imgSrc} alt={altText} />
      </motion.div>
    </section>
  );
}

export default HeroSection;