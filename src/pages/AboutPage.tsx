import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { ShieldCheck, Compass, Code2, Rocket, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const principles = [
    {
      title: 'Practical',
      description: 'Useful solutions without unnecessary complexity.',
      icon: Compass,
    },
    {
      title: 'Modern',
      description: 'Current tools, technologies and efficient workflows.',
      icon: Code2,
    },
    {
      title: 'Transparent',
      description: 'Clear communication about scope and expectations.',
      icon: ShieldCheck,
    },
    {
      title: 'Built to Grow',
      description: 'Start with what you need today and expand later.',
      icon: Rocket,
    },
  ];

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
            About Vano Ventures
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            We're building Vano Ventures one project at a time.
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Vano Ventures is a growing technology and digital solutions venture focused on helping businesses build a stronger presence online. We start with practical solutions—modern websites, digital presence and straightforward technology support.
          </p>
        </div>

        {/* 4 Core Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Future Direction - Very small section */}
        <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/60 mb-14 text-sm text-slate-400 leading-relaxed">
          <span className="font-semibold text-slate-300 block mb-1">
            Looking ahead
          </span>
          As Vano grows, we plan to explore broader technology, automation and software solutions.
        </div>

        {/* CTA */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-300 font-medium">
            Interested in working together on your website or digital presence?
          </p>
          <Button
            variant="primary"
            size="md"
            href="/contact"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start a Project
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
