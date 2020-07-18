import { useRef, useLayoutEffect } from 'react';

const isBrowser = typeof window !== `undefined`;

const decimalToPercent = (num) => `${Math.floor(num * 100)}%`;
const getScrollPercent = (currentScrollY) => {
  return currentScrollY / (document.body.offsetHeight - window.innerHeight);
};
function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0, percent: decimalToPercent(0) };

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? {
        x: window.scrollX,
        y: window.scrollY,
        percent: getScrollPercent(window.scrollY),
      }
    : {
        x: position.left,
        y: position.top,
        percent: getScrollPercent(position.top),
      };
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);
}
