import React from 'react';
import { Coffee, Shirt, ShoppingBag, Utensils, Dumbbell, Scissors, Camera, Laptop } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from './ui/dialog';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';

const industryOptions = [
  'Clothing & Fashion',
  'Café / Restaurant',
  'Retail',
  'Fitness / Wellness',
  'Beauty / Salon',
  'Tech / Startup',
  'Creative / Photography',
  'Other',
];

const WhoWeCaterToSection = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', industry: '', otherIndustry: '', message: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const businesses = [
    {
      icon: Coffee,
      title: "Cafés & Coffee Shops",
      description: "Warm, inviting branding that captures the perfect coffee culture vibe.",
      examples: ["Menu design", "Logo & branding", "Social media templates", "Loyalty cards"]
    },
    {
      icon: Shirt,
      title: "Clothing Brands",
      description: "Fashion-forward designs that make your apparel brand stand out.",
      examples: ["Brand identity", "Lookbook design", "E-commerce store", "Packaging design"]
    },
    {
      icon: ShoppingBag,
      title: "Retail Stores",
      description: "Professional retail branding that drives foot traffic and sales.",
      examples: ["Storefront design", "Price tags", "Promotional materials", "Online presence"]
    },
    {
      icon: Utensils,
      title: "Restaurants",
      description: "Appetizing visual identities that showcase your culinary excellence.",
      examples: ["Menu design", "Logo creation", "Food photography", "Website development"]
    },
    {
      icon: Dumbbell,
      title: "Fitness Studios",
      description: "Energetic branding that motivates and inspires your community.",
      examples: ["Gym branding", "Class schedules", "Membership cards", "Social content"]
    },
    {
      icon: Scissors,
      title: "Beauty Salons",
      description: "Elegant designs that reflect style, sophistication, and self-care.",
      examples: ["Salon branding", "Price lists", "Appointment cards", "Instagram templates"]
    },
    {
      icon: Camera,
      title: "Creative Professionals",
      description: "Portfolio-worthy branding for photographers, artists, and creators.",
      examples: ["Portfolio websites", "Business cards", "Watermarks", "Brand guidelines"]
    },
    {
      icon: Laptop,
      title: "Tech Startups",
      description: "Modern, innovative designs that communicate cutting-edge solutions.",
      examples: ["UI/UX design", "Pitch decks", "Website development", "Brand strategy"]
    }
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const validateEmail = (email) => /.+@.+\..+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.industry || !form.message || (form.industry === 'Other' && !form.otherIndustry)) {
      setError('All fields are required.');
      return;
    }
    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    emailjs.send(
      'service_pyjaeva',
      'template_4wo4hzb',
      {
        name: form.name,
        email: form.email,
        industry: form.industry === 'Other' ? form.otherIndustry : form.industry,
        message: form.message,
        title: 'Tell Us About Your Business',
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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-pixel text-black mb-4 pixel-text">Who We Cater To</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-mono">
            We specialize in helping local businesses across various industries establish strong, 
            memorable brand identities that resonate with their target audiences.
          </p>
          <div className="w-24 h-1 bg-mango-500 mx-auto mt-6"></div>
        </div>

        {/* Mobile: Carousel */}
        <div className="block md:hidden">
          <BusinessCarousel 
            businesses={businesses}
            open={open}
            setOpen={setOpen}
            form={form}
            setForm={setForm}
            error={error}
            setError={setError}
            submitted={submitted}
            setSubmitted={setSubmitted}
            loading={loading}
            setLoading={setLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            industryOptions={industryOptions}
          />
        </div>
        {/* Desktop/Tablet: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businesses.map((business, index) => (
            <div 
              key={index}
              className="pixel-card p-6 bg-white"
            >
              <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-4">
                <business.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg font-pixel text-black mb-3">{business.title}</h3>
              <p className="text-sm text-gray-600 mb-4 font-mono leading-relaxed">{business.description}</p>
              <div className="space-y-2">
                {business.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-mango-500"></div>
                    <span className="text-xs text-gray-600 font-mono">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* Desktop: Show the CTA card at the end of the grid */}
          <div className="pixel-card p-8 bg-white col-span-full">
            <h3 className="text-2xl font-pixel text-black mb-4">Don't See Your Industry?</h3>
            <p className="text-gray-600 mb-6 font-mono">
              We work with businesses of all types! Every brand has unique needs, and we're here to help.
            </p>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="pixel-button px-8 py-4 font-pixel" onClick={() => setOpen(true)}>
                  Tell Us About Your Business
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-md w-full border-2 border-black !rounded-none">
                {!submitted ? (
                  <form 
                    className="space-y-6"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you.html" />
                    <div>
                      <label className="block text-sm font-pixel text-black mb-1" htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full border-2 border-black !rounded-none px-4 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-mango-500"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-pixel text-black mb-1" htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full border-2 border-black !rounded-none px-4 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-mango-500"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-pixel text-black mb-1" htmlFor="industry">Industry</label>
                      <select
                        id="industry"
                        name="industry"
                        className="w-full border-2 border-black !rounded-none px-4 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-mango-500"
                        value={form.industry}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select an industry</option>
                        {industryOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    {form.industry === 'Other' && (
                      <div>
                        <label className="block text-sm font-pixel text-black mb-1" htmlFor="otherIndustry">Please specify your industry</label>
                        <input
                          id="otherIndustry"
                          name="otherIndustry"
                          type="text"
                          className="w-full border-2 border-black !rounded-none px-4 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-mango-500"
                          value={form.otherIndustry}
                          onChange={handleChange}
                          required
                          placeholder="Your industry"
                        />
                      </div>
                    )}
                    <div>
                      <label className="block text-sm font-pixel text-black mb-1" htmlFor="message">Your Message or Query</label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full border-2 border-black !rounded-none px-4 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-mango-500 min-h-[100px] resize-y"
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Let us know what you need, your questions, or any details about your business."
                      />
                    </div>
                    <button
                      type="submit"
                      className="pixel-button w-full py-3 font-pixel text-lg flex items-center justify-center"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Submit'}
                    </button>
                    {error && (
                      <p className="text-red-500 text-center font-mono mt-2">{error}</p>
                    )}
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
                    <span className="text-2xl font-pixel text-mango-500 mb-4">Thank you!</span>
                    <p className="text-gray-700 font-mono text-center mb-4">
                      We received your message and will get back to you shortly.<br />
                      In the meantime, take a moment to learn a little about us — we've put a lot of effort into creating this experience for you.
                    </p>
                    <DialogClose asChild>
                      <button className="pixel-button px-6 py-2 font-pixel mt-2">Close</button>
                    </DialogClose>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeCaterToSection;

// Carousel implementation for businesses
function BusinessCarousel({ businesses, open, setOpen, form, setForm, error, setError, submitted, setSubmitted, loading, setLoading, handleChange, handleSubmit, industryOptions }) {
  const [emblaApi, setEmblaApi] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const slidesToShow = 1;

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const dotCount = businesses.length + 1; // Add one for the CTA card

  return (
    <div className="relative px-4">
      <Carousel opts={{ align: 'start', slidesToScroll: slidesToShow }} setApi={setEmblaApi}>
        <div>
          <CarouselContent className="-ml-2 md:-ml-4">
            {businesses.map((business, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                <div className="pixel-card p-4 md:p-6 bg-white h-full flex flex-col mx-2">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-3 md:mb-4">
                    <business.icon className="w-6 h-6 md:w-8 md:h-8 text-black" />
                  </div>
                  <h3 className="text-base md:text-lg font-pixel text-black mb-2 md:mb-3">{business.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 font-mono leading-relaxed">{business.description}</p>
                  <div className="space-y-1 md:space-y-2 mb-2">
                    {business.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-mango-500"></div>
                        <span className="text-xs text-gray-600 font-mono">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
            {/* Add the CTA card as the last slide */}
            <CarouselItem key="cta" className="pl-2 md:pl-4 basis-full">
              <div className="pixel-card p-4 md:p-8 bg-white h-full flex flex-col items-center justify-center mx-2">
                <h3 className="text-lg md:text-2xl font-pixel text-black mb-3 md:mb-4 text-center">Don't See Your Industry?</h3>
                <p className="text-gray-600 mb-4 md:mb-6 font-mono text-center text-sm md:text-base">
                  We work with businesses of all types! Every brand has unique needs, and we're here to help.
                </p>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <button className="pixel-button px-8 py-4 font-pixel" onClick={() => setOpen(true)}>
                      Tell Us About Your Business
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md w-full border-2 border-black !rounded-none">
                    {!submitted ? (
                      <form 
                        className="space-y-6"
                        onSubmit={handleSubmit}
                      >
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you.html" />
                        <div>
                          <label className="block text-sm font-pixel text-black mb-1" htmlFor="name">Name</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            className="w-full border-2 border-black !rounded-none px-4 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-mango-500"
                            value={form.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-pixel text-black mb-1" htmlFor="email">Email</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full border-2 border-black !rounded-none px-4 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-mango-500"
                            value={form.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-pixel text-black mb-1" htmlFor="industry">Industry</label>
                          <select
                            id="industry"
                            name="industry"
                            className="w-full border-2 border-black !rounded-none px-4 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-mango-500"
                            value={form.industry}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select an industry</option>
                            {industryOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                        {form.industry === 'Other' && (
                          <div>
                            <label className="block text-sm font-pixel text-black mb-1" htmlFor="otherIndustry">Please specify your industry</label>
                            <input
                              id="otherIndustry"
                              name="otherIndustry"
                              type="text"
                              className="w-full border-2 border-black !rounded-none px-4 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-mango-500"
                              value={form.otherIndustry}
                              onChange={handleChange}
                              required
                              placeholder="Your industry"
                            />
                          </div>
                        )}
                        <div>
                          <label className="block text-sm font-pixel text-black mb-1" htmlFor="message">Your Message or Query</label>
                          <textarea
                            id="message"
                            name="message"
                            className="w-full border-2 border-black !rounded-none px-4 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-mango-500 min-h-[100px] resize-y"
                            value={form.message}
                            onChange={handleChange}
                            required
                            placeholder="Let us know what you need, your questions, or any details about your business."
                          />
                        </div>
                        <button
                          type="submit"
                          className="pixel-button w-full py-3 font-pixel text-lg flex items-center justify-center"
                          disabled={loading}
                        >
                          {loading ? 'Sending...' : 'Submit'}
                        </button>
                        {error && (
                          <p className="text-red-500 text-center font-mono mt-2">{error}</p>
                        )}
                      </form>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8 animate-fade-in">
                        <span className="text-2xl font-pixel text-mango-500 mb-4">Thank you!</span>
                        <p className="text-gray-700 font-mono text-center mb-4">
                          We received your message and will get back to you shortly.<br />
                          In the meantime, take a moment to learn a little about us — we've put a lot of effort into creating this experience for you.
                        </p>
                        <DialogClose asChild>
                          <button className="pixel-button px-6 py-2 font-pixel mt-2">Close</button>
                        </DialogClose>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </CarouselItem>
          </CarouselContent>
        </div>
      </Carousel>
      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: businesses.length + 1 }).map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full border-2 border-mango-500 transition-all duration-200 ${selectedIndex === i ? 'bg-mango-500' : 'bg-white'}`}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
