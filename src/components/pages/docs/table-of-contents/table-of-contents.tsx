'use client';

import { useCallback, useEffect, useState } from 'react';

import throttle from '@/utils/throttle';
import clsx from 'clsx';

import { TableOfContents as TOCProps } from '@/types/docs';

import BackToTopIcon from '@/svgs/back-to-top.inline.svg';

type TableOfContentsProps = {
  items: TOCProps[];
  hasBackToTop?: boolean;
};

const TableOfContents = ({ items, hasBackToTop }: TableOfContentsProps) => {
  const [anchors, setAnchors] = useState<(HTMLElement | null)[]>([]);
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);

  const handleResize = useCallback(() => {
    const newAnchors = items.map(({ id }) => document.getElementById(id));
    setAnchors(newAnchors);
  }, [items]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const handleScroll = useCallback(() => {
    const currentActiveAnchor = anchors.find((anchor) => {
      const top = anchor?.getBoundingClientRect()?.top;
      return top && top >= 0 && top <= window.innerHeight;
    });
    if (currentActiveAnchor) {
      setActiveAnchor(`#${currentActiveAnchor.id}`);
    }
  }, [anchors]);

  useEffect(() => {
    const handleScrollThrottled = throttle(handleScroll, 100);
    window.addEventListener('scroll', handleScrollThrottled);
    return () => window.removeEventListener('scroll', handleScrollThrottled);
  }, [handleScroll]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    document.querySelector(anchor)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    // changing hash without default jumps to anchor
    // eslint-disable-next-line no-restricted-globals
    if (history.pushState) {
      // eslint-disable-next-line no-restricted-globals
      history.pushState(false, '', anchor.toString());
    } else {
      // old browser support
      window.location.hash = anchor;
    }
  };

  if (items.length === 0) return null;

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="table-of-contents lg:hidden">
      <div className="relative pl-5 before:absolute before:top-0 before:left-px before:h-full before:w-px before:bg-gray-90">
        <h3 className="text-14 font-bold uppercase leading-none tracking-tight">
          Table of contents
        </h3>
        <ul className={clsx(hasBackToTop && 'border-b border-gray-90 pb-6', 'mt-3 flex flex-col')}>
          {items.map(({ id, title, level }, index) => (
            <li
              className={clsx(
                'relative py-2 text-15 font-medium before:absolute before:-left-[19.5px] before:top-1/2 before:h-4/5 before:w-0.5 before:-translate-y-1/2 before:rounded-sm before:transition-colors before:duration-200',
                {
                  'before:bg-primary-1': activeAnchor === `#${id}`,
                },
              )}
              key={index}
            >
              <a
                className={clsx(
                  'flex text-gray-30 transition-colors duration-200 hover:text-gray-60',
                  {
                    'pl-2.5': level === 3,
                    'text-primary-1': activeAnchor === `#${id}`,
                  },
                )}
                href={`#${id}`}
                onClick={(e) => handleAnchorClick(e, `#${id}`)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {hasBackToTop && (
        <button
          className="mt-8 flex items-center gap-x-2 pl-5 pb-5 text-15 font-medium text-gray-30 transition-colors duration-200 hover:text-gray-60"
          type="button"
          onClick={backToTop}
        >
          <BackToTopIcon className="h-[18px] w-[18px]" />
          <span>Back to top</span>
        </button>
      )}
    </nav>
  );
};

export default TableOfContents;
