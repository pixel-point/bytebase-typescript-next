export interface SidebarItem {
  title: string | null;
  url: string | null;
  depth: number;
  children?: SidebarItem[];
}
