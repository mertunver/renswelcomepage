import React, { useState, useEffect, useRef } from 'react';
import './KeywordTagSlider.css';

const keywords = [
    "Karbon Yönetimi", "Atık Yönetimi", "Sürdürülebilirlik", "Geri Dönüşüm",
    "Karbon Ayak İzi", "İklim Değişikliği", "SKDM Danışmanlığı", "Sıfır Atık",
    "Tedarik Zinciri Kontrolü", "Atık İhracatı", "ISO 14064-1", "GHG Envanteri",
    "Dijital Dönüşüm", "Bulut Teknolojileri", "Dijital Pazarlama", "PR Stratejileri",
    "Yazılım Çözümleri", "Abonelik Modeli", "SaaS Platformu", "Veri Analitiği",
    "Online Raporlama", "Müşteri Deneyimi", "Dijital Strateji", "Çevik Yönetim"
];

const KeywordTagSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="keyword-tag-slider">
      <div 
        className="slider-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          ref={containerRef}
          className="tags-container"
        >
          <div
            className={`tags-wrapper ${isHovered ? 'paused' : ''}`}
            style={{
              transform: `translateX(${isHovered ? '0' : `-${containerWidth}px`})`,
              transition: `transform ${isHovered ? '0s' : '60s'} linear`
            }}
          >
            {keywords.map((keyword, index) => (
              <div key={index} className="tag">
                <span>{keyword}</span>
              </div>
            ))}
          </div>
          <div
            className={`tags-wrapper ${isHovered ? 'paused' : ''}`}
            style={{
              transform: `translateX(${isHovered ? '0' : `-${containerWidth}px`})`,
              transition: `transform ${isHovered ? '0s' : '60s'} linear`
            }}
          >
            {keywords.map((keyword, index) => (
              <div key={index} className="tag">
                <span>{keyword}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordTagSlider;