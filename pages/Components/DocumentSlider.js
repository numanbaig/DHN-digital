import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DocumentSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
     
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-buttons">
      <Slider {...settings}>
        <div className="slide-item">Lieferdokumente</div>
        <div className="slide-item">Rechnungen</div>
        <div className="slide-item">Bestellungen</div>
        <div className="slide-item">Verträge</div>
        <div className="slide-item">…und vieles mehr</div>
      </Slider>
    </div>
  );
};

export default DocumentSlider;
