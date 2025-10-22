
import React from 'react';
import { FEATURES } from '../../constants';
import { VideoPlaceholder } from '../ui/VideoPlaceholder';
import type { Feature } from '../../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300 flex flex-col">
        <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
        </div>
        <div className="p-6 pt-0 mt-auto">
            <VideoPlaceholder label="Insert 30s Feature Demo Here" />
        </div>
    </div>
);

export const KeyCapabilitiesSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-900 py-20 px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Key Capabilities</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Discover the powerful features that make the GAF Marketing Hub an indispensable tool for growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.slice(0, 3).map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
