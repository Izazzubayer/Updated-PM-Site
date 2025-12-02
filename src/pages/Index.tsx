import React from 'react';
import { SEO } from '../components/SEO';
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
  // FAQ Schema for homepage
  const homeFaqs = [
    {
      question: "What services does Pixel Mango offer?",
      answer: "Pixel Mango offers premium branding, logo design, social media branding, UI/UX design, website development, and strategic consulting services for small to medium-sized businesses."
    },
    {
      question: "How much do Pixel Mango's services cost?",
      answer: "Our services are competitively priced to provide premium quality without agency-level pricing. Contact us for a custom quote based on your specific needs and project scope."
    },
    {
      question: "What industries does Pixel Mango specialize in?",
      answer: "We specialize in branding for clothing brands, cafés & restaurants, e-commerce stores, and small to medium businesses across various industries."
    },
    {
      question: "How long does a typical branding project take?",
      answer: "A complete brand identity project typically takes 2-4 weeks, depending on the scope. Website development projects range from 3-8 weeks based on complexity."
    },
    {
      question: "Where is Pixel Mango located?",
      answer: "Pixel Mango is based in Dhaka, Bangladesh, but we work with clients globally through remote collaboration."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      <SEO
        title="Premium Branding & Web Design Agency for Small Businesses"
        description="Pixel Mango transforms small business dreams into big brand reality. Premium branding, stunning websites, and creative services for clothing brands, cafés, e-commerce & more. Based in Dhaka, Bangladesh."
        keywords="branding agency, web design agency, logo design, brand identity, UI/UX design, small business branding, e-commerce website design, creative agency Dhaka, affordable branding services, pixel art design"
        url="/"
        faqs={homeFaqs}
        reviews={[
          {
            author: "Fameta Baraka",
            rating: 5,
            reviewBody: "Pixel Mango transformed my Hijab/Abaya shop's entire identity. The branding is perfect - it captures exactly what I wanted to convey to my customers.",
            datePublished: "2024-08-15"
          },
          {
            author: "Takiyona Muteshi",
            rating: 5,
            reviewBody: "The work Izaz has done for Santoku is splendid. He provided me details as to how to make my brand work better and he knows his craft.",
            datePublished: "2024-09-20"
          }
        ]}
      />
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
