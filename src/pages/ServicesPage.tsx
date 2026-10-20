import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { siteConfig } from '../config/site';
import { analytics } from '../utils/analytics';
import {
  Globe,
  FileCode,
  UserCheck,
  RefreshCw,
  Search,
  MapPin,
  BarChart3,
  Share2,
  ArrowRight,
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  // 8 Core Launch Services
  const webServices = siteConfig.services.filter((s) => s.category === 'Web Development');
  const presenceServices = siteConfig.services.filter((s) => s.category === 'Digital Presence');
  const marketingServices = siteConfig.services.filter((s) => s.category === 'Digital Marketing');

  const getIcon = (id: string) => {
    switch (id) {
      case 'business-websites':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'landing-pages':
        return <FileCode className="w-5 h-5 text-blue-400" />;
      case 'portfolio-websites':
        return <UserCheck className="w-5 h-5 text-blue-400" />;
      case 'website-redesign':
        return <RefreshCw className="w-5 h-5 text-blue-400" />;
      case 'seo-search-visibility':
        return <Search className="w-5 h-5 text-indigo-400" />;
      case 'google-business-support':
        return <MapPin className="w-5 h-5 text-indigo-400" />;
      case 'analytics-performance':
        return <BarChart3 className="w-5 h-5 text-indigo-400" />;
      case 'social-media-content':
        return <Share2 className="w-5 h-5 text-cyan-400" />;
      default:
        return <Globe className="w-5 h-5 text-blue-400" />;
    }
  };

  const handleServiceClick = (serviceId: string, title: string, category: string) => {
    analytics.serviceSelection(serviceId, title, category);
  };

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Services
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            What we can help you with
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Focused digital services for businesses that want to build, improve or grow online. Start with what you need today.
          </p>
        </div>

        {/* Category 1: Web Development (4 services) */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="h-5 w-1 rounded-full bg-blue-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Web Development
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webServices.map((service) => (
              <div
                key={service.id}
                className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      {getIcon(service.id)}
                    </div>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Fixed scope or custom</span>
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    onClick={() => handleServiceClick(service.id, service.title, service.category)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Digital Presence (3 services) */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="h-5 w-1 rounded-full bg-indigo-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Digital Presence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {presenceServices.map((service) => (
              <div
                key={service.id}
                className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      {getIcon(service.id)}
                    </div>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                      Presence
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Foundational setup</span>
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    onClick={() => handleServiceClick(service.id, service.title, service.category)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 3: Digital Marketing (1 service) */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="h-5 w-1 rounded-full bg-cyan-500" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Digital Marketing
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketingServices.map((service) => (
              <div
                key={service.id}
                className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      {getIcon(service.id)}
                    </div>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                      Marketing
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Practical guidance</span>
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    onClick={() => handleServiceClick(service.id, service.title, service.category)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specific requirement card */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">
              Need something more specific?
            </h3>
            <p className="text-sm text-slate-400">
              Tell us what you're trying to achieve and we'll discuss the right approach.
            </p>
          </div>
          <Link
            to="/contact?service=Other"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};
