import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import steps1 from "../../public/assist/image/6steps1.png"
import steps2 from "../../public/assist/image/6steps2.png"
import steps3 from "../../public/assist/image/6steps3.png"
import steps4 from "../../public/assist/image/6steps4.png"
import steps5 from "../../public/assist/image/6steps5.png"
import steps6 from "../../public/assist/image/6steps6.png"
import Image from "next/image";

const SIMPLE_STEPS = [
  {
    title: 'Ideenfindung',
    icon: steps1,
    dec: 'Zusammen <span style="color:#160B8B">analysieren  </span>wir Ihre Aufgaben und Prozesse und finden Anwendungsfälle mit echtem Mehrwehrt'
  },
  {
    title: 'Lösungskonzept',
    icon: steps2,
    dec: 'Wir erarbeiten <span style="color:#160B8B"> gemeinsam  Lösungsideen </span> für die Anwendungsfälle.'
  },
  {
    title: 'Prototyp & PoC',
    icon: steps3,
    dec: 'Mit schnellen  <span style="color:#160B8B"> Prototypen und Proof </span> of Concepts prüfen wir die Lösungsideen.'
  },
  {
    title: 'MVP & Tests',
    icon: steps4,
    dec: 'Vielversprechende <span style="color:#160B8B"> Prototypen entwickeln </span> wir zügig zu funktionierenden, echten Lösungen.'
  },
  {
    title: 'Inbetriebnahme',
    icon: steps5,
    dec: 'Gemeinsam <span style="color:#160B8B"> integrieren wir die fertige </span> Lösung in die bestehenden Abläufe und Prozesse.'
  },
  {
    title: 'Skalierung',
    icon: steps6,
    dec: 'Erfolgreiche Lösungen  bringen wir in die <span style="color:#160B8B">  breite Anwendung. </span>'
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
                <Image src={step.icon} width={30} height={30} />
                <div className="section3-button">{index + 1}</div>
                </div>
                <h1>{step.title}</h1>
                <p className="paragraph"
                  dangerouslySetInnerHTML={{ __html: step.dec }}
                />
           
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
