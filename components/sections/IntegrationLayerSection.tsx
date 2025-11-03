import React from 'react';
import { INTEGRATION_LAYER_CAPABILITY } from '../../constants';
import { ExpandableDetail } from '../ui/ExpandableDetail';

const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 21h18"/><path d="M5 21V5l7-4 7 4v16"/><path d="M9 21v-8h6v8"/><path d="M9 9h6v4H9z"/></svg>;
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;


export const IntegrationLayerSection: React.FC = () => {
    const capability = INTEGRATION_LAYER_CAPABILITY;

    return (
        <section className="min-h-screen bg-patterned py-20 px-8 flex items-center">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-green">The Foundation: The DG3 Integration Layer</h2>
                    <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
                        Before diving into the user experience, it’s critical to understand the technology that makes it all possible. This is the connective tissue that unifies GAF's marketing ecosystem.
                    </p>
                </div>
                <div className="grid md:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-2xl font-bold text-brand-green">{capability.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                        <div className="pt-4 space-y-3">
                            <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-500 tracking-wider uppercase mb-3">
                                <SearchIcon />
                                <span>Feature Details</span>
                            </h4>
                            {capability.details.map((detail) => (
                                <ExpandableDetail key={detail.title} detail={detail} />
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-3 rounded-lg overflow-hidden shadow-2xl">
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <iframe 
                                src="https://www.youtube.com/embed/Z51ZZjkaPCQ" 
                                frameBorder="0" 
                                allowFullScreen 
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};