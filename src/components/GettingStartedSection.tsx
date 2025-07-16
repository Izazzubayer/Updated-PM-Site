import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, Briefcase, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const GettingStartedSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const services = [
    "Brand Identity & Logo Design",
    "Social Media Design & Branding",
    "UI/UX Design & Prototyping",
    "Website Development & E-Commerce",
    "Website Content & Copywriting",
    "Brand Strategy & Creative Consultation"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    emailjs.send(
      'service_pyjaeva', // Service ID
      'template_4wo4hzb', // Template ID
      {
        name: formData.name,
        email: formData.email,
        business: formData.business,
        service: formData.service,
        message: formData.message,
        title: formData.service || 'New Project Inquiry',
      },
      'pOovOSjYhM6iukuo7' // Public Key
    )
    .then(() => {
      setSubmitted(true);
      setLoading(false);
    })
    .catch(() => {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="quick-intake-form" className="py-20 bg-black text-white pixel-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-pixel text-mango-500 mb-6 pixel-text">Ready to Get Started?</h2>
            <p className="text-l mb-8 text-gray-300 font-mono">
              Let's bring your vision to life! Fill out our quick intake form and we'll get back to you within 24 hours with a custom proposal.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-mango-500 border-2 border-white flex items-center justify-center">
                  <span className="text-black font-pixel text-xs">1</span>
                </div>
                <span className="font-mono text-gray-300">Fill out the quick form</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-mango-500 border-2 border-white flex items-center justify-center">
                  <span className="text-black font-pixel text-xs">2</span>
                </div>
                <span className="font-mono text-gray-300">Receive custom proposal in 24hrs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-mango-500 border-2 border-white flex items-center justify-center">
                  <span className="text-black font-pixel text-xs">3</span>
                </div>
                <span className="font-mono text-gray-300">Start your project immediately</span>
              </div>
            </div>

            <div className="border-2 border-mango-500 p-6">
              <h3 className="text-lg font-pixel text-mango-500 mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Free Consultation Included
              </h3>
              <p className="text-sm text-gray-300 font-mono">
                Every project starts with a complimentary strategy session to ensure we're aligned with your goals.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="pixel-card bg-white p-8 text-black">
            <h3 className="text-2xl font-pixel text-center mb-6">Quick Intake Form</h3>
            {!submitted ? (
              <form 
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block text-sm font-pixel text-black mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-black font-mono focus:border-mango-500 focus:outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-pixel text-black mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-black font-mono focus:border-mango-500 focus:outline-none transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-pixel text-black mb-2">
                    <Briefcase className="w-4 h-4 inline mr-2" />
                    BUSINESS NAME
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-black font-mono focus:border-mango-500 focus:outline-none transition-all duration-300"
                    placeholder="Enter your business name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-pixel text-black mb-2">
                    SERVICE NEEDED *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-black font-mono focus:border-mango-500 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-pixel text-black mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    PROJECT DETAILS
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-black font-mono focus:border-mango-500 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full pixel-button py-4 px-6 font-pixel flex items-center justify-center space-x-2"
                  disabled={loading}
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>SEND MY PROJECT REQUEST</span>
                    </>
                  )}
                </button>
                {error && (
                  <p className="text-red-500 text-center font-mono mt-2">{error}</p>
                )}
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 animate-fade-in">
                <span className="text-2xl font-pixel text-mango-500 mb-4">Thank you!</span>
                <p className="text-gray-700 font-mono text-center mb-4">
                  We received your message and will get back to you shortly.<br />
                  In the meantime, take a moment to learn a little about us — we've put a lot of effort into creating this experience for you.
                </p>
              </div>
            )}
            <p className="text-xs text-gray-500 text-center mt-4 font-mono">
              We respect your privacy. Your information will never be shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
