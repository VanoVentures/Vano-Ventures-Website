import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { siteConfig } from '../config/site';

export const PrivacyPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400 mb-8">
          Last updated: 2026 • {siteConfig.brand.name}
        </p>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <p>
            At <strong>{siteConfig.brand.name}</strong>, we respect your privacy and are committed to protecting the personal information you share with us.
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
            <p>
              When you submit a project enquiry through our website, we collect your name, email address, project type, and project description. We only use this information to respond to your request and communicate about potential work.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Form Submissions</h2>
            <p>
              Enquiry submissions are transmitted securely via Web3Forms over encrypted HTTPS. We do not sell, rent, or distribute your contact details to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Analytics & Usage Data</h2>
            <p>
              We may collect basic, non-personally identifiable usage statistics through Google Analytics with IP anonymization enabled to understand site traffic and improve performance.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Questions & Contact</h2>
            <p>
              If you have any questions regarding this policy, contact us at{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-400 hover:underline">
                {siteConfig.contact.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};
