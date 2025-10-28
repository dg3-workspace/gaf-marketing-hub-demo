import React from 'react';
import { Button } from '../ui/Button';

interface IntroductionSectionProps {
  onNavigate: (id: string) => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-gray mb-4 leading-tight">
            The <span className="text-brand-green">GAF Marketing Hub</span> Demo
          </h1>
          <div className="space-y-4 text-lg md:text-xl text-gray-600 mb-8">
            <p>
              GAF set out to create a unified platform—one that would bring every facet of their marketing and fulfillment ecosystem together under a single, intelligent experience.
            </p>
            <p>
              DG3’s role was to execute that vision: define the architecture, integrations, and workflows that transform a complex network of systems into a seamless, intuitive platform.
            </p>
            <p>
              The result is more than an online store—it strives to be an operational core of GAF’s marketing ecosystem, built to empower contractors to order, customize, and deploy materials with precision and ease.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="primary" onClick={() => onNavigate('integration-layer')}>
              Begin Guided Tour
            </Button>
          </div>
        </div>
        <div className="animate-fade-in-up rounded-lg overflow-hidden shadow-2xl" style={{ animationDelay: '200ms' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            {/* FIX: Removed non-standard iframe attributes 'webkitAllowFullScreen' and 'mozAllowFullScreen' to resolve TypeScript errors. The standard 'allowFullScreen' attribute is sufficient for modern browsers. */}
            <iframe
              src="https://www.loom.com/embed/dafecf83bd99449da306b77cba9f5271"
              frameBorder="0"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
