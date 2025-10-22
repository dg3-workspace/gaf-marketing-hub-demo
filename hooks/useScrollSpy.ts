
import { useState, useEffect } from 'react';

export const useScrollSpy = (
  elements: HTMLElement[],
  options: IntersectionObserverInit
): string => {
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  useEffect(() => {
    if (elements.length === 0) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);
    elements.forEach(element => {
      if(element) observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        if(element) observer.unobserve(element);
      });
    };
  }, [elements, options]);

  return activeSectionId;
};
