'use client';

import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';

import useClickOutside from '@/hooks/use-click-outside';
import clsx from 'clsx';
import { LazyMotion, domAnimation, m, useAnimation } from 'framer-motion';

import { SidebarItem } from '@/types/docs';

import ChevronIcon from '@/svgs/chevron.inline.svg';

import Item from '../sidebar/item';

interface MobileSidebarProps {
  className?: string;
  data: SidebarItem[];
  currentUrl: string;
}

const ANIMATION_DURATION = 0.2;

const variants = {
  from: {
    opacity: 0,
    translateY: 10,
    transition: {
      duration: ANIMATION_DURATION,
    },
    transitionEnd: {
      zIndex: -1,
    },
  },
  to: {
    zIndex: 20,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileSidebar = ({ className, data, currentUrl }: MobileSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [containerHeight, setContainerHeight] = useState<string | null>(null);
  const { height } = useWindowSize();
  const wrapperRef = useRef(null);
  const controls = useAnimation();
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const onOutsideClick = () => {
    setIsOpen(false);
  };

  useClickOutside([wrapperRef], onOutsideClick);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  // 146px is the height of top banner + header + button Documentation menu
  useEffect(() => {
    setContainerHeight(`${height - 116}px`);
  }, [height]);

  useEffect(() => {
    if (isOpen) {
      controls.start('to');
    } else {
      controls.start('from');
    }
  }, [controls, isOpen]);
  return (
    <LazyMotion features={domAnimation}>
      <nav className={clsx('safe-paddings relative', className)} ref={wrapperRef}>
        <button
          className="relative z-10 flex w-full cursor-pointer appearance-none justify-start text-ellipsis bg-gray-97 py-2.5 outline-none transition-colors duration-200 hover:bg-gray-90 active:bg-gray-8 px-7 sm:px-4"
          type="button"
          onClick={toggleMenu}
        >
          <span>Documentation menu</span>
          <ChevronIcon className="absolute right-[37px] top-1/2 -translate-y-1/2 md:right-5 w-4 h-4" />
        </button>

        <m.ul
          className={clsx(
            'fixed inset-x-0 top-[116px] bottom-0 z-20 overflow-y-scroll bg-white pl-8 pr-[29px] pt-2 pb-4 md:pl-4 md:pr-[13px]',
          )}
          initial="from"
          animate={controls}
          variants={variants}
          style={{ maxHeight: containerHeight }}
        >
          {data.map((item, index) => (
            <Item {...item} currentUrl={currentUrl} key={index} />
          ))}
        </m.ul>
      </nav>
    </LazyMotion>
  );
};

export default MobileSidebar;
