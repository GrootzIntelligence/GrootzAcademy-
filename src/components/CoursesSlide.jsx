import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  '/uicourse.png',
  '/web design course.png',
  '/coding course.png',
  '/illustration course.png',
  '/graphic course.png',
  '/product course.png',
  '/digitalmarketing course.png',
  '/ai course.png',
  '/app design course.png',
];

const courses = [
  'UI/UX Design',
  'Web Design',
  'Coding',
  'Illustration',
  'Graphic Design',
  'Product Design',
  'Digital Marketing',
  'AI',
  'App Design'
];

const CoursesSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: '0px',
    pauseOnHover: false,
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20 mb-20">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              className="bg-white text-black rounded-xl"
              key={index}
              style={{
                width: '322px',
                height: '322px',
                margin: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div>
                <img
                  src={image}
                  alt={courses[index]}
                  style={{
                    width: '322px',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              </div>
              <div className="p-4">
                <p>{courses[index]}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CoursesSlide;
