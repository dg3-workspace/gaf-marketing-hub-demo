
import React, { useState, useEffect } from 'react';
import type { Section } from '../../types';
import { Modal } from '../ui/Modal';

interface SidebarProps {
  sections: Section[];
  activeSectionId: string;
  onNavigate: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const PlayCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="10 8 16 12 10 16 10 8"></polygon>
  </svg>
);


export const Sidebar: React.FC<SidebarProps> = ({ sections, activeSectionId, onNavigate, isOpen, setIsOpen }) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const parentSection = sections.find(s => s.subsections?.some(sub => sub.id === activeSectionId) || s.id === activeSectionId);
    if (parentSection && parentSection.subsections && !expandedSections[parentSection.id]) {
      setExpandedSections(prev => {
        const newExpanded = { ...prev };
        newExpanded[parentSection.id] = true;
        return newExpanded;
      });
    }
  }, [activeSectionId, sections]);
  
  const handleSectionClick = (section: Section) => {
    if (section.subsections) {
      setExpandedSections(prev => ({...prev, [section.id]: !prev[section.id]}));
    }
    onNavigate(section.id);
  }

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>
      
      <aside className={`fixed top-0 left-0 h-full w-72 bg-brand-green border-r border-green-700 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-50 flex flex-col`}>
        <div className="p-6 border-b border-white/20">
           {/* GAF Logo Placeholder */}
            <div className="mb-4">
              <div className="w-[80px] h-[80px] flex items-center justify-center text-brand-gray text-2xl font-bold tracking-widest shadow-inner">
                  <img src="/images/GAF Logo Red.png" alt="GAF Logo" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <div>
                <h1 className="text-xl font-bold text-white">GAF Marketing Hub</h1>
                <p className="text-sm text-green-100 mt-1">Self Guided Demonstration</p>
            </div>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul>
            {sections.map(section => {
              const isSectionActive = activeSectionId === section.id;
              const isChildActive = section.subsections?.some(sub => sub.id === activeSectionId) ?? false;
              const isExpanded = expandedSections[section.id];
              
              return (
                <li key={section.id} className="mb-1">
                  <button
                    onClick={() => handleSectionClick(section)}
                    className={`w-full text-left flex items-center justify-between gap-3 px-4 py-3 rounded-md transition-all duration-200 ${
                      isSectionActive || isChildActive
                        ? 'bg-white text-brand-green font-semibold shadow-lg'
                        : 'hover:bg-black/10'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {/* FIX: Remove incorrect type cast on icon to allow props to be passed to cloneElement. */}
                      {React.cloneElement(section.icon, { className: 'w-5 h-5 flex-shrink-0' })}
                      <span className="whitespace-normal">{section.title}</span>
                    </div>
                    {section.subsections && (
                       <ChevronDownIcon className={`flex-shrink-0 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  {section.subsections && (
                    <div 
                      className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out"
                      style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <ul className="pl-6 pt-2 pb-1 border-l-2 border-white/30 ml-6 my-2">
                          {section.subsections.map(subsection => (
                            <li key={subsection.id}>
                              <button
                                onClick={() => onNavigate(subsection.id)}
                                className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors duration-200 ${
                                  activeSectionId === subsection.id
                                    ? 'text-white font-bold'
                                    : 'text-green-100 hover:text-white'
                                }`}
                              >
                                {subsection.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="px-4 py-2 border-t border-white/20">
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="w-full text-left flex items-center gap-3 px-3 py-3 rounded-md transition-all duration-200 hover:bg-black/10"
            aria-label="Learn more about DG3"
          >
            <PlayCircleIcon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">Learn more about DG3</span>
          </button>
        </div>

        <div className="p-6 border-t border-white/20 text-center">
            <div className="w-[100px] h-[50px] mx-auto mb-3">
              <img src="/images/DG3-logo-white.svg" alt="DG3 Logo" />
            </div>
            <p className="text-xs text-green-100">&copy; 2025 Diversified Global Graphics Group – DG3</p>
        </div>
      </aside>
      
      <Modal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        title="DG3: A Leader in Global Communications"
      >
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dg3-overview?autoplay=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
};
