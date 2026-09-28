// Replace placeholder paths after 8/6 photoshoot. Aspect ratios are locked — match them when exporting.
// Each entry: { id, label, alt, ratio, src }. Leave `src: null` to render the placeholder block;
// set `src` to an imported image to swap in the real photo.

export const heroImages = [];

// Files live in public/images/ and are referenced by absolute path (no import needed).
export const heroCollageImages = {
  groupShot: { id: 'hero-collage-group', label: 'Group Shot', alt: 'Laila with clients on the beach', src: '/images/lailanew4people.jpg' },
  spraying: { id: 'hero-collage-spraying', label: 'Spray Gun', alt: 'Laila walking with spray guns', src: '/images/lailaspraygun.jpg' },
  bottles: { id: 'hero-collage-bottles', label: 'Norvell Bottles', alt: 'Norvell tanning bottles on sand', src: '/images/3bottles.jpg' },
  flatlay: { id: 'hero-collage-flatlay', label: 'Flatlay', alt: 'Bikini, phone, spray gun, and bottle flatlay', src: '/images/lailaaccesories.jpg' },
};

export const resultsSliderImages = [
  { id: 'results-slider-1', label: 'Result — Before / After 1', alt: 'Before and after airbrush tan result 1', ratio: '4:5', src: null },
  { id: 'results-slider-2', label: 'Result — Before / After 2', alt: 'Before and after airbrush tan result 2', ratio: '4:5', src: null },
  { id: 'results-slider-3', label: 'Result — Before / After 3', alt: 'Before and after airbrush tan result 3', ratio: '4:5', src: null },
  { id: 'results-slider-4', label: 'Result — Before / After 4', alt: 'Before and after airbrush tan result 4', ratio: '4:5', src: null },
];

export const resultsGridImages = [
  { id: 'results-grid-1', label: 'Result — Client Glow 1', alt: 'Close-up detail shot of airbrush tan in white top and jewelry', ratio: '4:5', src: '/images/Laila-056.jpg' },
  { id: 'results-grid-2', label: 'Result — Client Glow 2', alt: 'Five girls posed together on the beach at sunset wearing white tops and light-wash jeans, showing their airbrush tan', ratio: '4:5', src: '/images/Laila-086.jpg' },
  { id: 'results-grid-3', label: 'Result — Client Glow 3', alt: 'Two girls sitting on a log showing their airbrush tan', ratio: '4:5', src: '/images/Laila-102.jpg' },
  { id: 'results-grid-4', label: 'Result — Client Glow 4', alt: 'Single girl standing by the water showing her airbrush tan', ratio: '4:5', src: '/images/Laila-052.jpg' },
];

export const aboutLailaImage = { id: 'about-laila', label: 'Laila', alt: 'Laila holding a spray tan gun toward the camera on the beach', ratio: '4:5', src: '/images/lailaspraygunpoint.jpg' };

export const serviceImages = [
  { id: 'service-custom-8hr', label: 'Service — Custom 8-Hour', alt: 'Custom 8-hour airbrush tan service', ratio: '4:5', src: null },
  { id: 'service-rapid', label: 'Service — 1-3 Hour Rapid', alt: '1-3 hour rapid airbrush tan service', ratio: '4:5', src: null },
];

export const taggedByYouImages = [
  { id: 'tagged-1', label: 'Tagged By You 1', alt: 'Client-submitted photo 1', ratio: '1:1', src: null },
  { id: 'tagged-2', label: 'Tagged By You 2', alt: 'Client-submitted photo 2', ratio: '1:1', src: null },
  { id: 'tagged-3', label: 'Tagged By You 3', alt: 'Client-submitted photo 3', ratio: '1:1', src: null },
  { id: 'tagged-4', label: 'Tagged By You 4', alt: 'Client-submitted photo 4', ratio: '1:1', src: null },
];

export const merchImages = {
  hoodie: { id: 'merch-hoodie', label: 'Zip-Up Hoodie — front', alt: 'Zip-up hoodie front', ratio: '4:5', src: null },
  sweatpants: { id: 'merch-sweatpants', label: 'Sweatpants — front', alt: 'Sweatpants front', ratio: '4:5', src: null },
  shorts: { id: 'merch-shorts', label: 'Shorts — front', alt: 'Shorts front', ratio: '4:5', src: null },
  tee: { id: 'merch-tee', label: 'Off-Shoulder Tee — front', alt: 'Off-shoulder tee front', ratio: '4:5', src: null },
};
