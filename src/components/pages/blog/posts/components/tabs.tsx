interface TabsProps {
  className?: string;
}

const tabs = [
  { label: 'All Posts' },
  { label: 'Announcement' },
  { label: 'How-To' },
  { label: 'Case Study' },
  { label: 'Announcement' },
  { label: 'Engineering' },
  { label: 'Industry' },
];

const Tabs = ({ className }: TabsProps) => {
  return (
    <div className={className}>
      <ul className="flex gap-x-4">
        {tabs.map((tab, index) => (
          <li key={index}>
            <button className="px-5 py-[9px] text-16 font-medium">{tab.label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
