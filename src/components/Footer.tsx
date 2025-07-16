import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden border-t-4 border-mango-500 mt-20">
      {/* Pixel Grid Overlay */}
      <div className="absolute inset-0 z-0 pixel-grid pointer-events-none opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + Socials */}
          <div className="lg:col-span-1 flex flex-col items-start space-y-6">
            <Link to="/" className="flex items-center space-x-2 mb-3">
              <img
                src="https://i.postimg.cc/3xfyrcV6/Frame-4467.png"
                alt="Pixel Mango Logo"
                className="w-12 h-12"
              />
              <span className="text-2xl font-pixel text-mango-500 pixel-text drop-shadow">Pixel Mango</span>
            </Link>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.facebook.com/61576668292521"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all border-2 border-transparent hover:border-mango-500 hover:shadow-xl"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-mango-500 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/pixelmango.studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all border-2 border-transparent hover:border-mango-500 hover:shadow-xl"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-mango-500 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/pixel-mango/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all border-2 border-transparent hover:border-mango-500 hover:shadow-xl"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:text-mango-500 transition-colors" />
              </a>
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-pixel text-mango-500 tracking-wide">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/brand-identity" className="footer-link">Brand Identity Design</Link>
              </li>
              <li>
                <Link to="/services/social-media" className="footer-link">Social Media Branding</Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="footer-link">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services/website-development" className="footer-link">Website Development</Link>
              </li>
              <li>
                <Link to="/services/content-creation" className="footer-link">Content Creation</Link>
              </li>
              <li>
                <Link to="/services/consultation-strategy" className="footer-link">Consultation &amp; Strategy</Link>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-pixel text-mango-500 tracking-wide">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/support/FAQ" className="footer-link">FAQ</Link>
              </li>
              <li>
                <Link to="/support/about-us" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/support/contact-us" className="footer-link">Contact Us</Link>
              </li>
            </ul>
          </div>
          {/* Portfolio */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-pixel text-mango-500 tracking-wide">Portfolio</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/portfolio/aizaan-ecommerce-rebranding" className="footer-link">Aizaan Ecommerce &amp; Rebranding</Link>
              </li>
              <li>
                <Link to="/portfolio/santoku-knife-store-ux" className="footer-link">Santoku Knife Store UX Study</Link>
              </li>
              <li>
                <Link to="/portfolio/puffy-homepage-redesign" className="footer-link">Puffy Homepage Redesign</Link>
              </li>
              <li>
                <Link to="/portfolio/sfu-snap-app-redesign" className="footer-link">SFU Snap App Redesign</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pixel Mango. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="footer-link text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="footer-link text-sm">Terms of Service</Link>
            <Link to="/cookie-policy" className="footer-link text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
