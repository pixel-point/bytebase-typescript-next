'use client';

import { useRef, useState } from 'react';

import useClickOutside from '@/hooks/use-click-outside';
import clsx from 'clsx';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

import { SidebarItem } from '@/types/docs';

import ArrowsMaxIcon from '@/svgs/arrows-maximize.inline.svg';
import ArrowsMinIcon from '@/svgs/arrows-minimize.inline.svg';

import Sidebar from '../sidebar';

interface MobileSidebarProps {
  className?: string;
  data: SidebarItem[];
  currentUrl: string;
}

const animationVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  close: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

const iconAnimationVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  close: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const MobileSidebar = ({ data, currentUrl }: MobileSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  useClickOutside([buttonRef], () => {
    setIsOpen(false);
  });

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={clsx(
          'bg-black bg-opacity-80 fixed top-0 left-0 w-screen h-screen z-[1000]',
          isOpen ? 'block' : 'hidden',
        )}
      />

      <m.div
        className="fixed top-0 right-0 bottom-0 z-[1001] w-[313px] h-full bg-white overflow-y-auto pb-[72px]"
        initial="close"
        variants={animationVariants}
        animate={isOpen ? 'open' : 'close'}
        ref={sidebarRef}
      >
        <Sidebar className="pt-6 px-7 pb-10" data={data} currentUrl={currentUrl} />
      </m.div>

      <button
        className="fixed bottom-0 z-[2000] left-0 right-0 hidden h-[72px] md:flex items-center justify-between pointer-events-none md:pointer-events-auto text-white bg-gray-15 active:bg-gray-15 py-6 px-7 text-18 leading-snug"
        type="button"
        ref={buttonRef}
        onClick={onClick}
      >
        <span>Documentation</span>

        {isOpen ? <ArrowsMinIcon className="w-6 h-6" /> : <ArrowsMaxIcon className="w-6 h-6" />}
      </button>
    </LazyMotion>
  );
};

export default MobileSidebar;
