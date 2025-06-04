import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider";
import ScrollToTop from "./components/ScrollToTop";
import "./i18n";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Products from "./pages/Products";
import RetouchedAI from "./pages/products/RetouchedAI";
import HotSnap from "./pages/products/HotSnap";
import HoloSnap from "./pages/products/HoloSnap";
import Integrations from "./pages/Integrations";
import Pricing from "./pages/Pricing";
import Career from "./pages/Career";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import AccountConfirmation from "./pages/AccountConfirmation";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import AboutUs from "./pages/support/AboutUs";
import ContactUs from "./pages/support/ContactUs";
import FAQ from "./pages/support/FAQ";
import Resources from "./pages/support/Resources";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import ImageEditing from "./pages/services/ImageEditing";
import VideoEditing from "./pages/services/VideoEditing";
import ThreeDVisualization from "./pages/services/ThreeDVisualization";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import CGIRendering from "./pages/services/CGIRendering";
import AIAutomation from "./pages/services/AIAutomation";

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
            <Route path="/services" element={<Services />} />
            <Route path="/services/image-editing" element={<ImageEditing />} />
            <Route path="/services/video-production" element={<VideoEditing />} />
            <Route path="/services/3d-modeling" element={<ThreeDVisualization />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/cgi-rendering" element={<CGIRendering />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/retouched-ai" element={<RetouchedAI />} />
            <Route path="/products/hotsnap" element={<HotSnap />} />
            <Route path="/products/holosnap" element={<HoloSnap />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/career" element={<Career />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/account-confirmation" element={<AccountConfirmation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/support" element={<Support />} />
            <Route path="/support/about-us" element={<AboutUs />} />
            <Route path="/support/contact-us" element={<ContactUs />} />
            <Route path="/support/faq" element={<FAQ />} />
            <Route path="/support/resources" element={<Resources />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
