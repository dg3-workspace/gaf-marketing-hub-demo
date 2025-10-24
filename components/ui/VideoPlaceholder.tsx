
import React, { useState, useRef, useEffect } from 'react';
import { Modal } from './Modal';

interface VideoPlaceholderProps {
  label: string;
  className?: string;
  videoId?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ label, className = '', videoId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Construct the local video path from videoId
  const videoPath = videoId ? `/videos/${videoId}.mp4` : undefined;

  useEffect(() => {
    const handlePlay = () => {
      // Pause all other video elements on the page
      const allVideos = document.querySelectorAll('video');
      allVideos.forEach((video) => {
        if (video !== videoRef.current && !video.paused) {
          video.pause();
        }
      });
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('play', handlePlay);
      return () => {
        videoElement.removeEventListener('play', handlePlay);
      };
    }
  }, []);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    // Pause video when modal closes
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <>
      <button 
        onClick={handleOpen}
        className={`aspect-video w-full rounded-lg overflow-hidden relative group cursor-pointer ${
          videoPath 
            ? 'bg-black' 
            : 'bg-gray-100 border-2 border-dashed border-gray-300 hover:bg-gray-200 hover:border-brand-green/50'
        } ${className}`}
        aria-label={`Play video: ${label}`}
      >
        {videoPath ? (
          <>
            <video 
              className="w-full h-full object-cover"
              preload="metadata"
              playsInline
              muted
            >
              <source src={`${videoPath}#t=0.1`} type="video/mp4" />
            </video>
            {/* Play button overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 group-hover:text-white transition-all duration-300">
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
            {/* Label overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white font-medium text-center">{label}</p>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center flex-col text-gray-400">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-brand-green/50 transition-colors duration-300">
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 group-hover:text-brand-green transition-all duration-300 transform group-hover:scale-110">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <p className="text-center font-medium mt-4 text-gray-500 group-hover:text-brand-gray transition-colors duration-300">{label}</p>
          </div>
        )}
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        title={label}
      >
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          {videoPath && (
            <video 
              ref={videoRef}
              key={videoPath}
              controls 
              className="w-full h-full"
              preload="auto"
              playsInline
              autoPlay
              onError={(e) => {
                const videoElement = e.currentTarget as HTMLVideoElement;
                console.error('Video error:', {
                  error: videoElement.error,
                  errorCode: videoElement.error?.code,
                  path: videoPath
                });
              }}
            >
              <source src={videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {!videoPath && (
            <div className="w-full h-full flex items-center justify-center text-white">
              <p>No video available</p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
