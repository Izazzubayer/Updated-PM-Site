
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white font-product">
      <Header />
      <ScrollToTop />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-jakarta">Cookie Policy</h1>
            <p className="text-lg text-gray-600">Last updated: December 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">What Are Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Kow Company Ltd uses cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To enable certain functions of our services</li>
                <li>To provide analytics and insights about usage</li>
                <li>To store your preferences and settings</li>
                <li>To improve our services and user experience</li>
                <li>To remember your login information (with your consent)</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700">
                    These cookies are necessary for the website to function and cannot be switched off. They are usually 
                    set in response to actions you take such as setting privacy preferences or logging in.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Cookies</h3>
                  <p className="text-gray-700">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the 
                    performance of our site. They help us know which pages are most popular and see how visitors move around the site.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                  <p className="text-gray-700">
                    These cookies enable the website to provide enhanced functionality and personalization. They may be 
                    set by us or by third-party providers whose services we have added to our pages.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Targeting Cookies</h3>
                  <p className="text-gray-700">
                    These cookies may be set through our site by our advertising partners. They may be used to build a 
                    profile of your interests and show you relevant content on other sites.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use third-party services that place cookies on your device, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Google Analytics for website analytics</li>
                <li>Social media plugins for sharing content</li>
                <li>Payment processors for transaction handling</li>
                <li>Customer support tools for chat functionality</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have several options for managing cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use the cookie consent banner when you first visit our site</li>
                <li>Adjust your browser settings to block or delete cookies</li>
                <li>Use browser extensions that manage cookies</li>
                <li>Opt out of specific third-party services directly</li>
              </ul>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Disabling certain cookies may impact the functionality of our website and services.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Cookie Consent</h2>
              <p className="text-gray-700 leading-relaxed">
                By continuing to use our website, you consent to our use of cookies as described in this policy. 
                You can withdraw your consent at any time by adjusting your browser settings or contacting us directly.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at privacy@thekow.company or 
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

export default CookiePolicy;
