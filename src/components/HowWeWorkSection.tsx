import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { MessageSquare, Lightbulb, Palette, CheckCircle, RefreshCw, Rocket, CogIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HowWeWorkSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Discovery & Consultation",
      description: "We start with a detailed conversation by learning about your vision, goals, and brand personality through a one-to-one meting.",
      duration: "1 Day",
      deliverables: ["Project brief", "Style preferences", "Timeline confirmation"]
    },
    {
      step: "02", 
      icon: Lightbulb,
      title: "Strategy & Planning",
      description: "We research your industry and create a strategic approach tailored to your business needs.",
      duration: "2-3 Days",
      deliverables: ["Creative strategy", "Mood boards", "Concept direction"]
    },
    {
      step: "03",
      icon: Palette,
      title: "Early Mockup", 
      description: "Our team brings your vision to life with pixel-perfect early design and interactive mockups.",
      duration: "5-7 Days",
      deliverables: ["Initial concepts", "Early Draft", "Regular updates"]
    },    {
      step: "04",
      icon: CogIcon,
      title: "Work Begins", 
      description: "This is where th real work begins. After you have approved your preffered early mockups and desigs, we then start working on the selected services.",
      duration: "21-30 Days",
      deliverables: ["Actual work", "First deliverables", "Desng interations"]
    },
    {
      step: "05",
      icon: RefreshCw,
      title: "Review & Refinement",
      description: "We work closely with you to refine your services until they perfectly match your vision.",
      duration: "7-14 Days",
      deliverables: ["Revision rounds", "Client feedback", "Design adjustments"]
    },
    {
      step: "06",
      icon: CheckCircle,
      title: "Finalization & Approval",
      description: "Final review, approval, and preparation of all deliverable assets in required formats.",
      duration: "3-5 Days",
      deliverables: ["Final files", "Brand guidelines", "Asset organization"]
    },
    {
      step: "07",
      icon: Rocket,
      title: "Launch & Support",
      description: "We help you implement your new branding and provide ongoing support for your success.",
      duration: "30 Days (Free)",
      deliverables: ["Implementation guide", "Launch support", "Future consultations"]
    }
  ];

  const handleScrollToIntake = () => {
    const el = document.getElementById('quick-intake-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-20 bg-gray-50 pixel-grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-pixel text-black mb-4 pixel-text">How We Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-mono">
            Our proven 7-step process ensures exceptional results while keeping you involved 
            and informed throughout the entire creative journey.
          </p>
          <div className="w-24 h-1 bg-mango-500 mx-auto mt-6"></div>
        </div>

        {/* Expand/Collapse Link */}
        <div className="text-center mb-8">
          <span
            className="inline-flex items-center gap-2 cursor-pointer text-lg font-pixel text-black border-b-2 border-mango-500 hover:text-mango-500 transition-colors select-none"
            style={{ paddingBottom: 2 }}
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            role="button"
            tabIndex={0}
            onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setExpanded(prev => !prev); }}
          >
            {expanded ? 'Hide Steps' : 'Show Steps'}
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </span>
        </div>

        {/* Process Timeline */}
        {expanded && (
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-mango-500 top-0 bottom-0 hidden lg:block"></div>
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-8 relative ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  {/* Step Content */}
                  <div className="flex-1 lg:w-5/12">
                    <div className="pixel-card p-8 bg-white">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mr-4">
                          <step.icon className="w-8 h-8 text-black" />
                        </div>
                        <div>
                          <div className="text-sm font-pixel text-mango-500">STEP {step.step}</div>
                          <h3 className="text-xl font-pixel text-black">{step.title}</h3>
                          <div className="text-sm text-gray-500 font-mono">{step.duration}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 font-mono leading-relaxed">{step.description}</p>
                      <div>
                        <h4 className="text-sm font-pixel text-black mb-3">DELIVERABLES:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-mango-500"></div>
                              <span className="text-xs text-gray-600 font-mono">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-24 h-24 bg-white border-4 border-mango-500 flex items-center justify-center rounded-none">
                      <span className="text-2xl font-pixel text-black-500">{step.step}</span>
                    </div>
                  </div>
                  {/* Empty space for alternating layout */}
                  <div className="flex-1 lg:w-5/12 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA - hidden on mobile, visible on md+ */}
        <div className="text-center mt-16 hidden md:block">
          <div className="pixel-card p-8 bg-white">
            <h3 className="text-2xl font-pixel text-black mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6 font-mono">
              Let's discuss your vision and create something amazing together.
            </p>
            <button className="pixel-button px-8 py-4 font-pixel transition-all duration-300" onClick={handleScrollToIntake}>
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
