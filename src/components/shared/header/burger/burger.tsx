import { FC, MouseEventHandler } from 'react';

import clsx from 'clsx';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const ANIMATION_DURATION = 0.2;

type BurgerProps = {
  className?: string;
  isToggled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Burger: FC<BurgerProps> = ({ className = null, isToggled = false, onClick }) => (
  <LazyMotion features={domAnimation}>
    <m.button
      className={clsx('relative h-5 w-7 shrink-0', className)}
      type="button"
      animate={isToggled ? 'toggled' : 'initial'}
      aria-label={isToggled ? 'Close menu' : 'Open menu'}
      onClick={onClick}
    >
      <m.span
        className="absolute top-0 right-0 block h-0.5 w-full rounded-full bg-gray-15 transition-colors duration-200"
        variants={{
          initial: {
            top: 0,
            display: 'block',
            transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
          },
          toggled: {
            top: 9,
            transition: { duration: ANIMATION_DURATION },
            transitionEnd: { display: 'none' },
          },
        }}
      />
      <m.span
        className="absolute top-[9px] left-0 block h-0.5 w-full rounded-full bg-gray-15 transition-colors duration-200"
        variants={{
          initial: {
            display: 'block',
            transition: { delay: ANIMATION_DURATION },
          },
          toggled: {
            display: 'none',
            transition: { delay: ANIMATION_DURATION },
          },
        }}
      />
      <m.span
        className="absolute bottom-0 right-0 block h-0.5 w-full rounded-full bg-gray-15 transition-colors duration-200"
        variants={{
          initial: {
            bottom: 0,
            display: 'block',
            transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
          },
          toggled: {
            bottom: 9,
            transition: { duration: ANIMATION_DURATION },
            transitionEnd: { display: 'none' },
          },
        }}
      />
      <m.span
        className="absolute top-[9px] right-0 hidden h-0.5 w-full rounded-full bg-gray-15 transition-colors duration-200"
        variants={{
          initial: {
            rotate: '0deg',
            transition: { duration: ANIMATION_DURATION },
            transitionEnd: { display: 'none' },
          },
          toggled: {
            display: 'block',
            rotate: '45deg',
            transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
          },
        }}
      />
      <m.span
        className="absolute top-[9px] right-0 hidden h-0.5 w-full rounded-full bg-gray-15 transition-colors duration-200"
        variants={{
          initial: {
            rotate: '0deg',
            transition: { duration: ANIMATION_DURATION },
            transitionEnd: { display: 'none' },
          },
          toggled: {
            display: 'block',
            rotate: '-45deg',
            transition: { duration: ANIMATION_DURATION, delay: ANIMATION_DURATION },
          },
        }}
      />
    </m.button>
  </LazyMotion>
);

export default Burger;