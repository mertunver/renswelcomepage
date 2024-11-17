import React, { useEffect, useRef } from 'react';
import './LogoSlider.css';

const logos = [
  { src: '/images/1-Fark-Labs-logo1.png', alt: 'Fark Labs Logo' },
  { src: '/images/bgiv.png', alt: 'Tusiad Logo' },
  { src: '/images/yfyi.png', alt: 'YFYI Logo' },
  { src: '/images/cekirdeklogo.png', alt: 'ITU Logo' },
  { src: '/images/ytustartuphouse.png', alt: 'YTU Logo' },
];

const LogoSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const totalWidth = slider.scrollWidth;
    const viewportWidth = slider.offsetWidth;
    let currentPosition = 0;

    const slide = () => {
      currentPosition += 1;
      if (currentPosition >= totalWidth - viewportWidth) {
        currentPosition = 0;
      }
      slider.scrollLeft = currentPosition;
      requestAnimationFrame(slide);
    };

    const animationId = requestAnimationFrame(slide);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="logo-slider-container">
      <div className="logo-slider" ref={sliderRef}>
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;