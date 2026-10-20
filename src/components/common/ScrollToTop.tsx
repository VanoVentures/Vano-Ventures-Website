import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../../utils/analytics';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const titleMap: Record<string, string> = {
      '/': 'Vano Ventures | Digital Solutions for Growing Businesses',
      '/services': 'Services | Vano Ventures',
      '/work': 'Work | Vano Ventures',
      '/about': 'About | Vano Ventures',
      '/process': 'Process | Vano Ventures',
      '/contact': 'Contact | Vano Ventures',
      '/privacy': 'Privacy Policy | Vano Ventures',
      '/terms': 'Terms of Service | Vano Ventures',
    };

    const pageTitle = titleMap[pathname] || 'Vano Ventures';
    document.title = pageTitle;
    analytics.pageView(pathname, pageTitle);
  }, [pathname]);

  return null;
}
