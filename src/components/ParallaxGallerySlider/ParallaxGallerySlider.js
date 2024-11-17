import React, { useEffect, useRef } from 'react';
import './ParallaxGallerySlider.css';

const topRowImages = [
  { src: '/images/degisim.png', alt: 'Top Image 1' },
  { src: '/images/rensco2.png', alt: 'Top Image 2' },
  { src: '/images/rens_exchange.png', alt: 'Top Image 3' },
  { src: '/images/cokyakinda.png', alt: 'Top Image 4' },
  { src: '/images/sdgaction.png', alt: 'Top Image 5' },
];

const bottomRowImages = [
  { src: '/images/dijitaldonusum.png', alt: 'Bottom Image 1' },
  { src: '/images/geridonusum.png', alt: 'Bottom Image 2' },
  { src: '/images/rensmarket.png', alt: 'Bottom Image 3' },
  { src: '/images/surdurulebilirhammadde.png', alt: 'Bottom Image 4' },
  { src: '/images/rensmarket2.png', alt: 'Bottom Image 5' },
];

const ParallaxGallerySlider = () => {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  useEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    if (!topRow || !bottomRow) return;

    const animateRow = (row, speed) => {
      let position = 0;
      const scroll = () => {
        position += speed;
        if (position >= row.scrollWidth / 2) {
          position = 0;
        }
        row.style.transform = `translateX(${-position}px)`;
        requestAnimationFrame(scroll);
      };
      requestAnimationFrame(scroll);
    };

    animateRow(topRow, 1);
    animateRow(bottomRow, 1.5);
  }, []);

  const renderImages = (images) => (
    <>
      {images.map((image, index) => (
        <div key={index} className="image-frame">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
      {images.map((image, index) => (
        <div key={`duplicate-${index}`} className="image-frame">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </>
  );

  return (
    <div className="parallax-gallery-slider">
      <h2 className="slider-text">
        <span className="text-white">"</span>
        <span className="text-green">yeşil dönüşüm</span>
        <span className="text-white">, </span>
        <span className="text-turquoise">geri dönüşüm</span>
        <span className="text-white">, </span>
        <span className="text-grey">dijital dönüşüm</span>
        <span className="text-white">"</span>
      </h2>
      <div className="main-container">
        <div className="slider-row" ref={topRowRef}>
          {renderImages(topRowImages)}
        </div>
        <div className="slider-row" ref={bottomRowRef}>
          {renderImages(bottomRowImages)}
        </div>
      </div>
    </div>
  );
};

export default ParallaxGallerySlider;