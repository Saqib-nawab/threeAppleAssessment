// src/App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import EndorsementSection from "./components/EndorsementSection";
import EducationSolutionsSection from "./components/EducationSolutionsSection";

function App() {
  return (
    <div>
      <HeroSection />
      <EndorsementSection />
      <EducationSolutionsSection />
    </div>
  );
}

export default App;