import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import LogoSlider from './components/LogoSlider/LogoSlider';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import PricingSection from './components/PricingSection/PricingSection';
import Footer from './components/Footer/Footer';
import ThreeD from './components/ThreeD/ThreeD';
import MembershipBenefits from './components/MembershipBenefits/MembershipBenefits';
import KeywordTagSlider from './components/KeywordTagSlider/KeywordTagSlider';
import ParallaxGallerySlider from './components/ParallaxGallerySlider/ParallaxGallerySlider';
import FAQSection from './components/FAQSection/FAQSection';
import DemoRequestPage from './pages/DemoRequestPage/DemoRequestPage';
import './App.css';

const App = () => {
  const MainContent = () => (
    <>
      <Hero />
      <ThreeD />
      <LogoSlider />
      <ParallaxGallerySlider />
      <HowItWorks />
      <KeywordTagSlider />
      <MembershipBenefits />
      <Features />
      <KeywordTagSlider />
      <PricingSection />
      <FAQSection />
    </>
  );

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/demo-request" element={<DemoRequestPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;