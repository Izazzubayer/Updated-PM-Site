import React from "react";
import { SEO } from '../../components/SEO';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GettingStartedSection from "../../components/GettingStartedSection";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SEO
        title="Contact Us - Get a Free Quote for Your Project"
        description="Get in touch with Pixel Mango to discuss your branding, web design, or digital strategy needs. Request a free quote and let's create something extraordinary together."
        keywords="contact Pixel Mango, hire creative agency, project inquiry, web design quote, branding consultation, free design quote, start branding project"
        url="/support/contact-us"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Support', url: '/support' },
          { name: 'Contact Us', url: '/support/contact-us' }
        ]}
      />
      <Header />

      {/* Getting Started Section */}
      <div className="pt-16">
        <GettingStartedSection />
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
