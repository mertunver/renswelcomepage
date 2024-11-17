import React, { useEffect, useRef, useState } from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReactDOM from 'react-dom';
import './Footer.css';

const Footer = () => {
  const animationContainerRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);

  const iconCreationInterval = 2000;
  const maxIcons = 30;

  useEffect(() => {
    if (!isAnimating || !animationContainerRef.current) return;

    const createIcon = () => {
      const icon = document.createElement('div');
      icon.className = 'icon';
      
      if (Math.random() < 0.5) {
        icon.className += ' co2-icon';
        icon.style.backgroundImage = "url('https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-co2-cloud-ecology-tanah-basah-basic-outline-tanah-basah.png')";
        icon.style.backgroundSize = 'contain';
        icon.style.backgroundRepeat = 'no-repeat';
        icon.style.filter = 'brightness(0) invert(1)';
      } else {
        icon.className += ' recycling-icon';
        const recyclingIcon = document.createElement('div');
        recyclingIcon.style.width = '100%';
        recyclingIcon.style.height = '100%';
        ReactDOM.render(<RecyclingIcon style={{ width: '100%', height: '100%', fill: '#DFFFBF' }} />, recyclingIcon);
        icon.appendChild(recyclingIcon);
      }
      
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.top = '-36px';
      return icon;
    };

    const animateIcon = (icon) => {
      let position = -36;
      const interval = setInterval(() => {
        if (position >= window.innerHeight) {
          clearInterval(interval);
          icon.remove();
        } else {
          position += 1;
          icon.style.top = `${position}px`;
        }
      }, 20);
    };

    const createAndAnimateIcon = () => {
      const icon = createIcon();
      animationContainerRef.current.appendChild(icon);
      animateIcon(icon);
    };

    const checkIconPileup = () => {
      const icons = animationContainerRef.current.getElementsByClassName('icon');
      const bottomIcons = Array.from(icons).filter(icon => 
        parseFloat(icon.style.top) >= window.innerHeight - 60
      );

      if (bottomIcons.length >= maxIcons) {
        setIsAnimating(false);
      }
    };

    const animationInterval = setInterval(() => {
      createAndAnimateIcon();
      checkIconPileup();
    }, iconCreationInterval);

    return () => clearInterval(animationInterval);
  }, [isAnimating, iconCreationInterval, maxIcons]);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Ürünler</h3>
            <ul className="product-logos">
              <li>
                <a href="#" onClick={() => console.log('Rens CO2 Logo clicked')}>
                  <img src="./images/rens.co2logo.png" alt="Rens CO2 Logo" className="product-logo" />
                </a>
              </li>
              <li>
                <a href="#" onClick={() => console.log('Rens Market Logo clicked')}>
                  <img src="./images/rensmarketlogo.png" alt="Rens Market Logo" className="product-logo" />
                </a>
              </li>
              <li>
                <a href="#" onClick={() => console.log('Rens Exchange Logo clicked')}>
                  <img src="./images/rens_exchange_logo.png" alt="Rens Exchange Logo" className="product-logo" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Rens Hakkında</h3>
            <ul>
              <li><a href="#" onClick={() => console.log('Rens Nasıl Kullanılır clicked')}>Rens Nasıl Kullanılır</a></li>
              <li><a href="#" onClick={() => console.log('Rensin Faydaları clicked')}>Rens'in Faydaları</a></li>
              <li><a href="#" onClick={() => console.log('Abonelik Seçenekleri clicked')}>Abonelik Seçenekleri</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>İletişim</h3>
            <ul className="social-icons">
              <li><a href="#" onClick={() => console.log('LinkedIn clicked')}><LinkedInIcon /></a></li>
              <li><a href="#" onClick={() => console.log('Instagram clicked')}><InstagramIcon /></a></li>
              <li><a href="#" onClick={() => console.log('YouTube clicked')}><YouTubeIcon /></a></li>
            </ul>
            <div className="contact-info">
              <p><EmailIcon /> info@rens.co</p>
              <p><LocationOnIcon /> 
                <span>
                  Mustafa Kemal Mah. 2139. Cd.<br />
                  No:24/6 Ofis IBK<br />
                  Çankaya/Ankara
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo-bottom">
          <img src="/images/rensco_footer.png" alt="rens.co footer logo" />
        </div>
        <div className="footer-links">
          <a href="#">TERMS</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">RETURN POLICY</a>
        </div>
      </div>
      <div ref={animationContainerRef} id="animation-container"></div>
    </footer>
  );
};

export default Footer;