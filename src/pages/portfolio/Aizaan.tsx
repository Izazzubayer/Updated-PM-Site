
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

const SectionBlock = ({
  title,
  children,
  className = ""
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section 
    className={
      `w-full mb-8 bg-white/90 border-4 border-mango-500 pixel-border rounded-lg shadow-2xl p-6 md:p-10 animate-pixel-fade ${className}`
    }
  >
    <h2 className="font-pixel text-2xl md:text-3xl text-mango-500 mb-3 tracking-tight">{title}</h2>
    <div className="[&>p]:mb-2 [&_ul]:pl-5">
      {children}
    </div>
  </section>
);

const SubBlock = ({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-3">
    <p className="font-bold text-gray-900 mb-1">{title}</p>
    {children}
  </div>
);

const Aizaan = () => (
  <div className="min-h-screen bg-mango-50 flex flex-col">
    <Header />
    <main className="flex-1 pt-16 pb-12 px-2 sm:px-4 flex flex-col items-center pixel-grid relative">
      <div className="max-w-3xl w-full">
        {/* Title section block */}
        <div className="mb-10 animate-pixel-fade">
          <h1 className="text-4xl md:text-5xl font-pixel text-mango-500 mb-2 animate-pixel-glow drop-shadow">Aizaan Ecommerce &amp; Rebranding</h1>
          <span className="text-base text-gray-500">A Pixel Mango Creative Agency Case Study</span>
        </div>

        <SectionBlock title="Project Overview">
          <SubBlock title="Introduction">
            <p className="text-gray-700 mb-1">
              Aizaan, a retailer of hijabs, abayas, and modest fashion accessories in Dhaka, sought to redefine its brand identity and launch a modern e-commerce platform to capture the growing online market for modest fashion.
            </p>
          </SubBlock>
          <SubBlock title="Goal">
            <ul className="list-disc pl-5 text-gray-800 text-[15px]">
              <li>Create a cohesive, elegant brand identity</li>
              <li>Deliver a seamless online shopping experience</li>
              <li>Increase visibility, drive sales, and empower independent management</li>
            </ul>
            <p className="mt-1 text-gray-700 text-[15px]">
              The primary goal was a cohesive, elegant brand identity and seamless shopping that would increase Aizaan's visibility, drive sales, and empower the team.
            </p>
          </SubBlock>
          <SubBlock title="Problems">
            <ul className="list-disc pl-5 text-gray-800 text-[15px]">
              <li>Outdated branding lacked cohesion; failed to resonate with modern consumers</li>
              <li>Unfriendly website: poor navigation, no mobile optimization</li>
              <li>Limited social media presence hindered engagement</li>
            </ul>
          </SubBlock>
          <SubBlock title="Challenges">
            <ul className="list-disc pl-5 text-gray-800 text-[15px]">
              <li>Tight exhibition deadlines required rapid iteration/delivery</li>
              <li>Balancing elegant aesthetics with simple functionality</li>
              <li>Team needed to manage site with minimal training</li>
            </ul>
          </SubBlock>
          <SubBlock title="Responsibilities">
            <ul className="list-disc pl-5 text-gray-800 text-[15px]">
              <li>Conducted stakeholder interviews to define requirements</li>
              <li>Designed new logo, brand guidelines, &amp; social media assets</li>
              <li>Built wireframes, prototypes, &amp; high-fidelity mockups</li>
              <li>Developed site on WordPress (Elementor), integrated payments</li>
            </ul>
          </SubBlock>
          <SubBlock title="Results">
            <p className="italic text-gray-500 mb-0">To be posted soon.</p>
          </SubBlock>
        </SectionBlock>

        <SectionBlock title="Empathize &amp; Define">
          <SubBlock title="Summary">
            <p className="mb-1 text-gray-700">
              The Empathize and Define phases focused on understanding Aizaan's target users and business needs. Through interviews, we identified pain points, crafted personas, and mapped user journeys.
            </p>
          </SubBlock>
          <div className="grid md:grid-cols-2 gap-4 mb-2">
            <div className="bg-mango-50/90 border border-mango-500 rounded-md p-3 mb-2">
              <p className="font-bold text-xs mb-1 text-mango-500">Interviews:</p>
              <ul className="list-disc pl-5 text-xs text-gray-700 mb-0">
                <li>In-person interview with the client</li>
                <li>Gathered insights via the Product Requirements Document</li>
              </ul>
            </div>
            <div className="bg-mango-50/90 border border-mango-500 rounded-md p-3 mb-2">
              <p className="font-bold text-xs mb-1 text-mango-500">Pain Points:</p>
              <span className="font-semibold text-[13px]">Users</span>
              <ul className="list-disc pl-5 text-xs text-gray-700">
                <li>No cohesive brand identity, logo or font</li>
                <li>Confusing navigation led to cart abandonment</li>
                <li>Lack of mobile optimization frustrated smartphone users</li>
                <li>Limited product visuals/descriptions</li>
              </ul>
              <span className="font-semibold text-[13px]">Client</span>
              <ul className="list-disc pl-5 text-xs text-gray-700 mb-0">
                <li>Inconsistent branding diluted market presence</li>
                <li>Manual order processing was error-prone</li>
                <li>No social media strategy limited outreach</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-2">
            {personas.map(p => (
              <div className="bg-mango-50/90 border border-mango-500 rounded-md p-4" key={p.name}>
                <h3 className="font-pixel text-mango-500 text-base mb-1">{p.name}</h3>
                <p className="text-gray-700 italic mb-1">{p.role}</p>
                <div className="mb-1">
                  <span className="font-bold text-xs">Needs:</span>
                  <ul className="list-disc pl-5 text-xs text-gray-700 mb-1">
                    {p.needs.map((n) => <li key={n}>{n}</li>)}
                  </ul>
                </div>
                <div className="mb-1">
                  <span className="font-bold text-xs">Goals:</span>
                  <ul className="list-disc pl-5 text-xs text-gray-700 mb-1">
                    {p.goals.map((g) => <li key={g}>{g}</li>)}
                  </ul>
                </div>
                <div>
                  <span className="font-bold text-xs">Frustrations:</span>
                  <ul className="list-disc pl-5 text-xs text-gray-700">
                    {p.frustrations.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 px-3 py-2 bg-white/80 border border-mango-500 rounded font-mono text-[15px]">
            <span className="font-bold">Goal Statement:</span>{" "}
            Design a cohesive brand identity and a mobile-friendly site for Aizaan that enables young women to shop for stylish hijabs and abayas effortlessly, increases online sales by 30%, and allows the team to manage operations with minimal training.
          </div>
        </SectionBlock>

        <SectionBlock title="Ideate &amp; Prototype">
          <SubBlock title="Design Process">
            <ul className="list-disc pl-5 text-gray-800 text-[15px]">
              <li>
                <span className="font-bold">Wireframes:</span> Created low-fidelity wireframes for 5 pages: Home, Shop, About, Contact, Cart
              </li>
              <li>
                <span className="font-bold">Prototype:</span> Developed a clickable prototype, simulating user flows for browsing, filtering, add to cart, checkout
              </li>
              <li>
                <span className="font-bold">Mockups:</span>
                <ul className="pl-5 list-square text-[14px]">
                  <li>Home: Hero with “Shop Modest Fashion” CTA, pastel gradient</li>
                  <li>Shop: Product grid, filter sidebar for 20 products (hijabs, abayas)</li>
                  <li>Cart: Clean checkout, trust badges</li>
                </ul>
              </li>
            </ul>
          </SubBlock>
          <SubBlock title="Design System">
            <ul className="list-disc pl-5 text-gray-800 text-[15px]">
              <li>
                <span className="font-bold">Typography:</span> Sketsa Ramadhan, Product Sans
              </li>
              <li>
                <span className="font-bold">Colors:</span> White, Black, Gold, Beige
              </li>
              <li>
                <span className="font-bold">Spacing:</span> 8px grid (16px, 24px margins and paddings)
              </li>
              <li>
                <span className="font-bold">Components:</span> Buttons (rounded 8px, 16px padding), product cards (shadow, 300x400px images)
              </li>
            </ul>
          </SubBlock>
        </SectionBlock>

        <SectionBlock title="Testing, Deploy &amp; Continuous Monitoring" className="bg-white/95 border-gray-400">
          <ul className="list-none text-gray-700 text-[15px]">
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
        </SectionBlock>

        <SectionBlock title="Project Impact" className="bg-mango-50/70 border-mango-500">
          <span className="italic text-gray-500">To be posted soon.</span>
        </SectionBlock>
      </div>
    </main>
    <Footer />
  </div>
);

export default Aizaan;
