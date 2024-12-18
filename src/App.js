// src/App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import EndorsementSection from "./components/EndorsementSection";
import EducationSolutionsSection from "./components/EducationSolutionsSection";
import SoftwareSolutionsSection from "./components/SoftwareSolutionsSection";
import ContactSection from "./components/ContactSection";
import StayInformedSection from './components/StayInformedSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div>
      <HeroSection />
      <EndorsementSection />
      <EducationSolutionsSection />
      <SoftwareSolutionsSection />
      <ContactSection />
      <StayInformedSection />
      <FooterSection />
    </div>
  );
}

export default App;