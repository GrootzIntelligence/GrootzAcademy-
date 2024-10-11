import React from "react";

function ImageSection({ imgSrc, altText }) {
  return (
    <div className="image-section">
      <img src={imgSrc} alt={altText} />
    </div>
  );
}

export default ImageSection;
