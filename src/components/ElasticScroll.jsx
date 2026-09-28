import { useEffect, useRef } from 'react';

const MAX_OFFSET = 50;
const WHEEL_DAMPING = 0.3;
const IDLE_MS = 120;
const SPRING = 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)';

function ElasticScroll({ children }) {
  const wrapperRef = useRef(null);
  const offsetRef = useRef(0);
  const idleTimerRef = useRef(null);
  const settleTimerRef = useRef(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return undefined;
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;

    const render = () => {
      frameRef.current = 0;
      wrapper.style.transform = offsetRef.current === 0 ? '' : `translateY(${offsetRef.current}px)`;
    };

    const setOffset = (value) => {
      offsetRef.current = value;
      if (value !== 0) wrapper.style.willChange = 'transform';
      if (!frameRef.current) frameRef.current = window.requestAnimationFrame(render);
    };

    const springBack = () => {
      wrapper.style.transition = SPRING;
      setOffset(0);
      window.clearTimeout(settleTimerRef.current);
      settleTimerRef.current = window.setTimeout(() => {
        wrapper.style.transition = '';
        wrapper.style.willChange = '';
      }, 400);
    };

    const scheduleSpringBack = () => {
      window.clearTimeout(idleTimerRef.current);
      idleTimerRef.current = window.setTimeout(springBack, IDLE_MS);
    };

    const handleWheel = (event) => {
      if (event.ctrlKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
        if (offsetRef.current !== 0) springBack();
        return;
      }

      const scrollTop = window.scrollY;
      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + window.innerHeight >= document.documentElement.scrollHeight - 1;

      const pullingDownAtTop = atTop && event.deltaY < 0;
      const pullingUpAtBottom = atBottom && event.deltaY > 0;

      if (!pullingDownAtTop && !pullingUpAtBottom) {
        if (offsetRef.current !== 0) springBack();
        return;
      }

      window.clearTimeout(settleTimerRef.current);
      wrapper.style.transition = '';

      if (pullingDownAtTop) {
        setOffset(Math.min(offsetRef.current - event.deltaY * WHEEL_DAMPING, MAX_OFFSET));
      } else {
        setOffset(Math.max(offsetRef.current - event.deltaY * WHEEL_DAMPING, -MAX_OFFSET));
      }

      scheduleSpringBack();
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.clearTimeout(idleTimerRef.current);
      window.clearTimeout(settleTimerRef.current);
      window.cancelAnimationFrame(frameRef.current);
      wrapper.style.transform = '';
      wrapper.style.transition = '';
      wrapper.style.willChange = '';
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}

export default ElasticScroll;
