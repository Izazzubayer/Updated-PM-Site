
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
            <p className="text-lg text-gray-600">Last updated: June 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Cookies at Pixel Mango</h2>
              <p className="text-gray-700 leading-relaxed">
                At Pixel Mango, cookies are just a way to make your visit smoother and more fun. No tracking for profit, no creepy stuff.
                Cookies help us remember your preferences and improve your browsing experience.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">What Types We Use</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Essential cookies: Keep the site secure and functional.
                </li>
                <li>
                  Analytics cookies: Tell us how the site is used—always anonymized.
                </li>
                <li>
                  Preference cookies: Remember your theme or language choice.
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Sometimes services (like embedded videos or analytics) use their own cookies. We'll always notify you where possible,
                and you can block or clear them anytime in your browser.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Managing Cookies</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use our cookie banner to choose your preference at any time.</li>
                <li>Change settings in your browser to block or delete cookies.</li>
              </ul>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Disabling cookies may impact some features, but you’ll always have control and access to your creative tools.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-jakarta">Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                Questions? Reach out at <a className="text-green-600 underline" href="mailto:privacy@pixelmango.com">privacy@pixelmango.com</a>. We'll keep things transparent and creative!
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
