import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import steps1 from "../../public/assist/image/6steps1.svg"
import steps2 from "../../public/assist/image/6steps2.svg"
import steps3 from "../../public/assist/image/6steps3.svg"
import steps4 from "../../public/assist/image/6steps4.svg"
import steps5 from "../../public/assist/image/6steps5.svg"
import steps6 from "../../public/assist/image/6steps6.svg"
import Image from "next/image";

const SIMPLE_STEPS= [
  {
    title:'Ideation',
    icon:steps1
  },
  {
    title:'Solution Concept',
    icon:steps2
  },
  {
    title:'Prototype & Poc',
    icon:steps3
  },
  {
    title:'MVP & Testing',
    icon:steps4
  },
  {
    title:'Installations           ',
    icon:steps5
  },
  {
    title:'Scaling',
    icon:steps6
  }
] 


const StepsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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



  return (
    <div className="stepsSlider-container" >
      <Slider {...settings}>
        {SIMPLE_STEPS.map((step, index) => (
          <div className="section3-cards" key={index} style={{marginBottom:"10px"}}>
             <div style={{display:'flex' , justifyContent:'space-between', alignItems:'center'}}>
                <div className="section3-button">{index + 1}</div>
                <Image src={step.icon} width={40} height={30} />
                </div>
                <h1>{step.title}</h1>
            <p className="paragraph">
              Ideation sparks creativity, <span style={{ color: '#567bd9' }}>driving innovation in</span> <span style={{ color: '#FF8310' }}>problem-solving</span> and product development. Ideation sparks creativity, driving innovation in problem-solving and product development.
            </p>
            <div className="section3-button-container">
              {/* <button className="btn-secondary">Lorem ipsum</button>
              <button className="btn-secondary">Lorem ipsum</button>
              <button className="btn-secondary">Lorem ipsum</button> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StepsSlider;
