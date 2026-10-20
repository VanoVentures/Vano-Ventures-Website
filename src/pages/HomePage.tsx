import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { projects } from '../data/projects';
import { analytics } from '../utils/analytics';
import {
  ArrowRight,
  Hammer,
  Zap,
  TrendingUp,
  Globe,
  Search,
  Share2,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Target,
  Rocket,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartProject = (source: 'hero' | 'final_cta') => {
    analytics.startProjectClick(source === 'hero' ? 'hero' : 'intro');
    navigate('/contact');
  };

  return (
    <PageLayout>
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden" aria-label="Hero">
        {/* Subtle ambient lighting */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-cyan-500/10 blur-[120px] pointer-events-none rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline and Positioning */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                <span>VANO VENTURES</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
                Digital solutions for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                  growing businesses.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
                We build modern websites and help businesses strengthen their digital presence online.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  onClick={() => handleStartProject('hero')}
                  className="w-full sm:w-auto"
                >
                  Start a Project
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href="/work"
                  className="w-full sm:w-auto"
                >
                  View Our Work
                </Button>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-sm text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Web • Digital Presence • Practical Solutions</span>
              </div>
            </div>

            {/* Right Column: Clean, understated browser mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-xl border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-sm overflow-hidden">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800/80 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>your-business.com</span>
                    </div>
                    <div className="w-6" />
                  </div>

                  {/* Clean Content Frame */}
                  <div className="p-5 space-y-4">
                    <div className="rounded-lg bg-slate-950/60 p-4 border border-slate-800 space-y-2.5">
                      <div className="h-2 w-14 bg-blue-400/70 rounded-full" />
                      <div className="h-4 w-3/4 bg-slate-200 rounded" />
                      <div className="h-2.5 w-1/2 bg-slate-400/50 rounded" />
                      <div className="pt-2 flex gap-2">
                        <div className="h-6 w-20 bg-blue-600 rounded flex items-center justify-center text-[10px] text-white font-medium">
                          Contact
                        </div>
                        <div className="h-6 w-16 bg-slate-800 rounded" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                        <div className="h-2 w-12 bg-slate-400/70 rounded mb-1.5" />
                        <div className="h-1.5 w-full bg-slate-600/40 rounded" />
                      </div>
                      <div className="p-3 rounded-lg bg-slate-950/50 border border-slate-800">
                        <div className="h-2 w-12 bg-slate-400/70 rounded mb-1.5" />
                        <div className="h-1.5 w-full bg-slate-600/40 rounded" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-800/60">
                      <span className="flex items-center gap-1 text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Fast & Responsive
                      </span>
                      <span className="text-slate-400 font-mono text-[10px]">Production Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BUILD / IMPROVE / GROW */}
      <section className="py-16 bg-slate-950/60 border-y border-slate-900" aria-label="Value">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Your digital presence should work for your business.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              From your first website to improving your online presence, Vano Ventures helps businesses create practical digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Build</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Modern websites designed around your business and audience.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Improve</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Better usability, performance and search-friendly foundations.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="h-10 w-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Grow</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Practical support for building a stronger online presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW */}
      <section className="py-20" aria-label="Services Preview">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                What we do
              </h2>
              <p className="text-base text-slate-300">
                Focused digital services for businesses that want to build, improve or grow online.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/services"
              className="group p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  Web Development
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Business websites, landing pages, portfolio websites and redesigns.
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              to="/services"
              className="group p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  Digital Presence
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  SEO foundations, Google Business support, analytics and performance.
                </p>
              </div>
              <span className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              to="/services"
              className="group p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
                  <Share2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  Digital Marketing
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Social media setup and practical content support.
                </p>
              </div>
              <span className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY VANO */}
      <section className="py-16 bg-slate-950/70 border-t border-slate-900" aria-label="Why Vano">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              Why Vano Ventures?
            </h2>
            <p className="text-sm text-slate-400">
              Clear principles focused on what actually works for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <Cpu className="w-5 h-5 text-blue-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5">Modern Approach</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We use current tools and efficient workflows.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <Target className="w-5 h-5 text-indigo-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5">Business First</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We focus on what your business actually needs.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <Zap className="w-5 h-5 text-cyan-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5">Performance Focused</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We care about speed, responsiveness and usability.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <Rocket className="w-5 h-5 text-emerald-400 mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5">Direct & Honest</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Clear communication and realistic project scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SELECTED WORK */}
      <section className="py-20" aria-label="Selected Work">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                Selected work
              </h2>
              <p className="text-base text-slate-300">
                A growing collection of websites and digital projects.
              </p>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>View All Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} headingLevel="h3" />
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS PREVIEW */}
      <section className="py-16 bg-slate-950/70 border-t border-slate-900" aria-label="Process Preview">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                How we work
              </h2>
              <p className="text-sm text-slate-400">
                A straightforward process keeping projects organized from start to finish.
              </p>
            </div>
            <Link
              to="/process"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>See Our Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <span className="text-2xl font-extrabold font-mono text-blue-500 mb-2 block">01</span>
              <h3 className="text-base font-bold text-white mb-1.5">Discover</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Understand your business and requirements.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <span className="text-2xl font-extrabold font-mono text-blue-500 mb-2 block">02</span>
              <h3 className="text-base font-bold text-white mb-1.5">Plan</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Define the structure and direction.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <span className="text-2xl font-extrabold font-mono text-blue-500 mb-2 block">03</span>
              <h3 className="text-base font-bold text-white mb-1.5">Build</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Design, develop, test and refine.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <span className="text-2xl font-extrabold font-mono text-blue-500 mb-2 block">04</span>
              <h3 className="text-base font-bold text-white mb-1.5">Launch</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Deploy the project and help you move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20" aria-label="Final Call to Action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-blue-950/20 border border-blue-500/20 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to take your next step online?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
              Tell us what you're trying to achieve and we'll help you find a practical way forward.
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => handleStartProject('final_cta')}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
