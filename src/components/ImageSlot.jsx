const RATIO_CLASSES = {
  '4:5': 'aspect-[4/5]',
  '1:1': 'aspect-square',
};

function ImageSlot({ image, onClick, className = '' }) {
  const ratioClass = RATIO_CLASSES[image.ratio] || 'aspect-[4/5]';
  const interactive = typeof onClick === 'function';

  if (image.src) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        onClick={onClick}
        className={`${ratioClass} w-full object-cover ${interactive ? 'cursor-pointer transition hover:opacity-90' : ''} ${className}`}
      />
    );
  }

  return (
    <div
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      className={`${ratioClass} flex w-full items-center justify-center border border-line bg-ivory p-3 text-center ${interactive ? 'cursor-pointer transition hover:bg-line/40' : ''} ${className}`}
    >
      <span className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-taupe">{image.label}</span>
    </div>
  );
}

export default ImageSlot;
