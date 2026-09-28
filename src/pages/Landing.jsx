import { useState } from 'react';
import { SQUARE_BOOK_URL } from '../config/booking';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Lightbox from '../components/Lightbox';
import ImageSlot from '../components/ImageSlot';
import HeroCollage from '../components/HeroCollage';
import HeroSun from '../components/HeroSun';
import SectionDivider from '../components/SectionDivider';
import { resultsSliderImages, resultsGridImages, aboutLailaImage } from '../config/images';

const services = [
  {
    title: 'Custom 8-Hour Airbrush Tan',
    description: 'Full custom airbrush tan that develops over ~8 hours, then rinse.',
  },
  {
    title: '1–3 Hour Rapid Airbrush Tan',
    description: 'Faster developer for last-minute plans, game day, or a quick glow.',
  },
];

const resultsAllImages = [...resultsSliderImages, ...resultsGridImages];

function Landing() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (images, index) => setLightbox({ images, index });
  const closeLightbox = () => setLightbox(null);
  const showNext = () =>
    setLightbox((current) => (current ? { ...current, index: (current.index + 1) % current.images.length } : current));
  const showPrev = () =>
    setLightbox((current) =>
      current ? { ...current, index: (current.index - 1 + current.images.length) % current.images.length } : current
    );

  return (
    <div className="min-h-screen bg-cream text-cocoa">
      <Nav />

      <main id="top">
        <section className="relative min-h-0 overflow-hidden md:flex md:min-h-[85vh] md:items-center md:px-6 md:py-20 md:supports-[height:1svh]:min-h-[85svh] lg:px-8 lg:py-28">
          <HeroCollage />
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 md:contents">
            <div className="relative z-10 mx-auto flex max-w-2xl -translate-y-10 flex-col items-center px-4 py-1.5 text-center sm:-translate-y-12 lg:-translate-y-16">
              <HeroSun className="h-32 w-[21rem] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:h-44 sm:w-[28rem]" />
              <div className="-mt-5 -ml-8 lg:-mt-8">
                <p className="font-script text-8xl leading-none text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-9xl lg:text-[10rem]">Bronzed</p>
                <p className="mt-5 text-base font-semibold uppercase tracking-[0.55em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">— BY LAILA</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="mb-4 w-full border-0 border-t-2 border-bronze" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section id="results" className="px-2 py-6 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <p className="text-left text-sm font-medium uppercase tracking-[0.35em] text-bronze">Results</p>
              <h2 className="mt-3 text-left font-display text-3xl font-medium sm:text-4xl">Natural. Flawless.</h2>

              <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-10 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
                {resultsGridImages.map((image, index) => (
                  <ImageSlot
                    key={image.id}
                    image={image}
                    onClick={() => openLightbox(resultsAllImages, resultsSliderImages.length + index)}
                  />
                ))}
              </div>
              <p className="mt-3 text-left text-sm text-bronze">Click to see more</p>
            </div>
          </section>

          <SectionDivider />

          <section id="services" className="px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
            <div className="mx-auto max-w-6xl">
              <div className="mb-8 flex flex-col gap-2 text-left">
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-bronze">Services</p>
                <h2 className="font-display text-3xl font-medium sm:text-4xl">Tailored for everyday glow and event-ready shine.</h2>
              </div>
              <div className="grid gap-10">
                {services.map((service) => (
                  <div key={service.title} className="text-left">
                    <h3 className="font-display text-2xl font-medium">{service.title}</h3>
                    <p className="mt-4 text-base leading-7 text-cocoa/80">{service.description}</p>
                    <a
                      href={SQUARE_BOOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex rounded-full bg-bronze px-5 py-2.5 text-sm font-medium uppercase tracking-[0.25em] text-white transition hover:bg-bronze-deep"
                    >
                      Book
                    </a>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-left text-sm text-taupe">Packages & memberships coming soon.</p>
            </div>
          </section>

          <SectionDivider />

          <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-6xl text-left">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-bronze">Why Bronzed?</p>
              <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">Proven Experience</h2>
              <ImageSlot image={aboutLailaImage} className="mx-auto mt-8 max-w-[400px] md:mx-0" />
              <p className="mt-3 max-w-lg text-base text-cocoa">
                With over 3 years of experience and Norvell professional-grade formulas, let me deliver your desired tan.
              </p>
            </div>
          </section>

          <SectionDivider />

          <section id="why" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl text-left">
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-bronze">Why airbrush</p>
                <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">The glow, without the damage.</h2>
              </div>
              <div className="flex max-w-3xl flex-col items-start gap-6 py-12 text-left sm:py-16">
                <div className="flex w-full items-center gap-4">
                  <span className="h-px flex-1 bg-bronze/40" />
                  <span className="font-display text-4xl leading-none text-bronze sm:text-5xl">“</span>
                  <span className="h-px flex-1 bg-bronze/40" />
                </div>
                <p className="font-display text-2xl leading-9 text-cocoa sm:text-3xl sm:leading-10">
                  There are absolutely <strong className="font-bold text-cocoa [-webkit-text-stroke:0.5px_currentColor]">zero benefits</strong> of a tanning bed that can outweigh the risks of <strong className="font-bold text-cocoa [-webkit-text-stroke:0.5px_currentColor]">UV radiation</strong>. Indoor tanning can cause <strong className="font-bold text-cocoa [-webkit-text-stroke:0.5px_currentColor]">irreversible skin damage</strong> and <strong className="font-bold text-cocoa [-webkit-text-stroke:0.5px_currentColor]">skin cancer</strong> — which can have devastating consequences.
                </p>
                <div className="flex w-full items-center gap-4">
                  <span className="h-px flex-1 bg-bronze/40" />
                  <span className="font-display text-4xl leading-none text-bronze sm:text-5xl">”</span>
                  <span className="h-px flex-1 bg-bronze/40" />
                </div>
                <p className="-mt-3 text-sm text-taupe">
                  —{' '}
                  <a
                    href="https://www.skincancer.org/blog/indoor-tanning-101-do-you-know-the-risks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-taupe underline decoration-1 underline-offset-4 transition hover:opacity-70"
                  >
                    The Skin Cancer Foundation
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {lightbox && (
        <Lightbox images={lightbox.images} index={lightbox.index} onClose={closeLightbox} onNext={showNext} onPrev={showPrev} />
      )}
    </div>
  );
}

export default Landing;
