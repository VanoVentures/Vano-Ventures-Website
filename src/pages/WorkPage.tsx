import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { projects } from '../data/projects';
import { ArrowRight } from 'lucide-react';

export const WorkPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Selected Work
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Projects & websites we've built
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A growing collection of websites and digital projects built with care, speed, and real business utility.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} headingLevel="h2" />
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl shadow-black/20">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Have a project in mind?
            </h3>
            <p className="text-sm text-slate-300">
              Tell us about your business or idea and we'll discuss the right approach.
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            href="/contact"
            icon={<ArrowRight className="w-4 h-4" />}
            className="flex-shrink-0"
          >
            Start a Project
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};
