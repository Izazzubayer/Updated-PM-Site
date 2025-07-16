import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
import "./i18n";
import Index from "./pages/Index";
import RetouchedAI from "./pages/products/RetouchedAI";
import HotSnap from "./pages/products/HotSnap";
import HoloSnap from "./pages/products/HoloSnap";
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
            <Route path="/products/retouched-ai" element={<RetouchedAI />} />
            <Route path="/products/hotsnap" element={<HotSnap />} />
            <Route path="/products/holosnap" element={<HoloSnap />} />
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4 29l7.824-2.205A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-1.97 0-3.89-.52-5.56-1.5l-.396-.23-4.65 1.31 1.24-4.53-.26-.41A9.93 9.93 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.4c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.95 1.13-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.67-1.61-.92-2.21-.24-.58-.48-.5-.67-.51-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/>
            </svg>
          </a>
          {/* Messenger */}
          <a
            href="https://m.me/Izazzubayer"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center transition-colors"
            aria-label="Chat on Messenger"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
              <path d="M16 3C8.268 3 2 8.797 2 16c0 3.13 1.268 6.01 3.406 8.188l-1.406 4.812 4.969-1.625C11.268 28.406 13.594 29 16 29c7.732 0 14-5.797 14-13S23.732 3 16 3zm1.844 17.406l-3.094-3.312-5.094 3.312 6.75-7.219 3.094 3.312 5.094-3.312-6.75 7.219z"/>
            </svg>
          </a>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
