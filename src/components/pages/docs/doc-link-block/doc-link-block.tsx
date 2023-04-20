import Link from '@/components/shared/link';

import BookOpenIcon from '@/svgs/book-open.inline.svg';

interface DocLinkBlockProps {
  url: string;
  title: string;
}

const DocLinkBlock = ({ url, title }: DocLinkBlockProps) => (
  <figure className="not-prose">
    <Link
      additionalClassName="doc-link-block flex border-2 border-gray-90 rounded-[70px] justify-center items-center p-4 leading-none uppercase text-13 font-bold tracking-wide"
      to={url}
    >
      <BookOpenIcon className="mr-2 h-4 w-4" />
      <span>{title}</span>
    </Link>
  </figure>
);

export default DocLinkBlock;
