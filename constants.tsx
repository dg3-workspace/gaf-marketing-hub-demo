
import React from 'react';
// FIX: Import Feature and Role types to support the new constants.
import type { Section, Capability, StrategicPoint, Feature, Role, CapabilityDetail, VideoDetail, Team, GanttTask, GanttMilestone, ApproachPoint, ChoicePoint, ConsiderationPoint, EcosystemIntegration } from './types';

// Icons
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
const UserIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const AdminIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2.4l-.15.1a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1 0 2.4l.15.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
const HandshakeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"></path><path d="M13 17a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-5"></path><path d="M12 12.5a2.5 2.5 0 0 1-2.5-2.5V7"></path><path d="M14.5 10a2.5 2.5 0 0 0-2.5 2.5v3.5"></path></svg>;
const PlaybookIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M14 2v20"/></svg>;
const SupportIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>;

// Detail Icons
const DataIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>;
const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const LayersIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const EditIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const CreditCardIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>;
const ImageIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>;
const GridIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
const TagIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>;
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const CartIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>;
const AIIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.27 2.32A10 10 0 1 0 21.68 14.73"/><path d="m14.3 14.3 6.3 6.3"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/></svg>;
const VisionIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>;

// Icons for Part 3
const PersonPlaceholderIcon = (props: React.HTMLAttributes<HTMLDivElement>) => <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-full" {...props}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>;
const GroupPlaceholderIcon = (props: React.HTMLAttributes<HTMLDivElement>) => <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg" {...props}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>;
const ProcessIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 6h16M4 12h16M4 18h16"/></svg>;
const ProductIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const StrategyIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="m9 12 2 2 4-4"/></svg>;
const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>;
const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const LightbulbIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-7 7c0 3.04 1.63 5.36 3.5 6.5.6.36.5 1.5 1.5 1.5h4c1 0 .9-1.14 1.5-1.5C17.37 14.36 19 12.04 19 9a7 7 0 0 0-7-7z"/></svg>;
const BrainIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7h0A2.5 2.5 0 0 1 7 4.5v0A2.5 2.5 0 0 1 9.5 2m0 5A2.5 2.5 0 0 1 12 9.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 7 9.5v0A2.5 2.5 0 0 1 9.5 7m5 0A2.5 2.5 0 0 1 17 9.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 12 9.5v0A2.5 2.5 0 0 1 14.5 7m0-5A2.5 2.5 0 0 1 17 4.5v0A2.5 2.5 0 0 1 14.5 7h0A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 14.5 2m-5 12A2.5 2.5 0 0 1 12 16.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 7 16.5v0a2.5 2.5 0 0 1 2.5-2.5m5 0A2.5 2.5 0 0 1 17 16.5v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 12 16.5v0a2.5 2.5 0 0 1 2.5-2.5m0 5A2.5 2.5 0 0 1 17 21.5v0a2.5 2.5 0 0 1-2.5 2.5h0a2.5 2.5 0 0 1-2.5-2.5v0A2.5 2.5 0 0 1 14.5 19m-5-2.5A2.5 2.5 0 0 1 7 14v0a2.5 2.5 0 0 1-2.5 2.5h0A2.5 2.5 0 0 1 2 14v0a2.5 2.5 0 0 1 2.5-2.5h0a2.5 2.5 0 0 1 2.5 2.5Z"/></svg>;
const CodeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const ShoppingBagIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
const DatabaseIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const CloudIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
const TrendingUpIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const BoxIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const TruckIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>;
const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

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
    description: "Before we even dive into the storefront experience, it's important to start here. What you're looking at is the DG3 Integration Layer — powered by WSO₂ — which connects all of the applications and data sources that make the platform possible. It's the connective tissue of the system. The storefront is what users see; the integration layer is what makes it work.",
    visualType: 'diagram',
    visualLabel: "WSO₂ Identity Server - Connected Systems",
    videos: [],
    details: [
        { title: 'Unified Identity & Orchestration', description: "A single, unified identity and orchestration layer links all systems, ensuring GAF's marketing ecosystem behaves like one connected organism.", icon: <ShieldIcon /> },
        { title: 'Connected Systems', description: "Systems like GAF's Digital Asset Manager, BigQuery, Rewards, Docebo, Monarch, Tableau, and Shopify are all linked through this layer.", icon: <LayersIcon /> },
        { title: 'Faster Decisions', description: 'This unified structure enables faster, data-driven decisions by eliminating operational friction and data silos.', icon: <DataIcon /> },
        { title: 'Foundation for Growth', description: 'While not the most exciting screen, it’s the most important one. Without it, nothing else that follows would work.', icon: <HomeIcon /> },
    ]
};

export const END_USER_CAPABILITIES: Capability[] = [
    {
        id: 'cap-login-persona',
        title: 'Login & Persona-Driven Personalization',
        description: "This first section focuses on how the storefront personalizes itself for different user personas. The platform uses GAF's Okta SSO — managed through the DG3 integration layer — to determine who the user is, what their role is, and what they should see. This flexibility means the experience meets each user where they are, driving adoption and engagement naturally.",
        videos: [
            { id: 'video-power-buyer', label: 'Video: Power Buyer Experience', shortLabel: 'Power Buyer', path: '/videos/power-buyer-persona.mp4' },
            { id: 'video-certified-contractor', label: 'Video: Certified Contractor Experience', shortLabel: 'Certified Contractor', path: '/videos/contractor-persona.mp4' }
        ],
        details: [
            { title: 'Dynamic Promotional Banners', description: "The primary promotional banner at the top of the page changes based on the user's persona (e.g., Certified Contractor).", icon: <ImageIcon /> },
            { title: 'Region-Specific Hero Content', description: 'The main hero banner updates dynamically by region, showing relevant content to the user.', icon: <TargetIcon /> },
            { title: 'Persona-Based Product Catalogs', description: 'Product categories and available items differ between contractor and TM views, ensuring relevance.', icon: <GridIcon /> },
            { title: 'Targeted Special Offers', description: 'The special offer section adjusts by user type and region, presenting the most effective promotions.', icon: <TagIcon /> },
        ],
        seeAlso: [
            { label: 'User & Content Management', targetId: 'cap-admin-content' }
        ]
    },
    {
        id: 'cap-browsing-ordering',
        title: 'Browsing, Searching & Ordering',
        description: "This next section focuses on how users browse and discover items. The navigation is designed to feel familiar, because when users don't have to learn a new system, they engage more. Whether browsing hundreds of SKUs or searching for one brochure, the experience is designed to guide them to the right content quickly and logically.",
        videos: [
            { id: 'video-browsing', label: 'Video: Navigating and Filtering for Items', shortLabel: 'Browsing', path: '/videos/navigating-hub.mp4' },
            { id: 'video-semantic-search', label: 'Video: Semantic Search for "Leak Protection"', shortLabel: 'Semantic Search' }
        ],
        details: [
            { title: 'Intuitive Navigation', description: 'Users can navigate via a vertical menu with drop-downs or through large, tiled category options for a visual hierarchy.', icon: <GridIcon /> },
            { title: 'Dynamic Filtering', description: 'Within a category, users can filter by attributes like size, color, and variant, with results updating in real time.', icon: <TargetIcon /> },
            { title: 'Semantic Search', description: 'Nearly 27% of searches are now Al-driven. Users can search by intent, like “materials for leak protection,” and the platform surfaces the right content.', icon: <SearchIcon /> },
            { title: 'Bundled Ordering Options', description: 'Product pages for items like the StormGuard Sell Sheet feature bundled ordering options (e.g., packs of 50, 100, 150).', icon: <CartIcon /> },
        ]
    },
     {
        id: 'cap-unified-shopping',
        title: 'Unified Shopping Experience',
        description: "The platform's true power lies in its ability to handle a wide variety of product classes within a single, unified experience. This section demonstrates how users can shop for everything from simple flyers to complex, customizable apparel and digital assets, all within the same intuitive journey.",
        videos: [
            { id: 'video-static', label: 'Video: Shopping for a Static Item', shortLabel: 'Static Item' },
            { id: 'video-kitted', label: 'Video: Ordering Kitted Items', shortLabel: 'Kitted Items' },
            { id: 'video-booth', label: 'Video: Reserving a Booth-in-a-Box', shortLabel: 'Booth-in-a-Box' },
            { id: 'video-fixed', label: 'Video: Acquiring Fixed Assets', shortLabel: 'Fixed Assets' },
            { id: 'video-custom-apparel', label: 'Video: Customizing Promotional Apparel', shortLabel: 'Custom Apparel' },
            { id: 'video-custom-digital', label: 'Video: Customizing Digital Assets', shortLabel: 'Custom Digital' },
            { id: 'video-digital-download', label: 'Video: Accessing Digital Downloads', shortLabel: 'Downloads' },
        ],
        details: [
            { title: 'One Cart, All Assets', description: 'Physical products, digital downloads, rentals, and customizable items all coexist in a single, unified shopping cart for a streamlined checkout.', icon: <CartIcon /> },
            { title: 'Diverse Product Class Support', description: 'The platform is engineered to handle any product class—from simple brochures to complex, multi-component rental kits—with consistent logic.', icon: <GridIcon /> },
            { title: 'Unified Fulfillment Logic', description: "Behind the scenes, the system routes orders to the appropriate fulfillment channel, whether it's the warehouse, a digital download link, or a scheduling system.", icon: <LayersIcon /> },
            { title: 'Seamless Customization Journey', description: 'The user journey for customizing apparel or digital assets is seamlessly integrated into the core shopping experience, not a separate tool.', icon: <EditIcon /> },
        ]
    },
    {
        id: 'cap-co-branding',
        title: 'Co-branding, Customization & Approvals',
        description: "Our customization engine has been intentionally streamlined for everyday use — empowering users to stay on brand without slowing down. The platform automatically checks logo quality and prompts users to fix issues before submission. For any co-branded item, the workflow automatically routes it for approval, creating an elegant balance between control and speed.",
        videos: [
            { id: 'video-custom-promo', label: 'Video: Customizing a Zip-Up Sweater', shortLabel: 'Promo Item' },
            { id: 'video-custom-digital', label: 'Video: Customizing an Instagram Reel', shortLabel: 'Digital Asset' }
        ],
        details: [
            { title: 'Logo Quality Validation', description: 'Uploading a low-resolution logo triggers a quality warning, prompting the user to replace it with a high-resolution version.', icon: <ShieldIcon /> },
            { title: 'Streamlined Customization', description: 'Users can easily select multiple sizes and quantities, and use a Notes field for simple instructions like "remove white background."', icon: <EditIcon /> },
            { title: 'Consistent Digital Customization', description: 'Customizing a digital asset like an Instagram Reel follows the same rules for safe zones, logo placement, and co-branding standards.', icon: <LayersIcon /> },
            { title: 'Automated Approval Workflows', description: 'Co-branded items are automatically sent to the appropriate approver, who can review the artwork in a simple dashboard.', icon: <TargetIcon /> },
        ],
        seeAlso: [
            { label: 'Approvals & Workflows', targetId: 'cap-admin-approvals' }
        ]
    },
    {
        id: 'cap-checkout-returns',
        title: 'Unified Multi-Tender Checkout & Returns',
        description: "The interface feels familiar because expectations are shaped by Amazon and Target, making adoption easy. But GAF's requirements go far beyond a typical e-commerce site. What you're seeing is the best of both worlds — the familiar experience with custom sophistication underneath to handle GAF-specific needs like rewards, multi-address shipping, and returns.",
        videos: [
            { id: 'video-checkout', label: 'Video: Checkout with Mixed Payments & Approvals', shortLabel: 'Checkout' },
            { id: 'video-returns', label: 'Video: Initiating a Product Return', shortLabel: 'Returns' }
        ],
        details: [
            { title: 'Digital & Physical Cart', description: 'The platform supports a full range of items—physical products, kits, rentals, customizable items, and pure digital assets—all handled in a single cart.', icon: <CartIcon /> },
            { title: 'Multiple Payment Types', description: "GAF's reward currencies like Co-op Dollars behave exactly like credits and can be combined with card or invoice payments for flexible checkout.", icon: <CreditCardIcon /> },
            { title: 'Budget Restriction Triggers', description: 'If an order exceeds a user\'s budget, the system flags it and automatically pauses the order, routing it to an approver.', icon: <ShieldIcon /> },
            { title: 'Streamlined Returns', description: 'Returns follow the same workflow logic. A user starts the return, an admin approves it, and everything is tracked under the same framework.', icon: <LayersIcon /> },
        ],
        seeAlso: [
            { label: 'Budget Management & Product Limits', targetId: 'cap-admin-budgets' }
        ]
    }
];

export const ADMIN_CAPABILITIES: Capability[] = [
    {
        id: 'cap-admin-content',
        title: 'User & Content Management',
        description: "Administrators can manage users, content, and budgets from here – no vendor tickets, no delays. That level of control keeps GAF agile, allowing marketing teams to adapt in real time without waiting for vendor cycles. Simple text and image edits publish instantly, and for deeper changes, theme elements like placements and colors can be adjusted through the same interface.",
        videos: [
            { id: 'video-admin-banners', label: 'Video: Managing Promotional Banners', shortLabel: 'Promo Banners' },
            { id: 'video-admin-themes', label: 'Video: Customizing Storefront Themes', shortLabel: 'Theme Editor' }
        ],
        details: [
            { title: 'Direct Content Updates', description: 'Administrators can open the Banners section and perform simple text edits that publish instantly to the live site.', icon: <EditIcon /> },
            { title: 'Static & Motion Content', description: 'Static images or motion video content for banners are handled the same way — just upload, preview, and publish.', icon: <ImageIcon /> },
            { title: 'Theme & Layout Adjustment', description: 'Navigate to Theme Settings to adjust deeper layout elements like placements, colors, and layouts.', icon: <LayersIcon /> },
            { title: 'Targeted Publishing', description: 'When content is updated, a refresh of the storefront shows the change is live for the targeted audience.', icon: <TargetIcon /> },
        ],
        seeAlso: [
            { label: 'Login & Persona-Driven Personalization', targetId: 'cap-login-persona' }
        ]
    },
    {
        id: 'cap-admin-budgets',
        title: 'Budget Management & Product Limits',
        description: "Budgets can be assigned by user, region, or role, and changes take effect immediately with no refresh required. These same budget values can flow automatically from the Integration Layer, for example, syncing available GAF Bucks or Co-op Dollars. Approval logic is built with simple, no-code automation for per-item rules.",
        videos: [
            { id: 'video-admin-budgets', label: 'Video: Setting Budgets and Product Rules', shortLabel: 'Budgets & Limits' }
        ],
        details: [
            { title: 'Role-Based Budgets', description: 'Open the User -> Budgets tab to assign a budget limit (e.g., $1,000) to a specific contractor.', icon: <UserIcon /> },
            { title: 'Integration Layer Sync', description: 'Budget values can sync automatically with GAF systems, ensuring co-op and GAF Bucks are always up-to-date.', icon: <LayersIcon /> },
            { title: 'Per-Item Approval Rules', description: 'Open Product Rules/Limits to set item-specific rules, such as triggering an approval if more than 10 of an item are ordered.', icon: <ShieldIcon /> },
            { title: 'No-Code Automation', description: 'Approval logic is built with simple automation (powered by Shopify Flow) that is simple to configure with no code needed.', icon: <EditIcon /> },
        ],
        seeAlso: [
            { label: 'Approvals & Workflows', targetId: 'cap-admin-approvals' },
            { label: 'Unified Multi-Tender Checkout & Returns', targetId: 'cap-checkout-returns' }
        ]
    },
    {
        id: 'cap-admin-approvals',
        title: 'Approvals & Workflows',
        description: "This section demonstrates the platform's intelligent approval workflows, which are designed to provide GAF with robust brand and budget control without creating bottlenecks. From co-branded assets to budget overrides, the system automates the routing, review, and notification process, ensuring speed and compliance go hand-in-hand.",
        videos: [
            { id: 'video-over-budget', label: 'Video: Managing Over-Budget Approvals', shortLabel: 'Over-Budget' },
            { id: 'video-co-brand-approval', label: 'Video: Managing Co-branding Approvals', shortLabel: 'Co-brand' },
            { id: 'video-other-workflows', label: 'Video: Other Automated Workflows', shortLabel: 'Other Workflows' }
        ],
        details: [
            { title: 'Automated Budget Triggers', description: 'When a user exceeds their pre-set budget, the order is automatically paused and routed to the designated approver for review.', icon: <ShieldIcon /> },
            { title: 'Co-Brand Review Cycle', description: 'All customized, co-branded materials are sent through a pre-defined approval chain to ensure brand standards are met before production.', icon: <TargetIcon /> },
            { title: 'Unified Approver Dashboard', description: 'Approvers manage all pending requests—from budget to artwork—in a single, intuitive dashboard, allowing for quick review and action.', icon: <GridIcon /> },
            { title: 'No-Code Workflow Engine', description: 'The underlying workflow engine (powered by Shopify Flow) allows administrators to easily create or modify approval rules without writing any code.', icon: <EditIcon /> },
        ],
        seeAlso: [
            { label: 'Co-branding, Customization & Approvals', targetId: 'cap-co-branding' }
        ]
    },
    {
        id: 'cap-admin-analytics',
        title: 'Analytics & Reporting',
        description: "All admin and transactional data points flow into Tableau through the DG3 Integration Layer. We preload historical data so GAF isn't starting from zero. Before ShopifyQL, getting specific data required downloading a large CSV. Now, tools like Tableau can be fed with the exact, granular data they need, making reports more accurate and faster to update.",
        videos: [
            { id: 'video-tableau-analytics', label: 'Video: Tableau Reporting and Analytics', shortLabel: 'Tableau Analytics' },
            { id: 'video-integrated-analytics', label: 'Video: Integrated Reporting and Analytics', shortLabel: 'Integrated Analytics' }
        ],
        details: [
            { title: 'Tableau Dashboard', description: 'View orders by region, SKU, and user type. All data comes through the DG3 Integration Layer from Shopify, warehouse, and related APIs.', icon: <DataIcon /> },
            { title: 'Drill-Down Filtering', description: 'Filters make it easy to isolate data by product owner, date range, or territory to get granular insights.', icon: <TargetIcon /> },
            { title: 'Return Metrics', description: 'Return metrics are fully captured and mapped back to original orders, providing a clear view of product issues.', icon: <LayersIcon /> },
            { title: 'Restock Triggers', description: 'Product managers can identify SKUs approaching depletion and trigger restocks directly from the analytics dashboard.', icon: <CartIcon /> },
        ],
        seeAlso: [
            { label: 'AI-Powered Admin (Shopify Sidekick)', targetId: 'cap-admin-ai' }
        ]
    },
    {
        id: 'cap-admin-ai',
        title: 'AI-Powered Admin (Shopify Sidekick)',
        description: "Just as user-side expectations are shifting to semantic interaction, the same is happening for administrators. The way we think about analytics is changing — we now expect AI not only to show us data, but to act on it. This platform is built to evolve with that expectation. This is where Sidekick's intelligence meets platform automation. Sidekick thinks; Flow acts.",
        videos: [
            { id: 'video-sidekick-report', label: 'Video: AI-Generated Restock Report', shortLabel: 'AI Reporting' },
            { id: 'video-sidekick-bogo', label: 'Video: AI-Generated BOGO Promotion', shortLabel: 'AI Marketing' },
            { id: 'video-ai-skills', label: 'Video: Leveraging AI Skills for Automation', shortLabel: 'AI Skills' }
        ],
        details: [
            { title: 'Curiosity to Quantifiable Data', description: 'Ask a question in plain language, e.g., "Show what products we should restock based on last year\'s pre-event sales."', icon: <AIIcon /> },
            { title: 'Data to Action', description: 'Sidekick turns curiosity into data—it runs the analysis, compares inventory, and recommends restocks instantly, turning backward-looking data into forward-looking action.', icon: <DataIcon /> },
            { title: 'AI-Assisted Marketing', description: 'Admins can use AI to act. For example, "Create a buy-one-get-one-free offer." Sidekick writes the logic, sets the duration, and drafts the promo copy.', icon: <EditIcon /> },
            { title: 'Predictive Analytics', description: 'Leverage AI to forecast trends, predict inventory needs, and identify marketing opportunities before they arise.', icon: <DataIcon /> },
        ],
        seeAlso: [
            { label: 'Analytics & Reporting', targetId: 'cap-admin-analytics' }
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
    subsections: END_USER_CAPABILITIES.map(c => ({ id: c.id, title: c.title.split(' & ')[0].replace(/, /g, ' & ') }))
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
];

export const TEAMS_DATA: Team[] = [
    {
        id: 'team-leadership',
        title: 'Your Account Leadership Team',
        members: [
            { name: 'Kyle Drake', title: 'Enterprise Account Director', description: "Oversees execution of entire people, process, technology, product and pricing program for GAF. Fully dedicated to GAF, serving as the voice of the client within DG3.", imageComponent: <TeamMemberImage src="/images/IMG_6721.jpeg" alt="Kyle Drake" /> },
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
            { name: 'Technical Developer', title: '', description: 'Dedicated data warehouse, API, GAF integrations, vendor integrations and DG3 systems integration developer.', imageComponent: <TeamPhotoImage src="/images/Dev%20Team%20Photo.jpg" alt="Technical Developer Team" />, isCompact: true },
            { name: 'Christina Naili', title: 'Project Manager', description: 'Shopify Plus deployment specialist. Launch and integrations specialist for all systems. Drives technical project and all launch and ongoing development efforts.', imageComponent: <TeamMemberImage src="/images/Christina.jpg" alt="Christina Naili" /> },
            { name: 'Shopify + Developer', title: '', description: 'Certified expert Shopify integrator and customizer.', imageComponent: <PersonPlaceholderIcon />, isCompact: true },
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

export const GANTT_TASKS_DATA: GanttTask[] = [
  { name: 'Scoping', spans: [{ start: 3, end: 7 }] },
  { name: 'Contracts', spans: [{ start: 4, end: 6 }] },
  { name: 'Team Alignment', spans: [{ start: 5, end: 5 }] },
  { name: 'Customization / Configuration', spans: [{ start: 5, end: 13 }] },
  { name: 'Shopify UI/UX', spans: [{ start: 6, end: 11 }] },
  { name: 'Module Implementation', spans: [{ start: 7, end: 12 }] },
  { name: 'WSO2 Connectors API Buildouts', spans: [{ start: 8, end: 13 }] },
  { name: 'GAF Integrations', spans: [{ start: 9, end: 14 }] },
  { name: 'OKTA', spans: [{ start: 11, end: 11 }] },
  { name: 'Historic Data Onboard', spans: [{ start: 12, end: 14 }] },
  { name: 'Product Loads', spans: [{ start: 13, end: 15 }] },
  { name: 'Vendor Onboards', spans: [{ start: 14, end: 22 }] },
  { name: 'Asset Management', spans: [{ start: 10, end: 17 }] },
  { name: 'InfoSec', spans: [{ start: 10, end: 15 }] },
  { name: 'User Acceptance', spans: [{ start: 16, end: 18 }] },
  { name: 'Vendor Acceptance', spans: [{ start: 17, end: 19 }] },
  { name: 'End to End Testing', spans: [{ start: 16, end: 22 }] },
  { name: 'Pre-Roll Out Communications', spans: [{ start: 9, end: 9 }], isHighlighted: true },
  { name: 'Persona Platform Training', spans: [{ start: 11, end: 11 }, { start: 18, end: 18 }] },
];

export const GANTT_MILESTONES_DATA: GanttMilestone[] = [
    { name: 'Go Live', week: 23 },
    { name: 'Post Implementation Review', week: 24.5 },
];

export const APPROACH_POINTS_DATA: ApproachPoint[] = [
    { title: 'People', icon: <UserIcon className="w-8 h-8"/>, points: ["Optimal mix of strategy, technology and operational staff for GAF—we won't leave the backend to chance.", "You know our abilities and our team.", "Supplemental on-site resource may be a valuable option to GAF.", "Dynamic go-forward GAF support team with future-oriented leadership."] },
    { title: 'Process', icon: <ProcessIcon className="w-8 h-8"/>, points: ["Decades of institutional knowledge.", "Full DG3 team in place to facilitate end-to-end process (creating an offer requires creating a product).", "Transparent and low-burden transition of operational data."] },
    { title: 'Technology', icon: <CodeIcon className="w-8 h-8"/>, points: ["Shopify is the world's largest commerce enablement platform.", "$2BN+ per year in investment, cannot be matched by integrated providers.", "Migrating from an order enablement posture to true UX-driven commerce.", "API Brokers for seamless linking to other vendors (we will manage the process).", "Highly secure."] },
    { title: 'Product', icon: <ProductIcon className="w-8 h-8"/>, points: ["Continued product financing support (system selling, merch, print).", "Color and brand management.", "Integrated manufacturing systems.", "Exceptional on-time, error-free performance."] },
    { title: 'Strategy', icon: <StrategyIcon className="w-8 h-8"/>, points: ["This is your platform; we are enabling it and supporting you.", "Vendor agnostic deployment.", "You've seen what we have done in 3 weeks, imagine what we can do in months.", "Immediately relieves several current choke points.", "Significant improvement in data to support decisions.", "Would DG3 assumption of execution risk be valuable?"] },
];

export const WHY_DG3_POINTS_DATA: ChoicePoint[] = [
    { title: 'Safe Choice', icon: <CheckCircleIcon className="w-8 h-8 text-green-500"/>, points: ["We understand your expectations", "We understand your brand", "We have a highly vested interest in your success", "Our post-scope budget will be guaranteed (no surprises, no ranges)"] },
    { title: 'Innovative Choice', icon: <LightbulbIcon className="w-8 h-8 text-yellow-500"/>, points: ["Best in class UI/UX storefront", "Top rated modular integrations", "No forcing GAF into our on-shelf-shelf product choices", "Benefits of continuous upgrade cycles"] },
    { title: 'Smart Choice', icon: <BrainIcon className="w-8 h-8 text-blue-500"/>, points: ["Seamless data broker integration with DG3 print, fulfillment, merch enabling technology", "Lower risk implementation", "We expect new tool set to return significant time to GAF team, enabling focus on more valuable activity"] },
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
        description: 'This module demonstrates how a budget can be assigned to a specific user or sales region. It then shows a purchase approval workflow being triggered when a user exceeds their spend limit, including the resulting approval notification.',
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
