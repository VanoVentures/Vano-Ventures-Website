import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { siteConfig } from '../../config/site';
import { analytics } from '../../utils/analytics';
import { ArrowUp, Mail, MessageSquare } from 'lucide-react';
import { InstagramIcon, GithubIcon, LinkedinIcon, XIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-3.5">
            <Link
              to="/"
              className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg group"
              aria-label="Vano Ventures - Home"
            >
              <Logo variant="footer" />
            </Link>
            <p className="text-base font-semibold text-white tracking-tight">
              {siteConfig.brand.tagline}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.brand.supportingStatement}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3.5">
              Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3.5">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/contact?service=Business Website" className="hover:text-white transition-colors">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link to="/contact?service=Landing Page" className="hover:text-white transition-colors">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link to="/contact?service=Website Redesign" className="hover:text-white transition-colors">
                  Website Redesign
                </Link>
              </li>
              <li>
                <Link to="/contact?service=SEO & Search Visibility" className="hover:text-white transition-colors">
                  SEO & Search Visibility
                </Link>
              </li>
              <li>
                <Link to="/contact?service=Digital Presence" className="hover:text-white transition-colors">
                  Digital Presence
                </Link>
              </li>
              <li>
                <Link to="/contact?service=Digital Marketing" className="hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3.5">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  onClick={() => analytics.emailClick('footer')}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => analytics.whatsAppClick('footer')}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </li>
              {siteConfig.social.instagram && (
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                </li>
              )}
              {siteConfig.social.github && (
                <li>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-300" />
                    <span>GitHub</span>
                  </a>
                </li>
              )}
              {siteConfig.social.linkedin && (
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              )}
              {siteConfig.social.x && (
                <li>
                  <a
                    href={siteConfig.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <XIcon className="w-4 h-4 text-slate-300" />
                    <span>X (Twitter)</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Legal & Bottom Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span>© 2026 {siteConfig.brand.name}. All rights reserved.</span>
            <span className="text-slate-700">•</span>
            <a
              href={siteConfig.brand.founderPortfolioUrl || "https://sreerampalani.vercel.app"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1"
              aria-label="Founder Portfolio (opens in a new tab)"
            >
              <span>Founder Portfolio</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer p-1"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
