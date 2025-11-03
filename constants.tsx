import React from 'react';
import type { Section, Capability, StrategicPoint, Feature, Role, CapabilityDetail, VideoDetail, Team, ApproachPoint, ChoicePoint, ConsiderationPoint, EcosystemIntegration, FAQItem, QnaItem } from './types';
import { EcosystemChart } from './components/ui/EcosystemChart';

// Icons
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const UserIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const AdminIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2.4l-.15.1a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1 0 2.4l.15.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const HandshakeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"></path><path d="M13 17a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-5"></path><path d="M12 12.5a2.5 2.5 0 0 1-2.5-2.5V7"></path><path d="M14.5 10a2.5 2.5 0 0 0-2.5 2.5v3.5"></path></svg>;
const SmartphoneIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;
const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const HelpCircleIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;

// Detail Icons
const DataIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>;
const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const EditIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const CreditCardIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>;
const ImageIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>;
const GridIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
const TagIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>;
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const CartIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>;
const AIIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.27 2.32A10 10 0 1 0 21.68 14.73"/><path d="m14.3 14.3 6.3 6.3"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/></svg>;
const VisionIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const ZapIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const BoxIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const ShoppingBagIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>;
const PlaybookIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M14 2v20"/></svg>;
const DatabaseIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const TruckIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
const TrendingUpIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;

// Icons for Part 3
const PersonPlaceholderIcon = (props: React.HTMLAttributes<HTMLDivElement>) => <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-full" {...props}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>;
const GroupPlaceholderIcon = (props: React.HTMLAttributes<HTMLDivElement>) => <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg" {...props}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>;
const ProcessIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 6h16M4 12h16M4 18h16"/></svg>;
const ProductIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const StrategyIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="m9 12 2 2 4-4"/></svg>;
const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const LightbulbIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 3.04 1.63 5.36 3.5 6.5.6.36.5 1.5 1.5 1.5h4c1 0 .9-1.14 1.5-1.5C17.37 14.36 19 12.04 19 9a7 7 0 0 0-7-7z"/></svg>;
const BrainIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7h0A2.5 2.5 0 0 1 7 4.5v0A2.5 2.5 0 0 1 9.5 2m0 5A2.5 2.5 0 0 1 12 9.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 7 9.5v0A2.5 2.5 0 0 1 9.5 7m5 0A2.5 2.5 0 0 1 17 9.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 12 9.5v0A2.5 2.5 0 0 1 14.5 7m0-5A2.5 2.5 0 0 1 17 4.5v0A2.5 2.5 0 0 1 14.5 7h0A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 14.5 2m-5 12A2.5 2.5 0 0 1 12 16.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 7 16.5v0a2.5 2.5 0 0 1 2.5-2.5m5 0A2.5 2.5 0 0 1 17 16.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 12 16.5v0a2.5 2.5 0 0 1 2.5-2.5m0 5A2.5 2.5 0 0 1 17 21.5v0a2.5 2.5 0 0 1-2.5 2.5h0a2.5 2.5 0 0 1-2.5-2.5v0A2.5 2.5 0 0 1 14.5 19m-5-2.5A2.5 2.5 0 0 1 7 14v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 2 14v0a2.5 2.5 0 0 1 2.5-2.5h0a2.5 2.5 0 0 1 2.5 2.5Z"/></svg>;
const CloudIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

// Helper component for team member images
const TeamMemberImage = (props: { src: string; alt?: string }) => (
    <img src={props.src} alt={props.alt || 'Team member'} className="w-full h-full object-cover" />
);

// Helper component for team photos
const TeamPhotoImage = (props: { src: string; alt?: string }) => (
    <img src={props.src} alt={props.alt || 'Team photo'} className="w-full h-full object-cover rounded-lg" />
);

export const INTEGRATION_LAYER_CAPABILITY: Capability = {
    id: 'cap-integration-layer',
    title: 'The DG3 Integration Layer',
    description: "Before diving into the storefront, it's crucial to start here. The DG3 Integration Layer—powered by WSO₂—is the connective tissue of the system. It connects all applications and data sources, ensuring GAF's marketing ecosystem behaves like one connected organism to enable faster decisions and eliminate operational friction. Watch the video to see this in action and explore the feature details below to understand its power. While not the most exciting part of the platform, it's the single most important one. Without it, nothing else that follows would work.",
    visualType: 'video',
    visualLabel: "The DG3 Integration Layer in Action",
    videos: [
        { id: 'video-integration-layer', label: 'Video: The DG3 Integration Layer', shortLabel: 'Integration Layer', videoId: 'dg3-integration-layer' }
    ],
    details: [
        { title: 'Unified Identity & Orchestration', description: "A single, unified identity and orchestration layer links all systems, ensuring seamless and secure user experiences across the entire ecosystem.", icon: <ShieldIcon /> },
        { title: 'Connected Systems', description: "Connects key platforms like GAF's Digital Asset Manager, BigQuery, Rewards Program, Docebo, additional analytics such as Tableau, DG3's Monarch, the Warehouse Management System, and the commerce platform into a cohesive whole.", icon: <LayersIcon /> },
        { title: 'Future-Proof Architecture', description: "The integration layer is built for tomorrow. Its modular design allows GAF to rapidly connect with new partners and technologies. For example, future integrations with platforms like ServiceTitan, QuickMeasure, and WeatherHub could turn operational tools into immediate marketing opportunities.", icon: <LinkIcon /> },
    ],
};

export const END_USER_CAPABILITIES: Capability[] = [
    {
        id: 'cap-login-persona',
        title: 'Persona Rules Drive Experience',
        description: "The platform uses GAF’s Okta SSO to determine a user's persona, which immediately tailors the entire experience. This powerful, rule-based system presents specific product catalogs and promotional offers relevant to a user's role, region, and certification level. This isn’t just one storefront; it's a series of curated views tailored to each user group, ensuring content is always relevant from the moment they log in.",
        videos: [
            { id: 'video-certified-contractor', label: 'Video: Certified Contractor Experience', shortLabel: 'Cert. Contractor', embedUrl: 'https://www.loom.com/embed/e108aad6afb640949f9c5d1ce78a1713' },
            { id: 'video-power-buyer', label: 'Video: Power Buyer Experience', shortLabel: 'Power Buyer', embedUrl: 'https://www.loom.com/embed/b62026b9d034422d9c1470e0f1bd8801' }
        ],
        details: [
            { title: 'Dynamic Content & Catalogs', description: 'The primary promotional banner, hero banner, special offer sections, product categories, and available items all update dynamically based on user persona and region to ensure relevance.', icon: <TargetIcon /> },
            { title: 'Editable by Admin', description: 'All of these personalized elements are editable directly by GAF administrators in the admin panel, with no coding required.', icon: <AdminIcon /> },
            { title: 'Custom OpenID Connect (OIDC)', description: "This advanced identity management system is the engine that truly unlocks deep personalization, ensuring that when a user authenticates, their entire experience is tailored to them.", icon: <ShieldIcon /> },
        ],
        enhancements: [
            {
                title: 'Hyper-Personalization',
                icon: <AIIcon />,
                description: `The strategic focus for 2026 is the integration of Artificial Intelligence to deliver hyper-personalized experiences at scale. This begins with an upgraded identity framework built on Custom OpenID Connect (OIDC). By securely identifying each user, the system can shape their experience around who they are and what they need—ensuring content, products, and tools are always relevant to their role, region, and performance tier.
Building on that foundation, AI-powered predictive analytics can transform the platform from a static storefront into an adaptive environment that learns from user behavior over time. Rather than reacting to requests, it begins to anticipate them—offering personalized recommendations for marketing assets, merchandising, and other resources aligned to each contractor’s unique business profile.
This evolution turns the GAF Storefront into a predictive strategist, deepening engagement, increasing sales enablement, and making the platform an indispensable partner in every contractor’s success.`
            }
        ],
    },
    {
        id: 'cap-browsing-ordering',
        title: 'Unified Shopping — Browsing & Search',
        description: "This section focuses on how users browse and discover items. The navigation is designed to feel familiar because when users don't have to learn a new system, they engage more. That sense of familiarity ultimately drives measurable program lift, even as the platform scales effortlessly beneath it.",
        videos: [
            { id: 'video-browsing', label: 'Video: Navigating and Filtering for Items', shortLabel: 'Browsing', embedUrl: 'https://www.loom.com/embed/dae78cb99588495995f9aeae605d88f5' }
        ],
        details: [
            { title: 'Intuitive Navigation & Filtering', description: 'A familiar navigation structure allows users to intuitively filter, sort, and search across everything from print to promo to digital assets.', icon: <GridIcon /> },
            { title: 'Bundled Ordering Options', description: 'Product pages feature bundled ordering options (e.g., packs of 50, 100, 150), reducing friction and encouraging use of GAF-approved materials.', icon: <CartIcon /> },
            { title: 'Multi-Storefront Capability', description: "Allows GAF to launch separate 'pop-up' stores for special events or campaigns. These distinct storefronts are managed from the same backend and leverage the main hub's existing product catalogs, analytics, and user data. Administrators can curate specific product selections, control user access for exclusivity, and apply unique pricing or discounts—all while using the same underlying layers, which eliminates duplicative work and administrative overhead.", icon: <ShoppingBagIcon />},
        ],
        enhancements: [
            {
                title: 'Semantic Search',
                icon: <SearchIcon />,
                description: `Nearly 27% of all user searches are now semantic, not keyword-based. Instead of typing an exact product name, a user might type, ‘I need materials that help homeowners understand leak protection.’ The platform interprets that intent and surfaces the right content.
Crucially, the platform analyzes every interaction—every search, click, and even searches that yield no results. This data becomes a goldmine, transforming search from a simple feature into a strategic asset for proactively shaping the product and content roadmap.`
            }
        ]
    },
     {
        id: 'cap-unified-shopping',
        title: 'Unified Shopping — Asset Types',
        description: "The platform's true power lies in handling diverse product classes—physical products, kits, rentals, customizable items, and pure digital assets—all handled in a single cart, through one platform experience. This dramatically improves the user experience, which is key for platform adoption.",
        videos: [
            { id: 'video-static', label: 'Video: Shopping for a Static Item', shortLabel: 'Static Item', embedUrl: 'https://www.loom.com/embed/7838e908e21c470b957e2a6dd6cc8f13' },
            { id: 'video-preset-kits', label: 'Video: Exploring Preset Kits (e.g., Docebo Integration)', shortLabel: 'Preset Kits', embedUrl: 'https://www.loom.com/embed/4e5d1bab67ac4865958e831cb5fff004' },
            { id: 'video-dynamic-kits', label: 'Video: Exploring Dynamic Kits', shortLabel: 'Dynamic Kits', embedUrl: 'https://www.loom.com/embed/2779fc2b12e24fbe973554843c92f219' },
            { id: 'video-fixed-price-kits', label: 'Video: Exploring Fixed Priced Dynamic Kits', shortLabel: 'Fixed Price Kits', embedUrl: 'https://www.loom.com/embed/b2f49c8f1de5468f9bf0d0fabda4a8fb' },
            { id: 'video-booth', label: 'Video: Booth-in-a-Box', shortLabel: 'Booth-in-a-Box', embedUrl: 'https://www.loom.com/embed/32010fa666034319a5d5d2dfa7e0a97c' },
            { id: 'video-3d', label: 'Video: JBL Speaker with 3D Viewer', shortLabel: '3D Viewer', embedUrl: 'https://www.loom.com/embed/e5d01d7fdbd549e7be6c9479eb6892d9' },
            { id: 'video-digital-download', label: 'Video: Accessing Digital Downloads', shortLabel: 'Digital Downloads', embedUrl: 'https://www.loom.com/embed/acd439b5b38e456b8b5e6e06a884cca8' },
        ],
        details: [
            { title: 'One Cart, All Assets', description: 'Physical products, digital downloads, rentals, and customizable items all coexist in a single, unified shopping cart for a streamlined checkout.', icon: <CartIcon /> },
            { title: 'Complex Logistics (Booth-in-a-Box)', description: 'The platform handles complex logistics like rentals ("Booth-in-a-Box"), allowing users to reserve, schedule, and track availability through the same interface.', icon: <BoxIcon /> },
            { title: 'Digital Assets & Social Media', description: "Digital assets such as downloadable documents, customizable social media posts like Instagram reels, and videos can all be managed, personalized, and ordered directly within the platform, streamlining content delivery for every channel.", icon: <VisionIcon />},
            { title: 'Automated Kit Fulfillment', description: "Integration with systems like Docebo means that training or certification activity can automatically trigger a kit to be generated and shipped—no manual intervention needed.", icon: <ZapIcon /> },
        ],
        enhancements: [
            {
                title: 'Augmented & Virtual Reality',
                icon: <VisionIcon />,
                description: `By 2026, the platform will be rolling out significant advancements in AR and VR. Imagine virtual 'try-before-you-buy' for apparel, or using augmented reality on your phone to see exactly how a 'Booth-in-a-Box' kit will fit in your tradeshow space. It's about removing guesswork and bringing products to life. This provides tangible business value by reducing uncertainty and decreasing return rates.`
            }
        ]
    },
    {
        id: 'cap-co-branding',
        title: 'Co-branding, Customization & Approvals',
        description: "Our customization engine is streamlined for everyday use, empowering users to stay on brand without slowing down. For any co-branded item, the workflow automatically routes it for approval. It's an elegant balance between control and speed, ensuring every piece is approved and on-brand, but eliminating the manual bottlenecks that slow things down.",
        videos: [
            { id: 'video-custom-promo', label: 'Video: Customizing a Zip-Up Sweater', shortLabel: 'Promo Item', embedUrl: 'https://www.loom.com/embed/663c9949875c467d960fd03139f68b04' },
            { id: 'video-custom-digital', label: 'Video: Customizing an Instagram Reel', shortLabel: 'Digital Asset', embedUrl: 'https://www.loom.com/embed/f0104aaa622d40fd95abf8a9710aca45' }
        ],
        details: [
            { title: 'Automated Quality Checks', description: 'Uploading a low-resolution logo automatically triggers a quality warning, prompting the user to replace it with a high-resolution version.', icon: <ShieldIcon /> },
            { title: 'Streamlined Customization', description: 'Users can easily select sizes and quantities, and use a simple Notes field to indicate instructions like “remove white background.”', icon: <EditIcon /> },
            { title: 'Consistent Experience', description: 'Customizing a digital asset works exactly the same way as a print or promo piece. The same rules apply—safe zones, logo placement, and co-branding standards.', icon: <LayersIcon /> },
            { title: 'Automated Approval Workflows', description: 'Co-branded items are automatically sent to the appropriate approver, who can review and approve the artwork in a simple dashboard.', icon: <TargetIcon /> },
        ],
        exploreFurtherVideos: [
            {
                id: 'video-advanced-customization',
                label: 'Video: Future State: Advanced Customization',
                shortLabel: 'Advanced Customization',
                embedUrl: 'https://www.loom.com/embed/fae799168b394d0e94c1658a3c31ea53',
            },
        ],
        enhancements: [
            {
                title: 'Advanced Customization Engine (Chili GraFx)',
                icon: <FileTextIcon />,
                description: `The 2026 roadmap introduces a powerful evolution in collateral creation with the integration of an advanced customization engine. This moves beyond simple co-branding to enable true high-fidelity template editing. Users, such as TMs and contractors, will be able to build brochures dynamically tailored to their specific market needs—adjusting layouts, reordering product swatches based on regional popularity, and instantly personalizing content. This deep customization, which includes standard logo and contact information updates, will be seamlessly integrated into the native Shopify shopping experience, eliminating the need for a separate punch-out. The result is a highly relevant, custom-tailored marketing piece designed to drive engagement and generate more leads.`
            }
        ]
    },
    {
        id: 'cap-checkout-returns',
        title: 'Unified Multi-Tender Checkout & Returns',
        description: "The checkout is engineered to be instantly familiar, mirroring the intuitive design of modern e-commerce to eliminate any learning curve. Beneath this simplicity, it powerfully integrates GAF-specific business logic—handling rewards, multi-address shipping, budget controls, and returns in a single, unified workflow. This seamless process reduces cart abandonment and elevates the contractor experience.",
        videos: [
            { id: 'video-checkout', label: 'Video: Checkout with Mixed Payments & Approvals', shortLabel: 'Checkout', embedUrl: 'https://www.loom.com/embed/6e71f4b253304b58bba551671e204eb2' },
            { id: 'video-returns', label: 'Video: Initiating a Product Return', shortLabel: 'Returns', embedUrl: 'https://www.loom.com/embed/9d454923ce3b4389aa8df5706dfe0119' }
        ],
        details: [
            { title: 'Multi-Tender Payments', description: "GAF's specific multi-tender payments with Co-op Dollars, Rewards Dollars, and credit cards are handled in a single transaction.", icon: <CreditCardIcon /> },
            { title: 'Future-Proof with Custom Functions', description: "The new, modern approach is to use custom functions. This powerful tool lets us build complex, custom checkout logic and run it directly within the platform's secure, sandboxed environment at native speed.", icon: <CodeIcon />},
            { title: 'Budget & Approval Triggers', description: 'If an order exceeds a user\'s budget, the system automatically pauses the order and routes it to an approver.', icon: <ShieldIcon /> },
            { 
                title: 'RC Code Intelligence and Future Flexibility', 
                description: `We understand that RC codes are a key part of GAF’s cost-allocation process — allowing each order to be attributed back to the appropriate department, region, or business unit. Today, that’s often handled by users manually entering a code, with validation occurring later in downstream systems. The DG3 platform can fully support that approach, while also enabling more intelligent, rules-based options depending on how GAF chooses to manage RC-code data going forward.

If RC codes are maintained in an existing system (for example, within Okta attributes, Workday data, or another master record), we can integrate with that system so the appropriate code is automatically associated to the user at login.

If users may have access to multiple RC codes, we can surface a filtered dropdown list at checkout, ensuring they can only choose from valid options tied to their identity.

If RC codes are not available through a connected system, we can create and maintain a secure library of RC codes within the DG3 platform. This library could include permissions indicating who is allowed to use which codes, providing the same controls and validation logic without requiring a system-to-system feed.

In all cases, the goal is the same: to ensure that RC-code attribution happens intelligently and accurately at the point of order entry — reducing manual intervention and improving reporting alignment — while respecting however GAF prefers to govern that data today.`, 
                icon: <ZapIcon /> 
            },
            { 
                title: 'Digital Download Management', 
                description: `The platform treats digital products — such as social media posts, customized videos, and downloadable PDFs — just like any other item in a shopper’s order history. Once a digital item is generated or purchased, it’s automatically stored with that order and remains accessible to the user at any time.

Immediate Access:
When an order containing digital assets is completed, the shopper receives a confirmation email that includes a secure download link for each digital file.

Persistent Availability:
The same files are available under the user’s Order History within the storefront. By viewing their past orders, shoppers can re-download their completed social posts, videos, or PDFs whenever needed — without relying on the original email link.

Integrated Tracking:
Because digital items are stored in the same order record as physical products, they follow the same workflow, permissions, and reporting structures. This ensures a unified user experience and full audit trace across all order types.

In short, digital downloads — whether a branded video, social post, or printable PDF — are securely stored, easily retrieved, and always tied to the user’s order history for convenient access and complete recordkeeping.`, 
                icon: <FileTextIcon /> 
            },
        ],
    }
];

export const ADMIN_CAPABILITIES: Capability[] = [
    {
        id: 'cap-admin-content',
        title: 'User & Content Management',
        description: "The admin panel empowers administrators to manage users, content, and budgets directly, enabling immediate updates. This agility allows GAF's marketing teams to adapt in real time, with the full backing of our strategic and technical support.",
        videos: [
            { id: 'video-admin-promo-offers', label: 'Video: Managing Promotional Offers', shortLabel: 'Promo Offers', embedUrl: 'https://www.loom.com/embed/93ed0de88fc9420b8b37337b6285dcf2' }
        ],
        exploreFurtherVideos: [
            { id: 'video-admin-products', label: 'Video: How to Set Up New Products', shortLabel: 'Add New Product', embedUrl: 'https://www.loom.com/embed/cb2126e56795488a970ac252aaf7d57f' },
            { id: 'video-sidekick-bogo', label: 'Video: AI-Generated BOGO Promotion', shortLabel: 'AI Marketing', embedUrl: 'https://www.loom.com/embed/de611111c854244729e0ba0cefd97304e' },
            { id: 'video-po-management', label: 'Video: Purchase Order Management', shortLabel: 'PO Management', embedUrl: 'https://www.loom.com/embed/6571d80a8d48479d86de088d244c70d0' }
        ],
        details: [
            { title: 'Direct Content Updates', description: 'Administrators can perform simple text and image edits on promotional banners and publish them instantly to the live site.', icon: <EditIcon /> },
            { title: 'Theme & Layout Adjustment', description: 'Deeper layout elements like content placements, colors, and layouts can be adjusted through the intuitive theme editor.', icon: <LayersIcon /> },
            { 
                title: 'Flow: Automation Engine', 
                description: `Think of Flow as the central nervous system for store operations. It lets you build automated workflows for almost any business process, from tagging high-value customers to automating inventory management tasks, freeing up your team to focus on strategic work.`, 
                icon: <ZapIcon /> 
            },
        ],
    },
    {
        id: 'cap-admin-budgets',
        title: 'Budget Management',
        description: "This feature provides GAF with direct, real-time control over program spending. Budgets can be assigned by user, region, or role, and changes take effect immediately — no refresh required. These values can also flow automatically from the Integration Layer, syncing available GAF Bucks or Co-op Dollars.",
        videos: [
            { id: 'video-admin-budgets', label: 'Video: Budget Management', shortLabel: 'Budget Management', embedUrl: 'https://www.loom.com/embed/1f0a6aa7aa57441da2c169441dc3256c' }
        ],
        details: [
            { title: 'Real-Time Control', description: 'Assign a budget limit (e.g., $1,000) to a contractor, and the change takes effect instantly, preventing budget overruns.', icon: <UserIcon /> },
            { title: 'Automated Sync', description: 'Budget values sync automatically with GAF systems via the Integration Layer, ensuring co-op and GAF Bucks are always up-to-date.', icon: <LayersIcon /> },
            { title: 'No-Code Approval Rules', description: 'Set item-specific rules (e.g., trigger an approval if more than 10 are ordered) using simple, no-code automation powered by Flow.', icon: <ShieldIcon /> },
        ],
    },
    {
        id: 'cap-admin-approvals',
        title: 'Approvals & Workflows',
        description: "The platform's intelligent approval workflows provide robust brand and budget control without creating bottlenecks. From co-branded assets to budget overrides and social media content, the system automates the routing, review, and notification process, ensuring speed and compliance go hand-in-hand.",
        videos: [
            { id: 'video-approval-workflows', label: 'Video: Approving Co-branded or Over-Budget Items', shortLabel: 'Approvals', embedUrl: 'https://www.loom.com/embed/c13ed052d6284044be289c3af42db048' }
        ],
        exploreFurtherVideos: [
            { id: 'video-admin-flow', label: 'Video: Automating Workflows with Flow', shortLabel: 'Flow Automation', embedUrl: 'https://www.loom.com/embed/a54ebb2a03c54b5cb0336e6653ccf77c' }
        ],
        details: [
            { title: 'Over-Budget Order Flagging', description: 'A dashboard widget immediately flags any orders that have exceeded a user\'s or department\'s budget, routing them for approval.', icon: <ShieldIcon /> },
            { title: 'Social Media Approvals', description: 'Similar to co-branding, the platform can manage approval workflows for social media content, ensuring brand consistency.', icon: <TargetIcon /> },
            { title: 'Unified Approver Dashboard', description: 'Approvers manage all pending requests—from budget to artwork—in a single, intuitive dashboard for quick review and action.', icon: <GridIcon /> },
        ],
    },
    {
        id: 'cap-admin-analytics',
        title: 'Analytics & Reporting',
        description: "The platform provides a comprehensive analytics suite, featuring both robust, integrated reporting for real-time operational insights and a seamless data flow into Tableau via the DG3 Integration Layer. This dual approach ensures that GAF stakeholders have immediate access to both day-to-day transactional data and high-level business intelligence, all without switching contexts.",
        videos: [
            { id: 'video-tableau-analytics', label: 'Video: Tableau Reporting and Analytics', shortLabel: 'Tableau Analytics', embedUrl: 'https://www.loom.com/embed/ca5bd70da0ca4b28832b3a3c35da499d' },
            { id: 'video-integrated-analytics', label: 'Video: Integrated Reporting and Analytics', shortLabel: 'Integrated Analytics', embedUrl: 'https://www.loom.com/embed/e8c659bda7ed4d85af956ecd56a06d0e' }
        ],
        exploreFurtherVideos: [
            { id: 'video-sidekick-report', label: 'Video: AI-Generated Restock Report', shortLabel: 'AI Reporting', embedUrl: 'https://www.loom.com/embed/d77270f0fdbd4e5b93c207ea3c9a49e6' },
            { id: 'video-sidekick-skills', label: 'Video: Using AI Skills for Custom Tasks', shortLabel: 'AI Skills', embedUrl: 'https://www.loom.com/embed/f00810d17ef044c08a590e9b6020c0fa' }
        ],
        details: [
            { title: 'Tableau Dashboards', description: "View KPIs like Total Orders, Average Order Value, and Top Selling Products. Drill down into a specific region to see how the data filters dynamically.", icon: <DataIcon /> },
            { title: 'Real-Time Analytics', description: "Data is pulled in real-time—literally to the second. As activity happens on the site, that information is immediately available in the analytics section, enabling instant insights.", icon: <TrendingUpIcon /> },
            { title: 'ShopifyQL: The Data Query Language', description: "Shopify's purpose-built query language allows GAF to pull specific data elements into external sources like Tableau without large, slow data pulls. This unlocks deep, real-time insights on sales, inventory, and customer behavior, fueling predictive intelligence and smarter strategies.", icon: <ZapIcon /> },
            { title: 'Integrated Analytics', description: "The primary analytics dashboard is built from hundreds of configurable reports. Each tile is its own fully customizable report, transforming operational data into actionable insights.", icon: <TrendingUpIcon /> },
            { title: 'Predictive Inventory Reports', description: "Key reports like 'Days of Inventory' show exactly how many days of supply are left for any item based on recent sales velocity, helping to prevent costly stockouts.", icon: <LayersIcon /> },
        ],
        enhancements: [
            {
                title: 'AI-Powered Predictive Analytics',
                icon: <AIIcon />,
                description: `The 2026 implementation of AI-Powered Predictive Analytics is set to redefine the GAF administrative experience—transforming traditional reporting into a proactive business intelligence system. Instead of relying on manual reviews and reactive dashboards, administrators will gain a predictive partner that continuously monitors activity, identifies patterns, and surfaces insights before issues arise.
This evolution moves the platform from reporting what happened to forecasting what’s next. Built on the same AI foundation that powers personalization for contractors, the predictive layer will apply advanced models to inventory management, demand forecasting, and SKU performance, empowering GAF administrators with timely, actionable intelligence.`
            }
        ]
    }
];

// FIX: Moved QNA_DATA and its helper components before SECTIONS to resolve a variable declaration error, as SECTIONS depends on QNA_DATA.
// Helper components for QNA_DATA for consistent styling
const QnaHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-xl font-bold text-brand-gray mt-6 mb-3">{children}</h3>;
const QnaSubheading: React.FC<{ children: React.ReactNode }> = ({ children }) => <h4 className="text-lg font-semibold text-brand-gray mt-4 mb-2">{children}</h4>;
const QnaParagraph: React.FC<{ children: React.ReactNode }> = ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>;
const QnaList: React.FC<{ children: React.ReactNode; ordered?: boolean, type?: 'disc' | 'alpha' }> = ({ children, ordered = false, type = 'disc' }) => {
    const listStyle = ordered ? 'list-decimal' : (type === 'alpha' ? 'list-[lower-alpha]' : 'list-disc');
    const Tag = ordered ? 'ol' : 'ul';
    return <Tag className={`${listStyle} list-outside pl-6 space-y-2 mb-4`}>{children}</Tag>;
};
const QnaListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => <li>{children}</li>;
const QnaBold: React.FC<{ children: React.ReactNode }> = ({ children }) => <strong className="font-semibold text-gray-800">{children}</strong>;
const QnaTable: React.FC<{ headers: string[]; rows: (string | React.ReactNode)[][]; }> = ({ headers, rows }) => (
    <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg">
        <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase">
                <tr>
                    {headers.map(h => <th key={h} className="px-6 py-3">{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i} className="bg-white border-b last:border-b-0 hover:bg-gray-50">
                        {row.map((cell, j) => <td key={j} className="px-6 py-4 align-top">{cell}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
const QnaQuote: React.FC<{ children: React.ReactNode }> = ({ children }) => <blockquote className="my-4 p-4 bg-gray-100 border-l-4 border-gray-300 italic">{children}</blockquote>;
const QnaItalic: React.FC<{ children: React.ReactNode }> = ({ children }) => <em className="italic">{children}</em>;

export const QNA_DATA: QnaItem[] = [
    {
        id: 'qna-rewards-integration',
        question: 'Real-Time Rewards Integration',
        answer: (
            <div>
                <QnaParagraph><QnaBold>Yes.</QnaBold> The DG3-managed Shopify Plus platform integrates directly with GAF’s internal <QnaBold>Rewards Service API</QnaBold> to treat Rewards Bucks (and Co-Op Dollars) as a <QnaBold>true tender type</QnaBold> within checkout.
This allows contractors to use any combination of Rewards Bucks and credit-card payment in real time—whether covering part of an order, splitting payment evenly, or combining tenders with automatic reversal logic if authorization fails.</QnaParagraph>
                
                <QnaSubheading>How It Works</QnaSubheading>
                <QnaParagraph>(From the contractor’s perspective, the process is seamless and takes only a few seconds):</QnaParagraph>
                <QnaList ordered>
                    <QnaListItem><QnaBold>Single Sign-On (SSO) and Balance Retrieval</QnaBold><br/>When a contractor signs in through SSO, the platform immediately calls GAF’s Rewards Service to retrieve that user’s available Rewards Bucks or Co-Op Dollars. The current balance is displayed on their account page and carried forward through checkout.</QnaListItem>
                    <QnaListItem><QnaBold>Checkout and Payment Selection</QnaBold><br/>During checkout, the user selects how many Rewards Bucks to apply toward the order total. The remaining balance is automatically calculated and can be paid by credit card or any other active tender type.</QnaListItem>
                    <QnaListItem><QnaBold>Order Submission and Confirmation Screen</QnaBold><br/>When the order is submitted, any transaction using Rewards Bucks or Co-Op Dollars is automatically placed on a brief hold while the system confirms funds in real time. The user immediately sees the following message on the confirmation page:
                        <QnaQuote>
                            <QnaBold>We’re Finalizing Your Order</QnaBold><br/>
                            Thank you for your order. Because you’ve chosen to use Rewards Bucks for payment, your order is being confirmed against your available balance. You’ll receive an email within the next few minutes once your order has been successfully validated and released for processing.
                        </QnaQuote>
                    </QnaListItem>
                    <QnaListItem><QnaBold>Real-Time Validation (2–5 Seconds)</QnaBold><br/>Behind the scenes, the system performs an API call to the GAF Rewards Service to confirm that the user still has sufficient funds available. This validation typically completes in <QnaBold>two to five seconds.</QnaBold></QnaListItem>
                    <QnaListItem><QnaBold>Automatic Deduction and Confirmation</QnaBold><br/>If the balance is sufficient, the Rewards Bucks are <QnaBold>deducted</QnaBold> in real time from the user’s account via API, the order hold is lifted, and the user receives a “Your Order Has Been Confirmed” email.</QnaListItem>
                    <QnaListItem><QnaBold>Insufficient Funds Handling</QnaBold><br/>If the API indicates that the available rewards are insufficient to cover the requested amount, the system automatically releases the hold and sends an email notification explaining that the <QnaBold>rewards balance was not enough</QnaBold> to complete the order, with instructions to retry. The tone is informational—not a “failed order” message.</QnaListItem>
                </QnaList>
                <QnaParagraph>The entire experience is designed to feel instantaneous and predictable for contractors while maintaining full transactional integrity for GAF.</QnaParagraph>
                
                <QnaSubheading>Technical Implementation Details</QnaSubheading>
                <QnaList ordered>
                    <QnaListItem><QnaBold>Login and Data Sync</QnaBold>
                      <QnaList type='disc'>
                        <QnaListItem>On SSO login, DG3’s middleware service calls the <QnaBold>GAF Rewards API</QnaBold> to fetch the contractor’s current Rewards and Co-Op balances.</QnaListItem>
                        <QnaListItem>The retrieved values are stored in <QnaBold>Shopify customer metafields</QnaBold> for temporary use during the active session.</QnaListItem>
                      </QnaList>
                    </QnaListItem>
                    <QnaListItem><QnaBold>Checkout Process</QnaBold>
                      <QnaList type='disc'>
                        <QnaListItem>When the user enters an amount of Rewards Bucks to apply, that intent (points amount + idempotency key) is saved with the checkout.</QnaListItem>
                        <QnaListItem>The order proceeds normally through Shopify checkout, with both tenders (rewards + credit card) captured in a single flow.</QnaListItem>
                      </QnaList>
                    </QnaListItem>
                    <QnaListItem><QnaBold>Order Hold and Validation</QnaBold>
                      <QnaList type='disc'>
                        <QnaListItem>On order submission, any order containing Rewards or Co-Op payment automatically moves into an <QnaBold>“On Hold – Validating Rewards”</QnaBold> status.</QnaListItem>
                        <QnaListItem>A <QnaBold>Shopify Flow workflow</QnaBold> is triggered, which uses the <QnaBold>Send HTTP Request</QnaBold> action to call a DG3-hosted middleware endpoint.</QnaListItem>
                        <QnaListItem>The middleware immediately calls the GAF Rewards API to perform a live balance check and authorization of the requested amount.</QnaListItem>
                      </QnaList>
                    </QnaListItem>
                    <QnaListItem><QnaBold>Authorization, Deduction, and Reversal Logic</QnaBold>
                        <QnaList type='disc'>
                            <QnaListItem>If sufficient funds exist, the middleware calls the GAF Rewards API Capture/Redeem endpoint to deduct the authorized amount from the contractor’s balance.</QnaListItem>
                            <QnaListItem>If a credit-card payment is also part of the order, both tenders are captured together to ensure synchronized reconciliation.</QnaListItem>
                            <QnaListItem>If the card authorization fails or GAF’s API reports insufficient funds, the middleware calls the GAF Rewards API Void/Release endpoint to reverse the authorization, restoring the contractor’s available balance instantly.</QnaListItem>
                        </QnaList>
                    </QnaListItem>
                     <QnaListItem><QnaBold>System Messaging and Status Updates</QnaBold>
                        <QnaList type='disc'>
                            <QnaListItem>While validation occurs, the Order Status page displays the “We’re Finalizing Your Order” message.</QnaListItem>
                            <QnaListItem>The DG3 middleware returns a real-time status to Shopify within seconds. Once confirmed, the order automatically transitions from On Hold to Processing, and an email confirmation is triggered.</QnaListItem>
                            <QnaListItem>If the validation fails, the order remains in Payment Required status and the customer is notified via email to adjust payment.</QnaListItem>
                        </QnaList>
                    </QnaListItem>
                    <QnaListItem><QnaBold>Connectivity Safeguards</QnaBold>
                        <QnaList type='disc'>
                            <QnaListItem>In cases of network interruption or user-authorization mismatch (for example, an Okta entitlement configuration issue), the middleware will queue and retry the Rewards validation call several times before timing out gracefully.</QnaListItem>
                            <QnaListItem>During this period, the order remains on hold, and no deduction occurs until confirmation is received.</QnaListItem>
                            <QnaListItem>If connection cannot be re-established within a defined timeout window, the order is released and treated as unvalidated, with a notification sent to the user that Rewards could not be confirmed.</QnaListItem>
                        </QnaList>
                    </QnaListItem>
                    <QnaListItem><QnaBold>Data Logging and Reconciliation</QnaBold>
                        <QnaList type='disc'>
                            <QnaListItem>Each transaction (Authorize, Capture, Void) is recorded in Shopify order metafields with its corresponding GAF Rewards transaction ID.</QnaListItem>
                            <QnaListItem>DG3’s middleware logs all requests and responses with correlation IDs for full auditability.</QnaListItem>
                            <QnaListItem>A nightly reconciliation process cross-verifies Shopify orders against the GAF Rewards ledger to confirm that all deductions, reversals, and balances match.</QnaListItem>
                            <QnaListItem>Idempotent transaction design ensures that duplicate or retried API calls never result in double deductions.</QnaListItem>
                        </QnaList>
                    </QnaListItem>
                </QnaList>
                
                <QnaSubheading>Multi-Tender Scenarios</QnaSubheading>
                <QnaTable headers={["Scenario", "System Behavior"]} rows={[
                  ["a) Half Rewards / Half Credit Card", "Rewards are authorized for the chosen amount and the remainder is authorized on the card. Once both succeed, the Rewards Bucks are deducted via API, the card is captured, and the order is released."],
                  ["b) Enough Rewards to Cover All, but User Chooses 50/50", "The platform honors the user’s specified split. Only the chosen Rewards amount is deducted; the remainder is processed through card authorization and capture."],
                  ["c) Rewards + Card, but Card Authorization Fails", "Rewards authorization is held but not yet deducted. On card failure, the middleware calls the GAF Rewards API to void the authorization and restore the balance. The user is notified by email that their Rewards Bucks were returned and prompted to retry."],
                  ["d) Adequate Rewards Balance, but Network or Authorization Failure Occurs", "If the platform temporarily cannot connect to the GAF Rewards API—or if user authorization cannot be verified due to configuration issues (for example, an Okta entitlement mismatch)—the order remains in Pending Approval status while the system retries the API call at short intervals. If the Rewards Service becomes reachable and validation succeeds, the order proceeds normally. If the connection cannot be re-established within a defined timeout period, the system treats the transaction as unvalidated, releases the hold, and notifies the user that their Rewards payment could not be confirmed. No points are deducted during this period. This logic ensures that orders are never stranded or double-charged and that any network, authorization, or configuration issues can be resolved safely without financial impact to the user or GAF."],
                ]}/>

                <QnaSubheading>Summary</QnaSubheading>
                <QnaParagraph>The DG3-managed Shopify Plus implementation provides a real-time, multi-tender checkout experience that:</QnaParagraph>
                <QnaList type='disc'>
                  <QnaListItem>Retrieves and displays live Rewards and Co-Op balances at login via SSO.</QnaListItem>
                  <QnaListItem>Performs <QnaBold>instant API validation</QnaBold> (2–5 seconds) during checkout for any order using rewards.</QnaListItem>
                  <QnaListItem>Displays clear, reassuring language (“We’re Finalizing Your Order”) during processing.</QnaListItem>
                  <QnaListItem><QnaBold>Deducts</QnaBold> Rewards Bucks immediately upon confirmation and updates the GAF Rewards ledger in real time.</QnaListItem>
                  <QnaListItem>Automatically <QnaBold>reverses</QnaBold> deductions if card authorization, connectivity, or validation fails.</QnaListItem>
                  <QnaListItem>Maintains <QnaBold>full audit, reconciliation, and transaction traceability</QnaBold> across Shopify, DG3 middleware, and GAF’s internal Rewards system.</QnaListItem>
                </QnaList>
                 <QnaParagraph>This design ensures a smooth and transparent user experience for contractors while providing GAF’s technical teams with a controlled, auditable, and API-driven transaction lifecycle that gracefully handles both expected and exceptional scenarios.</QnaParagraph>
            </div>
        )
    },
    {
        id: 'qna-fraud-controls',
        question: 'Fraud Controls & Prevention',
        answer: (
            <div>
                <QnaSubheading>1. Prevention Strategy</QnaSubheading>
                <QnaParagraph>Shopify Plus employs a <QnaBold>multi-layered, AI-driven fraud prevention framework</QnaBold> that continuously analyzes transactions across a global network exceeding <QnaBold>10 billion orders</QnaBold>. Every purchase is evaluated in real time by Shopify’s proprietary machine-learning engine, which assesses hundreds of signals—including <QnaBold>AVS and CVV verification, geolocation, device fingerprinting, velocity limits, and behavioral anomalies</QnaBold>—to generate a risk score (Low, Medium, High) before fulfillment.</QnaParagraph>
                <QnaParagraph>The platform’s native defenses include:</QnaParagraph>
                <QnaList type='disc'>
                    <QnaListItem><QnaBold>Adaptive 3D Secure 2.0 authentication</QnaBold>, which uses machine learning to trigger step-up verification only when risk thresholds warrant it. This targeted routing strengthens payment security while maintaining high conversion rates, adding friction only where necessary.</QnaListItem>
                    <QnaListItem><QnaBold>Card-testing and bot-attack suppression</QnaBold>, using behavioral modeling and CAPTCHA to stop automated purchase attempts.</QnaListItem>
                    <QnaListItem><QnaBold>PCI DSS Level 1 compliance</QnaBold> and tokenized payment processing through Shopify Payments.</QnaListItem>
                    <QnaListItem><QnaBold>Shopify Flow automation</QnaBold>, allowing customized rules that hold, tag, or cancel suspect orders and support “manual capture” payment workflows to void fraudulent authorizations before fees accrue.</QnaListItem>
                </QnaList>
                <QnaParagraph>Together, these tools provide an enterprise-class baseline that neutralizes the majority of financial and operational fraud vectors across the entire Shopify Plus network.</QnaParagraph>
                <QnaParagraph>Within GAF’s environment, these native capabilities are further reinforced by <QnaBold>Okta Single Sign-On (SSO)</QnaBold>, which ensures that every user reaching checkout has already been authenticated through corporate identity controls. This gated structure significantly reduces exposure to anonymous retail-style fraud, making Shopify’s native protections proportionally sufficient for the risk profile of the Unified Storefront.</QnaParagraph>

                <QnaSubheading>2. Third-Party Tools</QnaSubheading>
                <QnaParagraph>While native controls address detection and prevention comprehensively, <QnaBold>third-party integrations are available</QnaBold> to extend protection into financial liability transfer and advanced policy-abuse management.</QnaParagraph>
                <QnaParagraph>Shopify Plus maintains direct API integrations with several leading partners:</QnaParagraph>
                <QnaTable headers={["Provider", "Key Capabilities", "Chargeback Guarantee", "Ideal Use Case"]} rows={[
                    ["Signifyd", "Real-time approve/decline decisions with full reimbursement for fraud or “item not received” disputes", "100 %", "Enterprise-scale liability transfer"],
                    ["Riskified", "Behavioral analytics + global order linking", "100 % (fraud)", "High-volume, international programs"],
                    ["ClearSale", "Hybrid AI + human fraud-analyst review", "100 %", "Complex or cross-border orders"],
                    ["NoFraud", "AI decisioning + manual verification for flagged cases", "100 % (unauthorized use)", "False-positive reduction"],
                ]}/>
                <QnaParagraph>Each integrates seamlessly within the Shopify checkout workflow, analyzing transaction data in milliseconds and returning approve/decline/review decisions that can automatically trigger Shopify Flow actions.</QnaParagraph>
                <QnaParagraph>Where chargeback guarantees are applied, protection covers approved physical-goods transactions fulfilled within defined timelines and shipped with valid tracking. Non-fraud disputes follow standard merchant policies. This transparency ensures predictable, auditable coverage for GAF.</QnaParagraph>
                <QnaParagraph>For GAF, these services are <QnaBold>optional enhancements</QnaBold> that may be introduced to meet future business or compliance needs, but they are <QnaBold>not required</QnaBold> for secure operation within the authenticated SSO environment.</QnaParagraph>
                
                <QnaSubheading>3. Real-World Example</QnaSubheading>
                <QnaParagraph>A high-value order ($8 K electronics) placed overnight from a foreign IP with mismatched billing and shipping addresses triggered Shopify’s fraud engine.</QnaParagraph>
                <QnaList type='disc'>
                    <QnaListItem><QnaBold>Detection:</QnaBold> The system flagged the transaction as High Risk after identifying multiple failed card attempts and a proxy IP.</QnaListItem>
                    <QnaListItem><QnaBold>Automation:</QnaBold> A pre-configured Shopify Flow rule instantly placed a fulfillment hold, tagged the order for review, and prevented automatic payment capture.</QnaListItem>
                    <QnaListItem><QnaBold>Verification:</QnaBold> 3D Secure authentication failed, and the merchant’s outreach received no customer response.</QnaListItem>
                    <QnaListItem><QnaBold>Outcome:</QnaBold> The order was canceled before settlement, avoiding both inventory loss and chargeback exposure.</QnaListItem>
                </QnaList>
                <QnaParagraph>In a separate case of card-testing abuse, Shopify’s native bot-protection layer blocked over 100 automated purchase attempts within minutes, demonstrating the platform’s ability to halt coordinated attacks without human intervention.</QnaParagraph>
                
                <QnaSubheading>4. Actions Taken When Transactions Are Flagged</QnaSubheading>
                <QnaParagraph>When Shopify’s analysis flags an order as suspicious:</QnaParagraph>
                <QnaList ordered>
                    <QnaListItem><QnaBold>Immediate Alert & Workflow Hold</QnaBold> – The order is highlighted in the admin (⚠️ icon) and triggers automated notifications via Shopify Flow; fulfillment is automatically paused.</QnaListItem>
                    <QnaListItem><QnaBold>Fraud Review Process</QnaBold> – Analysts evaluate AVS/CVV results, IP geolocation, payment velocity, and order history using Shopify’s detailed fraud-indicator dashboard.</QnaListItem>
                    <QnaListItem><QnaBold>Human-in-the-Loop Validation</QnaBold> – Questionable transactions are held—not auto-rejected—allowing manual review through Shopify Flow or integrated analyst teams. This balances protection with customer experience and minimizes false positives.</QnaListItem>
                    <QnaListItem><QnaBold>Customer Verification (As Needed)</QnaBold> – Polite outreach may confirm billing details or identity; legitimate buyers typically respond quickly, while fraudsters disengage.</QnaListItem>
                    <QnaListItem><QnaBold>Resolution & Escalation</QnaBold> –
                      <QnaList type='disc'>
                        <QnaListItem><QnaBold>Legitimate:</QnaBold> Payment captured, order fulfilled (optionally with signature on delivery).</QnaListItem>
                        <QnaListItem><QnaBold>Fraudulent/Unverified:</QnaBold> Authorization voided or refund issued, order tagged for blocklisting.</QnaListItem>
                        <QnaListItem><QnaBold>Third-Party Integration:</QnaBold> Partner’s approve/decline status determines next steps; any guaranteed transactions are reimbursed automatically in the event of chargeback.</QnaListItem>
                      </QnaList>
                    </QnaListItem>
                </QnaList>
                
                <QnaSubheading>5. Ethical AI and Governance</QnaSubheading>
                <QnaParagraph>Shopify’s fraud-detection models are <QnaBold>continuously audited for accuracy and bias</QnaBold>. They evaluate behavioral and transactional data only—never personal or demographic attributes—and are maintained by Shopify’s Trust & Safety organization to ensure ethical AI operation. Merchants retain full control: flagged orders can always be manually reviewed or approved within DG3’s workflow, ensuring that human judgment remains the final authority.</QnaParagraph>

                <QnaSubheading>Summary</QnaSubheading>
                <QnaParagraph>Shopify Plus combines <QnaBold>AI-driven fraud intelligence, adaptive authentication, and workflow automation</QnaBold> to deliver a secure-by-default commerce environment.</QnaParagraph>
                <QnaParagraph>For GAF, the additional control layer provided by <QnaBold>Okta SSO authentication</QnaBold> creates a closed, identity-verified user base that minimizes exposure to external fraud.</QnaParagraph>
                <QnaParagraph>Third-party solutions such as Signifyd, Riskified, ClearSale, or NoFraud may be integrated to add guaranteed financial coverage or broader behavioral analytics, but the <QnaBold>native Shopify Plus toolset—reinforced by adaptive 3DS, bias-audited AI, and SSO—provides an exceptionally strong, enterprise-ready foundation</QnaBold> for both financial and non-financial fraud prevention.</QnaParagraph>
            </div>
        )
    },
    {
        id: 'qna-qa-compliance',
        question: 'Quality Assurance & Compliance',
        answer: (
          <div>
            <QnaParagraph>DG3 maintains a rigorous, ISO-aligned Quality Assurance (QA) framework that governs every stage of merchandise production, decoration, kitting, and fulfillment. Our processes emphasize control, traceability, and accountability, ensuring that every branded product, co-branded item, and event kit consistently meets GAF’s standards for safety, accuracy, and brand integrity.</QnaParagraph>
            <QnaSubheading>1. Production Quality and Certification</QnaSubheading>
            <QnaParagraph><QnaBold>Merchandise and Promotional Products</QnaBold></QnaParagraph>
            <QnaParagraph>DG3 enforces a multi-layered QA protocol that begins with supplier selection and extends through production, inspection, and post-fulfillment review.</QnaParagraph>
            <QnaParagraph><QnaBold>Preferred Supplier Network – QCA Certified Partners</QnaBold><br/>DG3 prioritizes working with QCA (Quality Certification Alliance) accredited suppliers, a leading compliance organization within the promotional products industry. QCA accreditation ensures that suppliers adhere to verified best practices in:</QnaParagraph>
            <QnaList type='disc'>
                <QnaListItem>Product Safety & Regulatory Compliance (CPSIA, Prop 65, FDA, etc.)</QnaListItem>
                <QnaListItem>Environmental Stewardship (sustainable material sourcing and waste reduction)</QnaListItem>
                <QnaListItem>Social Accountability (ethical labor and workplace standards)</QnaListItem>
                <QnaListItem>Supply Chain Transparency (traceable materials and manufacturing locations)</QnaListItem>
            </QnaList>
            <QnaParagraph>In addition to our domestic QCA-certified network, DG3 maintains direct relationships with select overseas manufacturing partners that undergo the same level of scrutiny and compliance validation. All offshore production facilities are ISO-certified and required to provide documentation of third-party audit results covering quality management systems, social responsibility, and environmental practices. DG3 reviews and archives these certifications as part of our supplier compliance program.</QnaParagraph>
            <QnaParagraph>Through this hybrid domestic–global sourcing strategy, DG3 ensures that every product—whether produced domestically or abroad—meets consistent quality, safety, and ethical manufacturing standards while maintaining the scalability required for enterprise-level programs like GAF’s Marketing Hub.</QnaParagraph>
            <QnaParagraph><QnaBold>Pre-Production Sampling and QC Verification</QnaBold><br/>We suggest for every new product introduced into the GAF program, DG3 produces a pre-production sample that serves as the official reference standard for all future production. These samples are approved for:</QnaParagraph>
            <QnaList type='disc'>
                <QnaListItem>PMS color accuracy and logo placement</QnaListItem>
                <QnaListItem>Decoration method and finishing quality</QnaListItem>
                <QnaListItem>Material consistency and presentation</QnaListItem>
            </QnaList>
            <QnaParagraph>Once approved, pre-production samples are archived at DG3’s Secaucus, NJ fulfillment center and cataloged for reference. Then every reorder or replenishment run is checked against this sample to ensure exact replication and eliminate any variation across production cycles.</QnaParagraph>
            <QnaParagraph><QnaBold>Inbound Quality Checks and Ongoing Inspection</QnaBold><br/>All merchandise shipments received into DG3’s warehouse undergo sample-based inspection, including packaging review, decoration accuracy, and condition verification before being accepted into inventory. Randomized audits are conducted weekly to sustain a 99.7% fulfillment accuracy rate.</QnaParagraph>
            <QnaSubheading>2. Brand and Legal Compliance</QnaSubheading>
            <QnaParagraph>DG3 enforces strict brand governance across all merchandise and digital customization workflows:</QnaParagraph>
            <QnaList type='disc'>
                <QnaListItem><QnaBold>Artwork Control:</QnaBold> All GAF logos and co-branding requests are reviewed to ensure proper GAF logo use, and brand-guideline compliance.</QnaListItem>
                <QnaListItem><QnaBold>Template Locking:</QnaBold> Customizable product templates include locked variable fields that prevent unapproved edits or logo misuse.</QnaListItem>
                <QnaListItem><QnaBold>Brand Audits:</QnaBold> DG3’s conducts recurring audits on active products and sample inventories to confirm ongoing alignment with GAF brand standards.</QnaListItem>
            </QnaList>
             <QnaSubheading>3. Event Kit and Post-Event Management</QnaSubheading>
            <QnaParagraph>DG3 applies the same disciplined QA methodology to Booth-in-a-Box and other multi-component event kits:</QnaParagraph>
            <QnaList type='disc'>
                <QnaListItem>Kits are fully assembled, unboxed, and inspected prior to shipment to verify that all components are present, functional, and damage-free.</QnaListItem>
                <QnaListItem>A photo-based checklist is maintained for each kit to document condition and completeness.</QnaListItem>
                <QnaListItem>Upon return, all kits are logged and inspected for damage, missing components, or cleaning requirements. Any issues identified—such as stains, broken hardware, or missing pieces—are documented and reported to GAF at the time of receipt.</QnaListItem>
                <QnaListItem>Returned kits undergo post-event refurbishment, including cleaning, repackaging, and component repair or replacement to ensure readiness for redeployment.</QnaListItem>
            </QnaList>
            <QnaSubheading>4. Print Quality</QnaSubheading>
            <QnaParagraph>DG3 is a G7 master certified printer with full systems integrated from native file to printing press automated color caligration. We have rigorous operating procedures and quality managed processes throughout our manufacturing process. We leverage information systems to document requirements and control quality. This is audited by our QC department. For GAF, we actually provide meaningful color management to ensure your products on paper match your products in the field, a critical component of brand trust for GAF. When quality exceptions occur, we immediately perform a root cause and corrective action review and replace product at our cost.</QnaParagraph>
          </div>
        )
    },
    {
        id: 'qna-training-adoption',
        question: 'Training & Adoption',
        answer: (
            <div>
                <QnaParagraph>DG3 takes a multi-phased, role-based approach to training that combines structured instruction, interactive demonstrations, and embedded learning directly within the platform. Our objective is to ensure every user—administrators, SKU owners, sales teams, and contractors—can confidently leverage the platform from launch onward.</QnaParagraph>
                <QnaSubheading>Phase 1 – Platform Orientation and Administrator Enablement</QnaSubheading>
                <QnaParagraph>At implementation, DG3 provides comprehensive training for System Administrators and SKU Owners, including:</QnaParagraph>
                <QnaList type='disc'>
                    <QnaListItem>Recorded and live video sessions covering configuration, product setup, reporting workflows, and integrations.</QnaListItem>
                    <QnaListItem>Self-guided demonstrations that mirror real-world use cases, such as adding products, managing approvals, and reviewing analytics.</QnaListItem>
                    <QnaListItem>Extensive documentation and quick-reference guides tailored to GAF’s environment and processes.</QnaListItem>
                </QnaList>
                <QnaParagraph>These materials complement Shopify’s own extensive training library, which offers hundreds of up-to-date tutorials and help articles across both merchant and developer use cases.</QnaParagraph>
                <QnaParagraph>Additionally, administrators have access to Shopify Sidekick, their integrated AI assistant that is available directly within the platform. Sidekick can answer natural-language questions, explain platform features, and walk users through specific tasks step-by-step (for example, “How do I update a product image?” or “Show me how to create a discount rule”). This ensures that ongoing learning and support are always available, even after formal training has concluded.</QnaParagraph>
                <QnaSubheading>Phase 2 – End-User Enablement</QnaSubheading>
                <QnaParagraph>DG3 recognizes that ensuring your end users can confidently and effectively use the platform is essential to the program’s success.</QnaParagraph>
                <QnaParagraph>To achieve this, we employ a multi-layered support and training strategy that extends well beyond static documentation. Our approach delivers assistance precisely when and where it’s needed, combining formal resources with in-platform, self-guided support.</QnaParagraph>
                <QnaParagraph><QnaBold>On-Demand, Contextual Video Guides</QnaBold><br/>For high-value functions—such as product customization and co-branding features—DG3 embeds short “how-to” videos directly within the relevant product pages. When a contractor visits a customization screen, for example, an embedded link provides immediate access to a brief, targeted video explaining that exact feature. This allows users to learn in the moment, without leaving the workflow.</QnaParagraph>
                <QnaParagraph><QnaBold>Interactive, Self-Guided Tours</QnaBold><br/>For workflows that extend beyond typical e-commerce interactions, DG3 can layer in interactive, self-guided tours. When a user accesses a page for the first time, an on-screen overlay can guide them through each action step-by-step (e.g., “Step 1: Upload your logo here” → “Step 2: Add your custom text” → “Step 3: Preview your item”). These tours proactively reduce friction and ensure consistent user success, even for more complex tasks.</QnaParagraph>
                <QnaParagraph><QnaBold>Formal Training Resources</QnaBold><br/>In addition to digital, on-demand learning tools, DG3 provides formal training sessions—live or recorded—along with comprehensive guides and quick-reference materials customized for each user group. This ensures every audience segment has the knowledge required to succeed from day one.</QnaParagraph>
                <QnaParagraph>Together, these tools create an intuitive, supportive learning environment where users can quickly master even advanced platform capabilities like personalization, co-branding, and multi-tender ordering—all with minimal ongoing support requirements.</QnaParagraph>
                <QnaSubheading>Ongoing Adoption and Support</QnaSubheading>
                <QnaParagraph>DG3’s blended approach—combining structured instruction, AI-driven support (via Shopify Sidekick), and embedded, role-specific learning—ensures sustained adoption, faster onboarding, and long-term operational confidence across all user groups.</QnaParagraph>
            </div>
        )
    },
    {
        id: 'qna-seasonality',
        question: 'Seasonality & Curation',
        answer: (
            <div>
                <QnaParagraph>DG3 takes a proactive, insight-driven approach to seasonal product planning and curation, ensuring GAF’s Marketing Hub remains timely, relevant, and aligned with current trends and user expectations. Our strategy combines ongoing supplier engagement, hands-on product testing, and dynamic merchandising to deliver a consistently fresh and inspiring shopping experience.</QnaParagraph>
                <QnaList ordered>
                    <QnaListItem><QnaBold>Supplier Collaboration & Trend Monitoring</QnaBold><br/>DG3’s promotional team maintains regular meetings with our core supplier partners throughout the year to track new product launches, upcoming seasonal assortments, and category innovations. This collaboration allows us to identify new styles, sustainable materials, and premium retail-aligned product lines before they reach the broader market.</QnaListItem>
                    <QnaListItem><QnaBold>Hands-On Product Testing and Quality Evaluation</QnaBold><br/>DG3 believes in fully understanding and standing behind every product we recommend. Before onboarding new items to the GAF Marketing Hub, our team samples and tests products to evaluate durability, functionality, decoration quality, and overall user experience. Whether it’s apparel, drinkware, or technology accessories, we use and handle each product in everyday scenarios to confirm it meets DG3’s internal quality standards.</QnaListItem>
                    <QnaListItem><QnaBold>Digital Merchandising & Seasonal Categories</QnaBold><br/>To make seasonal shopping intuitive and engaging, DG3 creates dedicated product collections and categories on the GAF Marketing Hub aligned with key holidays, events, and campaign cycles. Examples include:
                        <QnaList type='disc'>
                            <QnaListItem>Summer Essentials – outdoor gear, hydration items, and apparel.</QnaListItem>
                            <QnaListItem>Winter Readiness – outerwear, gloves, and safety accessories.</QnaListItem>
                            <QnaListItem>Holiday Gifting – co-brandable products and gift/appreciation items.</QnaListItem>
                            <QnaListItem>Event Season Must-Haves – trade show and pop-up display materials.</QnaListItem>
                        </QnaList>
                    </QnaListItem>
                    <QnaListItem><QnaBold>Seasonal Look Books & Trend Reports</QnaBold><br/>DG3 develops custom seasonal look books and trend reports that showcase curated product recommendations tailored to GAF’s marketing calendar. These look books—available as interactive digital files or PDF presentations. Because they are created internally by DG3’s merchandising and creative teams, they can be produced quickly and as frequently as needed, whether quarterly or tied to specific campaigns. Each edition highlights new products, retail-inspired trends, and sustainable alternatives sourced through our certified supplier network.</QnaListItem>
                    <QnaListItem><QnaBold>Continuous Refresh & Innovation</QnaBold><br/>DG3 will continually refine the GAF Marketing Hub based on seasonal order data, search analytics, and supplier innovation. This ensures the storefront not only reflects the current season but also anticipates what’s next—helping GAF stay ahead of market trends while maintaining a curated, brand-right assortment.</QnaListItem>
                </QnaList>
            </div>
        )
    },
    {
        id: 'qna-user-driven-strategy',
        question: 'User-Driven Product Strategy',
        answer: (
            <div>
                <QnaParagraph>Shopify Plus gives administrators several straightforward ways to collect actionable user feedback. Built-in analytics already capture search queries, including those that return no results, allowing admins to identify missing products or mislabeled items. In addition, lightweight feedback tools—such as post-purchase surveys, on-page ratings, and comment widgets—can be added easily through Shopify’s native Forms app, DG3 custom forms or extensions.</QnaParagraph>
                <QnaParagraph>These inputs turn real user behavior into measurable insight: what contractors search for, what they can’t find, and what they value most. Over time, as Shopify introduces AI driven semantic search capabilities, that data will deepen—helping GAF not only see what users looked for, but understand what they meant—transforming organic feedback into a continuously improving product and content strategy.</QnaParagraph>
            </div>
        )
    },
    {
        id: 'qna-admin-self-service',
        question: 'Admin Self-Service & Control',
        answer: (
            <div>
                <QnaParagraph>Shopify Plus, supported by the DG3 Integration Layer, provides GAF administrators with <QnaBold>comprehensive, self-service control</QnaBold> across all major functions of the platform—products, users, content, workflows, and approvals. Every standard administrative action can be completed instantly and independently, without waiting for vendor intervention.</QnaParagraph>
                <QnaParagraph>At the same time, DG3 serves as a <QnaBold>dedicated and responsive partner</QnaBold>. Whether the need is a quick product update, a full-scale data import, or a complex automation build, our answer is always <QnaBold>yes</QnaBold>—we will perform, assist, or guide any administrative task GAF chooses to delegate. The platform is built for independence, but DG3 remains a full-service extension of your team.</QnaParagraph>
                <QnaSubheading>SKU and Product Management Control</QnaSubheading>
                <QnaParagraph><QnaBold>SKU Status & Details:</QnaBold> Admins can instantly <QnaBold>Activate or Deactivate</QnaBold> products, reassign <QnaBold>SKU ownership</QnaBold>, update <QnaBold>PDFs, thumbnails, or images</QnaBold>, and edit <QnaBold>keywords, metadata, and descriptions</QnaBold> in real time. All edits publish immediately and are recorded for traceability. DG3 is available to assist with any level of update—from single-SKU changes to multi-thousand-record imports or cross-system synchronization with Chili Graphics, Rewards, and Monarch.</QnaParagraph>
                <QnaParagraph><QnaBold>Order Quantity Control:</QnaBold> Admins can set or adjust <QnaBold>order-quantity limits</QnaBold> directly in Shopify Plus using variant-level purchase options or quantity metafields, globally or by user group. DG3 can perform or support these changes on request, including the creation of dynamic thresholds or automated limit logic tied to inventory, budget, or reward balances.</QnaParagraph>
                <QnaSubheading>User Access and Gating Management</QnaSubheading>
                <QnaParagraph><QnaBold>User Lifecycle:</QnaBold> Through Shopify’s customer-segment and access-control tools, GAF administrators can instantly <QnaBold>activate, deactivate, or modify user accounts</QnaBold> and reassign <QnaBold>buyer-group memberships</QnaBold> (e.g., Contractor, Certified, Non-Certified). These changes take effect immediately and maintain alignment with Okta SSO, Docebo certification data, and other connected systems.</QnaParagraph>
                <QnaParagraph><QnaBold>Gated Content & Exclusive Catalogs:</QnaBold> Admins can define and manage <QnaBold>exclusive product access</QnaBold> using Shopify B2B catalogs and custom rules. For example: Certified Contractors see specialized product collections unavailable to Non-Certified users. Gating can be configured manually, triggered from Docebo or Rewards data, or automated through WSO2 flows.</QnaParagraph>
                <QnaParagraph><QnaBold>Troubleshooting (Impersonation):</QnaBold> Shopify Plus does not allow direct impersonation of B2B users for security and audit-log integrity. To maintain full diagnostic visibility, GAF can rely on two secure, industry-standard options: 1) <QnaBold>Test Accounts</QnaBold> for each persona, and 2) a secure, audit-logged <QnaBold>emulation environment</QnaBold> from DG3.</QnaParagraph>

                <QnaSubheading>Content, Communication, and Approval Management</QnaSubheading>
                <QnaParagraph><QnaBold>On-the-Fly Content Edits:</QnaBold> Administrators can make <QnaBold>instant updates</QnaBold> to banners, copy, or layouts using Shopify’s <QnaBold>Online Store 2.0 editor</QnaBold>, Sections Everywhere, and Dynamic Blocks—no coding required. Edits can be previewed, scheduled, or published immediately.</QnaParagraph>
                <QnaParagraph><QnaBold>Approval Workflow:</QnaBold> Admins can define Approval Limits and manage the list of approvers who can authorize budget or co-branded material requests using Shopify Flow for approvals, alerts, and automated processes.</QnaParagraph>

                <QnaSubheading>Support and Training</QnaSubheading>
                <QnaParagraph><QnaBold>Admin Training:</QnaBold> DG3 provides specialized, hands-on training focused on empowering GAF administrators to operate confidently across every aspect of the Shopify Plus environment. Training is practical, scenario-based, and tailored to GAF's internal structure, provided through live sessions, recorded modules, and step-by-step documentation.</QnaParagraph>
                <div className="my-8">
                    <EcosystemChart />
                </div>
            </div>
        )
    },
    {
        id: 'qna-strategic-partnership',
        question: 'Strategic Partnership & Roadmap',
        answer: (
            <div>
                 <QnaSubheading>GAF-Initiated Feature Development</QnaSubheading>
                 <QnaParagraph>DG3 maintains a defined and responsive process for handling enhancement and net-new functionality requests from GAF. All requests are managed through a dedicated account team supported by DG3’s in-house Shopify development group.</QnaParagraph>
                 <QnaParagraph><QnaBold>Ownership and Intake:</QnaBold> GAF will be assigned a dedicated Account Project Manager (APM) who serves as the primary intake and communication point for all enhancement and feature requests. The APM coordinates directly with DG3’s dedicated Shopify Developer, who remains on standby to scope, prototype, and deploy updates quickly when approved.</QnaParagraph>
                 
                 <QnaSubheading>Process Overview and Typical Timeline</QnaSubheading>
                 <QnaParagraph>DG3 follows an Agile-inspired development framework to ensure enhancements are delivered efficiently and transparently. The process includes the following stages:</QnaParagraph>
                 <QnaList type='disc'>
                    <QnaListItem><QnaBold>Request Acknowledgment (Within 1 Business Day):</QnaBold> Upon receipt of a feature or enhancement request, the APM acknowledges it and logs it into DG3’s project management system for visibility and tracking.</QnaListItem>
                    <QnaListItem><QnaBold>Preliminary Evaluation and Scoping Call (Within 3–5 Business Days):</QnaBold> The APM and Shopify Developer review the request to determine feasibility, dependencies, and level of effort. A brief scoping session is scheduled with GAF stakeholders to confirm the requirement, desired outcomes, and any relevant user-experience considerations.</QnaListItem>
                    <QnaListItem><QnaBold>Documentation and Approval (Within 5–7 Business Days of Request):</QnaBold> Following the scoping session, DG3 prepares a concise Functional Specification Document (FSD) or User Story Summary, detailing objectives, acceptance criteria, and estimated development effort. This document is submitted to GAF for review and approval.</QnaListItem>
                    <QnaListItem><QnaBold>Development and Iteration (Based on Complexity):</QnaBold> Once approved, the feature is entered into the next available development sprint. Minor or low-impact items may be addressed via rolling releases (continuous deployment), while more complex items are scheduled within defined sprint cycles.</QnaListItem>
                    <QnaListItem><QnaBold>Review, Testing, and Deployment:</QnaBold> Completed work undergoes QA testing and is presented to GAF in a staging environment for validation. Upon acceptance, DG3 deploys the update to production, typically aligning with scheduled release windows to minimize disruption.</QnaListItem>
                 </QnaList>

                <QnaSubheading>Platform & Technology Ownership</QnaSubheading>
                <QnaParagraph><QnaBold>Software Ownership:</QnaBold> The MarketingHub platform is built on Shopify Plus, a proprietary enterprise commerce platform wholly owned and maintained by Shopify Inc. DG3 leverages Shopify Plus as the foundation to deliver a secure, scalable, and continually evolving technology environment. DG3 also develops private Shopify apps and extensions for the exclusive use of GAF.</QnaParagraph>
                <QnaParagraph><QnaBold>Development Team:</QnaBold> DG3's primary development and engineering teams are fully internal, consisting of certified Shopify Plus developers and full-stack engineers. DG3 is a Shopify Developer Partner, giving our team early access to beta features, technical documentation, and direct support.</QnaParagraph>
                <QnaParagraph><QnaBold>Technology Investment:</QnaBold> DG3 maintains a dedicated, full-time Shopify engineering team. Shopify itself invests heavily in its platform infrastructure and AI capabilities—approximately $2 billion in 2024, exceeding $2 billion again in 2025.</QnaParagraph>
            </div>
        )
    },
    {
        id: 'qna-asset-ownership',
        question: 'Fulfillment & Production Asset Ownership',
        answer: (
            <div>
                 <QnaParagraph><QnaBold>Print Production:</QnaBold> DG3 owns and operates all of its own print, finishing, warehouse and fulfilment operations, which assures brand quality and consistency. DG3 has one of the most diverse print and finishing operations in existence all under one roof.</QnaParagraph>
                 <QnaParagraph><QnaBold>Merchandise Decoration:</QnaBold> DG3 does not own or operate in-house decorating equipment by design. This strategic decision allows us to remain brand-agnostic and method-neutral, ensuring that every product is decorated using the process that delivers the highest quality outcome—not simply what happens to be available internally.</QnaParagraph>
                 <QnaParagraph>Rather than limiting production to a single in-house capability, DG3 partners with a network of state-of-the-art decorators across North America who specialize in embroidery, screen printing, laser engraving, heat transfer, sublimation, UV printing, and other advanced techniques. These partners are industry leaders, continuously investing in new technology, equipment, and decoration methods to improve precision, durability, and color accuracy.</QnaParagraph>
                 <QnaParagraph>This approach allows DG3 to:</QnaParagraph>
                 <QnaList type="disc">
                    <QnaListItem>Match each product with the most appropriate decoration method for its material, finish, and intended use.</QnaListItem>
                    <QnaListItem>Scale production quickly across multiple facilities without compromising quality or turnaround.</QnaListItem>
                    <QnaListItem>Access innovation faster—leveraging new printing technologies and eco-friendly processes as they emerge.</QnaListItem>
                 </QnaList>
            </div>
        )
    },
    {
        id: 'qna-fulfillment-fees-policies',
        question: 'Fulfillment, Fees, Policies & Savings',
        answer: (
            <div>
                <QnaSubheading>Fulfillment Warehouse Ownership</QnaSubheading>
                <QnaParagraph>DG3's warehouse operation is wholly owned and operated by DG3. DG3 leases the facilities in which we operate under a long-term lease. The warehouse and fulfillment facility is located in Secaucus, New Jersey.</QnaParagraph>
                <QnaSubheading>Fees</QnaSubheading>
                <QnaList type='disc'>
                    <QnaListItem>All standard set-up fees, decoration charges, and design services are included in the product unit price quoted for each item. DG3’s pricing model is intentionally all-inclusive to simplify the buying experience and eliminate hidden or unexpected costs.</QnaListItem>
                    <QnaListItem>In unique circumstances—such as complex customizations, special packaging requests, or third-party production services—DG3 will identify any non-standard fees in advance. These will be clearly itemized on the project estimate and require written pre-approval from GAF prior to any production or billing activity.</QnaListItem>
                </QnaList>
                <QnaSubheading>Account Management Fees</QnaSubheading>
                <QnaParagraph>Assuming the question refers to branded merchandise unit costs (e.g., Nike, Carhartt, YETI, etc.), DG3's procurement team purchases directly from authorized distributors at verified wholesale cost. We then add the cost to decorate with GAF's brand (eg, not just an unbranded Nike hat) and all related logistics costs for this process.</QnaParagraph>
                <QnaSubheading>Returns, Damages & Discrepancies Policy</QnaSubheading>
                <QnaParagraph>DG3 stands behind every product we produce and fulfill. We maintain a 100% product quality guarantee to ensure GAF and its end users receive items that meet expectations.</QnaParagraph>
                <QnaList type="disc">
                  <QnaListItem>If any product arrives damaged, defective, or incorrect, DG3 will promptly ship replacements or issue a full refund—whichever resolution GAF and/or the end user prefers.</QnaListItem>
                  <QnaListItem>All quality-related issues or damages must be reported within 30 days of product receipt to allow for timely investigation and resolution.</QnaListItem>
                  <QnaListItem>Co-branded, customized, or print-on-demand products are only eligible for return or replacement in the event of a verified quality issue or damage, unless otherwise preapproved by GAF.</QnaListItem>
                </QnaList>
                <QnaSubheading>Cost Savings</QnaSubheading>
                <QnaParagraph>We believe leveraging historic usage data will enable GAF to manage down program costs. We are prepared to support this with detailed analytics and option analysis. GAF literature demand can vary greatly depending on BU and event driven triggers. GAF merchandise demand can also vary greatly depending on GAF's brand penetration strategy. We currently work closely with GAF on these matters and will continue to do so. We believe the best approach is to establish quantifiable goals for the programs and they execute against.</QnaParagraph>
                <QnaParagraph><QnaBold>Print-on-Demand (POD):</QnaBold> This model reduces annual costs by eliminating obsolete inventory and warehouse storage fees. We analyze total cost per delivered communication, unit cost crossover points, product reengineering needs, and batching strategies to optimize POD savings.</QnaParagraph>
                <QnaParagraph><QnaBold>Tiered Pricing:</QnaBold> We recommend a tiered, non-retroactive rebate model that applies discounts in real time as spending tiers are reached during an annual period.</QnaParagraph>
                <QnaTable headers={["Spend Range", "Discount on Spend"]} rows={[
                  ["$0MM-$4MM", "0%"],
                  ["$4MM-$6MM", "1.5%"],
                  ["$6MM-$8MM", "2.0%"],
                  ["$8MM-$10MM", "2.5%"],
                  ["$10MM +", "3.0%"],
                ]}/>
            </div>
        )
    },
    {
        id: 'qna-multi-site-architecture',
        question: 'Multi-Site Architecture',
        answer: (
            <div>
                <QnaParagraph>Shopify Plus is uniquely equipped to support enterprise-grade, multi-brand organizations through its Shopify Organizations Admin, shared data model, and modular storefront architecture — enabling GAF to manage a portfolio of distinct storefronts under one unified environment with centralized control, unified analytics, and shared product data.</QnaParagraph>
                <QnaSubheading>Multi-Site Architecture</QnaSubheading>
                <QnaParagraph>Shopify Plus natively supports a true multi-site ecosystem where a single organization can operate multiple branded storefronts (e.g., GAF, Siplast, FT Synthetics) all tied to one administrative backbone. Each storefront can have its own theme, URL, and localized content—yet all remain managed under the same umbrella organization.</QnaParagraph>
                <QnaSubheading>Centralized Product Catalog</QnaSubheading>
                <QnaParagraph>Shopify Plus supports a single source of truth for products and SKUs across all storefronts. Using Shopify’s Product Publishing Control and Sales Channels, GAF can define the entire product catalog once and decide which SKUs appear on which storefronts or channels, assign product visibility based on brand, geography, or audience, and centrally manage pricing, imagery, inventory, and metadata updates that automatically cascade across all relevant storefronts.</QnaParagraph>
                <QnaSubheading>Branding and Cost</QnaSubheading>
                <QnaParagraph>Each storefront can be fully skinned to reflect its unique brand identity using Shopify Themes and Online Store 2.0 architecture. There is no separate software license required for each brand site under Shopify Plus. Additional storefronts may incur a modest per-store setup fee (typically around $250/month per additional store, billed by Shopify), but they all share the same core infrastructure, user base, and support tier.</QnaParagraph>
            </div>
        )
    },
    {
        id: 'qna-gen-ai-strategy',
        question: 'Generative AI (GenAI) Strategy',
        answer: (
            <div>
                <QnaParagraph>Shopify Plus offers one of the most advanced, production-ready AI stacks in commerce—where Generative AI is already embedded across content creation, image generation, search, and analytics. But the platform isn’t stopping there. Over the next 12–24 months, Shopify is evolving from GenAI into <QnaBold>agentic intelligence:</QnaBold> AI that not only responds to prompts, but actively identifies opportunities, recommends strategies, and takes action.</QnaParagraph>
                <QnaSubheading>Current AI Implementation: Features Delivering Value Today</QnaSubheading>
                <QnaList type="disc">
                  <QnaListItem><QnaBold>Shopify Magic:</QnaBold> Instantly generate product descriptions and SEO copy, supports visual media creation, and can assist in theme customization.</QnaListItem>
                  <QnaListItem><QnaBold>Shopify Sidekick:</QnaBold> A built-in conversational AI assistant that understands natural language, reads real-time store data, and performs multi-step reasoning.</QnaListItem>
                  <QnaListItem><QnaBold>Custom Skills Framework:</QnaBold> Create and reuse advanced prompt sequences as Skills tailored to GAF-specific use cases.</QnaListItem>
                  <QnaListItem><QnaBold>Semantic Search and Personalization:</QnaBold> AI-powered semantic search interprets the intent behind natural-language queries to improve product discoverability.</QnaListItem>
                </QnaList>
                <QnaSubheading>GenAI Roadmap: Strategy and Development Over the Next 12-24 Months</QnaSubheading>
                 <QnaList type="disc">
                  <QnaListItem><QnaBold>Agentic Commerce AI:</QnaBold> Sidekick is evolving from a responsive assistant into a proactive agent that will detect anomalies, recommend corrective actions, and execute them automatically.</QnaListItem>
                  <QnaListItem><QnaBold>Real-Time Data Synthesis:</QnaBold> Users will be able to ask complex, cross-functional questions and receive AI-generated reports complete with data visualizations.</QnaListItem>
                  <QnaListItem><QnaBold>Unified Data Intelligence:</QnaBold> AI can reason across all your data without the limitations of siloed systems.</QnaListItem>
                </QnaList>
                <QnaSubheading>Ethical Use and Data Security</QnaSubheading>
                <QnaParagraph>Shopify's approach to AI is governed by enterprise-grade policies and a strong ethical charter, including data isolation by default, full regulatory compliance (GDPR, CCPA, SOC 2), transparency and merchant control, and a responsible AI charter.</QnaParagraph>
            </div>
        )
    },
    {
        id: 'qna-ariba-integration',
        question: 'Ariba Integration',
        answer: (
            <div>
                <QnaParagraph>Yes. Integration with SAP Ariba will be delivered as part of the <QnaBold>DG3 Integration Layer powered by WSO2</QnaBold>, enabling secure, standards-based connectivity between Shopify Plus and GAF’s enterprise procurement environment. This architecture supports a full <QnaBold>PunchOut workflow</QnaBold>.</QnaParagraph>
                <QnaSubheading>How It Works</QnaSubheading>
                <QnaList ordered>
                    <QnaListItem><QnaBold>Federated Identity and Access Alignment:</QnaBold> GAF will continue to manage its existing Okta → Ariba SSO relationship. The DG3 Integration Layer will extend that authenticated session downstream, using WSO2 to securely broker identity and transaction data between Ariba and Shopify Plus.</QnaListItem>
                    <QnaListItem><QnaBold>Ariba Level 2 PunchOut Workflow:</QnaBold> DG3 will implement a Level 2 (L2) PunchOut integration, enabling GAF’s Shopify catalog items to be discoverable within the Ariba procurement interface. When selected, the user is directed to the Shopify storefront, where they can configure items, then return the completed cart to Ariba for requisition and approval.</QnaListItem>
                    <QnaListItem><QnaBold>WSO2 Integration Layer for Transaction Exchange:</QnaBold> Once the requisition is approved, Ariba transmits a cXML purchase order to the DG3 Integration Layer, where WSO2 translates it into Shopify’s native Order API structure.</QnaListItem>
                    <QnaListItem><QnaBold>Authentication Continuity and Compliance:</QnaBold> By leveraging existing buyer-side identity management (Okta + Ariba) and extending it securely through WSO2, DG3 ensures a compliant, auditable transaction chain.</QnaListItem>
                </QnaList>
            </div>
        )
    },
    {
        id: 'qna-supply-chain-risk',
        question: 'Supply Chain Risk Management',
        answer: (
            <div>
                <QnaSubheading>Material Shortages</QnaSubheading>
                <QnaParagraph>DG3 mitigates the risk of material shortages through a combination of strategic vendor diversification and forecast-based procurement planning. This includes multi-supplier sourcing, forecast and inventory alignment, early warning communication from suppliers, and recommending material alternatives when applicable.</QnaParagraph>
                <QnaSubheading>Freight Delays</QnaSubheading>
                <QnaParagraph>DG3 is required to leverage GAF's negotiated UPS relationship. DG3 minimizes freight-related risk through a combination of flexible logistics partnerships and real-time shipment visibility. This includes multiple carrier relationships, a domestic + overseas fulfillment balance, and active freight monitoring.</QnaParagraph>
                <QnaSubheading>Typical Lead Times</QnaSubheading>
                <QnaTable headers={["Category", "Standard Lead Time", "Expedited Option (if available)"]} rows={[
                  ["Inventory Print and Promo (In-Stock Items)", "1-3 business days", "Same day / next say shipping"],
                  ["Standard Promotional Products not in inventory", "5-10 business days", "1-5 business days"],
                  ["Apparel (Decorated on Demand)", "7-10 business days", "3-7 business days"],
                  ["Custom or Overseas Items", "20-60 calendar days (transit time not included)", "7-30 calendar days (transit time not included)"],
                  ["Print-on-Demand", "3-7 business days", "2-5 business days"],
                ]}/>
            </div>
        )
    },
    {
        id: 'qna-canada-operations',
        question: 'Canadian Operations',
        answer: (
            <div>
                <QnaParagraph>DG3 can fully support GAF’s Canadian operations through a <QnaBold>dual-sourcing and regional fulfillment model</QnaBold> designed to reduce cost, improve speed, and eliminate unnecessary cross-border complexity. The platform is architected to make cross-border commerce feel like a domestic experience by abstracting away the financial, compliance, and logistical complexities of international trade.</QnaParagraph>
                <QnaSubheading>1. Simplified Global Commerce with Shopify Markets Pro</QnaSubheading>
                <QnaParagraph>Shopify Markets Pro automates many of the complexities associated with selling internationally, including localized pricing and currency conversion, automated tax and duty calculation, regional compliance, and B2B enablement for contractor programs in Canada.</QnaParagraph>
                <QnaSubheading>2. Product and Catalog Segmentation by Region</QnaSubheading>
                <QnaParagraph>Shopify Plus allows product visibility and availability to be dynamically permissioned by customer location or company profile, enabling localized product sets and regional fulfillment optimization.</QnaParagraph>
            </div>
        )
    },
    {
        id: 'qna-required-extensions',
        question: 'Required Extensions',
        answer: (
            <div>
                <QnaParagraph>We anticipate leveraging a combination of Shopify-developed applications, DG3-developed extensions, and a limited number of trusted third-party integrations. We expect to incorporate:</QnaParagraph>
                <QnaList type='disc'>
                    <QnaListItem><QnaBold>Official Shopify Apps</QnaBold> to extend native platform functionality.</QnaListItem>
                    <QnaListItem><QnaBold>Locksmith (third-party)</QnaBold> for granular access control over products, pages, and collections.</QnaListItem>
                    <QnaListItem><QnaBold>CHILI GraFx</QnaBold> for premium creative customization and digital asset personalization.</QnaListItem>
                    <QnaListItem><QnaBold>UPS Official App (or equivalent)</QnaBold> for shipping rate and label management.</QnaListItem>
                </QnaList>
                <QnaParagraph>All anticipated extension costs have been fully contemplated within our proposed pricing.</QnaParagraph>
                <QnaParagraph>Our guiding implementation hierarchy is as follows:</QnaParagraph>
                <QnaList ordered>
                  <QnaListItem>Shopify native functionality (preferred wherever possible)</QnaListItem>
                  <QnaListItem>DG3-developed extensions or middleware to extend the platform securely</QnaListItem>
                  <QnaListItem>Third-party extensions only where functionality cannot be achieved natively or through DG3 development</QnaListItem>
                </QnaList>
            </div>
        )
    },
    {
        id: 'qna-implementation-experience',
        question: 'Platform Implementation Experience',
        answer: (
            <div>
                <QnaParagraph>DG3 has two fully deployed Shopify front ends seamlessly integrated into client and vendor (DG3 and 3rd party systems). One is a political action committee and one is a for non-profit educational corporation. Neither agree to be disclosed.</QnaParagraph>
                <QnaParagraph>It is critical to highlight the context of our selection of Shopify for this solution (with DG3 as an integrator and managed service provider). Throughout our research process we determined that there was not a suitable platform that would support GAF's need, that homegrown and off the shelf end to end solutions are costly, cumbersome, force significant function tradeoffs and take up to years to deploy. We identified that the Shopify layer is the safest, most advanced and most scalable commerce front end but that we would need to develop an integration layer and vendor system integrations. That is the genesis of our proposal.</QnaParagraph>
                <QnaParagraph>Shopify Plus is intuitive and robust and highly ubiquitous, making deployments and integrations efficient, scalable and achievable by most people. A significant amount of our effort and focus under this engagement is the WSO2 integration layer and integration with vendor (DG3 and third party) systems. This is the key focus to ensure closed loop and end-to-end execution.</QnaParagraph>
            </div>
        )
    },
    {
        id: 'qna-admin-model',
        question: 'Administrative Model',
        answer: (
            <div>
                <QnaParagraph>DG3's understanding of GAF's RFP is that GAF seeks a high degree of administrative control and self-service functionality. Our model provides resources to perform any task that GAF assigns to us.</QnaParagraph>
                <div className="my-8">
                  <EcosystemChart />
                </div>
                <QnaParagraph>We interpret the GAF Administrator role as focusing on <QnaBold>day-to-day operational control</QnaBold>, enabling GAF to make routine updates without requiring DG3 intervention.</QnaParagraph>
                <QnaSubheading>Typical GAF-administered activities would include:</QnaSubheading>
                <QnaList type='disc'>
                    <QnaListItem>Activating and deactivating SKUs or promotional items.</QnaListItem>
                    <QnaListItem>Modifying product visibility, limits, or eligibility by audience or region.</QnaListItem>
                    <QnaListItem>Approving orders placed on hold for budget or policy reasons.</QnaListItem>
                    <QnaListItem>Updating product imagery, PDFs, or descriptive content.</QnaListItem>
                </QnaList>
                <QnaParagraph>DG3, in contrast, would assume responsibility for <QnaBold>structural, system-wide, and technically sensitive activities</QnaBold>.</QnaParagraph>
                <QnaSubheading>DG3-administered activities would include:</QnaSubheading>
                 <QnaList type='disc'>
                    <QnaListItem>Managing and maintaining integrations within the DG3 Integration Layer powered by WSO2.</QnaListItem>
                    <QnaListItem>Configuring or modifying workflows that impact multiple stores or user roles.</QnaListItem>
                    <QnaListItem>Performing app and plugin management, version upgrades, and Shopify API changes.</QnaListItem>
                    <QnaListItem>Overseeing security patches, environment performance, and disaster-recovery protocols.</QnaListItem>
                 </QnaList>
                <QnaSubheading>Self-Service vs. Vendor-Managed Model</QnaSubheading>
                <QnaParagraph>DG3 fully supports a <QnaBold>hybrid administrative model</QnaBold>. The platform is being built to be business-user-friendly and to empower GAF's administrators with as much autonomy as they choose to exercise. In practice, this means GAF can execute most day-to-day updates independently, yet rely on DG3 for complex requests, overflow assistance, or high-impact configuration changes.</QnaParagraph>
            </div>
        )
    },
    {
        id: 'qna-pricing-allocation',
        question: 'Pricing & Task Allocation',
        answer: (
            <div>
                <QnaParagraph>Our cost is fully transparent. We have proposed a single end-to-end annual (billed monthly) support fee to ensure end-to-end success in the platform across all three layers of the system. This includes an end-to-end program administrator and one dedicated development resource to ensure GAF system integrations and vendor system integrations with the WS02 layer and WS02 later integration with Shopify. The fees for these two resources are $130,000 and $40,000 annually (or $10,833 and $3,333 monthly). This dedicated monthly retainer across all activities for the platform is based on our current knowledge of GAF operations. It includes all interfacing with GAF administrators, oversight of DG3 internal resources, management of linkages between the systems and actual operational execution of the products and services. This replaces any current support and maintenance fees charged by DG3 to GAF. There are no additional fees or hidden fees. DG3 assumes full responsibility for delivering against GAF requirements without additional fees.</QnaParagraph>
                <QnaParagraph>Separate from these end-to-end process management and technical management fees, DG3's platform licensing fee contemplates and includes an appropriate level of support hours for specific application customization on an ongoing basis for SME based needs (Shopify +, Chili, etc.). GAF will not be responsible for any additional fees. Ordinarily this would be the Annual Support and Maintenance fee of 20%-25% on top of a traditional platform license fee. To simplify our proposal, we have consolidated fees into a single annual platform fee (billed monthly).</QnaParagraph>
                <div className="my-8">
                  <EcosystemChart />
                </div>
            </div>
        )
    }
];

export const MAIN_DEMO_VIDEO: VideoDetail = {
  id: 'main-demo-video',
  label: 'Comprehensive Video Walkthrough (34 min)',
  shortLabel: 'Full Demo',
  embedUrl: 'https://www.loom.com/embed/79f1615ec9c34f869acddad5ce3fe2cc'
};

export const MOBILE_CONTRACTOR_VIDEOS: VideoDetail[] = [
  { id: 'mobile-browsing-through-checkout', label: 'Mobile: Browsing Through Checkout', shortLabel: 'Browsing Through Checkout', embedUrl: 'https://www.loom.com/embed/8d37f88d98514704b8fe440c187aab2b' },
];

export const MOBILE_ADMIN_CAPABILITIES: Capability[] = [
  {
    id: 'mobile-admin-content',
    title: 'User & Content Management (Mobile)',
    description: '',
    details: [],
    videos: [
      { id: 'mobile-admin-products', label: 'Mobile Admin: Adding Products', shortLabel: 'Adding Products', embedUrl: 'https://www.loom.com/embed/484a2c1334d041c99790ece436a0adb0' },
    ],
  },
  {
    id: 'mobile-admin-approvals',
    title: 'Approvals (Mobile)',
    description: '',
    details: [],
    videos: [
      { id: 'mobile-admin-budgets', label: 'Mobile Admin: Approving Over-Budget or Co-branded Materials', shortLabel: 'Approving Materials', embedUrl: 'https://www.loom.com/embed/d2a3ab1ca7ba4a5f9a13f8a4cd6b525e' },
    ],
  },
  {
    id: 'mobile-admin-analytics',
    title: 'Analytics & Reporting (Mobile)',
    description: '',
    details: [],
    videos: [
      { id: 'mobile-admin-reporting', label: 'Mobile Admin: Reporting', shortLabel: 'Reporting', embedUrl: 'https://www.loom.com/embed/8832a7dc30664610b8d8c2870e48b753' },
    ],
    exploreFurtherVideos: [
      { id: 'mobile-admin-sidekick', label: 'Mobile Admin: AI Sidekick', shortLabel: 'AI Sidekick', embedUrl: 'https://www.loom.com/embed/aa41848f13144340bc251a2e0e039e2a' },
      { id: 'mobile-admin-liveview', label: 'Mobile Admin: Live View', shortLabel: 'Live View', embedUrl: 'https://www.loom.com/embed/db9472f55f24402a956835f61a735b5d' },
    ]
  }
];


export const SECTIONS: Section[] = [
  { id: 'introduction', title: 'Video Walkthrough', icon: <HomeIcon /> },
  { 
    id: 'qna', 
    title: 'Your Questions Answered', 
    icon: <HelpCircleIcon />,
    subsections: QNA_DATA.map(q => ({ id: q.id, title: q.question })),
  },
  { id: 'integration-layer', title: 'The Foundation: Integration', icon: <LayersIcon /> },
  { 
    id: 'end-user-exp', 
    title: 'End-User Experience', 
    icon: <UserIcon />,
    subsections: END_USER_CAPABILITIES.map(c => ({ id: c.id, title: (c.title.includes(' — ') ? c.title.split(' — ')[1].trim() : c.title).split(' & ')[0].replace(/, /g, ' & ') }))
  },
  { 
    id: 'admin-exp', 
    title: 'Admin & Analytics', 
    icon: <AdminIcon />,
    subsections: ADMIN_CAPABILITIES.map(c => ({ id: c.id, title: c.title.split(' & ')[0].replace(/, /g, ' & ') }))
  },
  { 
    id: 'support', 
    title: 'Partnership & Vision', 
    icon: <HandshakeIcon />,
    subsections: [
      { id: 'support-vision-ecosystem', title: 'Vision & Ecosystem' },
      { id: 'support-team', title: 'Your Dedicated Team' },
      { id: 'support-timeline', title: 'Implementation Timeline' },
      { id: 'support-strategy', title: 'Strategy & Approach' },
    ]
  },
  { id: 'mobile-exp', title: 'Mobile Experience', icon: <SmartphoneIcon /> },
];

export const TEAMS_DATA: Team[] = [
    {
        id: 'team-leadership',
        title: 'Your Account Leadership Team',
        members: [
            { name: 'Kyle Drake', title: 'Enterprise Account Director', description: "Oversees execution of people, process, technology, product and pricing program for GAF. Fully dedicated to GAF, serving as the voice of the client within DG3.", imageComponent: <TeamMemberImage src="/images/kyle_drake.jpeg" alt="Kyle Drake" /> },
            { name: 'Tom Hunter', title: 'Strategic Advisor', description: "Provides institutional knowledge and advice, ensures continuity of product workflow, assists EAM when EAM requires.", imageComponent: <TeamMemberImage src="/images/tom_hunter.jpeg" alt="Tom Hunter" /> },
            { name: 'Justine Doherty', title: 'Launch Project Manager & In-service Program Manager', description: "Dedicated to GAF and oversees end-to-end launch program and ongoing support program covering systems, products, services and spanning strategy, training and ongoing execution.", imageComponent: <TeamMemberImage src="/images/justine_doherty.png" alt="Justine Doherty" /> },
            { name: 'Kathy Aquirre', title: 'Account Coordinator, Analyst', description: "Supports all administrative functions required for GAF, including reconciliations, documentation, pricing and billing processes.", imageComponent: <TeamMemberImage src="/images/kathy_aquirre.png" alt="Kathy Aquirre" />  },
        ]
    },
    {
        id: 'team-tech',
        title: 'Your Technology Deploy/Maintain Team',
        members: [
            { name: 'Eric Genova', title: 'DG3 Technology & Services Leader', description: 'Technical, platform and professional services leader. Directly steering planning and execution of platform deployment.', imageComponent: <TeamMemberImage src="/images/eric_genova.jpg" alt="Eric Genova" /> },
            { name: 'Technical Developer', title: '', description: 'Dedicated data warehouse, API, GAF integrations, vendor integrations and DG3 systems integration developer.', imageComponent: <TeamMemberImage src="/images/dev_team.jpg" alt="Technical Developer" />, isCompact: true },
            { name: 'Christina Naili', title: 'Project Manager', description: 'Specializing in deploying enterprise commerce solutions. Launch and integrations specialist for all systems. Drives technical project and all launch and ongoing development efforts.', imageComponent: <TeamMemberImage src="/images/christina_naili.jpg" alt="Christina Naili" /> },
            { name: 'Platform Developer', title: '', description: 'Certified expert platform integrator and customizer.', imageComponent: <TeamMemberImage src="/images/platform_developer.jpg" alt="Platform Developer" />, isCompact: true },
        ]
    },
    {
        id: 'team-ops',
        title: 'Your Frontline Operational Support',
        members: [
            { name: 'Nick Roberts', title: 'Promotional Lead', description: 'Deploys team to support all promotional, BiaB, and other promotional and merchandise strategy and execution.', imageComponent: <TeamMemberImage src="/images/nick_roberts.jpg" alt="Nick Roberts" /> },
            { name: 'Team Photos', title: '', description: '', imageComponent: <div/>, isCompact: true, additionalImages: [<TeamPhotoImage src="/images/liah_avegno.jpg" alt="Liah Avegno" />, <TeamPhotoImage src="/images/operational_support_1.jpg" alt="Operational Support" />, <TeamPhotoImage src="/images/operational_support_2.jpg" alt="Operational Support" />] },
            { name: 'JoAnn Smolen', title: 'Print Lead', description: 'Oversees all premedia and print production needs and ensures alignment and execution. Cross trains backup team.', imageComponent: <TeamMemberImage src="/images/joann_smolen.png" alt="JoAnn Smolen" /> },
            { name: 'TJ Taylor', title: 'Fulfillment Lead', description: 'Oversees all fulfillment execution across all fulfilled products (lit, merch, BiaB).', imageComponent: <TeamMemberImage src="/images/tj_taylor.jpeg" alt="TJ Taylor" /> },
        ]
    },
    {
        id: 'team-exec',
        title: 'Your Executive Support Team',
        members: [
            { name: 'Joe Lindfeldt', title: 'Chief Revenue Officer', description: 'Supports alignment and allocation of resources for execution of GAF requirements across sales and services parts of DG3.', imageComponent: <TeamMemberImage src="/images/joe_lindfeldt.jpg" alt="Joe Lindfeldt" /> },
            { name: 'Pat Caragliano', title: 'Chief Operations Officer', description: 'Ensures delivery of on-time and error-free performance for items produced or managed by DG3.', imageComponent: <TeamMemberImage src="/images/pat_caragliano.jpg" alt="Pat Caragliano" /> },
            { name: 'Mike Weeks', title: 'Director of Strategic Solutions Group', description: 'Identifies, sources and oversees supply of external products and services in support of GAF requirements.', imageComponent: <TeamMemberImage src="/images/mike_weeks.png" alt="Mike Weeks" /> },
            { name: 'Mike Roth', title: 'Chief Financial Officer', description: 'Oversees team delivery of seamless financial integrations and evaluates strategic product requirements for GAF (product financing, vendor alignments).', imageComponent: <TeamMemberImage src="/images/mike_roth.jpg" alt="Mike Roth" /> },
            { name: 'Steve Babat', title: 'Chief Executive Officer', description: 'Supports entire team and drives alignment towards all client requirements across our enterprise.', imageComponent: <TeamMemberImage src="/images/steve_babat.jpg" alt="Steve Babat" /> },
        ]
    }
];

export const APPROACH_POINTS_DATA: ApproachPoint[] = [
    { title: 'People', icon: <UserIcon className="w-8 h-8"/>, points: ["Optimal mix of strategy, technology and operational staff for GAF—we won't leave the backend to chance.", "You know our abilities and our team.", "Supplemental on-site resource may be a valuable option to GAF.", "Dynamic go-forward GAF support team with future-oriented leadership."] },
    { title: 'Process', icon: <ProcessIcon className="w-8 h-8"/>, points: ["Decades of institutional knowledge.", "Full DG3 team in place to facilitate end-to-end process (creating an offer requires creating a product).", "Transparent and low-burden transition of operational data."] },
    { title: 'Technology', icon: <CodeIcon className="w-8 h-8"/>, points: ["The platform is built on the world's largest commerce enablement engine.", "$2BN+ per year in investment, cannot be matched by integrated providers.", "Migrating from an order enablement posture to true UX-driven commerce.", "API Brokers for seamless linking to other vendors (we will manage the process).", "Highly secure."] },
    { title: 'Product', icon: <ProductIcon className="w-8 h-8"/>, points: ["Continued product financing support (system selling, merch, print).", "Color and brand management.", "Integrated manufacturing systems.", "Exceptional on-time, error-free performance."] },
    { title: 'Strategy', icon: <StrategyIcon className="w-8 h-8"/>, points: ["This is your platform; we are enabling it and supporting you.", "Vendor agnostic deployment.", "You've seen what we have done in 3 weeks, imagine what we can do in months.", "Immediately relieves several current choke points.", "Significant improvement in data to support decisions.", "Would DG3 assumption of execution risk be valuable?"] },
];

export const WHY_DG3_POINTS_DATA: ChoicePoint[] = [
    { title: 'Safe Choice', icon: <CheckCircleIcon className="w-8 h-8 text-green-500"/>, points: ["We understand your expectations", "We understand your brand", "We have a highly vested interest in your success", "Our post-scope budget will be guaranteed (no surprises, no ranges)"] },
    { title: 'Innovative Choice', icon: <LightbulbIcon className="w-8 h-8 text-green-500"/>, points: ["Best in class UI/UX storefront", "Top rated modular integrations", "No forcing GAF into our on-shelf-shelf product choices", "Benefits of continuous upgrade cycles"] },
    { title: 'Smart Choice', icon: <BrainIcon className="w-8 h-8 text-green-500"/>, points: ["Seamless data broker integration with DG3 print, fulfillment, merch enabling technology", "Lower risk implementation", "We expect new tool set to return significant time to GAF team, enabling focus on more valuable activity"] },
];

export const KEY_CONSIDERATIONS_DATA: ConsiderationPoint[] = [
    { text: 'OU / BU / RC Code Support' },
    { text: 'UPS pull through for allocation and tracking' },
    { text: 'Expense reimbursement allocations depending on product funding' },
    { text: 'Asset strategy and rationalization' },
    { text: 'End to end management of product (activate in storefront vs. at vendor site)' },
];

export const ECOSYSTEM_INTEGRATIONS: EcosystemIntegration[] = [
    { name: 'Shopify', category: 'Commerce Platform', icon: <ShoppingBagIcon /> },
    { name: 'SSO', category: 'Okta', icon: <ShieldIcon /> },
    { name: 'Tableau', category: 'Analytics', icon: <TrendingUpIcon /> },
    { name: 'Docebo', category: 'Training', icon: <PlaybookIcon /> },
    { name: 'Monarch', category: 'DG3 System', icon: <BoxIcon /> },
    { name: 'Rewards', category: 'GAF Bucks', icon: <TagIcon /> },
    { name: 'DAM', category: 'Digital Assets', icon: <ImageIcon /> },
    { name: 'BigQuery', category: 'Data Warehouse', icon: <DatabaseIcon /> },
    { name: 'Propago', category: 'Warehouse Management', icon: <TruckIcon /> },
    { name: 'Chili GraFx', category: 'Variable Literature', icon: <FileTextIcon /> },
];

export const FUTURE_ECOSYSTEM_INTEGRATIONS: EcosystemIntegration[] = [
    { name: 'ServiceTitan', category: 'Closed-Loop Marketing & ROI', icon: <LinkIcon /> },
    { name: 'QuickMeasure', category: 'Automatic Marketing Kits', icon: <LinkIcon /> },
    { name: 'ScopeConnect', category: 'Claim Response Kits', icon: <LinkIcon /> },
    { name: 'WeatherHub', category: 'Storm Response Activation', icon: <CloudIcon /> },
    { name: 'TakeOff', category: 'New Construction Kits', icon: <MapPinIcon /> },
    { name: 'Present', category: 'Post-Presentation Follow-Up', icon: <MapPinIcon /> },
    { name: 'Smart Mailer', category: 'Targeted Direct Mail', icon: <MapPinIcon /> },
];

export const FAQ_DATA: FAQItem[] = [
    {
        question: "What is the GAF Marketing Hub?",
        answer: "The GAF Marketing Hub is a centralized platform designed to provide GAF contractors, territory managers, and internal teams with all the marketing assets, tools, and analytics they need. It streamlines co-branding, ordering of physical and digital assets, and provides robust reporting capabilities, all powered by a modern, integrated technology stack."
    },
    {
        question: "What is the DG3 Integration Layer?",
        answer: "The DG3 Integration Layer is the core technology that connects all of GAF's systems (like Okta for SSO, BigQuery for data, and the Rewards Program) with the Shopify-powered storefront. It acts as the connective tissue, ensuring seamless data flow and a unified experience across the entire ecosystem."
    },
    {
        question: "Is the platform mobile-friendly?",
        answer: "Yes. The platform is designed with a mobile-first philosophy. It provides a full-fidelity experience on any device for both end-users (contractors) and administrators, without any compromise in functionality."
    },
    {
        question: "How are budgets and approvals managed?",
        answer: "GAF administrators can assign budgets by user, region, or role directly in the admin panel. The system automatically triggers approval workflows for orders that exceed budget limits or for co-branded materials, ensuring both financial and brand control."
    },
    {
        question: "What kind of analytics are available?",
        answer: "The platform offers a dual approach to analytics: real-time, integrated reporting within the admin panel for operational insights, and seamless data flow into Tableau for high-level business intelligence. This allows for deep dives into KPIs like order value, product performance, and regional trends."
    }
];

export const FEATURES: Feature[] = [
    {
        id: 'login-personalization',
        title: 'Login and Personalization',
        description: "Demonstrates the seamless login process using GAF's Okta SSO. The dashboard and content are dynamically personalized for a President's Club Contractor, tailoring their view based on certification, location, and other attributes.",
    },
    {
        id: 'unified-shopping',
        title: 'Unified Shopping Experience',
        description: 'A walkthrough of searching and browsing for different asset types. A print brochure, a merchandise item (e.g., a hat), and a digital ad are added to a single shopping cart, managed through one unified checkout experience.',
    },
    {
        id: 'customization-cobranding',
        title: 'Customization & Co-Branding',
        description: 'Shows the co-branding tool customizing a print flyer and a digital social media graphic with a contractor\'s logo and contact information. Includes a real-time preview and a technical validation error for an incorrectly formatted logo.',
    },
    {
        id: 'streamlined-checkout',
        title: 'Streamlined Checkout',
        description: 'From the shopping cart, this demonstrates the checkout process, including the application of multiple payment methods in a single transaction by applying rewards points and paying the balance with a credit card.',
    },
    {
        id: 'user-content-management',
        title: 'User and Content Management',
        description: "Logging in as a GAF administrator, this shows how a new marketing asset like a promotional banner can be easily uploaded and published live to the site, demonstrating GAF's ability to manage the platform without vendor intervention.",
    },
    {
        id: 'budget-management',
        title: 'Budget Management & Approvals',
        description: 'This module demonstrates how a budget can be assigned to a specific user or a sales region. It then shows a purchase approval workflow being triggered when a user exceeds their spend limit, including the resulting approval notification.',
    },
    {
        id: 'analytics-reporting',
        title: 'Analytics & Reporting',
        description: "A look at a live, real-time dashboard from a GAF SKU owner's perspective. It shows key data points like order amount, who is ordering, a recommended reorder point, regional demand trends, and the process for exporting raw data.",
    }
];

export const ROLES: Role[] = [
    {
        id: 'contractor',
        name: 'Contractor',
        description: 'The primary end-user. Accesses marketing materials, co-brands assets, and places orders.',
        icon: <UserIcon />,
        featureSequence: ['login-personalization', 'unified-shopping', 'customization-cobranding', 'streamlined-checkout'],
    },
    {
        id: 'admin',
        name: 'GAF Administrator',
        description: 'Manages the platform, uploads content, sets budgets, and oversees user activity.',
        icon: <AdminIcon />,
        featureSequence: ['user-content-management', 'budget-management', 'analytics-reporting'],
    },
    {
        id: 'sku-owner',
        name: 'SKU Owner',
        description: 'Monitors inventory, analyzes product performance, and reviews sales data and trends.',
        icon: <PlaybookIcon />,
        featureSequence: ['analytics-reporting'],
    },
];