import React from 'react';

const chartData = [
  {
    title: 'End User Facing UI/UX (Shopify)',
    management: {
      type: 'Shared',
      text: 'GAF & DG3 Partnership',
    },
    summary: 'Managed by GAF and DG3 with DG3 supporting as needed by GAF.',
    considerations: "Our pricing and support model includes GAF's preference for autonomy and any GAF request for DG3 to manage the experience.",
  },
  {
    title: 'WSO2 Integration Layer',
    management: {
      type: 'Exclusive',
      text: 'DG3 Exclusive Management',
    },
    summary: 'Exclusively managed by DG3 to ensure appropriate technical integrations between all systems.',
    considerations: 'This layer is critical for the seamless function of the end to end experience. There are no systems in existence that have this functionality fully developed and functional due to the unique nature of client deployments.',
  },
  {
    title: 'Vendor Platforms (DG3 & External)',
    management: {
      type: 'Exclusive',
      text: 'DG3 Exclusive Management',
    },
    summary: 'Exclusively managed by DG3 to ensure vendor platforms (DG3 or external) are able to transact with the integration call.',
    considerations: 'Ensuring all assets made available to end users are properly configured for seamless integrated production at vendor (DG3 or 3rd party). Ensuring assets are successfully fulfilled per requirement.',
  },
];

// Icons for pillars
const DesktopIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>;
const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>;
const ServerIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>;
const icons = [<DesktopIcon />, <LayersIcon />, <ServerIcon />];

const ManagementTag: React.FC<{ type: 'Shared' | 'Exclusive', text: string }> = ({ type, text }) => {
    const baseClasses = "px-3 py-1 text-xs font-bold rounded-full inline-block";
    if (type === 'Shared') {
        return <span className={`${baseClasses} bg-gradient-to-r from-brand-red to-brand-green text-white`}>{text}</span>;
    }
    return <span className={`${baseClasses} bg-brand-green text-white`}>{text}</span>;
};

const PillarCard: React.FC<{ pillar: (typeof chartData)[0], icon: React.ReactNode, isCentral?: boolean }> = ({ pillar, icon, isCentral = false }) => (
    <div className={`relative bg-white rounded-xl shadow-lg border border-gray-200 p-6 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${isCentral ? 'hover:scale-105' : ''}`}>
        <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-lg bg-gray-100 text-brand-green`}>
                 {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
            </div>
            <h3 className="text-xl font-bold text-gray-800 flex-1">{pillar.title}</h3>
        </div>
        
        <div className="mb-4">
            <ManagementTag type={pillar.management.type as 'Shared' | 'Exclusive'} text={pillar.management.text} />
        </div>

        <div className="space-y-4 text-sm flex-grow">
            <div>
                <h4 className="font-semibold text-gray-500 mb-1 tracking-wider uppercase">Summary</h4>
                <p className="text-gray-700 leading-relaxed">{pillar.summary}</p>
            </div>
            <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-500 mb-1 tracking-wider uppercase">Critical Considerations</h4>
                <p className="text-gray-700 leading-relaxed">{pillar.considerations}</p>
            </div>
        </div>
    </div>
);


export const EcosystemChart: React.FC = () => {
  return (
    <div className="bg-gray-50 p-4 sm:p-8 rounded-2xl border border-gray-200 shadow-inner font-sans relative overflow-hidden">
        {/* Background grid pattern */}
        <div 
            className="absolute inset-0 opacity-50" 
            style={{
                backgroundImage: 'linear-gradient(rgba(51, 165, 86, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(51, 165, 86, 0.1) 1px, transparent 1px)',
                backgroundSize: '2rem 2rem'
            }}
        />

        <div className="relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-brand-gray">The DG3 Managed Ecosystem</h2>
                <p className="text-gray-600 mt-2 max-w-3xl mx-auto">It's critical to understand that the GAF Marketing Hub is not a single platform, but a complex, interconnected system. The information below provides a visual breakdown of the architecture, key components, and management responsibilities.</p>
            </div>

            <div className="relative">
                {/* Connecting lines for desktop */}
                <div className="hidden md:block absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-4xl h-px bg-gray-300"></div>
                    <div className="absolute top-1/2 left-1/4 h-1/2 w-px bg-gray-300 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-1/4 h-1/2 w-px bg-gray-300 -translate-y-1/2"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {chartData.map((pillar, index) => (
                        <div key={pillar.title} className="relative z-10">
                            <PillarCard 
                                pillar={pillar} 
                                icon={icons[index]} 
                                isCentral={index === 1}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <div className="relative bg-brand-green text-white p-6 rounded-xl shadow-2xl text-center">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-brand-green"></div>
                    <h3 className="text-2xl font-bold">DG3 Managed Service Layer</h3>
                    <p className="text-sm italic text-gray-200 mt-1 mb-2">People, Process, Technology and Product Execution</p>
                    <p className="text-xs max-w-4xl mx-auto text-gray-300">
                        Ensuring systems function and are integrated, providing support across all core systems as required by GAF, overseeing integrations and changes to systems.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};