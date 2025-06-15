
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white font-product">
      <Header />
      <ScrollToTop />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-jakarta">Terms of Service</h1>
            <p className="text-lg text-gray-600">Last updated: June 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Using Pixel Mango</h2>
              <p className="text-gray-700 leading-relaxed">
                When you use Pixel Mango, you’re joining a creative, positive community. Be respectful, play fair, and use our
                services only for legal, ethical purposes. If you upload content, make sure you have the right to use it.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Accounts & Security</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use a strong password. Keep your credentials secret. If your account is compromised, let us know right away.</li>
                <li>Don’t share your account. Each creative deserves their own access.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You own your creations and ideas. Pixel Mango owns its branding, website design, product technology, and related IP.
                Don’t copy, misuse, or rebrand our stuff—as we won’t claim yours.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Payments & Refunds</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Payments are due up front for new projects or by invoice as agreed.</li>
                <li>Refunds available for incomplete or undelivered work only—let’s resolve any issue together.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Service Availability</h2>
              <p className="text-gray-700 leading-relaxed">
                We strive for 99.9% uptime and clarity on timelines, but can’t guarantee against the unexpected. If downtime or
                delays occur, we’ll communicate and work to resolve it as swiftly as possible.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                If you violate these terms, we may suspend or terminate your account. You can leave Pixel Mango whenever you want; 
                we’ll delete your info if you ask. We reserve the right to update these terms; we’ll always post any changes here.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                Questions about our terms? Contact <a className="underline text-green-600" href="mailto:legal@pixelmango.com">legal@pixelmango.com</a> anytime—let’s collaborate with clarity!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
