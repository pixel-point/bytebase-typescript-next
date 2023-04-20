'use client';

import { useState } from 'react';

import clsx from 'clsx';

import Link from '@/components/shared/link';

import { SidebarItem } from '@/types/docs';

import Route from '@/lib/route';

import ChevronIcon from '../images/chevron.inline.svg';

const isActiveItem = (children: SidebarItem[] | undefined, currentUrl: string): boolean => {
  if (!children) return false;

  return children.some(
    (item) => item.url === currentUrl || isActiveItem(item.children, currentUrl),
  );
};

interface ItemProps extends SidebarItem {
  currentUrl: string;
  expandedList?: string[];
  isItemOpen?: boolean;
}

const Item = ({ title, url, children, depth, currentUrl, expandedList, isItemOpen }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(isItemOpen || isActiveItem(children, currentUrl));

  if (!isOpen && isActiveItem(children, currentUrl)) {
    setIsOpen(true);
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li
      className={clsx('flex flex-col items-start', {
        'pl-4': depth >= 2,
      })}
    >
      {url ? (
        <Link
          className={clsx(
            'text-gray-30 text-15 py-2 flex items-center w-full',
            depth === 1 ? 'font-semibold' : 'font-medium',
            url === currentUrl && 'text-primary-1',
          )}
          href={Route.DOCS + url}
          onClick={toggle}
        >
          {children && (
            <ChevronIcon
              className={clsx('w-[5px] h-1.5 mr-2 transition-transform duration-200 shrink-0', {
                'rotate-90': isOpen,
              })}
            />
          )}
          <span>{title}</span>
        </Link>
      ) : (
        <button
          className={clsx(
            'text-gray-30 text-15 py-2 flex items-center w-full',
            depth === 1 ? 'font-semibold' : 'font-medium',
            url === currentUrl && 'text-primary-1',
          )}
          onClick={toggle}
        >
          {children && (
            <ChevronIcon
              className={clsx('w-[5px] h-1.5 mr-2 transition-transform duration-200 shrink-0', {
                'rotate-90': isOpen,
              })}
            />
          )}
          <span>{title}</span>
        </button>
      )}

      {children && (
        <ul
          className={clsx(
            'before:absolute before:left-0.5 before:h-full before:w-px before:bg-gray-90 relative flex flex-col',
            isOpen ? 'h-auto opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none',
          )}
        >
          {children.map((item, index) => (
            <Item
              {...item}
              currentUrl={currentUrl}
              expandedList={expandedList}
              isItemOpen={isOpen}
              key={index}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Item;
