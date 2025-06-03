
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
            <p className="text-lg text-gray-600">Last updated: December 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the services provided by The Kow Company Ltd, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Kow Company Ltd provides digital services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Image editing and photo retouching services</li>
                <li>Video production and editing</li>
                <li>3D modeling and CGI rendering</li>
                <li>Software development solutions</li>
                <li>AI automation tools</li>
                <li>Background removal services (Retouched.Ai)</li>
                <li>3D model generation (HoloSnap)</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">3. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate and complete information when creating an account</li>
                <li>Maintain the security of your account and password</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not upload content that infringes on intellectual property rights</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable local, state, national, and international laws</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">4. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                The service and its original content, features, and functionality are and will remain the exclusive property 
                of The Kow Company Ltd and its licensors. The service is protected by copyright, trademark, and other laws. 
                Our trademarks and trade dress may not be used in connection with any product or service without our express written consent.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">5. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For paid services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Payments are due according to the selected billing cycle</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>We reserve the right to change pricing with 30 days notice</li>
                <li>Accounts may be suspended for non-payment</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">6. Service Limitations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to provide reliable services but cannot guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>100% uptime or uninterrupted service</li>
                <li>Error-free operation</li>
                <li>Compatibility with all devices or software</li>
                <li>Specific turnaround times unless explicitly agreed upon</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">7. Account Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason 
                whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use 
                the service will cease immediately.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall The Kow Company Ltd, nor its directors, employees, partners, agents, suppliers, or 
                affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including 
                without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">9. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                Questions about the Terms of Service should be sent to us at legal@thekow.company or through our contact page.
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
