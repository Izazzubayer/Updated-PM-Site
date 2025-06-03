
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProductsSection from '../components/ProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import IntegrationsSection from '../components/IntegrationsSection';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';
import TechnologySection from '../components/TechnologySection';
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
        
        <ParallaxWrapper depth={0.8}>
          <ServicesSection />
        </ParallaxWrapper>
        
        <ParallaxWrapper depth={0.6}>
          <ProductsSection />
        </ParallaxWrapper>
        
        <ParallaxWrapper depth={0.9}>
          <StatsSection />
        </ParallaxWrapper>
        
        <ParallaxWrapper depth={0.7}>
          <TechnologySection />
        </ParallaxWrapper>
        
        <ParallaxWrapper depth={0.5}>
          <TestimonialsSection />
        </ParallaxWrapper>
        
        <ParallaxWrapper depth={0.8}>
          <IntegrationsSection />
        </ParallaxWrapper>
        
        <ParallaxWrapper depth={0.4}>
          <CTASection />
        </ParallaxWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
