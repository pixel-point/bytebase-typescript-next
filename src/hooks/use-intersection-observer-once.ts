import { useEffect, useRef } from 'react';

import useIntersectionObserver, {
  type IntersectionObserverOptions,
  type MockIntersectionObserverEntry,
} from '@react-hook/intersection-observer';

const useIntersectionObserverOnce = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T> | T | null,
  options?: IntersectionObserverOptions,
): MockIntersectionObserverEntry | IntersectionObserverEntry => {
  const wasCalledRef = useRef(false);

  const { isIntersecting, ...rest } = useIntersectionObserver(ref, options);

  useEffect(() => {
    if (!wasCalledRef.current && isIntersecting) {
      wasCalledRef.current = true;
    }
  }, [isIntersecting]);

  if (wasCalledRef.current) {
    return { isIntersecting: true, ...rest };
  }

  return { isIntersecting, ...rest };
};

export default useIntersectionObserverOnce;
