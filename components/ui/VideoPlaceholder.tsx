import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';

interface VideoPlaceholderProps {
  label: string;
  className?: string;
  videoId?: string;
  embedUrl?: string;
}

const Spinner: React.FC = () => (
    <div className="w-12 h-12 border-4 border-gray-200 border-t-brand-green rounded-full animate-spin"></div>
);

const CustomVideoThumbnail: React.FC<{ title: string }> = ({ title }) => {
  const displayTitle = title.replace(/Mobile(\sAdmin)?:\s/,'');

  return (
    <div className="w-full h-full bg-green-50 flex flex-col items-center justify-center p-4 text-center relative group-hover:bg-green-100 transition-colors duration-300 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />
      
      {/* Mobile Device Graphic */}
      <div className="relative h-[90%] w-auto aspect-[9/19.5]">
        {/* Phone frame and screen area */}
        <div className="absolute inset-0 bg-gray-800 border-4 border-gray-900 rounded-[2.5rem] shadow-xl overflow-hidden">
            {/* Screen Content */}
            <div className="relative z-0 w-full h-full flex flex-col items-center justify-center p-4 pt-10 text-center text-white">
              <p className="text-xs font-bold tracking-wider uppercase text-brand-green mb-2">Mobile Demo</p>
              <h3 className="text-base font-bold tracking-tight leading-tight">{displayTitle}</h3>
              
              <div className="relative w-16 h-16 mx-auto mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white/70 group-hover:text-white/90 transition-colors duration-300"><circle cx="12" cy="12" r="10"></circle></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24" fill="currentColor" className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 text-white group-hover:text-white transition-all duration-300 transform group-hover:scale-110"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
            </div>
        </div>
        
        {/* Phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-b-xl z-10"></div>
        {/* Phone side buttons */}
        <div className="absolute -right-1 top-20 w-1 h-12 bg-gray-900 rounded-r-md"></div>
        <div className="absolute -left-1 top-32 w-1 h-8 bg-gray-900 rounded-l-md"></div>
      </div>
    </div>
  );
};

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ label, className = '', videoId, embedUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Reset state on prop change
    setThumbnailUrl(null);
    setIsLoading(true);
    let isMounted = true;

    let url = null;
    if (embedUrl && embedUrl.includes('loom.com')) {
      const loomId = embedUrl.split('/').pop()?.split('?')[0];
      if (loomId) {
        url = `https://cdn.loom.com/sessions/thumbnails/${loomId}.jpg`;
      }
    } else if (videoId) {
      url = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    
    if (url) {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        if (isMounted) {
            setThumbnailUrl(url);
            setIsLoading(false);
        }
      };
      img.onerror = () => {
        if (!isMounted) return;
        // Primary URL failed. Try YouTube fallback if applicable.
        if (videoId) {
            const fallbackUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
            const fallbackImg = new Image();
            fallbackImg.src = fallbackUrl;
            fallbackImg.onload = () => {
                if (isMounted) {
                    setThumbnailUrl(fallbackUrl);
                    setIsLoading(false);
                }
            };
            fallbackImg.onerror = () => {
                // YouTube fallback also failed. Show custom thumbnail.
                if (isMounted) setIsLoading(false);
            };
        } else {
            // Not a YouTube video (i.e., Loom failed). Show custom thumbnail.
            if (isMounted) setIsLoading(false);
        }
      };
    } else {
      // No URL could be constructed. Show custom thumbnail.
      if (isMounted) setIsLoading(false);
    }

    return () => {
        isMounted = false;
    }
}, [videoId, embedUrl, label]);

  let videoUrl = '';
  if (embedUrl) {
    try {
      const url = new URL(embedUrl);
      url.searchParams.set('autoplay', '1');
      videoUrl = url.toString();
    } catch (e) {
      videoUrl = embedUrl; // fallback if URL is malformed
    }
  } else {
    const effectiveVideoId = videoId || '4cQNtjEzRYo';
    videoUrl = `https://www.youtube.com/embed/${effectiveVideoId}?autoplay=1&rel=0`;
  }

  const handleOpen = () => {
    setIsModalOpen(true);
  }

  const handleClose = () => {
    setIsModalOpen(false);
  }
  
  const thumbnailContent = (
      <div className="relative w-full h-full">
        <img src={thumbnailUrl!} alt={`Thumbnail for ${label}`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center flex-col text-center p-4">
            <div className="relative w-20 h-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white/70 group-hover:text-white/90 transition-colors duration-300"><circle cx="12" cy="12" r="10"></circle></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24" fill="currentColor" className="absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 text-white group-hover:text-white transition-all duration-300 transform group-hover:scale-110"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
            <p className="font-semibold text-white mt-4 bg-black/50 px-3 py-1 rounded-md">{label}</p>
        </div>
      </div>
  );
  
  return (
    <>
      <button 
        onClick={handleOpen}
        className={`aspect-video w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 hover:border-brand-green/50 transition-all duration-300 group cursor-pointer overflow-hidden p-0 ${className}`}
        aria-label={`Play video: ${label}`}
      >
        {isLoading ? (
            <Spinner />
        ) : thumbnailUrl ? (
            thumbnailContent
        ) : (
            <CustomVideoThumbnail title={label} />
        )}
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        title={label}
        size="xlarge"
      >
        <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          <iframe
            className="w-full h-full"
            src={isModalOpen ? videoUrl : ''} 
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
};