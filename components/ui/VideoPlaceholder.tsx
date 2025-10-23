
import React, { useRef, useEffect } from 'react';

interface VideoPlaceholderProps {
  label: string;
  className?: string;
  videoPath?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ label, className = '', videoPath }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  if (videoPath) {
    return (
      <div className={`aspect-video w-full rounded-lg overflow-hidden bg-black ${className}`}>
        <video 
          ref={videoRef}
          key={videoPath}
          controls 
          className="w-full h-full"
          preload="auto"
          playsInline
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
      </div>
    );
  }

  return (
    <div className={`aspect-video w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center flex-col text-gray-400 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      <p className="text-center font-medium">{label}</p>
    </div>
  );
};