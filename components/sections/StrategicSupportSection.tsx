
import React, { ReactElement, useState } from 'react';
import { TEAMS_DATA, APPROACH_POINTS_DATA, WHY_DG3_POINTS_DATA, KEY_CONSIDERATIONS_DATA, ECOSYSTEM_INTEGRATIONS, FUTURE_ECOSYSTEM_INTEGRATIONS } from '../../constants';
import type { Team, TeamMember, ApproachPoint, ChoicePoint, ConsiderationPoint, EcosystemIntegration } from '../../types';
import { Modal } from '../ui/Modal';
import { SectionHeader } from '../ui/SectionHeader';

// FIX: Define missing icon components to resolve reference errors.
const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    // FIX: Corrected malformed viewBox attribute which was causing parsing errors.
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
);
const PersonPlaceholderIcon = (props: React.HTMLAttributes<HTMLDivElement>) => <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-full" {...props}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>;

const TeamMemberImage = (props: { src: string; alt?: string }) => (
    <img src={props.src} alt={props.alt || 'Team member'} className="w-full h-full object-cover bg-gray-200 flex items-center justify-center rounded-full" />
);

// ===================================================================================
// SUB-COMPONENTS (Defined locally to adhere to single-file update constraint)
// ===================================================================================

const SectionTitle: React.FC<{ title: string; subtitle: string; }> = ({ title, subtitle }) => (
    <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-green">{title}</h2>
        {subtitle && <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
);

const SectionWrapper: React.FC<{ children: React.ReactNode, isGray?: boolean, id?: string }> = ({ children, isGray = false, id }) => (
    <div id={id} className={`py-20 px-8 ${isGray ? 'bg-patterned' : 'bg-white'}`}>
        <div className="container mx-auto">
            {children}
        </div>
    </div>
);

// --- Team Components ---

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    if (member.isCompact && member.additionalImages) {
        return (
             <div className="col-span-1 md:col-span-2 grid grid-cols-3 gap-4 items-center h-full transition-all duration-300 hover:shadow-xl hover:scale-105">
                {member.additionalImages.map((img, i) => <div key={i} className="aspect-square rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">{img}</div>)}
             </div>
        )
    }

    if (member.isCompact && member.name === 'Platform Developer') {
         return (
             <div className="bg-white p-6 rounded-lg border border-gray-200 h-full flex flex-col justify-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="flex justify-center -space-x-6 mb-6">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-100 z-20 transform hover:scale-110 transition-transform"><TeamMemberImage src="/images/paul_groppe.jpg" alt="Paul Groppe" /></div>
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-100 z-10 transform hover:scale-110 transition-transform"><TeamMemberImage src="/images/donna_forbes.jpg" alt="Donna Forbes" /></div>
                </div>
                <h4 className="font-bold text-brand-gray text-lg">{member.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{member.description}</p>
            </div>
         )
    } else if (member.isCompact && member.name === 'Technical Developer') {
         return (
             <div className="bg-white p-6 rounded-lg border border-gray-200 h-full flex flex-col justify-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-48 h-auto mx-auto mb-4">{member.imageComponent}</div>
                <h4 className="font-bold text-brand-gray text-lg">{member.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{member.description}</p>
            </div>
         )
    } else if (member.isCompact) {
         return (
             <div className="bg-white p-6 rounded-lg border border-gray-200 h-full flex flex-col justify-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4">{member.imageComponent}</div>
                <h4 className="font-bold text-brand-gray text-lg">{member.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{member.description}</p>
            </div>
         )
    }
    
    return (
        <div className="p-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:bg-gray-50/50 hover:scale-[1.02]">
            <div className="flex items-start gap-6">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">{member.imageComponent}</div>
                
                {/* Desktop view */}
                <div className="hidden md:block">
                    <h4 className="font-bold text-brand-gray text-xl">{member.name}</h4>
                    <p className="font-semibold text-brand-green text-sm mb-2">{member.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
                
                {/* Mobile view of name/title */}
                <div className="md:hidden">
                    <h4 className="font-bold text-brand-gray text-xl">{member.name}</h4>
                    <p className="font-semibold text-brand-green text-sm mb-2">{member.title}</p>
                </div>
            </div>
            
            {/* Mobile view of description */}
            <p className="md:hidden text-gray-600 text-sm leading-relaxed mt-4">
                {member.description}
            </p>
        </div>
    );
};

const TeamSection: React.FC<{ team: Team }> = ({ team }) => {
    const commonCardClasses = "transition-all duration-300 hover:shadow-xl hover:scale-105";

    if (team.id === 'team-leadership') {
        const topRow = team.members.slice(0, 2);
        const bottomRow = team.members.slice(2);

        return (
            <div className="max-w-6xl mx-auto mb-16">
                <h3 className="text-2xl font-bold text-center text-brand-green mb-10">{team.title}</h3>
                <div className={`p-8 rounded-lg ${commonCardClasses}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-10">
                        {topRow.map(member => <TeamMemberCard key={member.name} member={member} />)}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
                        {bottomRow.map(member => <TeamMemberCard key={member.name} member={member} />)}
                    </div>
                </div>
            </div>
        );
    }

    if (team.id === 'team-ops') {
        const people = team.members.filter(m => m.name !== 'Team Photos');
        const photos = team.members.find(m => m.name === 'Team Photos')?.additionalImages || [];

        return (
            <div className="max-w-6xl mx-auto mb-16">
                 <div className="flex items-center justify-center gap-4 mb-8">
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
                    <h3 className="text-3xl font-bold text-center text-brand-green">{team.title}</h3>
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
                </div>

                <div className={`bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-xl ${commonCardClasses}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-10">
                            {people.map(member => (
                                <div key={member.name} className="flex items-start gap-6 p-4 rounded-lg">
                                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 shadow-md">
                                      {member.imageComponent}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-gray text-xl">{member.name}</h4>
                                        <p className="font-semibold text-brand-green text-base mb-2">{member.title}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-center -space-x-6 mb-6">
                                <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-100 z-20 transform hover:scale-110 transition-transform"><TeamMemberImage src="/images/promo.png" alt="Promo" /></div>
                                <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-100 z-10 transform hover:scale-110 transition-transform"><TeamMemberImage src="/images/promo 2.png" alt="Promo" /></div>
                                <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-100 z-0 transform hover:scale-110 transition-transform"><TeamMemberImage src="/images/promo 4.jpg" alt="Promo" /></div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                {photos[0] && <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">{photos[0]}</div>}
                                {photos[1] && <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">{photos[1]}</div>}
                            </div>
                             <div className="grid grid-cols-1 gap-4">
                                <div className="w-64 h-auto rounded-2xl object-cover shadow-lg justify-self-center">
                                    {photos[2] && <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">{photos[2]}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if (team.id === 'team-exec') {
        const joe = team.members.find(m => m.name === 'Joe Lindfeldt');
        const pat = team.members.find(m => m.name === 'Pat Caragliano');
        const steve = team.members.find(m => m.name === 'Steve Babat');
        const mikeW = team.members.find(m => m.name === 'Mike Weeks');
        const mikeR = team.members.find(m => m.name === 'Mike Roth');

        return (
            <div className="max-w-6xl mx-auto mb-16">
                <h3 className="text-2xl font-bold text-center text-brand-green mb-10">{team.title}</h3>
                <div className={`relative p-8 rounded-lg ${commonCardClasses}`}>
                    <div className="flex justify-center mb-10">
                        {joe && <div className="max-w-xl"><TeamMemberCard member={joe} /></div>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div className="space-y-10">
                            {pat && <TeamMemberCard member={pat} />}
                            {steve && <TeamMemberCard member={steve} />}
                        </div>
                        <div className="space-y-10">
                            {mikeW && <TeamMemberCard member={mikeW} />}
                            {mikeR && <TeamMemberCard member={mikeR} />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center text-brand-green mb-10">{team.title}</h3>
            <div className={`p-8 rounded-lg ${commonCardClasses} grid grid-cols-1 ${team.id === 'team-exec' ? 'md:grid-cols-1 lg:grid-cols-2' : 'md:grid-cols-2'} gap-x-12 gap-y-10`}>
                {team.members.map(member => <TeamMemberCard key={member.name} member={member} />)}
            </div>
        </div>
    );
};

// --- Timeline Components ---

interface TimelineSubTask { name: string; }
interface TimelineTask { name: string; subTasks: TimelineSubTask[]; }
interface TimelinePhase {
  phase: number;
  title: string;
  weeks: string;
  // FIX: Specify props for the ReactElement to allow cloning with className.
  icon: React.ReactElement<{ className?: string }>;
  tasks: TimelineTask[];
}

const FlagIcon = (p: React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>;
const CogIcon = (p: React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 2v2M12 22v-2M20 12h2M2 12h2M19.07 4.93l-1.42 1.42M4.93 19.07l1.42-1.42M19.07 19.07l-1.42-1.42M4.93 4.93l1.42 1.42"/></svg>;
const DatabaseZapIcon = (p: React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 9 3 9 3 0 0 0 9-3V5"/><path d="M3 12A9 3 0 0 0 12 15a9 3 0 0 0 9-3"/><path d="M13 22l-1-4-4-1 1-4 4 1z"/></svg>;
const TestTubeIcon = (p: React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2v17.5c0 1.38-1.12 2.5-2.5 2.5h-1c-1.38 0-2.5-1.12-2.5-2.5V2"/><line x1="8" y1="2" x2="16" y2="2"/><line x1="8" y1="8" x2="13" y2="8"/><line x1="8" y1="14" x2="11" y2="14"/></svg>;
const RocketIcon = (p: React.SVGProps<SVGSVGElement>) => <svg {...p} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.12-.65-.82-2.17-1.43-3.12-.05z"/><path d="m12 15-3-3a9 9 0 0 1 3-12 9 9 0 0 1 12 3l-3 3"/><path d="m9 12 3 3"/><path d="m21 21-3-3"/></svg>;

const TIMELINE_DATA: TimelinePhase[] = [
    { phase: 1, title: "Foundation & Planning", weeks: "Weeks 1-5", icon: <FlagIcon/>, tasks: [
        { name: "Scoping", subTasks: [{ name: "Refine and finalize scope" }, { name: "Licensed applications (and licensing)" }, { name: "Staff support model" }, { name: "Data warehouse scope (system of record decisions)" }, { name: "Project Implementation Reporting Requirements" }] },
        { name: "Contracts", subTasks: [{ name: "Draft and review contracts" }, { name: "Negotiate any final terms" }, { name: "Execute agreements" }] },
        { name: "Team Alignment", subTasks: [{ name: "Present final team structure" }, { name: "GAF Approval" }, { name: "GAF Project Team Formation" }, { name: "Internal Realignment and Announcements" }] }
    ]},
    { phase: 2, title: "Configuration & Integration", weeks: "Weeks 4-13", icon: <CogIcon/>, tasks: [
        { name: "Shopify UI/UX", subTasks: [{ name: "Identify day 1 features" }, { name: "Build out ID features" }, { name: "Shipping Configurations" }, { name: "UAT feature set" }] },
        { name: "Module Implementation", subTasks: [{ name: "Tableau" }, { name: "WSO2" }, { name: "ReturnGo" }, { name: "Chili Graphics" }] },
        { name: "WSO2 Connectors API Buildouts", subTasks: [{ name: "Define Phase 1 connectors" }, { name: "Develop and test connectors" }, { name: "Finalize connectors" }] },
        { name: "GAF Systems Integrations", subTasks: [{ name: "Identify all GAF systems that require connection (Rewards, Contractor DB)" }, { name: "Document connection methods and data exchanges" }, { name: "Program to connections, establish and test, sign off" }] },
        { name: "OKTA", subTasks: [{ name: "Define OKTA Parameters" }, { name: "Define, test, deploy" }] }
    ]},
    { phase: 3, title: "Data, Vendors & Security", weeks: "Weeks 10-22", icon: <DatabaseZapIcon/>, tasks: [
        { name: "Historic Data Onboard", subTasks: [{ name: "ID historic data to load to data warehouse" }, { name: "Structure data and import" }, { name: "Test, clear as correct, and final diff refresh" }] },
        { name: "Product Loads", subTasks: [{ name: "Extract existing products & ID non-DG3 products for load" }, { name: "Load products, SKU Audit, and QA" }] },
        { name: "Vendor Onboards", subTasks: [{ name: "GAF Communication of Vendor Selections" }, { name: "DG3 initiate contact and review data broker/API requirements" }, { name: "Collect vendor feedback & review all data with GAF" }, { name: "Final clearance to board vendor" }] },
        { name: "Asset Management", subTasks: [{ name: "Extract existing list of all assets" }, { name: "Full asset review to determine go-live asset lists" }, { name: "Categorization and Meta Data updates" }] },
        { name: "InfoSec Audits", subTasks: [{ name: "Gather audit requirements & respond" }, { name: "Audit review and remediation" }, { name: "GAF go/no-go" }] }
    ]},
    { phase: 4, title: "Testing & Training", weeks: "Weeks 16-22", icon: <TestTubeIcon/>, tasks: [
        { name: "User Acceptance Testing (UAT)", subTasks: [{ name: "ID end-users for UAT" }, { name: "Performance UAT across UI/UX, Data, Personalization, Product Loads, Freight, Payments, and Database updates" }] },
        { name: "Vendor Acceptance", subTasks: [{ name: "End-to-End vendor testing (Products, API data transfers)" }, { name: "Vendor confirmation of success & DG3 platform success" }] },
        { name: "End-to-End System Testing", subTasks: [{ name: "Develop & deploy E2E test team and cases" }, { name: "Conduct test cases" }, { name: "Identify and remediate Gaps" }] },
        { name: "Persona Platform Training", subTasks: [{ name: "Admin Training" }, { name: "Marketer Training" }, { name: "Contractor Training" }, { name: "TM Training" }] }
    ]},
    { phase: 5, title: "Go-Live & Evolution", weeks: "Weeks 23+", icon: <RocketIcon/>, tasks: [
        { name: "Pre-Roll Out Communications", subTasks: [{ name: "Draft, Review, and Distribute Roll Out Comms" }] },
        { name: "Go Live", subTasks: [{ name: "Migrate to new system" }, { name: "Decommission existing systems" }] },
        { name: "Post Implementation Review", subTasks: [{ name: "Biweekly Check-In" }, { name: "Monthly Check-In" }, { name: "Quarterly Check-in" }] }
    ]}
];

const ExpandableTask: React.FC<{ task: TimelineTask }> = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-brand-gray text-sm">{task.name}</span>
        <svg className={`w-4 h-4 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
        <div className="overflow-hidden">
          <ul className="px-3 pb-3 pt-1 space-y-2">
            {task.subTasks.map(st => (
              <li key={st.name} className="flex items-start gap-2 text-xs text-gray-600">
                <svg className="w-3 h-3 text-brand-green mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                <span>{st.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ImplementationTimeline: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full transform -translate-x-1/2"></div>
      <div className="relative">
        {TIMELINE_DATA.map((phase, index) => (
          <div key={phase.phase} className={`relative group ${index > 0 ? '-mt-28' : ''}`}>
            <div className="absolute left-1/2 top-5 w-8 h-8 bg-brand-green border-4 border-white rounded-full z-10 transform -translate-x-1/2 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white">
              {React.cloneElement(phase.icon, { className: 'w-5 h-5' })}
            </div>
            <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
                <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'} mb-4`}>
                  <span className="text-sm font-bold text-gray-400 tracking-wider uppercase">{phase.weeks}</span>
                  <h3 className="text-2xl font-bold text-brand-gray">{phase.title}</h3>
                </div>
                <div className="space-y-3">
                  {phase.tasks.map(task => <ExpandableTask key={task.name} task={task} />)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// --- Approach & Strategy Components ---
const ApproachCard: React.FC<{ item: ApproachPoint }> = ({ item }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
        <div className="flex items-center gap-4 mb-4">
            <div className="text-brand-green">{item.icon}</div>
            <h4 className="text-xl font-bold text-brand-gray">{item.title}</h4>
        </div>
        <ul className="space-y-3 list-disc list-inside text-gray-600">
            {item.points.map((point, i) => <li key={i}>{point}</li>)}
        </ul>
    </div>
);

const WhyDG3Card: React.FC<{ item: ChoicePoint }> = ({ item }) => (
    <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-100">{item.icon}</div>
        <h4 className="text-2xl font-bold text-brand-gray mb-4">{item.title}</h4>
        <ul className="space-y-3 text-gray-600 text-left">
            {item.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span>{point}</span>
                </li>
            ))}
        </ul>
    </div>
);

const KeyConsiderationItem: React.FC<{ item: ConsiderationPoint }> = ({ item }) => (
    <div className="bg-white p-4 rounded-md border border-gray-200 flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
        <div className="text-green-500"><CheckCircleIcon className="w-6 h-6"/></div>
        <p className="font-semibold text-brand-gray">{item.text}</p>
    </div>
);

// --- Ecosystem Component ---
const EcosystemIntegrationCard: React.FC<{ item: EcosystemIntegration; isFuture?: boolean; onClick?: () => void; }> = ({ item, isFuture = false, onClick }) => {
    const cardClasses = "w-full text-left border border-gray-200 rounded-lg p-3 text-center bg-white shadow-lg h-full flex flex-col justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl";
    const content = (
        <>
            {/* FIX: Remove incorrect type cast on icon to allow props to be passed to cloneElement. */}
            <div className={`text-brand-green w-8 h-8 mx-auto mb-2`}>{React.cloneElement(item.icon, { className: 'w-full h-full' })}</div>
            <p className="font-semibold text-brand-gray text-sm">{item.name}</p>
            <p className="text-xs text-gray-500">{item.category}</p>
        </>
    );

    return (
        <button onClick={onClick} className={cardClasses}>
            {content}
        </button>
    );
};

// ===================================================================================
// MAIN SECTION COMPONENT
// ===================================================================================

export const StrategicSupportSection: React.FC = () => {
    const [selectedIntegration, setSelectedIntegration] = useState<(EcosystemIntegration & { concept: string }) | null>(null);

    const integrationConcepts: Record<string, string> = {
        'Shopify': 'The central storefront engine powering all contractor transactions, catalog visibility, and order workflows within the Marketing Hub.',
        'SSO': 'Provides secure single sign-on for all users, ensuring identity consistency and personalized access across every connected system.',
        'Tableau': 'Delivers unified reporting and visualization of marketing, sales, and operational data aggregated through the integration layer.',
        'Docebo': 'Connects GAF’s learning ecosystem so that contractor training achievements in Docebo can automatically trigger marketing entitlements, access levels, or incentives within the Hub.',
        'Monarch': 'Ties DG3’s production management platform into the ecosystem to automate job intake, scheduling, and fulfillment tracking.',
        'Rewards': 'Integrates contractor incentives and loyalty balances, enabling point-based purchasing and engagement tracking in real time.',
        'DAM': 'Centralizes marketing collateral and brand assets so approved materials can flow seamlessly into variable print and digital outputs.',
        'BigQuery': 'Acts as the unified data backbone, storing and correlating all transactional and behavioral data for analytics and AI-driven insights.',
        'Propago': 'Manages physical inventory, fulfillment, and kitting of marketing materials linked directly to storefront orders.',
        'Chili GraFx': 'Powers hyper-variable collateral creation and on-demand personalization, while also enabling omnichannel content adaptation — allowing a single creative to be automatically resized and repurposed for social platforms like Facebook, Instagram, and LinkedIn.',
        'ServiceTitan': 'Sync contractor region, job type, and service data with Shopify.\n• Automatically trigger post-job campaigns (“Your neighborhood just got a new roof”).\n• Feed closed-job metrics back into Tableau for ROI tracking.',
        'QuickMeasure': 'When a QuickMeasure report is ordered, automatically create a Shopify order for a Measurement Presentation Kit.\n• Kit includes printed reports, proposal folders, leave-behind brochures, and optional yard sign templates.\n• Fulfilled through DG3 and tracked in Shopify for easy reordering.',
        'ScopeConnect': 'Automatically trigger a Claim Response Marketing Kit when a ScopeConnect estimate is created.\n• Kit includes restoration brochures, branded yard signs, and neighborhood door hangers.\n• All pre-approved designs maintain GAF brand consistency during insurance restoration projects.',
        'WeatherHub': 'When WeatherHub logs a storm in a contractor’s area, the Marketing Hub recommends a Storm Response Campaign Kit.\n• Includes direct-mail postcards to impacted ZIPs, social post templates, and yard signs.\n• Tagged in Shopify for tracking and ROI analysis through Tableau.',
        'TakeOff': 'When a TakeOff report is created, surface a New Build Presentation Kit in Shopify.\n• Includes printed 3D renderings, proposal folders, and co-branded job-site signage.\n• Reinforces GAF’s presence at the earliest stage of project planning.',
        'Present': 'Following a presentation, Shopify automatically surfaces a Follow-Up Kit.\n• Includes printed thank-you cards, review-request postcards, and referral inserts.\n• Optional “Install Marketing Kit” when a proposal is accepted, driving brand visibility through the full homeowner journey.',
        'Smart Mailer': 'Target homes by roof age, construction year, or storm event (via data APIs).\n• Instantly preview and personalize GAF-approved templates.\n• Fulfillment and tracking handled by DG3, with data feeding into Tableau for campaign performance analysis.'
    };
    
    const handleIntegrationClick = (item: EcosystemIntegration) => {
        const concept = integrationConcepts[item.name];
        if (concept) {
            setSelectedIntegration({ ...item, concept });
        }
    };

  return (
    <>
      <SectionHeader 
        title="Part 3: Partnership & Vision"
        subtitle="Our commitment extends beyond technology. This is about a dedicated partnership, a clear roadmap, and a shared vision for GAF's success."
      />
      <SectionWrapper id="support-vision-ecosystem">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 text-brand-green mb-4">
            <LinkIcon className="w-8 h-8 transform -rotate-45" />
            <LinkIcon className="w-8 h-8 transform -rotate-45" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-green mb-4">When Everything Connects, Everything Works</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            The DG3 Integration Layer is what turns the world's most advanced commerce engine — and $2B+ in R&D innovation — into measurable results for GAF.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105">It connects every GAF system — data, fulfillment, rewards, learning, analytics — into one unified ecosystem.</div>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105">It transforms Shopify's innovation into real-world orchestration, automation, and control.</div>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105">It enables custom apps and experiences built precisely around GAF's workflows and objectives.</div>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105">It's powered by a team that already knows GAF's business — inside and out.</div>
          </div>
           <p className="text-lg font-semibold text-gray-700 mt-12">
            Understanding GAF isn't our advantage — it's our foundation.
          </p>
        </div>
      </SectionWrapper>
      
      <SectionWrapper isGray>
          <SectionTitle title="API Layer & The Ecosystem" subtitle="Connect GAF's existing contractor platforms to the new Hub — turning operational events into seamless, brand-aligned marketing actions." />
          <div className="max-w-7xl mx-auto">
              <h3 className="font-bold text-center text-xl text-brand-green mb-2">Phase 1 Integrations</h3>
              <p className="text-center text-gray-500 mb-4">Click an item to learn more about the integration concept.</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
                  {ECOSYSTEM_INTEGRATIONS.map(item => <EcosystemIntegrationCard key={item.name} item={item} onClick={() => handleIntegrationClick(item)} />)}
              </div>
              
              <div className="relative text-center my-12 h-16">
                  <div className="absolute top-1/2 left-0 w-full h-0 border-t-2 border-dashed border-gray-300"></div>
                  <div className="absolute top-0 left-1/2 w-0 h-full border-l-2 border-dashed border-gray-300"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block px-6 py-4 border-2 border-brand-green rounded-lg bg-patterned z-10 shadow-lg">
                      <h4 className="text-xl font-bold text-brand-green">DG3 Integration Layer</h4>
                  </div>
              </div>
                
              <h3 className="font-bold text-center text-xl text-brand-green mb-2">Future Integration Opportunities</h3>
              <p className="text-center text-gray-500 mb-4">Click an item to learn more about the integration concept.</p>
              <div className="space-y-4 max-w-4xl mx-auto">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {FUTURE_ECOSYSTEM_INTEGRATIONS.slice(0, 4).map(item => <EcosystemIntegrationCard key={item.name} item={item} isFuture onClick={() => handleIntegrationClick(item)} />)}
                  </div>
                  <div className="flex justify-center">
                      <div className="grid grid-cols-3 gap-4">
                          {FUTURE_ECOSYSTEM_INTEGRATIONS.slice(4, 7).map(item => <EcosystemIntegrationCard key={item.name} item={item} isFuture onClick={() => handleIntegrationClick(item)} />)}
                      </div>
                  </div>
              </div>
          </div>
      </SectionWrapper>

      <SectionWrapper id="support-team">
        {TEAMS_DATA.map(team => <TeamSection key={team.id} team={team} />)}
      </SectionWrapper>
      
      <SectionWrapper isGray id="support-timeline">
          <SectionTitle 
            title="A Phased Approach to a Successful Launch" 
            subtitle="Our implementation plan is designed for clarity, accountability, and momentum, moving from foundational strategy to a seamless go-live and beyond." 
          />
          <p className="text-center text-gray-600 mb-10 -mt-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Click on any task below to explore its sub-tasks in greater detail.
          </p>
          <ImplementationTimeline />
      </SectionWrapper>
      
      <SectionWrapper id="support-strategy">
          <SectionTitle title="Our Approach to a Successful Launch" subtitle="" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {APPROACH_POINTS_DATA.slice(0,3).map(item => <ApproachCard key={item.title} item={item} />)}
              <div className="md:col-span-2 lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-8">
                    {APPROACH_POINTS_DATA.slice(3).map(item => <ApproachCard key={item.title} item={item} />)}
                </div>
              </div>
          </div>
      </SectionWrapper>
      
       <SectionWrapper isGray>
          <SectionTitle title="Why DG3 Is The Right Choice" subtitle="" />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {WHY_DG3_POINTS_DATA.map(item => <WhyDG3Card key={item.title} item={item} />)}
          </div>
      </SectionWrapper>
      
       <SectionWrapper>
          <SectionTitle title="Key Operational & Financial Considerations" subtitle="" />
          <div className="max-w-3xl mx-auto space-y-4">
              {KEY_CONSIDERATIONS_DATA.map(item => <KeyConsiderationItem key={item.text} item={item} />)}
          </div>
      </SectionWrapper>

      <Modal
        isOpen={!!selectedIntegration}
        onClose={() => setSelectedIntegration(null)}
        title={`${selectedIntegration?.name || ''} - Finer Details`}
      >
        {selectedIntegration && (
            <div>
                <h3 className="text-xl font-bold text-white mb-4">Integration Concept</h3>
                <p className="text-gray-300 whitespace-pre-line">
                    {selectedIntegration.concept}
                </p>
            </div>
        )}
      </Modal>
    </>
  );
};
