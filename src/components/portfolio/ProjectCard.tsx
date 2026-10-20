import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';
import { analytics } from '../../utils/analytics';
import { ExternalLink, ArrowRight, Clock, Globe } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  headingLevel?: 'h2' | 'h3';
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  headingLevel = 'h3',
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);
  const HeadingTag = headingLevel;

  const hasLiveLink = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);

  const handleExternalClick = () => {
    if (project.liveUrl) {
      analytics.portfolioProjectClick(project.id, project.title, 'external_link');
    }
  };

  return (
    <div
      className={`rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/90 transition-all duration-200 overflow-hidden flex flex-col justify-between group shadow-lg shadow-black/25 ${className}`}
    >
      <div>
        {/* Preview Image / Visual Window */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
          {!imgError ? (
            <img
              src={project.image}
              alt={`Preview of ${project.title}`}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-500 bg-slate-950">
              <Globe className="w-10 h-10 text-slate-600 mb-2" />
              <span className="text-xs font-mono">{project.title}</span>
            </div>
          )}

          {/* Floating Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-800 text-slate-200 text-xs font-medium shadow-sm">
              {project.category}
            </span>

            {hasLiveLink ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/90 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-medium shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Website
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-800 text-slate-400 text-xs font-medium shadow-sm">
                <Clock className="w-3 h-3 text-slate-400" />
                Link Coming Soon
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          <HeadingTag className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-blue-200 transition-colors tracking-tight">
            {project.title}
          </HeadingTag>

          <p className="text-sm text-slate-300 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Technologies Used */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800/90 text-slate-400 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 bg-slate-900/30">
        {/* Prominent Live Website Button or Coming Soon Status */}
        {hasLiveLink ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleExternalClick}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/25 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none"
            aria-label={`Visit live website for ${project.title} (opens in a new tab)`}
          >
            <span>Visit Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <div
            className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-400 text-xs font-medium cursor-not-allowed select-none"
            title="Website link will be updated soon"
          >
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Website link coming soon</span>
          </div>
        )}

        {/* Request Similar Project Link */}
        <Link
          to={`/contact?service=${encodeURIComponent(project.serviceContext)}`}
          className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors py-1 focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
        >
          <span>Request Similar Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
