
import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/59e78e85-cc0a-4c41-8037-5153fb6fd80c.png"
                alt="Pixel Mango Logo"
                className="w-10 h-10 rounded-full shadow-lg"
              />
              <span className="text-lg font-semibold">Pixel Mango</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Pixel Mango is your creative ally, specializing in branding, design, content, and tech solutions.
              Fresh ideas, bold visuals, and seamless digital experiences, handcrafted for you.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/61576668292521"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/pixelmango.studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/pixel-mango/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation (matches header) */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services/brand-identity" className="text-gray-400 hover:text-green-500 transition-colors">Brand Identity Design</Link>
              </li>
              <li>
                <Link to="/services/social-media" className="text-gray-400 hover:text-green-500 transition-colors">Social Media Branding</Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="text-gray-400 hover:text-green-500 transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services/website-development" className="text-gray-400 hover:text-green-500 transition-colors">Website Development</Link>
              </li>
              <li>
                <Link to="/services/content-creation" className="text-gray-400 hover:text-green-500 transition-colors">Content Creation</Link>
              </li>
              <li>
                <Link to="/services/consultation-strategy" className="text-gray-400 hover:text-green-500 transition-colors">Consultation & Strategy</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-green-500 transition-colors">Support</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Portfolio</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-green-500 transition-colors">Our Work</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-green-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-green-500 transition-colors">Pricing</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pixel Mango. All rights reserved. Izaz Zubayer
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
