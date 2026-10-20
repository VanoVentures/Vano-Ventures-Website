import React from 'react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/common/Button';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <PageLayout>
      <div className="max-w-md mx-auto px-4 py-24 text-center space-y-5">
        <span className="text-4xl font-extrabold font-mono text-blue-500">404</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Page Not Found</h1>
        <p className="text-sm text-slate-300">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-2">
          <Link to="/">
            <Button variant="secondary" size="md" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};
