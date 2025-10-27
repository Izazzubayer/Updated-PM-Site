import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import ServicesSection from '../components/ServicesSection';
import WhoWeCaterToSection from '../components/WhoWeCaterToSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import HowWeWorkSection from '../components/HowWeWorkSection';
import ToolsIntegrationSection from '../components/ToolsIntegrationSection';
import GettingStartedSection from '../components/GettingStartedSection';
import Footer from '../components/Footer';
import Squares from '../components/Squares';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      {/* Continuous Animated Squares Background for entire page */}
      <div className="fixed inset-0 z-0">
        <Squares 
          speed={0.3}
          squareSize={40}
          direction="diagonal"
          borderColor="rgba(0, 0, 0, 0.08)"
          hoverFillColor="rgba(255, 149, 0, 0.1)"
        />
      </div>

      {/* All content on top of the background */}
      <div className="relative z-10">
        <Header />
        <main className="relative">
          <HeroSection />
          <MissionSection />
          <ServicesSection />
          <WhoWeCaterToSection />
          <WhyChooseUsSection />
          <HowWeWorkSection />
          
          {/* Mobile: GettingStartedSection above ToolsIntegrationSection */}
          <div className="block md:hidden">
            <GettingStartedSection />
            <ToolsIntegrationSection />
          </div>
          
          {/* Desktop/Tablet: Original order */}
          <div className="hidden md:block">
            <ToolsIntegrationSection />
            <GettingStartedSection />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
