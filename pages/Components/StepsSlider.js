import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const StepsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const steps = [
    'Ideation',
    'Solution Concept',
    'Prototype & POC',
    'MVP & Testing',
    'Installations',
    'Scaling'
  ];

  return (
    <div className="stepsSlider-container" >
      <Slider {...settings}>
        {steps.map((step, index) => (
          <div className="section3-cards" key={index} style={{marginBottom:"10px"}}>
            <div className="section3-button">{index + 1}</div>
            <h1>{step}</h1>
            <p className="paragraph">
              Ideation sparks creativity, <span style={{ color: '#567bd9' }}>driving innovation in</span> <span style={{ color: '#FF8310' }}>problem-solving</span> and product development. Ideation sparks creativity, driving innovation in problem-solving and product development.
            </p>
            <div className="section3-button-container">
              <button className="btn-secondary">Lorem ipsum</button>
              <button className="btn-secondary">Lorem ipsum</button>
              <button className="btn-secondary">Lorem ipsum</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StepsSlider;
