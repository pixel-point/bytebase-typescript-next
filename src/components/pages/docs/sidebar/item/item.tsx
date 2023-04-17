'use client';

import { useState } from 'react';

import clsx from 'clsx';

import Link from '@/components/shared/link';

import Route from '@/lib/route';

import { SidebarItem } from '../sidebar';

const Item = ({ title, url, children, depth }: SidebarItem) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <li className={clsx('flex flex-col items-start', { 'pl-5': depth === 2, 'pl-4': depth === 3 })}>
      {url ? (
        <Link
          additionalClassName={clsx(
            'text-gray-30 text-15 py-2',
            depth === 1 ? 'font-semibold' : 'font-medium',
          )}
          to={Route.DOCS + url}
          onClick={children ? toggle : undefined}
        >
          {title}
        </Link>
      ) : (
        <button
          className={clsx(
            'text-gray-30 text-15 py-2',
            depth === 1 ? 'font-semibold' : 'font-medium',
          )}
          type="button"
          onClick={children ? toggle : undefined}
        >
          {title}
        </button>
      )}
      {children && (
        <ul
          className={clsx(
            isOpen ? 'h-auto opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none',
          )}
        >
          {children.map((item, index) => (
            <Item {...item} key={index} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Item;
