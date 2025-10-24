import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="bg-patterned border-y border-gray-200 py-10 md:py-12 px-8">
    <div className="container mx-auto text-center animate-fade-in-up">
       <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-green">{title}</h2>
       <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">{subtitle}</p>
    </div>
  </div>
);