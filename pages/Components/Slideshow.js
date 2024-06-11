import React, { useState, useEffect } from 'react';

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(2); 
  const [reverse, setReverse] = useState(false); 

  useEffect(() => {
    const paragraphs = document.querySelectorAll('.slide-container p');
    const container = document.querySelector('.slide-container');

    const showSlide = (index) => {
      const containerHeight = container.offsetHeight;
      const pHeight = containerHeight/3;

      // Use a for loop to iterate through the paragraphs
      for (let i = 1; i < paragraphs.length; i++) {
        const p = paragraphs[i];
        p.style.transform = `translateY(${(i - index) * pHeight}px)`;
        p.classList.remove('focus', 'blur');
        if (i === index) {
          p.classList.add('focus');
        } else {
          p.classList.add('blur');
        }

      
      }
    };

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => {
        if (reverse) {
          if (prevIndex === 2) {
            setReverse(false);
            return prevIndex + 1;
          } else {
            return prevIndex - 1;
          }
        } else {
          if (prevIndex === paragraphs.length - 2) {
            setReverse(true);
            return prevIndex - 1;
          } else {
            return prevIndex + 1;
          }
        }
      });
    };

    showSlide(currentIndex);
    const interval = setInterval(nextSlide, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, reverse]);

  return (
    <div className='slider-improve' style={{width:'100%'}}>
      <h1 className='heading' style={{textAlign:'center', fontSize:'34px'}}>Verbesserm Sie jetzt</h1>
    <div className={`slide-container flex`}>
      <p style={{display:'none'}}>Kosten</p>
      <p>Kosten</p>
      <p>Effizienzy </p>
      <p>Enhance Revenue</p>
      <p>Umsatz</p>
      <p>Kundenzufriedenheit</p>
      <p>Genauigkeit</p>
      <p>Kosten</p>
      <p>Effizienzy </p>
      <p>Enhance Revenue</p>
      <p>Umsatz</p>
      <p>Kundenzufriedenheit</p>
      <p>Genauigkeit</p>
     

    </div>
 
    </div>
  );
};

export default SlideShow;
