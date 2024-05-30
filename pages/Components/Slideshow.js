import React, { useEffect, useState } from 'react';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const paragraphs = document.querySelectorAll(`.slide-container p`);
    const container = document.querySelector(`.slide-container`);

    const showSlide = (index) => {
      const containerHeight = container.offsetHeight;
      const pHeight = containerHeight / 3;

      paragraphs.forEach((p, i) => {
        p.style.transform = `translateY(${(i - index + 1) * pHeight}px)`;
        p.classList.remove('focus', 'blur');
            if (i === index) {
                p.classList.add('focus');
            } else {
                p.classList.add('blur');
            }
      });
    };

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
    };

    showSlide(currentIndex);
    const interval = setInterval(nextSlide, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div style={{width:'100%'}}>
      <h1 className='heading' style={{textAlign:'center'}}>Improve your</h1>
    <div className={`slide-container flex`}>
      <p>Costumer Satisfy</p>
      <p>Improves Accuracy</p>
      <p>Employee Satisfy </p>
      <p>Enhance Revenue</p>
      <p>Reduce Cost</p>

    </div>
    </div>
  );
};

export default Slideshow;
