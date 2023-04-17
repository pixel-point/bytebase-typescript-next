import Item from './item';

export interface SidebarItem {
  title: string;
  url?: string;
  depth?: number;
  children?: SidebarItem[];
}

interface SidebarProps {
  data: SidebarItem[];
}

const Sidebar = ({ data }: SidebarProps) => (
  <aside className="sidebar col-span-3">
    <nav>
      <ul>
        {data.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
