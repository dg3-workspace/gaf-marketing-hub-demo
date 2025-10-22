import React, { useState, useEffect } from 'react';
import type { Section } from '../../types';

interface SidebarProps {
  sections: Section[];
  activeSectionId: string;
  onNavigate: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export const Sidebar: React.FC<SidebarProps> = ({ sections, activeSectionId, onNavigate, isOpen, setIsOpen }) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

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
      
      <aside className={`fixed top-0 left-0 h-full w-64 bg-gray-800 border-r border-gray-700 text-gray-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-50 flex flex-col`}>
        <div className="p-6 border-b border-gray-700">
           <div className="flex items-center gap-3">
            <div>
                <h1 className="text-xl font-bold text-white">GAF Marketing Hub</h1>
                <p className="text-sm text-gray-400 mt-1">Self Guided Demonstration</p>
            </div>
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
                        ? 'bg-brand-green text-white font-semibold shadow-lg'
                        : 'hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {React.cloneElement(section.icon, { className: 'w-5 h-5' })}
                      <span>{section.title}</span>
                    </div>
                    {section.subsections && (
                       <ChevronDownIcon className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  {section.subsections && (
                    <div 
                      className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out"
                      style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <ul className="pl-6 pt-2 pb-1 border-l-2 border-gray-700 ml-6 my-2">
                          {section.subsections.map(subsection => (
                            <li key={subsection.id}>
                              <button
                                onClick={() => onNavigate(subsection.id)}
                                className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors duration-200 ${
                                  activeSectionId === subsection.id
                                    ? 'text-brand-green font-semibold'
                                    : 'text-gray-400 hover:text-white'
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
        <div className="p-6 border-t border-gray-700 text-center">
            <div className="w-[100px] h-[50px] mx-auto mb-3">
              <img src="/images/dg3-logo-color.svg" alt="DG3 Logo" />
            </div>
            <p className="text-xs text-gray-500">&copy; 2025 Diversified Global Graphics Group – DG3</p>
        </div>
      </aside>
    </>
  );
};