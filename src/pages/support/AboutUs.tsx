
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AboutUs = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <Header />
    <main className="flex-1 pt-16 pb-16 px-4 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-pixel text-mango-500 mt-8 mb-4">About Us</h1>
      <div className="max-w-2xl w-full my-8 bg-white/80 rounded-xl shadow-lg p-8 border-4 border-black pixel-border animate-pixel-glow">
        <p className="text-lg text-black mb-4">
          Pixel Mango brings together creativity, strategy, and technology under one vibrant roof.
        </p>
        <p className="text-lg text-black mb-4">
          Our team is passionate about elevating your brand, building amazing experiences, and pushing the boundaries of design and development.
        </p>
        <p className="text-lg text-black">
          Based globally, we take pride in transforming ideas into award-winning projects. Curious about our story? Get to know us, and let's co-create the extraordinary!
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default AboutUs;
