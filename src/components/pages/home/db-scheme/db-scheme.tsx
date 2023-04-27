'use client';

import Image from 'next/image';

import { useEffect, useRef } from 'react';

import useIntersectionObserverOnce from '@/hooks/use-intersection-observer-once';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';

const DBScheme = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const { isIntersecting } = useIntersectionObserverOnce(containerRef, {
    rootMargin: '500px 0px 0px 0px',
  });
  const { isIntersecting: isVisible } = useIntersectionObserver(animationRef, {
    rootMargin: '100px 0px 0px 0px',
  });

  const {
    rive,
    RiveComponent,
    setContainerRef: setRiveRef,
  } = useRive({
    src: '/rive/db-scheme.riv',
    autoplay: false,
    artboard: 'scheme',
    stateMachines: 'SM',
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
    onLoad: () => {
      rive?.resizeDrawingSurfaceToCanvas();
    },
  });

  useEffect(() => {
    if (rive) {
      if (isVisible) {
        rive.play();
      } else {
        rive.pause();
      }
    }
  }, [rive, isVisible]);

  return (
    <section
      className="mt-[244px] 3xl:mt-[140px] xl:mt-32 md:mt-[90px] sm:mt-[74px]"
      ref={containerRef}
    >
      <header className="container">
        <h2 className="mx-auto max-w-[1219px] text-center font-title text-88 font-semibold leading-none xl:text-68 xl:leading-104 md:text-54 md:leading-none sm:text-48 sm:leading-95">
          Change, Query, Secure, Govern{' '}
          <mark className="whitespace-nowrap bg-transparent text-center text-primary-1">
            all databases
          </mark>{' '}
          in a single place
        </h2>
      </header>
      <div className="mt-14 3xl:mt-12 xl:mt-10 md:mt-9 sm:mt-5" ref={animationRef}>
        <div
          className="mx-auto aspect-[2.2676470588] h-auto w-auto max-w-[1542px] sm:hidden"
          ref={setRiveRef}
        >
          {isIntersecting ? <RiveComponent /> : null}
        </div>
        <Image
          className="mx-auto hidden sm:block"
          src="/images/page/main/db-scheme.png"
          alt=""
          width={366}
          height={498}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default DBScheme;
