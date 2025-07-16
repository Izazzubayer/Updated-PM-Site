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

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
  );
};

export default Index;
