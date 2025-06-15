
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
import ParallaxWrapper from '../components/ParallaxWrapper';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="relative">
        <ParallaxWrapper depth={1}>
          <HeroSection />
        </ParallaxWrapper>
        
        <ParallaxWrapper depth={0.9}>
          <MissionSection />
        </ParallaxWrapper>
        
        <ParallaxWrapper depth={0.8}>
          <ServicesSection />
        </ParallaxWrapper>
        
        <ParallaxWrapper depth={0.7}>
          <WhoWeCaterToSection />
        </ParallaxWrapper>
        
        <ParallaxWrapper depth={0.9}>
          <WhyChooseUsSection />
        </ParallaxWrapper>
        
        <ParallaxWrapper depth={0.6}>
          <HowWeWorkSection />
        </ParallaxWrapper>
        
        <ParallaxWrapper depth={0.8}>
          <ToolsIntegrationSection />
        </ParallaxWrapper>
        
        <ParallaxWrapper depth={0.5}>
          <GettingStartedSection />
        </ParallaxWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
