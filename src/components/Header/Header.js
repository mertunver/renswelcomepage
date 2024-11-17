import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "features-section", text: "Ürünler" },
    { to: "membership-benefits", text: "Faydalar" },
    { to: "pricing-section", text: "Fiyatlandırma" },
    { to: "logo-slider", text: "Referanslar" },
    { to: "footer", text: "İletişim" }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <a href="/" className="logo">
          <span className="sr-only"></span>
          <img src="/images/LOGO_072927.png" alt="Logo" className="h-16"/>
        </a>
        <nav className="nav-links">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70} // Adjust this value based on your header height
              className="nav-link"
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="nav-buttons">
          <a href="/login" className="header-button">Login</a>
          <a href="/marketplace" className="header-button secondary">RENS Market</a>
        </div>
      </div>
    </header>
  );
};

export default Header;