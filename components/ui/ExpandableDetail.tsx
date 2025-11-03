import React, { useState } from 'react';
import type { CapabilityDetail } from '../../types';

interface ExpandableDetailProps {
  detail: CapabilityDetail;
}

export const ExpandableDetail: React.FC<ExpandableDetailProps> = ({ detail }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 bg-gradient-to-br from-green-50 to-gray-100 rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-black/5 transition-colors text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
        aria-expanded={isOpen}
        aria-controls={`detail-content-${detail.title.replace(/\s+/g, '-')}`}
      >
        <div className="flex items-center gap-3">
          <div className="text-brand-green">
            {/* FIX: Remove incorrect type cast on icon to allow props to be passed to cloneElement. */}
            {React.cloneElement(detail.icon, { className: 'w-5 h-5' })}
          </div>
          <span className="font-semibold text-brand-gray">{detail.title}</span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div
        id={`detail-content-${detail.title.replace(/\s+/g, '-')}`}
        className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
            <div className="bg-white p-4 pt-0 text-gray-600 text-sm leading-relaxed">
              <div className="border-l-2 border-brand-green pl-4 space-y-3">
                {detail.description.split('\n').map((paragraph, index) => {
                    const trimmed = paragraph.trim();
                    if (!trimmed) return null;
                    
                    const isSubheading = trimmed.endsWith(':');

                    if (isSubheading) {
                        return <p key={index} className="font-semibold text-gray-800 mt-2">{trimmed}</p>;
                    }
                    
                    return <p key={index}>{trimmed}</p>;
                })}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};