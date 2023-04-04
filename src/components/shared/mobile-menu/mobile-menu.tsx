import { FC, useEffect, useState } from 'react';

import APIIcon from '@/svgs/api.inline.svg';
import ChevronIcon from '@/svgs/chevron.inline.svg';
import CLIIcon from '@/svgs/cli.inline.svg';
import HowToIcon from '@/svgs/how-to.inline.svg';
import RocketIcon from '@/svgs/rocket.inline.svg';
import clsx from 'clsx';
import { LazyMotion, domAnimation, m, useAnimation } from 'framer-motion';

import Button from '@/components/shared/button';
import GithubStarsButton from '@/components/shared/github-stars-button';
import Link from '@/components/shared/link';

import { MENUS } from '@/lib/menus.js';

interface Icons {
  [key: string]: any;
}

const icons: Icons = { rocket: RocketIcon, api: APIIcon, cli: CLIIcon, howTo: HowToIcon };

const ANIMATION_DURATION = 0.2;
const MOTION_EASY = [0.25, 0.1, 0.25, 1];

const variants = {
  from: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
    transitionEnd: {
      zIndex: -1,
    },
  },
  to: {
    zIndex: 999,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const dropdownVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: ANIMATION_DURATION,
      ease: MOTION_EASY,
    },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION,
      ease: MOTION_EASY,
    },
  },
};

type MobileMenuProps = {
  isOpen: boolean;
};

interface MobileMenuItem {
  name: string;
  description: string;
  iconName: string;
  linkUrl: string;
}

type MobileLinksProps = {
  title: string;
  href?: string;
  items?: Array<MobileMenuItem>;
};

const MobileMenu: FC<MobileMenuProps> = ({ isOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(-1);

  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start('to');
      document.body.style.overflowY = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      controls.start('from');
      document.body.style.overflowY = '';
      document.body.style.touchAction = '';
    }
  }, [isOpen, controls]);

  const handleDropdownOpen = (index: number) =>
    isDropdownOpen === index ? setIsDropdownOpen(-1) : setIsDropdownOpen(index);

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        className="fixed -z-10 hidden lg:flex w-[53%] safe-paddings right-0 bottom-0 top-0 h-full md:w-full bg-white px-7 pb-8 sm:px-4 sm:pb-5 text-gray-15 flex-col justify-between mt-[72px] md:mt-20"
        initial="from"
        animate={controls}
        variants={variants}
      >
        <ul className="flex flex-col items-stretch divide-y divide-gray-90">
          {MENUS.mobile.map(({ title, href = '', items }: MobileLinksProps, index: number) => {
            const Tag = href ? Link : 'button';
            return (
              <li
                key={index}
                className="relative py-4 first:pt-0 last:border-b last:border-gray-90"
              >
                <Tag
                  to={href}
                  className="flex w-full flex-col items-start justify-center whitespace-nowrap text-16 font-medium leading-none tracking-tight transition-colors duration-200 hover:cursor-pointer"
                  tabIndex={0}
                  onClick={() => handleDropdownOpen(index)}
                  onKeyDown={() => handleDropdownOpen(index)}
                >
                  <div className="flex w-full items-center justify-between">
                    <span>{title}</span>
                    {items && (
                      <ChevronIcon
                        className={clsx(
                          'h-4 w-4 shrink-0 transition-transform duration-200 ',
                          isDropdownOpen === index && 'rotate-180',
                        )}
                      />
                    )}
                  </div>
                </Tag>
                <LazyMotion features={domAnimation}>
                  {isDropdownOpen === index && items && (
                    <m.ul
                      className="flex flex-col items-start"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                    >
                      {items.map(({ name, description, iconName, linkUrl }: MobileMenuItem) => {
                        const Icon = icons[iconName];
                        return (
                          <li className="w-full" key={name}>
                            <Link
                              additionalClassName="group block pt-4"
                              size="md"
                              theme="gray"
                              to={linkUrl}
                            >
                              <div className="flex flex-col gap-y-1">
                                <div className="flex gap-x-2 items-center group-hover:text-primary-1">
                                  <Icon className="w-5 h-5 shrink-0" />
                                  <span className="font-medium tracking-tight">{name}</span>
                                </div>
                                <span className="text-16 leading-normal text-gray-40">
                                  {description}
                                </span>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </m.ul>
                  )}
                </LazyMotion>
              </li>
            );
          })}
        </ul>
        <div className="mt-10 flex flex-col gap-4">
          <GithubStarsButton />
          <Button additionalClassName="py-4.5" to="/" theme="gray-filled" size="sm">
            Sign up for Cloud
          </Button>
        </div>
      </m.nav>
    </LazyMotion>
  );
};

export default MobileMenu;
