
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ContactUs = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />
    <main className="flex-1 pt-16 pb-16 px-4 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-pixel text-mango-500 mt-8 mb-4">Contact Us</h1>
      <div className="max-w-xl w-full my-8 bg-white/80 rounded-xl shadow-lg p-8 border-4 border-black pixel-border animate-pixel-glow">
        <p className="text-lg text-black mb-6">
          Ready to connect? Our team is eager to hear from you! For project inquiries, collaborations, or just to say hello, drop us a note below:
        </p>
        <form className="flex flex-col gap-4">
          <input type="text" required placeholder="Your Name" className="border-black border-2 rounded-lg px-4 py-2 text-base"/>
          <input type="email" required placeholder="Your Email" className="border-black border-2 rounded-lg px-4 py-2 text-base"/>
          <textarea rows={5} required placeholder="Your Message" className="border-black border-2 rounded-lg px-4 py-2 text-base"/>
          <button type="submit" className="pixel-button w-full py-3 mt-2">Send Message</button>
        </form>
        <p className="text-base text-gray-600 mt-6">
          You can also email us directly at <a href="mailto:contact@pixelmango.studio" className="footer-link text-mango-500">contact@pixelmango.studio</a>
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default ContactUs;
