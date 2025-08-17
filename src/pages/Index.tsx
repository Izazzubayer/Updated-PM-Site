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
import ScrollFadeWrapper from '../components/ScrollFadeWrapper';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="relative">
        {/* Hero Section - No fade wrapper as it's the initial view */}
        <HeroSection />
        
        <ScrollFadeWrapper direction="up" delay={0.1}>
        <MissionSection />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper direction="up" delay={0.2}>
        <ServicesSection />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper direction="left" delay={0.1}>
        <WhoWeCaterToSection />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper direction="right" delay={0.1}>
        <WhyChooseUsSection />
        </ScrollFadeWrapper>
        
        <ScrollFadeWrapper direction="up" delay={0.2}>
        <HowWeWorkSection />
        </ScrollFadeWrapper>
        
        {/* Mobile: GettingStartedSection above ToolsIntegrationSection */}
        <div className="block md:hidden">
          <ScrollFadeWrapper direction="up" delay={0.1}>
          <GettingStartedSection />
          </ScrollFadeWrapper>
          <ScrollFadeWrapper direction="up" delay={0.2}>
          <ToolsIntegrationSection />
          </ScrollFadeWrapper>
        </div>
        
        {/* Desktop/Tablet: Original order */}
        <div className="hidden md:block">
          <ScrollFadeWrapper direction="up" delay={0.1}>
          <ToolsIntegrationSection />
          </ScrollFadeWrapper>
          <ScrollFadeWrapper direction="up" delay={0.2}>
          <GettingStartedSection />
          </ScrollFadeWrapper>
        </div>
      </main>
      
      <ScrollFadeWrapper direction="up" delay={0.1}>
      <Footer />
      </ScrollFadeWrapper>
    </div>
  );
};

export default Index;
