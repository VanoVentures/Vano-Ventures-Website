import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { Compass, Layout, Code2, Rocket, ArrowRight } from 'lucide-react';

export const ProcessPage: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Understand your business, goals and requirements.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Plan',
      description: 'Define the structure, content and technical direction.',
      icon: Layout,
    },
    {
      number: '03',
      title: 'Build',
      description: 'Design, develop, test and refine.',
      icon: Code2,
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Deploy the project and help you move forward.',
      icon: Rocket,
    },
  ];

  const enquirySteps = [
    'We review your requirements.',
    'We discuss the project and practical options.',
    'We agree on scope and direction.',
    'We begin the work.',
  ];

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
            How We Work
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            A simple process from idea to launch.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every project follows a straightforward framework designed to keep communication clear and progress predictable.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-blue-500">
                      {step.number}
                    </span>
                    <div className="h-9 w-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">{step.title}</h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* What happens after you enquire */}
        <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 mb-14">
          <h2 className="text-xl font-bold text-white mb-6">
            What happens after you enquire?
          </h2>
          <ol className="space-y-4">
            {enquirySteps.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold font-mono">
                  {idx + 1}
                </span>
                <span className="pt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Action */}
        <div className="text-center p-8 rounded-2xl bg-blue-950/20 border border-blue-500/20 space-y-4">
          <h3 className="text-2xl font-bold text-white">
            Ready to start a conversation?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto">
            Tell us about your project and we'll help you map out the next steps.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
