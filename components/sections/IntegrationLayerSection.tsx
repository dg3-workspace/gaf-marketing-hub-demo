import React from 'react';
import { INTEGRATION_LAYER_CAPABILITY } from '../../constants';
import { DiagramPlaceholder } from '../ui/DiagramPlaceholder';
import { ExpandableDetail } from '../ui/ExpandableDetail';

export const IntegrationLayerSection: React.FC = () => {
    const capability = INTEGRATION_LAYER_CAPABILITY;

    return (
        <section className="min-h-screen bg-patterned py-20 px-8 flex items-center">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-gray">The Foundation: The DG3 Integration Layer</h2>
                    <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
                        Before diving into the user experience, it’s critical to understand the technology that makes it all possible. This is the connective tissue that unifies GAF's marketing ecosystem.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-brand-gray">{capability.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                        <div className="pt-4 space-y-3">
                            <h4 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Deep Dive:</h4>
                            {capability.details.map((detail) => (
                                <ExpandableDetail key={detail.title} detail={detail} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <DiagramPlaceholder label={capability.visualLabel || 'System Diagram'} />
                    </div>
                </div>
            </div>
        </section>
    );
};