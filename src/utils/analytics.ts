/**
 * Centralized Google Analytics 4 (GA4) Utility
 * 
 * Safe initialization and structured event tracking without hardcoding.
 * If GA_MEASUREMENT_ID is a placeholder or not provided, events are logged
 * in development without throwing errors or loading third-party trackers.
 */

import { siteConfig } from '../config/site';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = siteConfig.integrations.gaMeasurementId;
const isPlaceholder = !MEASUREMENT_ID || MEASUREMENT_ID.includes('[') || MEASUREMENT_ID.includes('YOUR_');

/**
 * Initialize Google Analytics script only if a valid measurement ID is set
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') return;

  if (isPlaceholder) {
    if (import.meta.env.DEV) {
      console.info(`[Analytics] Google Analytics is currently using placeholder: "${MEASUREMENT_ID}". Real tracking is paused.`);
    }
    return;
  }

  // Inject GA script tag safely
  if (!document.getElementById('ga-gtag-script')) {
    const script = document.createElement('script');
    script.id = 'ga-gtag-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID, {
      anonymize_ip: true,
      send_page_view: true,
    });
  }
}

/**
 * Generic event dispatcher
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;

  if (isPlaceholder) {
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event: ${eventName}]`, params);
    }
    return;
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

// Structured event helpers
export const analytics = {
  pageView: (pagePath: string, pageTitle: string) => {
    trackEvent('page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  },

  startProjectClick: (source: 'navbar' | 'hero' | 'process' | 'footer' | 'intro') => {
    trackEvent('start_project_click', {
      source,
    });
  },

  serviceSelection: (serviceId: string, serviceTitle: string, category: string) => {
    trackEvent('service_selection', {
      service_id: serviceId,
      service_title: serviceTitle,
      category,
    });
  },

  contactFormSubmission: (status: 'attempt' | 'success' | 'failure', projectType?: string) => {
    trackEvent('contact_form_submission', {
      status,
      project_type: projectType,
    });
  },

  whatsAppClick: (source: 'contact_section' | 'footer' | 'floating') => {
    trackEvent('whatsapp_click', {
      source,
    });
  },

  emailClick: (source: 'contact_section' | 'footer') => {
    trackEvent('email_click', {
      source,
    });
  },

  portfolioProjectClick: (projectId: string, projectTitle: string, action: 'view_details' | 'external_link') => {
    trackEvent('portfolio_project_click', {
      project_id: projectId,
      project_title: projectTitle,
      action,
    });
  },

  navigationClick: (destination: string) => {
    trackEvent('navigation_click', {
      destination,
    });
  },
};
