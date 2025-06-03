
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-lg font-semibold">{t('companyName')}</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              {t('companyDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('services')}</h3>
            <ul className="space-y-3">
              <li><Link to="/services/image-editing" className="text-gray-400 hover:text-green-500 transition-colors">{t('imageEditing')}</Link></li>
              <li><Link to="/services/video-production" className="text-gray-400 hover:text-green-500 transition-colors">{t('videoProduction')}</Link></li>
              <li><Link to="/services/3d-modeling" className="text-gray-400 hover:text-green-500 transition-colors">{t('threeDModeling')}</Link></li>
              <li><Link to="/services/cgi-rendering" className="text-gray-400 hover:text-green-500 transition-colors">{t('cgiRendering')}</Link></li>
              <li><Link to="/services/software-development" className="text-gray-400 hover:text-green-500 transition-colors">{t('softwareDevelopment')}</Link></li>
              <li><Link to="/services/ai-automation" className="text-gray-400 hover:text-green-500 transition-colors">{t('aiAutomation')}</Link></li>
            </ul>
          </div>

          {/* Products & Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('products')}</h3>
            <ul className="space-y-3">
              <li><Link to="/products/retouched-ai" className="text-gray-400 hover:text-green-500 transition-colors">Retouched AI</Link></li>
              <li><Link to="/products/holosnap" className="text-gray-400 hover:text-green-500 transition-colors">HoloSnap</Link></li>
              <li><Link to="/integrations" className="text-gray-400 hover:text-green-500 transition-colors">{t('integrations')}</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-green-500 transition-colors">{t('pricing')}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('support')}</h3>
            <ul className="space-y-3">
              <li><Link to="/support/about-us" className="text-gray-400 hover:text-green-500 transition-colors">{t('aboutUs')}</Link></li>
              <li><Link to="/support/contact-us" className="text-gray-400 hover:text-green-500 transition-colors">{t('contactUs')}</Link></li>
              <li><Link to="/support/faq" className="text-gray-400 hover:text-green-500 transition-colors">{t('faq')}</Link></li>
              <li><Link to="/support/resources" className="text-gray-400 hover:text-green-500 transition-colors">{t('resources')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t('allRightsReserved')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-green-500 text-sm transition-colors">{t('privacyPolicy')}</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-green-500 text-sm transition-colors">{t('termsOfService')}</Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-green-500 text-sm transition-colors">{t('cookiePolicy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
