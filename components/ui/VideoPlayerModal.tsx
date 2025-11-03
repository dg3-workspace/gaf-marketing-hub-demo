import React, { useRef } from 'react';
import { Modal } from './Modal';
import type { VideoDetail } from '../../types';

interface VideoPlayerModalProps {
  video: VideoDetail | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, onClose }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  if (!video) {
    return null;
  }

  const isLocalVideo = (url: string | undefined): boolean => {
    if (!url) return false;
    return url.startsWith('/videos/') || url.includes('.mp4') || url.includes('.webm') || url.includes('.ogg');
  };

  const isLoomVideo = (url: string | undefined): boolean => {
    if (!url) return false;
    return url.includes('loom.com');
  };

  const getUrl = (v: VideoDetail): string => {
    if (v.embedUrl) {
      // Check if it's a local video file
      if (isLocalVideo(v.embedUrl)) {
        return v.embedUrl;
      }
      // It's a Loom video - append autoplay
      if (isLoomVideo(v.embedUrl)) {
        const url = new URL(v.embedUrl);
        url.searchParams.set('autoplay', '1');
        return url.toString();
      }
      // Other external embeds
      return v.embedUrl;
    }
    // It's a YouTube video (or placeholder)
    const effectiveVideoId = v.videoId || '4cQNtjEzRYo'; 
    return `https://www.youtube.com/embed/${effectiveVideoId}?autoplay=1&rel=0`;
  }

  const handleClose = () => {
    if (iframeRef.current) {
      // By setting the src to empty, the video should stop playing.
      iframeRef.current.src = 'about:blank';
    }
    onClose();
  };

  const videoUrl = getUrl(video);
  const isLocal = isLocalVideo(videoUrl);

  return (
    <Modal isOpen={!!video} onClose={handleClose} title={video.label} size="xlarge">
      <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        {isLocal ? (
          <video
            key={video.id}
            className="w-full h-full"
            controls
            autoPlay
            controlsList="nodownload"
            playsInline
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            ref={iframeRef}
            key={video.id}
            className="w-full h-full"
            src={videoUrl}
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </Modal>
  );
};