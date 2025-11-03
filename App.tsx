import React, { useState, useMemo, useEffect } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { IntroductionSection } from './components/sections/IntroductionSection';
import { QnaSection } from './components/sections/QnaSection';
import { IntegrationLayerSection } from './components/sections/IntegrationLayerSection';
import { EndUserExperienceSection } from './components/sections/EndUserExperienceSection';
import { AdminExperienceSection } from './components/sections/AdminExperienceSection';
import { StrategicSupportSection } from './components/sections/StrategicSupportSection';
import { MobileExperienceSection } from './components/sections/MobileExperienceSection';
import { PasswordProtection } from './components/ui/PasswordProtection';
import { useScrollSpy } from './hooks/useScrollSpy';
import { SECTIONS, QNA_DATA, PAGE_PASSWORD } from './constants';
import type { Section } from './types';
import { TransitionSection } from './components/sections/TransitionSection';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [observedElements, setObservedElements] = useState<HTMLElement[]>([]);
  const [expandedQnaId, setExpandedQnaId] = useState<string | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if password is required
    if (!PAGE_PASSWORD || PAGE_PASSWORD.trim() === '') return true;
    
    // Check localStorage for authentication
    const stored = localStorage.getItem('gaf-hub-authenticated');
    return stored === 'true';
  });

  const sectionRefs = useMemo(() => {
      const refs: { [id: string]: React.RefObject<HTMLDivElement> } = {};
      SECTIONS.forEach(s => {
          refs[s.id] = React.createRef();
      });
      return refs;
  }, []);

  useEffect(() => {
      const allElements: HTMLElement[] = [];
      const observer = new MutationObserver(() => {
          SECTIONS.forEach(section => {
              const mainEl = document.getElementById(section.id);
              if (mainEl && !allElements.includes(mainEl)) allElements.push(mainEl);

              if (section.subsections) {
                  section.subsections.forEach(sub => {
                      const subEl = document.getElementById(sub.id);
                      if (subEl && !allElements.includes(subEl)) allElements.push(subEl);
                  });
              }
          });
          // Also observe QnA items for scrollspy
          QNA_DATA.forEach(qna => {
            const qnaEl = document.getElementById(`qna-item-${qna.id}`);
            if (qnaEl && !allElements.includes(qnaEl)) allElements.push(qnaEl);
          });
          setObservedElements([...allElements]);
      });
      
      observer.observe(document.getElementById('root')!, { childList: true, subtree: true });

      return () => observer.disconnect();
  }, []);

  const activeSectionId = useScrollSpy(
    observedElements, 
    { threshold: 0.3, rootMargin: '0px 0px -40% 0px' }
  );
  
  const handleNavigate = (id: string) => {
    const isQnaLink = QNA_DATA.some(q => q.id === id);
    if (isQnaLink) {
        setExpandedQnaId(id);
    } else {
        setExpandedQnaId(null);
    }

    const targetElement = document.getElementById(isQnaLink ? `qna-item-${id}` : id);
    if (targetElement) {
        // Scroll the main section into view first for context if it's a QnA link
        if (isQnaLink) {
            document.getElementById('qna')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setTimeout(() => {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            setSidebarOpen(false);
        }, isQnaLink ? 150 : 0);
    }
  };

  const sectionsComponents: Record<string, React.ReactElement> = {
    introduction: <IntroductionSection onNavigate={handleNavigate} />,
    qna: <QnaSection expandedId={expandedQnaId} onNavigate={handleNavigate} />,
    'integration-layer': <IntegrationLayerSection />,
    'end-user-exp': <EndUserExperienceSection />,
    'admin-exp': <AdminExperienceSection />,
    support: <StrategicSupportSection />,
    'mobile-exp': <MobileExperienceSection />,
  };
  
  const findActiveTopLevelId = () => {
    const qnaItem = QNA_DATA.find(q => `qna-item-${q.id}` === activeSectionId);
    if (qnaItem) return 'qna';

    const section = SECTIONS.find(s => s.id === activeSectionId || s.subsections?.some(sub => sub.id === activeSectionId));
    return section?.id;
  };
  
  const activeTopLevelId = findActiveTopLevelId();
  const activeTopLevelIndex = SECTIONS.findIndex(s => s.id === activeTopLevelId);
  const progress = activeTopLevelIndex !== -1 ? ((activeTopLevelIndex + 1) / SECTIONS.length) * 100 : 0;

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    localStorage.setItem('gaf-hub-authenticated', 'true');
  };

  // Show password protection if password is set and user is not authenticated
  if (PAGE_PASSWORD && PAGE_PASSWORD.trim() !== '' && !isAuthenticated) {
    return <PasswordProtection onAuthenticated={handleAuthentication} />;
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar 
        sections={SECTIONS} 
        activeSectionId={activeSectionId.replace('qna-item-', '')} 
        onNavigate={handleNavigate} 
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="flex-1 transition-all duration-300 md:ml-72">
        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 z-40 bg-white/80 backdrop-blur-md flex items-center justify-between p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold text-brand-gray">GAF Marketing Hub</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 hover:text-brand-gray">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="sticky top-0 md:top-0 z-30">
          <div className="w-full bg-gray-200 h-1">
            <div 
              className="bg-brand-green h-1 transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="relative">
          {SECTIONS.map((section: Section) => (
            <React.Fragment key={section.id}>
              <div id={section.id} ref={sectionRefs[section.id]}>
                {sectionsComponents[section.id]}
              </div>
              {section.id === 'qna' && <TransitionSection />}
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;