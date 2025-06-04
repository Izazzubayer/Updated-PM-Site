
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
      heroDescription: 'From complex photo editing to advanced 3D experiences and AI-powered software solutions, we cover the digital landscape of modern business.',
      getStarted: 'Book a Call',
      learnMore: 'Learn More',
      exploreServices: 'Explore Services',
      projects: 'Projects Completed',
      satisfaction: 'Client Satisfaction',
      countries: 'Countries Served',
      supportAvailable: 'Support Available',
      
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
      
      // Stats Section
      statsTitle: 'Trusted by Industry Leaders',
      projectsCompleted: 'Projects Completed',
      clientSatisfaction: 'Client Satisfaction',
      countriesServed: 'Countries Served',
      
      // Technology Section
      technologyTitle: 'Powered by Cutting-Edge Technology',
      technologyDescription: 'We leverage the latest tools and frameworks to deliver exceptional results',
      
      // CTA Section
      ctaTitle: 'Ready to Transform Your Business?',
      ctaDescription: 'Join thousands of satisfied clients who have elevated their digital presence with our innovative solutions.',
      ctaButton: 'Get Started Today',
      ctaSecondary: 'Schedule a Consultation',
      
      // Common
      playVideo: 'Play Video'
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
      heroDescription: 'জটিল ফটো এডিটিং থেকে উন্নত ৩ডি অভিজ্ঞতা এবং AI-চালিত সফটওয়্যার সমাধান পর্যন্ত, আমরা আধুনিক ব্যবসার ডিজিটাল ল্যান্ডস্কেপ কভার করি।',
      getStarted: 'কল বুক করুন',
      learnMore: 'আরও জানুন',
      exploreServices: 'সেবা অন্বেষণ করুন',
      projects: 'সম্পন্ন প্রকল্প',
      satisfaction: 'ক্লায়েন্ট সন্তুষ্টি',
      countries: 'সেবা প্রদত্ত দেশ',
      supportAvailable: 'সাপোর্ট উপলব্ধ',
      
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
      
      // Stats Section
      statsTitle: 'ইন্ডাস্ট্রি লিডারদের দ্বারা বিশ্বস্ত',
      projectsCompleted: 'সম্পন্ন প্রকল্প',
      clientSatisfaction: 'ক্লায়েন্ট সন্তুষ্টি',
      countriesServed: 'সেবা প্রদত্ত দেশ',
      
      // Technology Section
      technologyTitle: 'অত্যাধুনিক প্রযুক্তি দ্বারা চালিত',
      technologyDescription: 'ব্যতিক্রমী ফলাফল প্রদানের জন্য আমরা সর্বশেষ টুলস এবং ফ্রেমওয়ার্ক ব্যবহার করি',
      
      // CTA Section
      ctaTitle: 'আপনার ব্যবসা রূপান্তরিত করতে প্রস্তুত?',
      ctaDescription: 'হাজার হাজার সন্তুষ্ট ক্লায়েন্টদের সাথে যোগ দিন যারা আমাদের উদ্ভাবনী সমাধানের সাথে তাদের ডিজিটাল উপস্থিতি উন্নত করেছেন।',
      ctaButton: 'আজই শুরু করুন',
      ctaSecondary: 'একটি পরামর্শের সময়সূচী',
      
      // Common
      playVideo: 'ভিডিও চালান'
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
      heroDescription: 'De la retouche photo complexe aux expériences 3D avancées et aux solutions logicielles alimentées par l\'IA, nous couvrons le paysage numérique des entreprises modernes.',
      getStarted: 'Réserver un Appel',
      learnMore: 'En Savoir Plus',
      exploreServices: 'Explorer les Services',
      projects: 'Projets Terminés',
      satisfaction: 'Satisfaction Client',
      countries: 'Pays Servis',
      supportAvailable: 'Support Disponible',
      
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
      
      // Stats Section
      statsTitle: 'Approuvé par les Leaders de l\'Industrie',
      projectsCompleted: 'Projets Terminés',
      clientSatisfaction: 'Satisfaction Client',
      countriesServed: 'Pays Servis',
      
      // Technology Section
      technologyTitle: 'Alimenté par une Technologie de Pointe',
      technologyDescription: 'Nous exploitons les derniers outils et frameworks pour fournir des résultats exceptionnels',
      
      // CTA Section
      ctaTitle: 'Prêt à Transformer Votre Entreprise?',
      ctaDescription: 'Rejoignez des milliers de clients satisfaits qui ont élevé leur présence numérique avec nos solutions innovantes.',
      ctaButton: 'Commencer Aujourd\'hui',
      ctaSecondary: 'Planifier une Consultation',
      
      // Common
      playVideo: 'Lire la Vidéo'
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
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
