
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-lg font-semibold">The Kow Company Ltd</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses through innovative digital solutions, advanced 3D experiences, and AI-powered automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-green-500 transition-colors">Image Editing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-green-500 transition-colors">Video Production</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-green-500 transition-colors">3D Modeling</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-green-500 transition-colors">CGI Rendering</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-green-500 transition-colors">Software Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-green-500 transition-colors">AI Automation</Link></li>
            </ul>
          </div>

          {/* Products & Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/products/retouched-ai" className="text-gray-400 hover:text-green-500 transition-colors">Retouched AI</Link></li>
              <li><Link to="/products/hotsnap" className="text-gray-400 hover:text-green-500 transition-colors">HotSnap</Link></li>
              <li><Link to="/integrations" className="text-gray-400 hover:text-green-500 transition-colors">Integrations</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-green-500 transition-colors">Pricing</Link></li>
              <li><Link to="/career" className="text-gray-400 hover:text-green-500 transition-colors">Career</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-green-500 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/support/about-us" className="text-gray-400 hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/support/contact-us" className="text-gray-400 hover:text-green-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/support/faq" className="text-gray-400 hover:text-green-500 transition-colors">FAQ</Link></li>
              <li><Link to="/support/resources" className="text-gray-400 hover:text-green-500 transition-colors">Resources</Link></li>
              <li><Link to="/signin" className="text-gray-400 hover:text-green-500 transition-colors">Sign In</Link></li>
              <li><Link to="/signup" className="text-gray-400 hover:text-green-500 transition-colors">Sign Up</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 The Kow Company Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
