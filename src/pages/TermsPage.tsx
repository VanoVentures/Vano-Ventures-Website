import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { siteConfig } from '../config/site';

export const TermsPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-400 mb-8">
          Last updated: 2026 • {siteConfig.brand.name}
        </p>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <p>
            Welcome to <strong>{siteConfig.brand.name}</strong>. By visiting our website or submitting project enquiries, you agree to the following terms.
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Service Scope</h2>
            <p>
              Vano Ventures provides digital solutions including websites, digital presence setup, and practical online support. Specific project deliverables, budgets, and timelines are established individually in writing before work begins.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Honest Business Standards</h2>
            <p>
              We build websites using current tools and good engineering practices. We do not make exaggerated guarantees regarding search engine rankings, specific revenue amounts, or automated viral growth.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Intellectual Property</h2>
            <p>
              Clients retain full ownership of their provided logos, content, and business assets. Rights for final project deliverables are transferred upon full settlement as agreed in individual project scopes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Inquiries</h2>
            <p>
              For inquiries regarding service terms, please contact us at{' '}
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
