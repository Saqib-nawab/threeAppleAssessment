// src/App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import EndorsementSection from "./components/EndorsementSection";
import EducationSolutionsSection from "./components/EducationSolutionsSection";
import SoftwareSolutionsSection from "./components/SoftwareSolutionsSection";

function App() {
  return (
    <div>
      <HeroSection />
      <EndorsementSection />
      <EducationSolutionsSection />
      <SoftwareSolutionsSection />
    </div>
  );
}

export default App;