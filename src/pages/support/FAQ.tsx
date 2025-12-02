
import React from "react";
import { SEO } from '../../components/SEO';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FAQ = () => {
  // FAQ structured data for SEO
  const faqItems = [
    {
      question: "What is Pixel Mango?",
      answer: "Pixel Mango is your creative technology partner, blending strategic design with state-of-the-art digital solutions. We offer branding, web design, UI/UX design, and strategic consulting services."
    },
    {
      question: "How can I get in touch with Pixel Mango?",
      answer: "You can reach us through our Contact Us page, via email, WhatsApp, or Facebook Messenger. We typically respond within 24 hours on business days."
    },
    {
      question: "Can you help rebrand my business?",
      answer: "Absolutely! We offer comprehensive Brand Identity Design services including logo design, color palette development, typography selection, and complete brand guidelines."
    },
    {
      question: "What services does Pixel Mango offer?",
      answer: "We offer Brand Identity Design, Social Media Branding, UI/UX Design, Website Development, and Strategic Consulting services for small to medium-sized businesses."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies based on project scope and requirements. We offer competitive rates that provide premium quality without typical agency pricing. Contact us for a custom quote."
    }
  ];

  return (
  <div className="min-h-screen bg-white flex flex-col">
    <SEO
      title="Frequently Asked Questions - Get Answers About Our Services"
      description="Find answers to common questions about Pixel Mango's branding, web design, and creative services. Learn about our process, pricing, and how we can help your business grow."
      keywords="FAQ, Pixel Mango questions, branding FAQ, web design FAQ, agency services, pricing questions, design process"
      url="/support/faq"
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Support', url: '/support' },
        { name: 'FAQ', url: '/support/faq' }
      ]}
      faqs={faqItems}
    />
    <Header />
    <main className="flex-1 pt-16 pb-16 px-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-pixel text-mango-500 mt-8 mb-4">Frequently Asked Questions</h1>
      <div className="max-w-2xl w-full my-8 shadow-lg p-8 border-4">
        <ol className="space-y-6 text-md text-black">
          <li>
            <strong>Q:</strong> What is Pixel Mango?<br />
            <strong>A:</strong> Pixel Mango is your creative technology partner, blending strategic design with state-of-the-art digital solutions.
          </li>
          <li>
            <strong>Q:</strong> How can I get in touch with Pixel Mango?<br />
            <strong>A:</strong> Visit our <a href="/support/contact-us" className="footer-link text-mango-500 underline">Contact Us</a> page or send us a message any time!
          </li>
          <li>
            <strong>Q:</strong> Can you help rebrand my business?<br />
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
};

export default FAQ;
