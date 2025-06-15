
import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Socials */}
          <div className="lg:col-span-1 space-y-6 flex flex-col">
            <Link to="/" className="flex items-center space-x-2 mb-2">
              <img
                src="/lovable-uploads/59e78e85-cc0a-4c41-8037-5153fb6fd80c.png"
                alt="Pixel Mango Logo"
                className="w-10 h-10 rounded-full shadow-lg"
              />
              <span className="text-lg font-semibold">Pixel Mango</span>
            </Link>
            <div className="flex space-x-4 mt-2">
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

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
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
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/support/FAQ" className="text-gray-400 hover:text-green-500 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/support/AboutUs" className="text-gray-400 hover:text-green-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/support/ContactUs" className="text-gray-400 hover:text-green-500 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Portfolio</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/portfolio/aizaan-ecommerce-rebranding" className="text-gray-400 hover:text-green-500 transition-colors">Aizaan Ecommerce & Rebranding</Link>
              </li>
              <li>
                <Link to="/portfolio/santoku-knife-store-ux" className="text-gray-400 hover:text-green-500 transition-colors">Santoku Knife Store UX Study</Link>
              </li>
              <li>
                <Link to="/portfolio/puffy-homepage-redesign" className="text-gray-400 hover:text-green-500 transition-colors">Puffy Homepage Redesign</Link>
              </li>
              <li>
                <Link to="/portfolio/sfu-snap-app-redesign" className="text-gray-400 hover:text-green-500 transition-colors">SFU Snap App Redesign</Link>
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

