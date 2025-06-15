
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const personas = [
  {
    name: "Nadia, 25",
    role: "University Student",
    needs: ["Affordable, stylish hijabs for daily wear", "Quick mobile shopping"],
    goals: ["Find trendy outfits in under 5 minutes", "Trust product quality"],
    frustrations: ["Slow websites", "Unclear sizing", "Complex checkouts"],
  },
  {
    name: "Fatima, 32",
    role: "Working Professional",
    needs: ["Elegant abayas for office and events", "Reliable delivery"],
    goals: ["Shop seamlessly across devices", "Engage with brand on Instagram"],
    frustrations: ["Poor visuals", "Lack of brand consistency", "No return policy clarity"],
  }
];

const Aizaan = () => (
  <div className="min-h-screen bg-black flex flex-col">
    <Header />
    <main className="flex-1 pt-20 pb-16 px-4 flex flex-col items-center pixel-grid relative">
      <div className="max-w-3xl w-full mb-12">
        <h1 className="text-4xl md:text-5xl font-pixel text-mango-500 mb-4 animate-pixel-glow">Aizaan Ecommerce & Rebranding</h1>
        <p className="text-lg text-gray-200 mb-8">
          Pixel Mango partnered with Aizaan, our first client, to craft a top-to-bottom creative transformation—shaping bold new branding and a frictionless digital store.
        </p>
        <section className="bg-white/90 border-4 border-mango-500 pixel-border rounded-lg p-6 md:p-10 shadow-2xl mb-10 animate-pixel-fade">
          <h2 className="font-pixel text-2xl text-mango-500 mb-3">Project Overview</h2>
          <p className="text-gray-900 mb-2 font-bold">Introduction</p>
          <p className="mb-3 text-gray-700">Aizaan, a retailer of hijabs, abayas, and modest fashion accessories in Dhaka, sought to redefine its brand identity and launch a modern e-commerce platform for modest fashion.</p>
          <p className="text-gray-900 mb-2 font-bold">Goal</p>
          <ul className="list-disc pl-5 mb-3 text-gray-700">
            <li>Create a cohesive, elegant brand identity</li>
            <li>Deliver a seamless online shopping experience</li>
            <li>Increase visibility, drive sales, and empower independent management</li>
          </ul>
          <p className="text-gray-900 mb-2 font-bold">Problems</p>
          <ul className="list-disc pl-5 mb-3 text-gray-700">
            <li>Outdated branding lacked cohesion, failed to resonate with modern consumers</li>
            <li>Website was not user-friendly (poor navigation, not mobile-optimized)</li>
            <li>Limited social presence, hindering engagement and awareness</li>
          </ul>
          <p className="text-gray-900 mb-2 font-bold">Challenges</p>
          <ul className="list-disc pl-5 mb-3 text-gray-700">
            <li>Tight exhibition deadlines required rapid delivery</li>
            <li>Balancing elegant aesthetics with simple functionality</li>
            <li>Ensuring Aizaan’s team could manage the site independently</li>
          </ul>
          <p className="text-gray-900 mb-2 font-bold">Responsibilities</p>
          <ul className="list-disc pl-5 mb-3 text-gray-700">
            <li>Conducted stakeholder interviews</li>
            <li>Designed new logo, brand guidelines, & social media assets</li>
            <li>Built wireframes, prototypes, & high-fidelity mockups</li>
            <li>Developed site on WordPress (with Elementor), integrated payments</li>
          </ul>
          <p className="text-gray-900 mb-2 font-bold">Results</p>
          <p className="italic text-gray-500 mb-0">To be posted soon.</p>
        </section>

        <section className="bg-white/80 border-2 border-black rounded-md p-6 md:p-10 shadow-lg mb-10">
          <h2 className="font-pixel text-xl text-mango-500 mb-3">Empathize &amp; Define</h2>
          <p className="font-semibold mb-1 text-gray-800">Summary</p>
          <p className="mb-4 text-gray-700">We interviewed stakeholders and target users, identified pain points, created personas, and mapped user journeys.</p>
          <ul className="list-disc pl-4 text-gray-800 mb-3">
            <li><span className="font-bold">Interviews:</span> In-person/client + PRD insights</li>
            <li><span className="font-bold">Pain Points:<br />Users -</span> No logo, inconsistent fonts, confusing navigation, poor mobile, limited visuals.<br /><span className="font-bold">Client -</span> Inconsistent branding, manual orders, no social strategy.</li>
          </ul>
          <div className="grid md:grid-cols-2 gap-6 mb-3">
            {personas.map(p => (
              <div className="bg-mango-50 border border-mango-500 rounded-md p-4" key={p.name}>
                <h3 className="font-pixel text-mango-500 text-lg mb-1">{p.name}</h3>
                <p className="text-gray-700 italic mb-1">{p.role}</p>
                <p className="font-bold text-xs mb-1">Needs:</p>
                <ul className="list-disc pl-5 text-xs text-gray-700 mb-1">
                  {p.needs.map(n => <li key={n}>{n}</li>)}
                </ul>
                <p className="font-bold text-xs mb-1">Goals:</p>
                <ul className="list-disc pl-5 text-xs text-gray-700 mb-1">
                  {p.goals.map(g => <li key={g}>{g}</li>)}
                </ul>
                <p className="font-bold text-xs mb-1">Frustrations:</p>
                <ul className="list-disc pl-5 text-xs text-gray-700">
                  {p.frustrations.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-2"><span className="font-bold">Goal Statement:</span> Design a cohesive brand identity and a mobile-friendly site for Aizaan that enables young women to shop for stylish hijabs and abayas effortlessly, increases online sales by 30%, and allows the team to manage ops with minimal training.</p>
        </section>

        <section className="bg-mango-50/80 border-2 border-mango-500 pixel-border rounded-lg p-6 md:p-10 shadow-lg mb-10">
          <h2 className="font-pixel text-xl text-mango-500 mb-3">Ideate &amp; Prototype</h2>
          <p className="mb-2 text-gray-800"><span className="font-bold">Process:</span> Wireframes → Interactive prototype → Hi-fi mockups → Design system</p>
          <ul className="list-disc pl-5 text-gray-700 mb-3">
            <li><span className="font-bold">Wireframes:</span> 5 pages (Home, Shop, About, Contact, Cart)</li>
            <li><span className="font-bold">Prototype:</span> Clickable flows for browsing, filters, add to cart, checkout</li>
            <li><span className="font-bold">Mockups:</span>
              <ul className="pl-5 list-square">
                <li>Home: Hero w/ “Shop Modest Fashion” CTA, pastel gradient</li>
                <li>Shop: Product grid, filter sidebar</li>
                <li>Cart: Simplified checkout, trust badges</li>
              </ul>
            </li>
            <li><span className="font-bold">Design System:</span>
              <ul className="pl-5 list-square">
                <li>Typography: Sketsa Ramadhan, Product Sans</li>
                <li>Colors: White, Black, Gold, Beige</li>
                <li>Spacing: 8px grid</li>
                <li>Components: Rounded buttons, shadowed cards</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="bg-white/90 border-2 border-gray-400 rounded-md p-6 md:p-10 shadow mb-10">
          <h2 className="font-pixel text-xl text-mango-500 mb-3">Testing, Deploy &amp; Continuous Monitoring</h2>
          <p className="mb-2 italic text-gray-500">Testing: To be posted soon.</p>
          <p className="mb-2 italic text-gray-500">Deploy: To be posted soon.</p>
          <p className="mb-2 italic text-gray-500">Continuous Monitoring: To be posted soon.</p>
        </section>

        <section className="bg-mango-50/70 border-2 border-mango-500 rounded-md p-6 md:p-10 shadow">
          <h2 className="font-pixel text-xl text-mango-500 mb-2">Project Impact</h2>
          <p className="italic text-gray-500">To be posted soon.</p>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Aizaan;

