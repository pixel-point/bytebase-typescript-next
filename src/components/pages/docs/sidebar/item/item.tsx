'use client';

import { useRouter } from 'next/navigation';

import { useState } from 'react';

import clsx from 'clsx';

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
}

const Item = ({ title, url, children, depth, currentUrl, expandedList }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(
    isActiveItem(children, currentUrl) || expandedList?.includes(title as string),
  );

  if (!isOpen && isActiveItem(children, currentUrl)) {
    setIsOpen(true);
  }

  const router = useRouter();

  const toggle = () => {
    if (url) {
      router.push(Route.DOCS + url);
    }
    setIsOpen(!isOpen);
  };

  return (
    <li
      className={clsx('flex flex-col items-start', {
        'pl-5': depth === 2,
        'pl-4': depth >= 3,
      })}
    >
      <button
        className={clsx(
          'text-gray-30 text-15 py-2 flex items-center truncate',
          depth === 1 ? 'font-semibold' : 'font-medium',
          url === currentUrl && 'text-primary-1',
        )}
        type="button"
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

      {children && (
        <ul
          className={clsx(
            'before:absolute before:left-0.5 before:h-full before:w-px before:bg-gray-90 relative',
            isOpen ? 'h-auto opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none',
          )}
        >
          {children.map((item, index) => (
            <Item {...item} currentUrl={currentUrl} expandedList={expandedList} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Item;
