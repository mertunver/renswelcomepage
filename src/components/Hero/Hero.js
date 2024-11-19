import React from 'react';
import { motion } from 'framer-motion';
import { FiMousePointer } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Atık ve Karbon Yönetimini Birleştiren<br /> İlk SaaS Platformu
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Rens ile sürdürülebilir yönetim bir <FiMousePointer className="mouse-icon" /> uzağınızda
        </motion.p>
        <motion.div 
          className="hero-buttons"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="hero-buttons">
            <button className="hero-button">Paketler</button>
            <Link to="/demo-request" className="hero-button secondary">Demo Talebi</Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;