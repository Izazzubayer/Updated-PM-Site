
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
            <p className="text-lg text-gray-600">Last updated: December 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At The Kow Company Ltd, we collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Account credentials and preferences</li>
                <li>Files and content you upload to our services</li>
                <li>Payment and billing information</li>
                <li>Communications with our support team</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>With service providers who assist us in operating our services</li>
                <li>When required by law or to respond to legal process</li>
                <li>To protect our rights, property, or safety, or that of others</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
                internet or electronic storage is 100% secure.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">5. Your Rights (GDPR Compliance)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are a resident of the European Union, you have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Right to access your personal data</li>
                <li>Right to rectify inaccurate personal data</li>
                <li>Right to erase your personal data</li>
                <li>Right to restrict processing of your personal data</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">6. Third-Party Analytics</h2>
              <p className="text-gray-700 leading-relaxed">
                We may use third-party analytics services, such as Google Analytics, to help understand how our services 
                are used. These services may collect information sent by your browser as part of a web page request.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">7. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@thekow.company or 
                through our contact page.
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
