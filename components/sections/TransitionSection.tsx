
import React from 'react';

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

export const TransitionSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-gray text-white text-center">
      <div className="container mx-auto px-8 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Begin the Self-Guided Demonstration
        </h2>
        <p className="text-lg text-green-200 max-w-3xl mx-auto mb-8 leading-relaxed">
          The following sections provide a hands-on, self-guided tour of the GAF Marketing Hub's core capabilities. Explore each feature at your own pace to understand its full power and potential.
        </p>
        <div className="animate-bounce mt-12">
            <ChevronDownIcon className="w-12 h-12 mx-auto text-brand-green" />
        </div>
      </div>
    </section>
  );
};
