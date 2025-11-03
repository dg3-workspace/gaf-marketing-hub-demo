import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { FAQ_DATA } from '../../constants';
import type { FAQItem } from '../../types';

const FaqItem: React.FC<{ item: FAQItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-6 px-4 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-semibold text-brand-gray">{item.question}</h3>
                <svg
                    className={`w-6 h-6 text-brand-green transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
                <div className="overflow-hidden">
                    <div className="px-4 pb-6">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const FAQSection: React.FC = () => {
    return (
        <section>
            <SectionHeader
                title="Frequently Asked Questions"
                subtitle="Answers to common questions about the GAF Marketing Hub platform, its technology, and the implementation process."
            />
            <div className="bg-white py-20 px-8">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                        {FAQ_DATA.map((item, index) => (
                            <FaqItem key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
