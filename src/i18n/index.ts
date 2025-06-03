
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      services: 'Services',
      products: 'Products',
      support: 'Support',
      integrations: 'Integrations',
      pricing: 'Pricing',
      
      // Hero Section
      heroTitle: 'Transform Your Business with',
      heroSubtitle: 'Cutting-Edge Digital Solutions',
      heroDescription: 'We specialize in delivering innovative digital experiences through advanced 3D visualization, AI-powered automation, and comprehensive creative services that drive business growth.',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      projects: 'Projects Completed',
      satisfaction: 'Client Satisfaction',
      countries: 'Countries Served',
      
      // Services
      servicesTitle: 'What We Do',
      servicesDescription: 'Build, file, and manage cutting-edge digital e-commerce and creative solutions',
      imageEditing: 'Image Editing Services',
      imageEditingDesc: 'Enhance your online visual content with engaging and captivating image editing. We will elevate your brand.',
      videoProduction: 'Video Production',
      videoProductionDesc: 'Create content for marketing, promotions, training and communications to reach your target audience with our video ads.',
      threeDModeling: '3D Modelling',
      threeDModelingDesc: 'Transform your business with advanced 3D models that create immersive experiences and drive customer engagement.',
      cgiRendering: 'CGI Rendering',
      cgiRenderingDesc: 'Transform your concepts into realistic visualizations with our professional CGI rendering services. High-quality output guaranteed.',
      softwareDevelopment: 'Software Development',
      softwareDevelopmentDesc: 'Custom software solutions and applications to streamline your business processes and enhance productivity.',
      aiAutomation: 'AI Automation',
      aiAutomationDesc: 'Leverage AI to automate business workflows and improve efficiency. Smart solutions for modern businesses.',
      
      // Footer
      companyName: 'The Kow Company Ltd',
      companyDescription: 'Transforming businesses through innovative digital solutions, advanced 3D experiences, and AI-powered automation.',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      faq: 'FAQ',
      resources: 'Resources',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookiePolicy: 'Cookie Policy',
      allRightsReserved: '© 2025 The Kow Company Ltd. All rights reserved.',
      
      // Common
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      systemMode: 'System'
    }
  },
  bn: {
    translation: {
      // Navigation
      services: 'সেবাসমূহ',
      products: 'পণ্যসমূহ',
      support: 'সহায়তা',
      integrations: 'ইন্টিগ্রেশন',
      pricing: 'মূল্য',
      
      // Hero Section
      heroTitle: 'আপনার ব্যবসাকে রূপান্তরিত করুন',
      heroSubtitle: 'অত্যাধুনিক ডিজিটাল সমাধানের সাথে',
      heroDescription: 'আমরা উন্নত ৩ডি ভিজুয়ালাইজেশন, AI-চালিত অটোমেশন এবং ব্যাপক সৃজনশীল সেবার মাধ্যমে উদ্ভাবনী ডিজিটাল অভিজ্ঞতা প্রদানে বিশেষজ্ঞ।',
      getStarted: 'শুরু করুন',
      learnMore: 'আরও জানুন',
      projects: 'সম্পন্ন প্রকল্প',
      satisfaction: 'ক্লায়েন্ট সন্তুষ্টি',
      countries: 'সেবা প্রদত্ত দেশ',
      
      // Services
      servicesTitle: 'আমরা যা করি',
      servicesDescription: 'অত্যাধুনিক ডিজিটাল ই-কমার্স এবং সৃজনশীল সমাধান তৈরি, ফাইল এবং পরিচালনা',
      imageEditing: 'ছবি সম্পাদনা সেবা',
      imageEditingDesc: 'আকর্ষণীয় এবং মনোমুগ্ধকর ছবি সম্পাদনার মাধ্যমে আপনার অনলাইন ভিজ্যুয়াল কন্টেন্ট উন্নত করুন।',
      videoProduction: 'ভিডিও প্রোডাকশন',
      videoProductionDesc: 'মার্কেটিং, প্রচার, প্রশিক্ষণ এবং যোগাযোগের জন্য কন্টেন্ট তৈরি করুন।',
      threeDModeling: '৩ডি মডেলিং',
      threeDModelingDesc: 'উন্নত ৩ডি মডেলের মাধ্যমে আপনার ব্যবসাকে রূপান্তরিত করুন।',
      cgiRendering: 'CGI রেন্ডারিং',
      cgiRenderingDesc: 'আমাদের পেশাদার CGI রেন্ডারিং সেবার মাধ্যমে আপনার ধারণাকে বাস্তবিক ভিজ্যুয়ালাইজেশনে রূপান্তরিত করুন।',
      softwareDevelopment: 'সফটওয়্যার ডেভেলপমেন্ট',
      softwareDevelopmentDesc: 'ব্যবসায়িক প্রক্রিয়া সহজীকরণ এবং উৎপাদনশীলতা বৃদ্ধির জন্য কাস্টম সফটওয়্যার সমাধান।',
      aiAutomation: 'AI অটোমেশন',
      aiAutomationDesc: 'ব্যবসায়িক কর্মপ্রবাহ স্বয়ংক্রিয় করতে এবং দক্ষতা উন্নত করতে AI ব্যবহার করুন।',
      
      // Footer
      companyName: 'দ্য কাউ কোম্পানি লিমিটেড',
      companyDescription: 'উদ্ভাবনী ডিজিটাল সমাধান, উন্নত ৩ডি অভিজ্ঞতা এবং AI-চালিত অটোমেশনের মাধ্যমে ব্যবসা রূপান্তর।',
      aboutUs: 'আমাদের সম্পর্কে',
      contactUs: 'যোগাযোগ করুন',
      faq: 'প্রশ্ন উত্তর',
      resources: 'সম্পদ',
      privacyPolicy: 'গোপনীয়তা নীতি',
      termsOfService: 'সেবার শর্তাবলী',
      cookiePolicy: 'কুকি নীতি',
      allRightsReserved: '© ২০২৫ দ্য কাউ কোম্পানি লিমিটেড। সকল অধিকার সংরক্ষিত।',
      
      // Common
      darkMode: 'ডার্ক মোড',
      lightMode: 'লাইট মোড',
      systemMode: 'সিস্টেম'
    }
  },
  fr: {
    translation: {
      // Navigation
      services: 'Services',
      products: 'Produits',
      support: 'Support',
      integrations: 'Intégrations',
      pricing: 'Tarification',
      
      // Hero Section
      heroTitle: 'Transformez Votre Entreprise avec',
      heroSubtitle: 'Des Solutions Numériques de Pointe',
      heroDescription: 'Nous nous spécialisons dans la livraison d\'expériences numériques innovantes grâce à la visualisation 3D avancée, l\'automatisation alimentée par l\'IA et des services créatifs complets.',
      getStarted: 'Commencer',
      learnMore: 'En Savoir Plus',
      projects: 'Projets Terminés',
      satisfaction: 'Satisfaction Client',
      countries: 'Pays Servis',
      
      // Services
      servicesTitle: 'Ce Que Nous Faisons',
      servicesDescription: 'Construire, archiver et gérer des solutions numériques e-commerce et créatives de pointe',
      imageEditing: 'Services de Retouche d\'Image',
      imageEditingDesc: 'Améliorez votre contenu visuel en ligne avec une retouche d\'image engageante et captivante.',
      videoProduction: 'Production Vidéo',
      videoProductionDesc: 'Créez du contenu pour le marketing, les promotions, la formation et les communications.',
      threeDModeling: 'Modélisation 3D',
      threeDModelingDesc: 'Transformez votre entreprise avec des modèles 3D avancés qui créent des expériences immersives.',
      cgiRendering: 'Rendu CGI',
      cgiRenderingDesc: 'Transformez vos concepts en visualisations réalistes avec nos services de rendu CGI professionnels.',
      softwareDevelopment: 'Développement Logiciel',
      softwareDevelopmentDesc: 'Solutions logicielles personnalisées pour rationaliser vos processus d\'affaires.',
      aiAutomation: 'Automatisation IA',
      aiAutomationDesc: 'Exploitez l\'IA pour automatiser les flux de travail d\'entreprise et améliorer l\'efficacité.',
      
      // Footer
      companyName: 'The Kow Company Ltd',
      companyDescription: 'Transformer les entreprises grâce à des solutions numériques innovantes, des expériences 3D avancées et une automatisation alimentée par l\'IA.',
      aboutUs: 'À Propos',
      contactUs: 'Nous Contacter',
      faq: 'FAQ',
      resources: 'Ressources',
      privacyPolicy: 'Politique de Confidentialité',
      termsOfService: 'Conditions de Service',
      cookiePolicy: 'Politique de Cookies',
      allRightsReserved: '© 2025 The Kow Company Ltd. Tous droits réservés.',
      
      // Common
      darkMode: 'Mode Sombre',
      lightMode: 'Mode Clair',
      systemMode: 'Système'
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
      escapeValue: false
    }
  });

export default i18n;
