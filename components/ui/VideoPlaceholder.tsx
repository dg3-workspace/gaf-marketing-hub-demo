
import React from 'react';

interface VideoPlaceholderProps {
  label: string;
  className?: string;
  videoPath?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ label, className = '', videoPath }) => {
  if (videoPath) {
    return (
      <div className={`aspect-video w-full rounded-lg overflow-hidden bg-black ${className}`}>
        <video 
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
          onStalled={() => console.log('Video stalled:', videoPath)}
          onWaiting={() => console.log('Video waiting for data:', videoPath)}
          onSuspend={() => console.log('Video loading suspended:', videoPath)}
          onProgress={(e) => {
            const videoElement = e.currentTarget as HTMLVideoElement;
            if (videoElement.buffered.length > 0) {
              const bufferedEnd = videoElement.buffered.end(videoElement.buffered.length - 1);
              const duration = videoElement.duration;
              if (duration > 0) {
                console.log(`Video buffered: ${((bufferedEnd / duration) * 100).toFixed(1)}%`);
              }
            }
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