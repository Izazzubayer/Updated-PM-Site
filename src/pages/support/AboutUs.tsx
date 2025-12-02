import React from "react";
import { SEO } from '../../components/SEO';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AboutUs = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <SEO
      title="About Us - Meet the Team Behind Pixel Mango"
      description="Learn about Pixel Mango, a creative branding and web design agency in Dhaka, Bangladesh. Founded by Izaz Zubayer, we bring creativity, strategy, and technology together to elevate brands."
      keywords="about Pixel Mango, creative agency Dhaka, branding agency Bangladesh, Izaz Zubayer designer, web design Dhaka, digital agency founder"
      url="/support/about-us"
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Support', url: '/support' },
        { name: 'About Us', url: '/support/about-us' }
      ]}
    />
    <Header />
    <main className="flex-1 pt-16 pb-16 px-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-pixel text-mango-500 mt-8 mb-4">About Us</h1>
      <div className="max-w-2xl w-full my-8 bg-white/80 shadow-lg p-8 border-4">
        <p className="text-md text-black mb-4">
          Pixel Mango brings together creativity, strategy, and technology under one vibrant roof.
        </p>
        <p className="text-md text-black mb-4">
          Our team is passionate about elevating your brand, building amazing experiences, and pushing the boundaries of design and development.
        </p>
        <p className="text-md text-black">
          Based in Dhaka, Bangladesh, we take pride in transforming ideas into award-winning projects. Curious about our story? Get to know us, and let's co-create the extraordinary!
        </p>
        <br />
        <p className="text-sm text-black font-bold">
          / Izaz Zubayer, Founder.
        </p>
        <div className="flex items-center gap-5 mt-3 justify-center">
          {/* Website */}
          <a href="https://www.izazzubayer.com/" target="_blank" rel="noopener noreferrer" title="Website">
            <svg className="w-5 h-5 text-mango-500 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/izazzubayer/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <svg className="w-5 h-5 text-mango-500 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" /></svg>
          </a>
          {/* Email */}
          <a href="mailto:izazzubayer@gmail.com" title="Email">
            <svg className="w-5 h-5 text-mango-500 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="M22 6l-10 7L2 6" /></svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/izaz.zubayer" target="_blank" rel="noopener noreferrer" title="Instagram">
            <svg className="w-5 h-5 text-mango-500 inline" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" /></svg>
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default AboutUs;
