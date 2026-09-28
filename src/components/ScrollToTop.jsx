import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const RETRY_MS = 50;
const MAX_RETRIES = 20;

function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const prevPathRef = useRef(null);

  useEffect(() => {
    const pathChanged = prevPathRef.current !== pathname;
    prevPathRef.current = pathname;

    if (!hash) {
      if (pathChanged) window.scrollTo(0, 0);
      return undefined;
    }

    if (pathChanged) window.scrollTo({ top: 0, behavior: 'instant' });

    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer;

    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (attempts < MAX_RETRIES) {
        attempts += 1;
        timer = window.setTimeout(scrollToTarget, RETRY_MS);
      }
    };

    scrollToTarget();
    return () => window.clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToTop;
