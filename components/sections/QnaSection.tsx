import React, { useState, useEffect } from 'react';
import { QNA_DATA } from '../../constants';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import type { QnaItem } from '../../types';

const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);

const SheetIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="3" y1="15" x2="21" y2="15"></line>
        <line x1="9" y1="3" x2="9" y2="21"></line>
        <line x1="15" y1="3" x2="15" y2="21"></line>
    </svg>
);

const QnaAccordionItem: React.FC<{ item: QnaItem; index: number; isOpen: boolean; onToggle: () => void; }> = ({ item, index, isOpen, onToggle }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                onClick={onToggle}
                className={`w-full flex justify-between items-center text-left py-6 px-4 sm:px-6 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-green transition-colors duration-200 ${isEven ? 'bg-white' : 'bg-green-50'}`}
                aria-expanded={isOpen}
                aria-controls={`qna-answer-${item.id}`}
            >
                <h3 className="text-lg font-semibold text-brand-gray">{item.question}</h3>
                <svg
                    className={`w-6 h-6 text-brand-green transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                id={`qna-answer-${item.id}`}
                className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
                <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 pb-8 bg-green-50 border-t border-gray-200">
                        <div className="pt-6">
                            {item.answer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface QnaSectionProps {
    expandedId: string | null;
    onNavigate: (id: string) => void;
}

export const QnaSection: React.FC<QnaSectionProps> = ({ expandedId, onNavigate }) => {
    const [openStates, setOpenStates] = useState<Record<string, boolean>>({});

    useEffect(() => {
        if (expandedId) {
            setOpenStates(prev => ({ ...prev, [expandedId]: true }));
        }
    }, [expandedId]);

    const handleToggle = (id: string) => {
        setOpenStates(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <section>
            <SectionHeader 
                title="Your Questions Answered" 
                subtitle="A comprehensive library of the questions you've asked, along with our detailed answers. Click on any question to expand the response."
            />
            <div className="bg-white py-20 px-4 sm:px-8">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 animate-fade-in-up">
                    <Button 
                        variant="primary" 
                        size="lg"
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/downloads/DG3 Follow Up Questions 1.pdf';
                            link.download = 'DG3 Follow Up Questions 1.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        <DownloadIcon className="mr-3" />
                        Download DG3 Responses
                    </Button>
                    <Button 
                        variant="outline" 
                        size="lg"
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/downloads/DG3 - Additional Pricing Questions 10.28.xlsx';
                            link.download = 'DG3 - Additional Pricing Questions 10.28.xlsx';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        <SheetIcon className="mr-3" />
                        Download additional pricing spreadsheet
                    </Button>
                </div>

                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                        {QNA_DATA.map((item, index) => (
                             <div id={`qna-item-${item.id}`} key={item.id} className="scroll-mt-20">
                                <QnaAccordionItem
                                    item={item}
                                    index={index}
                                    isOpen={!!openStates[item.id]}
                                    onToggle={() => handleToggle(item.id)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};