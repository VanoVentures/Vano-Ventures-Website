import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { siteConfig } from '../config/site';
import { Button } from '../components/common/Button';
import { analytics } from '../utils/analytics';
import { InstagramIcon, GithubIcon, LinkedinIcon, XIcon } from '../components/common/SocialIcons';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || 'Business Website';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: serviceParam,
    message: '',
    company: '',
    phone: '',
    budget: 'Not sure yet',
    website: '',
    contactMethod: 'Email',
    botcheck: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const [prevParam, setPrevParam] = useState(serviceParam);

  // Sync service param from URL if changed without cascading render effect
  if (serviceParam !== prevParam) {
    setPrevParam(serviceParam);
    setFormData((prev) => ({ ...prev, projectType: serviceParam }));
  }

  const projectTypeOptions = [
    'Business Website',
    'Landing Page',
    'Portfolio Website',
    'Website Redesign',
    'SEO & Search Visibility',
    'Digital Presence',
    'Digital Marketing',
    'Other',
  ];

  const budgetOptions = [
    'Under ₹5k',
    '₹5k–₹10k',
    '₹10k–₹25k',
    '₹25k–₹50k',
    '₹50k+',
    'Not sure yet',
  ];

  const faqs = [
    {
      q: 'What type of websites do you build?',
      a: 'Business websites, landing pages, portfolio websites and website redesigns.',
    },
    {
      q: 'Do you build mobile-friendly websites?',
      a: 'Yes. Websites are designed to work across phones, tablets and computers.',
    },
    {
      q: 'Can you redesign my existing website?',
      a: 'Yes. We can improve the design, mobile experience, usability and structure.',
    },
    {
      q: 'Do you provide SEO?',
      a: 'We provide basic SEO and search-friendly website foundations.',
    },
    {
      q: 'Do you provide digital marketing?',
      a: 'We currently focus on practical social media and content support rather than large-scale marketing campaigns.',
    },
    {
      q: 'How do I start a project?',
      a: 'Send an enquiry through the contact form and tell us what you need.',
    },
  ];

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!formData.projectType) {
      errors.projectType = 'Please select a project type.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide a short description of what you are trying to achieve (at least 10 characters).';
    }

    setFormErrors(errors);

    if (errors.name) {
      document.getElementById('name')?.focus();
    } else if (errors.email) {
      document.getElementById('email')?.focus();
    } else if (errors.projectType) {
      document.getElementById('projectType')?.focus();
    } else if (errors.message) {
      document.getElementById('message')?.focus();
    }

    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;
    if (formData.botcheck) return;

    setStatus('loading');
    analytics.contactFormSubmission('attempt', formData.projectType);

    const accessKey = siteConfig.integrations.web3formsAccessKey;
    const isPlaceholder =
      !accessKey ||
      accessKey.includes('[') ||
      accessKey.includes('YOUR_') ||
      accessKey === '[WEB3FORMS_ACCESS_KEY]';

    try {
      if (isPlaceholder) {
        await new Promise((resolve) => setTimeout(resolve, 750));
        setStatus('success');
        setStatusMessage(
          "Thanks! Your project enquiry has been received. We'll get back to you soon."
        );
        analytics.contactFormSubmission('success', formData.projectType);
        setFormData({
          name: '',
          email: '',
          projectType: 'Business Website',
          message: '',
          company: '',
          phone: '',
          budget: 'Not sure yet',
          website: '',
          contactMethod: 'Email',
          botcheck: '',
        });
        return;
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Project Enquiry: ${formData.name} (${formData.projectType})`,
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          budget_range: formData.budget,
          message: formData.message,
          company: formData.company || 'Not specified',
          phone_whatsapp: formData.phone || 'Not specified',
          existing_website: formData.website || 'None',
          preferred_contact: formData.contactMethod,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setStatusMessage(
          "Thanks! Your project enquiry has been received. We'll get back to you soon."
        );
        analytics.contactFormSubmission('success', formData.projectType);
        setFormData({
          name: '',
          email: '',
          projectType: 'Business Website',
          message: '',
          company: '',
          phone: '',
          budget: 'Not sure yet',
          website: '',
          contactMethod: 'Email',
          botcheck: '',
        });
      } else {
        throw new Error(data.message || 'Submission error');
      }
    } catch {
      setStatus('error');
      setStatusMessage(
        'Something went wrong while sending your enquiry. Please try again or contact us directly.'
      );
      analytics.contactFormSubmission('failure', formData.projectType);
    }
  };

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Contact Vano Ventures
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's build something useful.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tell us about your business, idea or project. We'll review what you need and get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Main Enquiry Form (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8">
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Enquiry Received</h4>
                  <p className="mt-0.5">{statusMessage}</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white">Submission Notice</h4>
                  <p className="mt-0.5">{statusMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="botcheck"
                value={formData.botcheck}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    aria-invalid={!!formErrors.name}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.name ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="text-rose-400 text-xs mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    aria-invalid={!!formErrors.email}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      formErrors.email ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-rose-400 text-xs mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Project Type & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Project Type <span className="text-blue-400">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {projectTypeOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-950 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Budget Range (Optional)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-950 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Optional Business & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Business / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company or venture"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Row 4: Existing Website & Preferred Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="website" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Existing Website (Optional)
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="contactMethod" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Email" className="bg-slate-950 text-white">Email</option>
                    <option value="WhatsApp" className="bg-slate-950 text-white">WhatsApp</option>
                  </select>
                </div>
              </div>

              {/* Project Description (Required) */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Project Description <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're trying to achieve, timeline, or any specific details..."
                  aria-invalid={!!formErrors.message}
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    formErrors.message ? 'border-rose-500' : 'border-slate-800'
                  }`}
                />
                {formErrors.message && (
                  <p className="text-rose-400 text-xs mt-1">{formErrors.message}</p>
                )}
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={status === 'loading'}
                  disabled={status === 'loading'}
                  icon={<Send className="w-4 h-4" />}
                >
                  Send Project Enquiry
                </Button>
              </div>
            </form>
          </div>

          {/* Direct Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white">Direct Contact</h3>
              <p className="text-sm text-slate-300">
                Prefer direct communication? Reach us by email or message us directly on WhatsApp.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>Email</span>
                </div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  onClick={() => analytics.emailClick('contact_section')}
                  className="block text-sm font-semibold text-white hover:text-blue-300 transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {siteConfig.contact.whatsappDisplay}
                </div>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => analytics.whatsAppClick('contact_section')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors pt-1"
                >
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>

              {/* Social Profiles if configured */}
              {(siteConfig.social.instagram || siteConfig.social.github || siteConfig.social.linkedin || siteConfig.social.x) && (
                <div className="pt-2 border-t border-slate-800 space-y-2.5">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Follow & Connect
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {siteConfig.social.instagram && (
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                        aria-label="Instagram Profile"
                      >
                        <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                        <span>Instagram</span>
                      </a>
                    )}
                    {siteConfig.social.github && (
                      <a
                        href={siteConfig.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                        aria-label="GitHub Profile"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {siteConfig.social.linkedin && (
                      <a
                        href={siteConfig.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {siteConfig.social.x && (
                      <a
                        href={siteConfig.social.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                        aria-label="X (Twitter) Profile"
                      >
                        <XIcon className="w-3.5 h-3.5 text-slate-300" />
                        <span>X</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="p-5 rounded-xl bg-slate-900/30 border border-slate-800/80 text-xs text-slate-400 space-y-2">
              <span className="font-semibold text-slate-300 block">
                Quick Response
              </span>
              We usually review and reply to project enquiries within 24 to 48 hours on business days.
            </div>
          </div>
        </div>

        {/* Small FAQ Section (6 questions) */}
        <div className="border-t border-slate-900 pt-16">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl" role="region" aria-label="FAQ Accordion">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.q}
                  className={`rounded-xl border transition-colors overflow-hidden ${
                    isOpen ? 'bg-slate-900/80 border-slate-700' : 'bg-slate-900/40 border-slate-800'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <span className="text-base font-semibold text-white">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
