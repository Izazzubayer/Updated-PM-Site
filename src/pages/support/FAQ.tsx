
import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is The Kow Company and what services do you offer?",
          answer: "The Kow Company is a creative technology company specializing in AI-powered solutions for image editing, video production, 3D modeling, CGI rendering, software development, and automation. We provide both services and products to help individuals and businesses enhance their creative workflows."
        },
        {
          question: "How do I get started with your products?",
          answer: "Getting started is easy! Simply visit our Products page, choose the tool that best fits your needs, and sign up for a free trial. We offer comprehensive tutorials and documentation to help you get up and running quickly."
        },
        {
          question: "Do you offer custom solutions for businesses?",
          answer: "Yes, we provide custom software development and AI automation solutions tailored to your specific business needs. Contact our team to discuss your requirements and get a personalized quote."
        }
      ]
    },
    {
      category: "Products",
      questions: [
        {
          question: "What is Retouched AI and how does it work?",
          answer: "Retouched AI is our advanced AI-powered image enhancement tool that automatically improves image quality, removes backgrounds, and performs professional retouching in seconds. It uses machine learning algorithms trained on millions of images to deliver professional-quality results."
        },
        {
          question: "Can HotSnap really convert 2D images to 3D models?",
          answer: "Yes! HotSnap uses cutting-edge AI technology to analyze 2D images and generate accurate 3D models. The process typically takes just a few minutes and supports various output formats for use in e-commerce, gaming, and virtual experiences."
        },
        {
          question: "Are there any file size or format limitations?",
          answer: "Our tools support most common image and video formats including JPEG, PNG, GIF, MP4, and MOV. File size limits vary by plan, with premium users enjoying higher limits and priority processing."
        }
      ]
    },
    {
      category: "Pricing & Billing",
      questions: [
        {
          question: "What pricing plans do you offer?",
          answer: "We offer flexible pricing plans including a free tier with basic features, professional plans for individuals and small teams, and enterprise solutions for larger organizations. Visit our Pricing page for detailed information about features and costs."
        },
        {
          question: "Can I cancel my subscription at any time?",
          answer: "Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period, and you won't be charged for the following period."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 30-day money-back guarantee for new subscribers. If you're not satisfied with our service within the first 30 days, contact our support team for a full refund."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What should I do if I'm experiencing technical issues?",
          answer: "First, check our Resources page for troubleshooting guides. If the issue persists, contact our support team through the Contact Us page with details about the problem, including your browser, operating system, and any error messages."
        },
        {
          question: "Do you provide API access for developers?",
          answer: "Yes, we offer comprehensive APIs for developers who want to integrate our AI tools into their own applications. Check our Integrations page for documentation and pricing information."
        },
        {
          question: "Is my data secure and private?",
          answer: "Absolutely. We use enterprise-grade security measures to protect your data, including encryption in transit and at rest. We never share your content with third parties, and you retain full ownership of your files."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to common questions about our products and services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredFAQ.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={questionIndex} className="bg-white border border-gray-200 rounded-lg">
                        <button
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          <ChevronDown 
                            className={`w-5 h-5 text-gray-500 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            
            {filteredFAQ.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No FAQs found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <a 
              href="/support/contact-us"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors inline-block"
            >
              Contact Support
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
