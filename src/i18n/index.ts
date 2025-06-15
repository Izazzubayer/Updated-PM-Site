
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Company
      companyName: 'Pixel Mango',
      
      // Navigation
      services: 'Services',
      products: 'Products',
      integrations: 'Integrations',
      pricing: 'Pricing',
      support: 'Support',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      faq: 'FAQ',
      resources: 'Resources',
      
      // Hero Section
      heroTitle: 'CRAFTING PIXEL-PERFECT',
      heroSubtitle: 'DESIGNS',
      heroDescription: 'Premium branding, websites, and creative services for clothing brands, cafés, and more - without the premium agency price tag.',
      getStarted: 'Get Started',
      exploreServices: 'Explore Services',
      projects: 'Projects',
      satisfaction: 'Satisfaction',
      supportAvailable: 'Support Available',
      
      // Services
      servicesTitle: 'Our Creative Services',
      servicesDescription: 'Comprehensive design and development solutions to elevate your brand',
      learnMore: 'Learn More',
      
      // New Services
      brandIdentity: 'Brand Identity & Logo Design',
      brandIdentityDesc: 'Complete brand identity packages including logo design, brand guidelines, and business cards',
      
      socialMediaBranding: 'Social Media Design & Branding',
      socialMediaBrandingDesc: 'Social media templates, profile designs, and platform-specific branding solutions',
      
      uiuxDesign: 'UI/UX Design & Prototyping',
      uiuxDesignDesc: 'User-centered design solutions with wireframing, prototyping, and accessibility compliance',
      
      websiteDevelopment: 'Website Development & E-Commerce',
      websiteDevelopmentDesc: 'Custom website development with WooCommerce integration and CMS setup',
      
      contentCreation: 'Website Content Writing & Copywriting',
      contentCreationDesc: 'SEO-optimized website copy, product descriptions, and content strategy',
      
      consultationStrategy: 'Brand Strategy & Creative Consultation',
      consultationStrategyDesc: 'Strategic brand positioning, market analysis, and ongoing creative consultation',
      
      // Footer
      footerDescription: 'Creating pixel-perfect designs for local businesses with premium quality at affordable prices.',
      allRightsReserved: 'All rights reserved 2025',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookiePolicy: 'Cookie Policy',
    }
  },
  bn: {
    translation: {
      // Company
      companyName: 'পিক্সেল আম',
      
      // Navigation
      services: 'সেবাসমূহ',
      products: 'পণ্যসমূহ',
      integrations: 'একীকরণ',
      pricing: 'মূল্য',
      support: 'সহায়তা',
      aboutUs: 'আমাদের সম্পর্কে',
      contactUs: 'যোগাযোগ করুন',
      faq: 'প্রশ্নোত্তর',
      resources: 'সম্পদ',
      
      // Hero Section
      heroTitle: 'পিক্সেল-পারফেক্ট',
      heroSubtitle: 'ডিজাইন তৈরি',
      heroDescription: 'পোশাকের ব্র্যান্ড, ক্যাফে এবং আরও অনেক কিছুর জন্য প্রিমিয়াম ব্র্যান্ডিং, ওয়েবসাইট এবং সৃজনশীল সেবা - প্রিমিয়াম এজেন্সির দামের ট্যাগ ছাড়াই।',
      getStarted: 'শুরু করুন',
      exploreServices: 'সেবা দেখুন',
      projects: 'প্রকল্প',
      satisfaction: 'সন্তুষ্টি',
      supportAvailable: 'সহায়তা উপলব্ধ',
      
      // Services
      servicesTitle: 'আমাদের সৃজনশীল সেবা',
      servicesDescription: 'আপনার ব্র্যান্ডকে উন্নত করার জন্য ব্যাপক ডিজাইন এবং উন্নয়ন সমাধান',
      learnMore: 'আরও জানুন',
      
      // New Services
      brandIdentity: 'ব্র্যান্ড পরিচয় ও লোগো ডিজাইন',
      brandIdentityDesc: 'লোগো ডিজাইন, ব্র্যান্ড গাইডলাইন এবং ব্যবসায়িক কার্ড সহ সম্পূর্ণ ব্র্যান্ড পরিচয় প্যাকেজ',
      
      socialMediaBranding: 'সামাজিক মিডিয়া ডিজাইন ও ব্র্যান্ডিং',
      socialMediaBrandingDesc: 'সামাজিক মিডিয়া টেমপ্লেট, প্রোফাইল ডিজাইন এবং প্ল্যাটফর্ম-নির্দিষ্ট ব্র্যান্ডিং সমাধান',
      
      uiuxDesign: 'ইউআই/ইউএক্স ডিজাইন ও প্রোটোটাইপিং',
      uiuxDesignDesc: 'ওয়্যারফ্রেমিং, প্রোটোটাইপিং এবং অ্যাক্সেসিবিলিটি সম্মতি সহ ব্যবহারকারী-কেন্দ্রিক ডিজাইন সমাধান',
      
      websiteDevelopment: 'ওয়েবসাইট উন্নয়ন ও ই-কমার্স',
      websiteDevelopmentDesc: 'WooCommerce একীকরণ এবং CMS সেটআপ সহ কাস্টম ওয়েবসাইট উন্নয়ন',
      
      contentCreation: 'ওয়েবসাইট কন্টেন্ট লেখা ও কপিরাইটিং',
      contentCreationDesc: 'SEO-অপ্টিমাইজড ওয়েবসাইট কপি, পণ্যের বিবরণ এবং কন্টেন্ট কৌশল',
      
      consultationStrategy: 'ব্র্যান্ড কৌশল ও সৃজনশীল পরামর্শ',
      consultationStrategyDesc: 'কৌশলগত ব্র্যান্ড পজিশনিং, বাজার বিশ্লেষণ এবং চলমান সৃজনশীল পরামর্শ',
      
      // Footer
      footerDescription: 'সাশ্রয়ী মূল্যে প্রিমিয়াম মানের সাথে স্থানীয় ব্যবসার জন্য পিক্সেল-পারফেক্ট ডিজাইন তৈরি করা।',
      allRightsReserved: 'সমস্ত অধিকার সংরক্ষিত ২০২৫',
      privacyPolicy: 'গোপনীয়তা নীতি',
      termsOfService: 'সেবার শর্তাবলী',
      cookiePolicy: 'কুকি নীতি',
    }
  },
  fr: {
    translation: {
      // Company
      companyName: 'Pixel Mango',
      
      // Navigation
      services: 'Services',
      products: 'Produits',
      integrations: 'Intégrations',
      pricing: 'Tarifs',
      support: 'Support',
      aboutUs: 'À Propos',
      contactUs: 'Contactez-nous',
      faq: 'FAQ',
      resources: 'Ressources',
      
      // Hero Section
      heroTitle: 'CRÉER DES DESIGNS',
      heroSubtitle: 'PIXEL-PARFAITS',
      heroDescription: 'Services de branding premium, sites web et services créatifs pour marques de vêtements, cafés et plus - sans le prix premium d\'une agence.',
      getStarted: 'Commencer',
      exploreServices: 'Explorer les Services',
      projects: 'Projets',
      satisfaction: 'Satisfaction',
      supportAvailable: 'Support Disponible',
      
      // Services
      servicesTitle: 'Nos Services Créatifs',
      servicesDescription: 'Solutions complètes de design et développement pour élever votre marque',
      learnMore: 'En Savoir Plus',
      
      // New Services
      brandIdentity: 'Identité de Marque & Design de Logo',
      brandIdentityDesc: 'Packages complets d\'identité de marque incluant design de logo, guidelines de marque et cartes de visite',
      
      socialMediaBranding: 'Design & Branding Réseaux Sociaux',
      socialMediaBrandingDesc: 'Templates réseaux sociaux, designs de profil et solutions de branding spécifiques aux plateformes',
      
      uiuxDesign: 'Design UI/UX & Prototypage',
      uiuxDesignDesc: 'Solutions de design centrées utilisateur avec wireframing, prototypage et conformité d\'accessibilité',
      
      websiteDevelopment: 'Développement Web & E-Commerce',
      websiteDevelopmentDesc: 'Développement de site web personnalisé avec intégration WooCommerce et configuration CMS',
      
      contentCreation: 'Rédaction de Contenu Web & Copywriting',
      contentCreationDesc: 'Copy de site web optimisé SEO, descriptions de produits et stratégie de contenu',
      
      consultationStrategy: 'Stratégie de Marque & Consultation Créative',
      consultationStrategyDesc: 'Positionnement stratégique de marque, analyse de marché et consultation créative continue',
      
      // Footer
      footerDescription: 'Créer des designs pixel-parfaits pour les entreprises locales avec une qualité premium à des prix abordables.',
      allRightsReserved: 'Tous droits réservés 2025',
      privacyPolicy: 'Politique de Confidentialité',
      termsOfService: 'Conditions d\'Utilisation',
      cookiePolicy: 'Politique des Cookies',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
