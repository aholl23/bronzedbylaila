import { useEffect, useRef } from 'react';

function Lightbox({ images, index, onClose, onNext, onPrev }) {
  const touchStart = useRef(null);
  const maxVertical = useRef(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrev();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  const resetTouch = () => {
    touchStart.current = null;
    maxVertical.current = 0;
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
    maxVertical.current = 0;
  };

  const handleTouchMove = (event) => {
    if (!touchStart.current) return;
    const dy = Math.abs(event.touches[0].clientY - touchStart.current.y);
    if (dy > maxVertical.current) maxVertical.current = dy;
  };

  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;
    const deltaX = event.changedTouches[0].clientX - touchStart.current.x;
    const wasScroll = maxVertical.current > 80;
    resetTouch();
    if (wasScroll) return;
    if (deltaX > 50) onPrev();
    else if (deltaX < -50) onNext();
  };

  const current = images[index];
  const ratioClass = current.ratio === '1:1' ? 'aspect-square' : 'aspect-[4/5]';

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cocoa/70 backdrop-blur-md touch-pan-y"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={resetTouch}
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/20 text-xl text-white transition hover:bg-black/40 sm:right-6 sm:top-6 sm:h-10 sm:w-10"
      >
        ×
      </button>

      <button
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-xl text-white transition hover:bg-black/40 sm:left-8 sm:h-11 sm:w-11"
      >
        ‹
      </button>

      <button
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-xl text-white transition hover:bg-black/40 sm:right-8 sm:h-11 sm:w-11"
      >
        ›
      </button>

      {current.src ? (
        <img
          src={current.src}
          alt={current.alt}
          onClick={(event) => event.stopPropagation()}
          draggable={false}
          className="max-h-[75vh] max-w-[80vw] touch-pan-y select-none object-contain shadow-palm [-webkit-touch-callout:none] sm:max-w-[70vw]"
        />
      ) : (
        <div
          onClick={(event) => event.stopPropagation()}
          className={`flex ${ratioClass} max-h-[75vh] w-[70vw] max-w-sm items-center justify-center border border-line bg-ivory p-6 text-center shadow-palm`}
        >
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-taupe">{current.label || current.alt}</span>
        </div>
      )}

      <div
        className="absolute bottom-6 left-1/2 flex max-w-[80vw] -translate-x-1/2 flex-wrap items-center justify-center gap-2"
        onClick={(event) => event.stopPropagation()}
      >
        {images.map((image, dotIndex) => (
          <button
            key={image.alt}
            onClick={() => {
              if (dotIndex > index) {
                for (let i = index; i < dotIndex; i += 1) onNext();
              } else if (dotIndex < index) {
                for (let i = index; i > dotIndex; i -= 1) onPrev();
              }
            }}
            aria-label={`Go to image ${dotIndex + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              dotIndex === index ? 'w-4 bg-white' : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Lightbox;
