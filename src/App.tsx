import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import "./i18n";
import Index from "./pages/Index";
import Career from "./pages/Career";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import AccountConfirmation from "./pages/AccountConfirmation";
import AboutUs from "./pages/support/AboutUs";
import ContactUs from "./pages/support/ContactUs";
import FAQ from "./pages/support/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import BrandIdentityDesign from "./pages/services/BrandIdentityDesign";
import SocialMediaBranding from "./pages/services/SocialMediaBranding";
import UIUXDesign from "./pages/services/UIUXDesign";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import ConsultationStrategy from "./pages/services/ConsultationStrategy";
import Aizaan from "./pages/portfolio/Aizaan";
import Santoku from "./pages/portfolio/Santoku";
import Puffy from "./pages/portfolio/Puffy";
import SFUSnap from "./pages/portfolio/SFUSnap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/career" element={<Career />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/account-confirmation" element={<AccountConfirmation />} />
            <Route path="/support/about-us" element={<AboutUs />} />
            <Route path="/support/contact-us" element={<ContactUs />} />
            <Route path="/support/faq" element={<FAQ />} />
            <Route path="/services/brand-identity" element={<BrandIdentityDesign />} />
            <Route path="/services/social-media" element={<SocialMediaBranding />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/consultation-strategy" element={<ConsultationStrategy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/portfolio/aizaan-ecommerce-rebranding" element={<Aizaan />} />
            <Route path="/portfolio/santoku-knife-store-ux" element={<Santoku />} />
            <Route path="/portfolio/puffy-homepage-redesign" element={<Puffy />} />
            <Route path="/portfolio/sfu-snap-app-redesign" element={<SFUSnap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* Floating Chat Buttons */}
          {/* WhatsApp */}
          <a
            href="https://wa.me/+17785131277?text=Hi%20Pixel%20Mango!"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="w-7 h-7" />
          </a>
          {/* Messenger */}
          <a
            href="https://m.me/Izazzubayer"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center transition-colors"
            aria-label="Chat on Messenger"
          >
            <FaFacebookMessenger className="w-7 h-7" />
          </a>
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
