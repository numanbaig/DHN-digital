// components/LottieAnimation.js
import { useEffect } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = () => {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie-animation'), // the DOM element that will contain the animation
      renderer: 'svg', // 'canvas', 'html' or 'svg'
      loop: true, // whether the animation should loop
      autoplay: true, // whether the animation should start automatically
      path: '/assist/to-do-list.json', // the path to the animation json
    });

    return () => {
      animation.destroy(); // clean up on unmount
    };
  }, []);

  return (
    <div className="sec1-image" id="lottie-animation" style={{ width: '100%', height: '100%' }}></div>
  );
};

export default LottieAnimation;
