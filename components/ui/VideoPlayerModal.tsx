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

  const getUrl = (v: VideoDetail): string => {
    if (v.embedUrl) {
      // It's a Loom video - append autoplay
      const url = new URL(v.embedUrl);
      url.searchParams.set('autoplay', '1');
      return url.toString();
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

  return (
    <Modal isOpen={!!video} onClose={handleClose} title={video.label} size="xlarge">
      <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <iframe
          ref={iframeRef}
          key={video.id}
          className="w-full h-full"
          src={getUrl(video)}
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </Modal>
  );
};