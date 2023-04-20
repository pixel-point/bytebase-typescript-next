import clsx from 'clsx';

import { SidebarItem } from '@/types/docs';

import Item from './item';

interface SidebarProps {
  className?: string;
  data: SidebarItem[];
  currentUrl: string;
  expandedList?: string[];
}

const Sidebar = ({ className, data, currentUrl, expandedList }: SidebarProps) => (
  <aside className={clsx('sidebar', className)}>
    <nav className="pl-1.5">
      <ul>
        {data.map((item, index) => (
          <Item {...item} currentUrl={currentUrl} expandedList={expandedList} key={index} />
        ))}
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
