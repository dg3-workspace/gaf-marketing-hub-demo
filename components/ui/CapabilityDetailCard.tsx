import React from 'react';
import type { CapabilityDetail } from '../../types';

interface CapabilityDetailCardProps {
  detail: CapabilityDetail;
}

export const CapabilityDetailCard: React.FC<CapabilityDetailCardProps> = ({ detail }) => {
  return (
    <div className="bg-gray-700/50 p-6 rounded-lg flex items-start gap-4 transform transition-all hover:bg-gray-700 hover:scale-105">
      <div className="text-brand-green flex-shrink-0 mt-1 bg-gray-900 p-3 rounded-full">
        {React.cloneElement(detail.icon, { className: 'w-6 h-6' })}
      </div>
      <div>
        <h4 className="text-lg font-bold text-white mb-1">{detail.title}</h4>
        <p className="text-gray-300 text-sm leading-relaxed">{detail.description}</p>
      </div>
    </div>
  );
};