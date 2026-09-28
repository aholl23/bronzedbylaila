import { Link } from 'react-router-dom';
import Sunburst from './Sunburst';
import { SQUARE_BOOK_URL } from '../config/booking';

function Footer() {
  return (
    <footer className="bg-cocoa px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          <div>
            <Sunburst className="h-8 w-24 text-bronze/60" strokeWidth={2} />
            <p className="-mt-1 font-script text-3xl text-bronze">Bronzed</p>
            <div className="mt-4 flex flex-col gap-1">
              <p className="text-sm text-cream/80">
                Instagram:{' '}
                <a
                  href="https://www.instagram.com/bronzedbylaila/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 underline decoration-1 underline-offset-4 transition hover:opacity-70"
                >
                  @bronzedbylaila
                </a>
              </p>
              <p className="text-sm text-cream/80">Serving Kent Island, MD & Greenville, NC (ECU)</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-bronze">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-cream">
              <Link to="/#services" className="transition hover:text-white">Services</Link>
              <Link to="/#why" className="transition hover:text-white">Why Airbrush</Link>
              <Link to="/#results" className="transition hover:text-white">Results</Link>
              <a href={SQUARE_BOOK_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Book</a>
              <Link to="/book#faq" className="transition hover:text-white">FAQ</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-bronze">Book Your Glow</p>
            <a
              href={SQUARE_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-bronze px-6 py-3 text-sm font-medium uppercase tracking-[0.25em] text-white transition hover:bg-bronze-deep"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/20 pt-6 sm:mt-16">
          <p className="text-sm text-cream/50">© Bronzed by Laila</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
