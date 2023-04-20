import { SidebarItem } from '@/types/docs';

import Item from './item';

interface SidebarProps {
  data: SidebarItem[];
  currentUrl: string;
  expandedList: string[];
}

const Sidebar = ({ data, currentUrl, expandedList }: SidebarProps) => (
  <aside className="sidebar col-span-3">
    <nav>
      <ul>
        {data.map((item, index) => (
          <Item {...item} currentUrl={currentUrl} expandedList={expandedList} key={index} />
        ))}
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
