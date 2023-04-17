import Sidebar from '@/components/pages/docs/sidebar';

import { getSidebar } from '@/lib/api-docs';

export default function DocLayout({
  children,
  params: { slug },
}: {
  children: React.ReactNode;
  params: { slug: string[] };
}) {
  const sidebar = getSidebar();

  // console.log(sidebar);

  return (
    <div className="pt-36 container grid grid-cols-12 gap-x-10">
      <Sidebar data={sidebar} />
      {children}
    </div>
  );
}
