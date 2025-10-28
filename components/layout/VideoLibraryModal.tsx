
import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { VideoPlayerModal } from '../ui/VideoPlayerModal';
import { END_USER_CAPABILITIES, ADMIN_CAPABILITIES } from '../../constants';
import type { Capability, VideoDetail } from '../../types';

interface VideoLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24" fill="currentColor" {...props}><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
);

const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m12 3-1.5 5-5-1.5L7 12l-1.5 5 5 1.5L12 21l1.5-5 5 1.5L17 12l1.5-5-5-1.5Z"/>
    </svg>
);

const VideoLibraryContent: React.FC<{
  onPlayVideo: (video: VideoDetail) => void;
}> = ({ onPlayVideo }) => {
    
    const renderCapability = (capability: Capability, index: number, isEndUser: boolean) => {
        const hasEssentials = capability.videos && capability.videos.length > 0;
        const hasUnlockMore = capability.exploreFurtherVideos && capability.exploreFurtherVideos.length > 0;

        if (!hasEssentials && !hasUnlockMore) {
            return null;
        }
        
        const sectionNumber = isEndUser ? index + 1 : index + 1 + END_USER_CAPABILITIES.length;
        const formattedNumber = sectionNumber.toString().padStart(2, '0');

        return (
            <div key={capability.id} className="mb-8 last:mb-0">
                <h4 className="text-xl font-bold text-brand-green mb-4 pb-2 border-b border-gray-200 flex items-center gap-3">
                   <span className="text-gray-500 font-mono text-lg">{formattedNumber}</span> 
                   <span>{capability.title}</span>
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    {hasEssentials && (
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-full">
                            <h5 className="text-md font-semibold text-gray-600 mb-3">The Essentials</h5>
                            <ul className="space-y-2">
                                {capability.videos.map(video => (
                                    <li key={video.id}>
                                        <button 
                                            onClick={() => onPlayVideo(video)}
                                            className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 text-gray-700 bg-white hover:bg-gray-100 hover:text-brand-gray group border border-gray-200"
                                        >
                                            <PlayIcon className="w-4 h-4 text-brand-green flex-shrink-0 transition-transform group-hover:scale-110" />
                                            <span className="flex-1">{video.label.replace('Video: ', '')}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {hasUnlockMore && (
                        <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 border border-brand-green/40 rounded-lg p-4 shadow-lg transition-all duration-300 hover:shadow-green-500/20 h-full">
                            <h5 className="text-md font-bold text-brand-green mb-3 flex items-center gap-2">
                                <SparklesIcon className="w-5 h-5" />
                                <span>Unlock More</span>
                            </h5>
                            <ul className="space-y-2">
                                {capability.exploreFurtherVideos!.map(video => (
                                    <li key={video.id}>
                                        <button 
                                            onClick={() => onPlayVideo(video)}
                                            className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 text-gray-700 bg-white/70 backdrop-blur-sm hover:bg-white hover:text-brand-gray group border border-green-200/50 shadow-sm hover:shadow-md"
                                        >
                                            <PlayIcon className="w-4 h-4 text-brand-green flex-shrink-0 transition-transform group-hover:scale-110" />
                                            <span className="flex-1">{video.label.replace('Video: ', '')}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    
    return (
        <div>
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-brand-gray mb-6 pb-4 border-b-2 border-brand-green">Part 1: End-User Experience</h3>
                {END_USER_CAPABILITIES.map((cap, index) => renderCapability(cap, index, true))}
            </div>
            <div>
                <h3 className="text-2xl font-bold text-brand-gray mb-6 pb-4 border-b-2 border-brand-green">Part 2: Admin & Analytics</h3>
                {ADMIN_CAPABILITIES.map((cap, index) => renderCapability(cap, index, false))}
            </div>
        </div>
    );
};

export const VideoLibraryModal: React.FC<VideoLibraryModalProps> = ({ isOpen, onClose }) => {
    const [playingVideo, setPlayingVideo] = useState<VideoDetail | null>(null);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} title="Video Library" size="xlarge" variant="light">
                <VideoLibraryContent onPlayVideo={setPlayingVideo} />
            </Modal>
            <VideoPlayerModal
                video={playingVideo}
                onClose={() => setPlayingVideo(null)}
            />
        </>
    );
};
