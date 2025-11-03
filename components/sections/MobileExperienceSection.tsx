

import React, { useState } from 'react';
import { VideoPlaceholder } from '../ui/VideoPlaceholder';
import { MOBILE_CONTRACTOR_VIDEOS, MOBILE_ADMIN_CAPABILITIES } from '../../constants';
import type { VideoDetail, Capability } from '../../types';

const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"></polygon>
    </svg>
);

const VideoSelectionButton: React.FC<{ video: VideoDetail; isActive: boolean; onClick: () => void; }> = ({ video, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full text-left pl-4 pr-2 py-3 border-l-4 -ml-1 transition-all duration-200 flex items-center gap-3 ${
            isActive
            ? 'border-brand-green bg-green-50/70'
            : 'border-transparent hover:bg-gray-100 hover:border-gray-300'
        }`}
    >
        <PlayIcon className={`w-4 h-4 transition-colors ${isActive ? 'text-brand-green' : 'text-gray-400'}`} />
        <span className={`font-semibold ${isActive ? 'text-brand-green' : 'text-gray-700'}`}>
            {video.shortLabel}
        </span>
    </button>
);


export const MobileExperienceSection: React.FC = () => {
    const [activeContractorVideo, setActiveContractorVideo] = useState<VideoDetail>(MOBILE_CONTRACTOR_VIDEOS[0]);
    const [activeAdminVideo, setActiveAdminVideo] = useState<VideoDetail>(MOBILE_ADMIN_CAPABILITIES[0].videos[0]);

    return (
        <section className="min-h-screen bg-patterned py-20 px-4 sm:px-8 flex items-center">
            <div className="container mx-auto">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-green">The Mobile Experience: Power in Your Pocket</h2>
                    <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
                        The mobile experience isn't an afterthought—it's designed with a mobile-first philosophy. It's not a scaled-down version; it's the complete, full-fidelity experience for both users and admins.
                    </p>
                </div>

                <div className="space-y-12 max-w-7xl mx-auto">
                    {/* Contractor Experience */}
                    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-brand-green mb-4">For Your Contractors & TMs</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    The entire shopping journey is full-fidelity. Every feature from the desktop site is fully optimized for mobile, ensuring a seamless and intuitive experience on any device.
                                </p>
                                <div className="pt-4">
                                    <h4 className="text-md font-bold text-brand-gray mb-3">Demonstration:</h4>
                                    <div className="space-y-2 border-l-4 border-gray-200">
                                       {MOBILE_CONTRACTOR_VIDEOS.map((video) => (
                                            <VideoSelectionButton
                                                key={video.id}
                                                video={video}
                                                isActive={activeContractorVideo.id === video.id}
                                                onClick={() => setActiveContractorVideo(video)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <VideoPlaceholder 
                                    label={activeContractorVideo.label} 
                                    videoId={activeContractorVideo.videoId} 
                                    embedUrl={activeContractorVideo.embedUrl}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Admin Experience */}
                     <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="md:order-2">
                                <VideoPlaceholder 
                                    label={activeAdminVideo.label} 
                                    videoId={activeAdminVideo.videoId}
                                    embedUrl={activeAdminVideo.embedUrl}
                                />
                            </div>
                            <div className="space-y-4 md:order-1">
                                <h3 className="text-2xl font-bold text-brand-green mb-4">For GAF Administrators</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Full administrative power on the go. Manage users, approve orders, and view real-time analytics from any device, without compromise.
                                </p>
                                <div className="space-y-6 pt-4">
                                    {MOBILE_ADMIN_CAPABILITIES.map(cat => (
                                        <div key={cat.id}>
                                            <h4 className="text-md font-bold text-brand-gray mb-3">{cat.title.replace(' (Mobile)','')}</h4>
                                            <div className="space-y-2 border-l-4 border-gray-200">
                                                {cat.videos.map(video => (
                                                    <VideoSelectionButton
                                                        key={video.id}
                                                        video={video}
                                                        isActive={activeAdminVideo.id === video.id}
                                                        onClick={() => setActiveAdminVideo(video)}
                                                    />
                                                ))}
                                            </div>

                                            {cat.exploreFurtherVideos && (
                                                <div className="pt-3 mt-3 border-t border-gray-200">
                                                    <h5 className="text-sm font-semibold text-gray-500 mb-3 ml-2">Unlock More:</h5>
                                                    <div className="space-y-2 border-l-4 border-gray-200">
                                                        {cat.exploreFurtherVideos.map(video => (
                                                            <VideoSelectionButton
                                                                key={video.id}
                                                                video={video}
                                                                isActive={activeAdminVideo.id === video.id}
                                                                onClick={() => setActiveAdminVideo(video)}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};