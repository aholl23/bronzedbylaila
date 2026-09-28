import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HeroSun from './HeroSun';
import { SQUARE_BOOK_URL } from '../config/booking';

const pillClass =
  'whitespace-nowrap rounded-full border border-white bg-bronze px-2.5 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-white transition hover:bg-bronze-deep sm:border-2 sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.25em]';

const navLinkClass = 'border-b border-white pb-1 transition hover:text-white';

const navLinks = [
  { to: '/#results', label: 'Results' },
  { to: '/#services', label: 'Services' },
  { to: '/#why', label: 'Why Airbrush' },
  { to: '/book#faq', label: 'Booking FAQ' },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const showBack = pathname === '/book';

  const handleNavClick = (to) => () => {
    const [targetPath, hash] = to.split('#');
    if (hash && targetPath === pathname) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 overflow-x-hidden border-b border-line/70 bg-bronze/95 backdrop-blur">
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          {showBack && (
            <Link
              to="/"
              aria-label="Back to home"
              className={`${pillClass} inline-flex items-center justify-center !px-1.5 sm:!px-2`}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="20" y1="12" x2="4" y2="12" />
                <polyline points="10 6 4 12 10 18" />
              </svg>
            </Link>
          )}

          <div className="hidden items-center gap-6 md:flex">
            <Link to="/" className="hidden items-center gap-3 px-1">
              <HeroSun compact className="h-7 w-auto shrink-0 text-white" />
              <span className="font-script text-4xl leading-none text-white">Bronzed</span>
            </Link>

            <div className="flex items-center gap-6 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-cream">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={handleNavClick(link.to)} className={navLinkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-0 md:hidden">
          <a href={SQUARE_BOOK_URL} target="_blank" rel="noopener noreferrer" className={pillClass}>
            Book Now
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="-mr-2 flex h-9 w-9 shrink-0 items-center justify-center text-white"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        <a href={SQUARE_BOOK_URL} target="_blank" rel="noopener noreferrer" className={`${pillClass} hidden md:inline-flex`}>
          Book Now
        </a>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-line/70 px-4 py-5 text-xs font-medium uppercase tracking-[0.35em] text-cream md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleNavClick(link.to)}
              className="w-fit border-b border-white pb-1 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Nav;
