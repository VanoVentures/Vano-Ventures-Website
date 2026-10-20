import React, { useState } from 'react';
import { siteConfig } from '../../config/site';

interface LogoProps {
  className?: string;
  variant?: 'navbar' | 'footer' | 'compact';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'navbar',
  showSubtitle = false,
}) => {
  const [imgError, setImgError] = useState(false);
  const { logoUrl, displayName, tagline } = siteConfig.brand;

  // Determine sizing according to layout variant
  const markSize =
    variant === 'footer'
      ? 'h-10 w-10'
      : variant === 'compact'
      ? 'h-8 w-8'
      : 'h-8 sm:h-9 w-8 sm:w-9';

  const titleSize =
    variant === 'footer'
      ? 'text-lg sm:text-xl'
      : variant === 'compact'
      ? 'text-base'
      : 'text-base sm:text-lg';

  return (
    <div className={`group flex items-center gap-3 select-none ${className}`}>
      {/* Brand Logo / Mark */}
      <div className={`relative flex-shrink-0 ${markSize} flex items-center justify-center`}>
        {logoUrl && !imgError ? (
          <img
            src={logoUrl}
            alt="Vano Ventures Logo"
            onError={() => setImgError(true)}
            className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
          />
        ) : (
          /* Graceful, polished geometric brand mark fallback */
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 flex items-center justify-center shadow-md shadow-blue-500/20 ring-1 ring-blue-400/40 transition-transform duration-200 group-hover:scale-105">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="4 6 12 19 20 6" />
            </svg>
            <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-slate-950" />
          </div>
        )}
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span
          className={`${titleSize} font-extrabold tracking-wider text-white uppercase leading-tight group-hover:text-blue-200 transition-colors whitespace-nowrap`}
        >
          {displayName}
        </span>
        {showSubtitle && (
          <span className="text-xs text-slate-400 font-normal leading-normal mt-0.5">
            {tagline}
          </span>
        )}
      </div>
    </div>
  );
};
