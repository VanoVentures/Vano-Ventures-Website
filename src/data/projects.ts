/**
 * Vano Ventures - Central Portfolio Projects Data
 * 
 * To add or update live website URLs for projects, simply set the `liveUrl`
 * field below, or define the corresponding VITE_PROJECT_* environment variable.
 * 
 * If a project has no liveUrl configured yet (empty string or undefined), the UI
 * gracefully displays a clean non-clickable indicator ("Website link coming soon")
 * to ensure visitors never encounter broken or dead links.
 */

export interface Project {
  id: string;
  title: string;
  category: 'Business Website' | 'Portfolio Website' | 'Landing Page' | 'Web Redesign';
  description: string;
  image: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  technologies: string[];
  serviceContext: string;
  badge?: string;
}

const env = import.meta.env;

export const projects: Project[] = [
  {
    id: 'construction-waterproofing-website',
    title: 'Construction & Waterproofing Business Website',
    category: 'Business Website',
    description:
      'A responsive business website designed to clearly present waterproofing services, showcase recent structural projects, and make customer inspection and quotation requests seamless.',
    image: '/assets/projects/construction-preview.svg',
    // Configure with live URL when ready (or via VITE_PROJECT_CONSTRUCTION_URL)
    liveUrl: env.VITE_PROJECT_CONSTRUCTION_URL || 'https://saiwaterproofingsystem.com/',
    technologies: ['Fast Static Architecture', 'Responsive Layout', 'Quotation Flow', 'Local Search Foundations'],
    serviceContext: 'Business Website',
    badge: 'Production Website',
  },
  {
    id: 'professional-portfolio-website',
    title: 'Professional Portfolio & Brand Website',
    category: 'Portfolio Website',
    description:
      'A clean, typography-first professional website focused on presenting work, credentials, consulting services and direct contact information.',
    image: '/assets/projects/portfolio-preview.svg',
    // Configure with live URL when ready (or via VITE_PROJECT_PORTFOLIO_URL)
    liveUrl: env.VITE_PROJECT_PORTFOLIO_URL || 'https://vijaysrirams.vercel.app/',
    technologies: ['Component Architecture', 'Fast Static Deployment', 'Typography-first Layout', 'Accessible Navigation'],
    serviceContext: 'Portfolio Website',
    badge: 'Production Website',
  },
  {
    id: 'vano-ventures-platform',
    title: 'Vano Ventures Official Platform',
    category: 'Business Website',
    description:
      'The official multi-page web platform for Vano Ventures, built with modern static engineering, responsive design, fast performance and accessible contact flows.',
    image: '/assets/projects/vano-platform-preview.svg',
    // Live platform URL
    liveUrl: env.VITE_SITE_URL || 'https://vanoventures.vercel.app',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Web3Forms'],
    serviceContext: 'Business Website',
    badge: 'Live Platform',
  },
];
