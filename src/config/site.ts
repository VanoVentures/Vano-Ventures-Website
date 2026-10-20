/**
 * Vano Ventures - Central Brand & Site Configuration
 * 
 * Clean, minimal configuration for the official multi-page website.
 */

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Web Development' | 'Digital Presence' | 'Digital Marketing';
  description: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    displayName: string;
    tagline: string;
    supportingStatement: string;
    shortPositioning: string;
    logoPlaceholder: string;
    faviconPlaceholder: string;
    ogImagePlaceholder: string;
    logoUrl?: string;
    faviconUrl?: string;
    ogImageUrl?: string;
    founderPortfolioUrl?: string;
  };
  siteUrl: string;
  contact: {
    email: string;
    whatsappNumber: string;
    whatsappDisplay: string;
  };
  social: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    x?: string;
  };
  services: ServiceItem[];
  integrations: {
    web3formsAccessKey: string;
    gaMeasurementId: string;
  };
}

const env = import.meta.env;

export const siteConfig: SiteConfig = {
  brand: {
    name: "Vano Ventures",
    displayName: "VANO VENTURES",
    tagline: "Digital solutions for growing businesses.",
    supportingStatement: "We build modern websites and help businesses strengthen their digital presence online.",
    shortPositioning: "Web • Digital Presence • Practical Solutions",
    logoPlaceholder: "[VANO VENTURES LOGO]",
    faviconPlaceholder: "[VANO_FAVICON]",
    ogImagePlaceholder: "[VANO_OG_IMAGE]",
    logoUrl: env.VITE_VANO_LOGO || "/assets/vano-logo.svg",
    faviconUrl: env.VITE_VANO_FAVICON || "/favicon.svg",
    ogImageUrl: env.VITE_VANO_OG_IMAGE || "/og-image.png",
    founderPortfolioUrl: env.VITE_FOUNDER_PORTFOLIO_URL || "https://sreerampalani.vercel.app",
  },

  siteUrl: env.VITE_SITE_URL || "https://vanoventures.vercel.app",

  contact: {
    email: env.VITE_CONTACT_EMAIL || "vanoventures26@gmail.com",
    whatsappNumber: env.VITE_WHATSAPP_NUMBER || "918270263531",
    whatsappDisplay: env.VITE_WHATSAPP_DISPLAY || "+91 (WhatsApp Business)",
  },

  social: {
    instagram: env.VITE_INSTAGRAM_URL || undefined,
    github: env.VITE_GITHUB_URL || undefined,
    linkedin: env.VITE_LINKEDIN_URL || undefined,
    x: env.VITE_X_URL || env.VITE_TWITTER_URL || undefined,
  },

  // Exactly the 8 core launch services
  services: [
    // Web Development
    {
      id: "business-websites",
      title: "Business Websites",
      category: "Web Development",
      description: "Professional websites that clearly present your business, services and contact information.",
    },
    {
      id: "landing-pages",
      title: "Landing Pages",
      category: "Web Development",
      description: "Focused pages for campaigns, products, services and enquiries.",
    },
    {
      id: "portfolio-websites",
      title: "Portfolio Websites",
      category: "Web Development",
      description: "Modern websites for professionals, creators and individuals.",
    },
    {
      id: "website-redesign",
      title: "Website Redesign",
      category: "Web Development",
      description: "Improve an outdated website with a cleaner design, better mobile experience and improved usability.",
    },

    // Digital Presence
    {
      id: "seo-search-visibility",
      title: "SEO & Search Visibility",
      category: "Digital Presence",
      description: "Improve your website's structure and content so search engines can better understand your business.",
    },
    {
      id: "google-business-support",
      title: "Google Business Support",
      category: "Digital Presence",
      description: "Help improve your business presence on Google so customers can find useful information about you more easily.",
    },
    {
      id: "analytics-performance",
      title: "Analytics & Performance",
      category: "Digital Presence",
      description: "Understand how people use your website and improve its speed and usability.",
    },

    // Digital Marketing
    {
      id: "social-media-content",
      title: "Social Media & Content Support",
      category: "Digital Marketing",
      description: "Set up professional social profiles and create a practical starting direction for your content.",
    },
  ],

  integrations: {
    web3formsAccessKey: env.VITE_WEB3FORMS_ACCESS_KEY || "[WEB3FORMS_ACCESS_KEY]",
    gaMeasurementId: env.VITE_GA_MEASUREMENT_ID || "[GA_MEASUREMENT_ID]",
  },
};
