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
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            DG3’s delivery strategy for GAF unites twenty years of institutional partnership with a modern architecture built at the crossroads of intelligent integrations and world-class experience design. The result is more than a platform—it’s an ecosystem that empowers every user, from the field to the front office, through seamless connectivity, data-driven insight, and the kind of operational fluency that only comes from truly knowing the business.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" onClick={() => onNavigate('integration-layer')}>
              Begin Guided Tour
            </Button>
          </div>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <VideoPlaceholder label="Insert 30-45s Intro Video Here" />
        </div>
      </div>
    </section>
  );
};