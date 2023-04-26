import { useEffect, useRef, useState } from 'react';

import useIntersectionObserver from '@react-hook/intersection-observer';

const useTriggerOnce = (): {
  ref: React.MutableRefObject<any>;
  intersected: boolean;
} => {
  const ref = useRef(null);
  const { isIntersecting } = useIntersectionObserver(ref, {
    rootMargin: '500px',
  });
  const [intersected, setIntersected] = useState(false);
  useEffect(() => {
    if (isIntersecting && !intersected) {
      setIntersected(true);
    }
  }, [intersected, isIntersecting]);

  return { ref, intersected };
};

export default useTriggerOnce;
