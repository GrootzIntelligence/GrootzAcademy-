import React from "react";

function TextSection({ heading, tech, buttonLink, buttonText }) {
  return (
    <div className="text-section">
      <h1 dangerouslySetInnerHTML={{ __html: heading }} />
      <p id="tech">{tech}</p>
      <div className="button">
        <a href={buttonLink}>
          {buttonText} <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default TextSection;
