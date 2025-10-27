import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GettingStartedSection from "../../components/GettingStartedSection";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
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
