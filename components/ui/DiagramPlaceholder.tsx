
import React from 'react';

interface DiagramPlaceholderProps {
  label: string;
  className?: string;
}

export const DiagramPlaceholder: React.FC<DiagramPlaceholderProps> = ({ label, className = '' }) => {
  return (
    <div className={`relative aspect-video w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 flex items-center justify-center text-gray-400 overflow-hidden ${className}`}>
      <div className="absolute top-4 left-4 w-16 h-12 bg-gray-200 rounded"></div>
      <div className="absolute bottom-4 left-1/4 w-20 h-16 bg-gray-200 rounded-full"></div>
      <div className="absolute top-1/3 right-4 w-24 h-8 bg-gray-200 rounded"></div>
      <div className="absolute bottom-8 right-1/3 w-12 h-12 bg-gray-200 transform rotate-45"></div>

      <div className="absolute w-1/3 h-px bg-gray-300 top-10 left-24"></div>
      <div className="absolute w-px h-1/4 bg-gray-300 top-1/2 left-1/3 transform -translate-y-1/2"></div>
      <div className="absolute w-1/4 h-px bg-gray-300 bottom-12 right-10"></div>
      
      <p className="z-10 text-center font-medium bg-gray-100 px-4 py-2 rounded">{label}</p>
    </div>
  );
};