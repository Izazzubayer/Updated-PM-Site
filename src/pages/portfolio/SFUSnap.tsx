import React from 'react';
import { Link } from 'react-router-dom';

const SFUSnap = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-20">
    <h1 className="text-3xl font-pixel text-mango-500 mb-6">SFU Snap App Redesign</h1>
    <p className="text-lg text-gray-700 font-mono mb-6 text-center max-w-xl">
      We'll post the case study soon.<br />
      In the meanwhile, read the case study of Aizaan.
    </p>
    <Link
      to="/portfolio/aizaan-ecommerce-rebranding"
      className="pixel-button px-6 py-3 font-pixel text-white bg-mango-500 hover:bg-mango-600 rounded transition"
    >
      Read Aizaan Case Study
    </Link>
  </div>
);

export default SFUSnap; 