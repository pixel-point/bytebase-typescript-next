'use client';

import { useState } from 'react';

import Button from '@/components/shared/button';
import GithubStarsButton from '@/components/shared/github-stars-button';
import Link from '@/components/shared/link';

import { MENUS } from '@/lib/menus';

import Burger from './burger';

type Header = {
  title: string;
  href: string;
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleHeaderBurgerClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <header className="safe-paddings absolute top-0 left-0 right-0 z-[1000] h-16 w-full">
      <nav
        className="container flex items-center justify-between py-4.5 lg:py-[22px]"
        aria-label="Global"
      >
        <Link to="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.svg" alt="Bytebase logo" width={150} height={32} loading="eager" />
        </Link>
        <ul className="flex items-center gap-x-6 2xl:gap-x-[19px] xl:gap-x-1 lg:hidden">
          {MENUS.header.map(({ title, href }: Header) => (
            <li key={title} className="group relative inline-block">
              <Link
                additionalClassName="rounded-lg px-3 pt-2 pb-[9px] text-15 leading-none  2xl:px-[15px] xl:px-3"
                size="md"
                theme="gray-15"
                to={href}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-9 2xl:gap-x-7 xl:gap-x-5 lg:hidden">
          <GithubStarsButton />
          <Button to="/" theme="gray-filled" size="sm">
            Sign up for Cloud
          </Button>
        </div>
        <Burger
          className="hidden lg:inline-flex"
          isToggled={isMobileMenuOpen}
          onClick={handleHeaderBurgerClick}
        />
      </nav>
    </header>
  );
};

export default Header;
