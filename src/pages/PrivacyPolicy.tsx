
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white font-product">
      <Header />
      <ScrollToTop />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-jakarta">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: June 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Welcome to Pixel Mango's Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Pixel Mango, we value your trust and creativity. We only collect data when necessary, never for the sake of it,
                and always with your permission. Your privacy and ideas stay yours.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We use your information only to provide, improve, and support our creative services. We do not sell your data. 
                No hidden terms, no secrets, just straightforward privacy.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">What We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your name and contact details (when you reach out or sign up)</li>
                <li>Project files or media you upload</li>
                <li>Basic analytics—anonymous, never intrusive</li>
                <li>Nothing more, and never without your say-so</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">How We Use It</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To create and deliver the services you request</li>
                <li>To keep you updated on your projects (if you opt in)</li>
                <li>To understand how our site is used (only aggregated/anonymous)</li>
                <li>To contact you if you ask us to</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Your Choices & Rights</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access or correct your info anytime—just contact us</li>
                <li>Request deletion, and we’ll make it happen promptly</li>
                <li>Opt out from any communications whenever you like</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use modern security tools and keep our systems updated, but no online system is foolproof. If we ever
                spot a risk to your information, we will notify you immediately and be transparent every step of the way.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                Have questions? Need support? Email us at <a href="mailto:privacy@pixelmango.com" className="text-green-600 underline">privacy@pixelmango.com</a>.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                By using Pixel Mango, you agree to this privacy approach. We’ll always let you know before we change anything important.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
