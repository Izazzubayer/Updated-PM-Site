
import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-lg font-semibold">The Kow Company Ltd</span>
            </div>
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
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Image Editing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Video Production</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">3D Modeling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">CGI Rendering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Software Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">AI Automation</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">HoloSnap</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Background AI</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Integration Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Support Center</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">hello@kowcompany.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-gray-400">123 Innovation Drive<br />Tech Valley, CA 94000</span>
              </li>
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
