import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'default' | 'large' | 'xlarge';
  variant?: 'dark' | 'light';
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = 'default', variant = 'dark' }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    default: 'max-w-4xl',
    large: 'max-w-6xl',
    xlarge: 'max-w-screen-lg',
  }

  const isLight = variant === 'light';

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 transition-opacity duration-300 animate-fade-in-up"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={`border rounded-xl shadow-2xl w-full ${sizeClasses[size]} max-h-[90vh] flex flex-col transform transition-transform duration-300 scale-95 animate-fade-in-up ${isLight ? 'bg-patterned text-brand-gray border-gray-200' : 'bg-gray-800 text-white border-gray-700'}`}
        onClick={(e) => e.stopPropagation()}
        style={{ animationName: 'modal-scale-up', animationDuration: '0.3s', animationTimingFunction: 'ease-out', animationFillMode: 'forwards' }}
      >
        <header className={`flex items-center justify-between p-6 border-b ${isLight ? 'border-gray-200' : 'border-gray-700'} flex-shrink-0`}>
          <h2 id="modal-title" className={`text-2xl font-bold ${isLight ? 'text-brand-gray' : 'text-white'}`}>{title}</h2>
          <button
            onClick={onClose}
            className={`transition-colors p-1 rounded-full ${isLight ? 'text-gray-500 hover:text-brand-gray bg-gray-200 hover:bg-gray-300' : 'text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600'}`}
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>
        <main className="p-8 overflow-y-auto">
          {children}
        </main>
      </div>
      <style>{`
        @keyframes modal-scale-up {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>,
    document.body
  );
};