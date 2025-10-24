
import React from 'react';
// FIX: Import Feature and Role types to support the new constants.
import type { Section, Capability, StrategicPoint, Feature, Role, CapabilityDetail, VideoDetail, Team, ApproachPoint, ChoicePoint, ConsiderationPoint, EcosystemIntegration } from './types';

// Icons
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const UserIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const AdminIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2.4l-.15.1a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1 0 2.4l.15.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const HandshakeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"></path><path d="M13 17a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-5"></path><path d="M12 12.5a2.5 2.5 0 0 1-2.5-2.5V7"></path><path d="M14.5 10a2.5 2.5 0 0 0-2.5 2.5v3.5"></path></svg>;
const SmartphoneIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;
const PlaybookIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M14 2v20"/></svg>;
const SupportIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>;

// Detail Icons
const DataIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>;
const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
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

// Icons for Part 3
const PersonPlaceholderIcon = (props: React.HTMLAttributes<HTMLDivElement>) => <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-full" {...props}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>;
const GroupPlaceholderIcon = (props: React.HTMLAttributes<HTMLDivElement>) => <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg" {...props}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>;
const ProcessIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 6h16M4 12h16M4 18h16"/></svg>;
const ProductIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const StrategyIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="m9 12 2 2 4-4"/></svg>;
const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>;
const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const LightbulbIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 3.04 1.63 5.36 3.5 6.5.6.36.5 1.5 1.5 1.5h4c1 0 .9-1.14 1.5-1.5C17.37 14.36 19 12.04 19 9a7 7 0 0 0-7-7z"/></svg>;
const BrainIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7h0A2.5 2.5 0 0 1 7 4.5v0A2.5 2.5 0 0 1 9.5 2m0 5A2.5 2.5 0 0 1 12 9.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 7 9.5v0A2.5 2.5 0 0 1 9.5 7m5 0A2.5 2.5 0 0 1 17 9.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 12 9.5v0A2.5 2.5 0 0 1 14.5 7m0-5A2.5 2.5 0 0 1 17 4.5v0A2.5 2.5 0 0 1 14.5 7h0A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 14.5 2m-5 12A2.5 2.5 0 0 1 12 16.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 7 16.5v0a2.5 2.5 0 0 1 2.5-2.5m5 0A2.5 2.5 0 0 1 17 16.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 12 16.5v0a2.5 2.5 0 0 1 2.5-2.5m0 5A2.5 2.5 0 0 1 17 21.5v0a2.5 2.5 0 0 1-2.5 2.5h0a2.5 2.5 0 0 1-2.5-2.5v0A2.5 2.5 0 0 1 14.5 19m-5-2.5A2.5 2.5 0 0 1 7 14v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 2 14v0a2.5 2.5 0 0 1 2.5-2.5h0a2.5 2.5 0 0 1 2.5 2.5Z"/></svg>;
const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const ShoppingBagIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
const DatabaseIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const CloudIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
const TrendingUpIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const BoxIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const TruckIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
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
            { id: 'video-power-buyer', label: 'Video: Certified Contractor Experience', shortLabel: 'Cert. Contractor', videoId: 'essentials-01-cert-contractor' },
            { id: 'video-certified-contractor', label: 'Video: Territory Manager Experience', shortLabel: 'Territory Manager', videoId: 'essentials-02-territory-manager' }
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
            { id: 'video-browsing', label: 'Video: Navigating and Filtering for Items', shortLabel: 'Browsing', videoId: 'essentials-03-browsing' }
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
            { id: 'video-static', label: 'Video: Shopping for a Static Item', shortLabel: 'Static Item', videoId: 'essentials-04-static-item' },
            { id: 'video-dynamic-kits', label: 'Video: Exploring Dynamic Kits', shortLabel: 'Dynamic Kits', videoId: 'essentials-05-dynamic-kits' },
            { id: 'video-preset-kits', label: 'Video: Exploring Preset Kits (e.g., Docebo Integration)', shortLabel: 'Preset Kits', videoId: 'essentials-06-preset-kits' },
            { id: 'video-fixed-price-kits', label: 'Video: Exploring Fixed Priced Dynamic Kits', shortLabel: 'Fixed Price Kits', videoId: 'essentials-07-fixed-price-kits' },
            { id: 'video-booth', label: 'Video: Booth-in-a-Box', shortLabel: 'Booth-in-a-Box', videoId: 'essentials-08-booth-in-a-box' },
            { id: 'video-3d', label: 'Video: JBL Speaker with 3D Viewer', shortLabel: '3D Viewer', videoId: 'essentials-09-3d-viewer' },
            { id: 'video-digital-download', label: 'Video: Accessing Digital Downloads', shortLabel: 'Digital Downloads', videoId: 'essentials-10-digital-downloads' },
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
            { id: 'video-custom-promo', label: 'Video: Customizing a Zip-Up Sweater', shortLabel: 'Promo Item', videoId: 'essentials-11-promo-item' },
            { id: 'video-custom-digital', label: 'Video: Customizing an Instagram Reel', shortLabel: 'Digital Asset', videoId: 'essentials-12-digital-asset' }
        ],
        details: [
            { title: 'Automated Quality Checks', description: 'Uploading a low-resolution logo automatically triggers a quality warning, prompting the user to replace it with a high-resolution version.', icon: <ShieldIcon /> },
            { title: 'Streamlined Customization', description: 'Users can easily select sizes and quantities, and use a simple Notes field to indicate instructions like “remove white background.”', icon: <EditIcon /> },
            { title: 'Consistent Experience', description: 'Customizing a digital asset works exactly the same way as a print or promo piece. The same rules apply—safe zones, logo placement, and co-branding standards.', icon: <LayersIcon /> },
            { title: 'Automated Approval Workflows', description: 'Co-branded items are automatically sent to the appropriate approver, who can review and approve the artwork in a simple dashboard.', icon: <TargetIcon /> },
        ],
    },
    {
        id: 'cap-checkout-returns',
        title: 'Unified Multi-Tender Checkout & Returns',
        description: "The checkout is engineered to be instantly familiar, mirroring the intuitive design of modern e-commerce to eliminate any learning curve. Beneath this simplicity, it powerfully integrates GAF-specific business logic—handling rewards, multi-address shipping, budget controls, and returns in a single, unified workflow. This seamless process reduces cart abandonment and elevates the contractor experience.",
        videos: [
            { id: 'video-checkout', label: 'Video: Checkout with Mixed Payments & Approvals', shortLabel: 'Checkout', videoId: 'essentials-13-checkout' },
            { id: 'video-returns', label: 'Video: Initiating a Product Return', shortLabel: 'Returns', videoId: 'essentials-14-returns' }
        ],
        details: [
            { title: 'Multi-Tender Payments', description: "GAF's specific multi-tender payments with Co-op Dollars, Rewards Bucks, and credit cards are handled in a single transaction.", icon: <CreditCardIcon /> },
            { title: 'Future-Proof with Custom Functions', description: "The new, modern approach is to use custom functions. This powerful tool lets us build complex, custom checkout logic and run it directly within the platform's secure, sandboxed environment at native speed.", icon: <CodeIcon />},
            { title: 'Budget & Approval Triggers', description: 'If an order exceeds a user\'s budget, the system automatically pauses the order and routes it to an approver.', icon: <ShieldIcon /> },
        ],
    }
];

export const ADMIN_CAPABILITIES: Capability[] = [
    {
        id: 'cap-admin-content',
        title: 'User & Content Management',
        description: "Administrators can manage users, content, and budgets directly from the admin panel — no vendor tickets, no delays. That level of control keeps GAF agile, allowing marketing teams to adapt in real time without waiting for vendor cycles.",
        videos: [
            { id: 'video-admin-banners', label: 'Video: Managing Promotional Banners', shortLabel: 'Promo Banners', videoId: 'essentials-15-promo-banners' },
            { id: 'video-admin-themes', label: 'Video: Customizing Storefront Themes', shortLabel: 'Theme Editor', videoId: 'essentials-16-theme-editor' }
        ],
        exploreFurtherVideos: [
            { id: 'video-admin-products', label: 'Video: How to Set Up New Products', shortLabel: 'Add New Product', videoId: 'unlock-more-add-new-product' },
            { id: 'video-sidekick-bogo', label: 'Video: AI-Generated BOGO Promotion', shortLabel: 'AI Marketing', videoId: 'unlock-more-ai-marketing' },
            { id: 'video-multi-vendor', label: 'Video: Multi-Vendor Sourcing', shortLabel: 'Multi-Vendor Sourcing', videoId: 'unlock-more-multi-vendor-sourcing' },
            { id: 'video-po-management', label: 'Video: Purchase Order Management', shortLabel: 'PO Management', videoId: 'unlock-more-po-management' }
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
        title: 'Budget Management & Product Limits',
        description: "This feature provides GAF with direct, real-time control over program spending. Budgets can be assigned by user, region, or role, and changes take effect immediately — no refresh required. These values can also flow automatically from the Integration Layer, syncing available GAF Bucks or Co-op Dollars.",
        videos: [
            { id: 'video-admin-budgets', label: 'Video: Setting Budgets and Product Rules', shortLabel: 'Budgets & Limits', videoId: 'essentials-17-budgets-and-limits' }
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
            { id: 'video-over-budget', label: 'Video: Managing Over-Budget Approvals', shortLabel: 'Over-Budget', videoId: 'essentials-18-over-budget' },
            { id: 'video-co-brand-approval', label: 'Video: Managing Co-branding Approvals', shortLabel: 'Co-brand', videoId: 'essentials-19-co-brand' }
        ],
        exploreFurtherVideos: [
            { id: 'video-admin-flow', label: 'Video: Automating Workflows with Flow', shortLabel: 'Flow Automation', videoId: 'unlock-more-flow-automation' }
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
            { id: 'video-tableau-analytics', label: 'Video: Tableau Reporting and Analytics', shortLabel: 'Tableau Analytics', videoId: 'essentials-20-tableau-analytics' },
            { id: 'video-integrated-analytics', label: 'Video: Integrated Reporting and Analytics', shortLabel: 'Integrated Analytics', videoId: 'essentials-21-integrated-analytics' }
        ],
        exploreFurtherVideos: [
            { id: 'video-sidekick-report', label: 'Video: AI-Generated Restock Report', shortLabel: 'AI Reporting', videoId: 'unlock-more-ai-reporting' },
            { id: 'video-sidekick-skills', label: 'Video: Using AI Skills for Custom Tasks', shortLabel: 'AI Skills', videoId: 'unlock-more-ai-skills' }
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

export const SECTIONS: Section[] = [
  { id: 'introduction', title: 'Introduction', icon: <HomeIcon /> },
  { id: 'integration-layer', title: 'The Foundation: Integration', icon: <LayersIcon /> },
  { 
    id: 'end-user-exp', 
    title: 'Part 1: End-User Experience', 
    icon: <UserIcon />,
    subsections: END_USER_CAPABILITIES.map(c => ({ id: c.id, title: c.title.split(' — ')[0].split(' & ')[0].replace(/, /g, ' & ') }))
  },
  { 
    id: 'admin-exp', 
    title: 'Part 2: Admin & Analytics', 
    icon: <AdminIcon />,
    subsections: ADMIN_CAPABILITIES.map(c => ({ id: c.id, title: c.title.split(' & ')[0].replace(/, /g, ' & ') }))
  },
  { 
    id: 'support', 
    title: 'Part 3: Partnership & Vision', 
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
            { name: 'Kyle Drake', title: 'Enterprise Account Director', description: "Oversees execution of entire people, process, technology, product and pricing program for GAF. Fully dedicated to GAF, serving as the voice of the client within DG3.", imageComponent: <TeamMemberImage src="/images/IMG_6721.jpeg" alt="Kyle Drake" />},
            { name: 'Tom Hunter', title: 'Strategic Advisor', description: "Provides institutional knowledge and advice, ensures continuity of product workflow, assists EAM when EAM requires.", imageComponent: <TeamMemberImage src="/images/tom.jpeg" alt="Tom Hunter" /> },
            { name: 'Justine Doherty', title: 'Launch Project Manager & In-service Program Manager', description: "Dedicated to GAF and oversees end-to-end launch program and ongoing support program covering systems, products, services and spanning strategy, training and ongoing execution.", imageComponent: <TeamMemberImage src="/images/Justine.png" alt="Justine Doherty" /> },
            { name: 'Kathy Aquirre', title: 'Account Coordinator, Analyst', description: "Supports all administrative functions required for GAF, including reconciliations, documentation, pricing and billing processes.", imageComponent: <TeamMemberImage src="/images/Kathy.png" alt="Kathy Aquirre" /> },
        ]
    },
    {
        id: 'team-tech',
        title: 'Your Technology Deploy/Maintain Team',
        members: [
            { name: 'Eric Genova', title: 'DG3 Technology & Services Leader', description: 'Technical, platform and professional services leader. Directly steering planning and execution of platform deployment.', imageComponent: <TeamMemberImage src="/images/Eric.jpg" alt="Eric Genova" /> },
            { name: 'Technical Developer', title: '', description: 'Dedicated data warehouse, API, GAF integrations, vendor integrations and DG3 systems integration developer.', imageComponent: <TeamPhotoImage src="/images/Dev Team Photo.jpg" alt="Technical Developer Team" />, isCompact: true },
            { name: 'Christina Naili', title: 'Project Manager', description: 'Specializing in deploying enterprise commerce solutions. Launch and integrations specialist for all systems. Drives technical project and all launch and ongoing development efforts.', imageComponent: <TeamMemberImage src="/images/Christina.jpg" alt="Christina Naili" /> },
            { name: 'Platform Developer', title: '', description: 'Certified expert platform integrator and customizer.', imageComponent: <PersonPlaceholderIcon />, isCompact: true },
        ]
    },
    {
        id: 'team-ops',
        title: 'Your Frontline Operational Support',
        members: [
            { name: 'Nick Roberts', title: 'Promotional Lead', description: 'Deploys team to support all promotional, BiaB, and other promotional and merchandise strategy and execution.', imageComponent: <TeamMemberImage src="/images/nick promo.jpg" alt="Nick Roberts" /> },
            { name: 'Team Photos', title: '', description: '', imageComponent: <div/>, isCompact: true, additionalImages: [<TeamPhotoImage src="/images/IMG_7252 (002).jpg" alt="Fulfillment Team" />, <TeamPhotoImage src="/images/IMG_3824.jpg" alt="Fulfillment Team" />, <TeamPhotoImage src="/images/Fulfillment Team.jpeg" alt="Fulfillment Team" />] },
            { name: 'JoAnn Smolen', title: 'Print Lead', description: 'Oversees all premedia and print production needs and ensures alignment and execution. Cross trains backup team.', imageComponent: <TeamMemberImage src="/images/JoAnn Smolen - Picture.png" alt="JoAnn Smolen" /> },
            { name: 'TJ Taylor', title: 'Fulfillment Lead', description: 'Oversees all fulfillment execution across all fulfilled products (lit, merch, BiaB).', imageComponent: <TeamMemberImage src="/images/IMG_5647.jpeg" alt="TJ Taylor" /> },
        ]
    },
    {
        id: 'team-exec',
        title: 'Your Executive Support Team',
        members: [
            { name: 'Joe Lindfeldt', title: 'Chief Revenue Officer', description: 'Supports alignment and allocation of resources for execution of GAF requirements across sales and services parts of DG3.', imageComponent: <TeamMemberImage src="/images/joe.jpg" alt="Joe Lindfeldt" /> },
            { name: 'Pat Caragliano', title: 'Chief Operations Officer', description: 'Ensures delivery of on-time and error-free performance for items produced or managed by DG3.', imageComponent: <TeamMemberImage src="/images/pat-carigliano.jpg" alt="Pat Caragliano" /> },
            { name: 'Mike Weeks', title: 'Director of Strategic Solutions Group', description: 'Identifies, sources and oversees supply of external products and services in support of GAF requirements.', imageComponent: <TeamMemberImage src="/images/mike-weeks.png" alt="Mike Weeks" /> },
            { name: 'Mike Roth', title: 'Chief Financial Officer', description: 'Oversees team delivery of seamless financial integrations and evaluates strategic product requirements for GAF (product financing, vendor alignments).', imageComponent: <TeamMemberImage src="/images/MikeRoth.jpg" alt="Mike Roth" /> },
            { name: 'Steve Babat', title: 'Chief Executive Officer', description: 'Supports entire team and drives alignment towards all client requirements across our enterprise.', imageComponent: <TeamMemberImage src="/images/steven-babat.jpg" alt="Steve Babat" /> },
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

// FIX: Add FEATURES constant to resolve missing export error.
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

// FIX: Add ROLES constant to resolve missing export error.
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
