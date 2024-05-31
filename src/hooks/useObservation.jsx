import { useCallback, useEffect, useRef } from 'react';

const option = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};
const useObservation = onIntersect => {
  const ref = useRef(null);
  const callback = useCallback(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(callback, option);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref.current, callback]);
  return ref;
};

export default useObservation;
