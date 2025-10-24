
import React from 'react';
import { Button } from '../ui/Button';
import { VideoPlaceholder } from '../ui/VideoPlaceholder';

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
        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <VideoPlaceholder label="GAF Marketing Hub: An Overview" videoId="overview" />
        </div>
      </div>
    </section>
  );
};
