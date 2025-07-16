import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const personas = [
  {
    name: "Nadia, 25",
    role: "University Student",
    needs: [
      "Affordable, stylish hijabs for daily wear",
      "Quick mobile shopping"
    ],
    goals: [
      "Find trendy outfits in under 5 minutes",
      "Trust product quality"
    ],
    frustrations: [
      "Slow websites",
      "Unclear sizing",
      "Complex checkouts"
    ]
  },
  {
    name: "Fatima, 32",
    role: "Working Professional",
    needs: [
      "Elegant abayas for office and events",
      "Reliable delivery"
    ],
    goals: [
      "Shop seamlessly across devices",
      "Engage with brand on Instagram"
    ],
    frustrations: [
      "Poor visuals",
      "Lack of brand consistency",
      "No return policy clarity"
    ]
  }
];

const BlockCard = ({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) => (
  <section className={`pixel-card bg-white p-8 mb-12 rounded-lg border-mango-500 shadow-lg ${className}`}>
    <h2 className="font-pixel text-2xl text-mango-500 mb-6">{title}</h2>
    <div className="[&>p]:mb-3 [&_ul]:pl-6">{children}</div>
  </section>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-5">
    <h3 className="text-lg font-pixel text-black mb-2">{title}</h3>
    {children}
  </div>
);

const PersonaCard = ({
  persona
}: {
  persona: typeof personas[0]
}) => (
  <div className="pixel-card bg-mango-50 p-6 rounded-md border border-mango-500 mb-4 flex-1">
    <h4 className="font-pixel text-mango-500 text-base mb-1">{persona.name}</h4>
    <p className="text-gray-700 italic mb-2">{persona.role}</p>
    <div className="mb-1">
      <span className="font-bold text-xs">Needs:</span>
      <ul className="list-disc pl-5 text-xs text-gray-700 mb-1">
        {persona.needs.map((n) => <li key={n}>{n}</li>)}
      </ul>
    </div>
    <div className="mb-1">
      <span className="font-bold text-xs">Goals:</span>
      <ul className="list-disc pl-5 text-xs text-gray-700 mb-1">
        {persona.goals.map((g) => <li key={g}>{g}</li>)}
      </ul>
    </div>
    <div>
      <span className="font-bold text-xs">Frustrations:</span>
      <ul className="list-disc pl-5 text-xs text-gray-700">
        {persona.frustrations.map((f) => <li key={f}>{f}</li>)}
      </ul>
    </div>
  </div>
);

const Aizaan = () => (
  <div className="min-h-screen bg-mango-50 flex flex-col">
    <Header />

    <main className="flex-1 pt-28 pb-20 px-2 sm:px-6 flex flex-col items-center pixel-grid relative">
      <div className="max-w-4xl w-full">
        {/* Aizaan Logo */}
        {/* <div className="flex justify-center mb-10">
          <img 
            src="/public/lovable-uploads/aizaan-logo.png" 
            alt="Aizaan Logo" 
            className="w-40 h-auto md:w-56" 
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div> */}
        {/* Hero Section */}
        <section className="mb-14">
          <div className="pixel-card bg-white p-10 md:p-16 rounded-lg flex flex-col items-center border-mango-500 shadow-lg text-center">
            {/* Aizaan Logo inside hero card */}
            <img 
              src="/lovable-uploads/aizaan-logo.png" 
              alt="Aizaan Logo" 
              className="w-32 h-auto md:w-44 mb-6" 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <span className="inline-block bg-mango-500 text-black font-pixel px-4 py-2 text-base mb-6">
              PORTFOLIO CASE STUDY
            </span>
            <h1 className="text-4xl md:text-2xl font-pixel text-mango-500 mb-3">
              Aizaan Ecommerce &amp; Rebranding
            </h1>
            <p className="text-sm text-gray-700 font-mono mb-0">A Pixel Mango Creative Agency Case Study</p>
          </div>
        </section>

        {/* Project Overview */}
        <BlockCard title="Project Overview">
          <SubSection title="Introduction">
            <p>
              Aizaan, a retailer of hijabs, abayas, and modest fashion accessories in Dhaka, sought to redefine its brand identity and launch a modern e-commerce platform to capture the growing online market for modest fashion.
            </p>
          </SubSection>
          <SubSection title="Goal">
            <ul className="list-disc ">
              <li>Create a cohesive, elegant brand identity</li>
              <li>Deliver a seamless online shopping experience</li>
              <li>Increase visibility, drive sales, and empower independent management</li>
            </ul>
            <p className="mt-3">
              The primary goal was a cohesive, elegant brand identity and seamless shopping that would increase Aizaan's visibility, drive sales, and empower the team to manage the platform independently.
            </p>
          </SubSection>
          <SubSection title="Problems">
            <ul className="list-disc ">
              <li>Outdated branding lacked cohesion, failing to resonate with modern consumers.</li>
              <li>Website was not user-friendly, with poor navigation and no mobile optimization.</li>
              <li>Limited social media presence hindered customer engagement and brand awareness.</li>
            </ul>
          </SubSection>
          <SubSection title="Challenges">
            <ul className="list-disc ">
              <li>Tight timeline for exhibitions required rapid iteration and delivery.</li>
              <li>Balancing aesthetic elegance with functional simplicity.</li>
              <li>Ensuring the team could manage the site with minimal training.</li>
            </ul>
          </SubSection>
          <SubSection title="Responsibilities">
            <ul className="list-disc ">
              <li>Conducted stakeholder interviews to define requirements.</li>
              <li>Designed new logo, brand guidelines, and social media assets.</li>
              <li>Created wireframes, prototypes, and high-fidelity mockups.</li>
              <li>Developed the site on WordPress (WooCommerce), integrated payments, delivery and sales tracking.</li>
            </ul>
          </SubSection>
          <SubSection title="Results">
            <p className="italic text-gray-500 mb-0">To be posted soon.</p>
          </SubSection>
        </BlockCard>

        {/* Empathize & Define */}
        <BlockCard title="Empathize &amp; Define">
          <SubSection title="Summary">
            <p>
              The Empathize and Define phases focused on understanding Aizaan's target users and business needs. Through interviews, we identified pain points, crafted personas, and mapped user journeys.
            </p>
          </SubSection>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-mango-50/90 border border-mango-500 rounded-md p-4">
              <h4 className="font-bold text-xs text-mango-500 mb-2">Interviews</h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 mb-3">
                <li>In-person interview with the client</li>
                <li>Gathered insights via the Product Requirements Document</li>
              </ul>
              <h4 className="font-bold text-xs text-mango-500 mb-2">Pain Points: Users</h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 mb-3">
                <li>No cohesive brand identity, logo or font</li>
                <li>Confusing website navigation led to cart abandonment</li>
                <li>Lack of mobile optimization frustrated smartphone users</li>
                <li>Limited product visuals and descriptions reduced trust</li>
              </ul>
              <h4 className="font-bold text-xs text-mango-500 mb-2">Pain Points: Client</h4>
              <ul className="list-disc pl-6 text-sm text-gray-700 mb-1">
                <li>Inconsistent branding diluted market presence</li>
                <li>Manual order processing was time-consuming and error-prone</li>
                <li>No social media strategy limited customer outreach</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="font-bold text-xs text-mango-500 mb-2">Personas</h4>
                <div className="flex flex-col gap-3">
                  {personas.map(per => <PersonaCard persona={per} key={per.name} />)}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 px-4 py-3 bg-white border border-mango-500 rounded font-mono ">
            <span className="font-bold">Goal Statement:</span>{" "}
            Design a cohesive brand identity and a mobile-friendly site for Aizaan that enables young women to shop for stylish hijabs and abayas effortlessly, increases online sales by 30%, and allows the team to manage operations with minimal training.
          </div>
        </BlockCard>

        {/* Ideate & Prototype */}
        <BlockCard title="Ideate &amp; Prototype">
          <SubSection title="Design Process">
            <ul className="list-disc pl-6 text-gray-800 ">
              <li>
                <span className="font-bold">Wireframes:</span> Created low-fidelity wireframes to map the site's structure (5 pages: Home, Shop, About, Contact, Cart).
              </li>
              <li>
                <span className="font-bold">Prototype:</span> Developed a clickable prototype, simulating user flows for browsing, filtering products, adding to cart, and checkout.
              </li>
              <li>
                <span className="font-bold">Mockups:</span>
                <ul className="pl-5 list-square text-[14px]">
                  <li>Home: Hero with "Shop Modest Fashion" CTA, pastel gradient</li>
                  <li>Shop: Grid with 20 products (hijabs, abayas), filter sidebar</li>
                  <li>Cart: Clean checkout with payment form, trust badges</li>
                </ul>
              </li>
            </ul>
          </SubSection>
          <SubSection title="Design System">
            <ul className="list-disc pl-6 text-gray-800 ">
              <li>
                <span className="font-bold">Typography:</span> Sketsa Ramadhan and Product Sans
              </li>
              <li>
                <span className="font-bold">Colors:</span> White, Black, Gold, Beige
              </li>
              <li>
                <span className="font-bold">Spacing:</span> 8px grid (16px, 24px margins/paddings)
              </li>
              <li>
                <span className="font-bold">Components:</span> Buttons (rounded 8px, 16px padding), product cards (shadow, 300x400px images)
              </li>
            </ul>
          </SubSection>
        </BlockCard>

        {/* Testing, Deploy & Monitoring */}
        <BlockCard title="Testing, Deploy &amp; Continuous Monitoring" className="bg-mango-50/60">
          <ul className="list-none text-gray-700  space-y-2">
            <li>
              <span className="font-bold">Testing:</span>{" "}
              <span className="italic text-gray-500">To be posted soon.</span>
            </li>
            <li>
              <span className="font-bold">Deploy:</span>{" "}
              <span className="italic text-gray-500">To be posted soon.</span>
            </li>
            <li>
              <span className="font-bold">Continuous Monitoring:</span>{" "}
              <span className="italic text-gray-500">To be posted soon.</span>
            </li>
          </ul>
        </BlockCard>

        {/* Project Impact */}
        <BlockCard title="Project Impact" className="bg-white border-mango-500">
          <span className="italic text-gray-500">To be posted soon.</span>
        </BlockCard>
      </div>
    </main>
    <Footer />
  </div>
);

export default Aizaan;

