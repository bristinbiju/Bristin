import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, images, initialIndex = 0, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync state if initialIndex changes when opened
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Header / Controls */}
        <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10 pointer-events-none">
          <div className="text-white/70 font-medium tracking-widest text-sm sm:text-base pointer-events-auto bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
            {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors pointer-events-auto backdrop-blur-md"
            aria-label="Close image preview"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation - Left */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10 hidden sm:block backdrop-blur-md"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        {/* Main Image Container */}
        <div className="w-full h-full p-4 sm:p-12 md:p-24 flex items-center justify-center">
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent click-outside when clicking image
          />
        </div>

        {/* Navigation - Right */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10 hidden sm:block backdrop-blur-md"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        )}

        {/* Mobile Navigation overlay area for tapping left/right */}
        {images.length > 1 && (
          <div className="absolute inset-0 flex z-0 sm:hidden">
            <div className="w-1/2 h-full" onClick={handlePrev} />
            <div className="w-1/2 h-full" onClick={handleNext} />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
