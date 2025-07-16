import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    emailjs.send(
      'service_pyjaeva',
      'template_4wo4hzb',
      {
        name: form.name,
        email: form.email,
        message: form.message,
        title: 'Contact Us',
      },
      'pOovOSjYhM6iukuo7'
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

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-16 pb-16 px-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-pixel text-mango-500 mt-8 mb-4">Contact Us</h1>
        <div className="max-w-xl w-full my-8 bg-white/80 shadow-lg p-8 border-4">
          <p className="text-m text-black mb-6">
            Ready to connect? Our team is eager to hear from you! For project inquiries, collaborations, or just to say hello, drop us a note below:
          </p>
          {!submitted ? (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input type="text" required placeholder="Your Name" name="name" value={form.name} onChange={handleChange} className="border-black border-2  px-4 py-2 text-base"/>
              <input type="email" required placeholder="Your Email" name="email" value={form.email} onChange={handleChange} className="border-black border-2  px-4 py-2 text-base"/>
              <textarea rows={5} required placeholder="Your Message" name="message" value={form.message} onChange={handleChange} className="border-black border-2  px-4 py-2 text-base"/>
              <button type="submit" className="pixel-button w-full py-3 mt-2" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {error && <p className="text-red-500 text-center font-mono mt-2">{error}</p>}
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
              <span className="text-2xl font-pixel text-mango-500 mb-4">Thank you!</span>
              <p className="text-gray-700 font-mono text-center mb-4">
                We received your message and will get back to you shortly.<br />
                In the meantime, take a moment to learn a little about us — we've put a lot of effort into creating this experience for you.
              </p>
            </div>
          )}
          <p className="text-base text-gray-600 mt-6">
            You can also email us directly at <a href="mailto:contact@pixelmango.studio" className="footer-link text-mango-500">contact@pixelmango.studio</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
