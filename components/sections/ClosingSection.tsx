
import React from 'react';
import { Button } from '../ui/Button';

export const ClosingSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center py-20 px-8 text-center bg-gradient-to-tr from-gray-900 via-gray-900 to-blue-900/40">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">Ready to Take the Next Step?</h2>
        <p className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto">
          You've seen a glimpse of what the GAF Marketing Hub can do. Let's talk about how it can be tailored to solve your specific challenges and drive your business forward.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" className="w-full sm:w-auto">
            Request a Personalized Live Demo
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};
