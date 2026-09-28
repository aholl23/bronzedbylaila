import { heroCollageImages } from '../config/images';

function HeroCollage() {
  const { groupShot, spraying, bottles, flatlay } = heroCollageImages;

  return (
    <div
      className="absolute inset-0 z-0 grid grid-cols-1 grid-rows-2 md:grid-cols-[30%_40%_30%] md:grid-rows-1"
      aria-hidden="true"
    >
      <img src={spraying.src} alt={spraying.alt} loading="eager" fetchpriority="high" className="h-full w-full object-cover object-center" />
      <div className="hidden md:grid md:grid-rows-2">
        <img src={bottles.src} alt={bottles.alt} loading="eager" fetchpriority="high" className="h-full w-full object-cover object-center" />
        <img src={flatlay.src} alt={flatlay.alt} loading="eager" fetchpriority="high" className="h-full w-full object-cover object-center" />
      </div>
      <img src={groupShot.src} alt={groupShot.alt} loading="eager" fetchpriority="high" className="h-full w-full object-cover object-center" />
    </div>
  );
}

export default HeroCollage;
