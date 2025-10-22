import React, { ReactElement, useState } from 'react';
import { TEAMS_DATA, GANTT_TASKS_DATA, GANTT_MILESTONES_DATA, APPROACH_POINTS_DATA, WHY_DG3_POINTS_DATA, KEY_CONSIDERATIONS_DATA, ECOSYSTEM_INTEGRATIONS, FUTURE_ECOSYSTEM_INTEGRATIONS } from '../../constants';
import type { Team, TeamMember, GanttTask, GanttMilestone, ApproachPoint, ChoicePoint, ConsiderationPoint, EcosystemIntegration } from '../../types';
import { Modal } from '../ui/Modal';

// FIX: Define missing icon components to resolve reference errors.
const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
);
const PersonPlaceholderIcon = (props: React.HTMLAttributes<HTMLDivElement>) => <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-full" {...props}><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>;

const TeamMemberImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <img src={src} alt={alt} className="w-full h-full bg-gray-200 flex items-center justify-center rounded-full" />
);

// ===================================================================================
// SUB-COMPONENTS (Defined locally to adhere to single-file update constraint)
// ===================================================================================

const SectionTitle: React.FC<{ title: string; subtitle: string; }> = ({ title, subtitle }) => (
    <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-gray">{title}</h2>
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
             <div className="col-span-1 md:col-span-2 grid grid-cols-3 gap-4 items-center h-full">
                {member.additionalImages.map((img, i) => <div key={i} className="aspect-square">{img}</div>)}
             </div>
        )
    }
    if (member.isCompact) {
         return (
             <div className="bg-white p-6 rounded-lg border border-gray-200 h-full flex flex-col justify-center text-center">
                <div className="w-64 h-auto mx-auto mb-4">{member.imageComponent}</div>
                <h4 className="font-bold text-brand-gray text-lg">{member.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{member.description}</p>
            </div>
         )
    }
    return (
        <div className="flex items-start gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">{member.imageComponent}</div>
            <div>
                <h4 className="font-bold text-brand-gray text-xl">{member.name}</h4>
                <p className="font-semibold text-brand-green text-sm mb-2">{member.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </div>
        </div>
    );
};

const TeamSection: React.FC<{ team: Team }> = ({ team }) => {

    if (team.id === 'team-tech')
    {
        const people = team.members.filter(m => !m.isCompact);
        const techDev = team.members.find(m => m.name === 'Technical Developer');
        const shopifyDev = team.members.find(m => m.name === 'Shopify + Developer');
        
        return (
            <div className="max-w-6xl mx-auto mb-16">
                <div className="flex items-center justify-center gap-4 mb-8">
                     <h3 className="text-3xl font-bold text-center text-brand-gray">{team.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-20">
                        {people.map(member => (
                            <div key={member.name} className="flex items-start gap-6">
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
                    <div className="space-y-5">
                        {/* Technical Developer */}
                        {techDev && (
                            <div className="bg-white p-4 rounded-lg border border-gray-200 h-full flex flex-col justify-center text-center">
                                <div className="w-44 h-auto mx-auto mb-4">{techDev.imageComponent}</div>
                                <h4 className="font-bold text-brand-gray text-lg">{techDev.name}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mt-2">{techDev.description}</p>
                            </div>
                        )}
                        
                        {/* Shopify + Developer */}
                        {shopifyDev && (
                            <div className="bg-white p-4 rounded-lg border border-gray-200 h-full flex flex-col justify-center text-center">
                                <div className="flex justify-center -space-x-6 mb-6">
                                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-100 z-20 transform hover:scale-110 transition-transform"><TeamMemberImage src="/images/Donna.jpg" alt="Promo" /></div>
                                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-100 z-10 transform hover:scale-110 transition-transform"><TeamMemberImage src="/images/Paul.jpg" alt="Promo" /></div>
                                </div>
                                <h4 className="font-bold text-brand-gray text-lg">{shopifyDev.name}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mt-2">{shopifyDev.description}</p>
                            </div>
                        )}
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
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
                    <h3 className="text-3xl font-bold text-center text-brand-gray">{team.title}</h3>
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-green"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left Column: Team Members */}
                        <div className="space-y-10">
                            {people.map(member => (
                                <div key={member.name} className="flex items-start gap-6">
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

                        {/* Right Column: Image Collage */}
                        <div className="space-y-4">
                            {/* Overlapping circles */}
                            <div className="flex justify-center -space-x-6 mb-6">
                                <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-100 z-20 transform hover:scale-110 transition-transform"><TeamMemberImage src="/images/promo.png" alt="Promo" /></div>
                                <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-100 z-10 transform hover:scale-110 transition-transform"><TeamMemberImage src="/images/promo 2.png" alt="Promo" /></div>
                                <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-100 z-0 transform hover:scale-110 transition-transform"><TeamMemberImage src="/images/promo 4.jpg" alt="Promo" /></div>
                            </div>
                            
                            {/* Rectangular images */}
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
                <h3 className="text-2xl font-bold text-center text-brand-gray mb-10">{team.title}</h3>
                <div className="relative">
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
            <h3 className="text-2xl font-bold text-center text-brand-gray mb-10">{team.title}</h3>
            <div className={`grid grid-cols-1 ${team.id === 'team-exec' ? 'md:grid-cols-1 lg:grid-cols-2' : 'md:grid-cols-2'} gap-x-12 gap-y-10`}>
                {team.members.map(member => <TeamMemberCard key={member.name} member={member} />)}
            </div>
        </div>
    );
};

// --- Gantt Chart Components ---

const GanttChart: React.FC = () => {
    const totalWeeks = 25;
    const weekHeaders = Array.from({ length: totalWeeks }, (_, i) => i + 1);

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-6">
            <div className="overflow-x-auto">
                <div className="relative" style={{ minWidth: '1200px' }}>
                    {/* Week Headers */}
                    <div className="grid grid-cols-[200px,repeat(25,minmax(0,1fr))] text-sm font-semibold text-gray-500 border-b border-gray-200 pb-2">
                        <div className="pl-2">Task</div>
                        {weekHeaders.map(week => <div key={week} className="text-center">{week}</div>)}
                    </div>
                    {/* Grid Lines */}
                    <div className="absolute top-10 bottom-0 left-[200px] grid grid-cols-25 w-[calc(100%-200px)]">
                        {weekHeaders.map(week => <div key={week} className="h-full border-r border-gray-100"></div>)}
                    </div>
                    {/* Tasks */}
                    <div className="relative pt-2">
                        {GANTT_TASKS_DATA.map((task, index) => (
                            <div key={task.name} className="grid grid-cols-[200px,repeat(25,minmax(0,1fr))] items-center h-10 group">
                                <div className="text-sm text-gray-700 font-medium truncate pr-2">{task.name}</div>
                                {task.spans.map((span, i) => (
                                    <div
                                        key={i}
                                        className={`h-6 rounded ${task.isHighlighted ? 'bg-yellow-400' : 'bg-brand-green'}`}
                                        style={{
                                            gridColumnStart: span.start + 1,
                                            gridColumnEnd: span.end + 2,
                                        }}
                                    ></div>
                                ))}
                            </div>
                        ))}
                         {GANTT_MILESTONES_DATA.map(milestone => (
                            <div
                                key={milestone.name}
                                className="absolute h-10 flex items-center"
                                style={{ left: `${200 + ((milestone.week -1) / totalWeeks) * (1200-200) }px`, bottom: '-20px' }}
                            >
                               <div className="w-5 h-5 bg-brand-green transform rotate-45" />
                               <span className="ml-3 text-sm font-semibold text-gray-700">{milestone.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Approach & Strategy Components ---
const ApproachCard: React.FC<{ item: ApproachPoint }> = ({ item }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
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
    <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm text-center">
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
    <div className="bg-white p-4 rounded-md border border-gray-200 flex items-center gap-3">
        <div className="text-green-500"><CheckCircleIcon className="w-6 h-6"/></div>
        <p className="font-semibold text-brand-gray">{item.text}</p>
    </div>
);

// --- Ecosystem Component ---
const EcosystemIntegrationCard: React.FC<{ item: EcosystemIntegration; isFuture?: boolean; onClick?: () => void; }> = ({ item, isFuture = false, onClick }) => {
    const content = (
        <>
            <div className={`text-brand-green w-8 h-8 mx-auto mb-2`}>{React.cloneElement(item.icon, { className: 'w-full h-full' })}</div>
            <p className="font-semibold text-brand-gray text-sm">{item.name}</p>
            <p className="text-xs text-gray-500">{item.category}</p>
        </>
    );

    if (onClick) {
        return (
            <button onClick={onClick} className="w-full text-left border border-gray-200 rounded-lg p-3 text-center bg-white shadow-lg h-full flex flex-col justify-center transition-transform duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl">
                {content}
            </button>
        );
    }

    return (
        <div className="border border-gray-200 rounded-lg p-3 text-center bg-white shadow-lg h-full flex flex-col justify-center transition-transform duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
            {content}
        </div>
    );
};

// ===================================================================================
// MAIN SECTION COMPONENT
// ===================================================================================

export const StrategicSupportSection: React.FC = () => {
    const [selectedIntegration, setSelectedIntegration] = useState<(EcosystemIntegration & { concept: string }) | null>(null);

    const integrationConcepts: Record<string, string> = {
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
      <SectionWrapper id="support-vision-ecosystem">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 text-brand-green mb-4">
            <LinkIcon className="w-8 h-8 transform -rotate-45" />
            <LinkIcon className="w-8 h-8 transform -rotate-45" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-gray mb-4">When Everything Connects, Everything Works</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            The DG3 Integration Layer is what turns the world's most advanced commerce engine — and $2B+ in R&D innovation — into measurable results for GAF.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">It connects every GAF system — data, fulfillment, rewards, learning, analytics — into one unified ecosystem.</div>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">It transforms Shopify's innovation into real-world orchestration, automation, and control.</div>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">It enables custom apps and experiences built precisely around GAF's workflows and objectives.</div>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">It's powered by a team that already knows GAF's business — inside and out.</div>
          </div>
           <p className="text-lg font-semibold text-gray-700 mt-12">
            Understanding GAF isn't our advantage — it's our foundation.
          </p>
        </div>
      </SectionWrapper>
      
      <SectionWrapper isGray>
          <SectionTitle title="API Layer & The Ecosystem" subtitle="Connect GAF's existing contractor platforms to the new Hub — turning operational events into seamless, brand-aligned marketing actions." />
          <div className="max-w-7xl mx-auto">
              <h3 className="font-bold text-center text-xl text-brand-gray mb-2">Phase 1 Integrations</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
                  {ECOSYSTEM_INTEGRATIONS.map(item => <EcosystemIntegrationCard key={item.name} item={item} />)}
              </div>
              
              <div className="relative text-center my-12 h-16">
                  <div className="absolute top-1/2 left-0 w-full h-0 border-t-2 border-dashed border-gray-300"></div>
                  <div className="absolute top-0 left-1/2 w-0 h-full border-l-2 border-dashed border-gray-300"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block px-6 py-4 border-2 border-brand-green rounded-lg bg-patterned z-10 shadow-lg">
                      <h4 className="text-xl font-bold text-brand-green">DG3 Integration Layer</h4>
                  </div>
              </div>
                
              <h3 className="font-bold text-center text-xl text-brand-gray mb-2">Future Integration Opportunities</h3>
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
          <SectionTitle title="Implementation Timeline & Milestones" subtitle="A detailed week-by-week plan for a successful launch." />
          <div className="max-w-7xl mx-auto">
              <GanttChart />
          </div>
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
        title={`Future Integration: ${selectedIntegration?.name || ''}`}
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