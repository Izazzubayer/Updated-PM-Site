import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Products from "./pages/Products";
import RetouchedAI from "./pages/products/RetouchedAI";
import HotSnap from "./pages/products/HotSnap";
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
import NotFound from "./pages/NotFound";
import ImageEditing from "./pages/services/ImageEditing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/image-editing" element={<ImageEditing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/retouched-ai" element={<RetouchedAI />} />
          <Route path="/products/hotsnap" element={<HotSnap />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
