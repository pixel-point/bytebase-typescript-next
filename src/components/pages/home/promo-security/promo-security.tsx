'use client';

import { useEffect, useRef } from 'react';

import useIntersectionObserver from '@react-hook/intersection-observer';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';

import { LinkUnderlined } from '@/components/shared/link-underlined';

const PromoSecurity = () => {
  const ref = useRef(null);

  const { isIntersecting } = useIntersectionObserver(ref, { rootMargin: '-150px', threshold: 0 });

  const { rive, RiveComponent } = useRive({
    src: '/rive/security.riv',
    autoplay: false,
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
    if (rive && isIntersecting) {
      rive.play();
    }
  }, [rive, isIntersecting]);

  return (
    <section
      className="mt-[192px] bg-black text-white 3xl:mt-[144px] xl:mt-[126px] md:mt-[96px] sm:mt-[80px]"
      ref={ref}
    >
      <div className="container gap-x-grid grid grid-cols-12">
        <div className="col-start-1 col-end-5 py-[216px] 3xl:py-[160px] xl:col-end-6 xl:py-[180px]">
          <span className="inline-flex rounded-3xl bg-secondary-1 px-2.5 py-2 text-12 font-bold uppercase leading-none tracking-wider text-gray-15">
            Secure
          </span>
          <h2 className="mt-5 font-title text-112 font-semibold leading-none 3xl:mt-5 xl:mt-4 xl:text-90 xl:leading-95 md:mt-3 md:text-80 sm:text-48">
            <span className="bg-transparent text-secondary-3">Security</span> by&nbsp;design
          </h2>
          <p className="mt-6 text-20 leading-normal xl:mt-4 xl:text-18 xl:leading-snug md:mt-2 md:text-16">
            Bytebase streamlines database deployment from non-prod to prod by integrating with
            version control systems for a GitOps workflow.
          </p>
          <LinkUnderlined className="mt-8 xl:mt-6 md:mt-4 sm:mt-3" to="#">
            Learn more
          </LinkUnderlined>
        </div>
        <div className="relative col-start-5 col-end-13 flex items-center self-stretch before:absolute before:bottom-0 before:top-0 before:right-[156px] before:w-[252px] before:bg-security xl:col-start-6 xl:before:right-[106px] xl:before:w-[216px]">
          <div className="relative ml-auto aspect-[1.0597014925] w-full max-w-[710px]">
            <RiveComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSecurity;
