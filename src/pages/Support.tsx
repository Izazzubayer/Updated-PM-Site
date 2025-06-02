
import React from 'react';
import { MessageCircle, FileText, Users, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Support = () => {
  const supportOptions = [
    {
      icon: FileText,
      title: "FAQ",
      description: "Find answers to commonly asked questions about our products and services.",
      link: "/support/faq",
      color: "blue"
    },
    {
      icon: Users,
      title: "About Us",
      description: "Learn more about our company, mission, and the team behind our innovative solutions.",
      link: "/support/about-us",
      color: "green"
    },
    {
      icon: Mail,
      title: "Contact Us",
      description: "Get in touch with our support team for personalized assistance with your questions.",
      link: "/support/contact-us",
      color: "purple"
    },
    {
      icon: MessageCircle,
      title: "Resources",
      description: "Access tutorials, guides, and documentation to help you get the most out of our tools.",
      link: "/support/resources",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
      green: "bg-green-100 text-green-500 group-hover:bg-green-500 group-hover:text-white",
      purple: "bg-purple-100 text-purple-500 group-hover:bg-purple-500 group-hover:text-white",
      orange: "bg-orange-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you succeed. Find the support and resources you need to make the most of our products and services.
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {supportOptions.map((option, index) => (
                <Link
                  key={index}
                  to={option.link}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(option.color)}`}>
                    <option.icon className="w-8 h-8 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{option.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
              <p className="text-lg text-gray-600">Jump to the most popular support resources.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                to="/products" 
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Product Demos</h4>
                <p className="text-sm text-gray-600">Explore our products</p>
              </Link>
              
              <Link 
                to="/pricing" 
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Pricing Plans</h4>
                <p className="text-sm text-gray-600">View pricing options</p>
              </Link>
              
              <Link 
                to="/integrations" 
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Integrations</h4>
                <p className="text-sm text-gray-600">Connect with your tools</p>
              </Link>
              
              <Link 
                to="/blog" 
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h4 className="font-semibold text-gray-900 mb-2">Latest Updates</h4>
                <p className="text-sm text-gray-600">Read our blog</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is ready to assist you with any questions or issues you might have.
            </p>
            <Link 
              to="/support/contact-us"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors inline-block"
            >
              Contact Support
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
