import React, { useState } from 'react';
import { ADMIN_CAPABILITIES, END_USER_CAPABILITIES } from '../../constants';
import { VideoPlaceholder } from '../ui/VideoPlaceholder';
import { DiagramPlaceholder } from '../ui/DiagramPlaceholder';
import { ExpandableDetail } from '../ui/ExpandableDetail';
import type { Capability, CapabilityDetail, VideoDetail } from '../../types';
import { SectionHeader } from '../ui/SectionHeader';

const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 21h18"/><path d="M5 21V5l7-4 7 4v16"/><path d="M9 21v-8h6v8"/><path d="M9 9h6v4H9z"/></svg>;
const MagicWandIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.12-.65-.82-2.17-1.43-3.12-.05z"/><path d="m12 15-3-3a9 9 0 0 1 3-12 9 9 0 0 1 12 3l-3 3"/><path d="m9 12 3 3"/><path d="m21 21-3-3"/></svg>;
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>;

const EnhancementDisplay: React.FC<{ enhancement: CapabilityDetail }> = ({ enhancement }) => {
  return (
    <div className="relative bg-gradient-to-br from-green-50 to-gray-100 border border-brand-green/40 rounded-lg p-6 overflow-hidden shadow-lg transition-all duration-300 group hover:shadow-green-500/30 hover:border-brand-green hover:scale-[1.02]">
      <div className="absolute top-0 right-0 px-3 py-1 bg-brand-green text-white text-xs font-bold rounded-bl-lg tracking-wider">
        COMING IN 2026
      </div>
      <div className="flex items-start gap-4">
        <div className="text-brand-green flex-shrink-0 mt-1 bg-white p-2 rounded-full">
          {/* FIX: Remove incorrect type cast on icon to allow props to be passed to cloneElement. */}
          {React.cloneElement(enhancement.icon, { className: 'w-6 h-6' })}
        </div>
        <div>
          <h5 className="text-lg font-bold text-brand-gray mb-2">{enhancement.title}</h5>
          <div className="text-gray-700 text-sm leading-relaxed space-y-3">
             {enhancement.description.split('\n').map((paragraph, index) => (
                paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const CapabilityModule: React.FC<{ capability: Capability; index: number }> = ({ capability, index }) => {
  const [activeVideo, setActiveVideo] = useState<VideoDetail>(capability.videos[0]);
  const [enhancementsOpen, setEnhancementsOpen] = useState(false);
  const isReversed = index % 2 !== 0;
  const totalVideos = capability.videos.length + (capability.exploreFurtherVideos?.length || 0);

  const PlayIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
  );

  const videoSection = (
    <div>
      <VideoPlaceholder 
        label={activeVideo.label}
        videoId={activeVideo.videoId}
      />
      {totalVideos > 1 && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg space-y-4 border border-gray-200">
          <div>
            <h5 className="text-sm font-semibold text-gray-500 mb-3">The Essentials:</h5>
            <div className="flex flex-wrap gap-3">
              {capability.videos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 transform hover:scale-105 ${
                    activeVideo.id === video.id
                      ? 'bg-brand-green text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {PlayIcon}
                  <span>{video.shortLabel}</span>
                </button>
              ))}
            </div>
          </div>
          {capability.exploreFurtherVideos && capability.exploreFurtherVideos.length > 0 && (
            <div className="pt-4 border-t border-gray-200">
                <h5 className="text-sm font-semibold text-gray-500 mb-3">Unlock More:</h5>
                <div className="flex flex-wrap gap-3">
                    {capability.exploreFurtherVideos.map((video) => (
                        <button
                            key={video.id}
                            onClick={() => setActiveVideo(video)}
                            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 transform hover:scale-105 ${
                                activeVideo.id === video.id
                                    ? 'bg-brand-green text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                            }`}
                        >
                            {PlayIcon}
                            <span>{video.shortLabel}</span>
                        </button>
                    ))}
                </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div className={`space-y-4 ${isReversed ? 'md:order-2' : ''}`}>
        <span className="text-6xl font-extrabold text-brand-green opacity-40">0{index + 1 + END_USER_CAPABILITIES.length}</span>
        <h3 className="text-2xl font-bold text-brand-green mt-[-1rem]">{capability.title}</h3>
        <p className="text-gray-600 leading-relaxed">{capability.description}</p>
        
        <div className="pt-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-500 tracking-wider uppercase mb-3">
            <SearchIcon />
            <span>Feature Details</span>
          </h4>
          <div className="space-y-3">
            {capability.details.map((detail) => (
              <ExpandableDetail key={detail.title} detail={detail} />
            ))}
          </div>
        </div>
      </div>
      <div className={isReversed ? 'md:order-1' : ''}>
        {capability.visualType === 'diagram' ? (
            <DiagramPlaceholder label={capability.visualLabel || 'System Diagram'} />
        ) : (
          videoSection
        )}
        
        {capability.enhancements && capability.enhancements.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={() => setEnhancementsOpen(!enhancementsOpen)}
              className="w-full text-left flex items-center justify-between gap-2 text-sm font-semibold text-brand-green tracking-wider uppercase mb-2 p-2 -ml-2 rounded-md hover:bg-green-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
              aria-expanded={enhancementsOpen}
            >
              <div className="flex items-center gap-2">
                <MagicWandIcon />
                <div className="flex-1">
                  <span>2026 Enhancement Roadmap</span>
                  <span className="block font-normal text-gray-500 normal-case text-xs tracking-normal mt-0.5">{capability.enhancements[0].title}</span>
                </div>
              </div>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${enhancementsOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
             <div
                className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out"
                style={{ gridTemplateRows: enhancementsOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <div className="space-y-4 pt-2">
                      {capability.enhancements.map(enh => (
                          <EnhancementDisplay key={enh.title} enhancement={enh} />
                      ))}
                  </div>
                </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};


export const AdminExperienceSection: React.FC = () => {
  return (
    <section>
      <SectionHeader 
        title="Part 2: The Administrator Experience & Analytics"
        subtitle="Demonstrating the tools GAF will use to manage the platform, gain insights, and leverage AI without vendor intervention."
      />
      <div className="bg-patterned py-20 px-8">
        <div className="container mx-auto">
            <div className="space-y-20 max-w-6xl mx-auto">
              {ADMIN_CAPABILITIES.map((capability, index) => (
                <div id={capability.id} key={capability.id}>
                  <CapabilityModule capability={capability} index={index} />
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};