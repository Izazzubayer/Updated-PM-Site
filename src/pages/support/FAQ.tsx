
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FAQ = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />
    <main className="flex-1 pt-16 pb-16 px-4 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-pixel text-mango-500 mt-8 mb-4">Frequently Asked Questions</h1>
      <div className="max-w-2xl w-full my-8 bg-white/80 rounded-xl shadow-lg p-8 border-4 border-black pixel-border animate-pixel-glow">
        <ol className="space-y-6 text-lg text-black">
          <li>
            <strong>Q:</strong> What is Pixel Mango?<br/>
            <strong>A:</strong> Pixel Mango is your creative technology partner, blending strategic design with state-of-the-art digital solutions.
          </li>
          <li>
            <strong>Q:</strong> How can I get in touch with Pixel Mango?<br/>
            <strong>A:</strong> Visit our <a href="/support/contact-us" className="footer-link text-mango-500 underline">Contact Us</a> page or send us a message any time!
          </li>
          <li>
            <strong>Q:</strong> Can you help rebrand my business?<br/>
            <strong>A:</strong> Absolutely! Explore our <a href="/services/brand-identity" className="footer-link text-mango-500 underline">Brand Identity Design</a> service.
          </li>
        </ol>
        <p className="mt-8 text-center text-base text-gray-700">
          For more info, contact <a href="/support/contact-us" className="footer-link text-mango-500">our team</a> or check our full list of services.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default FAQ;
