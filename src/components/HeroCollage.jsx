import { heroCollageImages } from '../config/images';

function HeroCollage() {
  const { groupShot, spraying, bottles, flatlay, backView } = heroCollageImages;

  return (
    <div
      className="relative z-0 grid aspect-[3/5] w-full grid-cols-2 grid-rows-[minmax(0,68fr)_minmax(0,32fr)] md:absolute md:inset-0 md:aspect-auto md:h-full md:grid-cols-[30%_40%_30%] md:grid-rows-1"
      aria-hidden="true"
    >
      <img src={spraying.src} alt={spraying.alt} loading="eager" fetchpriority="high" className="order-1 col-span-2 h-full w-full object-cover object-center md:order-none md:col-span-1" />
      <div className="contents md:grid md:grid-rows-2">
        <img src={bottles.src} alt={bottles.alt} loading="eager" fetchpriority="high" className="hidden h-full w-full object-cover object-center md:order-none md:block" />
        <img src={flatlay.src} alt={flatlay.alt} loading="eager" fetchpriority="high" className="order-2 h-full w-full object-cover object-center md:order-none" />
      </div>
      <img src={backView.src} alt={backView.alt} loading="eager" fetchpriority="high" className="order-3 h-full w-full object-cover object-[center_60%] md:hidden" />
      <img src={groupShot.src} alt={groupShot.alt} loading="eager" fetchpriority="high" className="hidden h-full w-full object-cover object-center md:block" />
    </div>
  );
}

export default HeroCollage;
