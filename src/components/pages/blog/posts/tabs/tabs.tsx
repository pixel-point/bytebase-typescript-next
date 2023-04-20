import clsx from 'clsx';

import Link from '@/components/shared/link';

import ROUTE from '@/lib/route';

export interface TabCategory {
  label: string;
  slug?: string;
}

interface TabsProps {
  items: TabCategory[];
  currentSlug?: string;
}

const tabThemes = {
  explanation: {
    default: 'border-[#D1FAE5] text-[#056049] hover:bg-[#D1FAE5]',
    active: 'bg-[#056049] bg-[#056049]',
  },
  industry: {
    default: 'border-[#FEF6CD] text-[#8A420F] hover:bg-[#FEF6CD]',
    active: 'bg-[#8A420F] border-[#8A420F]',
  },
  announcement: {
    default: 'border-[#E0E7FF] text-[#382E9E] hover:bg-[#E0E7FF]',
    active: 'bg-[#382E9E] border-[#382E9E]',
  },
  engineering: {
    default: 'text-gray-15 border-gray-94 hover:bg-gray-94',
    active: 'bg-gray-15 border-gray-15',
  },
  'how-to': {
    default: 'border-[#F9E8FF] text-[#8E1B98] hover:bg-[#F9E8FF]',
    active: 'bg-[#8E1B98] border-[#8E1B98]',
  },
  'case-study': {
    default: 'border-[#CFFAFE] text-[#176782] hover:bg-[#CFFAFE]',
    active: 'bg-[#176782] border-[#176782]',
  },
};

const getTabStyles = (slug, currentSlug) => {
  if (!slug) {
    if (!currentSlug) return 'bg-black border-black hover:bg-black';
    return 'text-black border-gray-90 hover:bg-gray-90';
  }

  return tabThemes[slug][slug === currentSlug ? 'active' : 'default'];
};

const Tabs = ({ items, currentSlug = '' }: TabsProps) => {
  return (
    <nav className="scrollbar-hidden mt-10 overflow-auto lg:-mx-11 lg:mt-12 lg:px-11 md:-mx-7 md:mt-6 md:px-7 xs:-mx-4 xs:mt-5 xs:px-4">
      <ul className="flex w-max gap-x-4 text-black lg:gap-x-3 md:gap-x-2">
        {items.map(({ label, slug = '' }, index) => (
          <li key={index}>
            <Link
              additionalClassName={clsx(
                getTabStyles(slug, currentSlug),
                slug === currentSlug && 'text-white',
                'block leading-none px-[18px] py-[7px] border-2 text-16 font-medium rounded-full border md:text-14 xs:text-12',
              )}
              to={!slug ? ROUTE.BLOG : `${ROUTE.BLOG_CATEGORY}/${slug}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;