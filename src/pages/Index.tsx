
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProductsSection from '../components/ProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import IntegrationsSection from '../components/IntegrationsSection';
import Footer from '../components/Footer';
import ScrollAnimateWrapper from '../components/ScrollAnimateWrapper';

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ScrollAnimateWrapper animation="fade-up" delay={200}>
          <ServicesSection />
        </ScrollAnimateWrapper>
        <ScrollAnimateWrapper animation="slide-left" delay={300}>
          <ProductsSection />
        </ScrollAnimateWrapper>
        <ScrollAnimateWrapper animation="scale-in" delay={400}>
          <TestimonialsSection />
        </ScrollAnimateWrapper>
        <ScrollAnimateWrapper animation="fade-up" delay={500}>
          <IntegrationsSection />
        </ScrollAnimateWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
